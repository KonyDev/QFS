define({ 

  //Type your controller code here 
  _fetchRecords:function(){

    function successCB(record){
      alert("Record: "+JSON.stringify(record));
    }
    function failureCB(error){
      alert(JSON.stringify(error));
    }
    try{
      
      
      var client = kony.sdk.getCurrentInstance();
          var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObjSvc", {
					"access": "online"
				});
           
	var dataObject = new kony.sdk.dto.DataObject("journey_tbl");
			var options = {
				"dataObject": dataObject,
              	"queryParams": {
               		"$expand":"journey_passengers_tbl"
                }
			}; 
      objSvc.fetch(options,
				this.successCB.bind(this),
				this.failureCB.bind(this)); 
//       var inspObj=new kony.sdk.KNYObj("journey_tbl");
//       inspObj.get(
//                		{"$expand":"journey_passengers_tbl"
//                 },successCB.bind(this),failureCB.bind(this));
    }catch(excp){
      alert(excp.message);
    }
  },
  setUpSync:function(){

    var options = {"deviceDbEncryptionKey" : "sample"};
    function setupSuccess(response){
      kony.application.dismissLoadingScreen();
      this.startSync();
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
  startSync:function(){
    var syncOptions={};//"downloadBatchSize":"100",
    syncOptions.uploadBatchSize="200";
    // "uploadBatchSize":"200"};
    try{
      var syncObjService= new kony.sdk.KNYObjSvc("JourneyObjSvc");
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
  successCB:function(result){
    alert("Response: "+JSON.stringify(result));
    kony.application.dismissLoadingScreen();
  },
  /**
   * @function
   *
   * @param result 
   */
  progressCB:function(result){
    kony.application.dismissLoadingScreen();
  },
  /**
   * @function
   *
   * @param result 
   */
  failureCB:function(result){
    alert("Sync failed: "+JSON.stringify(result));
    kony.store.setItem("IS_FRESH_LAUNCH", true);
    kony.application.dismissLoadingScreen();
  },
  create_Obect:function()
  {
    try{
      var measurementImage=new kony.sdk.KNYObj("user_tbl");
      measurementImage.create({
        "user_email_id": "12345@gmail.com",
        "user_emp_id_pk": "KH1234",
        "user_firstname": "sdfgf",
        "user_lastname": "ljhkgjfhghk",
        "user_phone1": "987654345678"
      }, {}, this.measurementImageCreationSuccess.bind(this), this.measurementImageCreationFailure.bind(this));
    }catch(excp){
      alert("create_Obect: "+JSON.stringify(excp.message));
    }
  },
  measurementImageCreationSuccess:function(res)
  {
    if(res.code=="2000")
    {
      alert("Record already present.");
    }
    else
      alert("measurementImageCreationSuccess: "+JSON.stringify(res));
  },
  measurementImageCreationFailure:function(err)
  {
    alert("measurementImageCreationSuccess: "+JSON.stringify(err));
  },

});