define({ 
  data:null,
  navigationData:null,
  isFreshForm:true,
  locationObj:null,
  journeyObj:null,
  currentCheckInRecord:null,
  checkInIntervalInMinutes:null,
  successCallback:null,
  failureCallback:null,
  lastKnownLocation:null,
  _Journey_status:0,
  updateJourney:null,
  STATUS:{
    "IN_PROGRESS":0,
    "COMPLETED":1
  },
  user:null,
  userObj:null,
  isLaunchedFromNotification:false,
  _watchId:null,
  //Type your controller code here
  /**
   * @function
   *
   * @param param 
   */
  onNavigate:function(param){
    debugger;
    //kony.print("### Entering in the on navigate of the frmLiveJourney with param: "+JSON.stringify(param));
    //alert("isLaunchedFromNotification: "+this.isLaunchedFromNotification);
    //kony.print("isLaunchedFromNotification: "+this.isLaunchedFromNotification);
    //alert("####Entering in function onNavigate of formLiveJourneyCOntroller with param: "+JSON.stringify(param));
    if(typeof param=='object' && param!==null){
      this.navigationData=param;
      this.isFreshForm=true;
      this.view.flxPopUps.setVisibility(false);
      this.view.forceLayout();
    }else{
      this.isFreshForm=false;
    }
    kony.print("#### Exiting from onNavigate of the frmLiveJOurney :");
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    debugger;
    //return;
    //alert("$$$$Entering in function onFormPostShow :");
    //alert("isLaunchedFromNotification: "+this.isLaunchedFromNotification);
    kony.print("### Entering in the onFormPostShow of the frmLiveJourney: ");
    kony.print("isLaunchedFromNotification: "+this.isLaunchedFromNotification);
    try{
      //this.startLocationMonitoring();
      if(this.isFreshForm===true){
        //this.isFreshForm=false;
        this.resetForm();
        this.view.journeyTracker.onPostShow();
        this.setLocalNotCallBacks();
        debugger;
        //alert("notification callback set");
        this.updateJourney={};
        this._Journey_status=this.STATUS.IN_PROGRESS;
        if(typeof this.navigationData=='object' && this.navigationData!==null ){
          this.checkInIntervalInMinutes=kony.store.getItem(CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL);
          var lastCheckInRecord=this.navigationData[DATA_MODEL.CHECKPOINT_TBL];
          //alert("Last checkin record retrive");
          //alert("####lastCheckInRecord :"+JSON.stringify(lastCheckInRecord));
          if(typeof lastCheckInRecord=='object' && lastCheckInRecord!==null){
            debugger;
            //launched from the notification.
            //alert("processing launch from notification");
            this.setDeparturePin(lastCheckInRecord);
            this.processLaunchFromNotification(lastCheckInRecord);
            this.startLocationMonitoring();
            return;
          }
          //alert("Normal launch ");
          debugger;
          var journeyObj=this.navigationData[DATA_MODEL.JOURNEY_TBL];
          var journeyId=null;
          if(typeof journeyObj=='object' && journeyObj!==null){
            journeyId=journeyObj[JOURNEY_TBL.ID_PK];
            this.lastKnownLocation={};
            this.lastKnownLocation["lattitude"]=""+journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_LAT];
            this.lastKnownLocation["longitude"]=""+journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_LON];
            this.lastKnownLocation["address"]=""+journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_ADDRESS];
            this.lastKnownLocation["image"]="departure_point_pin.png";
            this.lastKnownLocation["name"]="";
            //alert("populating journey info");
            this.populateJourneyInfo(journeyObj);
            debugger;
          }
        }
      }
      this.startLocationMonitoring();
      this.addDataToSegment();
    }catch(excp){
      debugger;
    }
    kony.print("### Exiting the onFormPostShow of the frmLiveJourney: ");
  },
  setDeparturePin:function(checkInRecord){
    try{
      if(typeof checkInRecord=='object' && checkInRecord!==null){

      }
    }catch(excp){
      debugger;
    }
  },
  processLaunchFromNotification:function(checkPointRecord){
    //alert("In processLaunchFromNotification: "+JSON.stringify(checkPointRecord));
    if(typeof checkPointRecord=='object' && checkPointRecord!==null){
      try{
        var journeyId=checkPointRecord[CHECKPOINT_TBL.JOURNEY_ID_FK];
        this.setJourneyInfo(journeyId);
      }catch(excp){
        debugger;
        throw excp;
      }
    }
  },
  setJourneyInfo:function(journeyId){
    //alert("In set journey");
    if(typeof journeyId=='number'){
      var options={};
      options["whereConditionAsAString"]=JOURNEY_TBL.ID_PK+" ='"+journeyId+"'";
      this.fetchRecords(DATA_MODEL.JOURNEY_TBL, options);
    }
  },
  onSOSTriggerEvent:function(){
    debugger;
    try{
      if(typeof this.journeyObj=='object' && this.journeyObj!==null){
        var journeyId=this.journeyObj[JOURNEY_TBL.ID_PK];
        var param={};
        param[JOURNEY_TBL.ID_PK]=journeyId;
        //this.view.journeyTracker.resetComponent();
        var navObj=new kony.mvc.Navigation("EmergencyGroup/frmEmergencyRequest");
        navObj.navigate(param);
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  onSubmitJourney:function(operation){
    debugger;
    //if(JourneyUtil.isNetworkAvailable()===true){
    this._Journey_status=this.STATUS.COMPLETED;
    var lastCheckInRecords=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
    this.getCurrentLocation(lastCheckInRecords,operation);
    /*}else{
      alert("Please check your network connection!");
    }*/

  },
  /**
   * @function
   *
   */
  finishIfJourneyTerminated:function(){
    try{
      this.startSync("IS_TERMINATED");
    }catch(excp){
      debugger;
      kony.print("Exception occured: "+JSON.stringify(excp));
    }
  },
  noNetworkCheckIn:function(){
    debugger;
    try{
      var currentCheckInRecord=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
      if(typeof currentCheckInRecord=='object' && currentCheckInRecord!==null){
        this.getCurrentLocation(currentCheckInRecord);
        //this.createCheckInRecord(currentCheckInRecord);
        // create checkin record.
        // create notification

      }
    }catch(excp){
      debugger;
    }

  },
  setCheckPoints:function(journeyId){
    try{
      this.getCheckPoints(journeyId);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  getCheckInRecord:function(currentCheckInRecord){
    debugger;
    var record=null;
    if(typeof currentCheckInRecord=='object' && currentCheckInRecord!==null){
      try{
        record={};
        record[CHECKPOINT_TBL.CHECK_POINT_SEQ_NUM]=1+currentCheckInRecord[CHECKPOINT_TBL.CHECK_POINT_SEQ_NUM];
        record[CHECKPOINT_TBL.CHECKPOINT_REPORTED_BY_FK]=currentCheckInRecord[CHECKPOINT_TBL.CHECKPOINT_REPORTED_BY_FK];
        record[CHECKPOINT_TBL.CHECKPOINT_STATUS_ID_FK]=1;
        record[CHECKPOINT_TBL.CREATEDBY]=currentCheckInRecord[CHECKPOINT_TBL.CREATEDBY];
        record[CHECKPOINT_TBL.JOURNEY_ID_FK]=currentCheckInRecord[CHECKPOINT_TBL.JOURNEY_ID_FK];
        record[CHECKPOINT_TBL.LASTUPDATEDBY]=currentCheckInRecord[CHECKPOINT_TBL.LASTUPDATEDBY];
        var d=new Date();
        var timeStampInMilliSecond=d.getTime()+this.checkInIntervalInMinutes*60*1000;
        var utcDateTimeString=JourneyUtil.getTimeInUTCString(timeStampInMilliSecond);
        record[CHECKPOINT_TBL.EXPECTED_CHECKIN_TIMESTAMP]=utcDateTimeString;

      }catch(excp){
        debugger;
      }
    }
    return record;
  },
  createCheckInRecord:function(currentCheckInRecord){
    try{
      var checkInRecord=this.getCheckInRecord(currentCheckInRecord);
      this.createNotificationForNextCheckIn(checkInRecord);
      this._createRecord(DATA_MODEL.CHECKPOINT_TBL, checkInRecord);
    }catch(excp){
      debugger;
    }
  },
  onNormalCheckIn:function(sequenceNumber,successCallback,failureCallback){
    debugger;
    try{
      if(JourneyUtil.isNetworkAvailable()===true){
        this.successCallback=successCallback;
        this.failureCallback=failureCallback;
        var currentCheckInRecord=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
        if(typeof currentCheckInRecord=='object' && currentCheckInRecord!==null){
          this.getCurrentLocation(currentCheckInRecord);
          //this.createCheckInRecord(currentCheckInRecord);
          // create checkin record.
          // create notification

        }
      }else{
        debugger;
        this.successCallback=successCallback;
        this.failureCallback=failureCallback;
        this.noNetworkCheckIn();
      }
    }
    catch(excp){
      debugger;
      failureCallback({"message":"Exception occured!"});
    }
  },
  getCheckPoints:function(journeyId){
    debugger;
    try{
      var orderByMapJSONObj={};
      orderByMapJSONObj[CHECKPOINT_TBL.CHECK_POINT_SEQ_NUM]="ASC";

      var orderByMap=[];
      orderByMap.push(orderByMapJSONObj);

      var options={};
      options["orderByMap"]=orderByMap;
      options["whereConditionAsAString"]=CHECKPOINT_TBL.JOURNEY_ID_FK+" = "+"'"+journeyId+"'";
      this.fetchRecords(DATA_MODEL.CHECKPOINT_TBL,options);

    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  getDestinationLocation:function(journeyObj){
    debugger;
    var destination={};
    try{
      destination["lattitude"]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT];
      destination["longitude"]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON];
      destination["address"]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS];
      destination["image"]="arrival_point_pin.png";
      destination["name"]="Expected arrival point";
    }catch(excp){
      debugger;
      destination=null;
      throw excp;
    }
    return destination;
  },
  /**
   * @function
   *
   */
  getSourceLocation:function(journeyObj){
    debugger;
    var source={};
    try{
      source["lattitude"]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT];
      source["longitude"]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON];
      source["address"]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS];
      source["image"]="departure_point_pin.png";
      source["name"]="Expected departure point";
    }catch(excp){
      debugger;
      source=null;
      throw excp;
    }
    return source;
  },
  processCheckPointList:function(records){
    debugger;
    try{
      var source,destination;
      if(Array.isArray(records) && records.length>0){
        if(typeof this.journeyObj=='object' && this.journeyObj!==null){
          source={};
          source["lattitude"]=this.journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_LAT];
          source["longitude"]=this.journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_LON];
          source["address"]=this.journeyObj[JOURNEY_TBL.ACTUAL_DEPARTURE_ADDRESS];
          source["name"]="";
          source["image"]="departure_point_pin.png";
          var i=0;
          var checkPoint;
          for(;i<records.length-1;i++){
            checkPoint=records[i];
            destination={};
            if(typeof checkPoint=='object' && checkPoint!==null){
              destination["lattitude"]=checkPoint[CHECKPOINT_TBL.CHECKIN_LOCATION_LAT];
              destination["longitude"]=checkPoint[CHECKPOINT_TBL.CHECKIN_LOCATION_LON];
              destination["address"]=checkPoint[CHECKPOINT_TBL.CHECKIN_LOCATION_ADDRESS];
              destination["image"]="enteredcheckpoint_pin.png";
              destination["name"]="";
              if(destination["lattitude"]!==null && destination["longitude"]!==null){
                this.view.journeyTracker.drawRoutePolyline(source,destination,checkPoint[CHECKPOINT_TBL.CHECK_POINT_SEQ_NUM],"0000FFFF");
                source=destination;
              }else{
                continue;
              }
            }
          }
          this.setNotificationForNextCheckIn(records[i]);

        }else{
          throw {"message":"Journey object is unavailable!"};
        }
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  setNotificationForNextCheckIn:function(record){
    debugger;
    try{
      if(typeof record=='object' && record!==null){
        var notificationList=[];
        var expectedCheckinTime=record[CHECKPOINT_TBL.EXPECTED_CHECKIN_TIMESTAMP];
        var expectedCheckInTimeDateObj=JourneyUtil.getSqlDatetoJSDate(expectedCheckinTime);
        var currentDateTimeObj=new Date();
        var checkPointSequenceNumber=record[CHECKPOINT_TBL.CHECK_POINT_SEQ_NUM];
        notificationList.push(""+expectedCheckinTime+"_"+checkPointSequenceNumber);
        if(expectedCheckInTimeDateObj.getTime()<currentDateTimeObj.getTime()){
          // updating the checkin point time to 10 sec.
          currentDateTimeObj.setSeconds(currentDateTimeObj.getSeconds() + 3);
          expectedCheckinTime=JourneyUtil.getTimeInUTCString(currentDateTimeObj.getTime());
        }
        notificationList.push(""+expectedCheckinTime+"_"+checkPointSequenceNumber);
        this.clearNotifications(notificationList);
        kony.store.setItem(DATA_MODEL.CHECKPOINT_TBL, record);
        this.createNotification(""+expectedCheckinTime,checkPointSequenceNumber);
      }else{
        //throw {"message":"Next checkin record not available"}
      }

    }catch(excp){
      debugger;
      //throw excp;
    }
  },
  clearNotifications:function(notificationList){
    try{
      debugger;
      if(Array.isArray(notificationList)){
        kony.localnotifications.cancel(notificationList);
      }
    }catch(excp){
      debugger;
    }
  },
  populateTrackingPointInfo:function(records){
    try{
      if(Array.isArray(records) && records.length>0){
        this.view.journeyTracker.setTrackingPointPhone(records[0][TRACKING_POINTS_TBL.POINT_PHONE_1]);
        this.view.journeyTracker.setTrackingPointAddress(records[0][TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS]);
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
  populateUserInfo:function(result){
    if(Array.isArray(result) && result.length>0){
      try{ 
        this.user={};
        //this.user["email"]=result[0][USER_TBL.USER_EMAIL_ID];
        //this.user["user_id"]=result[0][USER_TBL.USER_EMP_ID_PK];
        this.user["first_name"]=result[0][USER_TBL.USER_FIRSTNAME];
        this.user["last_name"]=result[0][USER_TBL.USER_LASTNAME];
        this.user["user_id"]=result[0][USER_TBL.USER_EMAIL_ID];
        this.user["email"]=result[0][USER_TBL.USER_EMP_ID_PK];
        this.userObj=result[0];
        this.view.slidingmenu.setUserInfo(result[0]);
        this.setGuideAndManuals(result[0]);
      }catch(excp){
        debugger;
        throw excp;
      }

    }
  },
  /**
   * @function
   *
   * @param userObj 
   */
  setGuideAndManuals:function(userObj){
    debugger;
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
  resetGuideAndManuals:function(){
    this.view.segGuideAndMannual.removeAll();
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
        this.view.forceLayout();
      }else{
        this.resetGuideAndManuals();
      }
    }catch(excp){
      debugger
    }
  },
  /**
   * @function
   *
   * @param records 
   */
  verifyStatusAndPerformFinsish:function(records){
    try{
      if(Array.isArray(records) && records.length>0){
        var statusCode=records[0][JOURNEY_TBL.STATUS_CODE_FK];
        if(statusCode==3 || statusCode==4){
          // JOurney has been terminate or completed.
          //this.onSubmitJourney("FORCED_FINISH");
          var record=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
          var expectedCheckinTime=record[CHECKPOINT_TBL.EXPECTED_CHECKIN_TIMESTAMP];
          var checkPointSequenceNumber=record[CHECKPOINT_TBL.CHECK_POINT_SEQ_NUM];
          var notificationList=[];
          notificationList.push(""+expectedCheckinTime+"_"+checkPointSequenceNumber);
          this.clearNotifications(notificationList);
          kony.store.removeItem(DATA_MODEL.CHECKPOINT_TBL);
          this.view.flxPopUps.setVisibility(true);
          this.view.forceLayout();
        }
      }else{
        kony.print("No journey found!");
      }

    }catch(excp){
      debugger;
      kony.print("Exception occured: "+JSON.stringify(excp));
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _recordFetchSuccess:function(dataModel,info,result){
    debugger;
    kony.application.dismissLoadingScreen();
    try{
      switch(dataModel){
        case DATA_MODEL.CHECKPOINT_TBL:
          this.processCheckPointList(result);
          break;
        case DATA_MODEL.JOURNEY_TBL:
          if(info=="JOURNEY_STATUS"){
            this.verifyStatusAndPerformFinsish(result);
          }else{
            if(Array.isArray(result) && result.length>0){
              this.populateJourneyInfo(result[0]);
            }
          }
          break;
        case DATA_MODEL.TRACKING_POINTS_TBL:
          this.populateTrackingPointInfo(result);
          break;
        case DATA_MODEL.USER_TBL:
          this.populateUserInfo(result);
          break;
        case DATA_MODEL.GUIDES_MANUALS_TBL:
          this.populateGuidesAndMannuals(result);
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
    kony.application.dismissLoadingScreen();
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
      kony.application.showLoadingScreen("","",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      knyObject.get(options,this._recordFetchSuccess.bind(this,dataModel,info),this._recordFetchFailure.bind(this,dataModel));
    }catch(excp){
      kony.application.dismissLoadingScreen();
      debugger;
      throw excp;
    }
  },
  //Notification code starts
  createNotification:function(notificationId,checkPointSequenceNumber) {
    debugger;
    //return;
    try{
      if(typeof notificationId=='string' && notificationId.length>0){
        var d=JourneyUtil.getSqlDatetoJSDate(notificationId);
        d = d.toString();
        var format = "dd MMM yyyy HH:mm:ss Z";
        var title = JConstant.NOTIFICATION_TITLE;
        var message = JConstant.NOTIFICATION_MESSAGE;
        var categoryId ="Checkin Now";
        var dateString= d.substring(8, 11) + d.substring(4, 8) + d.substring(11, 16) + d.substring(16, 25) + d.substring(28, 33);
        notificationId=notificationId+"_"+checkPointSequenceNumber;
        //var dateString=d;
        kony.localnotifications.create({
          "id": notificationId,
          "dateTime": {
            "date": dateString,
            "format": format
          },
          "message": message,
          "title": title,
          "categoryId": categoryId,
          "pspConfig":{
            //"badge":1,
            "sound": kony.localnotifications.DEFAULT_SOUND 
          }
        });
        kony.print("####################### Next checkin at: "+dateString);
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  offlinenotificationLocal:function(data, actionid) {
    try{
      debugger;
      return;
      //alert("offline notification");
      this.isFreshForm=true;
      //this.onFormPostShow();
      //return;
      this.isLaunchedFromNotification=true;
      kony.print("data:"+JSON.stringify(data));
      //alert("in offline notification callback: "+JSON.stringify(data));
      if(typeof this.navigationData=='object' && this.navigationData!==null){
        var lastCheckInRecord=this.navigationData[DATA_MODEL.CHECKPOINT_TBL];
        //alert("####lastCheckInRecord :"+JSON.stringify(lastCheckInRecord));
        if(typeof lastCheckInRecord=='object' && lastCheckInRecord!==null){
          //launched from the notification.
          //alert("processing launch from notification");
          this.processLaunchFromNotification(lastCheckInRecord);
          return;
        }
      }
      if(actionid == "Accept"){}
    }catch(excp){
      debugger;
    }
    //kony.application.openURL("DBSAR://");  
  },
  onlinenotificationLocal:function (data, actionid) {
    try{
      debugger;
      //alert("notification came");
      //alert("data: "+JSON.stringify(data));
      //alert("actionid: "+JSON.stringify(actionid));
      if(typeof data=='object' && data!==null){
        var notificationId;
        if(kony.os.deviceInfo().name.toLowerCase()=='android'){
          notificationId=data["notificationId"];
        }else{
          //in case of ios.
          notificationId=data["id"];
        }  
        if(typeof notificationId=='string'){
          notificationId=notificationId.split("_");
          if(Array.isArray(notificationId) && notificationId.length>1){
            var sequenceNumber=notificationId[1];
            sequenceNumber=parseInt(sequenceNumber);
            this.triggerRegularCheckIn(sequenceNumber);
          }
        }
      }
      this.view.forceLayout();
      if(actionid == "Accept"){}
    }catch(excp){
      debugger;
    }
    //kony.application.openURL("DBSAR://");  
  },
  triggerRegularCheckIn:function(sequenceNumber){
    try{
      this.view.journeyTracker.triggerRegularCheckIn(sequenceNumber);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  setLocalNotCallBacks:function (){
    try {
      debugger;
      var self=this;
      kony.localnotifications.setCallbacks({
        "offlinenotification": self.offlinenotificationLocal,
        "onlinenotification": self.onlinenotificationLocal
      });
      this.registerActions();
    } catch (err) {
      //alert("Error Code " + err.errorCode + " Message " + err.message);
    }
  },
  registerActions:function () {
    var accept = kony.notificationsettings.createAction({
      "id": "Accept",
      "label": "Open",
      "pspConfig": {
        "authenticationRequired": false,
        "destructive": false,
        "activationMode":kony.notificationsettings.ACTIVATION_MODE_FORWARDS,
        "visibleOn": kony.notificationsettings.BOTH
      }
    }); 

    //     var reject  = kony.notificationsettings.createAction({
    //         "id": "Reject",
    //         "label": "Reject",
    //         "pspConfig": {
    //             "authenticationRequired": false,
    //             "destructive": false,
    //             "activationMode":kony.notificationsettings.ACTIVATION_MODE_FORWARDS,
    //             "visibleOn": kony.notificationsettings.BOTH
    //         }
    //     }); 

    //     var decline = kony.notificationsettings.createAction({
    //         "id": "Decline",
    //         "label": "Decline",
    //         "pspConfig": {
    //             "activationMode": kony.notificationsettings.ACTIVATION_MODE_BACKWARDS,
    //             "authenticationRequired": true,
    //             "destructive": false,
    //             "visibleOn": kony.notificationsettings.BOTH
    //         }
    //     });


    var defaultActionContextArr = [accept];
    var minimalActionContextArr = [accept];

    var categoryObj = kony.notificationsettings.createCategory({
      "categoryId": "Checkin Now",
      "actions": defaultActionContextArr,
      "pspConfig": {
        "minimalActions":minimalActionContextArr 
      }
    });
    //Using kony.notificationsettings.registerCategory 

    var categoryArr = [categoryObj];

    var registerCategory = kony.notificationsettings.registerCategory({
      "categories": categoryArr,
      "pspConfig": {
        "types": [0, 1, 2]
      }
    });

  },
  /**
   * @function
   *
   */
  getCurrentLocation:function(checkInObj,operation){
    var positionoptions={};
    positionoptions.enableHighAccuracy=true;
    positionoptions.timeout=10000;
    positionoptions.maximumAge=1000;
    try{
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      kony.location.getCurrentPosition(this._geoSuccessCallback.bind(this,checkInObj,operation),this._geoFailureCallback.bind(this,checkInObj,operation),positionoptions);
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
  _geoSuccessCallback:function(checkInObj,operation,result){
    try{
      debugger;
      kony.application.dismissLoadingScreen();
      if(typeof result==='object' && result!==null){
        if(typeof result["coords"]=='object' && result["coords"]!==null){
          this.deviceLat =result.coords.latitude;
          this.deviceLon=result.coords.longitude;
          checkInObj[CHECKPOINT_TBL.CHECKIN_LOCATION_LAT]=""+result.coords.latitude;
          checkInObj[CHECKPOINT_TBL.CHECKIN_LOCATION_LON]=""+result.coords.longitude;
          if(this.lastKnownLocation==null){
            this.lastKnownLocation={};
            this.lastKnownLocation["lattitude"]=""+this.deviceLat;
            this.lastKnownLocation["longitude"]=""+this.deviceLon;
            this.lastKnownLocation["name"]="";
            this.lastKnownLocation["address"]="";
            this.lastKnownLocation["image"]="departure_point_pin.png";
          }else{
            var currentLocation={};
            currentLocation["lattitude"]=""+this.deviceLat;
            currentLocation["longitude"]=""+this.deviceLon;
            currentLocation["image"]="enteredcheckpoint_pin.png";
            currentLocation["name"]="";
            currentLocation["address"]="";
            this.view.journeyTracker.drawRoutePolyline(this.lastKnownLocation,currentLocation,checkInObj[CHECKPOINT_TBL.CHECK_POINT_SEQ_NUM],"0000FFFF");
            this.lastKnownLocation=currentLocation;
          }
          if(this._Journey_status==this.STATUS.COMPLETED){
            var isInProximity;
            if(operation=="FORCED_FINISH"){
              isInProximity=true;
            }else{
              isInProximity=this.isInProximity(this.deviceLat,this.deviceLon,this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT],
                                               this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON]);
            }

            if(isInProximity===true){
              this.updateJourney[JOURNEY_TBL.ACTUAL_ARRIVALPOINT_LAT]=""+this.deviceLat;
              this.updateJourney[JOURNEY_TBL.ACTUAL_ARRIVALPOINT_LON]=""+this.deviceLon;
              if(JourneyUtil.isNetworkAvailable()===true){
                this.getAddressForLatLang(this.deviceLat,this.deviceLon,checkInObj);
              }else{
                // If network not available update the current address with lat-lon and update journey
                this.updateJourney[JOURNEY_TBL.ACTUAL_ARRIVALPOINT_ADDRESS]=""+this.deviceLat+","+this.deviceLon;
                this.finishCurrentJourney();
              }
            }else{
              this._Journey_status=this.STATUS.IN_PROGRESS;
              alert("You have not reached to the arrival address");
              return;
            }
            return;
          }
          if(JourneyUtil.isNetworkAvailable()===true){
            this.getAddressForLatLang(this.deviceLat,this.deviceLon,checkInObj);
          }else{
            checkInObj[CHECKPOINT_TBL.CHECKIN_LOCATION_ADDRESS]=this.deviceLat+","+this.deviceLon;
            this.updateRecord(checkInObj);
          }

        }
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  isInProximity:function(sourceLat,sourceLon,destinationLat,destinationLon){
    debugger;
    var status=false;
    var sourceLoc={};
    var destinationLoc={};
    try{
      sourceLoc["lat"]=sourceLat;
      sourceLoc["lon"]=sourceLon;
      destinationLoc["lat"]=destinationLat;
      destinationLoc["lon"]=destinationLon;
      var distanceInMiles=JourneyUtil.getDistanceInMiles(sourceLoc, destinationLoc);
      if(distanceInMiles<JConstant.PROXIMITY_DISTANCE_IN_MILES){
        status=true;
      }
    }catch(excp){
      debugger;
      status=false;
    }

    return status;
  },
  /**
   * @function
   *
   * @param result 
   */
  _geoFailureCallback:function(checkInObj,result,operation){
    kony.application.dismissLoadingScreen();
    debugger;
    checkInObj[CHECKPOINT_TBL.CHECKIN_LOCATION_LAT]=null;
    checkInObj[CHECKPOINT_TBL.CHECKIN_LOCATION_LON]=null;
    if(this._Journey_status==this.STATUS.COMPLETED){
      this.updateJourney[JOURNEY_TBL.ACTUAL_ARRIVALPOINT_ADDRESS]=null;
    }else{
      this.updateRecord(checkInObj);
    }


    //this.createCheckInRecord(checkInObj);
    //kony.application.dismissLoadingScreen();
    //alert(JSON.stringify(result));
  },
  /**
   * @function
   *
   * @param lattitude 
   * @param longitude 
   */
  getAddressForLatLang:function(lattitude,longitude,checkInObj){
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
                                    inputParam,this._reverseGeoSuccess.bind(this,lattitude,longitude,checkInObj),
                                    this._reverseGeoFailure.bind(this,lattitude,longitude,checkInObj));
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
  _reverseGeoSuccess:function(lattitude,longitude,checkInObj,result){
    debugger;
    kony.application.dismissLoadingScreen();
    if(typeof result=='object' && result!==null){
      if(Array.isArray(result["results"]) && result["results"].length>0){
        checkInObj[CHECKPOINT_TBL.CHECKIN_LOCATION_ADDRESS]=result["results"][0]["formatted_address"];
      }else{
        checkInObj[CHECKPOINT_TBL.CHECKIN_LOCATION_ADDRESS]=""+lattitude+","+longitude;
      }
      if(this._Journey_status==this.STATUS.COMPLETED){
        if(Array.isArray(result["results"]) && result["results"].length>0){
          this.updateJourney[JOURNEY_TBL.ACTUAL_ARRIVALPOINT_ADDRESS]=result["results"][0]["formatted_address"];
        }else{
          this.updateJourney[JOURNEY_TBL.ACTUAL_ARRIVALPOINT_ADDRESS]=""+lattitude+","+longitude;
        }
        this.finishCurrentJourney();
      }else{
        this.updateRecord(checkInObj);
      }
      //this.createCheckInRecord(checkInObj);
    }
  },
  finishCurrentJourney:function(){
    debugger;
    try{
      var record=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
      var expectedCheckinTime=record[CHECKPOINT_TBL.EXPECTED_CHECKIN_TIMESTAMP];
      var checkPointSequenceNumber=record[CHECKPOINT_TBL.CHECK_POINT_SEQ_NUM];
      var notificationList=[];
      notificationList.push(""+expectedCheckinTime+"_"+checkPointSequenceNumber);
      this.clearNotifications(notificationList);
      kony.store.removeItem(DATA_MODEL.CHECKPOINT_TBL);
      this.updateJourneyRecord(this.updateJourney, this.journeyObj);
    }catch(excp){
      debugger;
    }
  },
  updateJourneyRecord:function(updateRecord,originalRecord,isETAUpdate){
    debugger;
    try{
      if(typeof updateRecord=='object' && updateRecord!==null && typeof originalRecord=='object' && originalRecord!==null){
        var options={};
        var id=JOURNEY_TBL.ID_PK;
        options["primaryKeys"]={};
        options["primaryKeys"][id]=originalRecord[JOURNEY_TBL.ID_PK];
        //this.updateCheckInStatus(record);
        if(isETAUpdate===true){
          updateRecord[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=originalRecord[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME];
        }else{
          updateRecord[JOURNEY_TBL.STATUS_CODE_FK]=3;
          updateRecord[JOURNEY_TBL.ACTUAL_ARRIVAL_DATETIME] = JourneyUtil.getCurrentDateTimeInUTC();
        }       
        updateRecord[JOURNEY_TBL.LAST_UPDATED_TIMESTAMP]=null;
        var sdkObj=new kony.sdk.KNYObj(DATA_MODEL.JOURNEY_TBL);
        kony.application.showLoadingScreen("","",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        sdkObj.updateByPK(updateRecord,options, this.updateRecordSuccess.bind(this,"ETA_UPDATE"), this.updateRecordFailure.bind(this));
      }
    }catch(excp){
      kony.application.dismissLoadingScreen();
      debugger;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _reverseGeoFailure:function(lattitude,longitude,checkInObj,result){
    debugger;
    kony.application.dismissLoadingScreen();
    if(this._Journey_status==this.STATUS.COMPLETED){
      this.updateJourney[JOURNEY_TBL.ACTUAL_ARRIVALPOINT_ADDRESS]=""+lattitude+","+longitude;
      this.finishCurrentJourney();
    }else{
      checkInObj[CHECKPOINT_TBL.CHECKIN_LOCATION_ADDRESS]=""+lattitude+","+longitude;
      this.updateRecord(checkInObj);
    }
    //this.createCheckInRecord(checkInObj);
  },
  startSync:function(operation){
    debugger;
    var syncOptions={};//"downloadBatchSize":"100",
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    //syncOptions.GetSyncStats=true;
    try{
      var syncObjService= new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);

      if(JourneyUtil.isNetworkAvailable()===false){
        if(this._Journey_status==this.STATUS.COMPLETED){
          // journey is completed
          this.syncSuccessCB.call(this,"FINISH_JOURNEY");
        }else{
          var lastCheckInRecords=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
          this.createCheckInRecord(lastCheckInRecords);
          //alert("perform sync once online!");
        }

      }else{
        syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
        kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        syncObjService.startSync(syncOptions,this.syncSuccessCB.bind(this,operation),this.syncFailureCB.bind(this),this.progressCallback);
      }

    }catch(excp){
      debugger;
      alert("Exception occured: "+JSON.stringify(excp));
      kony.application.dismissLoadingScreen();
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  progressCallback:function(){ 
  },
  /**
   * @function
   *
   * @param response 
   */
  syncSuccessCB:function(operation,response){
    debugger;
    kony.application.dismissLoadingScreen();
    try{
      if(this._Journey_status==this.STATUS.COMPLETED){
        debugger;
        this.view.flxPopUps.setVisibility(true);
        this.view.forceLayout();
      }else{
        switch(operation){
          case "CHECKPOINT_UPDATE":
            var lastCheckInRecords=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
            this.createCheckInRecord(lastCheckInRecords);
            break;
          case "IS_TERMINATED":
            this.checkJourneyStatus(this.journeyObj[JOURNEY_TBL.ID_PK]);
            break;
          case "ETA_UPDATE":
            // do nothing.
            break;
        }
      }
      return;
    }catch(excp){
      debugger;
      kony.print("Exception occured: "+JSON.stringify(excp));
    }
  },
  /**
   * @function
   *
   * @param journeyId 
   */
  checkJourneyStatus:function(journeyId){
    if(typeof journeyId=='string' || typeof journeyId == 'number'){
      try{
        var options={};
        options["whereConditionAsAString"]=JOURNEY_TBL.ID_PK+" = '"+journeyId+"'";
        this.fetchRecords(DATA_MODEL.JOURNEY_TBL, options, "JOURNEY_STATUS");
      }catch(excp){
        debugger;
        kony.print("Exception occured: "+JSON.stringify(excp));
      }
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
    try{
      if(typeof this.failureCallback=='function'){
        var param={};
        this.failureCallback(param);
      }
      alert("Server taking too long to respond \n please try later..");
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
  createNotificationForNextCheckIn:function(record){
    try{
      if(typeof record=='object' && record!==null){
        var notificationId=record[CHECKPOINT_TBL.EXPECTED_CHECKIN_TIMESTAMP];
        var checkPointSequenceNumber=record[CHECKPOINT_TBL.CHECK_POINT_SEQ_NUM];
        this.createNotification(notificationId, checkPointSequenceNumber);
      }

    }catch(excp){
      debugger;
    }
  },
  updateCheckInRecord:function(record){
    if(typeof record=='object' && record!==null){
      try{
        kony.store.setItem(DATA_MODEL.CHECKPOINT_TBL, record);
        if(typeof this.successCallback=='function'){
          var param={};
          this.successCallback(param);
        }
        //this.startSync();
      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   * @param datamodel 
   * @param result 
   */
  _createRecordSuccess:function(datamodel,result){
    debugger;
    try{
      switch(datamodel){
        case DATA_MODEL.VEHICLE_TBL:
          this.showVehicleList();
        case DATA_MODEL.CHECKPOINT_TBL:
          this.updateCheckInRecord(result);
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

  updateRecord:function(record){
    debugger;
    if(typeof record=='object' && record!==null){
      try{
        var upDatedRecord={};
        // upDatedRecord[CHECKPOINT_TBL.ACTUAL_CHECKIN_TIMESTAMP]=record[JOURNEY_TBL.ACTUAL_DEPARTURE_ADDRESS];
        upDatedRecord[CHECKPOINT_TBL.CHECKIN_LOCATION_ADDRESS]=record[CHECKPOINT_TBL.CHECKIN_LOCATION_ADDRESS];
        upDatedRecord[CHECKPOINT_TBL.CHECKIN_LOCATION_LAT]=record[CHECKPOINT_TBL.CHECKIN_LOCATION_LAT];
        upDatedRecord[CHECKPOINT_TBL.CHECKIN_LOCATION_LON]=record[CHECKPOINT_TBL.CHECKIN_LOCATION_LON];

        var options={};
        var id=CHECKPOINT_TBL.ID_PK;
        options["primaryKeys"]={};
        options["primaryKeys"][id]=record[CHECKPOINT_TBL.ID_PK];
        this.updateCheckInStatus(record);
        upDatedRecord[CHECKPOINT_TBL.CHECKPOINT_STATUS_ID_FK]=record[CHECKPOINT_TBL.CHECKPOINT_STATUS_ID_FK];
        upDatedRecord[CHECKPOINT_TBL.ACTUAL_CHECKIN_TIMESTAMP] = JourneyUtil.getCurrentDateTimeInUTC();
        upDatedRecord[CHECKPOINT_TBL.LAST_UPDATED_TIMESTAMP] = null;
        var sdkObj=new kony.sdk.KNYObj(DATA_MODEL.CHECKPOINT_TBL);
        kony.application.showLoadingScreen("","",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        sdkObj.updateByPK(upDatedRecord,options, this.updateRecordSuccess.bind(this,"CHECKPOINT_UPDATE"), this.updateRecordFailure.bind(this,"CHECKPOINT_UPDATE"));
      }catch(excp){
        debugger;
      }
    }
  },
  updateCheckInStatus:function(record){
    try{
      if(typeof record=='object' && record!==null){
        var expectedTimestamp=record[CHECKPOINT_TBL.EXPECTED_CHECKIN_TIMESTAMP];
        expectedTimestamp=JourneyUtil.getSqlDatetoJSDate(expectedTimestamp);
        expectedTimestamp=expectedTimestamp.getTime();
        var currentTimestamp=new Date().getTime();
        var timeDiff=currentTimestamp-expectedTimestamp;
        if(timeDiff>15*60*1000){
          record[CHECKPOINT_TBL.CHECKPOINT_STATUS_ID_FK]=2;
        }else{
          record[CHECKPOINT_TBL.CHECKPOINT_STATUS_ID_FK]=3;
        }
      }
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  updateRecordSuccess:function(operation,result){
    debugger;
    kony.application.dismissLoadingScreen();
    try{
      this.startSync(operation);
      //Updating in UI
      var excpectedArrivalTimestamp=JourneyUtil.getSqlDatetoJSDate(this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
      kony.print("Before updation excpectedArrivalTimestamp is "+excpectedArrivalTimestamp);
      var excpectedArrivalTime= JourneyUtil.getTimeStringIn12HrsFromat(excpectedArrivalTimestamp);
      this.view.journeyTracker.setArrivalTime(excpectedArrivalTime);
    }catch(excp){
      debugger;
    }
  },

  /**
   * @function
   *
   * @param result 
   */
  updateRecordFailure:function(operation,result){
    debugger;
    kony.application.dismissLoadingScreen();
    try{
      this.startSync(operation);
    }catch(excp){
      debugger;
    }
  },
  populateJourneyInfo:function(journeyObj){
    //alert("In populateJourneyInfo "+JSON.stringify(journeyObj));
    //alert("populate journey info");
    debugger;
    try{
      if(typeof journeyObj=='object' && journeyObj!==null){
        this.view.lblCenterTextMyJourneys.text=journeyObj[JOURNEY_TBL.UF_ID];

        this.setTrackingPointInfo(journeyObj[JOURNEY_TBL.TRACKING_POINT_ID_FK]);
        var excpectedArrivalTimestamp=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME];
        excpectedArrivalTimestamp=JourneyUtil.getSqlDatetoJSDate(excpectedArrivalTimestamp);
        var excpectedArrivalTime= JourneyUtil.getTimeStringIn12HrsFromat(excpectedArrivalTimestamp);
        this.view.journeyTracker.setArrivalTime(excpectedArrivalTime);
        var excpectedDeparture=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME];
        excpectedDeparture=JourneyUtil.getSqlDatetoJSDate(excpectedDeparture);
        /*var timeDiff=excpectedArrivalTimestamp.getTime()-excpectedDeparture.getTime();
        timeDiff=(timeDiff/1000)/60;
        timeDiff=timeDiff/60;//+" Hrs";
        timeDiff=Math.round(timeDiff*100)/100+" Hrs";*/
        var timeDiff=JourneyUtil.getTwoDatesTimeDifference(excpectedArrivalTimestamp.getTime(), excpectedDeparture.getTime())+" Hrs";
        this.view.journeyTracker.setTimeDuration(timeDiff);
        var destination=this.getDestinationLocation(journeyObj);
        var source=this.getSourceLocation(journeyObj);


        this.view.journeyTracker.drawRoutePolyline(source,destination,"PATH","d3d3d3FF");
        //return;
        this.view.journeyTracker.setDestination(destination);
        this.view.journeyTracker.setDestinationAddress(journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS]);
        this.journeyObj=journeyObj;
        this.setCheckPoints(journeyObj[JOURNEY_TBL.ID_PK]);
        var sourceLocation={};
        sourceLocation["lat"]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT];
        sourceLocation["lon"]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON];
        var destinationLocation={};
        destinationLocation["lat"]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT];
        destinationLocation["lon"]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON];
        this.view.journeyTracker.setSupervisorPhone(journeyObj[JOURNEY_TBL.SUPERVISOR_PHONE]);
        //this.view.journeyTracker.setTrackingPointPhone()
        var distanceInMeter=kony.map.distanceBetween(sourceLocation, destinationLocation);
        //var distanceInMiles=JourneyUtil.getDistanceInMiles(sourceLocation, destinationLocation);
        var distanceInKM=distanceInMeter/1000;
        distanceInKM=Math.round(distanceInKM*100)/100;
        this.view.journeyTracker.setJourneyDuration(distanceInKM+" KM Away");
        var userId=journeyObj[JOURNEY_TBL.USER_EMP_ID_FK];
        this.setUserDetail(userId);
        this.view.forceLayout();
        debugger;
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param userId 
   */
  setUserDetail:function(userId){
    debugger;
    if(typeof userId=='number' || typeof userId=='string'){
      var options={};
      options["whereConditionAsAString"]=USER_TBL.USER_EMP_ID_PK+"= '"+userId+"'";
      this.fetchRecords(DATA_MODEL.USER_TBL, options, null);
    }else{
      kony.print("Return journey ID not available!");
    }
  },
  setTrackingPointInfo:function(trackingPointId){
    if(typeof trackingPointId=='string' || typeof trackingPointId=='number'){
      try{
        var options={};
        options["whereConditionAsAString"]=TRACKING_POINTS_TBL.TRACKING_POINT_ID+" ='"+trackingPointId+"'";
        this.fetchRecords(DATA_MODEL.TRACKING_POINTS_TBL, options);
      }catch(excp){
        debugger;
      }
    }
  },
  navigateToMyJourney:function(){
    try{
      this.view.journeyTracker.resetComponent();
      var navObj=new kony.mvc.Navigation("frmMyJourneys");
      var param={};
      /*if(typeof this.user == 'object' && this.user!==null){
        param[DATA_MODEL.USER_TBL]=this.user;
        param[DATA_MODEL.USER_TBL][USER_TBL.USER_EMP_ID_PK]=this.user["email"];
        param[DATA_MODEL.USER_TBL][USER_TBL.USER_FIRSTNAME]=this.user["first_name"];
        param[DATA_MODEL.USER_TBL][USER_TBL.USER_LASTNAME]=this.user["last_name"];
        param[DATA_MODEL.USER_TBL][USER_TBL.USER_EMAIL_ID]=this.user["user_id"];
      }*/
      /*if(typeof this.user == 'object' && this.user!==null){
       // param[DATA_MODEL.USER_TBL]=this.user["email"];
      }*/
      //navObj.navigate(param);
      param[DATA_MODEL.USER_TBL]=this.userObj;
      navObj.navigate(param);
    }catch(excp){
      debugger;
    }
  },



  //Notification code ends

  dismissSuccessAlert:function(){
    try
    {
      this.view.customAlertWithImage.setVisibility(false);
      this.view.forceLayout();
    }
    catch(err)
    {
    }
  },
  /**
   * @function
   *
   */
  updateExpectedArrivalTime:function(param){
    debugger;
    try{
      if(Array.isArray(param) && param.length>0){
        var selectionId=param[0][0];
        selectionId=parseInt(selectionId);
        if(selectionId>0){
          var selectedMinutes=param[0][1];
          selectedMinutes=parseInt(selectedMinutes);
          var expectedArrivalTimeString=this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME];
          var dateObj=JourneyUtil.getSqlDatetoJSDate(expectedArrivalTimeString);
          dateObj.setMinutes(dateObj.getMinutes()+selectedMinutes);
          this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=JourneyUtil.getTimeInUTCString(dateObj.getTime());
          this.updateJourneyRecord({}, this.journeyObj, true);
        }else{
          // do nothing as key -1 is selected means none
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
  showUpdateETAFlex:function(){
    this.view.flxUpdateETAContainer.setVisibility(true);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  hideUpdateETAFlex:function(){
    this.view.flxUpdateETAContainer.setVisibility(false);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  showMoreOption:function(){
    if(this.view.flxScrollReadMessages.isVisible){
      this.view.flxScrollReadMessages.isVisible = false;
      this.view.flxFullMessageContent.isVisible = false;
    }
    this.view.flxOptionMenuContainer.isVisible = true;
    this.view.flxOptionMenuContainer.animate(
      kony.ui.createAnimation({100:{top:"0%","stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.2},
      {animationEnd: function() {
      } 
      }); 
    this.view.imgHamburgerOnJourney.src = "back_1.png";  


  },
  /**
   * @function
   *
   */
  hideMoreOption:function(){
    this.view.flxOptionMenuContainer.animate(
      kony.ui.createAnimation({100:{top:"100%","stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.2},
      {animationEnd: function() {
      } 
      });
    this.view.imgHamburgerOnJourney.src = "hamburger_2.png";
  },
  /**
   * @function
   *
   */
  onHamburgerMenuClick:function(){
    if(this.view.imgHamburgerOnJourney.src === "hamburger_2.png"){
      this.showSlidingMenu();  
    }
    else if(this.view.flxFullMessageContent.isVisible){
      this.view.flxFullMessageContent.isVisible = false;
      this.addDataToSegment();
      this.view.segReadMessages.isVisible = true;
    }
    else if(this.view.flxScrollReadMessages.isVisible){
      this.view.flxScrollReadMessages.isVisible = false;
      this.view.flxOptionMenuContainer.isVisible = true;
    }
    else{
      this.view.flxOptionMenuContainer.isVisible = true;
      this.view.imgHamburgerOnJourney.src = "hamburger_2.png";
    }

  },
  /**
   * @function
   *
   */
  hideSlidingMenu:function(){
    this.view.flxExtra.setVisibility(false);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  showSlidingMenu:function(){
    this.view.flxExtra.setVisibility(true);
    this.view.slidingmenu.showHambergurMenu();
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  resetForm:function(){
    this.hideSlidingMenu();
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
  /**
   * @function
   *
   */
  onMapLoad:function(){
    debugger;
    //this.startLocationMonitoring();
  },
  startLocationMonitoring:function(){
    debugger;
    var positionoptions={};
    positionoptions.enableHighAccuracy=true;
    //positionoptions.timeout=this._timeOut;
    positionoptions.maximumAge=3000;
    positionoptions.minimumTime=20*1000;
    positionoptions.minimumDistance=1;
    //watchFlag = true;
    try{
      if(typeof this._watchId=='string' || typeof this._watchId=='number' ){
        kony.location.clearWatch(this._watchId);
      }
    }catch(excp){
      debugger;
    }
    try
    {
      this._watchId = kony.location.watchPosition(this.watchPositionSuccess.bind(this),this.watchPositionFailureCB.bind(this), positionoptions);
    }catch(excp){
      debugger;
      //alert(err.message);
    }
  },
  watchPositionSuccess:function(position){
    //debugger;
    if(typeof position==='object' && position!==null){
      var coords=position["coords"];
      if(typeof coords=='object' && coords!==null){
        var deviceLocation ={};
        deviceLocation["lat"]= "" + coords.latitude;
        deviceLocation["lon"]= "" + coords.longitude;
        deviceLocation["name"]= "Current Location";
        deviceLocation["image"]="current_location.png";
        deviceLocation["id"]="current_location";
        deviceLocation["desc"]="current_location";
        var arrivalPoint={};
        arrivalPoint["lat"]=this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT];
        arrivalPoint["lon"]=this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON];
        var distanceInMeter=kony.map.distanceBetween(arrivalPoint, deviceLocation);
        var distanceInKM=distanceInMeter/1000;
        distanceInKM=Math.round(distanceInKM*100)/100;
//         alert(JSON.stringify(deviceLocation));
        this.view.journeyTracker.setJourneyDuration(distanceInKM+" KM Away");
        //this
        try{
          this.view.journeyTracker.AddOrUpdatePin(deviceLocation);
        }catch(excp){
          debugger;
        }
//         var polylineID = "Journey"+this.navigationData.journey_uf_id;
//         var startLocation = {lat:this.navigationData.journey_expected_departure_lat,lon:this.navigationData.journey_expected_departure_lon,name:"",desc:"",image:"",meta:{color:"green",label:"C"}};
//         var endLocation = {lat:deviceLocation["lat"],lon:deviceLocation["lon"],name:"",desc:"",image:"",meta:{color:"red",label:"A"}};
//         this.view.journeyTracker.drawRoutePolyline(startLocation, endLocation, polylineID, "ffffff");
        
        
      }
    }
  },
  watchPositionFailureCB:function(positionerror){
    //debugger;
    if(typeof positionerror=='object' && positionerror!==null ){
      var errorMesg = "Error code: " + positionerror.code;
      errorMesg = errorMesg + " message: " + positionerror.message;
      kony.print("Error occured for watch position: "+errorMesg);
    }
  },
  objectSync:function(){
    debugger;
    var syncOptions={};//"downloadBatchSize":"100",
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    //syncOptions.GetSyncStats=true;
    syncOptions.syncType = "downloadOnly";
    try{
      if(JourneyUtil.isNetworkAvailable()===true){
        //var syncObjService= new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
        var syncObjService = new kony.sdk.KNYObj(DATA_MODEL.JOURNEY_TBL);
        var filter=kony.store.getItem("SYNC_FILTER");
        if(typeof filter=='object' && filter!==null)
          syncOptions["filter"]=filter[DATA_MODEL.JOURNEY_TBL];
        kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        syncObjService.startSync(syncOptions,this.objectSyncSuccessCB.bind(this),this.objectSyncFailureCB.bind(this),this.objectProgressCallBack);
      }else{
        alert("Please check your network connection");
      }
    }catch(excp){
      debugger;
      kony.application.dismissLoadingScreen();
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
    this.checkJourneyStatus(this.journeyObj[JOURNEY_TBL.ID_PK]);
    kony.application.dismissLoadingScreen();
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
  },
  openMessagePage : function(){
    this.view.flxOptionMenuContainer.isVisible = false;
    this.view.flxScrollReadMessages.isVisible = true;
    this.addDataToSegment();
  },
  setSegData : function(index){
    var segData = this.view.segReadMessages.data;
    var selectedData = segData[index];
    var pushID = selectedData.lblDummy.text;
    kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("GetDataForMessage");
    var operationName = "updateStatus";
    var param = {"pushId": ""+pushID};
    var headers = {};
    integrationObj.invokeOperation(operationName, headers, param, this.setSegDataSuccess.bind(this,index), this.setSegDataFailure.bind(this));
  },
  setSegDataSuccess : function(index, response){
    kony.application.dismissLoadingScreen();
    var segData = this.view.segReadMessages.data;
    var selectedData = segData[index];
    var updateRow = {lblMessageFrom : {skin:"konyqfsSknLblDummy",text:"ADMIN"},flxMain:{skin:"konyqfsSknflxDummy"},
                     lblMessageTime : {skin:"konyqfsSknlblDummy2",text:selectedData.lblMessageTime.text}, 
                     lblMessageDetails : {skin:"konyqfsSknLblDummy3",text:selectedData.lblMessageDetails.text},lblEmpName : {text:"AD"},
                     lblDummy : {text:selectedData.lblDummy.text}
                    };
    this.view.segReadMessages.setDataAt(updateRow, index);
    this.view.segReadMessages.isVisible = false;
    this.view.lblMessageTime.text = selectedData.lblMessageTime.text;
    this.view.lblMessageDetails.text = selectedData.lblMessageDetails.text;
    this.view.flxFullMessageContent.isVisible = true;
    this.view.imgHamburgerOnJourney.src = "back_1.png";
    this.view.imgDots.src = "threeverticaldotswhite.png";
    this.view.imgMessages.src = "ungroup_1.png";
    this.checkNotifications();
  },
  setSegDataFailure : function(err){
    kony.application.dismissLoadingScreen();
    alert(JSON.stringify(err));
  },
  addDataToSegment : function(){
    this.view.segReadMessages.removeAll();
    var id = kony.store.getItem("registeredId");
    kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("GetDataForMessage");
    var operationName = "getMessage";
    var param = {"ksid": ""+id};
    var headers = {};
    integrationObj.invokeOperation(operationName, headers, param, this.addDataToSegmentSuccess.bind(this), this.addDataToSegmentFailure.bind(this));
  },
  addDataToSegmentSuccess : function(response){
    kony.application.dismissLoadingScreen();
    var data = [];
    for(var i=0;i<response.messages.length;i++){
      if(response.messages[i].status !== "Opened"){
        var unreadRow = {lblMessageFrom : {skin:"konyqfsSknLblMessage",text:"Admin"},flxMain:{skin:"konyqfsSknFlxMain"},
                         lblMessageTime : {skin:"konyqfsSknLblMsgTime",text:response.messages[i].lastUpdatedDate}, 
                         lblMessageDetails : {skin:"konyqfsSknMsgDetails",text:response.messages[i].content},lblEmpName : {text:"AD"},
                         lblDummy : {text:response.messages[i].fetchId}
                        };
        data.push(unreadRow);  
      }
      else{
        var readRow = {lblMessageFrom : {skin:"konyqfsSknLblDummy",text:"Admin"},flxMain:{skin:"konyqfsSknflxDummy"},
                       lblMessageTime : {skin:"konyqfsSknlblDummy2",text:response.messages[i].lastUpdatedDate}, 
                       lblMessageDetails : {skin:"konyqfsSknLblDummy3",text:response.messages[i].content},lblEmpName : {text:"AD"},
                       lblDummy : {text:response.messages[i].fetchId}
                      };
        data.push(readRow); 
      }     
    }
    this.view.segReadMessages.setData(data);
    this.view.segReadMessages.isVisible = true;
    this.view.imgDots.src = "threeverticaldotswhite.png";
    this.view.imgMessages.src = "ungroup_1.png";
    this.checkNotifications();
  },
  addDataToSegmentFailure : function(err){
    kony.application.dismissLoadingScreen();
    alert(JSON.stringify(err));
  },
  checkNotifications : function(){
    var data = this.view.segReadMessages.data;
    if(data !== null){
      for(var i=0;i<data.length;i++){
        if(data[i].flxMain.skin === "konyqfsSknFlxMain"){
          this.view.imgDots.src = "white_with_indicator.png";
          this.view.imgMessages.src = "group_1.png";
        }
      }
    }
    var notify = kony.store.getItem("isNewOfflineNotification");
    if(notify){
      this.view.imgDots.src = "white_with_indicator_1.png";
      this.view.imgMessages.src = "group_1.png";   
    }
    kony.store.removeItem("isNewOfflineNotification");
  },	
  displayOnlineMsg : function(content){
    this.view.imgDots.src = "white_with_indicator_1.png";
    this.view.imgMessages.src = "group_1.png";
    var fetchId = content.mid;
    this.view.lblNewMessageTime.text = "07-29-2019";
    this.view.lblNewMessageDetails.text = content["gcm.notification.body"];
    var json = {
      "pushID" : fetchId,
      "time":this.view.lblNewMessageTime.text,
      "details":this.view.lblNewMessageDetails.text
    }
    this.view.lblFetchID.text = json;
    this.view.flxOverlay.isVisible = true;
  },  
  showMessageDetails : function(json){
    kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("GetDataForMessage");
    var operationName = "updateStatus";
    var param = {"pushId": ""+json.pushID};
    var headers = {};
    integrationObj.invokeOperation(operationName, headers, param, this.showMessageDetailsSuccess.bind(this,json), this.showMessageDetailsFailure.bind(this));
  },
  showMessageDetailsSuccess : function(json, response){
    kony.application.dismissLoadingScreen();
    this.view.flxOverlay.isVisible = false;
    this.view.segReadMessages.removeAll();
    this.view.segReadMessages.isVisible = false;
    this.view.flxScrollReadMessages.isVisible = true;
    this.view.lblMessageDetails.text = json.details;
    this.view.lblMessageTime.text = json.time;
    this.view.flxFullMessageContent.isVisible = true;
    this.view.imgHamburgerOnJourney.src = "back_1.png";
    kony.store.removeItem("isNewOnlineNotification");
    this.checkNotifications();
  },
  showMessageDetailsFailure : function(err){
    kony.application.dismissLoadingScreen();
    alert(JSON.stringify(err));
  },
});