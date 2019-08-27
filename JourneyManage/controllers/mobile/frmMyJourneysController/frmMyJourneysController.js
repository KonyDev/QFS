define({ 
  ArrayJsonDataJourneys : [],
  dataAsParametertoDetailsScreen:[],
  verticalDottedLine : {text:"|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n"},
  DataMapVehicleIdAndJourneyId : [],
  ExtraDataforVehicleDetails : {},
  JsonNeedData : {},
  userId:null,


  successCBVehicle:function(VehicleDataReponse){
    //We have VehicleID and JourneyID Mapping here.
    //List of Vehicle Details from Vehicle table.
    var VehiclesTable = VehicleDataReponse;
    var tempJsonStoreVehicleDetailsAndJourneyID = {};
    var ArrayofVehicleDetails = [];
    VehiclesTable.forEach(function(EachVehicle){
      tempJsonStoreVehicleDetailsAndJourneyID = {};
      tempJsonStoreVehicleDetailsAndJourneyID['Make'] = EachVehicle.vehicle_make;
      tempJsonStoreVehicleDetailsAndJourneyID['Color'] = EachVehicle.vehicle_color;
      tempJsonStoreVehicleDetailsAndJourneyID['Model'] = EachVehicle.vehicle_model;
      tempJsonStoreVehicleDetailsAndJourneyID['RegNum'] = EachVehicle.vehicle_reg_num;
      tempJsonStoreVehicleDetailsAndJourneyID['VehicleId'] = EachVehicle.vehicle_id_pk;
      ArrayofVehicleDetails.push(tempJsonStoreVehicleDetailsAndJourneyID);
    });

    this.ExtraDataforVehicleDetails["VehicleDetails"] = ArrayofVehicleDetails;
    this.ExtraDataforVehicleDetails["VehicleJourneyMapping"] = this.DataMapVehicleIdAndJourneyId;

    var ArrayOfVehicles = VehicleDataReponse;
    ArrayOfVehicles.forEach(function(EachVehicle){

      //Checking the Vehicle Present for the Particular User.
      if(EachVehicle.user_emp_id_fk == UserCredentials.UserEmpId)
      {
        //Setting the Global Variables.
        UserCredentials.UserVehicleMake = EachVehicle.vehicle_make;
        UserCredentials.UserVehicleModel = EachVehicle.vehicle_model;
        UserCredentials.UserVehicleColor = EachVehicle.vehicle_color;
        UserCredentials.UserVehicleRegNumber = EachVehicle.vehicle_reg_num;
      }
    });
  },
  failureCBVehicle:function(error){
    alert(JSON.stringify(error));
  },

  _fetchRecordsVehicle:function(){
    var categories = new kony.sdk.KNYObj(VEHICLE_TBL_GLOBAL);
    categories.get(null, this.successCBVehicle.bind(this),
                   this.failureCBVehicle.bind(this));
  },
  _InvokeEditFunctionality:function(){
    debugger;
    if(!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
      alert("Please check your network connection!");
      return;
    }
    try{
      debugger;
      this.fetchAllExplorationPoints();
      //var navObj = new kony.mvc.Navigation("frmUpdateJourney");
    }catch(err){
      debugger;
      alert(err.message);
    }
  },
  /**
   * @function
   *
   */
  navigateToUpdateJourney:function(){
    var navObj = new kony.mvc.Navigation("UpdateJourneyGroup/frmUpdateJourney");
    var params = {"isUpdate" : true};
    params[DATA_MODEL.USER_TBL]=this.userDetail;
    try{
      var journeyList = (GetResponseFromDatabaseWhereClause(JOURNEY_TBL_GLOBAL, 'journey_uf_id', this.view.segTodayJourneyDetails.selectedRowItems[0].lblJourneyId));
      if(Array.isArray(journeyList) && journeyList.length>0){
        params[DATA_MODEL.JOURNEY_TBL]=journeyList[0];
        navObj.navigate(params);
      }
    }catch(excp){
      debugger;
    }
  },
  getMonthDateHourMinuteInLocalArray:function(DateString,isGetDateMonth)
  {
    //===============================
    try{
      var dateObj = JourneyUtil.getSqlDatetoJSDate(DateString);
      var dateTimeString=JourneyUtil.getReadableDateString(dateObj)+" "+JourneyUtil.getTimeStringIn12HrsFromat(dateObj);
      return dateTimeString;
    }catch(excp){
      debugger;
      //alert(JSON.stringify(excp));
      //kony.print("Exception occured while converting sql datestring to js date: "+JSON.stringify(excp));
      return "NA";
    }
    //================================

    if(isGetDateMonth)
    {
      var GetDateMonth = new Date(DateString).toLocaleDateString().split('/');    //1st Month    //0th Date
    }
    else
    {
      var GettingDateMonth = new Date(DateString).toDateString().split(' ');    //1st Month    //2nd Date
      var GettingHourMinute = new Date(DateString).toTimeString().split(':');   //0th Hour    //1st Minute    24HourFormat
      if(GettingHourMinute[0]>=12)
      {
        GettingHourMinute[0] = GettingHourMinute[0]-12;
        return GettingDateMonth[2]+" "+GettingDateMonth[1]+" "+GettingHourMinute[0]+":"+GettingHourMinute[1]+"PM";
      }
      return GettingDateMonth[2]+" "+GettingDateMonth[1]+" "+GettingHourMinute[0]+":"+GettingHourMinute[1]+"AM";
    }

  },
  checkLengthOfAddress:function(addressString)
  {
    if(addressString === "" || addressString === null || addressString === undefined)
    {
      return "";
    }
    if(addressString.length>30)
    {
      return addressString.substring(0,30)+"...";
    }
    else
    {
      return addressString;
    }
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    debugger;
    try{
      if(typeof this.userDetail=='object' && this.userDetail!==null){
        this.setSideBarData(this.userDetail);
        this.InitialSelection();
        var userId = this.userDetail[USER_TBL.USER_EMP_ID_PK];
        var options={};
        options["whereConditionAsAString"]=JOURNEY_TBL.USER_EMP_ID_FK+"= '"+userId+"'";	// 2 for any started journey. 
        this._fetchRecords(DATA_MODEL.JOURNEY_TBL,options);
        this.anyUnreadMsg();
      }
    }catch(excp){
      debugger;
      kony.print("Exception occured in onFormPostShow: "+JSON.stringify(excp));
    }
  },
  /**
   * @function
   *
   */
  validateAndNavigateToLiveJourney:function(){
    debugger
    var currentCheckpointRecord=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
    if(typeof currentCheckpointRecord=='object' && currentCheckpointRecord!==null){
      var param={};
      param[DATA_MODEL.CHECKPOINT_TBL]=currentCheckpointRecord;
      navObj=new kony.mvc.Navigation("BeginJourney/frmLiveJourney");
      navObj.navigate(param);
    }else{
      alert("No Journey in Progress!");
    }
  },
  successCB:function(record){
    debugger;
    //return;
    try{
      this.ArrayJsonDataJourneys = [];
      this.DataMapVehicleIdAndJourneyId = [];
      //var DepartureAddressJourney = JOURNEY_TBL.JOURNEY_DEPARTURE_ADDRESS;
      //var ArrivalAddressJourney = JOURNEY_TBL.JOURNEY_ARRIVAL_ADDRESS;
      //JOURNEY_TBL.J
      for(var i=0;i<record.length;i++)
      {
        this.JsonNeedData = {
          "JourneyID": record[i].journey_uf_id,
          "StartTime": (record[i].journey_expected_departure_datetime),
          "ArrivalTime": (record[i].journey_expected_arrival_datetime),
          "UserID": (record[i].user_emp_id_fk),
          "Satellite": (record[i].journey_satellite),
          "Radio": (record[i].journey_radio),
          "VehicleSelectedID": (record[i].journey_selected_vehicle_id_fk),
          "Departure": this.checkLengthOfAddress(record[i].journey_expected_departure_address),
          "ActualDeparture":this.checkLengthOfAddress(record[i].journey_actual_departure_address),
          "Arrival": this.checkLengthOfAddress(record[i].journey_expected_arrivalpoint_address),
          "ActualArrival": this.checkLengthOfAddress(record[i].journey_actual_arrivalpoint_address),
          "JourneyStatus": record[i].journeystatus_code_fk,
          //"JourneyTime": JourneyUtil.getTwoDatesTimeDifference(record[i].journey_expected_arrival_datetime, record[i].journey_expected_departure_datetime),
          //"JourneyTimeActual": JourneyUtil.getTwoDatesTimeDifference(record[i].journey_actual_arrival_datetime, record[i].journey_actual_departure_datetime),
          "CompleteData": record
        };
        this.JsonNeedData["JourneyTime"]=JourneyUtil.getTwoDatesTimeDifference(record[i].journey_expected_arrival_datetime, record[i].journey_expected_departure_datetime);
        this.JsonNeedData["JourneyTimeActual"]= JourneyUtil.getTwoDatesTimeDifference(record[i].journey_actual_arrival_datetime, record[i].journey_actual_departure_datetime);
        debugger;

        this.DataMapVehicleIdAndJourneyId.push({"JourneyId":this.JsonNeedData.JourneyID,"VehicleId":this.JsonNeedData.VehicleSelectedID});
        var oDateOne = new Date(new Date(this.JsonNeedData.StartTime).toDateString());
        var oDateTwo = new Date(new Date().toDateString());

        //Today 0
        if(oDateOne - oDateTwo === 0 && this.JsonNeedData.JourneyStatus == 1)
        {
          this.JsonNeedData["JourneyType"] = 0;
        }

        //Not Started and Past Journeys
        if(oDateOne - oDateTwo < 0 && this.JsonNeedData.JourneyStatus == 1)
        {
          this.JsonNeedData["JourneyType"] = 0;
        }

        //Upcoming 1
        if(oDateOne - oDateTwo > 0 && this.JsonNeedData.JourneyStatus == 1)
        {
          this.JsonNeedData["JourneyType"] = 1;
        }

        //Past 2
        if(this.JsonNeedData.JourneyStatus == 3)
        {
          this.JsonNeedData["JourneyType"] = 2;
        }

        this.JsonNeedData["StartTime"]=this.getMonthDateHourMinuteInLocalArray(record[i].journey_expected_departure_datetime,false);
        this.JsonNeedData["StartTimeActual"]=this.getMonthDateHourMinuteInLocalArray(record[i].journey_actual_departure_datetime,false);
        this.JsonNeedData["ArrivalTimeActual"]=this.getMonthDateHourMinuteInLocalArray(record[i].journey_actual_arrival_datetime,false);
        this.JsonNeedData["ArrivalTime"]=this.getMonthDateHourMinuteInLocalArray(record[i].journey_expected_arrival_datetime,false);
        this.ArrayJsonDataJourneys.push(this.JsonNeedData);
      }
      this._fetchRecordsVehicle();
      this.setData();
    }
    catch(err)
    {
      alert(err.message);
    }
  },
  failureCB:function(error){
    debugger;
    toast("failureCB "+JSON.stringify(error));
    kony.application.dismissLoadingScreen();
  },

  /**
   * @function
   *
   */
  _fetchRecords:function(dataModel,options){
    debugger;
    if( typeof options =='object' && options !==null){

    }else {
      options=null;
    }
    if(typeof dataModel == 'string' && dataModel.length>0){
      var categories = new kony.sdk.KNYObj(JOURNEY_TBL_GLOBAL);
      try{
        categories.get(options, this.successCB.bind(this), this.failureCB.bind(this));
      }catch(excp){
        kony.print("Exception occured while fetching record for data model: "+dataModel);
      }  
    }
  },

  /**
   * @function
   *
   * @param userData 
   */
  setSideBarData:function(userData){
    debugger;
    try{
      if(typeof userData== 'object' && userData!==null){
        //var strings =UserCredentials.UserFirstName+" "+UserCredentials.UserLastName;
        var initials = "";
        var firstName = userData[USER_TBL.USER_FIRSTNAME];
        if(typeof firstName=='string'){
          firstName=firstName.trim();
          if(firstName.length>0){
            initials=firstName[0].toUpperCase();
          }else{
            initials="";
          }
        }else{
          firstName="";
        }
        var lastName= userData[USER_TBL.USER_LASTNAME];
        if(typeof lastName=='string'){
          lastName=lastName.trim();
          if(lastName.length>0){
            initials=initials+lastName[0].toUpperCase();
          }
        }else{
          lastName="";
        }
        this.view.lblUserIcon.text = initials;
        this.view.lblUserName.text = firstName+" "+lastName;
        var email=userData[USER_TBL.USER_EMAIL_ID];
        if(typeof email=="string"){
          email=email.trim();
        }else{
          email="";
        }
        this.view.lblUserEmail.text = email;
      }
    }
    catch(err){
      debugger;
      kony.print("Exception occured while setting the user detail: "+JSON.stringify(err));
    }
  },


  userDetail:null,
  //Type your controller code here 
  onNavigate(context,isBackNavigation){
    debugger;
    try{
      if(typeof context=='object' && context!==null){
        if(typeof context[DATA_MODEL.USER_TBL]=='object' && context[DATA_MODEL.USER_TBL]!==null){
          this.userDetail=context[DATA_MODEL.USER_TBL];
          this.view.segTodayJourneyDetails.removeAll();
          if(typeof this.userDetail == 'object' && this.userDetail!==null){
            this.userId=this.userDetail[USER_TBL.USER_EMP_ID_PK];
          }
        }
      }
      this.view.flxSideBar.isVisible = false;
    }catch(err){
      alert("onNavigate: "+err.message);
    }

  },
  navigateTofrmNewJourneyTraveller:function(){
    debugger;
    if(JourneyUtil.isNetworkAvailable()===true){
      var navObj=new kony.mvc.Navigation("frmNewJourneyTraveller");
      var param={};
      try{
        param["prevForm"]="frmMyJourneys";
        param['isEdit'] = false;
        param[DATA_MODEL.USER_TBL]=this.userDetail;
        navObj.navigate(param);
      }catch(excp){
        debugger;
      }
    }else{
      alert("Please check your network connection!");
    }
  },
  InitialSelection:function(){
    //Set the Tab1 to selected when the form loads.
    try{
      this.view.tab3.skin="tabNonSelected";
      this.view.tab1.skin="tabSelected";
      this.view.tab2.skin="tabNonSelected";
    }catch(err){
      alert(err.message);
    }
  },
  NavigateToBeginJourney:function(eventobject,params){
    debugger;
    try {
      this.checkForJourneyInProgress(this.userId);
    } catch (err) {
      alert(err.message);
    }
  },
  /**
   * @function
   *
   * @param userId 
   */
  checkForJourneyInProgress:function(userId){
    debugger;
    try{
      var options={};
      options["whereConditionAsAString"]=JOURNEY_TBL.USER_EMP_ID_FK+" = '"+userId+"' AND "+
        JOURNEY_TBL.STATUS_CODE_FK+" ='"+2+"'";	// 2 for any started journey. 
      this.fetchRecords(DATA_MODEL.JOURNEY_TBL, options);
    }catch(excp){
      debugger;
    }
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
  _recordFetchSuccess:function(dataModel,info,result){
    debugger;
    try{
      switch(dataModel){
        case DATA_MODEL.JOURNEY_TBL:
          this.processJourney(result);
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
  _recordFetchFailure:function(dataModel,result){
    debugger;
  },
  /**
   * @function
   *
   * @param records 
   */
  processJourney:function(records){
    debugger;
    try{
      //       if(Array.isArray(records) && records.length>0){
      //         alert("Journey "+records[0][JOURNEY_TBL.UF_ID]+" Alredy in progress.");
      //       }else{
      var tempRowDataSegmentToGetJourneyID = (this.view.segTodayJourneyDetails.data[this.view.segTodayJourneyDetails.selectedIndex[1]]).lblJourneyId;
      var parametersToPassToDetailsForm = {
        "data": this.dataAsParametertoDetailsScreen,
        "JourneyId": tempRowDataSegmentToGetJourneyID
      };
      var intJourneyID = parseInt(tempRowDataSegmentToGetJourneyID.replace('JOU-',''))
      var x = new kony.mvc.Navigation("BeginJourney/BeginJourney");
      var param = {};
      param[DATA_MODEL.USER_TBL]=this.userDetail;
      param[JOURNEY_TBL.ID_PK] = intJourneyID;
      x.navigate(param);
      //       }
    }catch(excp){
      debugger;
    }
  },
  changetab1BtnSkins:function(){
    try
    {
      this.view.tab3.skin="tabNonSelected";
      this.view.tab1.skin="tabSelected";
      this.view.tab2.skin="tabNonSelected";
    }
    catch(err)
    {
      alert(err.message);
    }

  },

  changetab2BtnSkins:function(){
    try
    {
      this.view.tab3.skin="tabNonSelected";
      this.view.tab1.skin="tabNonSelected";
      this.view.tab2.skin="tabSelected";
    }
    catch(err)
    {
      alert(err.message);
    }

  },

  changetab3BtnSkins:function(){
    try
    {
      this.view.tab3.skin="tabSelected";
      this.view.tab1.skin="tabNonSelected";
      this.view.tab2.skin="tabNonSelected";
    }
    catch(err)
    {
      alert(err.message);
    }

  },
  custom_sort: function(a, b) {
    return new Date(b.lblStartData).getTime() - new Date(a.lblStartData).getTime();
  },
  setData: function() {
    try {
      var data = [];
      this.dataAsParametertoDetailsScreen = [];
      for (var x = 0; x < this.ArrayJsonDataJourneys.length; x++) {
        if (this.ArrayJsonDataJourneys[x].JourneyType == 0){// && this.ArrayJsonDataJourneys[x].UserID == UserCredentials.UserEmpId) {
          var tempData = {
            "lblFrom": "From",
            "lblStart": "Start",
            "lblTo": "To",
            "lblDot": "......................................",
            "depatureImg": "departurepoint.png",
            "imgDestination": "arrival.png",
            "btnProgress": {
              isVisible: true,
              text: "Approved",
              widgetAlignment: "WIDGET_ALIGN_CENTER",
              padding: [1, 1, 1, 1]
            },
            "lblArrival": "Arrival",
            "btnSeeDetails": {
              isVisible: false,
              text: "Approved",
              top: "30dp"
            },
            "btnEdit": {
              top: "5dp",
              text: "Edit",
              bottom: "30dp"
            },
            "btnBegin": {
              top: "5dp",
              text: "Details",
              bottom: "30dp"
            },
            "locationImg": "departurepoint.png",
            "destIcon": "arrival.png",
            "lblVerticalDottedLine": this.verticalDottedLine.text,
          };
          tempData["lblJourneyId"] = this.ArrayJsonDataJourneys[x].JourneyID;
          tempData["lblJourneyTime"] = this.ArrayJsonDataJourneys[x].JourneyTime + " Hrs";
          tempData["lblStartData"] = this.ArrayJsonDataJourneys[x].StartTime;
          tempData["lblToData"] = this.ArrayJsonDataJourneys[x].Arrival;
          tempData["lblFromData"] = this.ArrayJsonDataJourneys[x].Departure;
          tempData["lblArrivalData"] = this.ArrayJsonDataJourneys[x].ArrivalTime;
          tempData["CompleteData"] = this.ArrayJsonDataJourneys[x].CompleteData;
          data.push(tempData);
        }
      }
      this.dataAsParametertoDetailsScreen = data;
      if (data.length === 0) {
        this.view.flxNewJourney.top = "70%";
        this.view.flxNoDataAvailable.isVisible = true;
      } else {
        this.view.flxNewJourney.top = "5%";
        this.view.flxNoDataAvailable.isVisible = false;
      }
      data.forEach(function(item) {
        item.lblStartData = item.lblStartData.replace('PM', ' PM').replace('AM', ' AM');
      });
      data.sort(this.custom_sort);
      var todaysDate = [];
      data.forEach(function(item) {
        var oDateOne = new Date((new Date(item.lblStartData)).toDateString());
        var oDateTwo = new Date((new Date()).toDateString());
        if (oDateOne - oDateTwo === 0) {
          todaysDate.push(item.lblStartData);
        }
      });
      this.view.segTodayJourneyDetails.setData(data);
    } catch (err) {
      alert("SETDATA: " + err.message);
    }
  },
  setData2:function(){
    try
    {
      var data = [];
      for(var x = 0;x<this.ArrayJsonDataJourneys.length;x++)
      {
        if(this.ArrayJsonDataJourneys[x].JourneyType==1)// && this.ArrayJsonDataJourneys[x].UserID==UserCredentials.UserEmpId)
        {
          var tempData = {"lblFrom":"From",
                          "lblStart":"Start",
                          "lblTo":"To",
                          "lblDot":"......................................",
                          "depatureImg":"departurepoint.png",
                          "imgDestination":"arrival.png",
                          "btnProgress":{isVisible:true, text:"Approved",widgetAlignment :"WIDGET_ALIGN_CENTER",padding:[1,1,1,1]},
                          "lblArrival":"Arrival",
                          "btnSeeDetails":{isVisible:false, text:"Approved",top:"30dp"},
                          "btnEdit":{top:"5dp",text:"Edit",bottom:"30dp"},
                          "btnBegin":{top:"5dp",text:"Details",bottom:"30dp"},
                          "locationImg":"departurepoint.png",
                          "destIcon":"arrival.png",
                          "lblVerticalDottedLine":this.verticalDottedLine.text,
                         };
          tempData["lblJourneyTime"] = this.ArrayJsonDataJourneys[x].JourneyTime+" Hrs";
          tempData["lblJourneyId"] = this.ArrayJsonDataJourneys[x].JourneyID;
          tempData["lblStartData"] = this.ArrayJsonDataJourneys[x].StartTime;
          tempData["lblToData"] = this.ArrayJsonDataJourneys[x].Arrival;
          tempData["lblFromData"] = this.ArrayJsonDataJourneys[x].Departure;
          tempData["lblArrivalData"] = this.ArrayJsonDataJourneys[x].ArrivalTime;
          data.push(tempData);
        }
      }
      if(data.length == 0)
      {
        this.view.flxNewJourney.top = "70%";
        this.view.flxNoDataAvailable.isVisible = true;
      }
      else
      {
        this.view.flxNewJourney.top = "5%";
        this.view.flxNoDataAvailable.isVisible = false;
      }

      this.view.segTodayJourneyDetails.setData(data);
    }
    catch(err)
    {
      alert(err.message);
    }
  },
  setData3:function(){
    try
    {
      var data = [];
      this.dataAsParametertoDetailsScreen=[];
      for(var x = 0;x<this.ArrayJsonDataJourneys.length;x++)
      {
        if(this.ArrayJsonDataJourneys[x].JourneyType==2)// && this.ArrayJsonDataJourneys[x].UserID==UserCredentials.UserEmpId)
        {
          var tempData = {"lblFrom":"From",
                          "lblStart":"Start",
                          "lblTo":"To",
                          "lblDot":"......................................",
                          "depatureImg":"departurepoint.png",
                          "imgDestination":"arrival.png",
                          "btnProgress":{isVisible:false, text:"Approved",widgetAlignment :"WIDGET_ALIGN_CENTER",padding:[1,1,1,1]},
                          "lblArrival":"Arrival",
                          "btnSeeDetails":{isVisible:true,top:"20dp"},
                          "btnEdit":{top:"5dp",text:"Edit",bottom:"30dp",isVisible:false},
                          "btnBegin":{top:"5dp",text:"Details",bottom:"30dp",isVisible:false},
                          "locationImg":"departurepoint.png",
                          "destIcon":"arrival.png",
                          "lblVerticalDottedLine":this.verticalDottedLine.text,
                          "imgVerticalDotsBlue":"verticalthreedotsblue.png",
                         };
          if(this.ArrayJsonDataJourneys[x].JourneyTimeActual === 0)
          {
            tempData["lblJourneyTime"] = "1 Hr";
          }
          else
          {
            tempData["lblJourneyTime"] = this.ArrayJsonDataJourneys[x].JourneyTimeActual + " Hrs";
          }

          tempData["lblJourneyId"] = this.ArrayJsonDataJourneys[x].JourneyID;
          tempData["lblStartData"] = this.ArrayJsonDataJourneys[x].StartTimeActual;
          if(this.ArrayJsonDataJourneys[x].StartTimeActual === undefined)
          {
            this.ArrayJsonDataJourneys[x].StartTimeActual = "No Date Available";
          }
          tempData["lblStartDataActual"] = this.ArrayJsonDataJourneys[x].StartTimeActual;
          if(this.ArrayJsonDataJourneys[x].ArrivalTimeActual === undefined)
          {
            this.ArrayJsonDataJourneys[x].ArrivalTimeActual = "No Date Available";
          }
          tempData["lblArrivalDataActual"] = this.ArrayJsonDataJourneys[x].ArrivalTimeActual;
          if(this.ArrayJsonDataJourneys[x].ActualArrival ==="")
          {
            this.ArrayJsonDataJourneys[x].ActualArrival ="Not Available";
          }
          if(this.ArrayJsonDataJourneys[x].ActualDeparture ==="")
          {
            this.ArrayJsonDataJourneys[x].ActualDeparture ="Not Available";
          }
          tempData["lblToData"] = this.ArrayJsonDataJourneys[x].ActualArrival;
          tempData["lblFromData"] = this.ArrayJsonDataJourneys[x].ActualDeparture;
          tempData["lblArrivalData"] = this.ArrayJsonDataJourneys[x].ArrivalTimeActual;
          tempData["CompleteData"] = this.ArrayJsonDataJourneys[x].CompleteData;
          data.push(tempData);
        }
      }
      this.dataAsParametertoDetailsScreen = data;
      if(data.length === 0)
      {
        this.view.flxNewJourney.top = "70%";
        this.view.flxNoDataAvailable.isVisible = true;
      }
      else
      {
        this.view.flxNewJourney.top = "5%";
        this.view.flxNoDataAvailable.isVisible = false;
      }
      this.view.segTodayJourneyDetails.setData(data);
    }
    catch(err)
    {
      alert(err.message);
    }
  },

  navigateToPastDetailsForm : function(eventobject,params){

    //Temporary storing the journey id for the further data processing.
    try
    {
      var tempRowDataSegmentToGetJourneyID = (this.view.segTodayJourneyDetails.data[this.view.segTodayJourneyDetails.selectedIndex[1]]).lblJourneyId;
      var parametersToPassToDetailsForm = {"data":this.dataAsParametertoDetailsScreen,"JourneyId":tempRowDataSegmentToGetJourneyID,"VehicleDetails":this.ExtraDataforVehicleDetails};
      var x = new kony.mvc.Navigation("frmPastDetails");
      x.navigate(parametersToPassToDetailsForm);
    }
    catch(err)
    {
      alert(err.message);
    }
  },
  navigateToBeginJourney:function(){
    var param={};
    param["user"]=this.userDetail;
    param["journeyId"]=null;
    param[DATA_MODEL.USER_TBL]=this.userId;
    try{
      var navObj=new kony.mvc.Navigation("BeginJourney/frmTemp");
      navObj.navigate(param);
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param param 
   */
  fetchAllExplorationPoints:function(param){
    debugger;
    function operationSuccess(response){
      debugger;
      var ArrayOfExplorationPoints = JSON.parse(response.response[0].explorationPointInfo).features;
      ExplorationPoints = [];
      ArrayOfExplorationPoints.forEach(function(item){
        ExplorationPoints.push({"Address":item.attributes.Name ,"Lattitude":item.geometry.y, "Longitude":item.geometry.x});
      });
      /*ExplorationPoints=ExplorationPoints.sort(function(a,b){
        return a["Address"][0]-b["Address"][0];
      });*/
      ExplorationPointsObjectService = ExplorationPoints;
      this.navigateToUpdateJourney();
      kony.application.dismissLoadingScreen();
    }
    function operationFailure(res){
      debugger;
      alert("Unable to get Exploration points!");
      this.navigateToUpdateJourney();
      kony.application.dismissLoadingScreen();
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
    }catch(err){
      debugger;
      kony.application.dismissLoadingScreen();
      kony.print("Exception occured while fetching exploration points: "+JSON.stringify(err));
    }
  },
  anyUnreadMsg : function(){
    this.view.segReadMessages.removeAll();
    var id = kony.store.getItem("registeredId");
    kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("GetDataForMessage");
    var operationName = "getMessage";
    var param = {"ksid": ""+id};
    var headers = {};
    integrationObj.invokeOperation(operationName, headers, param, this.anyUnreadMsgSuccess.bind(this), this.anyUnreadMsgFailure.bind(this));
  },
  anyUnreadMsgSuccess : function(response){
    kony.application.dismissLoadingScreen();
    for(var i=0;i<response.messages.length;i++){
      if(response.messages[i].status !== "Opened"){  
        this.view.lblNotify.isVisible = true;
        this.view.imgMsg.src = "unmessage.png";
      }
    }
  },
  anyUnreadMsgFailure : function(err){
    kony.application.dismissLoadingScreen();
    alert(JSON.stringify(err));
  },
  showAllMessages : function(){
    this.view.segReadMessages.removeAll();
    var id = kony.store.getItem("registeredId");
    kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("GetDataForMessage");
    var operationName = "getMessage";
    var param = {"ksid": ""+id};
    var headers = {};
    integrationObj.invokeOperation(operationName, headers, param, this.showAllMessagesSuccess.bind(this), this.showAllMessagesFailure.bind(this));
  },
  showAllMessagesSuccess : function(response){
    kony.application.dismissLoadingScreen();
    this.view.flxSideBar.isVisible = false;
    this.view.flxScrollReadMessages.isVisible = true;
    this.view.flxScrollReadMessages.zIndex = 2;
    this.view.flxHamburger.isVisible = false;
    this.view.flxBack.isVisible = true;
    var data = [];
    for(var i=0;i<response.messages.length;i++){
      if(response.messages[i].status !== "Opened"){
        var unreadRow = {lblMessageFrom : {skin:"konyqfsSknLblMessage",text:"Admin"},flxMain:{skin:"konyqfsSknFlxMain"},
                         lblMessageTime : {skin:"konyqfsSknLblMsgTime",text:response.messages[i].lastUpdatedDate}, 
                         lblMessageDetails : {skin:"konyqfsSknMsgDetails",text:response.messages[i].content},lblEmpName : {text:"AD"},
                         lblDummy : {text:response.messages[i].fetchId}
                        };
        data.push(unreadRow);  
      }
      else{
        var readRow = {lblMessageFrom : {skin:"konyqfsSknLblDummy",text:"Admin"},flxMain:{skin:"konyqfsSknflxDummy"},
                       lblMessageTime : {skin:"konyqfsSknlblDummy2",text:response.messages[i].lastUpdatedDate}, 
                       lblMessageDetails : {skin:"konyqfsSknLblDummy3",text:response.messages[i].content},lblEmpName : {text:"AD"},
                       lblDummy : {text:response.messages[i].fetchId}
                      };
        data.push(readRow); 
      }     
    }
    this.view.segReadMessages.setData(data);
    this.view.segReadMessages.isVisible = true;
  },
  showAllMessagesFailure : function(err){
    kony.application.dismissLoadingScreen();
    alert(JSON.stringify(err));
  },
  showMessages : function(index){
    var segData = this.view.segReadMessages.data;
    var selectedData = segData[index];
    var pushID = selectedData.lblDummy.text;
    kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("GetDataForMessage");
    var operationName = "updateStatus";
    var param = {"pushId": ""+pushID};
    var headers = {};
    integrationObj.invokeOperation(operationName, headers, param, this.showMessagesSuccess.bind(this,index), this.showMessagesFailure.bind(this));
  },
  showMessagesSuccess : function(index, response){
    kony.application.dismissLoadingScreen();
    var segData = this.view.segReadMessages.data;
    var selectedData = segData[index];
    var updateRow = {lblMessageFrom : {skin:"konyqfsSknLblDummy",text:"ADMIN"},flxMain:{skin:"konyqfsSknflxDummy"},
                     lblMessageTime : {skin:"konyqfsSknlblDummy2",text:selectedData.lblMessageTime.text}, 
                     lblMessageDetails : {skin:"konyqfsSknLblDummy3",text:selectedData.lblMessageDetails.text},lblEmpName : {text:"AD"},
                     lblDummy : {text:selectedData.lblDummy.text}
                    };
    this.view.segReadMessages.setDataAt(updateRow, index);
    this.view.segReadMessages.isVisible = false;
    this.view.lblMessageTime.text = selectedData.lblMessageTime.text;
    this.view.lblMessageDetails.text = selectedData.lblMessageDetails.text;
    this.view.flxFullMessageContent.isVisible = true;
  },
  showMessagesFailure : function(err){
    kony.application.dismissLoadingScreen();
    alert(JSON.stringify(err));
  },
  onClickOfHamburgerMenu : function(){
    if(this.view.flxSideBar.isVisible == false)
    {
      this.view.flxSideBar.isVisible = true;
    }

  },
  onClickOfBack : function(){
    if(this.view.segReadMessages.isVisible){
      this.view.flxScrollReadMessages.isVisible = false;
      this.view.flxBack.isVisible = false;
      this.view.flxHamburger.isVisible = true;
      this.view.flxSideBar.isVisible = false;
      this.view.lblNotify.isVisible = false;
      this.view.imgMsg.src = "messages.png";
      this.anyUnreadMsg();
    }
    else{
      this.view.flxFullMessageContent.isVisible = false;
      this.view.flxScrollReadMessages.isVisible = true;
      this.view.segReadMessages.isVisible = true;
    }
  }
});