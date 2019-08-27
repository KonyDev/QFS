define({ 

  navigationData:null,
  isFresForm:true,
  progressStatus:null,
  STATUS:{
    "HOME":0,
    "SELECT_VEHICLE":1,
    "ADD_VEHICLE":2,
    "VEHICLE_DETAIL":3
  },

  journeyId:null,
  journeyObj:null,
  userObj:null,
  passengerList:null,
  vehicleList:null,
  vehicleListMap:null,

  selectedVehicleId:null,

  /**
   * @function
   *
   * @param param 
   */
  onNavigate:function(param){
    debugger;

    if(typeof param=='object' && param!==null){
      this.isFresForm=true;
      this.navigationData=param;
      this.journeyId=param[JOURNEY_TBL.ID_PK];
    }else{
      this.isFresForm=false;
    }
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    if(this.isFresForm===true){
      try{
        this.progressStatus=this.STATUS.HOME;
        this.resetForm();
        kony.application.showLoadingScreen("","",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        this.populateJourneyDetail();
        kony.application.dismissLoadingScreen();
      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   */
  populateJourneyDetail:function(){
    try{
      this.fetchJourneyDetail(this.journeyId);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  setJourneyInfo:function(journeyObj){
    debugger;
    if(typeof journeyObj=='object' && journeyObj!==null){
      try{
        this.view.lblDepartureAddress.text=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS];
        this.view.lblArrivalAddress.text=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS];
        this.view.lblCenterText.text=journeyObj[JOURNEY_TBL.UF_ID];
        var departureDateobj=JourneyUtil.getSqlDatetoJSDate(journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]);
        this.view.lblExpectedDepartureTime.text=JourneyUtil.getReadableDateString(departureDateobj)+" "+
          JourneyUtil.getTimeStringIn12HrsFromat(departureDateobj);
        var arrivalDateObj=JourneyUtil.getSqlDatetoJSDate(journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);

        this.view.lblExpectedArrivalTime.text=JourneyUtil.getReadableDateString(arrivalDateObj)+" "+
          JourneyUtil.getTimeStringIn12HrsFromat(arrivalDateObj);

        this.view.lblSupervisorName.text=journeyObj[JOURNEY_TBL.SUPERVISOR_NAME];
        this.view.lblSupervisorPhone.text=journeyObj[JOURNEY_TBL.SUPERVISOR_PHONE];
      }catch(excp){
        debugger;
        throw excp;
      }
    }
  },
  /**
   * @function
   *
   * @param driverId 
   */
  getJourneyDriver:function(driverId){
    debugger;
    try{
      if(typeof driverId=='string'|| typeof driverId=='number'){
        var options={};
        options["whereConditionAsAString"]=USER_TBL.USER_EMP_ID_PK+" = "+"'"+driverId+"'";
        this.fetchRecords(DATA_MODEL.USER_TBL, options);
      }else{
        throw {
          message: "journey id not available"
        }
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param journeyId 
   */
  fetchJourneyDetail:function(journeyId){
    try{
      if(typeof journeyId=='string'|| typeof journeyId=='number'){
        var options={};
        options["whereConditionAsAString"]=JOURNEY_TBL.ID_PK+" = "+"'"+journeyId+"'";
        this.fetchRecords(DATA_MODEL.JOURNEY_TBL, options);
      }else{
        throw {
          message: "journey id not available"
        }

      }

    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param journeyId 
   */
  getPassenger:function(journeyId){
    try{
      if(typeof journeyId=='string' ||typeof journeyId=='number'){
        var options={};
        options["whereConditionAsAString"]=PASSENGERS_TBL.JOURNEY_ID_FK+" = "+"'"+journeyId+"'";
        this.fetchRecords(DATA_MODEL.PASSENGERS_TBL, options);
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param passengerList 
   */
  setPassengetList:function(passengerList){
    debugger;
    try{
      if(Array.isArray(passengerList) && passengerList.length>0){
        this.passengerList=passengerList;
        this.view.lblPassengerName.text=passengerList[0][PASSENGERS_TBL.PASSENGER_NAME];
      }else{
        this.passengerList=null;
        this.view.lblPassengerName.text="NA";
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param vehicleId 
   */
  getVehicleDetail:function(vehicleId){
    if(typeof vehicleId=='string' || typeof vehicleId=='number'){
      var options={};
      options["whereConditionAsAString"]=VEHICLE_TBL.VEHICLE_ID_PK+" = "+"'"+vehicleId+"'";
      this.fetchRecords(DATA_MODEL.VEHICLE_TBL, options);
    }else{
      //vehicle not selected
      this.view.flxCarContainer.setVisibility(false);
      this.view.flxSelectVehicleContainer.setVisibility(true);
      this.view.forceLayout();
    }
  },
  /**
   * @function
   *
   * @param vechicleObj 
   */
  populateVehicleDetail:function(vehicleObj){
    debugger;
    try{
      if(typeof vehicleObj=='object' && vehicleObj!==null ){
        if(typeof vehicleObj[VEHICLE_TBL.USER_EMP_ID_FK]=='string' || typeof vehicleObj[VEHICLE_TBL.USER_EMP_ID_FK]=='number'){
          this.view.lblCarName.text="Personal "+vehicleObj[VEHICLE_TBL.VEHICLE_MAKE]+" "+vehicleObj[VEHICLE_TBL.VEHICLE_MODEL];
        }else{
          this.view.lblCarName.text="Company "+vehicleObj[VEHICLE_TBL.VEHICLE_MAKE]+" "+vehicleObj[VEHICLE_TBL.VEHICLE_MODEL];
        }
        this.view.lblCarColor.text=vehicleObj[VEHICLE_TBL.VEHICLE_COLOR];
        this.view.lblRegistrationNumber.text=vehicleObj[VEHICLE_TBL.VEHICLE_REG_NUM];
      }else{

      }

    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param eventobject 
   */
  onCarSegementRowClick:function(eventobject){
    debugger;
    if(typeof eventobject=='object' && eventobject!==null){
      try{
        var selectedRowItems=eventobject.selectedRowItems;
        var vehicleObj;
        if(Array.isArray(selectedRowItems) && selectedRowItems.length>0){
          var selectedVehicle=selectedRowItems[0];
          if(eventobject.id=='segmentPersonalCar'){
            this.view.listBoxVehiclePersonal.selectedKey=selectedVehicle[VEHICLE_TBL.VEHICLE_ID_PK];
            this.view.listBoxVehiclePersonal.setVisibility(true);
            this.view.listBoxVehicleCompany.setVisibility(false);
            this.view.forceLayout();
          }else if(eventobject.id=='segmentCompanyCar'){
            this.view.listBoxVehicleCompany.selectedKey=selectedVehicle[VEHICLE_TBL.VEHICLE_ID_PK];
            this.view.listBoxVehiclePersonal.setVisibility(false);
            this.view.listBoxVehicleCompany.setVisibility(true);
            this.view.forceLayout();
          }
          this.setVehicleForJourney(selectedVehicle[VEHICLE_TBL.VEHICLE_ID_PK]);
          vehicleObj=this.vehicleListMap[selectedVehicle[VEHICLE_TBL.VEHICLE_ID_PK]];
          if(Array.isArray(vehicleObj) && vehicleObj.length>0){
            this.populateVehileInfo(vehicleObj[0]);
            this.progressStatus=this.STATUS.VEHICLE_DETAIL;
            this.view.flxVehicleDetail.setVisibility(true);
            this.view.flxBeginJourneySelectVehicle.setVisibility(false);
            this.view.forceLayout();
          }
        }
      }catch(excp){
        debugger;
        throw excp;
      }
    }
  },
  /**
   * @function
   *
   * @param eventobject 
   */
  onVehicleSelectedFromListBox:function(eventobject){
    debugger;
    try{
      if(typeof eventobject=='object' && eventobject!==null){
        var selectedKey=this.view[eventobject.id].selectedKey;
        selectedKey=parseInt(selectedKey);
        this.setVehicleForJourney(selectedKey);
        var vehicleObj=this.vehicleListMap[selectedKey];
        if(Array.isArray(vehicleObj) && vehicleObj.length>0){
          this.populateVehileInfo(vehicleObj[0]);
        }
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  enableSelectVehicle:function(){
    this.view.flxSelectVehicleContainer.setVisibility(true);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  disableSelectVehicle:function(){
    debugger;
    return;
    this.view.flxSelectVehicleContainer.setVisibility(false);
    this.view.forceLayout();
    //this.view.flxSelectVehicleContainer.setVisibility(true);
  },
  /**
   * @function
   *
   * @param vehicleList 
   */
  setVehicleDetail:function(vehicleList){
    debugger;
    try{
      if(Array.isArray(vehicleList) && vehicleList.length>0){
        this.vehicleList=vehicleList;
        this.view.flxCarContainer.setVisibility(true);
        this.populateVehicleDetail(vehicleList[0]);
        this.disableSelectVehicle();
        this.view.flxNewJourneyReady.setVisibility(true);
        this.view.flxBeginJourneySelectVehicle.setVisibility(false);
        this.view.flxAddNewVehicle.setVisibility(false);
        this.view.flxVehicleDetail.setVisibility(false);
      }else{
        this.view.flxCarContainer.setVisibility(false);
        this.vehicleList=null;
        this.enableSelectVehicle();
        //this.selectVehicle();
      }
      this.view.forceLayout();
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  selectVehicle:function(){
    debugger;
    this.progressStatus=this.STATUS.SELECT_VEHICLE;
    this.view.flxBeginJourneySelectVehicle.isVisible = true;
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  showVehicleList:function(){
    debugger;
    try{
      //this.view.flxBeginJourneySelectVehicle.setVisibility(true);
      this.getCompanyAndPersonalVehiclList();
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  getCompanyAndPersonalVehiclList:function(){
    try{
      var options={};
      options["whereConditionAsAString"] = VEHICLE_TBL.USER_EMP_ID_FK + " = '" + this.userObj[USER_TBL.USER_EMP_ID_PK] +
        "'";// + " OR " +VEHICLE_TBL.USER_EMP_ID_FK + " IS NULL";
      this.fetchRecords(DATA_MODEL.VEHICLE_TBL,options,"VEHICLE_LIST");
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param vehicleList 
   */
  setCompanyAndPersonalVehiclList:function(companyAndPersonalVehicleList){
    try{
      if(Array.isArray(companyAndPersonalVehicleList) && companyAndPersonalVehicleList.length>0){
        this.vehicleListMap=JourneyUtil.parseRecords(companyAndPersonalVehicleList, VEHICLE_TBL.VEHICLE_ID_PK);
        this.populateCompanyAndPersonalVehiclList(companyAndPersonalVehicleList);
        /*this.view.flxNewJourneyReady.setVisibility(false);
        this.view.flxBeginJourneySelectVehicle.setVisibility(true);
        this.view.flxAddNewVehicle.setVisibility(false);
        this.view.flxVehicleDetail.setVisibility(false);
        this.progressStatus=this.STATUS.SELECT_VEHICLE;*/
      }else{
        this.vehicleListMap=null;
      }
      this.view.flxNewJourneyReady.setVisibility(false);
      this.view.flxBeginJourneySelectVehicle.setVisibility(true);
      this.view.flxAddNewVehicle.setVisibility(false);
      this.view.flxVehicleDetail.setVisibility(false);
      this.progressStatus=this.STATUS.SELECT_VEHICLE;
      this.view.forceLayout();
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param vehicleList 
   */
  populateCompanyAndPersonalVehiclList:function(vehicleList){
    try{
      if(Array.isArray(vehicleList) && vehicleList.length>0){
        var companyVehicleList=[];
        var personalVehicleList=[];
        var segObj;
        var vehicleObj;
        var companyCarMasterData=[];
        var personalCarMasterData=[];
        var listBoxArray;
        for(var i=0;i<vehicleList.length;i++){
          vehicleObj=vehicleList[i];
          listBoxArray=[];
          if(typeof vehicleObj=='object' && vehicleObj!==null){
            segObj={};
            segObj["imgVehicleIcon"]="bluecar.png";
            segObj["lblCarName"]=vehicleObj[VEHICLE_TBL.VEHICLE_MAKE]+" "+vehicleObj[VEHICLE_TBL.VEHICLE_MODEL];
            segObj["lblCarModel"]=vehicleObj[VEHICLE_TBL.VEHICLE_REG_NUM];
            segObj["lblCarColor"]=vehicleObj[VEHICLE_TBL.VEHICLE_COLOR];
            segObj[VEHICLE_TBL.VEHICLE_ID_PK]=vehicleObj[VEHICLE_TBL.VEHICLE_ID_PK];
            listBoxArray.push(vehicleObj[VEHICLE_TBL.VEHICLE_ID_PK]);
            if(typeof vehicleObj[VEHICLE_TBL.USER_EMP_ID_FK]=='string' ||typeof vehicleObj[VEHICLE_TBL.USER_EMP_ID_FK]=='number'){
              personalVehicleList.push(segObj);
              listBoxArray.push("Personal "+vehicleObj[VEHICLE_TBL.VEHICLE_MAKE]+" "+vehicleObj[VEHICLE_TBL.VEHICLE_MODEL]);
              personalCarMasterData.push(listBoxArray);
            }else{
              listBoxArray.push("Company "+vehicleObj[VEHICLE_TBL.VEHICLE_MAKE]+" "+vehicleObj[VEHICLE_TBL.VEHICLE_MODEL]);
              companyVehicleList.push(segObj);
              companyCarMasterData.push(listBoxArray);
            }
          }else{

          }
        }
        this.view.segmentPersonalCar.removeAll();
        this.view.segmentCompanyCar.removeAll();
        this.view.segmentPersonalCar.addAll(personalVehicleList);
        this.view.segmentCompanyCar.addAll(companyVehicleList);
        this.view.listBoxVehicleCompany.masterData=companyCarMasterData;
        this.view.listBoxVehiclePersonal.masterData=personalCarMasterData;
      }else{

      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  getCheckinInterval:function(){
    debugger;
    try{

    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param records 
   */
  setCheckInInterval:function(records){
    debugger;
    try{
      if(Array.isArray(records) && records.length>0){
        var checkInIntervalInMinutes=records[0][CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL];
        kony.store.setItem(CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL, checkInIntervalInMinutes);
        this.createCheckPointRecord(checkInIntervalInMinutes);
      }
    }catch(excp){
      debugger;
    }

  },
  /**
   * @function
   *
   */
  getCheckinRecord:function(intervalInMillisecond){
    debugger;
    try{
      var record={};
      if(typeof intervalInMillisecond=='number'){
        if(typeof this.journeyObj=='object' && this.journeyObj!==null){
          record[CHECKPOINT_TBL.JOURNEY_ID_FK]=this.journeyObj[JOURNEY_TBL.ID_PK];
        }else{
          throw {
            "message":"Journey Id not available!"};
        }
        record[CHECKPOINT_TBL.CHECK_POINT_SEQ_NUM]=1;
        var d=new Date();
        var timeStampInMilliSecond=d.getTime()+intervalInMillisecond;
        var utcDateTimeString=JourneyUtil.getTimeInUTCString(timeStampInMilliSecond);
        record[CHECKPOINT_TBL.EXPECTED_CHECKIN_TIMESTAMP]=utcDateTimeString;
        record[CHECKPOINT_TBL.CHECKPOINT_STATUS_ID_FK]=1;
        if(typeof this.userObj=='object' && this.userObj!==null){
          record[CHECKPOINT_TBL.CREATEDBY]=this.userObj[USER_TBL.USER_EMP_ID_PK];
          record[CHECKPOINT_TBL.LASTUPDATEDBY]=this.userObj[USER_TBL.USER_EMP_ID_PK];
          record[CHECKPOINT_TBL.CHECKPOINT_REPORTED_BY_FK]=this.userObj[USER_TBL.USER_EMP_ID_PK];
        }
      }else{
        throw{
          "message":"Invalid time interval!"
        }
      }
      return record;
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param checkInIntervalInMinutes 
   */
  createCheckPointRecord:function(checkInIntervalInMinutes){
    debugger;
    try{
      if(typeof checkInIntervalInMinutes=='number'){
        var millisecond=checkInIntervalInMinutes*60*1000;
        var checkinObject=this.getCheckinRecord(millisecond);
        this._createRecord(DATA_MODEL.CHECKPOINT_TBL, checkinObject);
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param trackingPointId 
   */
  getTrackingPointInfo:function(trackingPointId){
    debugger;
    var options={};
    options["whereConditionAsAString"]=TRACKING_POINTS_TBL.TRACKING_POINT_ID+" = "+"'"+trackingPointId+"'";
    try{
      this.fetchRecords(DATA_MODEL.TRACKING_POINTS_TBL, options);
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param trackingPointId 
   */
  setTrackingPointInfo:function(trackingPointId){
    debugger;
    try{
      if(typeof trackingPointId=='string'|| typeof trackingPointId=='number'){
        this.getTrackingPointInfo(trackingPointId);
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param records 
   */
  populateTrackingPointInfo:function(records){
    debugger;
    try{
      if(Array.isArray(records) && records.length>0){
        this.view.lblTrackingPointName.text=records[0][TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS];
        this.view.lblTrackingPointPhone.text=records[0][TRACKING_POINTS_TBL.POINT_PHONE_1];
      }
    }catch(excp){
      debugger;
    }
  },
  populateGuidesAndMannuals:function(records){
    try{
      if(Array.isArray(records) && records.length>0){
        var segObj;
        var segArray=[];
        for(var i=0;i<records.length;i++){
          segObj={};
          segObj["imgPdfLogo"]="pdfmanual.png";
          segObj["lblPDFFilename"]=records[i][GUIDES_MANUALS_TBL.GUIDE_MANUAL_TITLE];
          segObj["lblPDFurl"]=records[i][GUIDES_MANUALS_TBL.GUIDE_MANUAL_URL];
          segObj["id"]=records[i][GUIDES_MANUALS_TBL.ID];
          segArray.push(segObj);
        }
        this.view.segGuideAndMannual.removeAll();
        this.view.segGuideAndMannual.addAll(segArray);
        this.view.flxGuidesAndManualsContainer.setVisibility(true);
      }else{
        this.resetGuideAndManuals();
      }
      this.view.forceLayout();
    }catch(excp){
      debugger
    }
  },
  processCheckListQuestion:function(result,info){
    try{
      if(Array.isArray(result) && typeof info=='object' && info!==null){
        var id;
        for(var i=0;i<result.length;i++){
          id=result[i][CHECKLIST_QUESTIONS_TBL.QUESTION_ID];
          if(typeof info[id]=='object' && info[id]!==null){
            result[i][DATA_MODEL.QUESTION_OPTIONS_TBL]=info[id];
          }
        }
        this.view.questionaire.setQuestions(result);
      }
    }catch(excp){
      debugger;
    }
  },
  processQuestionOptions:function(result){
    try{
      if(Array.isArray(result) && result.length>0){
        var questionOptionsMap=JourneyUtil.parseRecords(result, QUESTION_OPTIONS_TBL.QUESTION_ID);
        var whereClause=CHECKLIST_QUESTIONS_TBL.QUESTION_ID+" IN "+"(";
        for(var questionId in questionOptionsMap){
          whereClause=whereClause+questionId+",";
        }
        whereClause=whereClause.substring(0,whereClause.length-1);
        whereClause=whereClause+")";
        var options={};
        options["whereConditionAsAString"]=whereClause;
        this.fetchRecords(DATA_MODEL.CHECKLIST_QUESTIONS_TBL,options,questionOptionsMap);
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
  _recordFetchSuccess:function(dataModel,info,result){
    debugger;
    try{
      switch(dataModel){
        case DATA_MODEL.JOURNEY_TBL:
          if(Array.isArray(result) && result.length>0){
            this.journeyObj=result[0];
            this.setJourneyInfo(result[0]);
            this.getPassenger(result[0][JOURNEY_TBL.ID_PK]);
            this.getJourneyDriver(result[0][JOURNEY_TBL.USER_EMP_ID_FK]);
            this.getVehicleDetail(result[0][JOURNEY_TBL.SELECTED_VEHICLE_ID_FK]);
            this.setTrackingPointInfo(result[0][JOURNEY_TBL.TRACKING_POINT_ID_FK]);
          }else{
            this.journeyObj=null;
          }
          break;
        case DATA_MODEL.USER_TBL:
          this.userObj=result[0];
          this.setUserInfo(result[0]);
          break;
        case DATA_MODEL.PASSENGERS_TBL:
          this.passengerList=result;
          this.setPassengetList(result);
          break;
        case DATA_MODEL.VEHICLE_TBL:
          if(info=="VEHICLE_LIST"){
            this.setCompanyAndPersonalVehiclList(result);
          }else{
            this.setVehicleDetail(result);
          }
          break;
        case DATA_MODEL.CHECKIN_INTERVAL_TBL:
          this.setCheckInInterval(result);
          break;
        case DATA_MODEL.TRACKING_POINTS_TBL:
          this.populateTrackingPointInfo(result);
          break;
        case DATA_MODEL.GUIDES_MANUALS_TBL:
          this.populateGuidesAndMannuals(result);
          break;
        case DATA_MODEL.QUESTION_LOCALISATION_TBL:
          this.processQuestionLocalisationList(result);
          break;
        case DATA_MODEL.CHECKLIST_QUESTIONS_TBL:
          this.processCheckListQuestion(result,info);
          break;
        case DATA_MODEL.QUESTION_OPTIONS_TBL:
          this.processQuestionOptions(result);
          break;
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _recordFetchFailure:function(dataModel,result){
    debugger;
  },
  /**
   * @function
   *
   * @param dataModel 
   * @param options 
   */
  fetchRecords:function(dataModel,options,info){
    debugger;
    try{
      if(typeof options!=='object'){
        options=null;
      }
      var knyObject=new kony.sdk.KNYObj(dataModel);
      knyObject.get(options,this._recordFetchSuccess.bind(this,dataModel,info),this._recordFetchFailure.bind(this,dataModel));
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  processQuestionLocalisationList:function(records){
    try{
      if(Array.isArray(records) && records.length>0){
        var questionIdList=[];
        for(var i=0;i<records.length;i++){
          questionIdList.push(records[i][QUESTION_LOCALISATION_TBL.QUESTION_ID]);
        }
        this.setQuestionOptions(questionIdList);
        //this.setCheckListQuestion(questionIdList);
      }else{
        this.resetQuestionnaire();
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  setQuestionOptions:function(questionList){
    try{
      if(Array.isArray(questionList) && questionList.length>0){
        var options={};
        var whereClause=QUESTION_OPTIONS_TBL.QUESTION_ID+" IN "+"(";
        var i=0;
        for(;i<questionList.length-1;i++){
          whereClause=whereClause+questionList[i]+",";
        }
        whereClause=whereClause+questionList[i]+")";
        options["whereConditionAsAString"]=whereClause;
        this.fetchRecords(DATA_MODEL.QUESTION_OPTIONS_TBL, options);
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  setCheckListQuestion:function(questionList){
    try{
      if(Array.isArray(questionList) && questionList.length>0){
        var options={};
        var whereClause=CHECKLIST_QUESTIONS_TBL.QUESTION_ID+" IN "+"(";
        var i=0;
        for(;i<questionList.length-1;i++){
          whereClause=whereClause+questionList[i][QUESTION_LOCALISATION_TBL.QUESTION_ID]+",";
        }
        whereClause=whereClause+questionList[i][QUESTION_LOCALISATION_TBL.QUESTION_ID]+")";
        options["whereCOnditionaAsAString"]=whereClause;
        this.fetchRecords(DATA_MODEL.CHECKLIST_QUESTIONS_TBL, options);
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param userObj 
   */
  setUserInfo:function(userObj){
    try{
      if(typeof userObj=='object' && userObj!==null){
        this.view.lblDriverName.text=userObj[USER_TBL.USER_FIRSTNAME]+' '+userObj[USER_TBL.USER_LASTNAME];
        this.setGuideAndManuals(userObj);
        this.setQuestionnaire(userObj);
      }else{
        this.view.lblDriverName.text="NA";
      }
    }catch(excp){
      debugger;
    }
  },
  setQuestionnaire:function(userObj){
    try{
      if(typeof userObj=='object' && userObj!==null){
        var countryId=userObj[USER_TBL.COUNTRY_ID_FK];
        var regionId=userObj[USER_TBL.REGION_ID_FK];
        var languageId=userObj[USER_TBL.LANGUAGE_ID_FK];
        var options={};
        options["whereConditionAsAString"]=QUESTION_LOCALISATION_TBL.COUNTRY_ID+" = '"+countryId+"' AND "+
          QUESTION_LOCALISATION_TBL.REGION_ID+" ='"+regionId+"' AND "+
          QUESTION_LOCALISATION_TBL.LANGUAGE_ID+" ='"+languageId+"'";
        this.fetchRecords(DATA_MODEL.QUESTION_LOCALISATION_TBL, options);
      }else{
        this.resetQuestionnaire();
      }
    }catch(excp){
      debugger;
    }
  },
  setGuideAndManuals:function(userObj){
    try{
      if(typeof userObj=='object' && userObj!==null){
        var countryId=userObj[USER_TBL.COUNTRY_ID_FK];
        var regionId=userObj[USER_TBL.REGION_ID_FK];
        var languageId=userObj[USER_TBL.LANGUAGE_ID_FK];
        var options={};
        options["whereConditionAsAString"]=GUIDES_MANUALS_TBL.COUNTRY_ID_FK+" = '"+countryId+"' AND "+
          GUIDES_MANUALS_TBL.REGION_ID_FK+" ='"+regionId+"' AND "+
          GUIDES_MANUALS_TBL.LANGUAGE_ID_FK+" ='"+languageId+"'";
        this.fetchRecords(DATA_MODEL.GUIDES_MANUALS_TBL, options);
      }else{
        this.resetGuideAndManuals();
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  resetForm:function(){
    try{
      this.view.flxBeginJourneySelectVehicle.setVisibility(false);
      this.view.flxVehicleDetail.setVisibility(false);
      this.view.flxAddNewVehicle.setVisibility(false);
      this.view.flxNewJourneyReady.setVisibility(true);
      this.view.TravellerSatellite.setText("",true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
      this.view.TravellerRadio.setText("");
      this.resetGuideAndManuals();
      this.resetQuestionnaire();
      this.resetVehicleList();
      this.view.forceLayout();
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  resetGuideAndManuals:function(){
    this.view.segGuideAndMannual.removeAll();
    this.view.flxGuidesAndManualsContainer.setVisibility(false);
    this.view.forceLayout();
  },
  resetQuestionnaire:function(){
    try{
      this.view.questionaire.setQuestions([]);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  resetVehicleList:function(){
    try{
      this.view.segmentPersonalCar.removeAll();
      this.view.segmentCompanyCar.removeAll();
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  onBackClick:function(){
    try{
      if(this.progressStatus==this.STATUS.HOME){
        var navObj=new kony.mvc.Navigation("frmMyJourneys");
        try{
          navObj.navigate();
        }catch(excp){
          debugger;
        }
      }else if(this.progressStatus==this.STATUS.SELECT_VEHICLE){
        this.view.flxNewJourneyReady.setVisibility(true);
        this.view.flxBeginJourneySelectVehicle.setVisibility(false);
        this.view.flxAddNewVehicle.setVisibility(false);
        this.view.flxVehicleDetail.setVisibility(false);
        this.progressStatus=this.STATUS.HOME;

      }else if(this.progressStatus==this.STATUS.VEHICLE_DETAIL){
        this.view.flxNewJourneyReady.setVisibility(false);
        this.view.flxBeginJourneySelectVehicle.setVisibility(true);
        this.view.flxVehicleDetail.setVisibility(false);
        this.view.flxAddNewVehicle.setVisibility(false);
        this.progressStatus=this.STATUS.SELECT_VEHICLE;
      }else if(this.progressStatus==this.STATUS.ADD_VEHICLE){
        this.view.flxNewJourneyReady.setVisibility(false);
        this.view.flxBeginJourneySelectVehicle.setVisibility(true);
        this.view.flxAddNewVehicle.setVisibility(false);
        this.view.flxVehicleDetail.setVisibility(false);
        this.progressStatus=this.STATUS.SELECT_VEHICLE;
      }
      this.view.forceLayout();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param vehicleObj 
   */
  populateVehileInfo:function(vehicleObj){
    if(typeof vehicleObj=='object' && vehicleObj!==null){
      this.view.vehicleMaker.setText(vehicleObj[VEHICLE_TBL.VEHICLE_MAKE],false);
      this.view.vehicleModel.setText(vehicleObj[VEHICLE_TBL.VEHICLE_MODEL],false);
      this.view.vehicleColor.setText(vehicleObj[VEHICLE_TBL.VEHICLE_COLOR],false);
      this.view.vehicleRegistrationNumber.setText(vehicleObj[VEHICLE_TBL.VEHICLE_REG_NUM],false);
    }
  },
  /**
   * @function
   *
   */
  showAddNewVehicleFlex:function(){
    this.progressStatus=this.STATUS.ADD_VEHICLE;
    this.view.flxNewJourneyReady.setVisibility(false);
    this.view.flxBeginJourneySelectVehicle.setVisibility(false);
    this.view.flxAddNewVehicle.setVisibility(true);
    this.view.flxVehicleDetail.setVisibility(false);
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
  getVehicleRecord:function(){
    var vehicleObj={};
    var vehicleMake;
    var vehicleModel;
    var vehicleColor;
    var vehicleRegistrationNumber;
    try{
      vehicleMake=this.view.VehicleSelectMake.getText();
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
      vehicleModel=this.view.VehicleSelectModel.getText();
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
      vehicleColor=this.view.VehicleSelectColor.getText();
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
      vehicleRegistrationNumber=this.view.VehicleSelectRegistration.getText();
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
   */
  createNewVehicle:function(){
    debugger;
    try{
      if(JourneyUtil.isNetworkAvailable()===true){
        var vehicleObj=this.getVehicleRecord();
        if(typeof vehicleObj=='object' && vehicleObj!==null){
          this._createRecord(DATA_MODEL.VEHICLE_TBL,vehicleObj);
        }
      }else{
        alert("Please check your network connection!");
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  setVehicleForJourney:function(vehicleId){
    debugger;
    if(typeof vehicleId=='string' || typeof vehicleId=='number' ){
      this.selectedVehicleId=vehicleId;
      if(typeof this.journeyObj=='object' && this.journeyObj!==null){
        this.journeyObj[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK]=vehicleId;
      }
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
        var dataObj = new kony.sdk.KNYObj(dataModel);
        //xyz this.view.loadingScreen.show("Loading..",1);
        dataObj.create(record, {}, this._createRecordSuccess.bind(this, dataModel), this._createRecordFailure.bind(this, dataModel));
      } catch (excp) {
        debugger;
        kony.print("#### Exception occured while creating record: ####" + excp.message);
        throw excp;
      }
    }
  },
  createAnswerRecord:function(answerList){
    try{
      if(Array.isArray(answerList)){
        for(var i=0;i<answerList.length;i++){
          this._createRecord(DATA_MODEL.USER_ANSWERS_TBL, answerList[i]);
        }
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  isValidUserInput:function(){
    var status=true;
    var satellite=this.view.TravellerSatellite.getText();
    if(typeof satellite=='string' && satellite.length>0){

    }else{
      alert("Please provide valid Satellite number!");
      status=false;
      return status;
    }
    var radio =this.view.TravellerRadio.getText();
    if(typeof radio=='string' && radio.length>0){

    }else{
      alert("Please provide valid Radio number!");
      status=false;
    }
    return status;
  },
  /**
   * @function
   *
   */
  isVehicleSelected:function(){
    var status=true;
    if(typeof this.journeyObj=='object' && this.journeyObj!==null){
      var vehicleId=this.journeyObj[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK];
      if(typeof vehicleId=='string' || typeof vehicleId == 'number' ){
        status=true;
      }else
        status = false;
    }else{
      status = false;
    }
    return status;
  },
  /**
   * @function
   *
   */
  isConfirmed:function(){
    debugger;
    //  return true;
    var status=true;
    if(this.isVehicleSelected()==false){
      alert("Please add a Vehicle for the Journey!");
      return false;
    }
    if(this.isValidUserInput()==false){
      status=false;
      return status;
    }
    //return true;
    var answerList=this.view.questionaire.getAnswers();
    var answer;
    var userAnswerList=[];
    var userAnswerObj;

    if(Array.isArray(answerList)){
      try{
        for(var i=0;i<answerList.length;i++){
          answer=answerList[i];
          userAnswerObj={};
          if(typeof answer=='object' && answer!=null){
            if(answer["hdnQuestionType"]==2 && answer["hdnIsMandatoryToAnswer"]==1){
              // for radio type question && mandatory question.
              if(answer["selectedAnswerId"]==answer["hdnOptionYesValue"]){
                // Answered question.
                userAnswerObj[USER_ANSWERS_TBL.QUESTION_OPTIONS_ROW_ID]=answer["selectedAnswerId"];
              }else{
                // UnAnswered question.
                alert("Please answer for:\n"+answer["lblYesNoQuestion"]);
                status=false;
                break;
              }
            }else if(answer["hdnQuestionType"]==3){
              // For question type plain text
              var userMessage=answer["textAreaAnswer"]["text"];
              if(typeof userMessage=='string'){
                userMessage=userMessage.trim();
                userAnswerObj[USER_ANSWERS_TBL.USER_ANSWER_PLAIN_TEXT]=userMessage;
              }
            }
            if(typeof this.journeyId=='string'){
              var journeyId=Number(this.journeyId);
              if(isNaN(journeyId)==false){
                userAnswerObj[USER_ANSWERS_TBL.JOURNEY_ID]=journeyId;
              }
            }else if(typeof this.journeyId=='number'){
              userAnswerObj[USER_ANSWERS_TBL.JOURNEY_ID]=this.journeyId;
            }          
            userAnswerObj[USER_ANSWERS_TBL.QUESTION_ID]=answer["hdnQuestionId"];
            if(typeof this.userObj=='object' && this.userObj!==null){
              userAnswerObj[USER_ANSWERS_TBL.CREATED_BY]=this.userObj[USER_TBL.USER_EMP_ID_PK];
            }
            userAnswerList.push(userAnswerObj);
          }
        }
        if(status===true){
          this.createAnswerRecord(userAnswerList);
        }
      }catch(excp){
        debugger;
        status=false;
      }
    }else{
      status=true;
    }
    return status;
    /*try{
      var rows=this.view.segConfirmation.data.length;
      var selectedRows=this.view.segConfirmation.selectedRowItems;
    }catch(excp){
      debugger;
      status=false;
    }
    return status;*/
  },
  updateVehicleInfo:function(){},
  /**
   * @function
   *
   */
  updateRecord:function(record){
    //this.updateVehicleInfo();
    debugger;
    if(typeof record=='object' && record!==null){
      try{
        var upDatedRecord={};
        upDatedRecord[JOURNEY_TBL.ACTUAL_DEPARTURE_ADDRESS]=record[JOURNEY_TBL.ACTUAL_DEPARTURE_ADDRESS];
        upDatedRecord[JOURNEY_TBL.ACTUAL_DEPARTURE_DATETIME]=JourneyUtil.getCurrentDateTimeInUTC();
        upDatedRecord[JOURNEY_TBL.ACTUAL_DEPARTURE_LAT]=record[JOURNEY_TBL.ACTUAL_DEPARTURE_LAT];
        upDatedRecord[JOURNEY_TBL.ACTUAL_DEPARTURE_LON]=record[JOURNEY_TBL.ACTUAL_DEPARTURE_LON];
        upDatedRecord[JOURNEY_TBL.STATUS_CODE_FK]=2;
        upDatedRecord[JOURNEY_TBL.LAST_UPDATED_TIMESTAMP]=null;//JourneyUtil.getCurrentDateTimeInUTC();

        upDatedRecord[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK]=record[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK];
        upDatedRecord[JOURNEY_TBL.JOURNEY_SATELLITE]=this.view.TravellerSatellite.getText();
        upDatedRecord[JOURNEY_TBL.JOURNEY_RADIO]=this.view.TravellerRadio.getText();

        var options={};
        var id=JOURNEY_TBL.ID_PK;
        options["primaryKeys"]={};
        options["primaryKeys"][id]=record[JOURNEY_TBL.ID_PK];
        record[JOURNEY_TBL.ACTUAL_DEPARTURE_DATETIME]=JourneyUtil.getCurrentDateTimeInUTC();
        record[JOURNEY_TBL.STATUS_CODE_FK]=2;
        //defect fix
        var expectedDepartureDateObj=JourneyUtil.getSqlDatetoJSDate(record[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]);
        var actualDepartureDateObj=JourneyUtil.getSqlDatetoJSDate(record[JOURNEY_TBL.ACTUAL_DEPARTURE_DATETIME]);
        var timeDiffInMinutes=(actualDepartureDateObj.getTime()-expectedDepartureDateObj.getTime())/(1000*60);
        if(timeDiffInMinutes>0)
        {
          kony.print("Journey has started with delay of "+timeDiffInMinutes+" in  Minuts");
          timeDiffInMinutes=Math.round(timeDiffInMinutes);
          minutes=JourneyUtil.addZeroPrefix(timeDiffInMinutes);
          kony.print("before updation ExpectedArrivalTimeStamp is"+record[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
          var expectedArrivalDateObj=JourneyUtil.getSqlDatetoJSDate(record[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
          expectedArrivalDateObj.setMinutes(expectedArrivalDateObj.getMinutes()+timeDiffInMinutes);
          record[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=JourneyUtil.getTimeInUTCString(expectedArrivalDateObj.getTime());
          upDatedRecord[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=record[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME];
          kony.print("updated ExpectedArrivalTimeStamp is"+record[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);

        }
        else
        {
          kony.print("Journey Has started on Expected Time");
        }
        //this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=upDatedRecord[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME];
        var sdkObj=new kony.sdk.KNYObj(DATA_MODEL.JOURNEY_TBL);
        sdkObj.updateByPK(upDatedRecord,options, this.updateRecordSuccess.bind(this), this.updateRecordFailure.bind(this));
      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   * @param checkinIntervalId 
   */
  getCheckInIntervalDetail:function(checkinIntervalId){
    try{
      if(typeof checkinIntervalId=='number' || typeof checkinIntervalId=='string'){
        var options={};
        options["whereConditionAsAString"]=CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL_ID +" = "+"'"+checkinIntervalId+"'";
        this.fetchRecords(DATA_MODEL.CHECKIN_INTERVAL_TBL, options);
      }else{

      }

    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  createChekinPoint:function(){
    debugger;
    var record={};

  },
  /**
   * @function
   *
   * @param result 
   */
  updateRecordSuccess:function(result){
    debugger;
    try{
      this.startSync();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  updateRecordFailure:function(result){
    debugger;
  },
  /**
   * @function
   *
   */
  onClickButtonStartJourney:function(){
    debugger;
    try{
      if(JourneyUtil.isNetworkAvailable()===true){
        if(this.isConfirmed()===true){
          if(typeof this.journeyObj=='object' && this.journeyObj!==null){
            var checkinIntervalId=this.journeyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK];
            this.journeyObj[JOURNEY_TBL.JOURNEY_SATELLITE]=this.view.TravellerSatellite.getText();
            this.journeyObj[JOURNEY_TBL.JOURNEY_RADIO]=this.view.TravellerRadio.getText();
            this.getCheckInIntervalDetail(checkinIntervalId);
          }
          this.getCurrentLocation(this.journeyObj);
          //this.updateRecord();
          //navObj.navigate(this.journeyObj);
        }else{
        }
      }else{
        alert("Please check your network connection!");
      }
    }catch(excp){
      debugger;
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
          this.objectSync();
          //this.showVehicleList();
          break;
        case DATA_MODEL.CHECKPOINT_TBL:
          break;
        case DATA_MODEL.USER_ANSWERS_TBL:
          break;
        default:
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
  /**
   * @function
   *
   * @param vehicleId 
   */
  setVehicleInfoInJourneyReadyFlex:function(vehicleId){
    if(typeof vehicleId=='string'|| typeof vehicleId=='number'){
      try{

      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   */
  getCurrentLocation:function(journeyObj){
    var positionoptions={};
    positionoptions.enableHighAccuracy=true;
    positionoptions.timeout=10000;
    positionoptions.maximumAge=1000;
    try{
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      kony.location.getCurrentPosition(this._geoSuccessCallback.bind(this,journeyObj),this._geoFailureCallback.bind(this,journeyObj),positionoptions);
    }catch(exception){
      kony.application.dismissLoadingScreen();
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _geoSuccessCallback:function(journeyObj,result){
    try{
      debugger;
      kony.application.dismissLoadingScreen();
      if(typeof result==='object' && result!==null){
        if(typeof result["coords"]=='object' && result["coords"]!==null){
          this.deviceLat =result.coords.latitude;
          this.deviceLon=result.coords.longitude;
          journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_LAT]=""+this.deviceLat;
          journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_LON]=""+this.deviceLon;
          this.getAddressForLatLang(this.deviceLat,this.deviceLon,journeyObj);
        }
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _geoFailureCallback:function(journeyObj,result){
    kony.application.dismissLoadingScreen();
    debugger;
    this.updateRecord(journeyObj);
    //kony.application.dismissLoadingScreen();
    //alert(JSON.stringify(result));
  },
  /**
   * @function
   *
   * @param lattitude 
   * @param longitude 
   */
  getAddressForLatLang:function(lattitude,longitude,journeyObj){
    if((typeof lattitude=='string' || typeof lattitude=='number') &&
       (typeof longitude=='string' || typeof longitude=='number')){
      try{
        var inputParam={};
        inputParam["latitude"]=lattitude;
        inputParam["longitude"]=longitude;
        inputParam["key"]=JConstant.GOOGLE_API_KEY;
        var client = kony.sdk.getCurrentInstance();
        var intgService = client.getIntegrationService(JConstant.REVERSE_GEO_INTG_SERVICE.NAME);
        kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        intgService.invokeOperation(JConstant.REVERSE_GEO_INTG_SERVICE.OPERATION,{},
                                    inputParam,this._reverseGeoSuccess.bind(this,lattitude,longitude,journeyObj),
                                    this._reverseGeoFailure.bind(this,lattitude,longitude,journeyObj));
      }catch(excp){
        debugger;
        kony.application.dismissLoadingScreen();
        //throw excp;
      }
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _reverseGeoSuccess:function(lattitude,longitude,journeyObj,result){
    debugger;
    kony.application.dismissLoadingScreen();
    if(typeof result=='object' && result!==null){
      if(Array.isArray(result["results"]) && result["results"].length>0){
        journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_ADDRESS]=result["results"][0]["formatted_address"];
      }else{
        journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_ADDRESS]=""+lattitude+", "+longitude;/*""+journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_LAT]+","+
          journeyObj[JOURNEY_TBL.ACTUAL_ARRIVALPOINT_LON];*/
      }
      this.updateRecord(journeyObj);
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _reverseGeoFailure:function(lattitude,longitude,journeyObj,result){
    debugger;
    kony.application.dismissLoadingScreen();
    journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_ADDRESS]=""+lattitude+", "+longitude;/*""+journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_LAT]+","+
      journeyObj[JOURNEY_TBL.ACTUAL_ARRIVALPOINT_LON];*/
    this.updateRecord(journeyObj);
  },
  startSync:function(){
    debugger;
    var syncOptions={};//"downloadBatchSize":"100",
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    //kony.store.setItem("SYNC_FILTER", syncOptions["filter"]);
    try{
      syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
      var syncObjService= new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      syncObjService.startSync(syncOptions,this.syncSuccessCB.bind(this),this.syncFailureCB.bind(this),this.progressCallBack);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  progressCallBack:function(){

  },
  /**
   * @function
   *
   * @param result 
   */
  progressCB:function(result){
    debugger;
    kony.print("##########"+result);
  },
  /**
   * @function
   *
   * @param response 
   */
  syncSuccessCB:function(response){
    debugger;
    //alert("Sync success");
    try{
      kony.timer.schedule("Timer1", this.timerFunction.bind(this), 1, false);
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  timerFunction:function(){
    try{
      kony.application.dismissLoadingScreen();
      this.navigateToLiveJourney();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  navigateToLiveJourney:function(){
    try{
      var param={};
      /*if(typeof this.journeyObj=='object' && this.journeyObj!==null){
        // param[JOURNEY_TBL.ID_PK]=this.journeyObj[JOURNEY_TBL.ID_PK];
      }*/
      param[DATA_MODEL.JOURNEY_TBL]=this.journeyObj;
      var navObj=new kony.mvc.Navigation("BeginJourney/frmLiveJourney");
      navObj.navigate(param);
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param response 
   */
  syncFailureCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
  },
  onGuideAndMannualSegClick:function(){
    try{
      var selectedRowItem=this.view.segGuideAndMannual.selectedRowItems;
      if(Array.isArray(selectedRowItem) && selectedRowItem.length>0){
        selectedRowItem=selectedRowItem[0];
        var guideAndManualUrl=selectedRowItem["lblPDFurl"];
        if(typeof guideAndManualUrl=='string' && guideAndManualUrl.length>0){
          kony.application.openURL(guideAndManualUrl);
        }
      }
    }catch(excp){
      debugger;
    }
  },
  objectSync:function(){
    debugger;
    var syncOptions={};//"downloadBatchSize":"100",
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    //syncOptions.GetSyncStats=true;
    try{
      if(JourneyUtil.isNetworkAvailable()===true){
        //var syncObjService= new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
        var filter=kony.store.getItem("SYNC_FILTER");
        if(typeof filter =='object' && filter!==null)
          syncOptions.filter=filter[DATA_MODEL.VEHICLE_TBL];
        var syncObjService = new kony.sdk.KNYObj(DATA_MODEL.VEHICLE_TBL);
        kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        syncObjService.startSync(syncOptions,this.objectSyncSuccessCB.bind(this),this.objectSyncFailureCB.bind(this),this.objectProgressCallBack);
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
  objectProgressCallBack:function(result){
    debugger;
  },
  /**
   * @function
   *
   * @param response 
   */
  objectSyncSuccessCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
    this.showVehicleList();
  },
  /**
   * @function
   *
   * @param response 
   */
  objectSyncFailureCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
    alert("Server taking too long to respond..\n Please try later");
  }
});