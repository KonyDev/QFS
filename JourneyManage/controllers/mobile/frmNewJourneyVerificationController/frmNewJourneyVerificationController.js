define({ 

  //Type your controller code here 
  navigationData:null,
  isFreshForm:true,
  isEdit:false,
  isEditDetails:{},
  passengerList:null,
  value:0,
  journeyId:null,
  /**
   * @function
   *
   */

  //ArrayofWantedFieldsName: All the key pairs that user wants in the JsonObject
  //JsonObject
  returnWantedFieldsFromJson:function(ArrayofWantedFieldsName,JsonObject){
    ArrayofWantedFieldsName.forEach(function(eachItem) {
      try {
        delete JsonObject[eachItem];
      } catch (err) {}
    });
    return JsonObject;
  },

  updateJourney:function()
  {
    debugger;
    var ArrayofPassengerObj = this.isEditDetails.PassengersDetails;
    var ArrayofPassengerObjNew = this.isEditDetails.PassengersDetailsNew;
    var UpdatedJourneyDetails = this.isEditDetails.JourneyDetails;

    var toSendUpdate  = {
      "checkin_interval_row_id_fk" : UpdatedJourneyDetails.checkin_interval_row_id_fk,
      "checkin_type_id_fk" : UpdatedJourneyDetails.checkin_type_id_fk,
      "journey_actual_arrival_datetime" : UpdatedJourneyDetails.journey_actual_arrival_datetime,
      "journey_actual_arrivalpoint_address" : UpdatedJourneyDetails.journey_actual_arrivalpoint_address,
      "journey_actual_arrivalpoint_lat" : UpdatedJourneyDetails.journey_actual_arrivalpoint_lat,
      "journey_actual_arrivalpoint_lon" : UpdatedJourneyDetails.journey_actual_arrivalpoint_lon,
      "journey_actual_departure_address" : UpdatedJourneyDetails.journey_actual_departure_address,
      "journey_actual_departure_datetime" : UpdatedJourneyDetails.journey_actual_departure_datetime,
      "journey_actual_departure_lat" : UpdatedJourneyDetails.journey_actual_departure_lat,
      "journey_actual_departure_lon" : UpdatedJourneyDetails.journey_actual_departure_lon,
      "journey_created_by_fk" : UpdatedJourneyDetails.journey_created_by_fk,
      "journey_emp_phone_num" : UpdatedJourneyDetails.journey_emp_phone_num,
      "journey_expected_arrival_datetime" : UpdatedJourneyDetails.journey_expected_arrival_datetime,
      "journey_expected_arrivalpoint_address" : UpdatedJourneyDetails.journey_expected_arrivalpoint_address,
      "journey_expected_departure_address" : UpdatedJourneyDetails.journey_expected_departure_address,
      "journey_expected_departure_datetime" : UpdatedJourneyDetails.journey_expected_departure_datetime,
      "journey_last_updated_by" : UpdatedJourneyDetails.journey_last_updated_by,
      "journey_onward_journey_id" : UpdatedJourneyDetails.journey_onward_journey_id,
      "journey_radio" : UpdatedJourneyDetails.journey_radio,
      "journey_reason_id_fk" : UpdatedJourneyDetails.journey_reason_id_fk,
      "journey_satellite" : UpdatedJourneyDetails.journey_satellite,
      "journey_selected_vehicle_id_fk" : UpdatedJourneyDetails.journey_selected_vehicle_id_fk,
      "journey_supervisor_camp_room_num" : UpdatedJourneyDetails.journey_supervisor_camp_room_num,
      "journey_supervisor_emp_id" : UpdatedJourneyDetails.journey_supervisor_emp_id,
      "journey_supervisor_name" : UpdatedJourneyDetails.journey_supervisor_name,
      "journey_supervisor_phone" : UpdatedJourneyDetails.journey_supervisor_phone,
      "journey_tracking_point_id_fk" : UpdatedJourneyDetails.journey_tracking_point_id_fk,
      "journey_uf_id" : UpdatedJourneyDetails.journey_uf_id,
      "journeystatus_code_fk" : UpdatedJourneyDetails.journeystatus_code_fk,
      "user_emp_id_fk" : UpdatedJourneyDetails.user_emp_id_fk,
      "journey_expected_arrivalpoint_lat" : ""+UpdatedJourneyDetails.journey_expected_arrivalpoint_lat,
      "journey_expected_arrivalpoint_lon" : ""+UpdatedJourneyDetails.journey_expected_arrivalpoint_lon,    
      "journey_expected_departure_lat" : ""+UpdatedJourneyDetails.journey_expected_departure_lat,
      "journey_expected_departure_lon" : ""+UpdatedJourneyDetails.journey_expected_departure_lon,
      "lastupdateddatetime":null
    };
    try{
      UpdateRecordWithParams(JOURNEY_TBL_GLOBAL, JOURNEY_TBL.ID_PK, UpdatedJourneyDetails[JOURNEY_TBL.ID_PK], toSendUpdate);
    }
    catch(err)
    {
      alert("Error in the Update Journey Table: "+err.message);
    }
    debugger;
    //Updating the Passengers for the Journey
    if((ArrayofPassengerObj !== null && ArrayofPassengerObj !== undefined && ArrayofPassengerObj.length!==0) || 
       ArrayofPassengerObjNew !== null && ArrayofPassengerObjNew !== undefined && ArrayofPassengerObjNew.length!==0)
    {
      ArrayofPassengerObj.forEach(function(EachPassenger){
        try
        {
          DeleteRowByPrimaryKey(JOURNEY_PASSENGERS_TBL_GLOBAL, 
                                JOURNEY_PASSENGERS_TABLE.ROW_ID_PK,
                                EachPassenger[JOURNEY_PASSENGERS_TABLE.ROW_ID_PK]);
        }
        catch(err)
        {
          alert("Error :: DeleteRobtwByPrimaryKey");

        }
      }.bind(this));
      ArrayofPassengerObjNew.forEach(function(EachPassenger){
        try
        {
          EachPassenger[JOURNEY_PASSENGERS_TABLE.JOURNEY_ID_FK] = UpdatedJourneyDetails[JOURNEY_TBL.ID_PK];
          AddNewRowIntoTable(JOURNEY_PASSENGERS_TBL_GLOBAL, EachPassenger);
        }
        catch(err)
        {
          alert("Error :: AddNewRowIntoTable");
        }
      }.bind(this));

    }
    //Syncing the PassengerTable
    try
    {
      this.value=0;
      this.startSyncUpdate(JOURNEY_TBL_GLOBAL);
      this.startSyncUpdate(JOURNEY_PASSENGERS_TBL_GLOBAL);
    }
    catch(err)
    {
      alert("Error in the UpdateSync");
    }
  },
  /**
   * @function
   *
   * @param param 
   */
  onNavigate:function(param){
    debugger;
    if(typeof param=='object' && param!==null && param.isEdit){
      this.isEditDetails = param.JourneyDetails;
      alert("this.isEdtiDetails: "+jsons(this.isEditDetails));


      //SEtting the Drivename
      this.view.lblDriverName.text = this.isEditDetails.UserDetails[0].user_firstname+" "+this.isEditDetails.UserDetails[0].user_lastname;

      //Setting the Passenger
      if(this.isEditDetails!==null && this.isEditDetails!==undefined && this.isEditDetails.PassengersDetailsNew.length > 0)
      {
        this.view.lblPassengerName.text = this.isEditDetails.PassengersDetailsNew[0].passenger_name;
      }

      //Setting the Tracking point
      try
      {
        var TrackingPointDetails = GetResponseFromDatabaseWhereClause(TRACKING_POINTS_TBL_GLOBAL, 
                                                                      TRACKING_POINTS_TBL.TRACKING_POINT_ID, 
                                                                      this.isEditDetails.JourneyDetails.journey_tracking_point_id_fk);
        this.view.lblTrackingPointName.text = TrackingPointDetails[0].tracking_point_address;
        this.view.lblTrackingPointPhone.text  = TrackingPointDetails[0].tracking_point_phone_1;
      }
      catch(err)
      {
        alert(err.message);
      }


      //Setting the Vehicle Details
      try
      {
        var VehicleDetails = GetResponseFromDatabaseWhereClause(VEHICLE_TBL_GLOBAL, 
                                                                VEHICLE_TBL.VEHICLE_ID_PK, 
                                                                this.isEditDetails.JourneyDetails.journey_selected_vehicle_id_fk);
        this.view.lblVehicleName.text = VehicleDetails[0].vehicle_make+" "+VehicleDetails[0].vehicle_model;
        this.view.lblVehicleColor.text = VehicleDetails[0].vehicle_color;
        this.view.lblVehicleRegistrationNumber.text = VehicleDetails[0].vehicle_reg_num;

      }
      catch(err)
      {
        alert(err.message);
      }


      this.view.lblSupervisiorName.text = this.isEditDetails.JourneyDetails.journey_supervisor_name;
      this.view.lblSupervisiorPhone.text = this.isEditDetails.JourneyDetails.journey_supervisor_phone;

      this.view.btnCreateJourney.onClick = this.updateJourney;
      this.view.btnCreateJourney.text = "Update Journey";
      this.view.lblCenterText.text = "Update Journey";
    }
    else
    {
      this.view.btnCreateJourney.onClick = this.createJourneyOnline;
      this.view.btnCreateJourney.text = "Create New Journey";
      this.view.lblCenterText.text = "Create New Journey";
    }
    if(typeof param=='object' && param!==null){
      this.navigationData=param;
      this.isFreshForm=true;
    }else{
      this.isFreshForm=false;
    }
  },
  /**
   * @function
   *
   */
  onFormPostshow:function(){
    debugger;
    if(this.isFreshForm===true){
      if(typeof this.navigationData=='object' && this.navigationData!==null){
        try{
          var journey=this.navigationData["journey"];
          var passengerList=this.navigationData["passengerList"];
          this.passengerList=passengerList;
          var user=this.navigationData[DATA_MODEL.USER_TBL];
          this.view.lblDepartureAddress.text=journey[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS];
          this.view.lblArrivalAddress.text=journey[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS];
          //this.view.lblArrivalDateTime.text=DateConversion(new Date(journey[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]));
          //this.view.lblDepartureDateTime.text=DateConversion(new Date(journey[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]));
          try{
            var departureDateObj=JourneyUtil.getSqlDatetoJSDate(journey[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]);
            var departureDateString=JourneyUtil.getReadableDateString(departureDateObj);
            var departureTimeString=JourneyUtil.getTimeStringIn12HrsFromat(departureDateObj);
            this.view.lblDepartureDateTime.text=departureDateString+" "+departureTimeString;
          }catch(excp){
            debugger;
          }
          try{
            var arrivalDateObj=JourneyUtil.getSqlDatetoJSDate(journey[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
            var  arrivalDateString=JourneyUtil.getReadableDateString(arrivalDateObj);
            var  arrivalTimeString=JourneyUtil.getTimeStringIn12HrsFromat(arrivalDateObj);
            this.view.lblArrivalDateTime.text=arrivalDateString+" "+arrivalTimeString;
          }catch(excp){
            debugger;
          }

          var firstName=user[USER_TBL.USER_FIRSTNAME];
          if(typeof firstName === 'string'){
            firstName=firstName.trim();
          }else{
            firstName="";
          }
          var lastName = user[USER_TBL.USER_LASTNAME];
          if(typeof lastName === 'string'){
            lastName =  lastName.trim();
          }else{
            lastName = "";
          }
          this.view.lblDriverName.text=firstName +" "+lastName;
          if(Array.isArray(passengerList) && passengerList.length>0){
            this.view.lblPassengerName.text=passengerList[0]["passenger_name"];
          }else{
            this.view.lblPassengerName.text="NA";
          }
          this.view.lblTrackingPointName.text=journey[JOURNEY_TBL.JOURNEY_TRACKINGPOINT_NAME];
          this.view.lblSupervisiorName.text=journey[JOURNEY_TBL.SUPERVISOR_NAME];
          this.view.lblSupervisiorPhone.text=journey[JOURNEY_TBL.SUPERVISOR_PHONE];
          this.setTrackingPointInfo(journey[JOURNEY_TBL.TRACKING_POINT_ID_FK]);
          this.setJourneyVehicle(journey[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK])
        }catch(excp){
          debugger;
        }


      }
    }
  },
  /**
   * @function
   *
   */
  createJourneyOnline:function()
  {
    //this.createRecords();
    //return;
    if(JourneyUtil.isNetworkAvailable()===true){

      try
      {
        //this.navigationData["journey"].journey_expected_departure_datetime = new Date(this.navigationData["journey"].journey_expected_departure_datetime)
        //this.navigationData["journey"].journey_expected_arrival_datetime  = new Date(this.navigationData["journey"].journey_expected_arrival_datetime )
        this.createRecord_online(DATA_MODEL.JOURNEY_TBL,this.navigationData["journey"]);
      }
      catch(err)
      {
        if(err.opstatus==17005)
        {
          alert("Please try again, if issue persists, please logout and retry.");
        }
        else
        {
          alert("Error of the createJourneyOnline: "+err.message);
        }
      }
    }else{
      alert("Please be online for creating a journey!");
    }

  },
  createRecord_online:function(dataModel,record){
    try{
      // record["journey_id_pk"]="ABC";
      /*var objSvc = kony.sdk.getCurrentInstance().getObjectService(JConstant.OFFLINE_OBJECT_SERVICE, {
        // "access": TYPEOFOBJECTSERVICE
        "access": "online"
      });*/
      var sdkClient = new kony.sdk.getCurrentInstance();
      var objSvc = sdkClient.getObjectService(JConstant.OFFLINE_OBJECT_SERVICE, {
        "access": "online"
      });
      var dataObject = new kony.sdk.dto.DataObject(dataModel);
      var options = {
        "dataObject": dataObject,
        "headers":{}
      }; 
      dataObject.setRecord(record);
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      objSvc.create(options,
                    this.createRecordSuccess.bind(this,dataModel),
                    this.createRecordailure.bind(this,dataModel)); 
    }catch(excp){
      alert(excp.error);
      kony.application.dismissLoadingScreen();
    }
  },
  /**
   * @function
   *
   */
  createRecordSuccess:function(dataModel,result){
    debugger;
    try{
      kony.application.dismissLoadingScreen();
      switch(dataModel){
        case DATA_MODEL.JOURNEY_TBL:
          this.journeyId=result[JOURNEY_TBL.ID_PK];
          //this.updateJourneyRecord(result);
          this.createPassengerList(result[JOURNEY_TBL.ID_PK], this.passengerList);
          break;
        case DATA_MODEL.PASSENGERS_TBL:
          this.doSync();
          //var navObj=new kony.mvc.Navigation("frmCreateJourney");
          //navObj.navigate(this.navigationData);
          break;
      }
      return;

    }catch(excp){
      alert(excp.error);
      debugger;
    }

  },
  /**
   * @function
   *
   * @param result 
   */
  createRecordailure:function(passengerList,result){
    //alert(result);
    if(result.opstatus==17005)
    {
      alert("Please try again, if issue persists, please logout and retry.");
    }
    kony.application.dismissLoadingScreen();
    debugger;
  },
  updateJourneyRecord:function(result){
    try{
      if(typeof result=='object' && result!==null){
        var journeyId=result[JOURNEY_TBL.ID_PK];
        this.navigationData["journey"][JOURNEY_TBL.ID_PK]=journeyId;
      }
    }catch(excp){
      debugger;
    }

  },
  createPassengerList:function(journeyId,passengerList){
    if(Array.isArray(passengerList) && passengerList.length>0){
      for(var i=0;i<passengerList.length;i++){
        passengerList[i][PASSENGERS_TBL.JOURNEY_ID_FK]=journeyId;
      }
      var passengerRecords={};
      passengerRecords["records"]=passengerList;
      this.createRecord_online(DATA_MODEL.PASSENGERS_TBL, passengerRecords);
    }else{
      this.doSync();
      //var navObj=new kony.mvc.Navigation("frmCreateJourney");
      //navObj.navigate(this.navigationData);
    }
  },
  /**
   * @function
   *
   */
  createRecords:function(){
    try{
      if(JourneyUtil.isNetworkAvailable()===true){
        if(typeof this.navigationData=='object' && this.navigationData!==null){
          var journeyObj=this.navigationData["journey"];
          var passengerList=this.navigationData["passengerList"];
          this.createJourney(journeyObj);
        }
      }else{
        alert("Network should available for creation of journey!");
      }
    }catch(excp){
      debugger;
    }

  },
  /**
   * @function
   *
   */
  createJourney:function(journeyObj){
    if(JourneyUtil.isNetworkAvailable()===true){
      this._createRecord(DATA_MODEL.JOURNEY_TBL, journeyObj);
    }
  },
  /**
   * @function
   *
   */
  createPassenger:function(journeyId){
    try {
      if (typeof journeyId == 'number' && typeof this.navigationData === 'object' && this.navigationData !== null) {
        var passengerList = this.navigationData["passengerList"];
        if (Array.isArray(passengerList) && passengerList.length>0) {
          var passenger;
          for (var i = 0; i < passengerList.length; i++) {
            passenger = passengerList[i];
            passenger[PASSENGERS_TBL.JOURNEY_ID_FK] = journeyId;
            this._createRecord(DATA_MODEL.PASSENGERS_TBL, passenger, i, passengerList.length);
          }
        }else{
          this.doSync();
        }
      }
    } catch (excp) {
      debugger;
    }

  },
  _createSuccess: function(dataModel,index,length, response) {
    debugger;
    switch (dataModel) {
      case DATA_MODEL.PASSENGERS_TBL:
        if(typeof index=='number' && typeof length=='number'){
          if(index+1===length){
            this.doSync();
          }
        }
        break;
      case DATA_MODEL.JOURNEY_TBL:
        if (typeof response === 'object' && response !== null) {
          this.journeyPrimaryKey =response[JOURNEY_TBL.ID_PK];
          var journeyObj=this.navigationData["journey"];
          journeyObj[JOURNEY_TBL.ID_PK]=response[JOURNEY_TBL.ID_PK];
          this.createPassenger(response["journey_id_pk"]);
        }
        //this.startSync();
        break;
    }
  },
  _createRecord: function(dataModel, record,index,length) {
    try
    {
      delete record.journey_id_pk;
    }
    catch(er)
    {
      alert(er.message);
    }
    if (typeof dataModel === 'string' && dataModel.length > 0 && 
        typeof record === 'object' && record !== null) {
      try {
        var dataObj = new kony.sdk.KNYObj(dataModel);
        dataObj.create(record, {}, this._createSuccess.bind(this,dataModel,index,length), this._createFailure.bind(this, dataModel));
      }catch (excp) {
        debugger;
        kony.print("#### Exception occured while creating record: ####" + excp.message);
        throw excp;
      }
    }
  },
  _createFailure: function(dataModel, response) {
    debugger;
    switch (dataModel) {
      case DATA_MODEL.USER_TBL:
        break;
    }
  },
  /**
   * @function
   *
   */
  doSync:function(){
    if(JourneyUtil.isNetworkAvailable()===true){
      try{
        var syncOptions={};
        syncOptions.uploadBatchSize=1;
        syncOptions.downloadBatchSize=1;
        //syncOptions.getSyncStats = "true";
        var syncObjService=new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
        syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
        kony.application.showLoadingScreen("","Creating Journey..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        syncObjService.startSync(syncOptions,this.doSyncSuccess.bind(this),this.failureCB,this.progressCB);

      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  doSyncSuccess:function(result){
    debugger;
    try{
      kony.application.dismissLoadingScreen();
      var options={};
      options["whereConditionAsAString"]=JOURNEY_TBL.ID_PK+" ='"+this.journeyId+"'";
      this.fetchRecords(DATA_MODEL.JOURNEY_TBL, options);
    }catch(excp){
      alert(excp.error);
      debugger;
    }
  },
  navigateToFrmCreateJourney:function(){
    try{
      var navObj=new kony.mvc.Navigation("frmCreateJourney");
      navObj.navigate(this.navigationData);
    }catch(excp){
      debugger;
    }

  },
  /**
   * @function
   *
   */
  startSync:function(datamodel){
    debugger;
    var syncOptions={};
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    try{
      var syncObjService=new kony.sdk.KNYObj(datamodel);
      var filter=kony.store.getItem("SYNC_FILTER");
      if(typeof filter == 'object' && filter!==null)
        syncOptions["filter"]=filter[datamodel];
      //syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
      kony.application.showLoadingScreen("","Initializing",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      syncObjService.startSync(syncOptions,this.successCB.bind(this,datamodel),this.failureCB,this.progressCB);
    }catch(excp){
      debugger;
      kony.application.dismissLoadingScreen();
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  successCB:function(datamodel,result){
    debugger;
    kony.application.dismissLoadingScreen();
    switch(datamodel){
      case DATA_MODEL.JOURNEY_TBL:
        this.startSync(DATA_MODEL.PASSENGERS_TBL);
        break;
    }
    this.navigateToFrmMyJourneys(this.userAttribute);
  },
  /**
   * @function
   *
   * @param result 
   */
  progressCB:function(result){
    //kony.application.dismissLoadingScreen();
  },
  /**
   * @function
   *
   * @param result 
   */
  failureCB:function(result){
    alert("Sync failed: "+JSON.stringify(result));
    kony.application.dismissLoadingScreen();
  },
  startSyncUpdate:function(datamodel){
    debugger;
    var syncOptions={};
    //syncOptions.uploadBatchSize="200";
    //syncOptions.getSyncStats = "true";
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    try{
      var syncObjService=new kony.sdk.KNYObj(datamodel);
      var filter=kony.store.getItem("SYNC_FILTER");
        if(typeof filter == 'object' && filter!==null)
          syncOptions["filter"]=filter[datamodel];
      //syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
      kony.application.showLoadingScreen("","Initializing",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      syncObjService.startSync(syncOptions,this.successCBUpdate.bind(this,datamodel),this.failureCBUpdate,this.progressCBUpdate);
    }catch(excp){
      debugger;
      kony.application.dismissLoadingScreen();
    }

  },
  /**
   * @function
   *
   * @param result 
   */
  NavigateMyJourneys:function()
  {
    var navObj = new kony.mvc.Navigation('frmMyJourneys');
    navObj.navigate();
  },
  successCBUpdate:function(datamodel,result){
    debugger;
    kony.application.dismissLoadingScreen();
    alert("SuccessUpdateSync");
    this.value = this.value+1;
    if(this.value == 2)
    {
      this.NavigateMyJourneys();
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  progressCBUpdate:function(result){
    //kony.application.dismissLoadingScreen();
  },
  /**
   * @function
   *
   * @param result 
   */
  failureCBUpdate:function(result){
    alert("Sync failed: "+JSON.stringify(result));
    kony.application.dismissLoadingScreen();
  },
  //==========================================================
  /**
   * @function
   *
   * @param vehicleId 
   */
  setJourneyVehicle:function(vehicleId){
    debugger;
    try{
      if(typeof vehicleId=='string' || typeof vehicleId=='number'){
        var options={};
        options["whereConditionAsAString"]=VEHICLE_TBL.VEHICLE_ID_PK+" = "+"'"+vehicleId+"'";
        this.fetchRecords(DATA_MODEL.VEHICLE_TBL, options);
      }else{
        this.view.flxVehicleDetailRoot.setVisibility(false);
      }
      this.view.forceLayout();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param records 
   */
  populateVehicleInfo:function(records){
    try{
      if(Array.isArray(records) && records.length>0){
        this.view.flxVehicleDetailRoot.setVisibility(true);
        var vehicleName="";
        if(typeof records[0][VEHICLE_TBL.USER_EMP_ID_FK]=="string" || typeof records[0][VEHICLE_TBL.USER_EMP_ID_FK]=="number"){
          vehicleName="Personal";
        }else{
          vehicleName="Company";
        }
        vehicleName=vehicleName+" "+records[0][VEHICLE_TBL.VEHICLE_MAKE]+" "+records[0][VEHICLE_TBL.VEHICLE_MODEL];
        this.view.lblVehicleName.text=vehicleName;
        this.view.lblVehicleColor.text=records[0][VEHICLE_TBL.VEHICLE_COLOR];
        this.view.lblVehicleRegistrationNumber.text=records[0][VEHICLE_TBL.VEHICLE_REG_NUM];
      }else{
        this.view.flxVehicleDetailRoot.setVisibility(false);
      }
      this.view.forceLayout();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param trackingPointId 
   */
  setTrackingPointInfo:function(trackingPointId){
    debugger;
    try{
      if(typeof trackingPointId=='string' || typeof trackingPointId=='number'){
        var options={};
        options["whereConditionAsAString"]=TRACKING_POINTS_TBL.TRACKING_POINT_ID+" = "+"'"+trackingPointId+"'";
        this.fetchRecords(DATA_MODEL.TRACKING_POINTS_TBL, options);
      }
    }catch(excp){
      debugger;
    }
  },
  populateTrackingPointInfo:function(records){
    try{
      if(Array.isArray(records) && records.length>0){
        this.view.lblTrackingPointName.text=records[0][TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS];
        this.view.lblTrackingPointPhone.text=records[0][TRACKING_POINTS_TBL.POINT_PHONE_1];
      }else{
        this.view.lblTrackingPointName.text=records[0][TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS];
        this.view.lblTrackingPointPhone.text=records[0][TRACKING_POINTS_TBL.POINT_PHONE_1];
      }
    }catch(excp){
      debugger;
    }

  },
  _recordFetchSuccess:function(dataModel,info,result){
    debugger;
    try{
      switch(dataModel){
        case DATA_MODEL.TRACKING_POINTS_TBL:
          this.populateTrackingPointInfo(result);
          break;
        case DATA_MODEL.VEHICLE_TBL:
          this.populateVehicleInfo(result);
          break;
        case DATA_MODEL.JOURNEY_TBL:
          if(Array.isArray(result) && result.length>0){
            this.navigationData["journey"]=result[0];
            this.navigateToFrmCreateJourney();
          }
      }
    }catch(excp){
      debugger;
    }
  },
  _recordFetchFailure:function(dataModel,result){
    debugger;
  },
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
  }

});