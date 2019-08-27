define({ 

  //Type your controller code here 
  count:0,
  inspectionUser:null,
  assetGroupnames:null,
  groupNameList:null,
  inspectionMeasurement:null,
  measurementRange:null,
  measurementSetRange:null,
  measurementList:null,
  asset:null,
  measurementMap:null,
  selectedMeasurement:null,
  measurementSetId:null,

  _userData: null,
  measurementHistory:null,

  inspection:null,
  assetDetail:null,
  isContainerShown:false,
  imageCallBackFunction:null,
  previousForm:null,

  isInproximity:false,
  isOutProximity:null,

  deviceLocation:null,
  destinationLocation:null,
  checkInRecordId:null,

  isCheckedIn:false,
  isForcedCheckIn:false,
  _isWatchStopped:false,
  isInSimulationMode:false,
  assetLocation:null,

  /**
   * @function
   *
   * @param inspection 
   */
  onNavigate:function(inspection){
    //return;
    debugger;
    //     if(typeof inspection==='string' && (inspection=="frmInspectionReview" || inspection=="frmInspectionHistory")){
    //       this.previousForm=inspection;
    //       return;
    //     }
    if(kony.sdk.isNullOrUndefined(inspection) ){
      return;
    }
    else{
      if(!kony.sdk.isNullOrUndefined(inspection.previousForm) && (inspection.previousForm=="frmInspectionHistory" || inspection.previousForm=="frmInspectionReview")){
        this.previousForm = inspection.previousForm;

        return;
      }
      else if(!kony.sdk.isNullOrUndefined(inspection.previousForm) && inspection.previousForm=="frmInspectionsList"){
        this.previousForm = inspection.previousForm;
        this._userData = inspection.userData;
      }else if(!kony.sdk.isNullOrUndefined(inspection.previousForm) && inspection.previousForm=="frmMapNavigation"){
        try{
          //kony.application.destroyForm("frmMapNavigation");
        }catch(excp){
          debugger;
        }
      }
    }

    if(!InspectionUtil.isNetworkAvailable()){
      this.view.loadingScreen.show("offline",2);
    }else{
      this.view.loadingScreen.hide(2);
    }

    if(inspection["isForcedCheckIn"]===true){
      this.isForcedCheckIn=true;
      this.isCheckedIn=true;
      var checkedInDateTime=inspection["dateTime"];
      this.setCheckInTime(checkedInDateTime);
      //this.view.locationtracker.clearWatch();
      //this.enableCapturing();
      //this.createCheckinRecord(inspection);
      return;
    }else if(inspection["isForcedCheckIn"]===false){
      if(inspection["isInSimulationMode"]===true){
        this.isInSimulationMode=true;
      }else{
        this.isInSimulationMode=false;
      }
      this.isForcedCheckIn=false;
      this.isCheckedIn=true;
      this.isInproximity=true;
      var checkedInDateTime=inspection["dateTime"];
      this.setCheckInTime(checkedInDateTime);
      //this.enableCapturing();
      //this.createCheckinRecord(inspection);
      return;
    }
    this.isCheckedIn=false;
    this.isForcedCheckIn=false;
    this.view.lblCheckinTImeValue.setVisibility(false);
    this.view.measurement.setData([],null,null);
    this.inspection=inspection.inspection;
    this.assetDetail=null;
    this.count=0;
    this.setCommonData(this.inspection);
    this.resetFormData();
    this.disableCapturing();
  },
  /**
   * @function
   *
   * @param checkInTime 
   */
  setCheckInTime:function(checkInTime){
    debugger;
    if(checkInTime!==undefined && checkInTime!==null){
      try{
        if(typeof this.inspection=='object' && this.inspection!==null){
          var assignedTimeStamp=this.inspection["Assigned_Timestamp"];
          var assignedDateObj=InspectionUtil.getSqlDatetoJSDate(assignedTimeStamp);
          var checkInDateObj=new Date();//InspectionUtil.getSqlDatetoJSDate(checkInTime);

          var timeDiffInHrs=(checkInDateObj.getTime()-assignedDateObj.getTime())/(1000*60*60);
          if(timeDiffInHrs>0){
            this.view.lblCheckinTImeValue.text="delay by "+Math.ceil(timeDiffInHrs)+" Hrs";
          }else{
            this.view.lblCheckinTImeValue.text="before by "+Math.ceil(timeDiffInHrs*-1)+" Hrs";
          }
        }else{
          this.view.lblCheckinTImeValue.text="NA";
        }
        this.view.lblCheckinTImeValue.setVisibility(true);
      }catch(excp){
        debugger;
      }
    }else{
      this.view.lblCheckinTImeValue.text="NA";
    }
    this.view.lblCheckinTImeValue.setVisibility(true);
  },
  /**
   * @function
   *
   */
  scrollToEnd:function(){
    debugger;
    //var offsetY=this.view.flxScAssetDetailContainer.contentOffsetMeasured.y;
    this.view.flxScAssetDetailContainer.scrollToEnd();
  },
  /**
   * @function
   *
   */
  enableCapturing:function(){
    this.view.flxOutsideProximityRoot.setVisibility(false);
    this.view.measurement.setEnabled(true);
    this.view.btnSubmitInspection.setVisibility(true);
    this.view.flxMeasurementOverlay.setVisibility(false);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  disableCapturing:function(){
    this.view.flxOutsideProximityRoot.setVisibility(true);
    this.view.measurement.setEnabled(false);
    this.view.btnSubmitInspection.setVisibility(false);
    this.view.flxMeasurementOverlay.setVisibility(true);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   * @param checkinRecordId 
   */
  createCheckoutRecord:function(checkinRecordId){
    debugger;
    var checkOutObj={};
    checkOutObj["SoftDeleteFlag"]=false;
    var d=new Date();
    var currentDateTime=d.getFullYear()+"-"+
        InspectionUtil.addZeroPrefix((d.getUTCMonth() +1))+"-"+
        InspectionUtil.addZeroPrefix(d.getUTCDate())+"T"+
        InspectionUtil.addZeroPrefix((d.getUTCHours()))+":"+
        InspectionUtil.addZeroPrefix((d.getUTCMinutes()))+":"+
        InspectionUtil.addZeroPrefix((d.getSeconds()));
    //d.getUTCSeconds();
    checkOutObj["Checkout_Time"]=currentDateTime;
    try{
      var options={};
      options["primaryKeys"]={"Id":checkinRecordId};
      var checkinRecord=new kony.sdk.KNYObj(DATA_MODEL.TIME_SHEET);
      this.view.loadingScreen.show("Updating checkout time..",1);
      checkinRecord.updateByPK(checkOutObj,options, this.checkoutCreationSuccessCB.bind(this), this.checkoutCreationFailureCB.bind(this));
    }catch(excp){
      debugger;
      this.view.loadingScreen.hide(1);
      alert("Something went wrong please try later!");
    }
  },
  /**
   * @function
   *
   * @param record 
   */
  checkoutCreationSuccessCB:function(record){
    debugger;
    this.view.loadingScreen.hide(1);
  },
  /**
   * @function
   *
   * @param response 
   */
  checkoutCreationFailureCB:function(response){
    debugger;
    this.view.loadingScreen.hide(1);
  },
  /**
   * @function
   *
   */
  createCheckinRecord:function(){
    debugger;
    var checkInObj={};
    checkInObj["SoftDeleteFlag"]=false;
    checkInObj["Inspection_Id"]=this.inspection["Inspection_Id"];
    if(this.isForcedCheckIn===true){
      checkInObj["ForcedCheckIn"]=true;
    }else{
      checkInObj["ForcedCheckIn"]=false;
    }
    var d=new Date();
    //d.getUTCSeconds();
    var currentDateTime=d.getFullYear()+"-"+
        InspectionUtil.addZeroPrefix((d.getUTCMonth()+1))+"-"+
        InspectionUtil.addZeroPrefix(d.getUTCDate())+"T"+
        InspectionUtil.addZeroPrefix(d.getUTCHours())+":"+
        InspectionUtil.addZeroPrefix(d.getUTCMinutes())+":"+
        InspectionUtil.addZeroPrefix(d.getUTCSeconds());
    checkInObj["Checkin_Time"]=""+currentDateTime;
    //alert("currentDateTime: "+currentDateTime);
    try{
      var checkinRecord=new kony.sdk.KNYObj(DATA_MODEL.TIME_SHEET);
      checkinRecord.create(checkInObj, {}, this.checkinCreationSuccess.bind(this), this.checkinCreationFailure.bind(this));
    }catch(excp){
      debugger;
      alert("Something went wrong please try later!");
    }
  },
  /**
   * @function
   *
   * @param record 
   */
  checkinCreationSuccess:function(record){
    debugger;
    if(typeof record=='object' && record!==null){
      this.checkInRecordId=record["Id"];
    }
  },
  /**
   * @function
   *
   */
  checkinCreationFailure:function(response){
    debugger;
  },
  /**
   * @function
   *
   */
  onFormPreShow:function(){
    //return;
    var self=this;
    var config={};
    config["statusChange"]=function(isOnline){
      if(isOnline){
        self.view.loadingScreen.hide(2);
      }else{
        self.view.loadingScreen.show("offline",2);
      }
    }
    kony.net.setNetworkCallbacks(config);
  },
  /**
   * @function
   *
   */
  onPostShow:function(){
    debugger;
    if(this.isCheckedIn===true){
      if(this.isForcedCheckIn===true){
        this.view.locationtracker.width="0%";
        this._isWatchStopped=true;
        this.view.locationtracker.stopMonitoring();
        //this.view.locationtracker.clearWatch();
      }else{
        if(this.isInSimulationMode===true){
          this._isWatchStopped=true;
          this.view.locationtracker.stopMonitoring();
        }else{
          this.view.locationtracker.width="0%";
          this.view.locationtracker.setDestinationLocation(this.destinationLocation);
          this._isWatchStopped=false;
          this.view.locationtracker.startLocationMonitoring();
        }
      }
      this.enableCapturing();
      this.createCheckinRecord();
      return;
    }else{
      this.view.locationtracker.width="0%";
      this.disableCapturing();
      this.view.locationtracker.setDestinationLocation(this.destinationLocation);
      this._isWatchStopped=false;
      this.view.locationtracker.startLocationMonitoring();
    }
    if(this.previousForm=="frmInspectionReview" || this.previousForm=="frmInspectionHistory"){
      return;
    }
    try{
      this.getInspectionListData();
      //this.showAssetReferenceDoc();
    }catch(excp){
      alert(JSON.stringify(excp));
      alert(excp.message);
      kony.print("#### Exception occured in fetching the inspectionlist records ####"+excp);
    }
  },

  /***************** sync module starts ***********************************/
  onSuccesCallbackInfo: function(measurementInfo,measurementHistory){
    debugger;
    if(Array.isArray(measurementInfo) &&  measurementInfo.length>0 &&
       Array.isArray(measurementHistory)){
      var data = this._processData(measurementInfo,measurementHistory);
      this.view.flxInfoCardContainer.right="0%";
      this.view.InfoCard.setData(data);
    }
  },
  getMesurementInfo:function(measurementID,measurement_Range_ID){
    if((typeof measurementID==='string' || typeof measurementID==='number') && 
       (typeof measurement_Range_ID==='string' || typeof measurement_Range_ID=='number')){
      if(typeof this.measurementMap==='object' && typeof this.measurementMap!==null){
        var measurement=this.measurementMap[measurementID];
        if(typeof measurement==='object' && typeof measurement!==null){
          this.selectedMeasurement=measurement;
        }
        if(Array.isArray(this.inspectionMeasurement)&& (this.inspectionMeasurement).length>0){
          if(typeof this.inspectionMeasurement[0]["Measurement_Set_Id"]==='string' ||
             typeof this.inspectionMeasurement[0]["Measurement_Set_Id"]==='number' ){
            var options={};
            options["whereConditionAsAString"]="Measurement_Set_Id = '"+this.inspectionMeasurement[0]["Measurement_Set_Id"]+
              "' AND Measurement_Range_Id ='"+measurement_Range_ID+"'" ;
            this.count=0;
            this._fetchRecords("measurement_hstry", options);
          }
        }
      }
    }
  },
  /**
   * @function
   *
   */
  setUserInfo:function(){
    if(Array.isArray(this.inspectionUser) && (this.inspectionUser).length>0){
      this.view.lblUserName.text=InspectionUtil.validateText(this.inspectionUser[0]["FirstName"])+" "+
        InspectionUtil.validateText(this.inspectionUser[0]["LastName"]);
    }else{
      this.view.lblUserName.text="NA";
    }
  },
  /**
   * @function
   *
   * @param inspection 
   */
  setCommonData:function(inspection){
    //alert(inspection)
    if(typeof inspection==='object' && typeof inspection!==null){
      //this.view.lblInspectionID.text=app_constant.inspection+InspectionUtil.validateText(inspection["Inspection_Id"]);
      var inspectionId=parseInt(inspection["Inspection_Id"]);
      if(isNaN(inspectionId)===false){
        if(inspectionId<0){
          this.view.lblInspectionID.skin = "sknLblInspectionDetailAssetIdsmaller";
          this.view.lblInspectionID.text=app_constant.offline_inspection_msg +(-1*inspectionId)+app_constant.offline_inspection_closing_msg;
        }else{
          this.view.lblInspectionID.skin = "sknLblInspectionDetailAssetId";
          this.view.lblInspectionID.text=app_constant.inspection+InspectionUtil.validateText(inspection["Inspection_Id"]);
        }
      }else{
        this.view.lblInspectionID.text=app_constant.inspection+InspectionUtil.validateText(inspection["Inspection_Id"]);
      }
      this.view.lblHeader.text = app_constant.inspection+InspectionUtil.validateText(inspection["Inspection_Id"]);
      //alert(inspection["asset"]["Asset_Img_URL"])
      //this.view.imgAsset.src = InspectionUtil.validateText(inspection["asset"]["Asset_Img_URL"])
      if(InspectionUtil.validateText(inspection["Status"])== "Assigned"){
        this.view.lblInspectionStatus.skin = "sknLblAssigned";
        this.view.imgInsStatus.src = "";
      }else if(InspectionUtil.validateText(inspection["Status"])== "In progress"){
        this.view.lblInspectionStatus.skin = "skinLblInProgress";
        this.view.imgInsStatus.src = "inprogress_icon.png";
      }else{
        this.view.lblInspectionStatus.skin = "sknLblcompleted";
        this.view.imgInsStatus.src = "complete_icon.png";
      }
      this.view.lblInspectionStatus.text=InspectionUtil.validateText(inspection["Status"]);
      var localDateObj=InspectionUtil.getSqlDatetoJSDate(inspection["Assigned_Timestamp"]);
      this.view.lblDay.text=InspectionUtil.getReadableDateString(localDateObj);
      this.view.lblTime.text=InspectionUtil.getReadableTimeString(localDateObj);
      this.view.lblAssetId.text=app_constant.asset+inspection["Asset_Id"];
      var asset=inspection["asset"];
      if(InspectionUtil.isJsonObject(asset)){
        debugger;
        var assetType=asset["type"];
        this.view.imgAsset.base64 = InspectionUtil.validateText(asset["image_base64"]);
        var assetLocation=asset["location"];
        if(typeof assetLocation=='object' && assetLocation!==null){
          var locationObject={};
          locationObject["lattitude"]=assetLocation["Latitude"];
          locationObject["longitude"]=assetLocation["Longitude"];
          locationObject["address"]=assetLocation["Description"];
          this.view.lblDestinationAddress.text=locationObject["address"];
          this.destinationLocation=locationObject
          this.view.locationtracker.width="0%";
          this.assetLocation=locationObject;
          this.view.locationtracker.setDestinationLocation(locationObject);
        }
        if(InspectionUtil.isJsonObject(assetType)){
          this.view.lblAssetTypeId.text=InspectionUtil.validateText(assetType["Name"]);
        }
      }
    }
  },
  //to fetch all the records related to this form controller.
  populateInspectionInfo:function(inspection){
    if(typeof inspection==='object' && typeof inspection!==null){
      //this.view.loadingScreen.show("Processing..",1);
      if(Array.isArray(this.inspectionUser) && (this.inspectionUser).length>0){
        this.view.lblUserName.text=InspectionUtil.validateText(this.inspectionUser[0]["FirstName"])+" "+
          InspectionUtil.validateText(this.inspectionUser[0]["LastName"]);
      }else{
        this.view.lblUserName.text="NA";
      }
      this.processMeasurement();
      this.view.loadingScreen.hide(1);
    }
  },
  processMeasurement:function(){
    if(Array.isArray(this.measurementList)){
      var measurementMap=InspectionUtil.parseRecords(this.measurementList, "Measurement_Id");
      this.measurementMap=measurementMap;
      var parsedMeasurementList=[];
      if(Array.isArray(this.measurementRange) && InspectionUtil.isJsonObject(measurementMap) ){
        var measurementRangeLength=this.measurementRange.length;
        var measurementRange;
        for(var i=0;i<measurementRangeLength;i++){
          measurementRange=this.measurementRange[i];
          if(typeof measurementRange["Measurement_Id"]==='string' || typeof measurementRange["Measurement_Id"]==='number' ){
            if(Array.isArray(measurementMap[measurementRange["Measurement_Id"]]) && measurementMap[measurementRange["Measurement_Id"]].length>0){
              measurementRange["measurement"]=measurementMap[measurementRange["Measurement_Id"]][0];
              parsedMeasurementList.push(measurementRange);
            }
          }
        }
        this.view.measurement.setData(parsedMeasurementList,this.addImageCallback,this.showInfoCallBack);
        this.view.btnSubmitInspection.setEnabled(true);
        this.view.forceLayout();
      }
    }
  },
  getInspectionListData:function(){
    debugger;
    this.count=0;
    var options={};
    var userId=this.inspection["Assigned_To"];
    var asset=this.inspection["asset"];
    if(typeof asset ==='object' && typeof asset!==null){
      this.asset=asset;
    }
    if(typeof userId==='string'){
      options["whereConditionAsAString"]="User_Id = '"+userId+"'";
      //this.view.loadingScreen.show("loading..",1);
      this._fetchRecords("inspection_user",options);
    }

    var assetId=this.inspection["Asset_Id"];
    if(typeof assetId==='string' ||typeof assetId==='number'){
      options={};
      options["whereConditionAsAString"]="Asset_Id = '"+assetId+"'";
      this._fetchRecords("asset_groupnames",options);
    }
    var inspectionId=this.inspection["Inspection_Id"];
    if(typeof inspectionId==='number'){
      options={};
      options["whereConditionAsAString"]="Inspection_Id = '"+inspectionId+"'";
      this._fetchRecords("inspection_measurement",options);
    }
    //this._fetchRecords("measurement_hstry");
  },
  /**
   * @function
   *
   */
  setAssetGroupNames:function(record){
    if(Array.isArray(record)&&record.length>0){
      var groupClause="Group_Id IN (";
      var i=0;
      for(;i<record.length-1;i++){
        groupClause=groupClause+record[i]["Group_Id"]+",";
      }
      groupClause=groupClause+record[i]["Group_Id"]+")";
      var options={};
      options["whereConditionAsAString"]=groupClause;//"Group_Id IN (1,2)";
      this._fetchRecords("groupnames",options);
    }
  },
  /**
   * @function
   *
   * @param record 
   */
  setGroupNames:function(record){
    if(typeof this.asset==='object' && typeof this.asset!==null){
      this.asset["group_name"]=this.groupNameList;
    }
    this.populateAssetDetail(this.asset);
  },
  /**
   * @function
   *
   * @param record 
   */
  setInspectionMeasurement:function(record){
    if(Array.isArray(record)&&record.length>0){
      var measurementSetClause="Measurement_Set_Id IN (";
      this.measurementSetId=record[0]["Measurement_Set_Id"];
      var i=0;
      for(;i<record.length-1;i++){
        measurementSetClause=measurementSetClause+record[i]["Measurement_Set_Id"]+",";
      }
      measurementSetClause=measurementSetClause+record[i]["Measurement_Set_Id"]+")";
      var options={};
      options["whereConditionAsAString"]=measurementSetClause;
      this._fetchRecords("measurementset_measurementrange",options);
    }
  },
  /**
   * @function
   *
   * @param record 
   */
  setMeasurementSetMeasurementRange:function(record){
    this.measurementSetRange =record;
    if(Array.isArray(record)&&record.length>0){
      var measurementRangeClause="Measurement_Range_Id IN (";
      var i=0;
      for(;i<record.length-1;i++){
        measurementRangeClause=measurementRangeClause+record[i]["Measurement_Range_Id"]+",";
      }
      measurementRangeClause=measurementRangeClause+record[i]["Measurement_Range_Id"]+")";
      var options={};
      options["whereConditionAsAString"]=measurementRangeClause;
      this._fetchRecords("measurement_range",options);
    }
  },
  /**
   * @function
   *
   * @param record 
   */
  setMeasurementRange:function(record){
    this.measurementRange =record;
    var measurementClause="Measurement_Id IN (";
    if(Array.isArray(record)&&record.length>0){
      var i=0;
      for(;i<record.length-1;i++){
        measurementClause=measurementClause+record[i]["Measurement_Id"]+",";
      }
      measurementClause=measurementClause+record[i]["Measurement_Id"]+")";
      var options={};
      options["whereConditionAsAString"]=measurementClause;
      this._fetchRecords("measurement",options);
    }
  },
  /**
   * @function
   *
   * @param record 
   */
  _fetchRecordSuccess:function(dataModel,record){
    this.view.loadingScreen.hide(1);
    switch(dataModel){
      case "inspection_user":
        this.inspectionUser=record;
        this.setUserInfo();
        break;
      case "asset_groupnames":
        this.assetGroupnames=record;
        this.setAssetGroupNames(record);
        break;
      case "groupnames":
        this.groupNameList =record;
        this.setGroupNames(record);
        break;
      case "inspection_measurement":
        this.inspectionMeasurement =record;
        this.setInspectionMeasurement(record);
        break;
      case "measurementset_measurementrange":
        this.setMeasurementSetMeasurementRange(record);
        break;
      case "measurement_range":
        this.setMeasurementRange(record);
        break;
      case "measurement":
        this.measurementList =record;
        break;
      case "measurement_hstry":
        this.measurementHistory =record;
        this.onSuccesCallbackInfo(this.selectedMeasurement ,this.measurementHistory);
    }
    /*if(this.count==4){
        alert("all records fetched");
        this.processRecords();
      }*/
    // alert(this.count);
    if(this.count===6){
      this.populateInspectionInfo(this.inspection);
    }
    this.count=this.count+1;
  },
  //to read records from table
  _fetchRecords:function(dataModel,options){
    /**
     * @function
     *
     * @param error 
     */
    function failureCB(error){
      this.view.loadingScreen.hide(1);
      this.view.loadingScreen.show(JSON.stringify(error) ,4);
      alert(JSON.stringify(error));
    }
    try{
      var inspObj=new kony.sdk.KNYObj(dataModel);
      if(options===undefined){
        options=null;
      }
      //this.view.loadingScreen.show("Loading..",1);
      inspObj.get(options,this._fetchRecordSuccess.bind(this,dataModel),failureCB.bind(this));
    }catch(excp){
      this.view.loadingScreen.hide(1);
      this.view.loadingScreen.show(excp.message,4);
      alert(excp.message);
    }
  },

  /***************** sync module ends***********************************/

  toggleImageGalleryContainer:function(){
    this.isContainerShown=!this.isContainerShown;
    if(this.isContainerShown){
      this.showImageGallery();
    }else{
      this.hideImageGallery();
    }
    this.view.forceLayout();
  },
  addImageCallback:function(callbackFunction){
    debugger;
    //alert(typeof callbackFunction);

    if(typeof callbackFunction==="function"){
      this.imageCallBackFunction=callbackFunction;
      this.toggleImageGalleryContainer();
    }
    //this.toggleImageGalleryContainer();

  },
  onImageSelected:function(imgBase64){
    this.toggleImageGalleryContainer();
    if(this.imageCallBackFunction!==null&& this.imageCallBackFunction!==undefined && typeof this.imageCallBackFunction==='function'){
      debugger;
      this.imageCallBackFunction(imgBase64);
    }
    //debugger;
  },
  showImageGallery:function(eventobject){
    var self=this;
    this.view.flxImageGalleryContainer.isVisible=true;
    this.view.flxImageGalleryContainer.animate(
      kony.ui.createAnimation({100:{top:"0%","stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.3},
      {animationEnd: function() {
        self.view.imagegallery.toggleBackground(true);
        self.view.forceLayout();
      } 
      });

  },
  hideImageGallery:function(){
    var self=this;
    this.view.flxImageGalleryContainer.isVisible=false;
    this.view.imagegallery.toggleBackground(false);
    this.view.flxImageGalleryContainer.animate(
      kony.ui.createAnimation({100:{top:"100%","stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.1},
      {animationEnd: function() {
        self.view.forceLayout();
      } 
      });
  },
  showInfoCallBack:function(measurementID,measurementRangeID){
    debugger;
    //this.view.flxInfoCardContainer.right="0%";
    this.getMesurementInfo(measurementID,measurementRangeID);
  },
  populateData:function(){
    debugger;
    if(this.inspection===null||this.inspection===undefined){
      return;
    }
    //this.view.measurement;
    //this.view.add(widgetArray)
    this.view.measurement.setData(this.inspection.measurementRangeList,this.addImageCallback,this.showInfoCallBack);
    this.view.forceLayout();
    var status=this.inspection["status"];
    if(status!==null&&status!==undefined){
      status=status.toLowerCase();
    }
    switch(status){
      case "assigned":
        this.view.lblInspectionStatus.text="Assigned";
        break;
      case "in progress":
        this.view.lblInspectionStatus.text="In-progress";
        break;
      case "completed":
        this.view.lblInspectionStatus.text="Completed";
        break;
      default:
        this.view.lblInspectionStatus.text="NA";
    }
    this.view.lblAssetId.text=validateText(this.inspection["asset_Id"]);
    this.view.lblInspectionID.text=validateText(this.inspection["inspection_Id"]);
    this.view.lblAssetCode.text=validateText(this.inspection["asset_type"]);
    this.view.lblAssetName.text=getAssatName(this.inspection["asset_type"]);
    var timeStamp=this.inspection["assigned_Timestamp"];
    timeStamp=_convertDateStringToEpochTime(timeStamp);
    this.view.lblTime.text=getTimeString(timeStamp);
    this.view.lblDay.text=getDateString(timeStamp);
    if(!kony.sdk.isNullOrUndefined(this.inspection["asset_type"])){
      this.view.lblAssetTypeId.text = this.inspection["asset_type"];
    }
    /*if(timeStamp!==null && timeStamp!==undefined){
      try{
        var date=new Date(timeStamp);
        this.view.lblTime.text=date.getHours()+" Hrs";
        this.view.lblDay.text=(timeStamp.split(" "))[0];
      }catch(excp){
        kony.print(JSON.stringify(excp));
      }
    }*/
    this.view.lblUserName.text=validateText(this.inspection["inspectedBy"]);//@TODO change value 
    this.view.lblDistance.text=this.inspection["distance"];
    this.view.lblAddress.text=validateText(this.inspection["asset_location_description"]);
  },
  showAssetDetailContainer:function(){
    debugger;
    var self=this;
    this.view.flxScAssetDetailsContainer.animate(
      kony.ui.createAnimation({100:{left:"20%","stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.10},
      {animationEnd: function() {

      } 
      });
    self.view.flxOverlay.animate(
      kony.ui.createAnimation({100:{left:"0%","stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.10},
      {animationEnd: function() {

      } 
      });
  },
  hideAssetDetailContainer:function(){
    debugger;
    var self=this;
    this.view.flxScAssetDetailsContainer.animate(
      kony.ui.createAnimation({100:{left:"100%","stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.10},
      {animationEnd: function() {

      } 
      });
    self.view.flxOverlay.animate(
      kony.ui.createAnimation({100:{left:"-20%","stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.01},
      {animationEnd: function() {

      } 
      });
  },
  getAssetDetailSuccessCB:function(result){
    debugger;
    alert("returning from getAssetDetailSuccessCB ");
    return;
    kony.application.dismissLoadingScreen();
    this.view.loadingScreen.hide(1);
    if(result!==null&&result!==undefined){
      if(Array.isArray(result.Assets)){
        this.populateAssetDetail(result.Assets[0]);
      }
    }
  },
  populateAssetDetail:function(asset){
    if(asset!==null&&asset!==undefined){
      this.assetDetail=asset;
      this.view.lblAssetDetail.text =app_constant.asset+InspectionUtil.validateText(asset.Asset_Id);
      //this.view.lblAssetId2.text=validateText(asset.asset_Id);
      var assetType=asset["type"];
      if(typeof assetType==='object' && typeof assetType!==null){
        this.view.lblAssetCode.text=InspectionUtil.validateText(assetType.Name);
        this.view.lblAssetName.text=InspectionUtil.validateText(assetType.Description);
      }else{
        this.view.lblAssetCode.text="";
        this.view.lblAssetName.text="";
      }
      this.view.lblAssetDescription.text=InspectionUtil.validateText(asset.Asset_Description);

      var assetLocation=asset["location"];
      if(typeof assetLocation==='object' && typeof assetLocation!==null){
        this.view.lblLocationCode.text=InspectionUtil.validateText(assetLocation["Id"]);
        this.view.lblAssetAddress.text=InspectionUtil.validateText(assetLocation["Description"])+
          " "+InspectionUtil.validateText(asset["Street"]);
      }else{
        this.view.lblAssetAddress.text="";
        this.view.lblLocationCode.text="";
      }
      var assetGroup=asset["group_name"];
      if(Array.isArray(assetGroup)){
        if(assetGroup[0]!==undefined){
          this.view.lblAssetGroup0.text=InspectionUtil.validateText(assetGroup[0]["Name"]);
        }
        if(assetGroup[1]!==undefined){
          this.view.lblAssetGroup1.text=InspectionUtil.validateText(assetGroup[1]["Name"]);
        }
      }
      this.view.lblPartNumber.text=InspectionUtil.validateText(asset.Manufacture_Part_Nbr);
      this.view.lblModelNumber.text=InspectionUtil.validateText(asset.Manufacture_Model_Nbr);
      this.view.lblSerialNumberValue.text=InspectionUtil.validateText(asset.Manufacture_Serial_Nbr);
    }
  },
  /**
   * @function
   *
   * @param asset 
   */
  populateAssetDetail2:function(asset){
    alert("returning from populateAssetDetail2");
    return;
    if(asset!==null&&asset!==undefined){
      this.assetDetail=asset;
      this.view.lblAssetDetail.text = validateText(asset.asset_Id);;
      //this.view.lblAssetId2.text=validateText(asset.asset_Id);
      this.view.lblAssetCode.text=validateText(asset.asset_Type_Name);
      this.view.lblAssetName.text=validateText(asset.asset_Type_Description);
      this.view.lblAssetDescription.text=validateText(asset.asset_Description);
      this.view.lblLocationCode.text=validateText(asset.asset_Location_Id);
      this.view.lblAssetAddress.text=validateText(asset.locationDes)+" "+validateText(asset.street);
      this.view.lblAssetGroup0.text="XXX";
      this.view.lblAssetGroup1.text="XXX";
      this.view.lblPartNumber.text=validateText(asset.manufacture_Part_Nbr);
      this.view.lblModelNumber.text=validateText(asset.manufacture_Model_Nbr);
      this.view.lblSerialNumberValue.text=validateText(asset.manufacture_Serial_Nbr);
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  getAssetDetailFailureCB:function(result){
    alert("returning from getAssetDetailFailureCB");
    return;
    this.view.loadingScreen.hide(1);
    kony.application.dismissLoadingScreen();
    alert("error:"+result)
  },
  /**
   * @function
   *
   */
  readMeasurement:function(){
    debugger;
    var results=this.view.measurement.getResult();
    var navObj=new kony.mvc.Navigation("frmInspectionReview");
    var reviewData={};
    reviewData["inspection"]=this.inspection;
    reviewData["measurement"]=results;
    reviewData["assetDetail"]=this.assetDetail;
    reviewData["measurementSetId"]=this.measurementSetId;
    reviewData["previousForm"]="frmInspectionExecution";
    reviewData["userData"] = this._userData;
    try{
      navObj.navigate(reviewData);
    }catch(excp){
      alert("Excp: "+JSON.stringify(excp));
    }
  },
  /**********************************************************************************
   *	Name	:	getAssetDetail
   *	Author	:	Kony
   *	Purpose	:	To get the detail of the asset for the provided asset id.
   ***********************************************************************************/
  getAssetDetail:function(assetId){
    alert("returning from getAssetDetail ");
    return;
    if(assetId===null || assetId===undefined){
      return;
    }

    /*try{
      var objectInstance=getObjectInstance("AssetDetail");
      if(objectInstance!==null){
        var dataObject = new kony.sdk.dto.DataObject("Asset");
        var options = {
          "dataObject": dataObject,
          "headers": {},
          //"queryParams": {"$filter":"((someid eq '"+assetId+"' ) and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"}
          "queryParams": {"$filter":"someid eq '"+assetId+"'" }
        };
        if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
          kony.application.showLoadingScreen("sknLoading","please wait..",constants.
                                             LOADING_SCREEN_POSITION_FULL_SCREEN, true,false,null);
          objectInstance.fetch(options, this.getAssetDetailSuccessCB.bind(this),this.getAssetDetailFailureCB.bind(this));
        } else {
          dismissLoadingScreen();
          alert("No Network connected");
        }
      }
    }catch(excp){
      dismissLoadingScreen();
      kony.application.dismissLoadingScreen();
      kony.print("Exception occured in getting asset details: "+JSON.stringify(excp) );
    }*/


    try{
      var client = kony.sdk.getCurrentInstance();
      var intgService;
      intgService = client.getIntegrationService("Assets");
      this.view.loadingScreen.show();
      //kony.model.ApplicationContext.showLoadingScreen("Please wait..");
      intgService.invokeOperation("getAssetById",{},{"id":assetId},this.getAssetDetailSuccessCB.bind(this),this.getAssetDetailFailureCB.bind(this));
    }catch(excp){
      this.view.loadingScreen.hide();
      kony.application.dismissLoadingScreen();
      kony.print(JSON.stringify(excp));
    }
  },


  /**
   * @function
   *
   * @param measurementID 
   * @param measurement_Range_ID 
   */
  /*getMesurementInfo2:function(measurementID,measurement_Range_ID){
    alert("returning from getMesurementInfo2");
    return;
    if(measurementID!==null && measurementID!==undefined && measurement_Range_ID!==null && measurement_Range_ID!==undefined){
      var queryParams = {"msid":measurementID};
      this._fetchFromODataService("inspectionObjService", "MeasurementSet", queryParams, this.onSuccesCallbackInfo.bind(this,measurement_Range_ID), this.errorCallbackInfo.bind(this));
    }

  },*/
  /*_fetchFromODataService: function(objectService, dataModelObject, queryParams, successCallback, errorCallback) {
    try {
      var sdkClient = new kony.sdk.getCurrentInstance();
      var objectInstance;
      if (Object.keys(sdkClient).length !== 0) {
        objectInstance = sdkClient.getObjectService(objectService, {
          "access": "online"
        });
      }
      if (objectInstance === null || objectInstance === undefined) {
        this.view.loadingScreen.hide();
        kony.application.dismissLoadingScreen();
        throw {
          "error": "ConnectionError",
          "message": "Please connect app to MF"
        };
        return;
      }
      var dataObject = new kony.sdk.dto.DataObject(dataModelObject);
      var options = {
        "dataObject": dataObject,
        "headers": {
          "Content-Type": "application/json"
        },
        "queryParams": queryParams
      };
      if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        objectInstance.fetch(options, successCallback, errorCallback);
      }
    } catch (exception) {
      this.view.loadingScreen.hide();
      kony.application.dismissLoadingScreen();
      //@TODO remove alerts
      alert(exception);
    }
  },*/


  /*errorCallbackInfo: function(response){

    kony.print("Error in errorCallbackInfo:"+response.toString());

  },*/
  /*onSuccesCallbackInfo2: function(measurement_Range_ID,response){
    var data = response.records[0].MeasurementHistoryList;
    var measurement_Range_Id = measurement_Range_ID;
    //alert(data);
    if(!kony.sdk.isNullOrUndefined(data) && Array.isArray(data) && data.length>0){
      data = data.filter(function(element){
        if(element.measurement_Range_Id==measurement_Range_Id)
          return true;
        return false;
      }.bind(this));
      data = this._processData(data);
      this.view.flxInfoCardContainer.right="0%";
      this.view.InfoCard.setData(data);
    }
  },*/
  _processData: function(measurementInfo,measurementHistory){
    var result = {};
    if(Array.isArray(measurementInfo) && measurementInfo.length>0){
      result.measurement_name = measurementInfo[0]["Name"];
      result.measurement_Id = "#"+ measurementInfo[0]["Measurement_Id"];
      result.measurement_description = measurementInfo[0]["Description"];
    }
    if(Array.isArray(measurementHistory) && measurementHistory.length>0 ){
      var values = [];
      var tempJSON;
      for(var i=0;i<measurementHistory.length;i++){
        if(typeof measurementHistory[i]=="object" ){
          if((typeof measurementHistory[i].Inspection_Value=="string" && measurementHistory[i].Inspection_Value.length>0)||
             typeof measurementHistory[i].Inspection_Value=="number"){
            tempJSON = {};
            tempJSON.date = this._getUTCDate(measurementHistory[i].Inspection_Timestamp);
            tempJSON.time = this._getUTCTime(measurementHistory[i].Inspection_Timestamp);
            tempJSON.value = measurementHistory[i].Inspection_Value;
            tempJSON["Response_Type"]=measurementHistory[i]["Response_Type"];
            values.push(tempJSON);
          }
        }
        /*tempJSON = {};
        tempJSON.date = this._getUTCDate(measurementHistory[i].Inspection_Timestamp);
        tempJSON.time = this._getUTCTime(measurementHistory[i].Inspection_Timestamp);
        tempJSON.value = measurementHistory[i].Inspection_Value;
        tempJSON["Response_Type"]=measurementHistory[i]["Response_Type"];
        values.push(tempJSON);*/
      }
      result.values = values;
    }


    /*if(!kony.sdk.isNullOrUndefined(data) && Array.isArray(data) && data.length>0){
      result.measurement_name = data[0].measurement_name;
      result.measurement_Id = "#"+ data[0].measurement_Id;
      result.measurement_description = data[0].measurement_description;
      var values = [];
      var tempJSON;
      for(var i=0;i<data.length;i++){
        tempJSON = {};
        tempJSON.date = this._getUTCDate(parseInt(data[i].inspection_Timestamp));
        tempJSON.time = this._getUTCTime(parseInt(data[i].inspection_Timestamp));
        tempJSON.value = data[i].inspection_Value;
        values.push(tempJSON);
      }
      result.values = values;
    }*/
    return result;
  },
  _getUTCDate: function (epochTime){
    var result = "";
    var date = new Date(epochTime);
    var day =  date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    result = this._addZeroPrefix(day)+ "/"+ this._addZeroPrefix(month)+"/"+year;
    return result;
  },
  _getUTCTime: function (epochTime){
    var result;
    var currDate = new Date();
    var date = new Date(epochTime);
    var hr = this._addZeroPrefix(date.getHours());
    var min = this._addZeroPrefix(date.getMinutes());
    result = hr +":"+min+" Hrs";
    return result;
  },
  _addZeroPrefix: function (number){
    var result;
    if(number>=0 && number<10){
      result = "0"+number;
    }
    else{
      result = number;
    }
    return result;
  },
  _onClickOfHistory: function(){
    var navigationObj = new kony.mvc.Navigation("frmInspectionHistory");
    var navigationData = {};
    navigationData.previousForm = "frmInspectionExecution";
    navigationData.asset_id = this.inspection["Asset_Id"];
    navigationObj.navigate(navigationData);
  },
  /**
   * @function
   *
   */
  resetFormData:function(){
    //this.isInproximity=false;
    this.view.btnSubmitInspection.setEnabled(false);
  },
  /**
   * @function
   *
   */
  navigateToInspectionsList: function(){
    this.view.locationtracker.width="0%";
    this._isWatchStopped=true;
    this.view.locationtracker.stopMonitoring();
    var navigationObj = new kony.mvc.Navigation("frmInspectionsList");
    navigationObj.navigate(); 
  },
  /**
   * @function
   *
   */
  inProximity:function(deviceLocation,destinationLocation){
    debugger;
    if(this._isWatchStopped===true)return;
    this.deviceLocation=deviceLocation;
    //this.destinationLocation=destinationLocation;
    if(this.isOutProximity===true||this.isOutProximity===null){
      this.isInproximity=true;
      this.isOutProximity=false;
      if(typeof deviceLocation=='object' && 
         deviceLocation!==null &&
         typeof destinationLocation=='object' &&
         destinationLocation!==null){
        this.deviceLocation=deviceLocation;
        this.destinationLocation=destinationLocation;
        this.enableCapturing();
        //this.view.btnSubmitInspection.setVisibility(true);
        //this.view.measurement.setEnabled(true);
        //this.view.flxOutsideProximityRoot.setVisibility(false);
        this.createCheckinRecord();
      }
    }
  },
  /**
   * @function
   *
   */
  outsideProximity:function(deviceLocation,destinationLocation){
    debugger;
    if(this._isWatchStopped===true)return;
    this.deviceLocation=deviceLocation;
    //this.destinationLocation=destinationLocation;
    //isCheckedIn
    if(this.isForcedCheckIn===true){
      this.view.locationtracker.width="0%";
      return;
    }
    if(this.isInproximity===true){
      this.isInproximity=false;
      this.isOutProximity=true;
      if(this.isCheckedIn===true){
        //moved out of the proximity.
        //this.view.navigatepopup.setVisibility(true);
        this.createCheckoutRecord(this.checkInRecordId);
        this.view.locationtracker.width="100%";
        this.view.locationtracker.showNavigationMessage();
      }else{
        //out side of the proximity.
        if(this.isForcedCheckIn===true){
          this.view.locationtracker.width="0%";
          return;
        }
        var locationObj={};
        if(typeof deviceLocation=='object' && 
           deviceLocation!==null &&
           typeof destinationLocation=='object' &&
           destinationLocation!==null){
          this.deviceLocation=deviceLocation;
          this.destinationLocation=destinationLocation;
          //locationObj["origin"]=deviceLocation;
          //locationObj["destination"]=destinationLocation;
        }
      }
      this.view.btnSubmitInspection.setVisibility(false);
      this.view.measurement.setEnabled(false);
      this.view.flxOutsideProximityRoot.setVisibility(true);
    }

  },
  /**
   * @function
   *
   */
  showRoutes:function(){
    debugger;
    //this.view.navigatepopup.setVisibility(false);
    if(typeof this.deviceLocation=='object' && 
       this.deviceLocation!==null &&
       typeof this.destinationLocation=='object' &&
       this.destinationLocation!==null){
      var locationObj={};
      locationObj["origin"]=this.deviceLocation;
      locationObj["destination"]=this.destinationLocation;
      if(typeof this.inspection=='object' && this.inspection!==null){
        var asset=this.inspection["asset"];
        locationObj["Assigned_Timestamp"]=this.inspection["Assigned_Timestamp"];
        if(typeof asset=='object' && asset!==null){
          var assetRepresenter=asset["representer"];
          if(typeof assetRepresenter=='object' && assetRepresenter!==null){
            locationObj["representer"]=assetRepresenter;
          }
        }
      }
      try{
        this._isWatchStopped=true;
        this.view.locationtracker.stopMonitoring();
        var navObj=new kony.mvc.Navigation("frmMapNavigation");
        //this.view.locationtracker.clearWatch();
        navObj.navigate(locationObj);
      }catch(excp){
        debugger;
      }
    }else{
      alert("retrieving device location..");
    }
  },
  /**
   * @function
   *
   */
  proceedAnyways:function(){
    debugger;
    this.isForcedCheckIn=true;
    this.isCheckedIn=true;
    //this.view.navigatepopup.setVisibility(false);
    this._isWatchStopped=true;
    this.view.locationtracker.stopMonitoring();
    this.enableCapturing();
    this.createCheckinRecord();
  },
  /**
   * @function
   *
   */
  showAssetReferenceDoc:function(){
    debugger;
    try{
      if(kony.os.deviceInfo().name=="iPhone"){
        //Checks if the file is present in the local store
        //if present then it will delete it first
        var mainLoc1 = kony.io.FileSystem.getDataDirectoryPath();
        var myFileLoc1 = mainLoc1 + constants.FILE_PATH_SEPARATOR +"Reference_Doc.pdf";
        var myFile1 = new kony.io.File(myFileLoc1);

        if(myFile1.exists()){
          myFile1.remove(true);
        }

        //Taking the local stored base64
        //Converting to rawbytes and saving to pdf file locally.
        var base64 = this.asset['Reference_Doc'];
        if(base64=="" || base64==null)
        {
          return;
        }
        else
        {
          var mainLocIOS = kony.io.FileSystem.getDataDirectoryPath();
          var myFileLoc = mainLocIOS + constants.FILE_PATH_SEPARATOR + "Reference_Doc.pdf";
          var myFile = new kony.io.File(myFileLoc).createFile();   //returns true or false.
          var getMyFile = kony.io.FileSystem.getFile(myFileLoc);
          var rawBytes = kony.convertToRawBytes(base64);
          if(getMyFile !== null) 
          {
            getMyFile.write(rawBytes);
          }
          var fileObj =  kony.io.FileSystem.getFile(getMyFile['fullPath']);
          //var navigationObj = getMyFile['fullPath'];
          var param={};
          param["file_path"]=getMyFile['fullPath'];
          param["last_form"]="frmInspectionExecution";
          //Navigate to the New Form.
          var navObj = new kony.mvc.Navigation("frmPdfViewer");
          navObj.navigate(param);
        }


      }else if(kony.os.deviceInfo().name=='android'){

        //Checks if the file is present in the local store
        //if present then it will delete it first
        var mainLoc1 = kony.io.FileSystem.getExternalStorageDirectoryPath();
        var myFileLoc1 = mainLoc1 + constants.FILE_PATH_SEPARATOR +"Reference_Doc.pdf";
        var myFile1 = new kony.io.File(myFileLoc1);
        myFile1.createFile();
        myFile1.remove(true);

        //Taking the local stored base64
        //Converting to rawbytes and saving to pdf file locally.
        var base64 = this.asset['Reference_Doc'];
        if(base64=="" || base64==null)
        {
          new kony.ui.Toast({"text":"PDF Not Available!", "duration":constants.TOAST_LENGTH_SHORT}).show();
        }
        else
        {
          //If the base64 is nonempty then it will save to local store.
          var mainLoc = kony.io.FileSystem.getExternalStorageDirectoryPath();
          var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "Reference_Doc.pdf";
          //         alert(myFileLoc);
          var myFile = new kony.io.File(myFileLoc).createFile();
          var getMyFile = kony.io.FileSystem.getFile(myFileLoc);
          var rawBytes = kony.convertToRawBytes(base64);

          if(getMyFile === null) 
          {
            new kony.ui.Toast({"text":"Getting File failed with null.", "duration":constants.TOAST_LENGTH_SHORT}).show();
          }
          else 
          {
            getMyFile.write(rawBytes);
          }

          //Navigate to the New Form.
          var param={};
          param["file_path"]=null;
          param["last_form"]="frmInspectionExecution";
          var navObj = new kony.mvc.Navigation("frmPdfViewer");
          navObj.navigate(param);
        }
      }
    }
    catch(err){
      debugger;
      //new kony.ui.Toast({"text":"Error in Saving PDF File.", "duration":constants.TOAST_LENGTH_SHORT}).show();
    }
  },
  /**
   * @function
   *
   */
  onFormInitialization:function(){
    debugger;
    this.addLongPressGesture();
  },
  addLongPressGesture:function(){
    var longConfig={pressDuration:1};
    try{
      var gesturehandle=this.view.addGestureRecognizer(constants.GESTURE_TYPE_LONGPRESS,longConfig,this.longpressGestureCallBack);
    }catch(excp){
      debugger;
      alert("Unable to set gesture recognizer");
    }
  },
  /**
     * @function
     *
     * @param widgetRef 
     * @param gestureInfo 
     */
  longpressGestureCallBack:function(widgetRef,gestureInfo){
    debugger;
    this._isWatchStopped=false;
    this.view.locationtracker.setDestinationLocation(this.assetLocation);
    this.view.locationtracker.startLocationMonitoring();
    //this.clearWatch();
    //this.mockLocation();
    //alert(gestureInfo.gesturesetUpParams.pressDuration);
    //this.view.lblGesture.text= "A longpress gesture was performed for "+ gestureInfo.gesturesetUpParams.pressDuration+" Seconds";
  }

});