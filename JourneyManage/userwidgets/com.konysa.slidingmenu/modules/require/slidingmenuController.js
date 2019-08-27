define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    USER_TBL:{
      "USER_EMP_ID_PK":"user_emp_id_pk",
      "USER_EMAIL_ID":"user_email_id",
      "USER_FIRSTNAME":"user_firstname",
      "USER_LASTNAME":"user_lastname",
      "USER_PHONE1":"user_phone1",
      "COUNTRY_ID_FK":"country_id_fk",
      "REGION_ID_FK":"region_id_fk",
      "LANGUAGE_ID_FK":"language_id_fk",
      "GROUP_ID_FK":"group_id_fk"
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    setUserInfo(user){
      if(typeof user=='object' && user!==null){
        var firstName=user[this.USER_TBL.USER_FIRSTNAME];
        var lastName=user[this.USER_TBL.USER_LASTNAME];
        var emailId=user[this.USER_TBL.USER_EMAIL_ID];
        var initials="";
        if(typeof firstName=='string' && firstName.length>0){
          initials=firstName.charAt(0).toUpperCase();
        }else firstName="";
        if(typeof lastName=='string' && lastName.length>0){
          initials=initials+lastName.charAt(0).toUpperCase();
        }else lastName="";
        this.view.lblUserIcon.text=initials;
        this.view.lblUserName.text=firstName+" "+lastName;
        if(typeof emailId=='string'){
          this.view.lblUserEmail.text=emailId;
        }else{
          this.view.lblUserEmail.text='';
        }
      }
    },
    _onJourneyClick:function(){
      if(typeof this.onJourneyClick=='function'){
        this.onJourneyClick();
      }
      this.hideHambergurMenu();
    },
    _onLiveJourneyClick:function(){
      if(typeof this.onLiveJourneyClick=='function'){
        this.onLiveJourneyClick();
      }
      this.hideHambergurMenu();
    },
    _onNewJourneyClick:function(){
      if(typeof this.onNewJourneyClick=='function'){
        this.onNewJourneyClick();
      }
      this.hideHambergurMenu();
    },
    _onGuidesAndManualClick:function(){
      if(typeof this.onGuideManualsClick=='function'){
        this.onGuideManualsClick();
      }
      this.hideHambergurMenu();
    },
    _onMyAccountClick:function(){
      if(typeof this.onMyAccountClick=='function'){
        this.onMyAccountClick();
      }
      this.hideHambergurMenu();
    },
    _onSyncClick:function(){
      if(typeof this.onSyncClick=='function'){
        this.onSyncClick();
      }
      this.hideHambergurMenu();
    },
    _onSettingClick:function(){
      if(typeof this.onSettingClick=='function'){
        this.onSettingClick();
      }
      this.hideHambergurMenu();
    },
    _onLogOutClick:function(){
      if(typeof this.onLogoutClick=='function'){
        this.onLogoutClick();
      }
      this.hideHambergurMenu();
    },
    /**
     * @function
     *
     */
    onPostShow:function(){
      //this.view.flxScHamburgerMenu.scrollToEnd();
    },
    /**
     * @function
     *
     */
    showHambergurMenu:function(){
      //debugger;
      var self=this;
      this.view.flxSideBar.animate(
        kony.ui.createAnimation({100:{left:"0%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.2},
        {animationEnd: function() {
          self.view.flxSidebarClicker.setVisibility(true);
        } 
        });
      
    },
    /**
     * @function
     *
     */
    hideHambergurMenu:function(){
      //debugger;
      var self=this;
      this.view.flxSideBar.animate(
        kony.ui.createAnimation({100:{left:"-70%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.2},
        {animationEnd: function() {
          if(typeof self.onHamburgerMenuHide=='function'){
            self.onHamburgerMenuHide();
          }
        } 
        });
      self.view.flxSidebarClicker.setVisibility(false);
    }
  };
});