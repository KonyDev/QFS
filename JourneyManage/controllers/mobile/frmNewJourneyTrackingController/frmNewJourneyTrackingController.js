define({ 

  journey:null,
  passengerList:null,
  user:null,
  isEdit: false,
  isEditDetails: {},
  selectedTrackingPointId:null,
  selectedJourneyReasonId:null,
  isFreshForm:false,
  TrackingDetails:{},
  isUpdate:false,
  isToChangeSelected:false,
  selectedKey:"",
  resetFormData:null,
  PROGRESS_STATUS:{
    "TRACKINGPOINT_SELECTION":0,
    "JOURNEY_REASON_SELECTION":1
  },
  status:0,
  /**
   * @function
   *
   * @param param 
   */
  resetData:function()
  {
    this.view.SupervisorCampRoomNumber.text = "";
    this.view.supervisiorName.text = "";
    this.view.SupervisorPhone.text = "";
  },
  onNavigate:function(param){
    //this.resetData();
    debugger;
    this.isUpdate = false;
    this.view.lblCenterText.text = "Create New Journey";
    if(param!==undefined && param!== null && param.isUpdate)
    {
      //Initial Setup
      this.view.lblCenterText.text = "Update Journey";
      //Setting the visibility of the UI
      this.view.flxTracking1.isVisible = true;
      this.view.flxTracking2.isVisible = false;

      //Set Selected Index for the Segment
      this.isToChangeSelected = true;
      this.TrackingDetails = param.TrackingDetails;
      var TrackingPointId = this.TrackingDetails.journey_tracking_point_id_fk;
      try
      {
        var TrackingName = 
            (GetResponseFromDatabaseWhereClause(TRACKING_POINTS_TBL_GLOBAL, 
                                                TRACKING_POINTS_TBL.TRACKING_POINT_ID, 
                                                TrackingPointId)[0])[TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS];
        this.selectedKey = TrackingName;
      }
      catch(err)
      {

      }
      this.isUpdate = param.isUpdate;
      return;
    }
    if(param!==undefined && param!== null && param.isEdit)
    {
      this.view.lblCenterText.text = "Update Journey";
      this.isEditDetails = param.JourneyDetails;
      this.isEdit = param.isEdit;
    }
    if(typeof param=='object' && param!==null){
      this.journey=param["journey"];
      this.passengerList=param["passengerList"];
      this.user=param[DATA_MODEL.USER_TBL];
      this.isFreshForm=true;
      this.resetFormData=param["clearTracking"];
    }else{
      this.isFreshForm=false;
    }
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    debugger;
    try{
      if(this.isFreshForm || this.isUpdate){
        this.status=this.PROGRESS_STATUS.TRACKINGPOINT_SELECTION;
        if(this.resetFormData===true){
          this.resetForm();
        }
        this.setTrackingMasterData();
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  onProceed:function(){
    debugger;
    try
    {
      var param={};    
      //var trackingPointId=this.view.lstBoxTrackingPoints.selectedKey;
      //trackingPointId=parseInt(trackingPointId);
      var journeyReasonId=this.view.lstBoxTrackingPoints.selectedKey;
      journeyReasonId=parseInt(journeyReasonId);
      var trackingPointName=this.view.lstBoxTrackingPoints.selectedKeyValue[1];
      var supervisorName;
      supervisorName=this.view.supervisiorName.getText();
      if(typeof supervisorName!=='string'){
        supervisorName="";
      }if(supervisorName.length===0){
        alert("Please provide Supervisor name!");
        return;
      }
      var supervisorPhone=this.view.SupervisorPhone.getText();
      if(typeof supervisorPhone!=='string'){
        supervisorPhone="";
      }
      if(supervisorPhone.length===0){
        alert("Please provide Supervisior phone!");
        return;
      }
      var supervisorSAPid;//=this.view.lstBoxSupervisor.selectedKeyValue[1];
      supervisorSAPid=this.view.SupervisorCampRoomNumber.getText();
      if(typeof supervisorSAPid!=='string'){
        supervisorSAPid="";
      }if(supervisorSAPid.length===0){
        alert("Please provide Supervisor Id!");
        return;
      }
      if(this.isUpdate){
        try
        {
          if(supervisorName === "" ||supervisorPhone === "" ||supervisorSAPid === "" )
          {
            alert("Please Provide Details..");
            return
          }

          this.TrackingDetails.journey_supervisor_name = supervisorName;
          this.TrackingDetails.journey_supervisor_phone = supervisorPhone;
          this.TrackingDetails.journey_supervisor_emp_id = supervisorSAPid;
          //this.TrackingDetails.journey_tracking_point_id_fk = trackingPointId;
          this.TrackingDetails.journey_reason_id_fk = journeyReasonId;

          var navObj = new kony.mvc.Navigation('frmUpdateJourney');
          var params = {};
          params['TrackingDetails'] = this.TrackingDetails;
          params['typeOfDataEdit'] = "TrackingDetails";
          navObj.navigate(params);

        }
        catch(err)
        {
          alert(jsons(err));
        }
        return;
      }
      if(typeof this.journey=='object' && this.journey!==null){
        this.journey[JOURNEY_TBL.REASON_ID_FK]=journeyReasonId;
        //this.journey[JOURNEY_TBL.TRACKING_POINT_ID_FK]=trackingPointId;
        this.journey[JOURNEY_TBL.SUPERVISOR_NAME]=supervisorName;
        this.journey[JOURNEY_TBL.SUPERVISOR_PHONE]=supervisorPhone;
        this.journey[JOURNEY_TBL.SUPERVISOR_EMP_ID]=supervisorSAPid;
        if(this.isEdit)
        {
          this.isEditDetails.JourneyDetails.journey_supervisor_phone = supervisorPhone;
          this.isEditDetails.JourneyDetails.journey_supervisor_name  = supervisorName;
          this.isEditDetails.JourneyDetails.journey_supervisor_emp_id   = supervisorSAPid;
          var ResponseFromTrackingTable = (GetResponseFromDatabaseWhereClause(TRACKING_POINTS_TBL_GLOBAL, 'tracking_point_address', trackingPointName));
          if(typeof (ResponseFromTrackingTable) === "object" )
          {
            this.isEditDetails.JourneyDetails.journey_tracking_point_id_fk  = ResponseFromTrackingTable[0].tracking_point_id_pk;
          }

          param['JourneyDetails'] = this.isEditDetails;
          param['isEdit'] = true;
        }
      }
      var navObj=new kony.mvc.Navigation("frmNewJourneyVehicle");
      try{

        param["journey"]=this.journey;
        param["passengerList"]=this.passengerList;
        param[DATA_MODEL.USER_TBL]=this.user;
        navObj.navigate(param);
      }catch(excp){
        alert(excp.message);
      }
    }
    catch(err)
    {
      alert(err.message);
    }
  },

  //   setFlxNewJourneyTracking:function()
  //   {
  //     this.view.segTrackingPoints.widgetDataMap = {lblTrackingPoint:"lblTrackingPoint"};
  //     var masterTable=[];
  //     try
  //     {
  //       for(var x=0;x<ApplicationData.TrackingPoints.length;x++)
  //       {
  //         masterTable.push({lblTrackingPoint:ApplicationData.TrackingPoints[x]});
  //       }
  //     }
  //     catch(err)
  //     {
  //       alert(err.message);
  //     }
  //     this.view.segTrackingPoints.setData(masterTable);
  //   },
  setListBoxTrackingPoints:function()
  {
    //Setting the Tracking Points
    this.view.lstBoxTrackingPoints.masterDataMap = [[
      {"mykey":"key2","myvalue":"Christmas Creek","accessibilityConfig":{}},
      {"mykey":"key4","myvalue":"Cloudbreak","accessibilityConfig":{}},
      {"mykey":"key5","myvalue":"Solomon","accessibilityConfig":{}},
    ],"mykey","myvalue"];
    this.view.lstBoxTrackingPoints.selectedKey = "key1";

    //Setting the Supervisor
    this.view.lstBoxSupervisor.masterDataMap=[[
      {"mykey":"key1","myvalue":"Alex Davis","accessibilityConfig":{}},
    ],"mykey","myvalue"];
    this.view.lstBoxSupervisor.selectedKey = "key1";

    //Setting the Supervisor Details
    //this.view.SupervisorPhone.text = ApplicationData.TrackingPointsWithSupervisor[0].Supervisor.Mobile;
    //this.view.SupervisorCampRoomNumber.text = ApplicationData.TrackingPointsWithSupervisor[0].Supervisor.CampRoomNumber;

    //Setting Company Details
    this.view.CompanySupervisor.text = ApplicationData.TrackingPointsWithSupervisor[0].Company.Name;
    this.view.SupervisorCompanyNumber.text = ApplicationData.TrackingPointsWithSupervisor[0].Company.Phone;

  },
  //=================================================================
  /**
   * @function
   *
   */
  setTrackingMasterData:function(){
    debugger;
    try{
      this.getTrackingPointList();
      this.getJourneyReasonList();
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param records 
   */
  populateJourneyReasonInListBox:function(records){
    debugger;
    try{
      var listArray;
      var journeyReasonMasterData=[];
      if(Array.isArray(records) && records.length>0){
        for(var i=0;i<records.length;i++){
          listArray=[];
          listArray.push(records[i][JOURNEY_REASONS_MASTER_TBL.REASON_ID_PK]);
          listArray.push(records[i][JOURNEY_REASONS_MASTER_TBL.JOURNEY_REASON_DESC]);
          journeyReasonMasterData.push(listArray);
        }
        this.view.lstBoxTrackingPoints.masterData=journeyReasonMasterData;
        if(records.length>0){
          this.view.lstBoxTrackingPoints.selectedKey=records[0][JOURNEY_REASONS_MASTER_TBL.REASON_ID_PK];
          //this.selectedTrackingPointId=records[0][JOURNEY_REASONS_MASTER_TBL.REASON_ID_PK];
          this.selectedJourneyReasonId=records[0][JOURNEY_REASONS_MASTER_TBL.REASON_ID_PK];
        }
      }else{
        //this.selectedTrackingPointId=null;
        this.selectedJourneyReasonId=null;
        this.view.lstBoxTrackingPoints.masterData=[];
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param records 
   */
  populateTrackingPoints:function(records){
    debugger;
    try{
      var segObj;
      var trackingPointList=[];
      if(Array.isArray(records) && records.length>0){
        for(var i=0;i<records.length;i++){
          segObj={};
          segObj["imgTrackingPoint"]="tracking_purple.png";
          segObj["imgSelected"]="threeverticaldotswhite.png";
          if(this.isUpdate && this.isToChangeSelected && this.selectedKey ===records[i][TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS])
          {
            segObj["imgSelected"]="enteredcheckpoint.png";
            this.TrackingDetails.journey_tracking_point_id_fk = records[i][TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS];
          }
          segObj["lblTrackingPoint"]=records[i][TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS];
          segObj[TRACKING_POINTS_TBL.TRACKING_POINT_ID]=records[i][TRACKING_POINTS_TBL.TRACKING_POINT_ID];
          trackingPointList.push(segObj);
        }
        this.view.segTrackingPoints.removeAll();
        this.view.segTrackingPoints.setData(trackingPointList);
        this.view.flxTracking1.setVisibility(true);
      }
    }catch(excp){
      debugger;
      throw excp;
    }

  },
  getJourneyReasonList:function(){
    debugger;
    try{
      this.fetchRecords(DATA_MODEL.JOURNEY_REASONS_MASTER_TBL, null);
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  getTrackingPointList:function(){
    debugger;
    try{
      this.fetchRecords(DATA_MODEL.TRACKING_POINTS_TBL,null);
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
  populateTrackingPointListInListBox:function(records){
    debugger;
    try{
      var listArray;
      var trackingPointMasterData=[];
      if(Array.isArray(records) && records.length>0){
        for(var i=0;i<records.length;i++){
          listArray=[];
          listArray.push(records[i][TRACKING_POINTS_TBL.TRACKING_POINT_ID]);
          listArray.push(records[i][TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS]);
          trackingPointMasterData.push(listArray);
        }
        this.view.lstBoxTrackingPoints.masterData=trackingPointMasterData;
        if(records.length>0){
          this.view.lstBoxTrackingPoints.selectedKey=records[0][TRACKING_POINTS_TBL.TRACKING_POINT_ID];
          this.selectedTrackingPointId=records[0][TRACKING_POINTS_TBL.TRACKING_POINT_ID];
        }
      }else{
        this.selectedTrackingPointId=null;
        this.view.lstBoxTrackingPoints.masterData=[];
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
  _recordFetchSuccess:function(dataModel,info,result){
    debugger;
    try{
      switch(dataModel){
        case DATA_MODEL.TRACKING_POINTS_TBL:
          this.populateTrackingPoints(result);
          break;
        case DATA_MODEL.JOURNEY_REASONS_MASTER_TBL:
          this.populateJourneyReasonInListBox(result);
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
   *
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
  /**
   * @function
   *
   */
  navigateBack:function(){
    debugger;
    var navObj=new kony.mvc.Navigation("frmNewJourneyRoute");
    var param={};
    param["clearTracking"]=false;
    try{
      navObj.navigate(param);
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  resetForm:function(){
    try{
      this.view.flxTracking1.setVisibility(true);
      this.view.flxTracking2.setVisibility(false);
      this.view.supervisiorName.setText("",true);
      this.view.SupervisorPhone.setText("",true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
      this.view.SupervisorCampRoomNumber.setText("",true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  onTrackingPointSelection:function(){
    debugger;
    try{
      var selectedRowItems=this.view.segTrackingPoints.selectedRowItems;
      if(Array.isArray(selectedRowItems) && selectedRowItems.length>0){
        var trackingPointId=selectedRowItems[0][TRACKING_POINTS_TBL.TRACKING_POINT_ID];
        if(this.isUpdate)
        {
          this.TrackingDetails[JOURNEY_TBL.TRACKING_POINT_ID_FK] = trackingPointId;

          //Setting the Default Selected Value for the Reason.
          var SelectedListData="";
          var ListMasterData = this.view.lstBoxTrackingPoints.masterData;
          try
          {
            SelectedListData = (GetResponseFromDatabaseWhereClause(JOURNEY_REASONS_MASTER_TBL_GLOBAL, 
                                                                   JOURNEY_REASONS_MASTER_TBL.REASON_ID_PK, 
                                                                   this.TrackingDetails[JOURNEY_TBL.REASON_ID_FK])[0])[JOURNEY_REASONS_MASTER_TBL.JOURNEY_REASON_DESC];
          }
          catch(err)
          {

          }
          if(ListMasterData.length>0)
          {
            ListMasterData.forEach(function(EachItem){
              if(EachItem[1] === SelectedListData)
              {
                this.view.lstBoxTrackingPoints.selectedKey = EachItem[0];
              }
            }.bind(this));
          }





          this.view.flxTracking1.setVisibility(false);
          this.view.flxTracking2.setVisibility(true);
          this.view.supervisiorName.text = this.TrackingDetails.journey_supervisor_name;
          this.view.SupervisorPhone.text = this.TrackingDetails.journey_supervisor_phone;
          this.view.SupervisorCampRoomNumber.text = this.TrackingDetails.journey_supervisor_emp_id;
          return;
        }
        this.journey[JOURNEY_TBL.TRACKING_POINT_ID_FK]=trackingPointId;
        //For the Update Journey
        this.status=this.PROGRESS_STATUS.JOURNEY_REASON_SELECTION;
        this.view.flxTracking1.setVisibility(false);
        this.view.flxTracking2.setVisibility(true);

      }

    }catch(excp){
      alert("exvp "+excp.message);
    }
  }
});
