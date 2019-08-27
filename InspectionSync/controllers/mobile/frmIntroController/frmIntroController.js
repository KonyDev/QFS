define({ 
  onNavigate:function(){
    kony.store.setItem("IS_FRESH_LAUNCH", true);
  },
  setAppIntroData:function(){
    var segIntroData =[
      {
        "flxIntroBgImage":"splash_screen_bg.png",
        "flxIntroImgIcon":"splash_icon_02.png",
        "lblHeading":"Access Records, Anytime, Anywhere",
        "lblSubHeading":"Manage Workorders",
        "lblDetail":"Unified access to distributed information records across assets and locations",
        "btnGetStarted": {
           "isVisible": true,
            "skin":'sknBtnIntroTab1'
        }
      },
      {
        "flxIntroBgImage":"splash_screen_bg.png",
        "flxIntroImgIcon":"splash_icon_03.png",
        "lblHeading":"Digitize your workflow",
        "lblSubHeading":"Manage Workorders",
        "lblDetail":"Single portal to Create, Assign, Schedule, Execute orders on-the-go in a few simple steps",
        "btnGetStarted": {
          "isVisible": true,
          "skin":'sknBtnIntroTab1'
        }
      },
        {
          "flxIntroBgImage":"splash_screen_bg.png",
          "flxIntroImgIcon":"splash_icon_04.png",
        "lblHeading":"Fewer missed schedules, More efficient workforce",
        "lblSubHeading":"Manage Workorders",
        "lblDetail":"Remove manual paperwork, ensuring quick, smooth, and robust task execution",
        "btnGetStarted": {
          "isVisible": true,
           "skin":'sknBtnBlueFocus',
          "focusSkin":"CopysknBtnBlueFocusSkin"
        }
      },
    ]
    this.view.segAppIntro.pageSkin = "sknIntroSeg";
    this.view.segAppIntro.setData(segIntroData);
    },
  
  onSegmentSwipe:function(){
  },
  /**
   * @function
   *
   */
  onGettingStartedClick:function(param){
    debugger;
    if(InspectionUtil.isNetworkAvailable()===true){
       this.getCurrentLocation();
      this.setUpSync();
    }else{
      alert(app_constant.NO_NETWORK_MESSAGE);
    }
  },
  /**
   * @function
   *
   */
  setUpSync:function(){
    
    var options = {"deviceDbEncryptionKey" : "sample"};
    function setupSuccess(response){
      kony.application.dismissLoadingScreen();
      //alert(response);
      this.startSync();
      //this.startSync();
    }
    function setupFailure(response){
      kony.application.dismissLoadingScreen();
      kony.store.setItem("IS_FRESH_LAUNCH", true);
      alert(response.message);
    }
    try{
      //kony.application.showLoadingScreen(""," Setting up your app \nPlease wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      kony.application.showLoadingScreen("","Initializing",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      KNYMobileFabric.OfflineObjects.setup(setupSuccess.bind(this), setupFailure.bind(this));
      //KNYMobileFabric.OfflineObjects.reset(setupSuccess.bind(this),setupFailure.bind(this));
    }catch(excp){
      kony.print("Excpetion: "+excp);
      kony.application.dismissLoadingScreen();
    }    
  },
  /**
   * @function
   *
   */
  startSync:function(){
    debugger;
    var syncOptions={};//"downloadBatchSize":"100",
    //syncOptions.uploadBatchSize="200";
    syncOptions["downloadBatchSize"]=1;
    // "uploadBatchSize":"200"};
    try{
      var syncObjService= new kony.sdk.KNYObjSvc(OBJECT_SERVICE.SYNC);
      //kony.application.showLoadingScreen(""," Syncing..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      kony.application.showLoadingScreen("","Initializing",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      syncObjService.startSync(syncOptions,this.successCB,this.failureCB,this.progressCB);
    }catch(excp){
      kony.print("Exception: "+excp);
      kony.application.dismissLoadingScreen();
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  failureCB:function(result){
    debugger;
    alert("Sync failed: "+JSON.stringify(result));
    kony.store.setItem("IS_FRESH_LAUNCH", true);
    kony.application.dismissLoadingScreen();
  },
  progressCB:function(result){
    kony.print("##########"+result);
  },
  successCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
    kony.print(response);
    kony.store.setItem("IS_FRESH_LAUNCH", false);
    try{
      kony.keychain.remove({"identifier":"userId"});
      kony.keychain.remove({"identifier":"password"});
    }catch(excp){
      
    }
    this.navigateToLoginForm();
    // this.navigateToLoginForm();
  },
   /**
   * @function
   *
   */
  navigateToLoginForm:function(){
    try{
      var navObj=new kony.mvc.Navigation("frmLogin");
      navObj.navigate();
    }catch(excp){
      kony.print("### Exception occured while navigating to the intro form: "+JSON.stringify(excp));
    }
  },
   findCurrentLatLong:function(successCallback,failureCallback)
  {
    var positionoptions={};
    positionoptions.enableHighAccuracy=true;
    positionoptions.timeout=10000;
    positionoptions.maximumAge=1000;
    try
    {
      kony.location.getCurrentPosition(successCallback, failureCallback,positionoptions);
    }
    catch(exception)
    {
      alert("Exception is ::"+exception.message);
    }
  },
  getCurrentLocation: function(){
    this.findCurrentLatLong(function(res){
      var lat = res.coords.latitude;
      var long = res.coords.longitude;
      kony.store.setItem("currLat", lat);
      kony.store.setItem("currLong", long);
    }, function(err){
      kony.print(JSON.stringify(err));
    });
  }
});