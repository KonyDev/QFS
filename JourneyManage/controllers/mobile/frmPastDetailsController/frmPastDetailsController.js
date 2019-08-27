define({ 
  CopyDataAsNewJourney : {},
  JourneyIDPK:null,
  failedCheckpoints:false,
  _recordFetchSuccess:function(JourneyId,DataToSend,response){
    debugger;
    try{

    debugger;
    var Records = response;
    var Departure_Address = "";
    var Departure_Lat = "";
    var Departure_Lon = "";
    var Departure_ExpectedTime = "";
    var Departure_ActualTime = "";
    var ActualArrivalLat = "";
    var ActualArrivalLog = "";
    var ActualArrivalAddress = "";
    var ActualDepartureLat = "";
    var ActualDepartureLog = "";
    var ActualDepartureAddress = ""; 
    var Arrival_Address = "";
    var Arrival_Lat = "";
    var Arrival_Lon = "";
    var Arrival_ExpectedTime = "";
    var Arrival_ActualTime = "";

    var JourneyIdPk = "";
    var ArrayOfJourneys = DataToSend;
    ArrayOfJourneys.forEach(function(EachJourney){

      if(JourneyId == EachJourney.journey_uf_id)
      {
        //Assigning
        JourneyIdPk = EachJourney.journey_id_pk;
        this.JourneyIDPK = JourneyIdPk;
        Departure_Address = EachJourney.journey_expected_departure_address;
        Departure_Lat = EachJourney.journey_expected_departure_lat;
        Departure_Lon = EachJourney.journey_expected_departure_lon;
        Departure_ExpectedTime = EachJourney.journey_expected_departure_datetime;
        Departure_ActualTime = EachJourney.journey_actual_departure_datetime;
        Arrival_Address = EachJourney.journey_expected_arrivalpoint_address;
        Arrival_Lat = EachJourney.journey_expected_arrivalpoint_lat;
        Arrival_Lon = EachJourney.journey_expected_arrivalpoint_lon;
        Arrival_ExpectedTime = EachJourney.journey_expected_arrival_datetime;
        Arrival_ActualTime = EachJourney.journey_actual_arrival_datetime;
        ActualArrivalLat = EachJourney.journey_actual_arrivalpoint_lat;
        ActualArrivalLog = EachJourney.journey_actual_arrivalpoint_lon;
        ActualArrivalAddress = EachJourney.journey_actual_arrivalpoint_address;
        ActualDepartureLat = EachJourney.journey_actual_departure_lat;
        ActualDepartureLog = EachJourney.journey_actual_departure_lon;
        ActualDepartureAddress = EachJourney.journey_actual_departure_address;
        Departure_Lat = ActualDepartureLat;
        Departure_Lon = ActualDepartureLog;
        this.CopyDataAsNewJourney["JOURNEY_ID_PK"] = JourneyId;
      }

    }.bind(this));
    var SetOfCheckpoints = [];
    var Checkpoint_LocationAddress = "";
    var Checkpoint_JouneyId = "";
    var Checkpoint_LocationLat = "";
    var Checkpoint_LocationLon = "";
    var Checkpoint_ExpectedCheckin = "";
    var Checkpoint_ActualCheckin = "";
    var Checkpoint_SeqNum = "";
    debugger;
    //Setting the header of the Tab
    this.view.lblJourneyId.text = JourneyId;

    Records.forEach(function(item){
      if(JourneyIdPk == item.journey_id_fk)
      {
        Checkpoint_LocationAddress= (item.checkin_location_address);Checkpoint_JouneyId= (item.journey_id_fk); Checkpoint_LocationLat= (item.checkin_location_lat);
        Checkpoint_LocationLon= (item.checkin_location_lon);Checkpoint_ExpectedCheckin= (item.expected_checkin_timestamp);
        Checkpoint_ActualCheckin= (item.actual_checkin_timestamp);
        Checkpoint_SeqNum= (item.check_point_seq_num);
        if(Checkpoint_LocationAddress === "")
        {
          Checkpoint_LocationAddress = "Not Available";
        }
        var newelt = {"Checkpoint_LocationAddress":Checkpoint_LocationAddress,
                      "Checkpoint_JouneyId":Checkpoint_JouneyId,
                      "Checkpoint_LocationLat":Checkpoint_LocationLat,
                      "Checkpoint_LocationLon":Checkpoint_LocationLon,
                      "Checkpoint_ExpectedCheckin":Checkpoint_ExpectedCheckin,
                      "Checkpoint_ActualCheckin":Checkpoint_ActualCheckin,
                      "Checkpoint_SeqNum":Checkpoint_SeqNum
                     };
        SetOfCheckpoints.push(newelt);
      }

    });
    var location1 = {lat:Departure_Lat, lon:Departure_Lon};
    var TempJsonArray = [];
    SetOfCheckpoints.forEach(function(item){
      try
      {
        var location2 = {lat: item.Checkpoint_LocationLat, lon:item.Checkpoint_LocationLon};
        if(location2.lat !== undefined || location2.lon !== undefined)
        {
          var distanceInMeters = kony.map.distanceBetween(location1, location2);
          item["Distance"] = Math.round(distanceInMeters/1000);
          TempJsonArray.push(item);
        }
        else
        {

        }
        
      }
      catch(err)
      {
        kony.application.dismissLoadingScreen();
      }

    });

    //Data to Send to SetData to Set the Segment of the Checkpoints.
    //Data to Send to SetData to Set the Segment of the Checkpoints.
    var JSONtoSend = {};
    JSONtoSend.DepartureDetails = {
      "Departure_Address": Departure_Address,
      "Departure_Lat": Departure_Lat,
      "Departure_Lon": Departure_Lon,
      "Departure_ExpectedTime": Departure_ExpectedTime,
      "Departure_ActualTime": Departure_ActualTime,
      "ActualDepartureLat" : ActualDepartureLat ,
      "ActualDepartureLog" : ActualDepartureLog ,
      "ActualDepartureAddress" : ActualDepartureAddress 
    };
    JSONtoSend.ArrivalDetails = {
      "Arrival_Address": Arrival_Address,
      "Arrival_Lat": Arrival_Lat,
      "Arrival_Lon": Arrival_Lon,
      "Arrival_ExpectedTime": Arrival_ExpectedTime,
      "Arrival_ActualTime": Arrival_ActualTime,
      "ActualArrivalLat" : ActualArrivalLat ,
      "ActualArrivalLog" : ActualArrivalLog ,
      "ActualArrivalAddress" : ActualArrivalAddress
    };
    JSONtoSend.CheckInDetails = TempJsonArray;
    this.setData(JSONtoSend);
    this.failedCheckpoints = true;
    }
    
    catch(excp){
      debugger;
      kony.application.dismissLoadingScreen();
    }
  },
  _recordFetchFailure:function(dataModel,result){
    debugger;
    kony.application.dismissLoadingScreen();
  },
  _fetchDetailsForCheckPoints:function(params,DataToSend){
    debugger;
    try{
      options = {};
      var knyObject=new kony.sdk.KNYObj(CHECKPOINTS_TBL_GLOBAL);
      knyObject.get(options,this._recordFetchSuccess.bind(this,params,DataToSend),this._recordFetchFailure.bind(this));
    }catch(excp){
      debugger;
      kony.application.dismissLoadingScreen();
      throw excp;
    }
  },
  
  /**
   * @function
   *
   * @param dataModel 
   * @param options 
   */
  fetchRecords:function(dataModel,JourneyId, DataToSend){
    debugger;
    try{

      var knyObject=new kony.sdk.KNYObj(dataModel);
      knyObject.get({},this._recordFetchSuccess.bind(this,JourneyId, DataToSend),this._recordFetchFailure.bind(this));
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  onNavigate:function(context, isBackNavigation)
  {
    this.failedCheckpoints = false;
    kony.application.showLoadingScreen("", "Getting Data..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    debugger;
    try {
      var JourneyId = context.JourneyId;
      var DataToSend = context.data[0].CompleteData;
      this.fetchRecords(DATA_MODEL.CHECKPOINT_TBL,JourneyId, DataToSend);
      
      //Get Corresponding Vehicle Id for this Journey Id
      var VehicleIdJourneyIdMappingArray = context.VehicleDetails.VehicleJourneyMapping;
      var VehicleId = "";
      VehicleIdJourneyIdMappingArray.forEach(function(EachMapping) {
        if (JourneyId == EachMapping.JourneyId) {
          VehicleId = EachMapping.VehicleId;
        }
      });
      var ArrayofVehicles = context.VehicleDetails.VehicleDetails;
      ArrayofVehicles.forEach(function(EachVehicle) {
        if (VehicleId == EachVehicle.VehicleId) {
          this.setVehicleData(EachVehicle);
        }
      }.bind(this));
    } catch (err) {
      kony.application.dismissLoadingScreen();
      alert(err.message);
    }
    var ArrayOfJourneys = {};
    var JourneyRecordFromTo = {};
    try {
      var JourneyIdFromSelectedTabRow = context.JourneyId;
      (context.data).forEach(function(TempDataCollected) {
        if (TempDataCollected.lblJourneyId === JourneyIdFromSelectedTabRow) {
          ArrayOfJourneys = TempDataCollected.CompleteData;
          JourneyRecordFromTo = {
            "FromData": TempDataCollected.lblFromData,
            "ToData": TempDataCollected.lblToData,
            "FromDate": TempDataCollected.lblStartDataActual,
            "ToDate": TempDataCollected.lblArrivalDataActual,
            "JourneyID": TempDataCollected.lblJourneyId
          };
        }
      });
      //Data Variables to set to the Screen
      var JourneyIDPass = "";
      var FromAddress = "";
      var ToAddress = "";
      var FromDate = "";
      var ToDate = "";
      var DriverName = "";
      var Passenger = "";
      var TrackingPoint = "";
      var TrackingPointID = 0;
      var TrackingPhone = "";
      var SupervisorName = "";
      var SupervisorPhone = "";
      var VehicleName = "";
      var VehicleColor = "";
      var VehicleModel = "";
      var WholeData = null;
      //Comparing the JourneyID from the Journeys
      //On the RowClick Particular Journey ID.
      ArrayOfJourneys.forEach(function(item) {
        if (JourneyRecordFromTo.JourneyID === (item.journey_uf_id)) {
          debugger;
          WholeData = item;
          this.JourneyIDPK = item.journey_id_pk;
          JourneyIDPass = JourneyRecordFromTo.JourneyID;
          FromAddress = JourneyRecordFromTo.FromData;
          ToAddress = JourneyRecordFromTo.ToData;
          FromDate = JourneyRecordFromTo.FromDate;
          ToDate = JourneyRecordFromTo.ToDate;
          DriverName = UserCredentials.UserFirstName;
          try {
            var ArrayOfPassengers = GetResponseFromDatabaseWhereClause(JOURNEY_PASSENGERS_TBL_GLOBAL, JOURNEY_PASSENGERS_TABLE.JOURNEY_ID_FK, item.journey_id_pk);
            if (ArrayOfPassengers.length === 0 ||  ArrayOfPassengers[0].passenger_name === undefined) {
              Passenger = "NA";
            } else {
              Passenger = ArrayOfPassengers[0].passenger_name;
            }
          } catch (err) {}
          TrackingPointID = item.journey_tracking_point_id_fk;
          var responseTracking = GetResponseFromDatabaseWhereClause(TRACKING_POINTS_TBL_GLOBAL, TRACKING_POINTS_TBL.TRACKING_POINT_ID, TrackingPointID);
          debugger;
          try {
            TrackingPoint = responseTracking[0].tracking_point_address;
            TrackingPhone = responseTracking[0].tracking_point_phone_1;
          } catch (err) {}
          SupervisorName = item.journey_supervisor_name;
          SupervisorPhone = item.journey_supervisor_phone;
          //Call to SetData to Set data to the PastDetails Screen
          FromAddress = WholeData.journey_actual_departure_address; ToAddress = WholeData.journey_actual_arrivalpoint_address; FromDate = WholeData.journey_actual_departure_datetime; ToDate = WholeData.journey_actual_arrival_datetime;
          this.setDataToScreen(JourneyIDPass, FromAddress, ToAddress, FromDate, ToDate, DriverName, Passenger, TrackingPoint, TrackingPhone, SupervisorName, SupervisorPhone,WholeData);
        }
      }.bind(this));
    } catch (err) {
      toast(err.message);
    }
  },
  setVehicleData:function(VehicleDetails)
  {
    this.view.flxVehicleName.text = VehicleDetails.Make+" "+VehicleDetails.Model;
    this.view.lblVehiclecolor.text = VehicleDetails.Color;
    this.view.lblVehicleNo.text = VehicleDetails.RegNum;
  },
  GetSubstringOfString:function(StringToSend)
  {
    try
    {
      return StringToSend.substring(0,30);
    }
    catch(err)
    {
      return "";
    }
  },
  setDataToScreen:function(JourneyIDPass,FromAddress,ToAddress,FromDate,ToDate,DriverName,Passenger,TrackingPoint,TrackingPhone,SupervisorName,SupervisorPhone)
  {
    try
    {

      //Setting the Header data
      this.view.lblJourneyId.text = JourneyIDPass;
      if(this.GetSubstringOfString(FromAddress) == "")
      {
        this.view.lblFromData.text = "Not Available";
      }
      else
      {
        this.view.lblFromData.text = this.GetSubstringOfString(FromAddress)+"...";
      }
      if(this.GetSubstringOfString(ToAddress) == "")
      {
        this.view.lblToData.text = "Not Available";
      }
      else
      {
        this.view.lblToData.text = this.GetSubstringOfString(ToAddress)+"...";
      }
      this.view.lblStartData.text = DateConversion(new Date(FromDate));
      if(Passenger.trim() === "")
      {
        this.view.lblPassengerName.text = "None";
      }
      else
      {
        this.view.lblPassengerName.text = Passenger.trim();
      }
      this.view.lblArrivalData.text =  DateConversion(new Date(ToDate));
      this.view.lblDriverName.text = DriverName;

      this.view.lblTrackingPointName.text = TrackingPoint;
      this.view.lblTrackingPointNumber.text = TrackingPhone;
      this.view.lblSupervisor.text = SupervisorName;
      this.view.lblSupervisorNumber.text = SupervisorPhone;
    }
    catch(err)
    {
      toast(err.message);
    }
  },
  timeConversionCheckPoint:function(dateString)
  {
    //["23", "15", "00"]  2019-02-06T17:45:00Z
    try
    {
      var TimeStringLocalArray = (new Date(dateString).toLocaleTimeString()).split(':');
      if(TimeStringLocalArray[0]>=12)
      {
        return (TimeStringLocalArray[0]-12)+":"+(TimeStringLocalArray[1])+" PM";
      }
      return (TimeStringLocalArray[0])+":"+(TimeStringLocalArray[1])+" AM";
    }
    catch(err)
    {
      return "NA";
    }
  },
  //Type your controller code here 
  setData:function(DataReceived){
    try {
      if (DataReceived == undefined || DataReceived == null) {
        return;
      }
      var data = [];
      var DepartureCheckpointDataToSet = "";
      if(DataReceived.DepartureDetails.ActualDepartureAddress === "" || DataReceived.DepartureDetails.ActualDepartureAddress ===null)
      {
        DepartureCheckpointDataToSet = "Not Available";
      }
      else
      {
        DepartureCheckpointDataToSet = this.GetSubstringOfString(DataReceived.DepartureDetails.ActualDepartureAddress) + "...";
      }
      data.push({
        "imgTrackingPoint": "departurepoint.png",
        "carImg": "car.png",
        "clockImg": "clock.png",
        "flxJourneyData": {
          isVisible: false
        },
        "flxShadow": {
          isVisible: false
        },
        "lblTrackingPointName": DepartureCheckpointDataToSet,
        "lblMiles": "0 KMs",
        "lblTime": this.timeConversionCheckPoint(DataReceived.DepartureDetails.Departure_ActualTime),
      });
      DataReceived.CheckInDetails.forEach(function(item) {
        var CheckPointNameToPut = "";
        if(item.Checkpoint_LocationAddress ==="")
        {
          CheckPointNameToPut = "Not Available";
        }
        else
        {
          CheckPointNameToPut = this.GetSubstringOfString(item.Checkpoint_LocationAddress)+"...";
        }
        data.push({
          "imgTrackingPoint": "enteredcheckpoint.png",
          "lblTrackingPointName":  CheckPointNameToPut,
          "carImg": "car.png",
          "clockImg": "clock.png",
          "lblMiles": item.Distance + " KMs",
          "lblTime": this.timeConversionCheckPoint(item.Checkpoint_ActualCheckin),
          "flxJourneyData": {
            isVisible: false
          },
          "flxShadow": {
            isVisible: false
          },
          "flxTrackingPointIcon": {
            width: "24dp",
            height: "24dp",
            left: "15dp"
          }
        });
      }.bind(this));
      var DistanceForArrivalAddressFromDepartureAddress = "";
      try {
        var distanceInMeters = kony.map.distanceBetween({
          lat: DataReceived.DepartureDetails.Departure_Lat,
          lon: DataReceived.DepartureDetails.Departure_Lon
        }, {
          lat: DataReceived.ArrivalDetails.Arrival_Lat,
          lon: DataReceived.ArrivalDetails.Arrival_Lon
        });
        if(DataReceived.ArrivalDetails.Arrival_Lat === ""|| DataReceived.ArrivalDetails.Arrival_Lon===""||DataReceived.DepartureDetails.Departure_Lat===""||DataReceived.DepartureDetails.Departure_Lon==="")
        {
          DistanceForArrivalAddressFromDepartureAddress = "Not Available";
        }
        else
        {
          DistanceForArrivalAddressFromDepartureAddress = Math.round(distanceInMeters / 1000) +"KMs";
        }

      } catch (err) {
        DistanceForArrivalAddressFromDepartureAddress = "NA";
      }
      var JourneyTime = "";var DelayIfAnyString = "";
      var ActualArrival = new Date(DataReceived.ArrivalDetails.Arrival_ActualTime);
      var ActualDeparture = new Date(DataReceived.DepartureDetails.Departure_ActualTime);
      if(ActualArrival === "" || ActualDeparture ==="")
      {
        JourneyTime = "Cannot Calculate.";
        DelayIfAnyString = "NA";
      }
      else
      {
        var Hours = Math.floor(Math.abs(ActualArrival - ActualDeparture) / 36e5);
        var Minutes = Math.round(((Math.abs(ActualArrival - ActualDeparture) / 36e5) % 1) * 60);
        JourneyTime = Hours + "H" + " " + Minutes + "Min";

        var ExpectedArrival = new Date(DataReceived.ArrivalDetails.Arrival_ExpectedTime);
        //Delay Case
        if ((ActualArrival - ExpectedArrival) > 0) {
          var MinDiff = Math.floor(Math.abs(ActualArrival - ExpectedArrival) / 6e4);
          DelayIfAnyString = "Delay by " + MinDiff + "Min";
        } else {
          DelayIfAnyString = "No Delay";
        }
      }
      var ArrivalAddressToSetToCheckpoint = "";
      if(DataReceived.ArrivalDetails.ActualArrivalAddress !=="" || DataReceived.ArrivalDetails.ActualArrivalAddress === null)
      {
        ArrivalAddressToSetToCheckpoint = this.GetSubstringOfString(DataReceived.ArrivalDetails.ActualArrivalAddress) + "...";
      }
      else
      {
        ArrivalAddressToSetToCheckpoint = "Not Available";
      }
      data.push({
        "imgTrackingPoint": "arrival.png",
        "lblTrackingPointName": ArrivalAddressToSetToCheckpoint,
        "carImg": "car.png",
        "clockImg": "clock.png",
        "lblMiles": DistanceForArrivalAddressFromDepartureAddress,
        "lblTime": this.timeConversionCheckPoint(DataReceived.ArrivalDetails.Arrival_ActualTime),
        "flxJourneyData": {
          isVisible: true
        },
        "lblJourneyTime": "Journey Time",
        "lblJourneyDuration": JourneyTime,
        "flxShadow": {
          isVisible: true
        },
        "btnStatus": {
          skin: "sknAwaitingApproval",
          text: DelayIfAnyString,
          width: "100dp"
        }
      });
      this.view.segJourneyStatus.setData(data);
      kony.application.dismissLoadingScreen();
    } catch (err) {
      kony.application.dismissLoadingScreen();
      toast(err.message);
    }
  },
  onClickCopyJourney:function()
  {
    if(JourneyUtil.checkOnlineAndLoggedIn())
    {
      try
      {
        var navObj = new kony.mvc.Navigation('frmCopyAndCopyAsReturn');
        navObj.navigate({"JourneyIDPK":this.JourneyIDPK ,"TypeOfNavigation":"Copy"});
      }
      catch(err)
      {
        toast(err.message);
      }
    }
  },
  onClickCopyAsReturnJourney:function()
  {
    if(JourneyUtil.checkOnlineAndLoggedIn())
    {
      try
      {
        var navObj = new kony.mvc.Navigation('frmCopyAndCopyAsReturn');
        navObj.navigate({"JourneyIDPK":this.JourneyIDPK ,"TypeOfNavigation":"CopyAsReturn"});
      }
      catch(err)
      {
        toast(err.message);
      }
    }
  }

});