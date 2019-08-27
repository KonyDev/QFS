define({ 
  departureDetails : "",
  arrivalDetails : "",
  selectedTimeFrame : "",
  previousData : "",
  globalData : "",
  isLocal : true,
  checkInTime : "",
  arrivalFullDate : "",
  depatureFullDate : "",
  dashboardLabel : "Back to Dashboard",
  reviewLabel : "Back to Review",
  deactiveIcon : "defaultdeselect.png",
  activeIcon : "selected.png",
  
  /**
     * @function onNavigate
     * @scope private
     * @description: invokes on form creation
     */
  onNavigate : function(data){
    if(data.previousForm === "frmTravellerDetails"){
      this.previousData = data;
      this.addDataToRouteTemplate();
      this.isLocal = true;
    }
    else{
      this.globalData = data;
      this.editRouteDetails();
      this.isLocal = false;
    }	
  },
  /**
     * @function updateData
     * @scope private
     * @description: invokes to update data
     */
  updateData : function(){
    var fromPlace = this.view.lblDepartureFromValue.text;
    var startDate = this.view.lblStartTimeValue.text;
    var toPlace = this.view.lblArrivalToValue.text;
    var arrDate = this.view.lblArrivalTimeValue.text;

    if(this.selectedTimeFrame !== null || this.selectedTimeFrame !== ""){
      this.checkInTime = this.selectedTimeFrame;  
    }
    else{
      this.checkInTime = "No Checkins";
    }

    var routeDetails = {
      "departurePlace" : fromPlace,
      "arrivalPlace" : toPlace,
      "departureDate" : startDate,
      "arrivalDate" : arrDate,
      "checkInDetail" : this.checkInTime,
      "previousForm":"frmRoute",
      "arrivalFullDate":this.arrivalFullDate,
      "depatureFullDate":this.depatureFullDate
    };
    var travllerDetails = this.globalData.trackingDetails.routeData.travellerDetails;
    this.globalData.trackingDetails.routeData = routeDetails;
    this.globalData.trackingDetails.routeData.travellerDetails = travllerDetails;
  },
  /**
     * @function backToReview
     * @scope private
     * @description: invokes to get back to review from route
     */
  backToReview : function(){
    if(this.view.lblDashboard.text === this.reviewLabel){
      var navigationObj = new kony.mvc.Navigation("frmReviewDetails");
      navigationObj.navigate(this.globalData);  
    }
    else{
      alert("Data will be lost");
      this.resetRouteDetails();
      var navigationObject = new kony.mvc.Navigation("frmJourneyList");
      navigationObject.navigate();
    }
  },
  /**
     * @function resetRouteDetails
     * @scope private
     * @description: invokes to reset route details
     */
  resetRouteDetails : function(){
    this.view.lblDepartureFromValue.text = "123 Backer Street";
    this.view.lblArrivalToValue.text = "221 Birmingham Street";
    this.view.lblStartTimeValue.text = "25Sep  10:10AM";
    this.view.lblArrivalTimeValue.text = "25Sep  4:10PM";
    this.view.imgLocationCheckin.src = this.deactiveIcon;
    this.view.imgTimeBasedCheckin.src = this.deactiveIcon;
    this.view.imgNoCheckins.src = this.deactiveIcon;
    this.view.forceLayout();
  },
  /**
     * @function addDataToRouteTemplate
     * @scope private
     * @description: invokes to add data to route template
     */
  addDataToRouteTemplate : function(){
    this.view.btnNext.isVisible = true;
    this.view.rchTextNext.isVisible = true;
    this.view.btnSave.isVisible = false;
    this.view.lblDashboard.text = this.dashboardLabel;
    this.view.forceLayout();
  },
  /**
     * @function editRouteDetails
     * @scope private
     * @description: invokes to edit route data
     */
  editRouteDetails : function(){
    this.view.btnNext.isVisible = false;
    this.view.rchTextNext.isVisible = false;
    this.view.btnSave.isVisible = true;
    this.view.lblDashboard.text = this.reviewLabel;
    this.view.forceLayout();
  },
  /**
     * @function showEditableFields
     * @scope private
     * @description: invokes to turn ON the eidtable fields
     */
  showEditableFields : function(){
    this.view.FlxEditRouteDetails.isVisible = false;
    this.view.flxDepartureArrivalFields.isVisible = true;
    this.view.DepartureDetails.top = "0%";
    this.view.ArrivalDetails.top = "50%";
    this.view.FlxCheckinDetails.top = "931px";
    this.view.btnNext.isVisible = false;
    this.view.rchTextNext.isVisible = false;
    this.view.btnSave.isVisible = false;
  },
  /**
     * @function onClickOfDeparture
     * @scope private
     * @para data - object
     * @description: invokes to assign data to departureDetails
     */
  onClickOfDeparture : function(data){
    this.departureDetails = data;
  },
  /**
     * @function onClickOfArrival
     * @scope private
     * @para data - object
     * @description: invokes to assign data to arrival details
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
    if(!this.isLocal){
      this.view.btnSave.isVisible = true;
      this.view.rchTextNext.isVisible = false;
      this.view.btnNext.isVisible = false;
    }
    var departurePlace = (this.departureDetails).PlaceDetails;
    var departureDate = (this.departureDetails).Date;
    this.depatureFullDate = (this.departureDetails).Date;
    var date = departureDate.slice(4,10);
    var departureTime = (this.departureDetails).Time;

    var arrivalPlace = (this.arrivalDetails).PlaceDetails;
    var arrivalDate = (this.arrivalDetails).Date;
    this.arrivalFullDate = (this.arrivalDetails).Date;
    var arrDate = arrivalDate.slice(4,10);
    var arrivalTime = (this.arrivalDetails).Time;


    this.view.lblDepartureFromValue.text = departurePlace;
    this.view.lblArrivalToValue.text = arrivalPlace;
    this.view.lblStartTimeValue.text = date.slice(4,6)+""+date.slice(0,4)+departureTime;
    this.view.lblArrivalTimeValue.text = arrDate.slice(4,6)+""+arrDate.slice(0,4)+arrivalTime;


  },
  /**
     * @function changeStatus
     * @scope private
     * @param object - eventObj
     * @description: invokes to change status icons
     */
  changeStatus : function(eventObj){
    var isPreviouslySelected = true;
    var widgetId = eventObj.id;
    if(isPreviouslySelected){
      this.view.imgTimeBasedCheckin.src = this.deactiveIcon;  
      this.view.imgNoCheckins.src = this.deactiveIcon;  
    }
    if(widgetId === "flxTimeBasedCheckin"){
      this.view.lblCheckinTime.isVisible = true;
      this.view.listboxTimeFrame.isVisible = true;
      this.view.flxNoCheckin.top = "309px";
      this.view.lblHorizontalLine.top = "368px";
      if(this.view.imgTimeBasedCheckin.src === this.activeIcon){
        this.view.imgTimeBasedCheckin.src = this.deactiveIcon;  
        isPreviouslySelected = false;
      }
      else{
        this.view.imgTimeBasedCheckin.src = this.activeIcon;
        isPreviouslySelected = true;
        this.checkInTime = this.view.listboxTimeFrame.selectedKeyValue[1];
      }      
    }
    else{
      this.view.lblCheckinTime.isVisible = false;
      this.view.listboxTimeFrame.isVisible = false;
      this.view.flxNoCheckin.top = "200px";
      this.view.lblHorizontalLine.top = "260px";
      if(this.view.imgNoCheckins.src === this.activeIcon){
        this.view.imgNoCheckins.src = this.deactiveIcon;  
        isPreviouslySelected = false;
      }
      else{
        this.view.imgNoCheckins.src = this.activeIcon;
        isPreviouslySelected = true;
        this.selectedTimeFrame = "";
        this.checkInTime = "No CheckIn";
      }
    }
    this.view.forceLayout();
  },
  /**
     * @function selectedTime
     * @scope private
     * @description: invokes to set time to variable
     */
  selectedTime : function(eventObject){
    this.selectedTimeFrame = eventObject.selectedKeyValue[1];
  },
  /**
     * @function onClickOfNext
     * @scope private
     * @description: invokes on click of next button
     */
  onClickOfNext : function(){
    var fromPlace = this.view.lblDepartureFromValue.text;
    var startDate = this.view.lblStartTimeValue.text;
    var toPlace = this.view.lblArrivalToValue.text;
    var arrDate = this.view.lblArrivalTimeValue.text;

    if(this.selectedTimeFrame !== ""){
      this.checkInTime = this.selectedTimeFrame;  
    }
    else if(this.checkInTime === ""){
      this.checkInTime = "No Checkins";
    }

    var routeDetails = {
      "departurePlace" : fromPlace,
      "arrivalPlace" : toPlace,
      "departureDate" : startDate,
      "arrivalDate" : arrDate,
      "checkInDetail" : this.checkInTime,
      "travellerDetails": this.previousData,
      "previousForm":"frmRoute",
      "arrivalFullDate":this.arrivalFullDate,
      "depatureFullDate":this.depatureFullDate
    };

    var navigationObj = new kony.mvc.Navigation("frmTrackingDetails");
    navigationObj.navigate(routeDetails);
  },
  /**
     * @function fetchTimeBasedValues
     * @scope private
     * @description: invokes to fetch time based checkin values from backend
     */
  fetchTimeBasedValues : function(){
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
      kony.application.showLoadingScreen("", "Fetching Time Based Values ...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
      if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        objectInstance.fetch(options, this.fetchTimeBasedValuesSuccess.bind(this), this.fetchTimeBasedValuesFailure.bind(this));
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
     * @function fetchTimeBasedValuesSuccess
     * @scope private
     * @param (object) response
     * @description: invokes as a success callback to fetchTimeBasedValues
     */
  fetchTimeBasedValuesSuccess : function(response){
    kony.application.dismissLoadingScreen();
    var records = response.records;
    var timebasedValues = [];
    for(var index=0;index<records.length;index++){
      var values = records[index].checkin_interval_minutes;
      timebasedValues.push(values);
    }
    var fetchedTimeBasedData = [];
    for(var i = 0;i<timebasedValues.length;i++){
      var data = [("lbl"+(i+1)),(timebasedValues[i]+" Minutes frame")];
      fetchedTimeBasedData.push(data);
    }
    this.view.listboxTimeFrame.masterData = fetchedTimeBasedData;
    this.view.forceLayout();

  },
  /**
     * @function fetchTimeBasedValuesFailure
     * @scope private
     * @param (object) err
     * @description: invokes as a success callback to fetchTimeBasedValues
     */
  fetchTimeBasedValuesFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  }
});