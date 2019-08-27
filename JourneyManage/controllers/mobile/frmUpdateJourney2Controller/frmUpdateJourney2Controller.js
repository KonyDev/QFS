define({
  typeOfDataEdit:"",
  driverPassengerDetails:{},

  //Mainscreen Objects
  AddressDetails:{},
  DriverDetails:{},
  PassengerDetails:{},
  PassengerDetailsUpdated:{},
  TrackingDetails:{},
  VehicleDetails:{},
  JourneyIDPK:"",


  onNavigate:function(context,isBackNavigation)
  {
    debugger;
    try
    {
      this.typeOfDataEdit = context.typeOfDataEdit;
    }catch(err){}
    if(context.typeOfDataEdit == "AddressDetails")
    {
      debugger;
      this.AddressDetails = context.AddressDetails;
      this.view.lblFromData.text = this.stringSubstringReturn(this.AddressDetails.journey_expected_departure_address);
      //this.view.lblStartData.text = DateConversion(new Date(this.AddressDetails.journey_expected_departure_datetime));
      if(typeof this.AddressDetails.journey_expected_departure_datetime == 'string' && 
         this.AddressDetails.journey_expected_departure_datetime.length>0){
        try{
          var expectedDepartureDateObj= JourneyUtil.getSqlDatetoJSDate(this.AddressDetails.journey_expected_departure_datetime);
          var expetedDepartureDateString = JourneyUtil.getReadableDateString(expectedDepartureDateObj);
          var expectedDepartureTimeString = JourneyUtil.getTimeStringIn12HrsFromat(expectedDepartureDateObj);
          this.view.lblStartData.text = expetedDepartureDateString+ " "+expectedDepartureTimeString;
        }catch(excp){
          debugger;
        }
      }
      //this.view.lblArrivalData.text = DateConversion(new Date(this.AddressDetails.journey_expected_arrival_datetime));
      if(typeof this.AddressDetails.journey_expected_arrival_datetime == 'string' && 
         this.AddressDetails.journey_expected_arrival_datetime.length>0){
        try{
          var expectedArrivalDateObj= JourneyUtil.getSqlDatetoJSDate(this.AddressDetails.journey_expected_arrival_datetime);
          var expetedArrivalDateString = JourneyUtil.getReadableDateString(expectedArrivalDateObj);
          var expectedArrivalTimeString = JourneyUtil.getTimeStringIn12HrsFromat(expectedArrivalDateObj);
          this.view.lblArrivalData.text = expetedArrivalDateString+ " "+expectedArrivalTimeString;
        }catch(excp){
          debugger;
        }
      }
      this.view.lblToData.text = this.stringSubstringReturn(this.AddressDetails.journey_expected_arrivalpoint_address);
      return;
    }
    if (this.typeOfDataEdit == "VehicleDetails") {
      this.view.flxVehicleName.text = context.VehicleDetails.vehicle_make + " " + context.VehicleDetails.vehicle_model;
      this.view.lblVehiclecolor.text = context.VehicleDetails.vehicle_color;
      this.view.lblVehicleNo.text = context.VehicleDetails.vehicle_reg_num;
      this.VehicleDetails.vehicle_make = context.VehicleDetails.vehicle_make;
      this.VehicleDetails.vehicle_model = context.VehicleDetails.vehicle_model;
      this.VehicleDetails.vehicle_reg_num = context.VehicleDetails.vehicle_reg_num;
      this.VehicleDetails.vehicle_color = context.VehicleDetails.vehicle_color;
      this.VehicleDetails.vehicle_id_pk = context.VehicleDetails.vehicle_id_pk;
      return;
    }
    if(this.typeOfDataEdit == "DriverPassenger")
    {

      //Update in the Driver details
      this.DriverDetails[0].user_satellite = context.JourneyObj.journey_satellite;
      this.DriverDetails[0].user_radio = context.JourneyObj.journey_radio;

      //Update in the Passenger Details
      this.PassengerDetails = context.PassengerList;
      if(this.PassengerDetails.length>0)
      {
        this.view.lblPassengerName.text =  this.PassengerDetails[0].passenger_name;
      }
      else
      {
        this.view.lblPassengerName.text = "None";
      }
      return;
    }
    if (this.typeOfDataEdit == "TrackingDetails") {
      this.TrackingDetails = context.TrackingDetails;
      try
      {
        var TrackingPointIdNew = GetResponseFromDatabaseWhereClause(TRACKING_POINTS_TBL_GLOBAL,
                                                                    TRACKING_POINTS_TBL.TRACKING_POINT_ID,
                                                                    this.TrackingDetails.journey_tracking_point_id_fk);
        this.view.lblTrackingPointName.text = TrackingPointIdNew[0].tracking_point_address;
        this.view.lblTrackingPointNumber.text = TrackingPointIdNew[0].tracking_point_phone_1;
        this.view.lblSupervisor.text = this.TrackingDetails.journey_supervisor_name;
        this.view.lblSupervisorNumber.text = this.TrackingDetails.journey_supervisor_phone;
      }
      catch(err)
      {
        this.view.lblTrackingPointName.text = "";
        this.view.lblTrackingPointNumber.text = "";
        this.view.lblSupervisor.text = "";
        this.view.lblSupervisorNumber.text = "";
        alert(err.message);
      }
      return;
    }



    //MainScreen HeaderText
    var JourneyIDPK = context.data[0].journey_id_pk;
    this.JourneyIDPK = JourneyIDPK;
    var ReceivedDataFromMyJourneys = context.data[0];
    this.view.lblJourneyId.text = context.data[0].journey_uf_id;


    //MainScreen Departure
    this.view.lblFromData.text = this.stringSubstringReturn(ReceivedDataFromMyJourneys.journey_expected_departure_address);
    //this.view.lblStartData.text = DateConversion(new Date(ReceivedDataFromMyJourneys.journey_expected_departure_datetime));
    if(typeof ReceivedDataFromMyJourneys.journey_expected_departure_datetime == 'string' && 
       ReceivedDataFromMyJourneys.journey_expected_departure_datetime.length>0){
      try{
        var expectedDepartureDateObj= JourneyUtil.getSqlDatetoJSDate(ReceivedDataFromMyJourneys.journey_expected_departure_datetime);
        var expetedDepartureDateString = JourneyUtil.getReadableDateString(expectedDepartureDateObj);
        var expectedDepartureTimeString = JourneyUtil.getTimeStringIn12HrsFromat(expectedDepartureDateObj);
        this.view.lblStartData.text = expetedDepartureDateString+ " "+expectedDepartureTimeString;
      }catch(excp){
        debugger;
      }
    }
    //MainScreen Arrival
    //this.view.lblArrivalData.text = DateConversion(new Date(ReceivedDataFromMyJourneys.journey_expected_arrival_datetime));

    if(typeof ReceivedDataFromMyJourneys.journey_expected_arrival_datetime == 'string' && 
       ReceivedDataFromMyJourneys.journey_expected_arrival_datetime.length>0){
      try{
        var expectedArrivalDateObj= JourneyUtil.getSqlDatetoJSDate(ReceivedDataFromMyJourneys.journey_expected_arrival_datetime);
        var expetedArrivalDateString = JourneyUtil.getReadableDateString(expectedArrivalDateObj);
        var expectedArrivalTimeString = JourneyUtil.getTimeStringIn12HrsFromat(expectedArrivalDateObj);
        this.view.lblArrivalData.text = expetedArrivalDateString+ " "+expectedArrivalTimeString;
      }catch(excp){
        debugger;
      }
    }
    this.view.lblToData.text = this.stringSubstringReturn(ReceivedDataFromMyJourneys.journey_expected_arrivalpoint_address);

    var AddressDetails = {};
    AddressDetails['journey_expected_departure_address'] = ReceivedDataFromMyJourneys.journey_expected_departure_address;
    AddressDetails['journey_expected_departure_datetime'] = ReceivedDataFromMyJourneys.journey_expected_departure_datetime;
    AddressDetails['journey_expected_arrivalpoint_address'] = ReceivedDataFromMyJourneys.journey_expected_arrivalpoint_address;
    AddressDetails['journey_expected_arrival_datetime'] = ReceivedDataFromMyJourneys.journey_expected_arrival_datetime;
    AddressDetails['journey_expected_departure_lat'] = ReceivedDataFromMyJourneys.journey_expected_departure_lat;
    AddressDetails['journey_expected_departure_lon'] = ReceivedDataFromMyJourneys.journey_expected_departure_lon;
    AddressDetails['journey_expected_arrivalpoint_lat'] = ReceivedDataFromMyJourneys.journey_expected_arrivalpoint_lat;
    AddressDetails['journey_expected_arrivalpoint_lon'] = ReceivedDataFromMyJourneys.journey_expected_arrivalpoint_lon;
    AddressDetails['checkin_interval_row_id_fk'] = ReceivedDataFromMyJourneys.checkin_interval_row_id_fk;
    AddressDetails['checkin_type_id_fk'] = ReceivedDataFromMyJourneys.checkin_type_id_fk;
    this.AddressDetails = AddressDetails;



    //MainScreen DriveDetails
    try{
      var DriverDetails = GetResponseFromDatabaseWhereClause(USER_TBL_GLOBAL, USER_TBL.USER_EMP_ID_PK, ReceivedDataFromMyJourneys.user_emp_id_fk);
      this.DriverDetails = DriverDetails;
      this.view.lblDriverName.text = DriverDetails[0].user_firstname+" "+DriverDetails[0].user_lastname;
    }
    catch(err)
    {
      alert("Error in Getting Driver Details: "+err.message);
    }

    //MainScreen Passengers
    try{
      var PassengerDetails = GetResponseFromDatabaseWhereClause(JOURNEY_PASSENGERS_TBL_GLOBAL, JOURNEY_PASSENGERS_TABLE.JOURNEY_ID_FK, JourneyIDPK);
      if(PassengerDetails.length === 0)
      {
        this.view.lblPassengerName.text = "None";
      }
      else
      {
        this.view.lblPassengerName.text = PassengerDetails[0].passenger_name;
        this.PassengerDetails = PassengerDetails;
      }
    }
    catch(err)
    {
      alert("Error in Getting PassengerDetails: "+err.message);
    }


    //MainScreen Tracking Point
    try{
      var TrackingDetails = GetResponseFromDatabaseWhereClause(TRACKING_POINTS_TBL_GLOBAL, TRACKING_POINTS_TBL.TRACKING_POINT_ID, ReceivedDataFromMyJourneys.journey_tracking_point_id_fk);
      this.view.lblTrackingPointName.text = TrackingDetails[0].tracking_point_address;
      this.view.lblTrackingPointNumber.text = TrackingDetails[0].tracking_point_phone_1;
      //       this.TrackingDetails = TrackingDetails;
    }
    catch(err)
    {
      alert("Error in Getting TrackingDetails: "+err.message);
    }

    //MainScreen Spervisor
    this.view.lblSupervisor.text = ReceivedDataFromMyJourneys.journey_supervisor_name;
    this.view.lblSupervisorNumber.text = ReceivedDataFromMyJourneys.journey_supervisor_phone;

    this.TrackingDetails.journey_supervisor_name = ReceivedDataFromMyJourneys.journey_supervisor_name;
    this.TrackingDetails.journey_supervisor_emp_id = ReceivedDataFromMyJourneys.journey_supervisor_emp_id;
    this.TrackingDetails.journey_supervisor_phone = ReceivedDataFromMyJourneys.journey_supervisor_phone;
    this.TrackingDetails.journey_tracking_point_id_fk = ReceivedDataFromMyJourneys.journey_tracking_point_id_fk;
    this.TrackingDetails.journey_reason_id_fk = ReceivedDataFromMyJourneys.journey_reason_id_fk;

    //MainScreen VehicleDetails
    try{
      var VehicleDetails = GetResponseFromDatabaseWhereClause(VEHICLE_TBL_GLOBAL, VEHICLE_TBL.VEHICLE_ID_PK, ReceivedDataFromMyJourneys.journey_selected_vehicle_id_fk);
      this.view.flxVehicleName.text = VehicleDetails[0].vehicle_make+" "+VehicleDetails[0].vehicle_model;
      this.view.lblVehiclecolor.text = VehicleDetails[0].vehicle_color;
      this.view.lblVehicleNo.text = VehicleDetails[0].vehicle_reg_num;
      this.VehicleDetails = VehicleDetails;
    }
    catch(err)
    {
      toast("Error in Getting VehicleDetails: "+err.message);
    }
  },

  onDriverPassengerClick:function()
  {
    var params={"isUpdate":true,"DriverDetails":this.DriverDetails,"isDriver":true,"isPassenger":true,"PassengerDetails":this.PassengerDetails};
    var navObj = new kony.mvc.Navigation("frmNewJourneyTraveller");
    navObj.navigate(params);
  },
  stringSubstringReturn:function(stringToReturn)
  {
    if(typeof(stringToReturn) == 'string') 
    {
      return stringToReturn.substring(0,40)+"...";
    }
    return "";
  },
  TrackingDetailsOnClickEvent:function()
  {
    var params={"isUpdate":true,"typeOfDataEdit":"TrackingDetails","TrackingDetails":this.TrackingDetails};
    var navObj = new kony.mvc.Navigation("frmNewJourneyTracking");
    navObj.navigate(params);
  },
  VehicleDetailsOnClickEvent:function()
  {
    var navObj = new kony.mvc.Navigation('frmNewJourneyVehicle');
    var params = {
      "isUpdate": true,
      "typeOfDataEdit": "VehicleDetails",
      "VehicleDetails": this.VehicleDetails
    };

    navObj.navigate(params);
  },

  RouteDetailsOnClickEvent:function()
  {
    debugger;
    var navObj = new kony.mvc.Navigation('frmNewJourneyRoute');
    var params = {
      "isUpdate": true,
      "typeOfDataEdit": "AddressDetails",
      "AddressDetails": this.AddressDetails
    };

    navObj.navigate(params);
  },
  //Final Call Update Journey
  UpdateJourneyWithDetails:function()
  {
    debugger;
    try {
      var RecordsToUpdate = {
        "journey_last_updated_by": this.VehicleDetails[0].lastupdatedby,
        "journey_satellite": this.DriverDetails[0].user_satellite,
        "journey_expected_departure_lat": this.AddressDetails.journey_expected_departure_lat,
        "journey_emp_phone_num": this.DriverDetails[0].user_phone1,
        "journey_selected_vehicle_id_fk": this.VehicleDetails[0].vehicle_id_pk,
        "journey_expected_arrivalpoint_address": this.AddressDetails.journey_expected_arrivalpoint_address,
        "journey_expected_departure_address": this.AddressDetails.journey_expected_departure_address,
        "journey_supervisor_phone": this.TrackingDetails.journey_supervisor_phone,
        "checkin_interval_row_id_fk": this.AddressDetails.checkin_interval_row_id_fk,
        "journey_radio": this.DriverDetails[0].user_radio,
        "journey_expected_arrivalpoint_lon": this.AddressDetails.journey_expected_arrivalpoint_lon,
        "journey_expected_departure_datetime": this.AddressDetails.journey_expected_departure_datetime,
        "user_emp_id_fk": this.DriverDetails[0].user_emp_id_pk,
        "journey_created_by_fk": this.DriverDetails[0].user_emp_id_pk,
        "journey_expected_arrivalpoint_lat": this.AddressDetails.journey_expected_arrivalpoint_lat,
        "checkin_type_id_fk": this.AddressDetails.checkin_type_id_fk,
        "journey_expected_departure_lon": this.AddressDetails.journey_expected_departure_lon,
        "journey_supervisor_name": this.TrackingDetails.journey_supervisor_name,
        "journey_supervisor_emp_id": this.TrackingDetails.journey_supervisor_emp_id,
        "journey_reason_id_fk": this.TrackingDetails.journey_reason_id_fk,
        "journey_expected_arrival_datetime": this.AddressDetails.journey_expected_arrival_datetime,
        "journey_tracking_point_id_fk": this.TrackingDetails.journey_tracking_point_id_fk,
        "lastupdateddatetime":null
      };
      UpdateRecordWithParams(JOURNEY_TBL_GLOBAL, "journey_id_pk", this.JourneyIDPK, RecordsToUpdate);


      debugger;
      var ArrayofPassengerObj = GetResponseFromDatabaseWhereClause(JOURNEY_PASSENGERS_TBL_GLOBAL, 'journey_id_fk', this.JourneyIDPK);
      var ArrayofPassengerObjNew = this.PassengerDetails;

      try
      {if(ArrayofPassengerObj !== null && ArrayofPassengerObj !== undefined && ArrayofPassengerObj.length!==0)
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
            toast("Error :: DeleteRowByPrimaryKey");

          }
        }.bind(this));
        if(ArrayofPassengerObjNew !== null && ArrayofPassengerObjNew !== undefined && ArrayofPassengerObjNew.length!==0)
        {
          ArrayofPassengerObjNew.forEach(function(EachPassenger){
            try
            {
              EachPassenger[JOURNEY_PASSENGERS_TABLE.JOURNEY_ID_FK] = this.JourneyIDPK;
              AddNewRowIntoTable(JOURNEY_PASSENGERS_TBL_GLOBAL, EachPassenger);
            }
            catch(err)
            {
              toast("Error :: AddNewRowIntoTable");
            }
          }.bind(this));
        }
      }
      }catch(err)
      {
        alert(err.message);
      }
      if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
      {
        this.startSync();        
      }
      else
      {
        alert("Please Be Online and Sync at Login.");
        var navObj = new kony.mvc.Navigation("frmMyJourneys");
        var param={};
        param["prevForm"]="UpdateJourney";
        navObj.navigate(param);
      }
    }
    catch(err)
    {
      alert(err.message);
    }

  },
  startSync:function(){
    kony.application.showLoadingScreen("","Syncing Please Wait.",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var syncOptions={};
    syncOptions.downloadBatchSize = 1;
    syncOptions.uploadBatchSize = 1;
    syncOptions.getSyncStats = true;
    try{
      var syncObjService= new kony.sdk.KNYObjSvc(ObjectServiceName);

      syncObjService.startSync(syncOptions,this.successCBStartSync.bind(this),this.failureCBStartSync.bind(this),this.progressCBStartSync.bind(this));
    }catch(excp){
      kony.application.dismissLoadingScreen();
      alert("Error in StartSync: "+excp.error);
    }
  },

  successCBStartSync:function(result){
    kony.application.showLoadingScreen("","Navigating to Main Form.",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var navObj = new kony.mvc.Navigation("frmMyJourneys");
    var param={};
    param["prevForm"]="UpdateJourney";
    navObj.navigate(param);

  },
  progressCBStartSync:function(result){

  },
  failureCBStartSync:function(result){
    debugger;
    alert("Sync Failed."+JSON.stringify(result));
    kony.application.dismissLoadingScreen();
  },

});