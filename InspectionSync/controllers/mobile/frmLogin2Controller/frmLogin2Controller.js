define({ 
  identitySvc:null,
  userAttribute:{},
  /**
   * @function
   *
   */
  onNavigate:function(){
    debugger;
    if(!InspectionUtil.isNetworkAvailable()){
      this.view.loadingScreen.show("offline",2);
    }
    
  },
  /**
   * @function
   *
   * @param userName 
   */
  setUserName:function(userName){
    if(typeof userName=='string'){
      this.view.tbxUsername.text=userName;
    }
  },
  /**
   * @function
   *
   * @param password 
   */
  setPassword:function(password){
    if(typeof password=='string'){
      this.view.tbxPassword.text=password;
    }
  },
  /**
   * @function
   *
   */
  onFormPreShow:function(){
    debugger;
    var self=this;
    var config={};
    //for demo purpose
    this.view.LoginComponent.setUserNameAndPassword("john.doe@kony.com","kony@123");
    this.setUserName("john.doe@kony.com");
    this.setPassword("kony@123");
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
  onFormPostShow:function(){
    debugger;
    this.setUpSync();
    //this.view.LoginComponent.setUserNameAndPassword("john.doe@kony.com","kony@123");
    if(InspectionUtil.isNetworkAvailable()===true){
    }else{
      alert(app_constant.NO_NETWORK_MESSAGE);
    }
    /*var self=this;
    var config={};
    config["statusChange"]=function(isOnline){
      if(isOnline){
        self.view.loadingScreen.hide(2);
      }else{
        self.view.loadingScreen.show("offline",2);
      }
    }
    kony.net.setNetworkCallbacks(config);*/
  },
  setUpSync:function(){
    
    var options = {"deviceDbEncryptionKey" : "sample"};
    function setupSuccess(response){
      kony.application.dismissLoadingScreen();
      //alert(response);
      //this.startSync();
    }
    function setupFailure(response){
      kony.application.dismissLoadingScreen();
      alert(response.message);
    }
    try{
      //kony.application.showLoadingScreen(""," Setting up your app \nPlease wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      kony.application.showLoadingScreen("","",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
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
  doLogin:function(){
    debugger;
    var options = {};

    try{
      //options["userid"] = this.view.LoginComponent.getEmail();
      //options["password"] = this.view.LoginComponent.getPassword();
      options["userid"] = this.view.tbxUsername.text;
      options["password"] = this.view.tbxPassword.text;
      //options["loginOptions"]={};
      //options["loginOptions"]["isOfflineEnabled"]=true;
      var identitySvc = KNYMobileFabric.getIdentityService("InspCustomLogin");
      identitySvc.login(options,this._loginSuccess.bind(this,identitySvc),function(err){
        this.view.LoginComponent.resetLoading();
      }.bind(this));
      this.view.LoginComponent.setLoading();
    }catch(excp){
      debugger;
      alert("Exception occured in login: "+excp);
      kony.print("#### Exception occured while trying to login ####:"+JSON.stringify(excp));
      this.view.LoginComponent.resetLoading();
    }
  },
  _loginSuccess: function(identityService,res){
    this.view.LoginComponent.resetLoading();
    identityService.getUserAttributes(function(result) {
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
            var navObj=new kony.mvc.Navigation("frmDashBoard");
            navObj.navigate(this.userAttribute);
            //navObj.navigate([]);
          }catch(excp){
            alert(JSON.stringify(excp));
          }
        }
        else{
          try{
            var navObj=new kony.mvc.Navigation("frmInspectionCreation");
            navObj.navigate(this.userAttribute);
          }catch(excp){
            alert(JSON.stringify(excp));
          }
        }
        this.view.LoginComponent.resetLoading();

      }

    }.bind(this), function(error) {
      this.view.LoginComponent.resetLoading();
      alert("failure callback for getUserAttributes. Error :"+JSON.stringify(error));
    }.bind(this));
  },
  _loginFailure: function(response){

  }

});