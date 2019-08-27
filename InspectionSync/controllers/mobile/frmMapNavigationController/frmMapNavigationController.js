define({ 

  //Type your controller code here 
  onNavigate:function(locationObj){
    debugger;
    if(typeof locationObj=='object' && locationObj!=null){
      this.origin =locationObj["origin"];
      this.destination=locationObj["destination"];
      this.view.navigator2.setDestination(this.destination);
      this.setAssetRepresenter(locationObj["representer"]);
      this.setCheckInTime(locationObj["Assigned_Timestamp"]);
      //this.drawCircle(this.destination);
      //this.resetForm();
    }
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    this.view.navigator2.trackLocation();
  },
  /**
   * @function
   *
   * @param checkInTime 
   */
  setCheckInTime:function(checkInTime){
    if(typeof checkInTime=='string'){
      this.view.navigator2.setCheckInTime(checkInTime);
    }
  },
  /**
   * @function
   *
   * @param assetRepresenter 
   */
  setAssetRepresenter:function(assetRepresenter){
    if(typeof assetRepresenter=='object' && assetRepresenter!==null){
      if(typeof assetRepresenter["Contact_Name"]=='string'){
        this.view.navigator2.setName(assetRepresenter["Contact_Name"]);
      }
      if(typeof assetRepresenter["Contact_Number"]=='string'){
        this.view.navigator2.setphoneNumber(assetRepresenter["Contact_Number"]);
      }
    }
  },
  /**
   * @function
   *
   * @param param 
   */
  checkInCallBack:function(param,isInSimulationMode){
    debugger;
    var checkInObj={};
    checkInObj["isForcedCheckIn"]=false;
    checkInObj["dateTime"]=param;
    checkInObj["isInSimulationMode"]=isInSimulationMode;
    checkInObj["previousForm"]="frmMapNavigation";
    this.view.navigator2.clearWatch();
    this.navigateToExecutionForm(checkInObj);
  },
  /**
   * @function
   *
   * @param param 
   */
  forcedCheckinCallBack:function(param){
    debugger;
    var checkInObj={};
    checkInObj["isForcedCheckIn"]=true;
    checkInObj["dateTime"]=param;
    this.view.navigator2.clearWatch();
    this.navigateToExecutionForm(checkInObj);
  },
  /**
   * @function
   *
   */
  navigateToExecutionForm:function(param){
    try{
      var navObj=new kony.mvc.Navigation("frmInspectionExecution");
      this.view.navigator2.resetComponent();
      if(param===undefined){
        navObj.navigate();
      }else{
        navObj.navigate(param);
      }

    }catch(excp){
      debugger;

    }
  },

});