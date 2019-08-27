define({ 
  selectedValue : "",
  previousData : "",
  globalData : "",
  dashboardLabel : "Back to Dashboard",
  reviewLabel : "Back to Review",
  /**
     * @function onNavigate
     * @scope private
     * @param (json) data
     * @description: invokes when form is loaded
     */
  onNavigate : function(data){
    if(data.previousForm === "frmRoute"){
      this.previousData = data;
      this.addDataToTrackingTemplate();
    }
    else{
      this.globalData = data;
      this.editTrackingDetails();
    }
  },
  /**
     * @function addDataToTrackingTemplate
     * @scope private
     * @description: invokes to add data to tracking template
     */
  addDataToTrackingTemplate : function(){
    this.view.btnNextStep.isVisible = true;
    this.view.rchtxtNextStep.isVisible = true;
    this.view.btnSave.isVisible = false;
    this.view.lblDashboard.text = this.dashboardLabel;
    this.view.forceLayout();
  },
  /**
     * @function editTrackingDetails
     * @scope private
     * @description: invokes to edit tracking details
     */
  editTrackingDetails : function(){
    this.view.btnNextStep.isVisible = false;
    this.view.rchtxtNextStep.isVisible = false;
    this.view.btnSave.isVisible = true;
    this.view.lblDashboard.text = this.reviewLabel;
    this.view.forceLayout();
  },
  /**
     * @function backToReview
     * @scope private
     * @description: invokes to navigate to review details
     */
  backToReview : function(){
    if(this.view.lblDashboard.text === this.reviewLabel){
      var navigationObj = new kony.mvc.Navigation("frmReviewDetails");
      navigationObj.navigate(this.globalData);  
    }
    else{
      alert("Data will be lost");
      this.resetTrackingDetails();
      var navigationObject = new kony.mvc.Navigation("frmJourneyList");
      navigationObject.navigate();
    }
  },
  /**
     * @function resetTrackingDetails
     * @scope private
     * @description: invokes to reset tracking details
     */
  resetTrackingDetails : function(){
    this.view.TextFieldName.placeholder = "Enter Supervisor Name";
    this.view.TextFieldMobile.placeholder = "999-999-9999";
    this.view.TextFieldRoomNo.placeholder = "Enter Camp Room Number";
    this.view.TextFieldSiterepName.placeholder = "Enter Employee ID";
    this.view.TextFieldName.text = "";
    this.view.TextFieldMobile.text = "";
    this.view.TextFieldRoomNo.text = "";
    this.view.TextFieldSiterepName.text = "";
    this.view.forceLayout();
  },
  /**
     * @function updateData
     * @scope private
     * @description: invokes to update tracking details
     */
  updateData : function(){
    var journeyReason;
    if(this.selectedValue !== ""){
      journeyReason = this.selectedValue;
    }
    else{
      journeyReason = this.view.listboxData.selectedKeyValue[1];
    }
    var supervisorName = this.view.TextFieldName.text;
    var supervisorMobile = this.view.TextFieldMobile.text;
    var supervisorRoomNo = this.view.TextFieldRoomNo.text;
    var supervisorEmpID = this.view.TextFieldSiterepName.text;

    var trackingDetails = {
      "journeyReason":journeyReason,
      "supervisorName":supervisorName,
      "supervisorMobile":supervisorMobile,
      "supervisorRoomNo":supervisorRoomNo,
      "supervisorEmpID":supervisorEmpID,
      "previousForm" : "frmTrackingDetails"
    };
    var routeDetails = this.globalData.trackingDetails.routeData;
    this.globalData.trackingDetails = trackingDetails;
    this.globalData.trackingDetails.routeData = routeDetails;
  },
  /**
     * @function setData
     * @scope private
     * @description: invokes to set data to the tracking json
     */
  setData : function(){
    var journeyReason;
    if(this.selectedValue !== ""){
      journeyReason = this.selectedValue;
    }
    else{
      journeyReason = this.view.listboxData.selectedKeyValue[1];
    }
    var supervisorName = this.view.TextFieldName.text;
    var supervisorMobile = this.view.TextFieldMobile.text;
    var supervisorRoomNo = this.view.TextFieldRoomNo.text;
    var supervisorEmpID = this.view.TextFieldSiterepName.text;

    var trackingDetails = {
      "journeyReason":journeyReason,
      "supervisorName":supervisorName,
      "supervisorMobile":supervisorMobile,
      "supervisorRoomNo":supervisorRoomNo,
      "supervisorEmpID":supervisorEmpID,
      "routeData" : this.previousData,
      "previousForm" : "frmTrackingDetails"
    };
    var navigationObj = new kony.mvc.Navigation("frmVehicleDetails");
    navigationObj.navigate(trackingDetails);

  },
  /**
     * @function selectedData
     * @scope private
     * @param (object) - eventObj
     * @description: invokes on selection of key fron listbox
     */
  selectedData : function(eventObj){
    this.selectedValue = this.view.listboxData.selectedkeyvalue[1];
  },
  /**
     * @function fetchJourneyReason
     * @scope private
     * @description: invokes to fetch journey reason
     */
  fetchJourneyReason : function(){
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
      var dataObject = new kony.sdk.dto.DataObject("journey_reasons_master_tbl");
      var options = {
        "dataObject": dataObject,
        "headers": {},
        "queryParams": {}
      };
      kony.application.showLoadingScreen("", "Fetching Journey Reason ...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
      if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        objectInstance.fetch(options, this.fetchJourneyReasonSuccess.bind(this), this.fetchJourneyReasonFailure.bind(this));
      } else {
        kony.application.dismissLoadingScreen();
        kony.print("No Network connected");
      }
    } catch (exception) {
      kony.application.dismissLoadingScreen();
      kony.print("Something went wrong"+JSON.stringify(exception));
    }
  },
  /**
     * @function fetchJourneyReasonSuccess
     * @scope private
     * @param (object) response
     * @description: invokes as a success callback to fetchJourneyReason
     */
  fetchJourneyReasonSuccess : function(response){
    kony.application.dismissLoadingScreen();
    var data = response.records;
    var reason =[];
    for(var index = 0;index<data.length;index++){
      var journeyReason = data[index].journey_reason;
      reason.push(journeyReason);
    }
    var fetchedData = [];
    for(var i = 0;i<reason.length;i++){
      var value = [("lbl"+(i+1)),reason[i]];
      fetchedData.push(value);
    }
    this.view.forceLayout();
    this.view.listboxData.masterData = fetchedData;
  },
  /**
     * @function fetchJourneyReasonFailure
     * @scope private
     * @param (object) err
     * @description: invokes as a failure callback to fetchJourneyReason
     */
  fetchJourneyReasonFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("Something went wrong"+JSON.stringify(err));
  }

});