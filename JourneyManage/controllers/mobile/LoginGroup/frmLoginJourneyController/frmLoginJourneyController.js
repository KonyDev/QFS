define({ 

  //Type your controller code here 
  userAttribute:{},
  /**
   * @function
   *
   */
  onNavigate:function(){
    debugger;
    this.userAttribute={};
   // kony.map.PIN_IMG_ANCHOR_CENTER
    
  },
  /**
   * @function
   *
   */
  loginSuccess:function(result){
    debugger;
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    debugger;
    kony.print("#### Entering onFormPostShow of frmLoginJourney ####");
    try{
      //registerForPush();
    }catch(excp){
      debugger;
      kony.print("#### Exception occured in onFormPostShow of frmLoginJourney "+JSON.stringify(excp));
    }
    kony.print("#### Exiting onFormPostShow of frmLoginJourney ####");
    //this.setUpSync();
  },
  /**
   * @function
   *
   * @param result 
   */
  getUserAttributeSuccess:function(result){
    debugger;
    kony.print("### Entering getUserAttributeSuccess function of frmLoginJourney ####");
    try{    
      UserCredentials.UserEmpId = result.user_id;
      this.userId=result.user_id;
      UserCredentials.UserFirstName = result.firstName;
      UserCredentials.UserLastName = result.lastName;
      UserCredentials.UserEmail = result.email;
      this.setUpSync();
      this.validateANdRegisterForPushNotification(result.email);
      kony.store.setItem(USER_TBL.USER_EMAIL_ID, result.email);
    }catch(excp){
      debugger;
      kony.print("### Exception occured in getUserAttributeSuccess function of frmLoginJourney #### "+
                 JSON.stringify(excp));
    }
    kony.print("### Exiting getUserAttributeSuccess function of frmLoginJourney ####");
  },
  /**
   * @function
   *
   */
  validateANdRegisterForPushNotification:function(currentUserEmailId){
    kony.print("#### Entering validateANdRegisterForPushNotification ####");
    try{
     var lastUserEmail=kony.store.getItem(USER_TBL.USER_EMAIL_ID);
      if(currentUserEmailId==lastUserEmail){
        kony.print("#### Same user loggedd in again ####");
        var isPushNotificationSubscribed=kony.store.getItem(JConstant.IS_PUSH_SUBSCRIBED);
        if(isPushNotificationSubscribed === true){
          kony.print("#### Skipping push notification subscription since this user is already subscribed####");
        }else{
          kony.print("#### Subscribing push notification####");
          registerForPush();
        }
      }else{
        kony.print("#### Differenet user logged in ####");
        kony.print("#### Now registering for push notifiation####");
        registerForPush();
      }
    }catch(excp){
      debugger;
      kony.print("### Exception occured in validateANdRegisterForPushNotification function of frmLoginJourney #### "+
                 JSON.stringify(excp));
    }
    kony.print("#### Exiting validateANdRegisterForPushNotification ####");
  },
  /**
   * @function
   *
   * @param result 
   */
  // to be removed.
  /*getUserAttributeSuccess2:function(result){
    return;
    debugger;
    if(typeof result==='object' && result!==null){
      var userId;
      if(typeof result.user_id==='string' && (result.user_id).indexOf("User000")>-1){
        userId=(result.user_id).split("User000");
        if(Array.isArray(userId) && userId.length>1){
          userId=userId[1];
        }else{
          userId=null;
        }
      }
      this.userAttribute["userid"]=userId;
      this.userAttribute["userRole"]=result.user_role;
      this.userAttribute["firstName"]=result.firstName;
      this.userAttribute["lastName"]=result.lastName;
      this.userAttribute["email"]=result.email;
      kony.store.setItem("USER_INFO",this.userAttribute);
      if(this.userAttribute.userRole.toLowerCase()=="member"){
        try{
          //var navObj=new kony.mvc.Navigation("frmInspectionsList");
          var navObj=new kony.mvc.Navigation("frmInspectionsList");
          navObj.navigate(this.userAttribute);
          //navObj.navigate([]);
        }catch(excp){
          alert(JSON.stringify(excp));
        }
      }else{
        try{
          var navObj=new kony.mvc.Navigation("frmInspectionCreation");
          navObj.navigate(this.userAttribute);
        }catch(excp){
          alert(JSON.stringify(excp));
        }
      }
    }
  },*/
  /**
   * @function
   *
   * @param result 
   */
  failureCallback:function(result){
    debugger;
  },
  /**
   * @function
   *
   */
  setUpSync:function(){
    debugger;
    var options = {"deviceDbEncryptionKey" : "sample"};
    function setupSuccess(response){
      kony.application.dismissLoadingScreen();
      this.createRecord_online(USER_TBL_GLOBAL, {"user_emp_id_pk":UserCredentials.UserEmpId,
                                                 "user_email_id":UserCredentials.UserEmail,
                                                 "user_firstname":UserCredentials.UserFirstName,
                                                 "user_lastname":UserCredentials.UserLastName,
                                                 "country_id_fk":null,
                                                 "region_id_fk":null,
                                                 "language_id_fk":null}
                              );
    }
    function setupFailure(response){
      kony.application.dismissLoadingScreen();
      alert(response.message);
    }
    try{
      //kony.application.showLoadingScreen(""," Setting up your app \nPlease wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      KNYMobileFabric.OfflineObjects.setup(setupSuccess.bind(this), setupFailure.bind(this));
      //KNYMobileFabric.OfflineObjects.reset(setupSuccess.bind(this),setupFailure.bind(this));
    }catch(excp){
      debugger;
      kony.print("Excpetion: "+excp);
      kony.application.dismissLoadingScreen();
    } 
  },
  createRecord_online:function(dataModel,record){
    debugger;
    try{
      var objSvc = kony.sdk.getCurrentInstance().getObjectService(JConstant.OFFLINE_OBJECT_SERVICE, {
        "access": "online"
      });
      var dataObject = new kony.sdk.dto.DataObject(dataModel);
      var options = {
        "dataObject": dataObject,
        "headers":{}
      }; 
      dataObject.setRecord(record);
      kony.application.dismissLoadingScreen();
      kony.application.showLoadingScreen("","Creating Record \n Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      objSvc.create(options,
                    this.createRecordSuccess.bind(this,record),
                    this.createRecordailure.bind(this,record)); 

    }catch(excp){
      alert(excp.error);
      kony.application.dismissLoadingScreen();
    }
  },
  createRecordSuccess:function(record,result){
    debugger;
    try{
      kony.application.dismissLoadingScreen();
      this.doSync(record);
    }catch(excp){
      alert(excp.error);
      debugger;
    }
  },
  /**
   * @function
   *
   * @param record 
   * @param result 
   */
  createRecordailure:function(record,result){
    debugger;
    kony.application.dismissLoadingScreen();
    this.doSync(record);
  },
  doSync:function(record){
    debugger;
    if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
      try{
        var syncOptions={};
        syncOptions.uploadBatchSize=1;
        syncOptions.downloadBatchSize=1;
        syncOptions.filter={};
        /*syncOptions.filter[DATA_MODEL.CHECKPOINT_TBL]=CHECKPOINT_TBL.CREATEDBY+' eq '+record[USER_TBL.USER_EMP_ID_PK];
        syncOptions.filter[DATA_MODEL.INCIDENT_NOTIFICATION_TBL]=INCIDENT_NOTIFICATION_TBL.CREATEDBY_ID+' eq '+
          record[USER_TBL.USER_EMP_ID_PK];
        syncOptions.filter[DATA_MODEL.PASSENGERS_TBL]=PASSENGERS_TBL.CREATEDBY_ID+' eq '+record[USER_TBL.USER_EMP_ID_PK];
        syncOptions.filter[DATA_MODEL.JOURNEY_TBL]=JOURNEY_TBL.USER_EMP_ID_FK+' eq '+record[USER_TBL.USER_EMP_ID_PK];
        syncOptions.filter[DATA_MODEL.USER_ANSWERS_TBL]=JOURNEY_TBL.CREATED_BY+' eq '+record[USER_TBL.USER_EMP_ID_PK];
        syncOptions.filter[DATA_MODEL.USER_TBL]=USER_TBL.USER_EMP_ID_PK+' eq '+record[USER_TBL.USER_EMP_ID_PK];
        syncOptions.filter[DATA_MODEL.VEHICLE_TBL]=VEHICLE_TBL.USER_EMP_ID_FK+' eq '+record[USER_TBL.USER_EMP_ID_PK];*/

        syncOptions.filter[DATA_MODEL.CHECKPOINT_TBL]=CHECKPOINT_TBL.CREATEDBY+' eq '+'-1';
        syncOptions.filter[DATA_MODEL.INCIDENT_NOTIFICATION_TBL]=INCIDENT_NOTIFICATION_TBL.CREATEDBY_ID+' eq '+'-1';
        syncOptions.filter[DATA_MODEL.PASSENGERS_TBL]=PASSENGERS_TBL.CREATEDBY_ID+' eq '+'-1';
        syncOptions.filter[DATA_MODEL.JOURNEY_TBL]=JOURNEY_TBL.USER_EMP_ID_FK+' eq '+record[USER_TBL.USER_EMP_ID_PK];
        syncOptions.filter[DATA_MODEL.USER_ANSWERS_TBL]=JOURNEY_TBL.CREATED_BY+' eq '+'-1';
        syncOptions.filter[DATA_MODEL.USER_TBL]=USER_TBL.USER_EMP_ID_PK+' eq '+record[USER_TBL.USER_EMP_ID_PK];
        syncOptions.filter[DATA_MODEL.VEHICLE_TBL]=VEHICLE_TBL.USER_EMP_ID_FK+' eq '+record[USER_TBL.USER_EMP_ID_PK];
        //syncOptions.getSyncStats = "true";
        kony.store.removeItem("SYNC_FILTER");
        kony.store.setItem("SYNC_FILTER", syncOptions["filter"]);
        var syncObjService=new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
        kony.application.dismissLoadingScreen();
        kony.application.showLoadingScreen("","Sync in Progress..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        syncObjService.startSync(syncOptions,this.doSyncSuccess.bind(this),this.failureCB,this.progressCB);

      }catch(excp){
        debugger;
      }
    }
  },

  doSyncSuccess:function(result){
    debugger;
    try{
      kony.application.dismissLoadingScreen();
      //As per discussion, checking if profile has missing info and accordingly navigating to profile
      var userRegionId="";
      var userCountryId="";
      var userLanguageId="";
      var UserDetails = GetResponseFromDatabaseWhereClause(USER_TBL_GLOBAL, 
                                                           USER_TBL.USER_EMP_ID_PK, 
                                                           UserCredentials.UserEmpId)[0];
      userRegionId=UserDetails.region_id_fk;
      userCountryId=UserDetails.country_id_fk;
      userLanguageId=UserDetails.language_id_fk;
      kony.print("After Login and Sync, userRegionId:"+userRegionId+" userCountryId:"+userCountryId+" userLanguageId:"+userLanguageId);
      debugger;
      kony.store.setItem(DATA_MODEL.USER_TBL,UserDetails);
      if(userRegionId === null || userCountryId === null || userLanguageId === null){
        var navObject = new kony.mvc.Navigation("MyAccount");
        var param = {};
        param["Id"]="ProfileInformationMissing";
        param[DATA_MODEL.USER_TBL]=UserDetails;
        navObject.navigate(param);
      }else{
        var navObj = new kony.mvc.Navigation("frmMyJourneys");
        var param={};
        param["prevForm"]="LoginADFS";
        param[DATA_MODEL.USER_TBL]=UserDetails;
        navObj.navigate(param);
      }
    }catch(excp){
      alert(excp.error);
      debugger;
    }
  },
  progressCB:function(result){
  },
  failureCB:function(result){
    debugger;
    //alert("Sync failed: "+JSON.stringify(result));
    alert("Server taking too long to response!/n Please try after some time..");//+JSON.stringify(result));
    kony.application.dismissLoadingScreen();
  },
});