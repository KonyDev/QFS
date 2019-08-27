define({ 

  //Type your controller code here 
  /**
   * @function
   *
   * @param param 
   */
  launchParam:null,
  isFreshForm:true,
  /**
   * @function
   *
   * @param param 
   */
  onNavigate:function(param){
    debugger;
    //alert("Launch param: "+JSON.stringify(param));
    if(typeof param=='object' && param!==null){
      this.launchParam=param;
      this.isFreshForm=true;
    }else{
      //this.isFreshForm=false;
      DATA_MODEL.AD_GROUP_TBL="najbkc";
    }
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    debugger;
    kony.print("### Entering onFormPostShow of frmSplash ###");
    if(this.isFreshForm===true){
      this.isFreshForm = false;
      //this.setUpSync();
      //this.navigateToNextForm();
      this.validateIfFreshLaunch();
    }
    kony.print("### Exiting onFormPostShow of frmSplash ###");
  },

  /**
   * @function
   *
   */
  validateIfFreshLaunch:function(){
    try{
      debugger;
      var userDetails = kony.store.getItem(DATA_MODEL.USER_TBL);
      userDetails=null;
      if(typeof userDetails =='object' && userDetails!==null){
        var sdkClient =  kony.sdk.getCurrentInstance();
        var identityService = sdkClient.getIdentityService(JConstant.IDENTITY_SERVICE);
        var persistedLogin = identityService.usePersistedLogin();
        this.setUpSync();
      }else{
        // For the first login of the user.
        if(!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
          // If network is not available.
          kony.print("No Network launch case");
          var appLevelAlert=1;
          navObj=new kony.mvc.Navigation("frmAppLevelAlert");
          navObj.navigate(appLevelAlert);
        }else{
          // If network is available.
          //return;
          navObj=new kony.mvc.Navigation("LoginGroup/frmLoginJourney");
          navObj.navigate();
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
  navigateToNextForm:function(){
    try{
      debugger;
      var userDetails = kony.store.getItem(DATA_MODEL.USER_TBL);
      var navObj;
      var param;
      if(typeof userDetails =='object' && userDetails!==null){
        userDetails = GetResponseFromDatabaseWhereClause(USER_TBL_GLOBAL, 
                                                           USER_TBL.USER_EMP_ID_PK, 
                                                           userDetails[USER_TBL.USER_EMP_ID_PK])[0];
        kony.store.removeItem(DATA_MODEL.USER_TBL);
        kony.store.setItem(DATA_MODEL.USER_TBL, userDetails);
        /*var sdkClient =  kony.sdk.getCurrentInstance();
        var identityService = sdkClient.getIdentityService(IdentityServiceName)
        var persistedLogin = identityService.usePersistedLogin();*/
        debugger;
        var userRegionId="";
        var userCountryId="";
        var userLanguageId="";
        userRegionId=userDetails.region_id_fk;
        userCountryId=userDetails.country_id_fk;
        userLanguageId=userDetails.language_id_fk;
        if(typeof userRegionId !== 'number' || typeof userCountryId !== 'number' || 
           typeof userLanguageId !== 'number'){
          navObj = new kony.mvc.Navigation("MyAccount");
          param = {};
          param["Id"]="ProfileInformationMissing";
          param[DATA_MODEL.USER_TBL]=userDetails;
          navObj.navigate(param);
        }else{
          var currentCheckpointRecord=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
          if(typeof currentCheckpointRecord=='object' && currentCheckpointRecord!==null){
            var param={};
            param[DATA_MODEL.CHECKPOINT_TBL]=currentCheckpointRecord;
            navObj=new kony.mvc.Navigation("BeginJourney/frmLiveJourney");
            navObj.navigate(param);
          } 
          else
          {
            navObj=new kony.mvc.Navigation("frmMyJourneys");
            param={};
            param[DATA_MODEL.USER_TBL]=userDetails;
            navObj.navigate(param);
          }
        }
        return;
      }
      // For the first login of the user.
      /*if(!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
        // If network is not available.
        kony.print("No Network launch case");
        var appLevelAlert=1;
        navObj=new kony.mvc.Navigation("frmAppLevelAlert");
        navObj.navigate(appLevelAlert);
      }else{
        // If network is available.
        navObj=new kony.mvc.Navigation("LoginGroup/frmLoginJourney");
        navObj.navigate();
      }*/
    }catch(excp){
      debugger;
      kony.print("Exception occured while navigating to the LoginGroup/frmLoginJourney form: "+JSON.stringify(excp));
    }
  },

  /*navigateToNextForm2:function(){
    kony.print("### Entering navigate to next form ###");
    if(this.launchParam!==null){
      var navObj;
      kony.print("Launch param: "+JSON.stringify(this.launchParam));
      try{
        if(this.launchParam["launchmode"] == 1 ){
          //var currentCheckpointRecord=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
          var currentCheckpointRecord=null;//kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
          if(typeof currentCheckpointRecord=='object' && currentCheckpointRecord!==null){
            var param={};
            param[DATA_MODEL.CHECKPOINT_TBL]=currentCheckpointRecord;
            navObj=new kony.mvc.Navigation("BeginJourney/frmLiveJourney");
            navObj.navigate(param);
          }else{

            if(!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
            {
              try
              {
                var IsAlreadyLoggedIn = kony.store.getItem("IsAlreadyLoggedIn");
                if(IsAlreadyLoggedIn!==null || IsAlreadyLoggedIn!==undefined ||IsAlreadyLoggedIn!==false)
                {
                  var navObj=new kony.mvc.Navigation("frmMyJourneys");
                  try{
                    navObj.navigate();
                    return;
                  }catch(excp){
                    debugger;
                  }
                }
              }
              catch(err)
              {

              }
            }
            else
            {
              navObj=new kony.mvc.Navigation("LoginGroup/frmLoginJourney");
              navObj.navigate(this.launchParam);
            }
          }
        }
        if(this.launchParam["launchmode"] == 4){
          var currentCheckpointRecord=kony.store.getItem(DATA_MODEL.CHECKPOINT_TBL);
          if(typeof currentCheckpointRecord=='object' && currentCheckpointRecord!==null){
            var param={};
            param[DATA_MODEL.CHECKPOINT_TBL]=currentCheckpointRecord;
            navObj=new kony.mvc.Navigation("BeginJourney/frmLiveJourney");
            navObj.navigate(param);
          }else{
            navObj=new kony.mvc.Navigation("LoginGroup/frmLoginJourney");
            navObj.navigate(this.launchParam);
          }
        }else if(this.launchParam["launchmode"] == 3){
          navObj=new kony.mvc.Navigation("LoginGroup/frmLoginJourney");
          navObj.navigate(this.launchParam);
        }
      }catch(excp){
        kony.print("Exception occured while navigating: "+JSON.stringify(excp));
      }
    }
    kony.print("### Exiting from navigate to next form ###");
  },*/
  setUpSync:function(){
    kony.print("### Entering setUpSync of frmSplash ###");
    function setupSuccess(response){
      kony.print("### Entering setupSuccess to frmSplash ###");
      kony.application.dismissLoadingScreen();
      this.navigateToNextForm();
      kony.print("### Exiting setupSuccess to frmSplash ###");
    }
    function setupFailure(response){
      kony.print("### Entering setupFailure to frmSplash ###");
      kony.application.dismissLoadingScreen();
      kony.print("### Exiting setupFailure to frmSplash ###");
    }
    try{
      kony.application.showLoadingScreen("","Initializing",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      KNYMobileFabric.OfflineObjects.setup(setupSuccess.bind(this), setupFailure.bind(this));
    }catch(excp){
      kony.print("Excpetion in SetupSync: "+excp);
      kony.application.dismissLoadingScreen();
    }  
    kony.print("### Exiting setUpSync to frmSplash  ###");
  }
});