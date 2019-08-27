define({ 
  companySelectedVehicle : "",
  personalSelectedVehicle : "",
  isVehicleSelected : false,
  previousData : "",
  newVehicleData : {},
  decideLater : "",
  globalData : "",
  deactiveIcon : "defaultdeselect.png",
  activeIcon : "selected.png",
  dashboardLabel : "Back to Dashboard",
  reviewLabel : "Back to Review",
  /**
     * @function onNavigate
     * @scope private
     * @description: invokes when form is loaded
     */
  onNavigate : function(data){
    if(data.previousForm === "frmTrackingDetails"){
      this.previousData = data;
      this.addDataToVehicleTemplate();
    }
    else{
      this.globalData = data;
      this.editVehicleDetails();
    }
  },
  /**
     * @function addDataToVehicleTemplate
     * @scope private
     * @description: invokes to add data to vehicle template
     */
  addDataToVehicleTemplate : function(){
    this.view.btnNext.isVisible = true;
    this.view.rchTextNext.isVisible = true;
    this.view.btnSave.isVisible = false;
    this.view.lblDashboard.text = this.dashboardLabel;
    this.view.forceLayout();
  },
  /**
     * @function editVehicleDetails
     * @scope private
     * @description: invokes to edit vehicle details
     */
  editVehicleDetails : function(){
    this.view.btnNext.isVisible = false;
    this.view.rchTextNext.isVisible = false;
    this.view.btnSave.isVisible = true;
    this.view.lblDashboard.text = this.reviewLabel;
    this.view.forceLayout();
  },
  /**
     * @function backToReview
     * @scope private
     * @description: invokes to get back to review from vehicle form
     */
  backToReview : function(){
    if(this.view.lblDashboard.text === this.reviewLabel){
      var navigationObj = new kony.mvc.Navigation("frmReviewDetails");
      navigationObj.navigate(this.globalData);  
    }
    else{
      alert("Data will be lost");
      this.resetVehicleDetails();
      var navigationObject = new kony.mvc.Navigation("frmJourneyList");
      navigationObject.navigate();
    }
  },
  resetVehicleDetails : function(){
    this.view.FlxCompanyVehicleListBox.isVisible = false;
    this.view.FlxPersonalVehicleListBox.isVisible = false;
    this.view.imgVehicleOptionOne.src = this.deactiveIcon;
    this.view.imgVehicleOptionTwo.src = this.deactiveIcon;
    this.view.imgVehicleOptionThree.src = this.deactiveIcon;
    this.view.imgVehicleOptionFour.src = this.deactiveIcon;
    this.resetAddNewVehicleFields();
    this.view.FlxAddNewVehicleDetails.isVisible = false;
    this.view.forceLayout();
  },
  /**
     * @function updateData
     * @scope private
     * @description: invokes to update data
     */
  updateData : function(){
    var vehicleMake = this.view.txtboxMake.text;
    var vehicleModel = this.view.txtboxModel.text;
    var vehicleColor = this.view.txtboxColor.text;
    var vehicleRno = this.view.txtboxRegistration.text;
    var vehicleType = this.view.txtboxNewVehicleType.text;
    this.newVehicleData = {
      "vehicleMake" : vehicleMake,
      "vehicleModel" : vehicleModel,
      "vehicleColor" : vehicleColor,
      "vehicleRno" : vehicleRno,
      "vehicleType": vehicleType,
    };
    var vehicleDetails = {
      "newVehicleData" : this.newVehicleData,
      "companyVehicle" : this.companySelectedVehicle,
      "personalVehicle" : this.personalSelectedVehicle,
      "decideLater" : this.decideLater
    };
    var trackingData = this.globalData.trackingDetails;
    this.globalData = vehicleDetails;
    this.globalData.trackingDetails = trackingData;
  },
  /**
     * @function selectVehicle
     * @scope private
     * @param {object} eventobject
     * @description: invokes to select vehicle and change the icon of selected vehicle
     */
  selectVehicle : function(eventobject){
    var widgetID = eventobject.id;
    if(this.isVehicleSelected){
      this.view.imgVehicleOptionOne.src = this.deactiveIcon;
      this.view.imgVehicleOptionTwo.src = this.deactiveIcon;
      this.view.imgVehicleOptionThree.src = this.deactiveIcon;
      this.view.imgVehicleOptionFour.src= this.deactiveIcon;
    }
    if(widgetID === "flxVehicleOptionOne"){   
      if(this.view.imgVehicleOptionOne.src === this.activeIcon){
        this.view.imgVehicleOptionOne.src = this.deactiveIcon;
        this.isVehicleSelected = false;
        this.view.FlxCompanyVehicleListBox.isVisible = false;
      }
      else{
        this.companySelectedVehicle = this.view.listboxVehicleDetails.selectedKeyValue[1];
        this.decideLater = "";
        this.newVehicleData = {};
        this.resetAddNewVehicleFields();
        this.view.imgVehicleOptionOne.src = this.activeIcon;
        this.isVehicleSelected = true;
        this.view.FlxCompanyVehicleListBox.isVisible = true;
        this.view.FlxPersonalVehicleListBox.isVisible = false;
        this.view.FlxAddNewVehicleDetails.isVisible = false;
      }     
    }
    else if(widgetID === "flxVehicleOptionTwo"){
      if(this.view.imgVehicleOptionTwo.src === this.activeIcon){
        this.view.imgVehicleOptionTwo.src = this.deactiveIcon;
        this.isVehicleSelected = false;
        this.view.FlxPersonalVehicleListBox.isVisible = false;
      }
      else{
        this.personalSelectedVehicle = this.view.listboxPersonalVehicleDetails.selectedKeyValue[1];
        this.decideLater = "";
        this.newVehicleData = {};
        this.resetAddNewVehicleFields();
        this.view.imgVehicleOptionTwo.src = this.activeIcon; 
        this.isVehicleSelected = true;
        this.view.FlxPersonalVehicleListBox.isVisible = true;
        this.view.FlxCompanyVehicleListBox.isVisible = false;
        this.view.FlxAddNewVehicleDetails.isVisible = false;
      }
    }
    else if(widgetID === "flxVehicleOptionThree"){
      if(this.view.imgVehicleOptionThree.src === this.activeIcon){
        this.view.imgVehicleOptionThree.src = this.deactiveIcon;
        this.isVehicleSelected = false;
      }
      else{
        this.decideLater = "Decide Later";
        this.personalSelectedVehicle = "";
        this.newVehicleData = {};
        this.resetAddNewVehicleFields();
        this.companySelectedVehicle = "";
        this.view.imgVehicleOptionThree.src = this.activeIcon;  
        this.isVehicleSelected = true;
        this.view.FlxPersonalVehicleListBox.isVisible = false;
        this.view.FlxCompanyVehicleListBox.isVisible = false;
        this.view.FlxAddNewVehicleDetails.isVisible = false;
      }
    }
    else{
      if(this.view.imgVehicleOptionFour.src === this.activeIcon){
        this.view.imgVehicleOptionFour.src = this.deactiveIcon;
        this.isVehicleSelected = false;
        this.view.FlxAddNewVehicleDetails.isVisible = false;
      }
      else{
        this.personalSelectedVehicle = "";
        this.companySelectedVehicle = "";
        this.decideLater = "";

        this.view.imgVehicleOptionFour.src = this.activeIcon;  
        this.isVehicleSelected = true;
        this.view.FlxPersonalVehicleListBox.isVisible = false;
        this.view.FlxCompanyVehicleListBox.isVisible = false;
        this.view.FlxAddNewVehicleDetails.isVisible = true;
      }
    }
  },
  /**
     * @function resetAddNewVehicleFields
     * @scope private
     * @description: invokes to add newly created vehicle fields
     */
  resetAddNewVehicleFields : function(){
    this.view.txtboxMake.text = "";
    this.view.txtboxModel.text = "";
    this.view.txtboxColor.text = "";
    this.view.txtboxRegistration.text = "";
    this.view.txtboxNewVehicleType.text = "";
    this.view.txtboxMake.placeholder = "MAKE";
    this.view.txtboxModel.placeholder = "MODEL";
    this.view.txtboxColor.placeholder = "COLOR";
    this.view.txtboxRegistration.placeholder = "REGNO";
    this.view.txtboxNewVehicleType.placeholder = "TYPE";
  },
  /**
     * @function onClickOfNext
     * @scope private
     * @description: invokes on click of next button
     */
  onClickOfNext : function(){
    var vehicleMake = this.view.txtboxMake.text;
    var vehicleModel = this.view.txtboxModel.text;
    var vehicleColor = this.view.txtboxColor.text;
    var vehicleRno = this.view.txtboxRegistration.text;
    var vehicleType = this.view.txtboxNewVehicleType.text;
    this.newVehicleData = {
      "vehicleMake" : vehicleMake,
      "vehicleModel" : vehicleModel,
      "vehicleColor" : vehicleColor,
      "vehicleRno" : vehicleRno,
      "vehicleType": vehicleType,
    };
    var vehicleDetails = {
      "newVehicleData" : this.newVehicleData,
      "trackingDetails" : this.previousData,
      "companyVehicle" : this.companySelectedVehicle,
      "personalVehicle" : this.personalSelectedVehicle,
      "decideLater" : this.decideLater
    };
    var navigationObj = new kony.mvc.Navigation("frmReviewDetails");
    navigationObj.navigate(vehicleDetails);
  },
  /**
     * @function selectedCompanyVehicle
     * @scope private
     * @param {object} eventObject
     * @description: invokes to disply the selected company vehicles
     */
  selectedCompanyVehicle : function(eventObject){
    if(eventObject.id === "listboxVehicleDetails"){
      this.companySelectedVehicle = eventObject.selectedKeyValue[1];
      this.personalSelectedVehicle = "";
    }
    else{
      this.personalSelectedVehicle = eventObject.selectedKeyValue[1];  
      this.companySelectedVehicle = "";
    }
  },
  /**
     * @function fetchVehicleDetails
     * @scope private
     * @description: invokes to fetch the vehicle details
     */
  fetchVehicleDetails : function(){
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
      var dataObject = new kony.sdk.dto.DataObject("vehicle_tbl");
      var options = {
        "dataObject": dataObject,
        "headers": {},
        "queryParams": {}
      };
      kony.application.showLoadingScreen("", "Fetching Vehicle Details ...", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
      if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        objectInstance.fetch(options, this.fetchVehicleDetailsSuccess.bind(this), this.fetchVehicleDetailsFailure.bind(this));
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
     * @function fetchVehicleDetailsSuccess
     * @scope private
     * @param {object} response
     * @description: invokes as a success callback to fetchVehicleDetails
     */
  fetchVehicleDetailsSuccess : function(response){
    kony.application.dismissLoadingScreen();
    var data = response.records;
    var companyVehicle = [], personalVehicle = [];
    for(var index = 0;index<data.length;index++){
      if(data[index].softdeleteflag === false){
        if(data[index].user_emp_id_fk !== undefined){
          personalVehicle.push(data[index]);
        }
        else{
          companyVehicle.push(data[index]);
        }
      }
    }
    var sortedPersonalVehicle = [], sortedCompanyVehicle = [];
    for(var i = 0; i<personalVehicle.length;i++){
      var vehicle = ["lbl"+(i+1),personalVehicle[i].vehicle_make+personalVehicle[i].vehicle_model+","+personalVehicle[i].vehicle_color+"|"+personalVehicle[i].vehicle_reg_num];
      sortedPersonalVehicle.push(vehicle);
    }

    for(var j = 0; j<companyVehicle.length;j++){
      var compVehicle = ["lbl"+(j+1),companyVehicle[j].vehicle_make+companyVehicle[j].vehicle_model+","+companyVehicle[j].vehicle_color+"|"+companyVehicle[j].vehicle_reg_num];
      sortedCompanyVehicle.push(compVehicle);
    }
    this.view.listboxPersonalVehicleDetails.masterData = sortedPersonalVehicle;
    this.view.listboxVehicleDetails.masterData = sortedCompanyVehicle;
  },
  /**
     * @function fetchVehicleDetailsFailure
     * @scope private
     * @param {object} err
     * @description: invokes as a failure callback to fetchVehicleDetails
     */
  fetchVehicleDetailsFailure : function(err){
    kony.application.dismissLoadingScreen();
    kony.print("something went wrong"+JSON.stringify(err));
  }

});