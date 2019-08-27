define({ 

  prevForm:null,
  passengerPrimaryKeys:[],
  journeyPrimaryKey:null,
  userPrimaryKey:null,
  userDetail:null,
  isUpdate:false,
  navigationData:null,
  isFreshForm:true,
  JourneyDetails:{},
  isEditJourneyDetails:{},
  isEdit : false,
  isUpdateJourney:false,
  /**
   * @function
   *
   * @param param 
   */
  onNavigate:function(param){
    debugger;
    this.view.flxBack.isVisible = true;
    this.view.btnNextStep.text = "Next Step";
    //Check if the Edit Button is clicked for the Today or Upcoming Journeys
    try
    {
      if(param!==undefined && param!==null && param.isUpdate && param.isDriver === true&& param.isPassenger===true)
      {
        this.isUpdate = true;
        this.isUpdateJourney = true;
        this.view.lblCenterText.text = "Update Journey";
        this.view.flxBack.isVisible = false;
        this.view.btnNextStep.text = "Done";
        this.view.TravellerName.setEnabled(false);
        this.view.TravellerPhone.setEnabled(false);
        this.view.segPassenger.removeAll();

        var DriverDetailsFromUpdateJourney = param.DriverDetails[0];
        var PassengerDetailsFromUpdateJourney = param.PassengerDetails;

        //Setting the Data into the Fields

        this.view.TravellerName.text = DriverDetailsFromUpdateJourney.user_firstname+" "+DriverDetailsFromUpdateJourney.user_lastname;
        this.view.TravellerPhone.text = DriverDetailsFromUpdateJourney.user_phone1;
        //this.view.TravellerSatellite.text = DriverDetailsFromUpdateJourney.user_satellite;
        //this.view.TravellerRadio.text = DriverDetailsFromUpdateJourney.user_radio;

        //Setting the Passengers into the fields
        if(PassengerDetailsFromUpdateJourney!==null && PassengerDetailsFromUpdateJourney!==undefined && PassengerDetailsFromUpdateJourney.length>0)
        {
          PassengerDetailsFromUpdateJourney.forEach(function(EachPassenger){
            this.addPassenger(EachPassenger.passenger_name, EachPassenger.passenger_mobile); 
          }.bind(this));
        }
      }
      else if(param!==undefined && param!==null && param.isEdit)
      {
        this.isEdit = true;
        //Changing the Header to Update Journey
        this.view.lblCenterText.text = "Update Journey";
        JourneyDetails = JSON.parse(param.data)[0];

        //         alert("JourneyDetails: "+jsons(JourneyDetails));
        var JourneyID = JourneyDetails.journey_uf_id;
        var JourneyIDPK = JourneyDetails.journey_id_pk;
        var SatelliteInfo =JourneyDetails.journey_satellite;
        var RadioInfo = JourneyDetails.journey_radio;
        var UserEmpID = JourneyDetails.user_emp_id_fk;


        this.isEditJourneyDetails['JourneyDetails'] = (JourneyDetails);
        var UserDataForThisJourney = GetResponseFromDatabaseWhereClause(USER_TBL_GLOBAL, "user_emp_id_pk", UserEmpID);
        this.isEditJourneyDetails['UserDetails'] = (UserDataForThisJourney);


        //Getting the Passengers linked to the following JourneyID
        var PassengersDetailsLinkedToThisJourney = GetResponseFromDatabaseWhereClause(JOURNEY_PASSENGERS_TBL_GLOBAL,
                                                                                      "journey_id_fk", JourneyIDPK);
        this.isEditJourneyDetails['PassengersDetails'] = PassengersDetailsLinkedToThisJourney;

        //Setting the Contact Details for the Driver
        this.view.TravellerName.text = UserDataForThisJourney[0].user_firstname+" "+UserDataForThisJourney[0].user_lastname;
        this.view.TravellerPhone.text = UserDataForThisJourney[0].user_phone1;
        //this.view.TravellerSatellite.text = SatelliteInfo;
        //this.view.TravellerRadio.text = RadioInfo;

        //Clear the data in the Passenger Segment before adding the new ones.
        this.view.segPassenger.removeAll();

        //Adding Passengers to the Segment
        if(PassengersDetailsLinkedToThisJourney!==null && PassengersDetailsLinkedToThisJourney!== undefined && PassengersDetailsLinkedToThisJourney.length>0)
        {
          PassengersDetailsLinkedToThisJourney.forEach(function(EachPassenger){
            this.addPassenger(EachPassenger.passenger_name, EachPassenger.passenger_mobile); 
          }.bind(this));
        }

      }
      else
      {
        this.isUpdate = false;
        this.isUpdateJourney = false;
        try{
          if(typeof param=='object' && param!==null){
            this.view.lblCenterText.text = "Create New Journey";
            this.navigationData=param;
            this.isFreshForm=true;
            this.view.segPassenger.removeAll();
          }else{
            this.isFreshForm=false;
          }
        }catch(excp){
        }
      }
    }
    catch(err)
    {
      alert(err.message);
    }


  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    debugger;
    if(this.isFreshForm===true){
      if(typeof this.navigationData=="object" && this.navigationData!==null){
        this.resetFormData();
        this.setCommonData(this.navigationData);
      }
    }

  },
  onProceedClick:function(){
    try{
      var journeyObj=this.getJourneyObj();
      var passangerList;
      var param={};
      passangerList=this.getPassengerList();
      if(this.isUpdate)
      {
        var ParamsToSendTOUpdateJourney = {};
        ParamsToSendTOUpdateJourney['PassengerList'] = passangerList;
        ParamsToSendTOUpdateJourney['JourneyObj'] = journeyObj;

        var navObj = new kony.mvc.Navigation('frmUpdateJourney');
        ParamsToSendTOUpdateJourney.typeOfDataEdit = "DriverPassenger";
        navObj.navigate(ParamsToSendTOUpdateJourney);
      }
      else
      {
        param['isEdit'] = this.isEdit;
        if(this.isEdit)
        {
          param['EditDetails'] = this.isEditJourneyDetails;
          this.isEditJourneyDetails.PassengersDetailsNew = passangerList;
        }
        else
        {

          param["passangerList"]=passangerList;
          param[DATA_MODEL.USER_TBL]=this.navigationData[DATA_MODEL.USER_TBL];
          param["prevForm"]="frmNewJourneyTraveller";
        }
        param["journey"]=journeyObj;
        this.fetchAllExplorationPoints(param);
        //this.navigateToFrmNewJourneyRoute(param);
      }
    }catch(excp){
      alert("excp:: "+jsons(excp));
    }
  },
  getPassengerList:function(){
    try{
      var passangerList=this.view.segPassenger.data;
      passangerList=this.processPassengerList(passangerList);
      return passangerList;
    }catch(excp){
      alert(excp.message);
    }
  },
  /**
   * @function
   *
   * @param recordList 
   */
  processPassengerList:function(recordList){
    try{
      var passangerList=[];
      var passengerObj={};
      if(Array.isArray(recordList)){
        for(var i=0;i<recordList.length;i++){
          passengerObj={};
          if(typeof recordList[i]["txtUserName"]=='string' && typeof recordList[i]["txtUserPhone"]=='string'){
            recordList[i]["txtUserName"]=(recordList[i]["txtUserName"]).trim();
            recordList[i]["txtUserPhone"]=(recordList[i]["txtUserPhone"]).trim();
            if((recordList[i]["txtUserName"]).length>0||(recordList[i]["txtUserPhone"]).length>0){
              passengerObj[PASSENGERS_TBL.PASSENGER_NAME]=recordList[i]["txtUserName"];
              passengerObj[PASSENGERS_TBL.PASSENGER_MOBILE]=recordList[i]["txtUserPhone"];
              passangerList.push(passengerObj);
            }
          }
        }
      }
      return passangerList;
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param param 
   */
  navigateToFrmNewJourneyRoute:function(param){
    debugger;
    try{
      //this.fetchAllExplorationPoints.call(this,param);
      var ntf = new kony.mvc.Navigation("frmNewJourneyRoute");
      ntf.navigate(param);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param param 
   */
  fetchAllExplorationPoints:function(param){
    debugger;
    /**
     * @function
     *
     * @param response 
     */
    function operationSuccess(response){
      debugger;
      var ArrayOfExplorationPoints = JSON.parse(response.response[0].explorationPointInfo).features;
      ExplorationPoints = [];
      ArrayOfExplorationPoints.forEach(function(item){
        ExplorationPoints.push({"Address":item.attributes.Name ,"Lattitude":item.geometry.y, "Longitude":item.geometry.x});
      });
      ExplorationPointsObjectService = ExplorationPoints;
      kony.application.dismissLoadingScreen();
      this.navigateToFrmNewJourneyRoute(param);
      //var ntf = new kony.mvc.Navigation("frmNewJourneyRoute");
      //ntf.navigate(param);
    }
    function operationFailure(res){
      //alert(res);
      debugger;
      kony.application.dismissLoadingScreen();
      this.navigateToFrmNewJourneyRoute();
      //var ntf = new kony.mvc.Navigation("frmNewJourneyRoute");
      //ntf.navigate(param);
    }
    try{
      if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
        serviceName = "NTLMService";
        integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
        operationName =  "getRes";
        data= {};
        headers= {};
        kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        integrationObj.invokeOperation(operationName, headers, data, operationSuccess.bind(this), operationFailure.bind(this));
      }
      else{
        alert("Please check your network connection.");
      }
    }
    catch(err){
      debugger;
      kony.application.dismissLoadingScreen();
      this.navigateToFrmNewJourneyRoute(param);
      //alert(err.message);
      kony.print("Exception occured while fetching exploration points: "+JSON.stringify(err));
    }
  },
  /**
   * @function
   *
   */
  getJourneyObj:function(){
    var JourneyObjUpdate = {};
    //var satellitePhone=this.view.TravellerSatellite.getText();
    var journeyObj={};
    var driverPhone=this.view.TravellerPhone.getText();
    if(typeof driverPhone=='string' || driverPhone=='number'){
      driverPhone=""+driverPhone;
      driverPhone=driverPhone.trim();
      if(driverPhone.length>0){
        journeyObj[JOURNEY_TBL.EMP_PHONE_NUM]=driverPhone;
      }else{
        alert("Please provide Driver Phone Number!");
        throw{
          "message":"Driver phone number is not available"
        }
      }
    }else{
      alert("Please provide Driver Phone Number!");
      throw{
        "message":"Driver phone number is not available"
      }
    }
    /*var satellitePhone=this.view.TravellerSatellite.getText();
    if(typeof satellitePhone=='string'){
      satellitePhone=satellitePhone.trim();
      if(satellitePhone.length>0){
        journeyObj[JOURNEY_TBL.JOURNEY_SATELLITE]=satellitePhone;
      }else{
        alert("Please provide Satellite Phone Number!");
        throw{
          "message":"Sattelite phone number is not available"
        }
      }
    }else{
      alert("Please provide Satellite Phone Number!");
      throw{
        "message":"Sattelite phone number is not available"
      }
    }*/
    //     if(this.isEdit)
    //     {
    //       this.isEditJourneyDetails.JourneyDetails.journey_satellite = satellitePhone;
    //     }
    //     if(this.isUpdate)
    //     {
    //       JourneyObjUpdate.journey_satellite = satellitePhone;
    //     }
    /*var radioNumber=this.view.TravellerRadio.getText();
    if(typeof radioNumber=='string'){
      radioNumber=radioNumber.trim();
      if(radioNumber.length>0){
        journeyObj[JOURNEY_TBL.JOURNEY_RADIO]=radioNumber;
      }else{
        alert("Please provide valid  Radio value!");
        throw{
          "message":"Invalid Radio number provided"
        }
      }
    }else{
      alert("Please provide Radio value!");
      throw{
        "message":"Radio number is not available"
      }
    }*/
    //     if(this.isEdit)
    //     {
    //       this.isEditJourneyDetails.JourneyDetails.journey_radio = radioNumber;
    //     }
    //     if(this.isUpdate)
    //     {
    //       JourneyObjUpdate.journey_radio = radioNumber;
    //     }
    if(this.isUpdate)
    {
      return JourneyObjUpdate;
    }
    if(typeof this.userPrimaryKey=='string' && (this.userPrimaryKey).length>0){

      journeyObj[JOURNEY_TBL.USER_EMP_ID_FK]=this.userPrimaryKey;
    }else{
      throw{
        "message":"User primary key not available"
      }
    }

    return journeyObj;
  },
  /**
   * @function
   *
   * @param param 
   */
  setCommonData:function(param){
    debugger;
    if(typeof param=='object' && param!==null){
      try{
        if(typeof param["prevForm"]=='string'){
          this.prevForm=param["prevForm"];
          this.userDetail=param[DATA_MODEL.USER_TBL];
          if(typeof this.userDetail=='object' && this.userDetail!==null){
            var userName="";
            this.userPrimaryKey=this.userDetail[USER_TBL.USER_EMP_ID_PK];
            if(typeof this.userDetail[USER_TBL.USER_FIRSTNAME]=='string'){
              userName=userName+this.userDetail[USER_TBL.USER_FIRSTNAME];
            }
            if(typeof this.userDetail[USER_TBL.USER_LASTNAME]=='string'){
              userName=userName+" "+this.userDetail[USER_TBL.USER_LASTNAME];
            }
            this.view.TravellerName.setText(userName,false);
            this.view.TravellerPhone.setEnabled(true);
            //this.view.TravellerRadio.setEnabled(true);
            //this.view.TravellerSatellite.setEnabled(true);

          }
        }
      }catch(excp){
        debugger;
      }

    }
  },
  addPassenger:function(PassengerName,PassengerPhone){
    debugger;
    try{
      var rows=this.view.segPassenger.data;
      var passengerTitle="Passenger ";
      var count=0;
      if(Array.isArray(rows)){
        passengerTitle=passengerTitle+(rows.length+1);
        count=rows.length;
      }else{
        passengerTitle=passengerTitle+1;
      }
      var data={
        "imgHorizontalLine":"separator.png",
        "lblPassenger":passengerTitle,
        "imgClose":"crossimageblue.png",

        "lblNameHeader":"Name",
        "txtUserName":PassengerName,
        "lblLine":" ",

        "lblPhoneHeader":"Mobile",
        "txtUserPhone":PassengerPhone,
        "lblLine1":" "
      };
      if(PassengerName!=="" || PassengerPhone!=="")
        this.view.segPassenger.addDataAt(data, count, 0);
      this.view.flxNewJourneyTraveller.scrollToEnd();
    }catch(err){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  onBackButtonClick:function(){
    this.view.flxNewJourneyTraveller.contentOffset={
      "x":"0%",
      "y":"0%"
    }
  },
  removePassenger:function(widgetRef,param){
    debugger;
    if(typeof param=='object' && param!==null){
      if((typeof param["rowIndex"]=='string'||typeof param["rowIndex"]=='number')&&
         (typeof param["sectionIndex"]=='string'||typeof param["sectionIndex"]=='number')){
        this.view.segPassenger.removeAt(param["rowIndex"], param["sectionIndex"]);
      }

    }
  },
  onSegPsngrRowClick:function(){
    debugger;
  },
  /**
   * @function
   *
   */
  resetFormData:function(){
    if(this.isEdit)
    {

    }
    else
    {
      this.view.segPassenger.removeAll();
      this.view.TravellerPhone.setText("",true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
      //this.view.TravellerSatellite.setText("",true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
      //this.view.TravellerRadio.setText("");
    }
  },

});