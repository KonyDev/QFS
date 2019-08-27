define({ 

  //Type your controller code here 
  navigationData:null,
  isFreshForm:true,
  journeyId:null,
  currentAddress:"NA",
  incidentReportTimestamp:null,
  selectedIncidentType:null,
  selectedIncidentTypeId:null,
  onNavigate:function(param){
    debugger;
    try{
      if(typeof param=='object' && param!==null){
        this.isFreshForm=true;
        this.navigationData=param;
      }
    }catch(excp){
      debugger;
    }
  },
  onFormPostShow:function(){
    debugger;
    try{
      if(this.isFreshForm===true){
        this.resetFrom();
        if(typeof this.navigationData=='object' && this.navigationData!==null){
          this.journeyId=this.navigationData[JOURNEY_TBL.ID_PK];
          this.processRecord();
        }
        
      }else{
      }
    }catch(excp){
      debugger;
    }
  },
  onSegIncidentTypeRowCLick:function(){
    debugger;
    try{
      var selectedRowItems=this.view.segIncidentTypes.selectedRowItems;
      if(Array.isArray(selectedRowItems) && selectedRowItems.length>0){
        this.selectedIncidentType=selectedRowItems[0];
        this.selectedIncidentTypeId=this.selectedIncidentType[INCIDENT_TYPE_MASTER_TBL.ID];
        if(typeof this.selectedIncidentTypeId=='string'){
          this.selectedIncidentTypeId=parseInt(this.selectedIncidentTypeId);
        }
        /*if(this.selectedIncidentType[INCIDENT_TYPE_MASTER_TBL.ID]==5){
          this.enableOtherIncidentDetail();
        }else{
          this.disableOtherIncidentDetail();
        }*/
      }
    }catch(excp){
      debugger;
    }
  },
  enableOtherIncidentDetail:function(){
    this.view.flxOtherEmergencyDetails.setVisibility(true);
    this.view.forceLayout();
  },
  disableOtherIncidentDetail:function(){
    this.view.flxOtherEmergencyDetails.setVisibility(false);
    this.view.forceLayout();
  },
  getCurrentAddress:function(){
    try{
      this.getCurrentLocation();
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  processRecord:function(){
    try{
      if(typeof this.navigationData=='object' && this.navigationData!==null){
        var journeyId=this.navigationData[JOURNEY_TBL.ID_PK];
        this.getCurrentAddress();
        this.incidentReportTimestamp=JourneyUtil.getCurrentDateTimeInUTC();
        var currentDateObj=JourneyUtil.getSqlDatetoJSDate(this.incidentReportTimestamp);
        var dateString='';
        dateString=JourneyUtil.getReadableDateString(currentDateObj);
        dateString=dateString+' '+JourneyUtil.getTimeStringIn12HrsFromat(currentDateObj);
        this.view.lblTimeData.text=dateString;
        this.setPassengerList(journeyId);
        this.setJourneyInfo(journeyId);
        this.setIncidentList();
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  setPassengerList:function(journeyId){
    try{
      if (typeof journeyId == 'number' || typeof journeyId=='string'){
        var options={};
        options["whereConditionAsAString"]=PASSENGERS_TBL.JOURNEY_ID_FK+" = "+"'"+journeyId+"'";
        this.fetchRecords(DATA_MODEL.PASSENGERS_TBL, options);
      }else{
        throw {
          message: "journey id not available!"
        }
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  setJourneyInfo:function(journeyId){
    try{
      if(typeof journeyId=='number' ||typeof journeyId=='string'){
        var options={};
        options["whereConditionAsAString"]=JOURNEY_TBL.ID_PK+" = "+"'"+journeyId+"'";
        this.fetchRecords(DATA_MODEL.JOURNEY_TBL, options);
      }else{
        throw {
          message: "journey id not available!"
        }
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  setIncidentList:function(){
    try{
      this.getIncidentList();
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  getIncidentList:function(){
    try{
      var options={};
      this.fetchRecords(DATA_MODEL.INCIDENT_TYPE_MASTER_TBL,null);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  populateIncidentTypeList:function(records){
    try{
      if(Array.isArray(records)){
        var segObj={};
        var segArrayList=[];
        for(var i=0;i<records.length;i++){
          segObj={};
          segObj["radioImage"]="defaultdeselect.png";
          segObj[INCIDENT_TYPE_MASTER_TBL.ID]=records[i][INCIDENT_TYPE_MASTER_TBL.ID];
          segObj["labelData"]=records[i][INCIDENT_TYPE_MASTER_TBL.DESC];
          segArrayList.push(segObj);
        }
        this.view.segIncidentTypes.addAll(segArrayList);
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  setUserDetail:function(userId){
    try{
      var options={};
      options["whereConditionAsAString"]=USER_TBL.USER_EMP_ID_PK+" = "+"'"+userId+"'";
      this.fetchRecords(DATA_MODEL.USER_TBL, options);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  populateJourneyDetail:function(result){
    try{
      if(Array.isArray(result) && result.length>0){
        var userId=result[0][JOURNEY_TBL.USER_EMP_ID_FK];
        this.userId=userId;
        this.setUserDetail(userId);
      }else{
        this.view.lblNameDetails.text="NA";
      }

    }catch(excp){
      debugger;
      throw excp;
    }
  },
  populatePassengerDetails:function(result){
    try{
      if(Array.isArray(result)){
        this.view.lblTravelerDetails.text=""+result.length;
      }else{
        this.view.lblTravelerDetails.text=0;
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  populateUserDetail:function(result){
    try{
      if(Array.isArray(result) && result.length>0){
        this.view.lblNameDetails.text=result[0][USER_TBL.USER_FIRSTNAME]+" "+result[0][USER_TBL.USER_LASTNAME];
      }else{
        this.view.lblNameDetails.text="NA";
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _recordFetchSuccess:function(dataModel,info,result){
    debugger;
    try{
      switch(dataModel){
        case DATA_MODEL.INCIDENT_TYPE_MASTER_TBL:
          this.populateIncidentTypeList(result);
          break;
        case DATA_MODEL.JOURNEY_TBL:
          this.populateJourneyDetail(result);
          break;
        case DATA_MODEL.PASSENGERS_TBL:
          this.populatePassengerDetails(result);
          break;
        case DATA_MODEL.USER_TBL:
          this.populateUserDetail(result);
          break;
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _recordFetchFailure:function(dataModel,result){
    debugger;
  },
  /**
   * @function
   *
   * @param dataModel 
   * @param options 
   */
  fetchRecords:function(dataModel,options,info){
    debugger;
    try{
      if(typeof options!=='object'){
        options=null;
      }
      var knyObject=new kony.sdk.KNYObj(dataModel);
      knyObject.get(options,this._recordFetchSuccess.bind(this,dataModel,info),this._recordFetchFailure.bind(this,dataModel));
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  resetFrom:function(){
    debugger;
    this.view.segIncidentTypes.removeAll();
    this.view.txtBoxEmergencyDesc.text=null;
    this.view.txtBoxAssistanceDesc.text=null;
    this.selectedIncidentTypeId=null;
    //this.view.flxOtherEmergencyDetails.setVisibility(false);
  },
  /**
   * @function
   *
   */
  getCurrentLocation:function(){
    var positionoptions={};
    positionoptions.enableHighAccuracy=true;
    positionoptions.timeout=10000;
    positionoptions.maximumAge=1000;
    try{
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      kony.location.getCurrentPosition(this._geoSuccessCallback.bind(this),this._geoFailureCallback.bind(this),positionoptions);
    }catch(exception){
      kony.application.dismissLoadingScreen();
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _geoSuccessCallback:function(result){
    try{
      debugger;
      kony.application.dismissLoadingScreen();
      if(typeof result==='object' && result!==null){
        if(typeof result["coords"]=='object' && result["coords"]!==null){
          var lat=result.coords.latitude;
          var lon=result.coords.longitude;
          this.getAddressForLatLang(lat,lon);
        }
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _geoFailureCallback:function(result){
    kony.application.dismissLoadingScreen();
    debugger;
    this.view.lblLocationDetails.text="NA";
    this.currentAddress="NA";
  },
  /**
   * @function
   *
   * @param lattitude 
   * @param longitude 
   */
  getAddressForLatLang:function(lattitude,longitude){
    if((typeof lattitude=='string' || typeof lattitude=='number') &&
       (typeof longitude=='string' || typeof longitude=='number')){
      try{
        var inputParam={};
        inputParam["latitude"]=lattitude;
        inputParam["longitude"]=longitude;
        inputParam["key"]=JConstant.GOOGLE_API_KEY;
        var client = kony.sdk.getCurrentInstance();
        var intgService = client.getIntegrationService(JConstant.REVERSE_GEO_INTG_SERVICE.NAME);
        kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        intgService.invokeOperation(JConstant.REVERSE_GEO_INTG_SERVICE.OPERATION,{},
                                    inputParam,this._reverseGeoSuccess.bind(this),
                                    this._reverseGeoFailure.bind(this));
      }catch(excp){
        debugger;
        kony.application.dismissLoadingScreen();
        //throw excp;
      }
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _reverseGeoSuccess:function(result){
    debugger;
    kony.application.dismissLoadingScreen();
    if(typeof result=='object' && result!==null){
      if(Array.isArray(result["results"]) && result["results"].length>0){
        this.currentAddress=result["results"][0]["formatted_address"];
      }else{
        this.currentAddress="NA";
      }
      this.view.lblLocationDetails.text=this.currentAddress;
      // this.updateRecord(checkInObj);
      //this.createCheckInRecord(checkInObj);
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _reverseGeoFailure:function(result){
    debugger;
    kony.application.dismissLoadingScreen();
    this.currentAddress="NA";
    this.view.lblLocationDetails.text=this.currentAddress;
  },
  _notifyAdminSuccess:function(result){
    kony.application.dismissLoadingScreen();
    alert("Admin has been notified!");
    this.navigateToFrmLiveJourney();
    debugger;
  },
  navigateToFrmLiveJourney:function(){
    try{
      var navObj=new kony.mvc.Navigation("BeginJourney/frmLiveJourney");
      navObj.navigate();
    }catch(excp){
      debugger;
    }
  },
  notifyAdmin:function(){
    debugger;
    try{
        var inputParam={};
        var client = kony.sdk.getCurrentInstance();
        var intgService = client.getIntegrationService(JConstant.PUSH_ORCH_SERVICE.NAME);
        kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        intgService.invokeOperation(JConstant.PUSH_ORCH_SERVICE.OPERATION,{},
                                    inputParam,this._notifyAdminSuccess.bind(this),
                                    this._notifyAdminFailure.bind(this));
      }catch(excp){
        debugger;
        kony.application.dismissLoadingScreen();
        //throw excp;
      }
  },
  /**
   * @function
   *
   * @param result 
   */
  _notifyAdminFailure:function(result){
    debugger;
    kony.application.dismissLoadingScreen();
    alert("Unable to notify admin!");
    this.navigateToFrmLiveJourney();
  },
  /**
   * @function
   *
   * @param dataModel 
   * @param record 
   */
  _createRecord: function(dataModel, record) {

    if (typeof dataModel === 'string' && dataModel.length > 0 && typeof record === 'object' && record !== null) {
      try {
        var dataObj = new kony.sdk.KNYObj(dataModel);
        //xyz this.view.loadingScreen.show("Loading..",1);
        dataObj.create(record, {}, this._createRecordSuccess.bind(this, dataModel), this._createRecordFailure.bind(this, dataModel));
      } catch (excp) {
        debugger;
        kony.print("#### Exception occured while creating record: ####" + excp.message);
        throw excp;
      }
    }
  },
  /**
   * @function
   *
   * @param datamodel 
   * @param result 
   */
  _createRecordSuccess:function(datamodel,result){
    debugger;
    try{
      switch(datamodel){
        case DATA_MODEL.INCIDENT_NOTIFICATION_TBL:
          this.startSync();
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param dataModel 
   * @param result 
   */
  _createRecordFailure:function(dataModel,result){
    debugger;
    try{

    }catch(excp){
      debugger;
    }
  },
  startSync:function(){
    debugger;
    var syncOptions={};//"downloadBatchSize":"100",
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
   // syncOptions.GetSyncStats=true;
    try{
      syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
      var syncObjService= new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      syncObjService.startSync(syncOptions,this.syncSuccessCB,this.syncFailureCB,this.progressCB);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  progressCB:function(result){
    debugger;
    kony.print("##########"+result);
  },
  /**
   * @function
   *
   * @param response 
   */
  syncSuccessCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
    try{
      this.notifyAdmin();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param response 
   */
  syncFailureCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
  },












  setData:function(){
    var widgetDataMap = [{labelData:"Accident",radioImage:"defaultdeselect.png"},{labelData:"Vehicle Breakdown",radioImage:"defaultdeselect.png"},
                         {labelData:"Out of Fuel",radioImage:"defaultdeselect.png"},{labelData:"Extreme Weather",radioImage:"defaultdeselect.png"},
                         {labelData:"Theft/Robbery",radioImage:"defaultdeselect.png"},{labelData:"Others",radioImage:"defaultdeselect.png"}];
    this.view.segEmergencyDetails.setData(widgetDataMap);
  },

  sendEmergencyRequest:function(){
    debugger;
    if(JourneyUtil.isNetworkAvailable()===true){
      try
      {
        var emergencyRequestObject=this.getEmergencyObject();
        this._createRecord(DATA_MODEL.INCIDENT_NOTIFICATION_TBL, emergencyRequestObject);
      }catch(excp){
        debugger;
      }
    }else{
      alert("Please be online for submitting incident request!");
    }
  },
  getEmergencyObject:function(){
    var record={};
    try{
      
      record[INCIDENT_NOTIFICATION_TBL.JOURNEY_ID]=parseInt(this.journeyId);
      if(this.selectedIncidentTypeId==null){
        alert("Please select nature of journey!");
        throw {"message":"Nature of journey not available!"};
      }else{
        record[INCIDENT_NOTIFICATION_TBL.TYPE_ID]=this.selectedIncidentTypeId;
      }
      
      if(typeof this.view.txtBoxEmergencyDesc.text=='string'){
        this.view.txtBoxEmergencyDesc.text=(this.view.txtBoxEmergencyDesc.text).trim();
      }
      record[INCIDENT_NOTIFICATION_TBL.INCIDENT_DESCIPTION]=this.view.txtBoxEmergencyDesc.text;
      if(typeof this.view.txtBoxAssistanceDesc.text=='string'){
        this.view.txtBoxAssistanceDesc.text=(this.view.txtBoxAssistanceDesc.text).trim();
      }
      record[INCIDENT_NOTIFICATION_TBL.ASSISTANCE_REQUIRED_DESC]=this.view.txtBoxAssistanceDesc.text;
      
      record[INCIDENT_NOTIFICATION_TBL.STATUS_ID]=1;
      record[INCIDENT_NOTIFICATION_TBL.CREATEDBY_ID]=this.userId;
      record[INCIDENT_NOTIFICATION_TBL.LAST_UPDATED_BY_ID]=this.userId;
    }catch(excp){
      debugger;
      throw excp;
      record=null;
    }
    return record;
  },

  setNetworkStatus:function(){
    var config = {};
    var self=this;
    config.statusChange = function (isOnLine)
    {
      if(isOnLine)
      {
      }
      else
      {
        self.view.customAlertWithContactcheckin.setVisibility(true);
        self.view.customAlertWithContactcheckin.text="Signal Lost";
        self.view.customAlertWithContactcheckin.text1="Contact your Tracking Point by calling via your Satelite Phone.";
        self.view.customAlertWithContactcheckin.text2="Josh Bowers";
        self.view.customAlertWithContactcheckin.text3="011870310493566";
        self.view.customAlertWithContactcheckin.text4="OK";
        this.view.forceLayout();
      }
    };
    kony.net.setNetworkCallbacks(config);
    var isOnLine = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
  },
});