define({

  dateString: "",
  timeString: "",
  dateStringReceivedFromDeparture: "",
  dateStringReceivedFromArrival: "",
  timeStringReceivedFromDeparture: "",
  timeStringReceivedFromArrival: "",
  TypeOfNavigation: "",
  JourneyIDPK: null,
  JourneyDetails: {},
  JsonDataAsParam: {},

  onNavigate: function(context) {
    debugger;
    this.TypeOfNavigation = context.TypeOfNavigation;
    this.JourneyIDPK = context.JourneyIDPK;
    this.JourneyDetails = GetResponseFromDatabaseWhereClause(JOURNEY_TBL_GLOBAL, JOURNEY_TBL.ID_PK, this.JourneyIDPK);
  },
  onPostShowEvent: function() {
    var dat = new Date();
    this.dateString = dat.toLocaleDateString();
    this.timeString = dat.toLocaleTimeString();
    this.setDateTime(dat.toLocaleDateString(), dat.toLocaleTimeString());
    this.ShowDepartureHideArrival();
  },
  ShowDepartureHideArrival: function() {
    this.view.lblCenterText.text = "Departure Datetime Details";
    this.view.flxDepartureDetails.isVisible = true;
    this.view.flxArrivalDetails.isVisible = false;
    this.view.imgBack.isVisible = false;
    this.setDateTime(this.dateString, this.timeString);
  },
  HideDepartureShowArrival: function() {
    this.view.lblCenterText.text = "Arrival Datetime Details";
    this.view.flxDepartureDetails.isVisible = false;
    this.view.flxArrivalDetails.isVisible = true;
    this.view.imgBack.isVisible = true;
    this.setDateTime(this.dateString, this.timeString);
  },
  SelectedDateDeparture: function(receivedDateStringFromEventDeparture) {
    this.dateStringReceivedFromDeparture = receivedDateStringFromEventDeparture.dateString;
  },
  SelectedDateArrival: function(receivedDateStringFromEventArrival) {
    this.dateStringReceivedFromArrival = receivedDateStringFromEventArrival.dateString;
  },
  SelectedTimeDeparture: function(receivedTimeStringFromEventDeparture) {
    debugger;
    this.ShowArrivalFlex();
    this.timeStringReceivedFromDeparture = receivedTimeStringFromEventDeparture;
  },
  SelectedTimeArrival: function(receivedTimeStringFromEventArrival) {
    debugger
    this.timeStringReceivedFromArrival = receivedTimeStringFromEventArrival;
    this.CreateJourney();
  },
  setDateTime: function(dateString, timeString) {
    try {
      if (this.view.flxDepartureDetails.isVisible) {
        this.view.datePickerDeparture.setDate(dateString);
        this.view.timePickerDeparture.setTime(timeString);
      }
      if (this.view.flxArrivalDetails.isVisible) {
        this.view.datePickerArrival.setDate(this.dateStringReceivedFromDeparture);
        this.view.timePickerArrival.setTime(timeString);
      }
    } catch (err) {

    }
  },
  ShowArrivalFlex: function() {
    if (this.dateStringReceivedFromDeparture === "") {
      alert("Please Click on the Set Date Button");
      return;
    }
    try {
      if (this.view.flxArrivalDetails.isVisible) {
        this.ShowDepartureHideArrival();
      } else {
        this.HideDepartureShowArrival();
      }
    } catch (er) {
      alert(er.message);
    }
  },
  CreateJourney: function(CopyAsReturn) {
    debugger;
    try {
      if (this.dateStringReceivedFromArrival === "") {
        alert("Please Click on the Set Date Button");
        return;
      }
      var departureDate = null;
      var arrivalDate = null;
      if(kony.os.deviceInfo().name.toLowerCase() == "android")
      {
        departureDate = new Date(this.dateStringReceivedFromDeparture.split('/').join('-') + " " + this.timeStringReceivedFromDeparture + ":00");
        arrivalDate = new Date(this.dateStringReceivedFromArrival.split('/').join('-') + " " + this.timeStringReceivedFromArrival + ":00");
      }
      else
      {
        departureDate = new Date(this.dateStringReceivedFromDeparture + " " + this.timeStringReceivedFromDeparture + ":00");
        arrivalDate = new Date(this.dateStringReceivedFromArrival + " " + this.timeStringReceivedFromArrival + ":00");
      }
      var CreateJourneyJSON = {
        "checkin_interval_row_id_fk": this.JourneyDetails[0].checkin_interval_row_id_fk,
        "checkin_type_id_fk": this.JourneyDetails[0].checkin_type_id_fk,
        //"journey_created_by_fk": UserCredentials.UserEmpId,
        "journey_created_by_fk": this.JourneyDetails[0].user_emp_id_fk,
        "journey_emp_phone_num": this.JourneyDetails[0].journey_emp_phone_num,
        "journey_expected_arrival_datetime": arrivalDate,
        "journey_expected_arrivalpoint_address": this.JourneyDetails[0].journey_expected_arrivalpoint_address,
        "journey_expected_arrivalpoint_lat": this.JourneyDetails[0].journey_expected_arrivalpoint_lat,
        "journey_expected_arrivalpoint_lon": this.JourneyDetails[0].journey_expected_arrivalpoint_lon,
        "journey_expected_departure_address": this.JourneyDetails[0].journey_expected_departure_address,
        "journey_expected_departure_datetime": departureDate,
        "journey_expected_departure_lat": this.JourneyDetails[0].journey_expected_departure_lat,
        "journey_expected_departure_lon": this.JourneyDetails[0].journey_expected_departure_lon,
        //"journey_last_updated_by": UserCredentials.UserEmpId,
        "journey_last_updated_by": this.JourneyDetails[0].user_emp_id_fk,
        "journey_radio": this.JourneyDetails[0].journey_radio,
        "journey_reason_id_fk": this.JourneyDetails[0].journey_reason_id_fk,
        "journey_satellite": this.JourneyDetails[0].journey_satellite,
        "journey_selected_vehicle_id_fk": this.JourneyDetails[0].journey_selected_vehicle_id_fk,
        "journey_supervisor_camp_room_num": this.JourneyDetails[0].journey_supervisor_camp_room_num,
        "journey_supervisor_emp_id": this.JourneyDetails[0].journey_supervisor_emp_id,
        "journey_supervisor_name": this.JourneyDetails[0].journey_supervisor_name,
        "journey_supervisor_phone": this.JourneyDetails[0].journey_supervisor_phone,
        "journey_tracking_point_id_fk": this.JourneyDetails[0].journey_tracking_point_id_fk,
        "journeystatus_code_fk": 1,
        "user_emp_id_fk": this.JourneyDetails[0].user_emp_id_fk,
      };
      this.JsonDataAsParam['journey_expected_arrivalpoint_address'] = CreateJourneyJSON.journey_expected_arrivalpoint_address;
      this.JsonDataAsParam['journey_expected_departure_address'] = CreateJourneyJSON.journey_expected_departure_address;
      this.JsonDataAsParam['journey_expected_departure_datetime'] = CreateJourneyJSON.journey_expected_departure_datetime;
      this.JsonDataAsParam['journey_expected_arrival_datetime'] = CreateJourneyJSON.journey_expected_arrival_datetime;
      if (this.TypeOfNavigation === "CopyAsReturn") {
        var temp = "";
        temp = CreateJourneyJSON.journey_expected_arrivalpoint_address;
        CreateJourneyJSON.journey_expected_arrivalpoint_address = CreateJourneyJSON.journey_expected_departure_address;
        CreateJourneyJSON.journey_expected_departure_address = temp;
      }
      if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        this.createRecord_online_Copy(JOURNEY_TBL_GLOBAL, CreateJourneyJSON);
      } else {
        alert("Network Not Available.");
      }

    } catch (err) {
      alert(err.message);
    }
  },
  createRecord_online_Copy: function(dataModel, record) {
    try {
      var objSvc = kony.sdk.getCurrentInstance().getObjectService(JConstant.OFFLINE_OBJECT_SERVICE, {
        "access": "online"
      });
      var dataObject = new kony.sdk.dto.DataObject(dataModel);
      var options = {
        "dataObject": dataObject,
        "headers": {}
      };
      dataObject.setRecord(record);
      kony.application.dismissLoadingScreen();
      kony.application.showLoadingScreen("", "Creating Record Please wait..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
      objSvc.create(options,
                    this.createRecordSuccess.bind(this),
                    this.createRecordailure.bind(this));

    } catch (excp) {
      alert(excp.error);
      kony.application.dismissLoadingScreen();
    }
  },
  createRecordSuccess: function(result) {
    debugger;
    try {
      kony.application.dismissLoadingScreen();
      this.JsonDataAsParam['JourneyId'] = result.journey_id_pk;;
      this.JsonDataAsParam['Type'] = this.TypeOfNavigation;
      this.doSync();
    } catch (excp) {
      alert(excp.error);
      debugger;
    }

  },
  createRecordailure: function(result) {
    kony.application.dismissLoadingScreen();
    debugger;
  },
  updateJourneyRecord: function(result) {
    try {
      if (typeof result == 'object' && result !== null) {
        var journeyId = result[JOURNEY_TBL.ID_PK];
        this.navigationData["journey"][JOURNEY_TBL.ID_PK] = journeyId;
      }
    } catch (excp) {
      debugger;
    }

  },
  doSync: function() {
    if (JourneyUtil.isNetworkAvailable() === true) {
      try {
        var syncOptions = {};
        //syncOptions.uploadBatchSize = "200";
        //syncOptions.getSyncStats = "true";
        syncOptions.uploadBatchSize=1;
        syncOptions.downloadBatchSize=1;
        var syncObjService = new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
        //kony.application.dismissLoadingScreen();
        syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
        kony.application.showLoadingScreen("", "Sync in Progress..", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        syncObjService.startSync(syncOptions, this.doSyncSuccess.bind(this), this.failureCB, this.progressCB);

      } catch (excp) {
        debugger;
      }
    }
  },
  doSyncSuccess: function(result) {
    debugger;
    try {
      kony.application.dismissLoadingScreen();
      var navObj = new kony.mvc.Navigation('frmCopyCopyAsJourney');
      navObj.navigate(this.JsonDataAsParam);
    } catch (excp) {
      alert(excp);
      debugger;
    }
  },
  progressCB: function(result) {
  },
  failureCB: function(result) {
    alert("Sync failed: " + JSON.stringify(result));
    kony.application.dismissLoadingScreen();
  },

});
