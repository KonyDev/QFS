define({ 
  count : 1,
  globalData : "",
  passengers : 0,
  dashboardLabel : "Back to Dashboard",
  reviewLabel : "Back to Review",
  /**
     * @function onNavigate
     * @scope private
     * @description: invokes when form is loaded
     */
  onNavigate : function(data){
    if(data === undefined || data === ""){
      this.addDataToTemplate();
    }
    else {
      this.editTravellerDetails(data);
    }
  },
  /**
     * @function addDataToTemplate
     * @scope private
     * @description: invokes to add data to template
     */
  addDataToTemplate : function(){
    this.view.lblDashboard.text = this.dashboardLabel;
    this.view.btnSave.isVisible = false;
    this.view.rchtxtNextStep.isVisible = true;
    this.view.btnNextStep.isVisible = true;
    this.view.forceLayout();
  },
  /**
     * @function editTravellerDetails
     * @scope private
     * $param data
     * @description: invokes to edit traveller details
     */
  editTravellerDetails : function(data){
    this.globalData = data;
    this.view.lblDashboard.text = this.reviewLabel;
    this.view.btnSave.isVisible = true;
    this.view.rchtxtNextStep.isVisible = false;
    this.view.btnNextStep.isVisible = false;
    this.view.forceLayout();
  },
  /**
     * @function updateData
     * @scope private
     * @description: invokes to update traveller details
     */
  updateData : function(){
    var name = this.view.TextFieldName.text;
    var mobile = this.view.TextFieldMobile.text;
    var phone = this.view.TextFieldRoomNo.text;
    var siterep = this.view.TextFieldSiterepName.text;
    var userId = this.view.TextFieldUserID.text;
    var passengerNameMobile = [];
    var passengerData = this.view.segAddPassenger.data;
    if(passengerData === null || passengerData === "" || passengerData === undefined){
      passengerNameMobile = "";
    }
    else{
      for(var index = 0; index<passengerData.length;index++){
        var passengers = {"Name":passengerData[index].txtPassengerName,
                          "Mobile":passengerData[index].txtPassengerMobile};
        passengerNameMobile.push(passengers);
      }
    }
    var travellerDetails = {
      "name":name,
      "mobile":mobile,
      "phone":phone,
      "siterep":siterep,
      "userID":userId,
      "passengerDetails":passengerNameMobile,
      "previousForm":"frmTravellerDetails"
    };
    this.globalData.trackingDetails.routeData.travellerDetails = travellerDetails;
  },
  /**
     * @function backToReview
     * @scope private
     * @description: invokes to navigate back to review form
     */
  backToReview : function(){
    if(this.view.lblDashboard.text === this.reviewLabel){
      var navigationObj = new kony.mvc.Navigation("frmReviewDetails");
      navigationObj.navigate(this.globalData);  
    }
    else{
      alert("Data will be lost");
      var navigationObject = new kony.mvc.Navigation("frmJourneyList");
      navigationObject.navigate();
    }
  },
  /**
     * @function resetTravellersDetails
     * @scope private
     * @description: invokes to reset traveller detail
     */
  resetTravellersDetails : function(){
    this.view.TextFieldName.text = "";
    this.view.TextFieldMobile.text = "";
    this.view.TextFieldRoomNo.text = "";
    this.view.TextFieldSiterepName.text = "";
    this.view.TextFieldUserID.text = "";
    this.view.TextFieldName.placeholder = "Enter Your Name";
    this.view.TextFieldMobile.placeholder = "999-999-9999";
    this.view.TextFieldRoomNo.placeholder = "Enter Satellite Phone Number";
    this.view.TextFieldSiterepName.placeholder = "Enter Radio Number";
    this.view.TextFieldUserID.placeholder = "Enter User ID";
    this.view.segAddPassenger.removeAll();
    this.view.flxSegData.isVisible = false;
    this.count = 1;
    this.view.forceLayout();
  },
  /**
     * @function setData
     * @scope private
     * @description: invokes to set data to the template
     */
  setData : function(){
    var name = this.view.TextFieldName.text;
    var mobile = this.view.TextFieldMobile.text;
    var phone = this.view.TextFieldRoomNo.text;
    var siterep = this.view.TextFieldSiterepName.text;
    var userId = this.view.TextFieldUserID.text;
    var passengerNameMobile = [];
    var passengerData = this.view.segAddPassenger.data;
    if(passengerData === null || passengerData === "" || passengerData === undefined){
      passengerNameMobile = "";
    }
    else{
      for(var index = 0; index<passengerData.length;index++){
        var passengers = {"Name":passengerData[index].txtPassengerName,
                          "Mobile":passengerData[index].txtPassengerMobile};
        passengerNameMobile.push(passengers);
      }
    }
    var travellerDetails = {
      "name":name,
      "mobile":mobile,
      "phone":phone,
      "siterep":siterep,
      "userID":userId,
      "passengerDetails":passengerNameMobile,
      "previousForm":"frmTravellerDetails"
    };
    var navigationObj = new kony.mvc.Navigation("frmRoute");
    navigationObj.navigate(travellerDetails);
  },
  /**
     * @function addPassengers
     * @scope private
     * @description: invokes to add passengers
     */
  addPassengers : function(){
    this.view.flxSegData.isVisible = true;
    if(this.count === 1){
      this.view.segAddPassenger.removeAll();
    }
    var data = {
      "lblPassenger":"Passenger"+" "+this.count,
      "lblPassengerName":"Name",
      "lblPassengerMobile":"Mobile",
      "imgAddPassenger":"crossimageblue.png",
      "txtPassengerName":{placeholder:"Enter Name"},
      "txtPassengerMobile":{placeholder:"Enter Mobile Number"}
    };
    this.view.segAddPassenger.addDataAt(data, this.count-1);
    this.count++;
    this.view.forceLayout();
  },
  /**
     * @function deleteSelectedRow
     * @scope private
     * @param rowIndex
     * @description: invokes to delete a particular row
     */
  deleteSelectedRow : function(rowIndex){
    this.view.segAddPassenger.removeAt(rowIndex);
    this.count--;
    this.passengers--;
    if(this.passengers<=2){
      this.view.flxAddPassenger.isVisible = true;
      this.passengers++;
    }
    else{
      this.view.flxAddPassenger.isVisible = false;
    }
    if(this.count === 1){
      this.view.flxSegData.isVisible = false;
    }

    this.view.forceLayout();
  }
});