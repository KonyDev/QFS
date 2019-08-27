define({ 

  //Type your controller code here 
  /**
   * @function
   *
   */
  startJourney:function(){
    var journeyId=this.view.txtJourneyId.text;
    if(typeof journeyId=='string' || typeof journeyId=='number'){
      var params={};
      params[JOURNEY_TBL.ID_PK]=journeyId;
      var nav=new kony.mvc.Navigation("BeginJourney/BeginJourney");
      //var nav=new kony.mvc.Navigation("EmergencyGroup/frmEmergencyRequest");
      try{
        nav.navigate(params);
      }catch(excp){
        debugger;
      }
    }
  },
  returnJourney:function(){
    var params={};
    params[DATA_MODEL.JOURNEY_TBL]=journey141;
    var nav=new kony.mvc.Navigation("ReturnJourneyGroup/frmReturnJourney");
    //var nav=new kony.mvc.Navigation("EmergencyGroup/frmEmergencyRequest");
    try{
      nav.navigate(params);
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  showHamburgerMenu:function(){
    debugger;
    this.view.flxExtra.setVisibility(true);
    this.view.slidingmenu.showHambergurMenu();
  },
  /**
   * @function
   *
   */
  _onHambergurMenuHide:function(){
    debugger;
    this.view.flxExtra.setVisibility(false);
  },


});