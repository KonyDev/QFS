define({ 

  //Type your controller code here 
  isFreshForm:false,
  onJourney:null,
  returnJourneyId:null,
  user:null,
  /**
   * @function
   *
   * @param param 
   */
  onNavigate:function(param){ 
    debugger;
    try{
      if(typeof param=='object' && param!==null){
        this.isFreshForm=true;
        this.onJourney=param[DATA_MODEL.JOURNEY_TBL];
        this.user=param[DATA_MODEL.USER_TBL];
        this.returnJourneyId=param[JOURNEY_TBL.ONWARD_JOURNEY_ID];
      }else{
        this.isFreshForm=false;
      }
    }catch(excp){
      debugger;
    }

  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    try{
      if(this.isFreshForm===true){
        this.resetForm();
        this.populateOnJourneyDetail(this.onJourney);
        this.populateUserInfo([this.user]);
        this.setReutnJourney(this.returnJourneyId);
      }
    }catch(excp){
      debugger;
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
   * @param returnJourneyId 
   */
  setReutnJourney:function(journeyId){
    if(typeof journeyId=='number'){
      var options={};
      options["whereConditionAsAString"]=JOURNEY_TBL.ID_PK+"= '"+journeyId+"'";
      this.fetchRecords(DATA_MODEL.JOURNEY_TBL, options, null);
    }else{
      kony.print("Return journey ID not available!");
    }

  },
  /**
   * @function
   *
   * @param journeyObj 
   */
  populateOnJourneyDetail:function(journey){
    if(typeof journey=='object' && journey!==null){
      try{
        var departureDateObj;
        var arrivalDateObj;
        this.view.lblJourneyId.text=journey[JOURNEY_TBL.UF_ID];
        this.view.lblCurrentDepartureAddress.text=journey[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS];
        this.view.lblCurrentArrivalAddress.text=journey[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS];

        try{
          departureDateObj=JourneyUtil.getSqlDatetoJSDate(journey[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]);
          var departureDateString=JourneyUtil.getReadableDateString(departureDateObj);
          var departureTimeString=JourneyUtil.getTimeStringIn12HrsFromat(departureDateObj);
          this.view.lblCurrentJourneyExcpectedDepartureDateTime.text=departureDateString+" "+departureTimeString;
        }catch(excp){
          debugger;
        }
        try{
          arrivalDateObj=JourneyUtil.getSqlDatetoJSDate(journey[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
          var  arrivalDateString=JourneyUtil.getReadableDateString(arrivalDateObj);
          var  arrivalTimeString=JourneyUtil.getTimeStringIn12HrsFromat(arrivalDateObj);
          this.view.lblCurrentJourneyExpectedArribalDateTime.text=arrivalDateString+" "+arrivalTimeString;
        }catch(excp){
          debugger;
        }
        //var timeDiffInHrs=(arrivalDateObj.getTime()-departureDateObj.getTime())/(1000*60*60);
        this.view.lblTravelTime.text=JourneyUtil.getTwoDatesTimeDifference(arrivalDateObj.getTime(), departureDateObj.getTime())+
          " Hrs";
        //this.view.lblTravelTime.text=Math.ceil(timeDiffInHrs)+" Hrs";
        this.view.flxCurrentJourneyRoot.setVisibility(true);
      }catch(exp){
        debugger;
        this.view.flxCurrentJourneyRoot.setVisibility(false);
      }
      var userId=journey[JOURNEY_TBL.USER_EMP_ID_FK];
      //this.setUserDetail(userId);
    }else{
      this.view.flxCurrentJourneyRoot.setVisibility(false);
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
   * @param records 
   */
  populateReturnJourneyDetail:function(records){
    if(Array.isArray(records) && records.length>0){
      var journey=records[0];
      if(typeof journey=='object' && journey!==null){
        try{
          var departureDateObj;
          var arrivalDateObj;
          this.view.lblReturnJourneyID.text=journey[JOURNEY_TBL.UF_ID];
          this.view.lblReturnJourneyExpectedDepartureAddress.text=journey[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS];
          this.view.lblReturnJourneyExpectedArrivalAddress.text=journey[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS];

          try{
            departureDateObj=JourneyUtil.getSqlDatetoJSDate(journey[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]);
            var departureDateString=JourneyUtil.getReadableDateString(departureDateObj);
            var departureTimeString=JourneyUtil.getTimeStringIn12HrsFromat(departureDateObj);
            this.view.lblReturnJourneyExpectedDepartureDatetime.text=departureDateString+" "+departureTimeString;
          }catch(excp){
            debugger;
          }
          try{
            arrivalDateObj=JourneyUtil.getSqlDatetoJSDate(journey[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
            var  arrivalDateString=JourneyUtil.getReadableDateString(arrivalDateObj);
            var  arrivalTimeString=JourneyUtil.getTimeStringIn12HrsFromat(arrivalDateObj);
            this.view.lblRetureJourneyExpectedArivalDatetime.text=arrivalDateString+" "+arrivalTimeString;
          }catch(excp){
            debugger;
          }

          //var timeDiffInHrs=(arrivalDateObj.getTime()-departureDateObj.getTime())/(1000*60*60);
          this.view.lblExpectedTravelTime.text=JourneyUtil.getTwoDatesTimeDifference(arrivalDateObj.getTime(), departureDateObj.getTime())+
            " Hrs";

          //this.view.lblExpectedTravelTime.text=Math.ceil(timeDiffInHrs)+" Hrs";
          this.view.flxOnWardJourneyRoot.setVisibility(true);
        }catch(exp){
          debugger;
          this.view.flxOnWardJourneyRoot.setVisibility(false);
        }
      }else{
        this.view.flxOnWardJourneyRoot.setVisibility(false);
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
  },
  /**
   * @function
   *
   */
  showSlidingMenu:function(){
    this.view.flxExtra.setVisibility(true);
    this.view.slidingmenu.showHambergurMenu();
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
        case DATA_MODEL.JOURNEY_TBL:
          this.populateReturnJourneyDetail(result);
          break;
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