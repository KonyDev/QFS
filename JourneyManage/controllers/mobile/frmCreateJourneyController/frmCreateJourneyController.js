define({ 

  //Type your controller code here 
  navigationData:null,
  isFreshForm:true,
  journey:null,
  user:null,
  /**
   * @function
   *
   * @param param 
   */
  onNavigate:function(param){
    kony.application.dismissLoadingScreen();
    debugger;
    if(typeof param=='object' && param!==null){
      this.navigationData=param;
      this.isFreshForm=true;
    }else{
      this.isFreshForm=false;
    }
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    if(this.isFreshForm===true){
      try{
        this.resetForm();
        var departureDateObj;
        var arrivalDateObj;
        var journey=this.navigationData["journey"];
        this.journey=journey;
        this.view.lblDepartureAddress.text=journey[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS];
        this.view.lblArrivalAddress.text=journey[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS];
        //this.view.lblDepartureDateTime.text=DateConversion(new Date(journey[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]));
        //this.view.lblArribalDateTime.text=DateConversion(new Date(journey[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]));
        this.view.lblJourneyId.text=journey[JOURNEY_TBL.UF_ID];
        var userId=journey[JOURNEY_TBL.USER_EMP_ID_FK];
        if(typeof this.navigationData == 'object' && this.navigationData!==null){
          this.user =  this.navigationData[DATA_MODEL.USER_TBL];
          if(typeof this.user == 'object' && this.user !==null){
            this.populateUserInfo([this.user]);
          }
        }
        //this.setUserDetail(userId);
         try{
           departureDateObj=JourneyUtil.getSqlDatetoJSDate(journey[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]);
           var departureDateString=JourneyUtil.getReadableDateString(departureDateObj);
           var departureTimeString=JourneyUtil.getTimeStringIn12HrsFromat(departureDateObj);
           this.view.lblDepartureDateTime.text=departureDateString+" "+departureTimeString;
         }catch(excp){
           debugger;
         }
         try{
           arrivalDateObj=JourneyUtil.getSqlDatetoJSDate(journey[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
           var  arrivalDateString=JourneyUtil.getReadableDateString(arrivalDateObj);
           var  arrivalTimeString=JourneyUtil.getTimeStringIn12HrsFromat(arrivalDateObj);
           this.view.lblArribalDateTime.text=arrivalDateString+" "+arrivalTimeString;
         }catch(excp){
           debugger;
         }
        //var timeDiffInHrs = (arrivalDateObj.getTime() - departureDateObj.getTime()) / (1000 * 60 * 60);
        //this.view.lblTravelTime.text=(Math.round(timeDiffInHrs*100))/100+" Hrs";
        this.view.lblTravelTime.text = JourneyUtil.getTwoDatesTimeDifference(arrivalDateObj.getTime(), departureDateObj.getTime())+
          " Hrs";

      }catch(exp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   * @param userId 
   */
  setUserDetail:function(userId){
    if(typeof userId=='number' || typeof userId=='string'){
      var options={};
      options["whereConditionAsAString"]=USER_TBL.USER_EMP_ID_PK+"= '"+userId+"'";
      this.fetchRecords(DATA_MODEL.USER_TBL, options, null);
    }else{
      kony.print("Return journey ID not available!");
    }
  },
  /**
   * @function
   *
   */
  proceedToNextNavigate:function(formName){
    try{
      var ntf = new kony.mvc.Navigation(formName);
      ntf.navigate();
    }catch(excp){
      debugger;
    }
  },
  returnJourney:function(){
    if(JourneyUtil.checkOnlineAndLoggedIn())
    {
      var params={};
      params[DATA_MODEL.JOURNEY_TBL]=this.journey;
      params[DATA_MODEL.USER_TBL]=this.user;
      var nav=new kony.mvc.Navigation("ReturnJourneyGroup/frmReturnJourney");
      try{
        nav.navigate(params);
      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  populateUserInfo:function(result){
    if(Array.isArray(result) && result.length>0){
      try{
        this.view.slidingmenu.setUserInfo(result[0]);
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
  onHamburgerMenuClick:function(){
    this.showSlidingMenu();
  },
  /**
   * @function
   *
   */
  hideSlidingMenu:function(){
    this.view.flxExtra.setVisibility(false);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  showSlidingMenu:function(){
    this.view.flxExtra.setVisibility(true);
    this.view.slidingmenu.showHambergurMenu();
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  resetForm:function(){
    this.hideSlidingMenu();
  },
  /**
   * @function
   *
   * @param frmName 
   */
  navigateToForm:function(frmName){
    try{
      var ntf = new kony.mvc.Navigation(frmName);
      ntf.navigate();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _recordFetchSuccess:function(dataModel,info,result){
    debugger;
    try{
      switch(dataModel){
        case DATA_MODEL.USER_TBL:
          this.populateUserInfo(result);
          break;
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _recordFetchFailure:function(dataModel,result){
    debugger;
  },
  /**
   * @function
   * @param dataModel 
   * @param options 
   */
  fetchRecords:function(dataModel,options,info){
    debugger;
    try{
      if(typeof options!=='object'){
        options=null;
      }
      var knyObject=new kony.sdk.KNYObj(dataModel);
      knyObject.get(options,this._recordFetchSuccess.bind(this,dataModel,info),this._recordFetchFailure.bind(this,dataModel));
    }catch(excp){
      debugger;
      throw excp;
    }
  },

});