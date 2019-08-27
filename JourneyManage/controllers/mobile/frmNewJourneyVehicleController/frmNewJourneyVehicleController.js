define({
  /**
     * @function
     *
     * @param param 
     */
  navigationData: null,
  isEdit: false,
  isEditDetails: {},
  isFreshForm: true,
  vehicleList: null,
  vehicleMap: null,
  selectedVehicleId: null,
  userObj: null,
  VehicleDetails: {},
  selectedVehicleIdUpdate:null,
  userEMPID:null,
  isUpdate: false,
  status:0,
  PROGRESS_STATUS:{
    "VEHICLE_CREATION":0,
    "SYNC_FAILED":1
  },
  /**
     * @function
     *
     * @param param 
     */
  onNavigate: function(param) {
    debugger;
    this.status=this.PROGRESS_STATUS.VEHICLE_CREATION;
    this.view.lblCenterText.text = "Create New Journey";
    this.view.flxBack.isVisible = true;
    if (param !== undefined && param !== null && param.isUpdate && param.typeOfDataEdit == "VehicleDetails") {
      try
      {
        this.view.lblCenterText.text = "Update Journey";
        this.view.btnNextStepVehicleForm.text = "Done";
        this.view.flxBack.isVisible = false;
        this.isUpdate = param.isUpdate;
        this.selectedVehicleIdUpdate = param.VehicleDetails[0].vehicle_id_pk;
        this.VehicleDetails.vehicle_make = param.VehicleDetails[0].vehicle_make;
        this.VehicleDetails.vehicle_color = param.VehicleDetails[0].vehicle_color;
        this.VehicleDetails.vehicle_reg_num = param.VehicleDetails[0].vehicle_reg_num;
        this.VehicleDetails.vehicle_model = param.VehicleDetails[0].vehicle_model;
        this.VehicleDetails.vehicle_id_pk = param.VehicleDetails[0].vehicle_id_pk;
        return;
      }
      catch(err)
      {

      }
      this.view.forceLayout();
    }
    if (param !== undefined && param !== null && param.isEdit) {

      this.isEditDetails = param.JourneyDetails;
      this.isEdit = param.isEdit;
    }
    if (typeof param == 'object' && param !== null) {
      this.navigationData = param;
      this.userObj = param[DATA_MODEL.USER_TBL];
      this.isFreshForm = true;
      this.resetForm();
    } else {
      this.isFreshForm = false;
    }
  },
  /**
   * @function
   *
   * @param frmName 
   */
  navigateToForm:function(frmName){
    debugger;
    try{
      if(typeof frmName=='string' && frmName.length>0){
        var navObj = new kony.mvc.Navigation(frmName);
        navObj.navigate();
      }
    }catch(excp){
      debugger;
    }
  },
  /**
     * @function
     *
     */
  proceedNext: function() {
    try {
      debugger;
      if (this.isUpdate) {
        var navObj = new kony.mvc.Navigation("frmUpdateJourney");
        var params = {
          "typeOfDataEdit": "VehicleDetails",
          "VehicleDetails": this.VehicleDetails
        };
        navObj.navigate(params);
        return;
      }
      if (typeof this.navigationData == 'object' && this.navigationData !== null) {
        var journeyObj = this.navigationData["journey"];
        if (typeof journeyObj == 'object' && journeyObj !== null) {
          journeyObj[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK] = this.selectedVehicleId;
        }
      }
      var navObj = new kony.mvc.Navigation("frmNewJourneyVerification");
      navObj.navigate(this.navigationData);
    } catch (excp) {
      debugger;
    }
  },
  /**
     * @function
     *
     */
  onComapnyVehicleSelection: function() {
    debugger;
    try {
      var selectedVehicle = this.view.segmentCompanyCar.selectedRowItems[0];
      this.selectedVehicleId = selectedVehicle["vehicle_id_pk"];
      selectedVehicle = this.vehicleMap[selectedVehicle.vehicle_id_pk];
      if (Array.isArray(selectedVehicle) && selectedVehicle.length > 0) {
        this.setCompanyVehicleDetail(selectedVehicle[0]);
        this.view.flxNewJourneyRouteSelectVehicle.isVisible = false;
        this.view.flxNewJourneyVehicleCompany.isVisible = true;
        this.view.flxNewJourneyVehiclePersonal.isVisible = false;
      }
      this.view.forceLayout();
    } catch (excp) {
      debugger;
    }
  },
  /**
     * @function
     *
     * @param eventobject 
     */
  onVehicleSelection: function(eventobject) {
    debugger;
    if (typeof eventobject == 'object' && eventobject !== null) {
      try {
        var widgetId = eventobject["id"];
        var vehicleId = this.view[widgetId].selectedKey;
        vehicleId = parseInt(vehicleId);
        if (typeof vehicleId == 'number' || typeof vehicleId == 'string') {
          this.selectedVehicleId = vehicleId;
          var selectedVehicle = this.vehicleMap[vehicleId];
          if (Array.isArray(selectedVehicle) && selectedVehicle.length > 0) {
            if (widgetId == "lstCompanyCar") {
              if (this.isUpdate) {
                this.VehicleDetails = selectedVehicle[0];
              }
              this.setCompanyVehicleDetail(selectedVehicle[0]);
            } else if (widgetId == "lstPersonalCar") {
              if (this.isUpdate) {
                this.VehicleDetails = selectedVehicle[0];
              }
              this.setPersonalVehicleDetail(selectedVehicle[0]);
            }
          }
        }
      } catch (exception) {
        debugger;
      }
    }
  },
  /**
     * @function
     *
     */
  onPersonalVehicleSelection: function() {
    debugger;
    try {
      var selectedVehicle = this.view.segmentPersonalCar.selectedRowItems[0];
      this.selectedVehicleId = selectedVehicle["vehicle_id_pk"];
      selectedVehicle = this.vehicleMap[selectedVehicle.vehicle_id_pk];
      if (Array.isArray(selectedVehicle) && selectedVehicle.length > 0) {
        this.setPersonalVehicleDetail(selectedVehicle[0]);
        this.view.flxNewJourneyRouteSelectVehicle.isVisible = false;
        this.view.flxNewJourneyVehiclePersonal.isVisible = true;
        this.view.flxNewJourneyVehicleCompany.isVisible = false;
      }
      this.view.forceLayout();
    } catch (excp) {
      debugger;
      throw excp;
    }
  },
  /**
     * @function
     *
     * @param vehicleObj 
     */
  setPersonalVehicleDetail: function(vehicleObj) {
    debugger;
    try {
      if (typeof vehicleObj == 'object' && vehicleObj !== null) {
        if (this.isEdit) {
          this.isEditDetails.JourneyDetails.journey_selected_vehicle_id_fk = vehicleObj[VEHICLE_TBL.VEHICLE_ID_PK];
          this.navigationData['JourneyDetails'] = this.isEditDetails;
          this.navigationData['isEdit'] = this.isEdit;
        }
        this.view.lstPersonalCar.selectedKey = vehicleObj[VEHICLE_TBL.VEHICLE_ID_PK];
        this.view.VehicleSelectMake.setText(vehicleObj[VEHICLE_TBL.VEHICLE_MAKE], false);
        this.view.VehicleSelectModel.setText(vehicleObj[VEHICLE_TBL.VEHICLE_MODEL], false);
        this.view.VehicleSelectColor.setText(vehicleObj[VEHICLE_TBL.VEHICLE_COLOR], false);
        this.view.VehicleSelectRegistration.setText(vehicleObj[VEHICLE_TBL.VEHICLE_REG_NUM], false);
      }
    } catch (excp) {
      debugger;
      throw excp;
    }
  },
  setCompanyVehicleDetail: function(vehicleObj) {
    debugger;
    try {
      //             if(this.isUpdate)
      //                 {
      //                     this.view.lstCompanyCar.selectedKey = vehicleObj[VEHICLE_TBL.VEHICLE_ID_PK];
      //                     return;
      //                 }
      if (typeof vehicleObj == 'object' && vehicleObj !== null) {
        if (this.isEdit) {
          this.isEditDetails.JourneyDetails.journey_selected_vehicle_id_fk = vehicleObj[VEHICLE_TBL.VEHICLE_ID_PK];
          this.navigationData['JourneyDetails'] = this.isEditDetails;
          this.navigationData['isEdit'] = this.isEdit;
        }
        debugger;
        this.view.lstCompanyCar.selectedKey = vehicleObj[VEHICLE_TBL.VEHICLE_ID_PK];
        this.view.companyVehicleMake.setText(vehicleObj[VEHICLE_TBL.VEHICLE_MAKE], false);
        this.view.comapnyVehicleModel.setText(vehicleObj[VEHICLE_TBL.VEHICLE_MODEL], false);
        this.view.companyVehicleColor.setText(vehicleObj[VEHICLE_TBL.VEHICLE_COLOR], false);
        this.view.companyVehicleSelectRegistration.setText(vehicleObj[VEHICLE_TBL.VEHICLE_REG_NUM], false);
      }
    } catch (excp) {
      debugger;
      throw excp;}
  },
  /**
     * @function
     *
     */
  onFormPostShow: function() {
    if (this.isFreshForm || this.isUpdate) {
      try {
        //this.resetForm();
        this.getVechiles();
      } catch (excp) {
        debugger;
      }
    }
  },
  /**
     * @function
     *
     */
  onFormPreshow: function() {
    try {
      this.view.flxNewJourneyRouteSelectVehicle.isVisible = true;
      this.view.flxNewJourneyVehicleCompany.isVisible = false;
      this.view.flxNewJourneyVehiclePersonal.isVisible = false;
      this.view.flxAddNewVehicle.setVisibility(false);
      this.view.forceLayout();
    } catch (excp) {
      debugger;
    }
  },
  /**
     * @function
     *
     */
  getVechiles: function() {
    debugger;
    try {
      var options = {};
      options["whereConditionAsAString"] = VEHICLE_TBL.USER_EMP_ID_FK + " = '" + this.userObj[USER_TBL.USER_EMP_ID_PK] + "'";// + " OR " + VEHICLE_TBL.USER_EMP_ID_FK + " IS NULL";
      this.fetchRecords(DATA_MODEL.VEHICLE_TBL, options);
    } catch (excp) {
      debugger;
    }
  },
  /**
     * @function
     *
     */
  resetForm: function() {
    debugger;
    //         this.view.segmentCompanyCar.removeAll();
    this.view.segmentPersonalCar.removeAll();
    //         this.hideCompanyVehicle();
    this.hidePersonalVehicle();
    if (this.isUpdate) {
      this.view.flxNewJourneyRouteSelectVehicle.isVisible = false;
      this.view.flxNewJourneyVehicleCompany.isVisible = false;
      this.view.flxNewJourneyVehiclePersonal.isVisible = true;
      this.view.forceLayout();
      return;
    }
    this.view.flxNewJourneyRouteSelectVehicle.isVisible = true;
    this.view.flxNewJourneyVehicleCompany.isVisible = false;
    this.view.flxNewJourneyVehiclePersonal.isVisible = false;
    this.view.vehicleMake.setText("",true);
    this.view.vehicleModel.setText("",true);
    this.view.vehicleColor.setText("",true);
    this.view.vehicleRegistrationNumber.setText("",true);
    this.view.flxAddNewVehicle.setVisibility(false);
    this.view.forceLayout();
  },
  /**
     * @function
     *
     */
  processVehicleList: function(vehicelList) {
    try {
      var personalVehicleList = [];
      var companyVehicleList = [];
      var vehicleObj = {};
      var vehicle;
      if (Array.isArray(vehicelList)) {
        this.vehicleMap = JourneyUtil.parseRecords(vehicelList, VEHICLE_TBL.VEHICLE_ID_PK);
        for (var i = 0; i < vehicelList.length; i++) {
          vehicle = vehicelList[i];
          if (typeof vehicle == 'object' && vehicle !== null) {
            vehicleObj = {};
            vehicleObj["lblCarName"] = vehicle[VEHICLE_TBL.VEHICLE_MAKE] + " " + vehicle[VEHICLE_TBL.VEHICLE_MODEL];
            vehicleObj["lblCarModel"] = vehicle[VEHICLE_TBL.VEHICLE_REG_NUM];
            vehicleObj["lblCarColor"] = vehicle[VEHICLE_TBL.VEHICLE_COLOR];
            vehicleObj["imgVehicleIcon"] = "vehicle_purple.png";
            vehicleObj[VEHICLE_TBL.VEHICLE_ID_PK] = vehicle[VEHICLE_TBL.VEHICLE_ID_PK];
            if (typeof vehicle[VEHICLE_TBL.USER_EMP_ID_FK] == 'string' || typeof vehicle[VEHICLE_TBL.USER_EMP_ID_FK] == 'number') {
              vehicleObj[VEHICLE_TBL.USER_EMP_ID_FK] = vehicle[VEHICLE_TBL.USER_EMP_ID_FK];
              personalVehicleList.push(vehicleObj);
            } else {
              companyVehicleList.push(vehicleObj);
            }
          }
        }
      }
      this.setCompanyVehicle(companyVehicleList);
      if(this.isUpdate)
      {
        this.setCompanyVehicleToList(companyVehicleList.concat(personalVehicleList));
      }
      else{
        this.setCompanyVehicleToList(companyVehicleList);
      }

      this.setPersonalVehicle(personalVehicleList);
      this.view.forceLayout();
      this.setPersonalVehicleToList(personalVehicleList);
    } catch (excp) {
      debugger;
      throw excp;
    }
  },
  /**
     * @function
     *
     * @param companyVehicleList 
     */
  setCompanyVehicleToList: function(companyVehicleList) {
    debugger;
    try {
      var listMasterData = [];
      var listItem;
      if (Array.isArray(companyVehicleList) && companyVehicleList.length>0 ) {
        for (var i = 0; i < companyVehicleList.length; i++) {
          listItem = [];
          listItem.push(companyVehicleList[i][VEHICLE_TBL.VEHICLE_ID_PK]);
          listItem.push("Company " + companyVehicleList[i]["lblCarName"] + " | " + companyVehicleList[i]["lblCarModel"]);
          listMasterData.push(listItem);
        }
      }else{
        this.view.lblCompanyCar.setVisibility(false);
        this.view.segmentCompanyCar.setVisibility(false);
        this.view.forceLayout();
      }
      this.view.lstCompanyCar.masterData = listMasterData;
      if(this.isUpdate)
      {
        debugger;
        this.view.lstCompanyCar.selectedKey =this.selectedVehicleIdUpdate;
      }
    } catch (excp) {
      debugger;
      throw excp;
    }
  },
  /**
     * @function
     *
     * @param vehicleList 
     */
  setCompanyVehicle: function(vehicleList) {
    debugger;
    try {
      if (Array.isArray(vehicleList) && vehicleList.length > 0) {
        this.showCompanyVehicle();
        this.view.segmentCompanyCar.removeAll();
        this.view.segmentCompanyCar.addAll(vehicleList);
      } else {
        this.hideCompanyVehicle();
      }
    } catch (excp) {
      debugger;
    }
  },
  /**
     * @function
     *
     * @param vehicleList 
     */
  setPersonalVehicle: function(vehicleList) {
    debugger;
    try {
      if (Array.isArray(vehicleList) && vehicleList.length > 0) {
        this.showPersonalVehicle();
        this.view.segmentPersonalCar.removeAll();
        this.view.segmentPersonalCar.addAll(vehicleList);
      } else {
        this.hidePersonalVehicle();
      }
    } catch (excp) {
      debugger;
      throw excp;
    }
  },
  /**
     * @function
     *
     * @param vehicleList 
     */
  setPersonalVehicleToList: function(personalVehicleList) {
    debugger;
    try {
      var listMasterData = [];
      var listItem;
      if (Array.isArray(personalVehicleList)) {
        for (var i = 0; i < personalVehicleList.length; i++) {
          listItem = [];
          listItem.push(personalVehicleList[i][VEHICLE_TBL.VEHICLE_ID_PK]);
          listItem.push("Personal " + personalVehicleList[i]["lblCarName"] + " | " + personalVehicleList[i]["lblCarModel"]);
          listMasterData.push(listItem);
        }
      }
      this.view.lstPersonalCar.masterData = listMasterData;
    } catch (excp) {
      debugger;
    }
  },
  /**
     * @function
     *
     */
  showCompanyVehicle: function() {
    this.view.lblCompanyCar.setVisibility(true);
    this.view.segmentCompanyCar.setVisibility(true);
    this.view.forceLayout();
  },
  /**
     * @function
     *
     */
  hideCompanyVehicle: function() {
    this.view.lblCompanyCar.setVisibility(false);
    this.view.segmentCompanyCar.setVisibility(false);
    this.view.forceLayout();
  },
  /**
     * @function
     *
     */
  showPersonalVehicle: function() {
    this.view.lblHeadingPersonalCar.setVisibility(true);
    this.view.segmentPersonalCar.setVisibility(true);
    this.view.forceLayout();
  },
  /**
     * @function
     *
     */
  hidePersonalVehicle: function() {
    this.view.lblHeadingPersonalCar.setVisibility(false);
    this.view.segmentPersonalCar.setVisibility(true);
    this.view.forceLayout();
  },
  /**
     * @function
     *
     */
  decideVehicleLater: function() {
    try {
      this.selectedVehicleId = null;
      this.proceedNext();
    } catch (excp) {
      debugger;
    }
  },
  /**
     * @function
     *
     * @param result 
     */
  _recordFetchSuccess: function(dataModel, result) {
    debugger;
    try {
      switch (dataModel) {
        case DATA_MODEL.VEHICLE_TBL:
          this.vehicleList = result;
          this.processVehicleList(result);
          break;
      }
    } catch (excp) {
      debugger;
    }
  },
  /**
   * @function
   *
   */
  showAddNewVehicleFlex:function(){
    debugger;
    //this.progressStatus=this.STATUS.ADD_VEHICLE;
    this.view.flxNewJourneyRouteSelectVehicle.setVisibility(false);
    this.view.flxNewJourneyVehicleCompany.setVisibility(false);
    this.view.flxNewJourneyVehiclePersonal.setVisibility(false);
    this.view.flxAddNewVehicle.setVisibility(true);
    //this.view.flxVehicleDetail.setVisibility(false);
    this.view.VehicleSelectMake.setText("",true);
    this.view.VehicleSelectModel.setText("",true);
    this.view.VehicleSelectColor.setText("",true);
    this.view.VehicleSelectRegistration.setText("",true);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  createNewVehicle:function(){
    debugger;
    try{
      if(JourneyUtil.isNetworkAvailable()===true){
        if(this.status == this.PROGRESS_STATUS.SYNC_FAILED){
          this.startSync();
        }else{
          var vehicleObj=this.getVehicleRecord();
          if(typeof vehicleObj=='object' && vehicleObj!==null){
            this._createRecord(DATA_MODEL.VEHICLE_TBL,vehicleObj);
          }
        }
      } else{
        alert("Please check your network connection!"); 
      }
    }catch(excp){
      debugger;
      alert(excp.message);
    }
  },
  /**
   * @function
   *
   */
  getVehicleRecord:function(){
    var vehicleObj={};
    var vehicleMake;
    var vehicleModel;
    var vehicleColor;
    var vehicleRegistrationNumber;
    try{
      vehicleMake=this.view.vehicleMake.getText();
      if(typeof vehicleMake=='string'){
        vehicleMake=vehicleMake.trim();
        if(vehicleMake.length===0){
          throw {
            message:"Please provide Vehicle make!"
          };
        }
      }else{
        throw {
          message:"Please provide Vehicle make!"
        };
      }
      vehicleModel=this.view.vehicleModel.getText();
      if(typeof vehicleModel=='string'){
        vehicleModel=vehicleModel.trim();
        if(vehicleModel.length===0){
          throw {
            message:"Please provide Vehicle model!"
          };
        }
      }else{
        throw {
          message:"Please provide Vehicle model!"
        };
      }
      vehicleColor=this.view.vehicleColor.getText();
      if(typeof vehicleColor=='string'){
        vehicleColor=vehicleColor.trim();
        if(vehicleColor.length===0){
          throw {
            message:"Please provide Vehicle color!"
          };
        }
      }else{
        throw {
          message:"Please provide Vehicle color!"
        };
      }
      vehicleRegistrationNumber=this.view.vehicleRegistrationNumber.getText();
      if(typeof vehicleRegistrationNumber=='string'){
        vehicleRegistrationNumber=vehicleRegistrationNumber.trim();
        if(vehicleRegistrationNumber.length===0){
          throw {
            message:"Please provide Vehicle Registration number!"
          };
        }
      }else{
        throw {
          message:"Please provide Vehicle Registration number!"
        };
      }
      vehicleObj[VEHICLE_TBL.VEHICLE_MAKE]=vehicleMake;
      vehicleObj[VEHICLE_TBL.VEHICLE_MODEL]=vehicleModel;
      vehicleObj[VEHICLE_TBL.VEHICLE_COLOR]=vehicleColor;
      vehicleObj[VEHICLE_TBL.VEHICLE_REG_NUM]=vehicleRegistrationNumber;
      if(typeof this.userObj=='object' && this.userObj!==null){
        if(typeof this.userObj[USER_TBL.USER_EMP_ID_PK]=='string'|| typeof this.userObj[USER_TBL.USER_EMP_ID_PK]=='number'){
          vehicleObj[VEHICLE_TBL.USER_EMP_ID_FK]=this.userObj[USER_TBL.USER_EMP_ID_PK];
        }else{
          vehicleObj[VEHICLE_TBL.USER_EMP_ID_FK]=null;
        }
      }else{
        vehicleObj[VEHICLE_TBL.USER_EMP_ID_FK]=null;
      }
    }catch(excp){
      debugger;
      alert(excp.message);
      vehicleObj=null;
    }
    return vehicleObj;
  },
  /**
     * @function
     *
     * @param result 
     */
  _recordFetchFailure: function(dataModel, result) {
    debugger;
  },
  fetchRecords: function(dataModel, options) {
    function failureCB(error) {
    }
    try {
      if (typeof options !== 'object') {
        options = null;
      }
      var knyObject = new kony.sdk.KNYObj(dataModel);
      knyObject.get(options, this._recordFetchSuccess.bind(this, dataModel), this._recordFetchFailure.bind(this, dataModel));
    } catch (excp) {
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param dataModel 
   * @param record 
   */
  _createRecord: function(dataModel, record) {

    if (typeof dataModel === 'string' && dataModel.length > 0 && typeof record === 'object' && record !== null) {
      try {
        if(JourneyUtil.isNetworkAvailable()===true){
          var dataObj = new kony.sdk.KNYObj(dataModel);
          //xyz this.view.loadingScreen.show("Loading..",1);
          dataObj.create(record, {}, this._createRecordSuccess.bind(this, dataModel), this._createRecordFailure.bind(this, dataModel));
        }else{
          alert("Please check your network connection!");
        }
      } catch (excp) {
        debugger;
        kony.print("#### Exception occured while creating record: ####" + excp.message);
        throw excp;
      }
    }
  },
  /**
   * @function
   *f
   * @param datamodel 
   * @param result 
   */
  _createRecordSuccess:function(datamodel,result){
    debugger;
    try{
      switch(datamodel){
        case DATA_MODEL.VEHICLE_TBL:
          this.startSync();
          break;
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
  _createRecordFailure:function(dataModel,result){
    debugger;
    try{

    }catch(excp){
      debugger;
    }
  },
  startSync:function(){
    debugger;
    var syncOptions={};//"downloadBatchSize":"100",
    //syncOptions.uploadBatchSize="200";
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    //syncOptions.GetSyncStats=true;
    try{
      if(JourneyUtil.isNetworkAvailable()===true){
        //var syncObjService= new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
        var syncObjService = new kony.sdk.KNYObj(DATA_MODEL.VEHICLE_TBL);
        var filter=kony.store.getItem("SYNC_FILTER");
        if(typeof filter == 'object' && filter!==null)
          syncOptions["filter"]=filter[DATA_MODEL.VEHICLE_TBL];
        kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        syncObjService.startSync(syncOptions,this.syncSuccessCB.bind(this),this.syncFailureCB.bind(this),this.progressCallBack);
      }else{
        alert("Please check your network connection");
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  progressCallBack:function(result){
    debugger;
  },
  /**
   * @function
   *
   * @param response 
   */
  syncSuccessCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
    this.onFormPreshow();
    this.onFormPostShow();
  },
  /**
   * @function
   *
   * @param response 
   */
  syncFailureCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
    this.status=this.PROGRESS_STATUS.SYNC_FAILED;
    alert("Server taking too long to respond..\n Please try later");
  }
});