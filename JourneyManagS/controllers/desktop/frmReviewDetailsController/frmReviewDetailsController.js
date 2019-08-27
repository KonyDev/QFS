define({ 
  departureDetails : "", arrivalDetails : "",
  previousData : "", arrivalTimeInUTC : "",
  depatureTimeInUTC : "", arrivalLocation : "",
  depatureLocation : "", arrFullDate : "",
  depFullDate : "", updateDepartureDateAndTime : "",
  updateArrivalDateAndTime : "", createdJourneyKey : "",
  passengerOneName : "", passengerOneMobile : "",
  passengerTwoName : "", passengerTwoMobile : "",
  journeyReason : "", journeyCheckin : "",
  journeyCheckinInterval : "", journeyVehicleID : "",
  /**
     * @function onNavigate
     * @scope private
     * @description: invokes on form creation
     */
  onNavigate : function(previousData){
    this.previousData = previousData;
  },
  /**
     * @function setDataToTemplate
     * @scope private
     * @description: invokes to set data to traveller, route, tracking and vehicles template
     */
  setDataToTemplate : function(){
    var travellerData = this.previousData.trackingDetails.routeData.travellerDetails;
    this.view.lblTravellerNameValue.text = travellerData.name;
    this.view.lblTravellerNumberValue.text = travellerData.mobile;
    this.view.lblTravellerSatellitePhoneValue.text = travellerData.phone;
    this.view.lblTravellerRadioValue.text = travellerData.siterep;
    this.view.lblUserIdReviewValue.text = travellerData.userID;

    var numberOfPassengers = this.previousData.trackingDetails.routeData.travellerDetails.passengerDetails.length;
    if(numberOfPassengers === 1){
      this.view.lblPassengerOneValue.text = this.previousData.trackingDetails.routeData.travellerDetails.passengerDetails[0].Name.text;
      this.passengerOneName = this.previousData.trackingDetails.routeData.travellerDetails.passengerDetails[0].Name;
      this.passengerOneMobile = this.previousData.trackingDetails.routeData.travellerDetails.passengerDetails[0].Mobile;
      this.view.FlxTraveller.height = "370px";
    }
    else if(numberOfPassengers === 2){
      this.view.lblPassengerOneValue.text = this.previousData.trackingDetails.routeData.travellerDetails.passengerDetails[0].Name.text;
      this.view.lblPassengerTwoValue.text = this.previousData.trackingDetails.routeData.travellerDetails.passengerDetails[1].Name.text;
      this.passengerOneName = this.previousData.trackingDetails.routeData.travellerDetails.passengerDetails[0].Name;
      this.passengerOneMobile = this.previousData.trackingDetails.routeData.travellerDetails.passengerDetails[0].Mobile;
      this.passengerTwoName = this.previousData.trackingDetails.routeData.travellerDetails.passengerDetails[1].Name;
      this.passengerTwoMobile = this.previousData.trackingDetails.routeData.travellerDetails.passengerDetails[1].Mobile;
      this.view.FlxTraveller.height = "420px";
    }
    else{
      this.view.lblPassengerOneValue.text = "";
      this.view.lblPassengerTwoValue.text = "";
      this.view.FlxTraveller.height = "320px";
    }
    var routeData = this.previousData.trackingDetails.routeData;
    this.view.lblRouteFromValue.text = routeData.departurePlace;
    this.view.lblRouteToValue.text = routeData.arrivalPlace;
    this.view.lblRouteCheckInValue.text = routeData.checkInDetail+"based checkins";
    this.view.lblRouteStartDateValue.text = routeData.departureDate;
    this.view.lblRouteArrivalDateValue.text = routeData.arrivalDate;
    this.arrFullDate = routeData.arrivalFullDate;
    this.depFullDate = routeData.depatureFullDate;
    var trackingDetails = this.previousData.trackingDetails;
    this.view.lblTrackerReasonValue.text = trackingDetails.journeyReason;
    this.view.lblTrackerSupervisorValue.text = trackingDetails.supervisorName;
    this.view.lblTrackerMobileValue.text = trackingDetails.supervisorMobile;
    this.view.lblTrackerCPNValue.text = trackingDetails.supervisorRoomNo;
    this.view.lblTrackerSiderepValue.text = trackingDetails.supervisorEmpID;
    var vehicleDetails = this.previousData;
    if(vehicleDetails.newVehicleData.vehicleMake === "" && vehicleDetails.companyVehicle === "" && vehicleDetails.personalVehicle === ""){
      this.view.lblVehicleCompanyValue.text = vehicleDetails.decideLater;
      this.view.lblVehicleColorValue.text = "----";
      this.view.lblVehicleRegistrationValue.text = "----";
    }
    else if(vehicleDetails.newVehicleData.vehicleMake !== "" ){
      this.view.lblVehicleCompanyValue.text = vehicleDetails.newVehicleData.vehicleMake+vehicleDetails.newVehicleData.vehicleModel;
      this.view.lblVehicleColorValue.text = vehicleDetails.newVehicleData.vehicleColor;
      this.view.lblVehicleRegistrationValue.text = vehicleDetails.newVehicleData.vehicleRno;
    }
    else if(vehicleDetails.companyVehicle !== "" ){
      var data = vehicleDetails.companyVehicle;
      var selectedCompanyCar = data.split(",");
      var color = selectedCompanyCar[1].split("|");
      this.view.lblVehicleCompanyValue.text = selectedCompanyCar[0];
      this.view.lblVehicleColorValue.text = color[0];
      this.view.lblVehicleRegistrationValue.text = color[1];
    }
    else if(vehicleDetails.personalVehicle !== "" ){
      var personal = vehicleDetails.personalVehicle;
      var splitData = personal.split(",");
      var vehicleColor = splitData[1].split("|");
      this.view.lblVehicleCompanyValue.text = splitData[0];
      this.view.lblVehicleColorValue.text = vehicleColor[0];
      this.view.lblVehicleRegistrationValue.text = vehicleColor[1];
    }

  },
   /**
     * @function backToDashboard
     * @scope private
     * @description: invokes to navigate back to dashboard
     */
  backToDashboard : function(){
    alert("Data will be lost");
    var navigateToTravellerFromReview = new kony.mvc.Navigation("frmJourneyList");
    navigateToTravellerFromReview.navigate();    
  },
  /**
     * @function editTravellerDetails
     * @scope private
     * @description: invokes to edit fields from travellers page
     */
  editTravellerDetails : function(){
    this.view.FlxTraveller.isVisible = false;
    this.view.flxTravellerEditDetails.isVisible = true;
    this.view.forceLayout();
  },
  /**
     * @function saveTravellerData
     * @scope private
     * @description: invokes to save fields from travellers page
     */
  saveTravellerData : function(){
    this.view.flxTravellerEditDetails.isVisible = false;
    this.view.FlxTraveller.isVisible = true;
    this.view.forceLayout();
  },
  /**
     * @function editRouteDetails
     * @scope private
     * @description: invokes to edit fields from route page
     */
  editRouteDetails : function(){
    this.view.FlxRoute.isVisible = false;
    this.view.flxRouteDetailsEdit.isVisible = true;
    this.view.forceLayout();
  },
  /**
     * @function saveRouteDetails
     * @scope private
     * @description: invokes to save fields from route page
     */
  saveRouteDetails : function(){
    this.view.FlxRoute.isVisible = true;
    this.view.flxRouteDetailsEdit.isVisible = false;
    this.view.forceLayout();
  },
  /**
     * @function editTrackingDetails
     * @scope private
     * @description: invokes to edit fields from tracking page
     */
  editTrackingDetails : function(){
    this.view.FlxTrack.isVisible = false;
    this.view.flxTrackDetailsEdit.isVisible = true;
    this.view.forceLayout();
  },
  /**
     * @function saveTrackingDetails
     * @scope private
     * @description: invokes to save fields from tracking page
     */
  saveTrackingDetails : function(){
    this.view.FlxTrack.isVisible = true;
    this.view.flxTrackDetailsEdit.isVisible = false;
    this.view.forceLayout();
  },
  /**
     * @function editVehicleDetails
     * @scope private
     * @description: invokes to edit fields from vehicle page
     */
  editVehicleDetails : function(){
    this.view.FlxVehicle.isVisible = false;
    this.view.flxVehicleDetailsEdit.isVisible = true;
    this.view.forceLayout();
  },
  /**
     * @function saveVehicleDetails
     * @scope private
     * @description: invokes to save fields from vehicle page
     */
  saveVehicleDetails : function(){
    this.view.FlxVehicle.isVisible = true;
    this.view.flxVehicleDetailsEdit.isVisible = false;
    this.view.forceLayout();
  },
  /**
     * @function showEditableFields
     * @scope private
     * @description: invokes to show editable fields
     */
  showEditableFields : function(){
    this.view.FlxEditRouteDetails.isVisible = false;
    this.view.flxDepartureArrivalFields.isVisible = true;
    this.view.DepartureDetails.top = "0%";
    this.view.ArrivalDetails.top = "50%";
    this.view.FlxCheckinDetails.top = "931px";
    this.view.btnNext.isVisible = false;
    this.view.rchTextNext.isVisible = false;
  },
  /**
     * @function onClickOfDeparture
     * @scope private
     * @param {string} data
     * @description: invokes on click of departure
     */
  onClickOfDeparture : function(data){
    this.departureDetails = data;
  },
  /**
     * @function onClickOfArrival
     * @scope private
     * @param {string} data
     * @description: invokes on click of arrival
     */
  onClickOfArrival : function(data){
    this.arrivalDetails = data;
    this.view.flxDepartureArrivalFields.isVisible = false;
    this.view.DepartureDetails.top = "100%";
    this.view.ArrivalDetails.top = "100%";
    this.view.FlxEditRouteDetails.isVisible = true;
    this.view.FlxCheckinDetails.top = "450px";
    this.view.forceLayout();
    this.view.btnNext.isVisible = true;
    this.view.rchTextNext.isVisible = true;
    var departurePlace = (this.departureDetails).PlaceDetails;
    var departureDate = (this.departureDetails).Date;
    var date = departureDate.slice(4,10);
    var departureTime = (this.departureDetails).Time;
    var arrivalPlace = (this.arrivalDetails).PlaceDetails;
    var arrivalDate = (this.arrivalDetails).Date;
    var arrDate = arrivalDate.slice(4,10);
    var arrivalTime = (this.arrivalDetails).Time;
    this.view.lblDepartureFromValue.text = departurePlace;
    this.view.lblArrivalToValue.text = arrivalPlace;
    this.view.lblStartTimeValue.text = date.slice(4,6)+""+date.slice(0,4)+departureTime;
    this.view.lblArrivalTimeValue.text = arrDate.slice(4,6)+""+arrDate.slice(0,4)+arrivalTime;

  },
  /**
     * @function navigateToTravellerForm
     * @scope private
     * @description: invokes to navigate from review to travellers form
     */
  navigateToTravellerForm : function(){
    this.previousData.previousForm = "frmReviewDetails";
    var navigateToTravellerFromReview = new kony.mvc.Navigation("frmTravellerDetails");
    navigateToTravellerFromReview.navigate(this.previousData);
  },
  /**
     * @function navigateToRouteForm
     * @scope private
     * @description: invokes to navigate from review to route form
     */
  navigateToRouteForm : function(){
    this.previousData.previousForm = "frmReviewDetails";
    var navigateToRouteFromReview = new kony.mvc.Navigation("frmRoute");
    navigateToRouteFromReview.navigate(this.previousData);
  },
  /**
     * @function navigateToTrackingForm
     * @scope private
     * @description: invokes to navigate from review to tracking form
     */
  navigateToTrackingForm : function(){
    this.previousData.previousForm = "frmReviewDetails";
    var navigateToTrackingFromReview = new kony.mvc.Navigation("frmTrackingDetails");
    navigateToTrackingFromReview.navigate(this.previousData);
  },
  /**
     * @function navigateToVehicleForm
     * @scope private
     * @description: invokes to navigate from review to vehicle form
     */
  navigateToVehicleForm : function(){
    this.previousData.previousForm = "frmReviewDetails";
    var navigateToVehicleFromReview = new kony.mvc.Navigation("frmVehicleDetails");
    navigateToVehicleFromReview.navigate(this.previousData);
  },
  /**
     * @function convertTimeToUTC
     * @scope private
     * @description: invokes to convert time in UTC format
     */
  convertTimeToUTC : function(){
    var arrivalTime = this.previousData.trackingDetails.routeData.arrivalDate;
    var departureTime = this.previousData.trackingDetails.routeData.departureDate;
    var fullArrTime = "", fullDepTime = "";
    var splitArrTime = arrivalTime.split(" ");
    var splitDepTime = departureTime.split(" ");
    var arrTime = splitArrTime[1];
    var depTime = splitDepTime[1];
    if(arrTime.includes("PM")){
      var time = arrTime.substring(0,(arrTime.length-2));
      var min = time.split(":");
      var data = 12+parseInt(min[0]);
      fullArrTime = data+":"+min[1];
    }
    else{
      fullArrTime = arrTime.substring(0,(arrTime.length-2));
    }
    if(depTime.includes("PM")){
      var dTime = depTime.substring(0,(depTime.length-2));
      var dMin = dTime.split(":");
      var dData = 12+parseInt(dMin[0]);
      fullDepTime = dData+":"+dMin[1];
    }
    else{
      fullDepTime = depTime.substring(0,(depTime.length-2));
    }
    var arrMinSplit = fullArrTime.split(":");
    var arrTimeInSec = (parseInt(arrMinSplit[0])*60*60) + (parseInt(arrMinSplit[1])*60);
    var depMinSplit = fullDepTime.split(":");
    var depTimeInSec = (parseInt(depMinSplit[0])*60*60) + (parseInt(depMinSplit[1])*60);
    var diffInSecArrTime = parseInt(arrTimeInSec)-19800;
    var diffInSecDepTime = parseInt(depTimeInSec)-19800;
    var getArrivalHoursInUTC = parseInt(diffInSecArrTime/3600);
    var getDepatureHoursInUTC = parseInt(diffInSecDepTime/3600);
    var arrSec = parseInt(diffInSecArrTime) - (parseInt(getArrivalHoursInUTC)*60*60);
    var depSec = parseInt(diffInSecDepTime) - (parseInt(getDepatureHoursInUTC)*60*60);
    var getArrivalMinutesInUTC = arrSec/60;
    var getDepatureMinutesInUTC = depSec/60;
    this.arrivalTimeInUTC = getArrivalHoursInUTC.toString()+":"+getArrivalMinutesInUTC.toString()+":"+"00"+"Z";
    this.depatureTimeInUTC = getDepatureHoursInUTC.toString()+":"+getDepatureMinutesInUTC.toString()+":"+"00"+"Z";
    this.getPlaceLatitudeLongitude();
  },
  /**
     * @function getPlaceLatitudeLongitude
     * @scope private
     * @description: invokes to get latitude and longitude for departure and arrival address
     */
  getPlaceLatitudeLongitude : function(){
    var arrivalPlace = this.previousData.trackingDetails.routeData.arrivalPlace;
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("PlaceAutocomplete");
    var operationName = "getPlace";
    var arrData = {
      "input": arrivalPlace,
      "key": "AIzaSyBeIDNhaa-u8IZcdqkNub-N648OCzb9QH4",
    };
    if (kony.sdk.getCurrentInstance().currentClaimToken === null) {
      return;
    }
    var arrHeaders = {
      "Content-Type": "application/x-www-urlencoded",
      "X-Kony-Authorization": kony.sdk.getCurrentInstance().currentClaimToken
    };
    integrationObj.invokeOperation(operationName, arrHeaders, arrData, this.getArrivalPlaceIDSuccess.bind(this), this.getArrivalPlaceIDFailure.bind(this));
  },
  /**
     * @function getArrivalPlaceIDSuccess
     * @scope private
     * @param {object} response
     * @description: invokes as a success callback to getPlaceLatitudeLongitude
     */
  getArrivalPlaceIDSuccess : function(response){
    kony.application.dismissLoadingScreen();
    var place_id = response.predictions[0].place_id;
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("PlaceDetail");
    var operationName = "getDetail";
    var data = {
      "placeid": place_id,
      "key": "AIzaSyBeIDNhaa-u8IZcdqkNub-N648OCzb9QH4",
      "fields":"geometry"
    };
    if (kony.sdk.getCurrentInstance().currentClaimToken === null) {
      return;
    }
    var headers = {
      "Content-Type": "application/x-www-urlencoded",
      "X-Kony-Authorization": kony.sdk.getCurrentInstance().currentClaimToken
    };
    integrationObj.invokeOperation(operationName, headers, data, this.getArrivalLatSuccess.bind(this), this.getArrivalLatFailure.bind(this));
  },
  /**
     * @function getArrivalPlaceIDFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback to getPlaceLatitudeLongitude
     */
  getArrivalPlaceIDFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  },
  /**
     * @function getArrivalLatSuccess
     * @scope private
     * @param {object} response
     * @description: invokes as a success callback to getArrivalPlaceIDSuccess
     */
  getArrivalLatSuccess : function(response){
    kony.application.dismissLoadingScreen();
    this.arrivalLocation = response.location;
    var departurePlace = this.previousData.trackingDetails.routeData.departurePlace;
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("PlaceAutocomplete");
    var operationName = "getPlace";
    var depData = {
      "input": departurePlace,
      "key": "AIzaSyBeIDNhaa-u8IZcdqkNub-N648OCzb9QH4",
    };
    if (kony.sdk.getCurrentInstance().currentClaimToken === null) {
      return;
    }
    var depHeaders = {
      "Content-Type": "application/x-www-urlencoded",
      "X-Kony-Authorization": kony.sdk.getCurrentInstance().currentClaimToken
    };
    integrationObj.invokeOperation(operationName, depHeaders, depData, this.getDepaturePlaceIDSuccess.bind(this), this.getDepaturePlaceIDFailure.bind(this));

  },
  /**
     * @function getArrivalLatFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback to getArrivalPlaceIDSuccess
     */
  getArrivalLatFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  },
  /**
     * @function getDepaturePlaceIDSuccess
     * @scope private
     * @param {object} response
     * @description: invokes as a success callback to getArrivalLatSuccess
     */
  getDepaturePlaceIDSuccess : function(response){
    kony.application.dismissLoadingScreen();
    var place_id = response.predictions[0].place_id;
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("PlaceDetail");
    var operationName = "getDetail";
    var data = {
      "placeid": place_id,
      "key": "AIzaSyBeIDNhaa-u8IZcdqkNub-N648OCzb9QH4",
      "fields":"geometry"
    };
    if (kony.sdk.getCurrentInstance().currentClaimToken === null) {
      return;
    }
    var headers = {
      "Content-Type": "application/x-www-urlencoded",
      "X-Kony-Authorization": kony.sdk.getCurrentInstance().currentClaimToken
    };
    integrationObj.invokeOperation(operationName, headers, data, this.getDepatureLatSuccess.bind(this), this.getDepatureLatFailure.bind(this));
  },
  /**
     * @function getDepaturePlaceIDFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback to getArrivalLatSuccess
     */
  getDepaturePlaceIDFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  },	
  /**
     * @function getDepatureLatSuccess
     * @scope private
     * @param {number} expCode
     * @param {string} expMesg
     * @description: invokes as a success callback to getDepaturePlaceIDSuccess
     */
  getDepatureLatSuccess : function(response){
    this.depatureLocation = response.location;
    this.calculateTimeAndDate(); 
    this.createJourney();
  },
  /**
     * @function getDepatureLatFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback to getDepaturePlaceIDSuccess
     */
  getDepatureLatFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  },
  /**
     * @function calculateTimeAndDate
     * @scope private
     * @description: invokes to calculate time and date
     */
  calculateTimeAndDate : function(){
    var arrivalDate = this.arrFullDate.split(" ");
    var monthIndex = this.getMonthName(arrivalDate);
    this.updateArrivalDateAndTime = arrivalDate[3]+"-"+this.addZeroPrefix(monthIndex)+"-"+arrivalDate[2]+"T"+this.arrivalTimeInUTC;  
    var depatureDate = this.depFullDate.split(" ");
    var depMonthIndex = this.getMonthName(depatureDate);
    this.updateDepartureDateAndTime = depatureDate[3]+"-"+this.addZeroPrefix(depMonthIndex)+"-"+depatureDate[2]+"T"+this.depatureTimeInUTC; 
  },
   /**
     * @function getMonthName
     * @scope private
     * @param depatureDate - Array
     * @description: invokes to get month name
     */
  getMonthName : function(depatureDate){
    var depMonthIndex = "";
    switch(depatureDate[1]){
      case "Jan" :{
        depMonthIndex = 01;
        break;
      }
      case "Feb" :{
        depMonthIndex = 02;
        break;
      }
      case "Mar" :{
        depMonthIndex = 03;
        break;
      }
      case "Apr" :{
        depMonthIndex = 04;
        break;
      }
      case "May" :{
        depMonthIndex = 05;
        break;
      }
      case "Jun" :{
        depMonthIndex = 06;
        break;
      }
      case "Jul" :{
        depMonthIndex = 07;
        break;
      }
      case "Aug" :{
        depMonthIndex = 08;
        break;
      }
      case "Sep" :{
        depMonthIndex = 09;
        break;
      }
      case "Oct" :{
        depMonthIndex = 10;
        break;
      }
      case "Nov" :{
        depMonthIndex = 11;
        break;
      }
      case "Dec" :{
        depMonthIndex = 12;
        break;
      }
    }
    return depMonthIndex;
  },
  /**
     * @function addZeroPrefix
     * @scope private
     * @param {number} number
     * @description: invokes to prefix zero to single digit numbers
     */
  addZeroPrefix : function(number) {
    var result;
    if (number >= 0 && number < 10) {
      result = "0" + number;
    } else {
      result = number;
    }
    return result;
  },
  /**
     * @function createJourney
     * @scope private
     * @description: invokes to create journey
     */
  createJourney : function(){
    try {
      var objectInstance = null;
      var sdkClient = new kony.sdk.getCurrentInstance();
      if (Object.keys(sdkClient).length !== 0) {
        objectInstance = sdkClient.getObjectService("JourneyObSrvc", {
          "access": "online"
        });
      }
      if (objectInstance === null || objectInstance === undefined) {
        kony.application.dismissLoadingScreen();
        kony.print("Please connect app to MF");
        return;
      }
      var dataObject = new kony.sdk.dto.DataObject("checkin_interval_master_tbl");
      var options = {
        "dataObject": dataObject,
        "headers": {},
        "queryParams": {}
      };
      kony.application.showLoadingScreen("", "Fetching checkin interval ...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
      if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        objectInstance.fetch(options, this.checkinSuccess.bind(this), this.checkinFailure.bind(this));
      } else {
        kony.application.dismissLoadingScreen();
        kony.print("No Network connected");
      }
    } catch (exception) {
      kony.application.dismissLoadingScreen();
      kony.print(exception);
    }
  },
  /**
     * @function checkinSuccess
     * @scope private
     * @param {object} response
     * @description: invokes as a sucess callback to createJourney
     */
  checkinSuccess : function(response){
    kony.application.dismissLoadingScreen();
    var data = response.records;
    var objectInstance = null;
    var sdkClient = new kony.sdk.getCurrentInstance();
    if (Object.keys(sdkClient).length !== 0) {
      objectInstance = sdkClient.getObjectService("JourneyObSrvc", {
        "access": "online"
      });
    }
    if (objectInstance === null || objectInstance === undefined) {
      kony.application.dismissLoadingScreen();
      kony.print("Please connect app to MF");
      return;
    }
    var dataObject = new kony.sdk.dto.DataObject("vehicle_tbl");
    var options = {
      "dataObject": dataObject,
      "headers": {},
      "queryParams": {}
    };
    kony.application.showLoadingScreen("", "Fetching vehicle details ...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
      objectInstance.fetch(options, this.vehicleDetailSuccess.bind(this,data), this.vehicleDetailFailure.bind(this));
    } else {
      kony.application.dismissLoadingScreen();
      kony.print("No Network connected");
    } 
  },
  /**
     * @function checkinFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback createJourney
     */
  checkinFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  },
  /**
     * @function vehicleDetailSuccess
     * @scope private
     * @param {object} data, response
     * @description: invokes as a success callback checkinSuccess
     */
  vehicleDetailSuccess : function(data, response){
    kony.application.dismissLoadingScreen();
    var vehicleData = response.records, originalVehicleDetails = [];
    for(var i=0;i<vehicleData.length;i++){
      if(vehicleData[i].softdeleteflag === false){
        var details = vehicleData[i];
        originalVehicleDetails.push(details);
      }  
    }
    var checkinValue = this.previousData.trackingDetails.routeData.checkInDetail;
    var reasonValue = this.view.lblTrackerReasonValue.text;
    if(reasonValue === "Exploration"){
      this.journeyReason = "1";
    }
    else if(reasonValue === "Site Verification"){
      this.journeyReason = "2";
    }
    else{
      this.journeyReason = "3";
    }
    if(checkinValue === "No Checkins"){
      this.journeyCheckin = "3";
      this.journeyCheckinInterval = null;
    }
    else{
      this.journeyCheckin = "1";
    }
    var checkinMinValue = checkinValue.split(" ");
    for(var j=0;j<data.length;j++){
      if(parseInt(checkinMinValue[0]) === data[j].checkin_interval_minutes){
        this.journeyCheckinInterval = data[j].checkin_interval_row_id_pk;
      }
    }
    var vehicleRegNo = this.view.lblVehicleRegistrationValue.text;
    for(var k=0;k<originalVehicleDetails.length;k++){
      if(vehicleRegNo === originalVehicleDetails[k].vehicle_reg_num){
        this.journeyVehicleID = originalVehicleDetails[k].vehicle_id_pk;
        this.createJourneyRecord();
      }
    }
    if(vehicleRegNo === "----"){
      this.journeyVehicleID = null;
      this.createJourneyRecord();
    }
    else{
      this.createNewEntryForVehicle();
    }

  },
  /**
     * @function vehicleDetailFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback to checkinSuccess
     */
  vehicleDetailFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  },
  /**
     * @function createJourneyRecord
     * @scope private
     * @description: invokes to post call to object services for creating journey
     */
  createJourneyRecord : function(){
    var checkin_interval_row_id_fk = this.journeyCheckinInterval;
    var checkin_type_id_fk = this.journeyCheckin;
    var journeystatus_code_fk = "1";
    var journey_expected_arrivalpoint_address = this.view.lblRouteToValue.text;
    var journey_expected_arrivalpoint_lat = this.arrivalLocation.lat;
    var journey_expected_arrivalpoint_lon = this.arrivalLocation.lng;
    var journey_expected_arrival_datetime = this.updateArrivalDateAndTime;
    var journey_expected_departure_address = this.view.lblRouteFromValue.text;
    var journey_expected_departure_datetime = this.updateDepartureDateAndTime;
    var journey_expected_departure_lat = this.depatureLocation.lat;
    var journey_expected_departure_lon = this.depatureLocation.lng;
    var journey_radio = this.view.lblTravellerRadioValue.text;
    var journey_reason_id_fk = this.journeyReason;
    var journey_satellite = this.view.lblTravellerSatellitePhoneValue.text;
    var journey_selected_vehicle_id_fk = this.journeyVehicleID;
    var journey_supervisor_camp_room_num = this.view.lblTrackerCPNValue.text;
    var journey_supervisor_emp_id = this.view.lblTrackerSiderepValue.text;
    var journey_supervisor_name = this.view.lblTrackerSupervisorValue.text;
    var journey_supervisor_phone = this.view.lblTrackerMobileValue.text;
    var journey_tracking_point_id_fk = "1";
    var softdeleteflag = false;
    var user_emp_id_fk = this.view.lblUserIdReviewValue.text;
    var journey_created_by_fk = this.view.lblUserIdReviewValue.text;
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("journey_tbl");
    dataObject.addField("checkin_interval_row_id_fk", parseInt(checkin_interval_row_id_fk));
    dataObject.addField("checkin_type_id_fk", checkin_type_id_fk);
    dataObject.addField("journeystatus_code_fk", journeystatus_code_fk);
    dataObject.addField("journey_expected_arrivalpoint_address", journey_expected_arrivalpoint_address);
    dataObject.addField("journey_expected_arrivalpoint_lat", journey_expected_arrivalpoint_lat);
    dataObject.addField("journey_expected_arrivalpoint_lon", journey_expected_arrivalpoint_lon);
    dataObject.addField("journey_expected_arrival_datetime", journey_expected_arrival_datetime);
    dataObject.addField("journey_expected_departure_address", journey_expected_departure_address);

    dataObject.addField("journey_expected_departure_datetime", journey_expected_departure_datetime);
    dataObject.addField("journey_expected_departure_lat", journey_expected_departure_lat);
    dataObject.addField("journey_expected_departure_lon", journey_expected_departure_lon);
    dataObject.addField("journey_radio", journey_radio);
    dataObject.addField("journey_reason_id_fk", journey_reason_id_fk);
    dataObject.addField("journey_satellite", journey_satellite);
    if(journey_selected_vehicle_id_fk !== null){
      dataObject.addField("journey_selected_vehicle_id_fk", journey_selected_vehicle_id_fk);
    }
    dataObject.addField("journey_supervisor_camp_room_num", journey_supervisor_camp_room_num);
    dataObject.addField("journey_supervisor_emp_id", journey_supervisor_emp_id);
    dataObject.addField("journey_supervisor_name", journey_supervisor_name);
    dataObject.addField("journey_supervisor_phone", journey_supervisor_phone);
    dataObject.addField("journey_tracking_point_id_fk", journey_tracking_point_id_fk);
    dataObject.addField("softdeleteflag", softdeleteflag);
    dataObject.addField("user_emp_id_fk", user_emp_id_fk);
    dataObject.addField("journey_created_by_fk", journey_created_by_fk);
    var options = {
      "dataObject": dataObject
    };
    objSvc.create(options,
                  this.journeyCreatedSuccess.bind(this),
                  this.journeyCreatedFailure.bind(this)
                 );

  },
  /**
     * @function createNewEntryForVehicle
     * @scope private
     * @description: invokes to add new vehicle to vehicle_tbl 
     */
  createNewEntryForVehicle : function(){
    kony.application.dismissLoadingScreen();
    var make = this.previousData.newVehicleData.vehicleMake;
    var model = this.previousData.newVehicleData.vehicleModel;
    var color = this.previousData.newVehicleData.vehicleColor;
    var number = this.previousData.newVehicleData.vehicleRno;
    var id = null;
    if(this.previousData.newVehicleData.vehicleType !== ""){
      id = this.previousData.newVehicleData.vehicleType;
    }
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("vehicle_tbl");
    if(id !== null){
      dataObject.addField("user_emp_id_fk", id);  
    }
    dataObject.addField("vehicle_color", color);
    dataObject.addField("vehicle_make", make);
    dataObject.addField("vehicle_model", model);
    dataObject.addField("vehicle_reg_num", number);
    dataObject.addField("softdeleteflag", false);

    var options = {
      "dataObject": dataObject
    };
    objSvc.create(options,
                  this.createNewEntryForVehicleSuccess.bind(this),
                  this.createNewEntryForVehicleFailure.bind(this)
                 );
  },
  /**
     * @function createNewEntryForVehicleSuccess
     * @scope private
     * @param {object} response
     * @description: invokes as success callback to createNewEntryForVehicle
     */
  createNewEntryForVehicleSuccess : function(response){
    kony.application.dismissLoadingScreen();
    this.journeyVehicleID = response.vehicle_id_pk;
    this.createJourneyRecord();
  },
  /**
     * @function createNewEntryForVehicleFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback to createNewEntryForVehicle
     */
  createNewEntryForVehicleFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  },
  /**
     * @function journeyCreatedSuccess
     * @scope private
     * @param {object} response
     * @description: invokes as a success callback to createJourneyRecord
     */
  journeyCreatedSuccess : function(response){
    kony.application.dismissLoadingScreen();
    this.createdJourneyKey = response.journey_id_pk;
    if(this.passengerOneName !== ""){
      var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
        "access": "online"
      });
      var dataObject = new kony.sdk.dto.DataObject("journey_passengers_tbl");
      dataObject.addField("journey_id_fk", this.createdJourneyKey);
      dataObject.addField("passenger_mobile", this.passengerOneMobile.text);
      dataObject.addField("passenger_name", this.passengerOneName.text);
      dataObject.addField("softdeleteflag", false);

      var options = {
        "dataObject": dataObject
      };
      objSvc.create(options,
                    this.passengerOneSuccess.bind(this),
                    this.passengerOneFailure.bind(this)
                   );
    }
    var navigationObj = new kony.mvc.Navigation("frmJourneyList");
    navigationObj.navigate();
  },
  /**
     * @function journeyCreatedFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback to createJourneyRecord
     */
  journeyCreatedFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  },
  /**
     * @function passengerOneSuccess
     * @scope private
     * @param {object} response
     * @description: invokes to add a new passenger
     */
  passengerOneSuccess : function(response){
    kony.application.dismissLoadingScreen();
    if(this.passengerTwoName !== ""){
      var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
        "access": "online"
      });
      var dataObject = new kony.sdk.dto.DataObject("journey_passengers_tbl");
      dataObject.addField("journey_id_fk", this.createdJourneyKey);
      dataObject.addField("passenger_mobile", this.passengerTwoMobile.text);
      dataObject.addField("passenger_name", this.passengerTwoName.text);
      dataObject.addField("softdeleteflag", false);

      var options = {
        "dataObject": dataObject
      };
      objSvc.create(options,
                    this.passengerTwoSuccess.bind(this),
                    this.passengerTwoFailure.bind(this)
                   );
    }
    var navigationObj = new kony.mvc.Navigation("frmJourneyList");
    navigationObj.navigate();
  },
  /**
     * @function passengerOneFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback to journeyCreatedSuccess
     */
  passengerOneFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  },
  /**
     * @function passengerTwoSuccess
     * @scope private
     * @param {object} response
     * @param {string} expMesg
     * @description: invokes as a success callback to passengerOneSuccess
     */
  passengerTwoSuccess : function(response){
    kony.application.dismissLoadingScreen();
    var navigationObj = new kony.mvc.Navigation("frmJourneyList");
    navigationObj.navigate();
  },
  /**
     * @function passengerTwoFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback to passengerOneSuccess
     */
  passengerTwoFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  }
});