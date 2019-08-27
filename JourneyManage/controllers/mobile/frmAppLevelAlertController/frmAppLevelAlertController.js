define({ 

  //Type your controller code here 


  /**
   * @function
   *
   * @param param 
   */
  onNavigate:function(alertCase){
    debugger;
    debugger;
    var alertHeaderText = "Error";
    var alertHeaderMesg = "Sorry, something went wrong.";
    var noButtonText = "No";
    var yesButtonText = "Yes";
    var noButtonAction = "";
    var yesButtonAction = "";
    if(alertCase!=null && alertCase!= undefined)
    {
      kony.print("In app level alert controller, alertCase:"+alertCase);
      switch(alertCase)
      {
        case 1:
          alertHeaderText="Error";
          alertHeaderMesg="Please be Online and Retry.";
          noButtonText="Retry";
          yesButtonText="Exit";
          noButtonAction=this.noInternetStartUpRetry;
          yesButtonAction=this.exitApplication;
          break;        
      }
    }
    else
    {
      kony.print("No case was given.");
    }

    // Assigning values to form widgets
    this.view.lblAlertheader.text = alertHeaderText;
    this.view.lblMessage.text = alertHeaderMesg;
    this.view.btnNo.text = noButtonText;
    this.view.btnYes.text = yesButtonText;
    this.view.btnNo.onClick = noButtonAction;
    this.view.btnYes.onClick = yesButtonAction;
  },

  exitApplication:function(){
    kony.application.exit();
  },

  noInternetStartUpRetry:function(){
    var launchModeParams={"launchmode":1,"launchparams":{}};
    var navObj;
    navObj=new kony.mvc.Navigation("frmSplash");
    navObj.navigate(launchModeParams);
  },

});