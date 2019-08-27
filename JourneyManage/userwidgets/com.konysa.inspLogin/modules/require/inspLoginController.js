define(function() {
  constants.TOUCH_AUTH_ENABLED = "konysa_touch_auth_enabled";
  constants.IS_REMEMBER="konysa_is_remember_me";

  return {
    /**
     * @function
     *
     * @param baseConfig 
     * @param layoutConfig 
     * @param pspConfig 
     */
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      debugger;
      this._isRememberMe=false;
      this._touchIDProperty = null;
      this._userId=null;
      this._password=null;
      this.checkTouchIdSupoort();
    },
    //Logic for getters/setters of custom properties
    /**
     * @function
     *
     */
    initGettersSetters: function() {
      debugger;
      defineGetter(this, "userId", function() {
        return this._userId;
      });
      defineSetter(this, "userId", function(val) {
        this._userId = val;
        this.view.txtBoxEmail.text=val;
      });
      defineGetter(this, "password", function() {
        return this._password;
      });
      defineSetter(this, "password", function(val) {
        this._password = val;
        this.view.txtBoxPassword.text=val;
      });
      defineGetter(this, "rememberMe", function() {
        return this._isRememberMe ;
      });
      defineSetter(this, "rememberMe", function(val) {
        debugger;
        this._isRememberMe = val;
        if(val===true){
          this._isRememberMe = true;
          this.view.imgStatus.src="check_box_active.png";
        }else if(val===false){
          this._isRememberMe = false;
          this.view.imgStatus.src="check_box_inactive.png";
        }
        //this.checkTouchIdSupoort();
      });
    },
    /**
     * @function
     *
     */
    onComponnetPosthow:function(){
      debugger;
      try{
        if(kony.store.getItem(constants.IS_REMEMBER)===true){
          var userIdDictionary=this.getCredentialFromKeyChain("userId");
          var passwordDictionary=this.getCredentialFromKeyChain("password");
          if(typeof userIdDictionary=='object' && userIdDictionary!==null && 
             typeof passwordDictionary=='object' && passwordDictionary!==null){
            var userId=userIdDictionary["securedata"];
            var password=passwordDictionary["securedata"];
            this._userId=userId;
            this._password=password;
            this.view.txtBoxEmail.text=userId;
            this.view.txtBoxPassword.text=password;
            this.view.imgStatus.src="check_box_active.png";
            //this.hideTouchAuthScreen();
            //this.invokeLoginService(userId, password,isTouchAuthentication);
            //this.invokeLoginService(userId, password,true);
          }
        }else if(kony.store.getItem(constants.IS_REMEMBER)===false){
          this.view.imgStatus.src="check_box_inactive.png";
          this.view.txtBoxEmail.text="";
          this.view.txtBoxPassword.text="";
          this.animateLabelDown("lblEmail");
          this.view.flxEmailEnabler.setVisibility(true);
          this.animateLabelDown("lblPassword");
          this.view.flxPasswordEnabler.setVisibility(true);
          this.view.forceLayout();
        }
        if(typeof this._userId=='string' && this._userId.length>0){
          this.enableEmail();
        }
        if(typeof this._password=='string' && this._password.length>0 ){
          this.enablePassword();
        }
        if(this._isRememberMe===true){
          this.setUserCredential();
        }else{
          //clear text box;
          this.clearUserCredential();
        }
      }catch(excp){
        debugger;
      }
      this.view.btnSubmit.setFocus(true);

    },
    /**
     * @function
     *
     */
    setUserCredential:function(){

    },
    /**
     * @function
     *
     */
    clearUserCredential:function(){

    },
    /**
     * @function
     *
     */
    validateCredential:function(userId,password){
      var isValid=false;
      try{
        if(typeof userId=='string' && typeof password=='string'){
          userId=userId.trim();
          password=password.trim();
          //this.view.txtBoxEmail.text=userId;
          //this.view.txtBoxPassword.text=password;
          if(userId.length>0 && password.length>0){
            isValid=true;
          }else{
            isValid=false;
          }
        }
      }catch(excp){
        debugger;
        isValid=false;
        throw excp;
      }
      return isValid;
    },
    /**
     * @function
     *
     * @param result 
     */
    invokeFailureCallback:function(result){
      if(typeof this.failureCallback=='function'){
        try{
          this.failureCallback(result);
        }catch(excp){
          debugger;
          throw excp;
        }

      }
    },
    /**
   * @function
   *
   */
    doLogin:function(){
      debugger;
      try{
        this.view.btnSubmit.setFocus(true);
        var userId=this.view.txtBoxEmail.text;
        var password=this.view.txtBoxPassword.text;
        if(this.validateCredential(userId, password)){
          this.invokeLoginService(userId, password,false);
        }else if(this.validateCredential(this._userId,this._password) ){
          this.invokeLoginService(this._userId,this._password,false);
        }
      }catch(excp){
        debugger;
        kony.application.dismissLoadingScreen();
        //alert("Exception occured in login: "+excp);
        this.invokeFailureCallback(excp);
        kony.print("#### Exception occured while trying to login ####:"+JSON.stringify(excp));
      }
    },
    /**
     * @function
     *
     */
    loginWithTouchId:function(){
      debugger;
      try{
        var touchAuthEnablementStatus=kony.store.getItem(constants.TOUCH_AUTH_ENABLED);
        if(touchAuthEnablementStatus===true){
          this.invokeTouchIdAuth();
        }else{
          //touch authentication not enabled.
          this.notifyUserToEnableTouchAuth();
        }
      }catch(excp){
        debugger;
      }

    },
    /**
     * @function
     *
     */
    invokeTouchIdAuth:function(){
      try {
        var errorObj = {};
        var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
        if (status == "5000") {
          var configMap = {
            "promptMessage": "Swipe your finger"
          };
          kony.localAuthentication.authenticate(
            constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID,
            this.touchAuthenticationCallback.bind(this),
            configMap);
          this.showTouchAuthScreen();
        } else if (status == 5007) {
          alert("Authentication does not start because Touch ID has no enrolled fingerprints");
          //errorObj = new konymp.logger.errorObject(90008, "Authentication does not start because Touch ID has no enrolled fingerprints");
          //this.onErrorCallback(errorObj.getErrorObject());
        } else if (status == 5005) {
          //errorObj = new konymp.logger.errorObject(90009, "Authentication does not start because the passcode is not set on the device");
          //this.onErrorCallback(errorObj.getErrorObject());
        } else {
          //errorObj = new konymp.logger.errorObject(90007, "Touch ID not supported");
          //this.onErrorCallback(errorObj.getErrorObject());
        }
      } catch (exception) {
        debugger;
        //konymp.logger.error("Catch  in authenticateThroughTouch : " + JSON.stringify(exception), konymp.logger.EXCEPTION);
        /*if (exception.type === "CUSTOM") {
          throw exception;
        }*/
      }
    },
    /**
     * @function
     *
     */
    getCredentialFromKeyChain:function(identifier){
      var credDictionary=null;
      try{
        if(identifier!==null && identifier!==undefined){
          var cred={"identifier":identifier};
          credDictionary=kony.keychain.retrieve(cred);
        }else{
          credDictionary=null;
        }
      }catch(excp){
        debugger;
        throw excp;
      }
      return credDictionary;
    },
    /**
         * @function touchAuthenticationCallback
         * @description Callback function for invokeTouch ID
         * @private
         * @param {Object} code
         * @callback invokeTouchIDCallback
         * @event loginSuccessEvent
         */
    touchAuthenticationCallback: function(code) {
      debugger;
      try {
        if (code == 5000) {
          this.view.lblTouchAuthFailureMsg.setVisibility(false);
          this.loginWithStoredCredential();
          /*if (this.loginSuccessEvent !== null && this.loginSuccessEvent !== undefined) {
            konymp.logger.info("Invoking Login Success event");
            this.loginSuccessEvent();
          } else {
            var errorObj = new konymp.logger.errorObject(90003, constants.LOGIN_SUCCESS_EVENT_MISSING_MESSAGE);
            if (this.onErrorCallback !== null && this.onErrorCallback !== undefined) {
              this.onErrorCallback(errorObj.getErrorObject());
            } else {
              throw {
                "type": "CUSTOM",
                "message": "onErrorCallback is not defined"
              };
            }
          }*/
        } else if (code == 5001) {
          this.view.lblTouchAuthFailureMsg.setVisibility(true);
          //konymp.logger.trace("---------------User Failed to validate fingerprint---------------", konymp.logger.DEFAULT);
        } else if (code == 5002) {
          //konymp.logger.trace("---------------Authentication is canceled by a user---------------", konymp.logger.DEFAULT);
          this.hideTouchAuthScreen();
        } else if (code == 5004) {
          //konymp.logger.trace("---------------Authentication is canceled by system---------------", konymp.logger.DEFAULT);
          //this.view.lblTouchMessage.text = "Too many attempts. Try again later";
        } else if (code == 5003) {
          //konymp.logger.trace("---------------Authentication is canceled because a user taps the fallback button ---------------", konymp.logger.DEFAULT);
        }
      } catch (exception) {
        debugger;
        //konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
        if (exception.type === "CUSTOM") {
          throw exception;
        }
      }
      //konymp.logger.trace("---------------Exiting touchAuthenticationCallback function---------------", konymp.logger.FUNCTION_EXIT);
    },
    /**
     * @function
     *
     */
    loginWithStoredCredential:function(){
      debugger;
      try{
        var userIdDictionary=this.getCredentialFromKeyChain("userId");
        var passwordDictionary=this.getCredentialFromKeyChain("password");
        if(typeof userIdDictionary=='object' && userIdDictionary!==null && 
           typeof passwordDictionary=='object' && passwordDictionary!==null){
          var userId=userIdDictionary["securedata"];
          var password=passwordDictionary["securedata"];
          this.hideTouchAuthScreen();
          //this.invokeLoginService(userId, password,isTouchAuthentication);
          this.invokeLoginService(userId, password,true);
        }
      }catch(excp){
        debugger;
      }
    },
    /**
     * @function
     *
     */
    isSameUser:function(){
      debugger;
      var flag=false;
      try{
        var userIdDictionary=this.getCredentialFromKeyChain("userId");
        var passwordDictionary=this.getCredentialFromKeyChain("password");
        if(typeof userIdDictionary=='object' && userIdDictionary!==null && 
           typeof passwordDictionary=='object' && passwordDictionary!==null){
          var userId=userIdDictionary["securedata"];
          var password=passwordDictionary["securedata"];
          if(this._userId==userId&&this._password==password){
            flag=true;
          }else{
            flag=false;
          }
        }
      }catch(excp){
        debugger;
        flag=false;
      }
      return flag;
    },
    /**
     * @function
     *
     */
    showTouchAuthScreen:function(){
      this.view.flxTouchScreen.animate(
        kony.ui.createAnimation({100:{top:"0%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.30},
        {animationEnd: function() {
        } 
        });
    },
    /**
         * @function cancelTouchAuth
         * @description Action associated with cancel button of Touch ID popup
         * @private
         */
    cancelTouchAuth: function() {
      try {
        debugger;
        if(kony.os.deviceInfo().name=="android"){
          kony.localAuthentication.cancelAuthentication();
        }
        this.hideTouchAuthScreen();
      } catch (exception) {
        debugger;
      }
    },
    /**
     * @function
     *
     */
    hideTouchAuthScreen:function(){
      this.view.lblTouchAuthFailureMsg.setVisibility(false);
      this.view.flxTouchScreen.animate(
        kony.ui.createAnimation({100:{top:"100%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.30},
        {animationEnd: function() {
        } 
        });
      this.view.forceLayout();
    },
    /**
     * @function
     *
     */
    notifyUserToEnableTouchAuth:function(){
      this.view.flxTouchIDPopup.setVisibility(true);
      this.view.flxPopups.setVisibility(true);
      this.view.forceLayout();
    },
    /**
     * @function
     *
     */
    dismissTouchAuthEnablementMsg:function(){
      this.view.flxPopups.setVisibility(false);
      this.view.flxTouchIDPopup.setVisibility(false);
      this.view.forceLayout();
    },
    /**
     * @function
     *
     * @param userId 
     * @param password 
     */
    invokeLoginService:function(userId,password,isTouchAuthentication){
      try{
        if(this.validateCredential(userId,password)===true){
          var options = {};
          this._userId=userId;
          this._password=password;
          options["userid"] = userId;
          options["password"] = password;
          options["loginOptions"]={};
          //options["loginOptions"]["isOfflineEnabled"]=true;
          //options["loginOptions"]["persistLoginResponse"]=true;
          /*//var isInPreviewApp;
          var fpApp=kony.store.getItem("fpapp");
          if(fpApp!==undefined && fpApp!==null){
            //App is running in preview app.
            if(!kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
              var resultObj=kony.store.getItem("USER_ATTRIBUTE");
              if(typeof resultObj=='object' && resultObj!==null){
                //Last login response stored in kony store
                if(typeof this.getUserAttributeSuccess=='function'){
                  this.getUserAttributeSuccess(resultObj);
                  return;
                }
              }else{
                alert("Please check the network connection");
              }
            }else{
              //do normal login
            }
          }else{
            //App is running in normal build.
            options["loginOptions"]={};
            options["loginOptions"]["isOfflineEnabled"]=true;
          }*/

          kony.application.showLoadingScreen("","please wait..",
                                             constants.LOADING_SCREEN_POSITION_ONLY_CENTER, 
                                             true,true,null);
          var identitySvc = KNYMobileFabric.getIdentityService("InspCustomLogin");
          identitySvc.login(options,this._loginSuccess.bind(this,identitySvc,isTouchAuthentication),function(err){
            debugger;
            kony.application.dismissLoadingScreen();
            this.invokeFailureCallback(err);
          }.bind(this));
        }else{
          alert("Invalid Username or Password");
        }
      }catch(excp){
        debugger;
        kony.application.dismissLoadingScreen();
        throw excp;
      }

    },
    _loginSuccess: function(identityService,isTouchAuthentication,res){
      //kony.application.dismissLoadingScreen();
      if(typeof this.loginSuccess=='function'){
        this.loginSuccess(res);
      }
      identityService.getUserAttributes(function(result) {
        debugger;
        kony.store.setItem("USER_ATTRIBUTE", result);
        kony.application.dismissLoadingScreen();
        if(isTouchAuthentication===true){
          //this.dismissTouchEnablement(result);
          if(typeof this.getUserAttributeSuccess=='function'){
            this.getUserAttributeSuccess(result);
          }
          return;
        }
        if(this._touchIDProperty===true){
          if(this.isSameUser()===false){
            this.promptForTouchIdEnablement(result);
          }else{
            if(this._isRememberMe===true && kony.store.getItem(constants.IS_REMEMBER)!==true){
              this.storeCredentialsInKeyChain(this._userId , this._password,result);
              kony.store.setItem(constants.IS_REMEMBER, true);
            }else{
              if(typeof this.getUserAttributeSuccess=='function'){
                this.getUserAttributeSuccess(result);
              }
              //Don't remember the user credential.
            }
          }
        }else{
          if(this._isRememberMe===true && kony.store.getItem(constants.IS_REMEMBER)!==true){
            this.storeCredentialsInKeyChain(this._userId , this._password,result);
            kony.store.setItem(constants.IS_REMEMBER, true);
          }else{
            if(typeof this.getUserAttributeSuccess=='function'){
              this.getUserAttributeSuccess(result);
            }
            //Don't remember the user credential.
          }
        }



        /*if(this._touchIDProperty===true && this.isSameUser()===false){
          this.promptForTouchIdEnablement(result);
        }else{
          //touch id not supported.
        }
        if(this._isRememberMe===true){
          this.storeCredentialsInKeyChain(this._userId , this._password,result);
          kony.store.setItem(constants.IS_REMEMBER, true);
        }else{
          kony.store.setItem(constants.IS_REMEMBER, false);
          //Don't remember the user credential.
        }*/

      }.bind(this), function(error) {
        kony.application.dismissLoadingScreen();
        this.invokeFailureCallback(error);
      }.bind(this));
    },
    /**
     * @function
     *
     */
    promptForTouchIdEnablement:function(result){
      this.view.flxEnableTouchIDPopup.setVisibility(true);
      this.view.flxPopups.setVisibility(true);
      this.view.forceLayout();
      this.view.btnEnable.onClick=this.enableTouchId.bind(this,result);
      this.view.btnCancel.onClick=this.cancelTouchAuthEnablement.bind(this,result);
      if(this._isRememberMe===true && kony.store.getItem(constants.IS_REMEMBER)!==true){
        this.storeCredentialsInKeyChain(this._userId , this._password,result);
        kony.store.setItem(constants.IS_REMEMBER, true);
      }else{
        kony.store.setItem(constants.IS_REMEMBER, false);
        //Don't remember the user credential.
      }
    },

    /**
     * @function
     *
     * @param result 
     */
    cancelTouchAuthEnablement:function(result){
      try{
        kony.store.setItem(constants.TOUCH_AUTH_ENABLED, false);
        //kony.store.setItem(constants.TOUCH_AUTH_ENABLED, true);
        this.dismissTouchEnablement(result);
      }catch(excp){
        debugger;
      }

    },
    /**
       * @function
       *
       */
    enableTouchId:function(result){
      try{
        kony.store.setItem(constants.TOUCH_AUTH_ENABLED, true);
        this.storeCredentialsInKeyChain(this._userId ,this._password , result);
        this.dismissTouchEnablement(result);
      }catch(excp){
        //kony.store.setItem(constants.TOUCH_AUTH_ENABLED, false);
        debugger;
      }

    },
    /**
     * @function
     *
     * @param userId 
     * @param credential 
     */
    storeCredentialsInKeyChain:function(userId,password,result){
      try{
        var userIdObj={};
        var passwordObj={};

        userIdObj["identifier"]="userId";
        userIdObj["securedata"]=userId;
        passwordObj["identifier"]="password";
        passwordObj["securedata"]=password;
		var appId=appConfig.appId;
        if(kony.os.deviceInfo().name=="iPhone"){
          //appCon
          userIdObj["secureaccount"]="JouUser";
          passwordObj["secureaccount"]="inspectionPassword";
        }
        var statusUserIdObj=kony.keychain.save(userIdObj);
        var statuspasswordObj=kony.keychain.save(passwordObj);
        if(statusUserIdObj!=0 && statuspasswordObj!=0 ){
          //unable to store data in keychain
          debugger;
          // throw {"message":"Unable to store data in keychain","status":parseInt(statusUserIdObj)}
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
    dismissTouchEnablement:function(result){
      this.dismissPromptForTouchEnablement();
      if(typeof this.getUserAttributeSuccess=='function'){
        this.getUserAttributeSuccess(result);
      }
    },
    /**
     * @function
     *
     */
    dismissPromptForTouchEnablement:function(){
      this.view.flxPopups.setVisibility(false);
      this.view.flxEnableTouchIDPopup.setVisibility(false);
      this.view.flxTouchIDPopup.setVisibility(false);
      this.view.forceLayout();
    },
    /**
     * @function
     *
     * @param response 
     */
    _loginFailure: function(response){
      kony.application.dismissLoadingScreen();
      this.invokeFailureCallback(response);
    },
    /**
   * @function
   *
   */
    setRememberOption:function(){
      this.view.flxRememberMe.setFocus(true);
      if(this._isRememberMe===null||this._isRememberMe===undefined){
        this._isRememberMe=false;
        this.view.imgStatus.src="check_box_inactive.png";
      }else if(this._isRememberMe===true){
        this._isRememberMe=false;
        this.view.imgStatus.src="check_box_inactive.png";
      }else if(this._isRememberMe===false){
        this._isRememberMe=true;
        this.view.imgStatus.src="check_box_active.png";
      }
    },
    /**
   * @function
   *
   */
    onTextInputDone:function(txtBoxId){
      try{
        var inputText=this.view[txtBoxId].text;
        if(typeof inputText=='string'){
          inputText=inputText.trim();
          this.view[txtBoxId].text=inputText;
          if(inputText.length==0){
            this.view[txtBoxId].setVisibility(false);
            switch(txtBoxId){
              case "txtBoxEmail":
                this.animateLabelDown("lblEmail");
                this.view.flxEmailEnabler.setVisibility(true);
                break;
              case "txtBoxPassword":
                this.animateLabelDown("lblPassword");
                this.view.flxPasswordEnabler.setVisibility(true);
            }
          }
        }
      }catch(excp){
        kony.print("Exception occured: "+JSON.stringify(excp));
        debugger;
      }
    },
    /**
   * @function
   *
   * @param labelId 
   */
    animateLabelDown:function(labelId){
      try{
        var self=this;
        self.view[labelId].animate(
          kony.ui.createAnimation({100:{bottom:"0dp","stepConfig":{}}}),
          {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.30},
          {animationEnd: function() {
            self.view[labelId].skin="sknLblFont939393Size110";
          } 
          });
      }catch(excp){
        debugger;
        throw excp;
      }
    },
    /**
   * @function
   *
   * @param labelId 
   */
    enableTextBox:function(enablerFlex){
      try{
        switch(enablerFlex){
          case "flxEmailEnabler":
            this.view.txtBoxEmail.text="";
            this.enableEmail();
            break;
          case"flxPasswordEnabler":
            this.view.txtBoxPassword.text="";
            this.enablePassword();
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
    enableEmail:function(){
      this.animateLabelUp("lblEmail");
      this.view.txtBoxEmail.setVisibility(true);
      this.view.flxEmailEnabler.setVisibility(false);
      //this.view.txtBoxEmail.setFocus(true);
      this.view.forceLayout();
    },
    /**
   * @function
   *
   */
    enablePassword:function(){
      this.animateLabelUp("lblPassword");
      this.view.txtBoxPassword.setVisibility(true);
      this.view.flxPasswordEnabler.setVisibility(false);
      //this.view.txtBoxPassword.setFocus(true);
      this.view.forceLayout();
    },
    /**
         * @function checkTouchIdSupoort
         * @description validates username and password
         * @private
         */
    checkTouchIdSupoort: function() {
      try {
        if(kony.os.deviceInfo().name=="android"|| kony.os.deviceInfo().name=="iPhone"){
          var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
          if (parseInt(status)!==5006 && parseInt(status)!==5008 ) {
            this._touchIDProperty = true;
            this.view.flxTouchId.isVisible = true;
          } else {
            this._touchIDProperty = false;
            this.view.flxTouchId.isVisible = false;
          }
        }else{
          this._touchIDProperty = false;
          this.view.flxTouchId.isVisible = false;
        }
      } catch (exception) {
        //  konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
        if (exception.type === "CUSTOM") {
          throw exception;
        }
      }
      // konymp.logger.trace("---------------Exiting checkTouchIdSupoort function---------------", konymp.logger.FUNCTION_ENTRY);
    },
    /**
   * @function
   *
   * @param textBoxId 
   */
    animateLabelUp:function(labelId){
      try{
        this.view[labelId].skin="sknLblFont939393Size95";
        this.view[labelId].animate(
          kony.ui.createAnimation({100:{bottom:"25dp","stepConfig":{}}}),
          {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.30},
          {animationEnd: function() {
          } 
          });
      }catch(excp){
        debugger;
        throw excp;
      }
    }
  };
});