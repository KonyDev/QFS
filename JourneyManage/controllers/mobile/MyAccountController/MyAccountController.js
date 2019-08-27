define({ 
  //Type your controller code here
  globalCountryData:[],
  globalRegionData:[],
  globalLanguageData:[],
  filteredRegions:[],
  customRegionData:[],
  currentSelectedKey:"",
  profileInformationMissing:false,
  userAttribute:null,
  onNavigate:function(context,isBackNavigation){
    debugger;
    if(typeof context=='object' && context!==null){
      try{

        this.userAttribute=context[DATA_MODEL.USER_TBL];
        switch(context.Id)
        {
          case "GuidesAndManuals":
            this.view.flxMyAccount.isVisible = false;
            this.view.flxGuidesManualsContainer.isVisible = true;
            this._fetchRecordsForGuidesAndManuals();
            this.profileInformationMissing=false;
            break;
          case "MyAccount":
            this.view.flxGuidesManualsContainer.isVisible = false;
            this.view.flxMyAccount.isVisible = true;
            this._setDataToMyAccountTab(this.userAttribute);
            this.view.flxCenterText.width = "64%";
            this.view.flxBack.isVisible=true;
            this.view.flxRight.isVisible=true;
            this.view.flxDone.isVisible=false;
            this.view.btnSaveProfile.isVisible=false;
            this.profileInformationMissing=false;
            break;
          case "ProfileInformationMissing":
            this.view.flxGuidesManualsContainer.isVisible = false;
            this.view.flxMyAccount.isVisible = true;
            this._setDataToMyAccountTab(this.userAttribute);
            this.view.flxCenterText.width = "100%";
            this.view.flxBack.isVisible=false;
            this.view.flxRight.isVisible=false;
            this.view.flxDone.isVisible=false;
            this.view.btnSaveProfile.isVisible=true;
            this.profileInformationMissing=true;
            break;
        }
      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   */
  _setDataToMyAccountTab:function(userObj){
    debugger;
    try{
      this.view.TravellerPhone.setText("",true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
      this.view.TravellerSatellite.setText("",true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
      //var strings = UserCredentials.UserFirstName+" "+UserCredentials.UserLastName;
      var firstName=userObj[USER_TBL.USER_FIRSTNAME];
      var lastName=userObj[USER_TBL.USER_LASTNAME];
      var initials = "";
      /*if(strings.split(' ').length>=2){
        initials = initials + strings.split(' ')[0][0];
        initials = initials + strings.split(' ')[1][0];
      }*/
      if(typeof firstName=='string' && firstName.length>0){
        initials=firstName[0].toUpperCase();
      }else{
        firstName="";
      }
      if(typeof lastName=='string' && lastName.length>0){
        initials=initials+lastName[0].toUpperCase();
      }else{
        lastName="";
      }
      this.view.lblUserIcon.text = initials;
      this.view.lblName.text = firstName+" "+lastName;
      var name=firstName+" "+lastName;
      this.view.TravellerName.setText(name,true);
      var userPhone=userObj[USER_TBL.USER_PHONE1];
      var satellite=userObj[USER_TBL.SATELLITE];
      var userRadio=userObj[USER_TBL.RADIO];
      if(typeof userPhone!=='string'){
        userPhone="";
      }
      if(typeof satellite!=='string' && typeof satellite!=='number'){
        satellite='';
      }
      if(typeof userRadio!=='string' && typeof userRadio!=='number'){
        userRadio='';
      }
      this.view.TravellerPhone.setText(userPhone,true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
      this.view.TravellerSatellite.setText(satellite,true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
      this.view.TravellerRadio.setText(userRadio,true);
    }

    //this.view.VehicleMake.text = UserCredentials.UserVehicleMake;
    //this.view.VehicleColor.text = UserCredentials.UserVehicleColor;
    //this.view.VehicleModel.text = UserCredentials.UserVehicleModel;
    //this.view.VehicleRegistrationNo.text = UserCredentials.UserVehicleRegNumber;
    catch(err){
      debugger;
      alert(err.message);
    }
  },
  setDataToSegment:function(data)
  {
    try
    {
      this.view.segGuidesManual.widgetDataMap = {lblPDFurl:"lblPDFurl",lblPDFFilename:"lblPDFFilename"};
      var masterTable=[];
      data.forEach(function(item){
        masterTable.push({lblPDFurl:item.guide_manual_url,lblPDFFilename:item.guide_manual_title});
      });
      this.view.segGuidesManual.setData(masterTable);
    }
    catch(err)
    {
      alert(err.message);
    }
  },
  _fetchRecordsForGuidesAndManuals:function()
  {
    var GuidesAndManualsArray = GetResponseFromDatabaseWhereClause(GUIDES_MANUALS_TBL_GLOBAL, GUIDES_MANUALS_TBL.COUNTRY_ID_FK, 1);
    var GuidesManualsArray = [];
    GuidesAndManualsArray.forEach(function(item){
      if(item.country_id_fk == DefaultUserConstraint.CountryID && item.language_id_fk == DefaultUserConstraint.LanguageID &&
         item.region_id_fk == DefaultUserConstraint.RegionID)
      {
        GuidesManualsArray.push({"country_id_fk":item.country_id_fk,"guide_manual_title":item.guide_manual_title,
                                 "guide_manual_url":item.guide_manual_url,
                                 "guides_manuals_row_id_pk":item.guides_manuals_row_id_pk,
                                 "language_id_fk":item.language_id_fk,"region_id_fk":item.region_id_fk});
      }
    });
    this.setDataToSegment(GuidesManualsArray);

  },

  _invokePDFviewerMethod:function()
  {
    var selectedRow = this.view.segGuidesManual.selectedRowItems[0];
    //     var navObj = new kony.mvcs.Navigation("frmPDFViewer");
    //     var params = {"url":selectedRow.lblPDFurl};
    kony.application.openURL(selectedRow.lblPDFurl)
    //     navObj.navigate(params);
  },

  preshow:function(){
    debugger;
    return;
    this.view.flxRight.setVisibility(true);
    //this.setDefaultValues();
  },

  onEditClick:function(){
    debugger;
    if(!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
    {
      toast("Network Not Available.");
      return;
    }
    this.view.flxRight.setVisibility(false);
    this.view.flxDone.setVisibility(true);
    this.view.TravellerName.setEnabled(false);
    this.view.TravellerPhone.setEnabled(true);
    this.view.TravellerRadio.setEnabled(true);
    this.view.TravellerSatellite.setEnabled(true);
    this.view.userCountry.setEnabled(true);
    this.view.userCountry.setDropDownImage(false);
    this.view.userLanguage.setEnabled(true);
    this.view.userLanguage.setDropDownImage(false);
    this.view.userRegion.setEnabled(true);
    this.view.userRegion.setDropDownImage(false);
  },
  onBtnOkClick:function(){
    debugger;
    this.view.flxRight.setVisibility(true);
    this.view.flxDone.setVisibility(false);
    this.view.TravellerName.setEnabled(false);
    this.view.TravellerPhone.setEnabled(false);
    this.view.TravellerRadio.setEnabled(false);
    this.view.TravellerSatellite.setEnabled(false);
    this.view.userCountry.setEnabled(false);
    this.view.userLanguage.setEnabled(false);
    this.view.userRegion.setEnabled(false);
    this.view.userCountry.setDropDownImage(true);
    this.view.userLanguage.setDropDownImage(true);
    this.view.userRegion.setDropDownImage(true);
    this.updateRecords();

  },
  updateRecords:function(){
    debugger;
    var countryRecord = [];
    var regionRecord=[];
    var languageRecord=[];
    countryRecord = this.view.userCountry.getCurrentSelection();
    regionRecord=this.view.userRegion.getCurrentSelection();
    languageRecord=this.view.userLanguage.getCurrentSelection();
    var countryId = countryRecord[0];
    var regionId = regionRecord[0];
    var languageID = languageRecord[0];
    var recordDataToUpdate={
      "user_phone1":this.view.TravellerPhone.text,
      "user_satellite":this.view.TravellerSatellite.text,
      "user_radio":this.view.TravellerRadio.text,
      "country_id_fk":parseInt(countryId),
      "region_id_fk":parseInt(regionId),
      "language_id_fk":parseInt(languageID),
      "lastupdateddatetime":null
    };
    UpdateRecordWithParams(USER_TBL_GLOBAL,USER_TBL.USER_EMP_ID_PK,UserCredentials.UserEmpId,recordDataToUpdate);
    if(JourneyUtil.isNetworkAvailable()){
      this.startSync();
    }
  },
  setDefaultValues:function(){
    debugger;
    //this.view.TravellerName.setEnabled(false);
    //this.view.TravellerPhone.setEnabled(false);
    //this.view.TravellerRadio.setEnabled(false);
    //this.view.TravellerSatellite.setEnabled(false);
    //this.view.userCountry.setHeaderText("Country");
    //this.view.userCountry.setDropDownImage(true);
    //this.view.userCountry.setEnabled(false);
    //this.view.userLanguage.setHeaderText("Language");
    //this.view.userLanguage.setDropDownImage(true);
    //this.view.userLanguage.setEnabled(false);
    //this.view.userRegion.setHeaderText("Region");
    //this.view.userRegion.setDropDownImage(true);
    //this.view.userRegion.setEnabled(false);
    this.populateDataToListBox();
  },
  populateDataToListBox:function(){
    debugger;
    var userCountryDetails = GetResponseFromDatabaseWhereClause(COUNTRY_MASTER_TBL_GLOBAL,null,null);
    var userRegionDetails = GetResponseFromDatabaseWhereClause(REGION_MASTER_TBL_GLOBAL,null,null);
    var userLanguageDetails = GetResponseFromDatabaseWhereClause(LANGUAGE_MASTER_TBL_GLOBAL,null,null);
    var countriesMasterData=[];
    var regionsMasterData=[];
    var originalRegData=[];
    var languagesMasterData=[];
    var localArr;
    var listArray;
    for(var i=0;i<userCountryDetails.length;i++){
      listArray=[];
      listArray.push(userCountryDetails[i].country_id_pk);
      listArray.push(userCountryDetails[i].country_name);
      countriesMasterData.push(listArray);
    }

    this.globalCountryData=countriesMasterData;
    this.view.userCountry.setMasterData(countriesMasterData);

    for(i=0;i<userRegionDetails.length;i++){
      listArray=[];
      localArr=[];
      listArray.push(userRegionDetails[i].region_id_pk);
      listArray.push(userRegionDetails[i].region_name);

      localArr.push(userRegionDetails[i].country_id_fk);
      localArr.push(listArray);
      originalRegData.push(localArr);
      regionsMasterData.push(listArray);

    }
    this.globalRegionData=originalRegData;
    this.view.userRegion.setMasterData(regionsMasterData);

    for(i=0;i<userLanguageDetails.length;i++){
      listArray=[];
      listArray.push(userLanguageDetails[i].language_id_pk);
      listArray.push(userLanguageDetails[i].language_name);
      languagesMasterData.push(listArray);
    }
    this. globalLanguageData=languagesMasterData;
    this.view.userLanguage.setMasterData(languagesMasterData);
    this.setUserDetails();
  },
  setUserDetails:function(){
    debugger;
    var currentUserID=UserCredentials.UserEmpId;
    var userRegionId="";
    var userCountryId="";
    var userLanguageId="";
    var userDetails=GetResponseFromDatabaseWhereClause(USER_TBL_GLOBAL,null,null);
    for(i=0;i<userDetails.length;i++){
      if(userDetails[i].user_emp_id_pk === currentUserID){
        userRegionId=userDetails[i].region_id_fk;
        userCountryId=userDetails[i].country_id_fk;
        userLanguageId=userDetails[i].language_id_fk;
      }
    }
    for(i=0;i<this.globalCountryData.length;i++){
      if(userCountryId === this.globalCountryData[i][0]){
        this.view.userCountry.setSelectedKey(this.globalCountryData[i][0]);
        this.currentSelectedKey=this.globalCountryData[i][0];
        //this.filteredRegions(this.globalRegionData);
        this.filterRegions(this.globalRegionData,this.currentSelectedKey);
      }
    }

    for(i=0;i<this.globalRegionData.length;i++){
      if(userRegionId === this.globalRegionData[i][0]){
        this.view.userRegion.setSelectedKey(this.globalRegionData[i][0]);
      }
    }

    for(i=0;i<this.globalLanguageData.length;i++){
      if(userLanguageId === this.globalLanguageData[i][0]){
        this.view.userLanguage.setSelectedKey(this.globalLanguageData[i][0]);
      }
    }

    //After data is loaded, enabling the editing by default for First Login Scenario.
    if(this.profileInformationMissing){
      this.onEditClick();
    }
  },
  filterRegions:function(regionsArr,selectedKey){
    debugger;
    var filteredArr=[];
    var  processedData=[];
    for(i=0;i<regionsArr.length;i++){
      if(regionsArr[i][0] == selectedKey){
        var innerArr=[];
        innerArr.push(regionsArr[i][0]);
        innerArr.push(regionsArr[i][1]);
        filteredArr.push(innerArr)

      }
    }

    for(i=0;i<filteredArr.length;i++){
      processedData.push(filteredArr[i][1]);
    }
    this.view.userRegion.setMasterData(processedData);
    this.view.userRegion.setSelectedKey(processedData[0][0]);
  },

  onSelection:function(){
    var selectedIndices=[];
    selectedIndices = this.view.userCountry.getCurrentSelection();
    var selectedCountryIndex=selectedIndices[0];
    this.view.userCountry.text=selectedIndices[1];
    this.filterRegions(this.globalRegionData,selectedCountryIndex);
  },
  startSync:function(){
    debugger;
    var syncOptions={};
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    try{
      syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
      var syncObjService= new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      syncObjService.startSync(syncOptions,this.syncSuccessCB,this.syncFailureCB,this.syncProgressCB);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  syncSuccessCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
    if(this.profileInformationMissing){
      kony.application.showLoadingScreen("Navigating to Journey Dashboard..");
      var navObj = new kony.mvc.Navigation("frmMyJourneys");
      var param={};
      param["prevForm"]="MyAccount";
      param["user"]=this.userAttribute;
      navObj.navigate(param);
    }
  },
  syncProgressCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
  },
  /**
   * @function
   *
   * @param response 
   */
  syncFailureCB:function(response){
    kony.application.dismissLoadingScreen();
    debugger;
  },

  onClickUpdateDetails:function(){
    if(this.view.userCountry.getCurrentSelection()==null){
      alert("Please select a Country from dropdown.");
    }
    else if(this.view.userRegion.getCurrentSelection()==null){
      alert("Please select a Region from dropdown.");
    }
    else if(this.view.userLanguage.getCurrentSelection()==null){
      alert("Please select a Language from dropdown.");
    }
    else{
      kony.print("Saving missing profile information.");
      this.onBtnOkClick();
    }
  }

});