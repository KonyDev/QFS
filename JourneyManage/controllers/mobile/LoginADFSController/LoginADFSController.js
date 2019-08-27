define({ 
  userAttribute :null,
  userId:null,
  doLogin:function(){
    try
    {
      if((kony.os.deviceInfo().name).toLowerCase() == "android")
      {
        kony.application.showLoadingScreen("","Loading Data..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      }
      this.authClient = KNYMobileFabric.getIdentityService(IdentityServiceName);
      var options = {};
      options.browserWidget = this.view.brwLogin;
      var loginOptions={};
      loginOptions["persistLoginResponse"]=true;
      options.loginOptions = loginOptions;
      this.authClient.login(options, this.loginSuccessCallBack.bind(this), this.failureCallBack.bind(this));
    }
    catch(err)
    {
      alert(err.messagae);
      kony.application.dismissLoadingScreen();
    }
  },
  FetchAllExplorationPoints:function()
  {
    function operationSuccess(response){
      var ArrayOfExplorationPoints = JSON.parse(response.response[0].explorationPointInfo).features;
      ExplorationPoints = [];
      ArrayOfExplorationPoints.forEach(function(item){
        ExplorationPoints.push({"Address":item.attributes.Name ,"Lattitude":item.geometry.y, "Longitude":item.geometry.x});
      });
      ExplorationPointsObjectService = ExplorationPoints;
    }
    function operationFailure(res){
      alert(res);
    }
    try
    {
      if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
      {
        serviceName = "NTLMService";
        integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
        operationName =  "getRes";
        data= {};
        headers= {};
        integrationObj.invokeOperation(operationName, headers, data, operationSuccess, operationFailure);
      }
      else
      {
        alert("Please Connect to Network.");
      }
    }
    catch(err)
    {
      alert(err.message);
    }
  },
  loginSuccessCallBack:function(res)
  {

    kony.application.showLoadingScreen("","Loading Data..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    /*try
    {
      this.FetchAllExplorationPoints();
    }
    catch(err)
    {
      alert("Error in Fetching Exploration Points:: "+err.message);
    }*/
    var self=this;

    this.authClient.getUserAttributes(function(result) {
      self.userAttribute=result;
      this.setUpSync();
      /*try
      {
        if(kony.store.getItem("isAlreadyLoggedIn"))
        {
          alert("Logged in second time.");
        }
      }
      catch(err)
      {
        kony.store.setItem("isAlreadyLoggedIn", true);
        alert(err.message);
      }*/
      try
      {
        UserCredentials.UserEmail = result.user_id;
        this.userId=result.email;
        UserCredentials.UserFirstName = result.first_name;
        UserCredentials.UserLastName = result.last_name;
        UserCredentials.UserEmpId = result.email;
      }
      catch(err)
      {
        alert(err.message);
      }
    }.bind(this), function(error) {
      alert("failure callback for getUserAttributes. Error :"+JSON.stringify(error));
    }.bind(this));
  },
  failureCallBack:function()
  {
    alert("failureCallBack");
  },
  setUpSync:function(){
    debugger;
    kony.application.showLoadingScreen("","Loading Data..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
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
      alert("FailedCallback SetupSync");
    }
    try{
      kony.application.showLoadingScreen("","Initializing",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      KNYMobileFabric.OfflineObjects.setup(setupSuccess.bind(this), setupFailure.bind(this));
    }catch(excp){
      kony.print("Excpetion in SetupSync: "+excp);
      kony.application.dismissLoadingScreen();
    }    
  },
  startSync:function(){
    kony.application.showLoadingScreen("","Loading Data..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var syncOptions={};
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    //syncOptions.getSyncStats = true;
    syncOptions.filter={};
    //syncOptions.filter[DATA_MODEL.JOURNEY_TBL]='"'+JOURNEY_TBL.USER_EMP_ID_FK+' eq '+
    try{
      var syncObjService= new kony.sdk.KNYObjSvc(ObjectServiceName);
      syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
      syncObjService.startSync(syncOptions,this.successCBStartSync.bind(this),this.failureCBStartSync.bind(this),this.progressCBStartSync.bind(this));
    }catch(excp){
      kony.application.dismissLoadingScreen();
      alert("Error in StartSync: "+excp.error);
    }
  },

  successCBStartSync:function(result){
    var navObj = new kony.mvc.Navigation("frmMyJourneys");
    kony.store.setItem("IsAlreadyLoggedIn", true);
    var param={};
    param["prevForm"]="LoginADFS";
    param["user"]=this.userAttribute;
    param[DATA_MODEL.USER_TBL]=this.userId;

    navObj.navigate(param);

  },
  progressCBStartSync:function(result){

  },
  failureCBStartSync:function(result){
    debugger;
    kony.print("Sync failed in the login form: "+JSON.stringify(result));
    //alert("Server taking to long to respond./")
    alert("Server taking too long to response!/n Please try after some time.."+JSON.stringify(result));
    kony.application.dismissLoadingScreen();
  },

  /*simulateJourneyNotification:function (msg,title1) {
    msg="Time to checkin";
    title1="Journey Management"; 
    debugger;
    var d= new Date();
    var notificationId = d.toString();

    d.setTime(d.getTime() + 40*1000);
    d = d.toString();
    var format = "dd mm yyyy HH:mm:ss Z";
    var message = msg;
    var title = title1;
    var categoryId ="Checkin Now";
    var dateString= d.substring(8, 11) + ' 02 ' + d.substring(11, 16) + d.substring(16, 25) + d.substring(28, 33);
    alert("date string: "+dateString);
    try{
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
          "sound": kony.localnotifications.DEFAULT_SOUND 
        }
      });
    }catch(excp){
      debugger;
    }

  },
  offlinenotificationLocal:function(data, actionid) {
    kony.print(JSON.stringify(data));
    alert("data: "+JSON.stringify(data));
    alert("actionid: "+JSON.stringify(actionid));
    if(actionid == "Accept")
      kony.application.openURL("DBSAR://");  
  },
  onlinenotificationLocal:function (data, actionid) {
    kony.print("A money request has been sent.");
    alert("data: "+JSON.stringify(data));
    alert("actionid: "+JSON.stringify(actionid));
    if(actionid == "Accept")
      kony.application.openURL("DBSAR://");  
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
      alert("Error Code " + err.errorCode + " Message " + err.message);
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
    var defaultActionContextArr = [accept];
    var minimalActionContextArr = [accept];

    var categoryObj = kony.notificationsettings.createCategory({
      "categoryId": "Checkin Now",
      "actions": defaultActionContextArr,
      "pspConfig": {
        "minimalActions":minimalActionContextArr 
      }
    });
    var categoryArr = [categoryObj];
    var registerCategory = kony.notificationsettings.registerCategory({
      "categories": categoryArr,
      "pspConfig": {
        "types": [0, 1, 2]
      }
    });

  },*/
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

  createRecordailure:function(record,result){
    kony.application.dismissLoadingScreen();
    this.doSync(record);
    debugger;
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
      //kony.store.setItem("IsAlreadyLoggedIn", true);
      //this.userId=context[DATA_MODEL.USER_TBL];
      kony.store.setItem(DATA_MODEL.USER_TBL,UserDetails);
      //kony.store.setItem("UserDetailsOffline", this.userAttribute);
      if(userRegionId === null || userCountryId === null || userLanguageId === null)
      {
        var navObject = new kony.mvc.Navigation("MyAccount");
        var param = {};
        param["Id"]="ProfileInformationMissing";
        param[DATA_MODEL.USER_TBL]=UserDetails;
        navObject.navigate(param);
      }
      else
      {
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