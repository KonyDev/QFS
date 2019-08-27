define({ 

  onClickForgotPassword:function()
  {
    this.view.flxForgotPassword.isVisible = true;
    this.view.flxWelcomScreen.isVisible = false;
  },
  onClickPasswordChangeSubmit:function()
  {
    this.view.flxForgotPassword.isVisible = false;
    this.view.flxPasswordChangedPopup.isVisible = true;
  },
  onClickPasswordChangeCancel:function()
  {
    this.view.flxWelcomScreen.isVisible = true;
    this.view.flxForgotPassword.isVisible = false;
    this.view.flxPasswordChangedPopup.isVisible = false;
  },
  onClickBtnSignIn:function()
  {
    this.view.flxPersonalAndVehicleDetails.isVisible = true;
    this.view.flxWelcomScreen.isVisible = false;
    this.view.flxForgotPassword.isVisible = false;
    this.view.flxPasswordChangedPopup.isVisible = false;
  },
  onClickPersonDetailsPopup:function()
  {
    this.view.flxWelcomScreen.isVisible = false;
    this.view.flxForgotPassword.isVisible = false;
    this.view.flxPasswordChangedPopup.isVisible = false;
    this.view.flxPersonalAndVehicleDetails.isVisible = true;
    this.view.flxPersonalAndVehicleDetailsSuccessPopup.isVisible = true;
  },onClickPassChangePopup:function()
  {
    this.view.flxPersonalAndVehicleDetails.isVisible = false;
    this.view.flxWelcomScreen.isVisible = true;
    this.view.flxForgotPassword.isVisible = false;
    this.view.flxPasswordChangedPopup.isVisible = false;
    this.view.flxPersonalAndVehicleDetailsSuccessPopup.isVisible = false;
  },
  onClickPersonDetails:function()
  {
     this.view.flxPersonalAndVehicleDetails.isVisible = true;
    this.view.flxWelcomScreen.isVisible = false;
    this.view.flxForgotPassword.isVisible = false;
    this.view.flxPasswordChangedPopup.isVisible = false;
    this.view.flxPersonalAndVehicleDetailsSuccessPopup.isVisible = true;
  }
});