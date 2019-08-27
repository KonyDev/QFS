define({ 

  //Type your controller code here 
  param:null,
  inspectionList:null,
  dayList:null,
  /**
   * @function
   *
   * @param param 
   */
  onNavigate:function(param){
    try{
      if(param!==undefined || param!==null){
        this.param=param;
        this.setHamburgerData(param);
      }
    }catch(excp){
      debugger;
    }

    //this.onFormPostShow();
  },
  setHamburgerData: function(data){
    //var data = this.param;
    this.view.lblProfileName.text = data.firstName+" "+ data.lastName;
    this.view.lblProfileEmail.text = data.email;
    this.view.imgProfile.isVisible = false;
    this.view.lblInitials.text = data.firstName.charAt(0)+data.lastName.charAt(0);
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    try{
      this.view.lblAppVersion.text = "v"+appConfig.appVersion;
      this.dayList= this.getDayList('2018-12-29','2019-01-04');
      this.getInspectionList();
    }catch(excp){
      debugger;
    }

  },
  /**
   * @function
   *
   */
  getDayList:function(fromDate,toDate){
    var dayList=[];
    try{
      if(typeof fromDate=='string' && typeof toDate=='string'){
        var fromDateObj=this.getDateObj(fromDate);
        var toDateObj=this.getDateObj(toDate);
        while(fromDateObj.getTime()<=toDateObj.getTime()){
          dayList.push(fromDateObj.toLocaleString("en-us", { weekday: "short" }));
          fromDateObj.setDate(fromDateObj.getDate()+1);
        }
      }else{
        //invalid date format
      }
    }catch(excp){
      debugger;
      throw excp;
    }
    return dayList;
  },
  /**
   * @function
   *
   */
  getDateObj:function(dateString){
    var dateObj=null;
    try{
      if(typeof dateString=='string'){
        var dateArray=dateString.split("-");
        dateObj=new Date();
        dateObj.setFullYear(dateArray[0]);
        dateObj.setMonth(dateArray[1]-1);
        dateObj.setDate(dateArray[2]);
        dateObj.setHours(0);
        dateObj.setMinutes(0);
        dateObj.setSeconds(0);
        dateObj.setMilliseconds(0);
      }
    }catch(excp){
      debugger;
      throw excp;
    }
    return dateObj;
  },
  /**
   * @function
   *
   * @param inspectionList 
   */
  processDonutChart:function(inspectionList){
    if(Array.isArray(inspectionList)){
      var inspectionStatusMap=InspectionUtil.parseRecords(inspectionList,"Status");
      var dataList=[];
      for(var key in inspectionStatusMap){
        if(typeof key=='string'){
          switch(key.toLowerCase()){
            case "completed":
              dataList.push({
                "colorCode":"#77BD43",
                "label":"Completed",
                "value":inspectionStatusMap[key].length
              });
              break;
            case "assigned":
              dataList.push({
                "colorCode":"#FF4040",
                "label":"Scheduled",
                "value":inspectionStatusMap[key].length
              });break;
          }
        }
      }
      return dataList;
    }
  },
  /**
   * @function
   *
   * @param inspectionList 
   */
  getInspectionStatusCount:function(inspectionList){
    var onTime=0;
    var late=0;
    var statusObj={};
    var slaStatus;
    try{
      if(Array.isArray(inspectionList)){
        for(var i=0;i<inspectionList.length;i++){
          var inspection=inspectionList[i];
          if(inspection["Status"].toLocaleLowerCase()=="completed"){
            slaStatus=this.isSLAMissied(inspection["Assigned_Timestamp"], inspection["Submission_Timestamp"]);
            if(slaStatus===true){
              late++;
            }else{
              onTime++;
            }
          }
        }
        statusObj["onTime"]=onTime;
        statusObj["late"]=late;
      }
    }catch(excp){
      debugger;
    }
    return statusObj;
  },
  /**
   * @function
   *
   * @param assignedTimeStamp 
   * @param submissionTimestamp 
   */
  isSLAMissied:function(assignedTimeStamp,submissionTimestamp){
    var isSLAMissed=true;
    try{
      if(typeof assignedTimeStamp=='string' && assignedTimeStamp.includes("T") && 
         typeof submissionTimestamp=='string'&& submissionTimestamp.includes("T")){
        assignedTimeStamp=InspectionUtil.getSqlDatetoJSDate(assignedTimeStamp);
        submissionTimestamp=InspectionUtil.getSqlDatetoJSDate(submissionTimestamp);
        var timeDiffInHrs=(submissionTimestamp.getTime()-assignedTimeStamp.getTime())/(1000*60*60);
        if(timeDiffInHrs>5){
          isSLAMissed=true;
        }else{
          isSLAMissed=false;
        }
      }else{
        isSLAMissed=true;
      }

    }catch(excp){
      debugger;
    }
    return isSLAMissed;
  },
  /**
   * @function
   *
   * @param inspectionList 
   */
  processBarChart:function(inspectionList){
    //var barChartMap={};
    debugger;
    var index=0;
    var barChartList=[[],[]];
    var dateKey="";
    try{
      if(Array.isArray(inspectionList)){
        inspectionList=this.processInspectionAssignedTimestamp(inspectionList);
        var barChartMap=InspectionUtil.parseRecords(inspectionList, "Assigned_DateTime");
        if(typeof barChartMap=='object' && barChartMap!==null){

          var fromDateObj=this.getDateObj('2018-12-29');
          var toDateObj=this.getDateObj('2019-01-04');

          while(fromDateObj.getTime()<=toDateObj.getTime()){
            dateKey=this.getDateStringKey(fromDateObj);
            if(typeof dateKey =='string'){
              if(typeof barChartMap[dateKey]=='object'){
                barChartMap[dateKey]=this.getInspectionStatusCount(barChartMap[dateKey]);
                barChartList[0].push(barChartMap[dateKey]["onTime"]);
                barChartList[1].push(barChartMap[dateKey]["late"]);
              }else{
                barChartList[0].push(0);
                barChartList[1].push(0);
              }
            }
            fromDateObj.setDate(fromDateObj.getDate()+1);
          }
        }
      }
    }catch(excp){
      debugger;
      throw excp;
    }
    return barChartList;
  },
  /**
   * @function
   *
   * @param dateObj 
   */
  getDateStringKey:function(dateObj){
    var dateString="";
    //var dateObj=new Date();
    try{
      dateString=dateString+dateObj.getFullYear();
      dateString=dateString+"-"+InspectionUtil.addZeroPrefix(dateObj.getMonth()+1);
      dateString=dateString+"-"+InspectionUtil.addZeroPrefix(dateObj.getDate());
    }catch(excp){
      debugger;
      throw excp;
    }
    return dateString;
  },

  /**
   * @function
   *
   * @param inspectionList 
   */
  processInspectionAssignedTimestamp:function(inspectionList){
    try{
      if(Array.isArray(inspectionList)){
        var inspectionObj;
        var assignedTimeStamp;
        var assignedDateTimeObj;
        var localDateTimeObj;
        for(var i=0;i<inspectionList.length;i++){
          inspectionObj=inspectionList[i];
          if(typeof inspectionObj=='object' && inspectionObj!==null){
            //assignedTimeStamp=inspectionObj["Assigned_Timestamp"];
            localDateTimeObj=InspectionUtil.getSqlDatetoJSDate(inspectionObj["Assigned_Timestamp"]);
            inspectionObj["Assigned_DateTime"]=localDateTimeObj.getFullYear()+"-"+
              InspectionUtil.addZeroPrefix(localDateTimeObj.getMonth()+1)+"-"+
              InspectionUtil.addZeroPrefix(localDateTimeObj.getDate());
          }
        }
      }
    }catch(excp){
      debugger;
      throw excp;
    }

    return inspectionList;
  },
  /**
   * @function
   *
   * @param fromDate 
   * @param ToDate 
   */
  getInspectionList:function(fromDate,ToDate){
    try{
      debugger;
      var options;
      this.userID=parseInt(this.param.userid);
      if(typeof this.userID==='number'){
        options={};
        options["whereConditionAsAString"]="Assigned_To = '"+this.userID+"' AND Assigned_Timestamp BETWEEN date('2018-12-29') AND date('2019-01-04') ORDER BY Assigned_Timestamp ASC";
      }else{
        options=null;
      }
      this._fetchRecords(DATA_MODEL.INSPECTION,options);
    }catch(excp){
      debugger;
    }
  },

  //to read records from table
  _fetchRecords:function(dataModel,options){
    /**
     * @function
     *
     * @param record 
     */
    function successCB(record){
      // this.view.loadingScreen.hide(1);
      /**
       * @function
       *
       */
      function setBarChart(){
        //alert("hello");
        //console.alert()
        try{
          var barChartMap=this.processBarChart(record);
          //this.view.brwsrVertical.evaluateJavaScript("drawChart([12, 14, 10, 11, 14, 12, 13],[0, 2, 1, 0, 3, 0,0])");
          var str="drawChart(["+barChartMap[0]+"],["+barChartMap[1]+"])";
          
          //var str="drawChart(["+barChartMap[0]+"],["+barChartMap[1]+"],["+this.dayList+"])";
          
          this.view.brwsrVertical.evaluateJavaScript(str);
          //this.view.brwsrVertical.evaluateJavaScript("drawChart([0,0,0,0,0,0,0])");
        }catch(excp){
          alert("Exception occured: "+JSON.stringify(excp));
          debugger;
        }

      }
      switch(dataModel){
        case "inspection":
          debugger;
          this.inspectionList =record;
          var donutChartDataList=this.processDonutChart(record);
          this.setDonutChartData(donutChartDataList);
          kony.timer.schedule("timerid", setBarChart.bind(this), 1, false);

          //this.view.forceLayout();
          // All required records are fetched, now process the records.
          //this.processRecords();
      }
    }
    function failureCB(error){
      alert(JSON.stringify(error));
    }
    try{
      if(typeof options!=='object'){
        options=null;
      }
      var inspObj=new kony.sdk.KNYObj(dataModel);
      //this.view.loadingScreen.show("Loading..",1);
      inspObj.get(options,successCB.bind(this),failureCB.bind(this));
    }catch(excp){
      debugger;
      //this.view.loadingScreen.hide(1);
      //this.view.loadingScreen.show(excp.message,4);
      //alert(excp.message);
      //this.getAssetLocation();
    }
  },
  /**
   * @function
   *
   * @param dataList 
   */
  setDonutChartData:function(dataList){
    //this.view.donutchart.createChart(dataList);
    debugger;
    if(Array.isArray(dataList)){
      if(kony.os.deviceInfo().name=="android"){
        this.view.donutchart.chartData={
        "data":dataList
      };
      }else if(kony.os.deviceInfo().name=="iPhone"){
        this.view.donutchart.createChart(dataList);
      }
      
    }
  },
  /**
   * @function
   *
   * @param dataList 
   */
  setVerticalChartData:function(dataList){
    //this.view.verticalbar.createChart(dataList);
    return;
    this.view.verticalbar.chartData={
      "data":dataList
    }
    //this.view.forceLayout();
  },
  onClickHamburger: function(){
    this.showMenu();
  },
  showMenu: function(){
    //this.view.flxHamburgerMenu.left="0%";
    var self=this;
    this.view.flxHamburgerMenu.animate(
      kony.ui.createAnimation({100:{left:"0%","stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.30},
      /**
       * @function
       *
       */
      {animationEnd: function() {
        self.view.flxHamburgerOverlay.setVisibility(true);
      } 
      });
  },
  hideMenu: function(){
    this.view.flxHamburgerOverlay.setVisibility(false);
    this.view.flxHamburgerMenu.animate(
      kony.ui.createAnimation({100:{left:"-100%","stepConfig":{}}}),
      {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.30},
      {animationEnd: function() {
      } 
      });
  },
  startSync:function(){
    debugger;
    if(this.isSyncInProgress===false){
      this.isSyncInProgress=true;
      var syncOptions={};//"downloadBatchSize":"100",
      syncOptions.uploadBatchSize="1";
      syncOptions.GetSyncStats=true;
      try{
        var syncObjService= new kony.sdk.KNYObjSvc(OBJECT_SERVICE.SYNC);
        //kony.application.showLoadingScreen("please wait...");
        this.view.loadingScreen.show("Sync in Progress",1);
        syncObjService.startSync(syncOptions,this.successCB,this.failureCB,this.progressCB);
      }catch(excp){
        this.view.loadingScreen.hide(1);
        this.view.loadingScreen.show(excp.message,4);
        kony.print("Exception: "+excp);
      }
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  progressCB:function(result){
    debugger;
    kony.print("##########"+result);
    var phase=InspectionUtil.validateText(result["phase"]);
    var state=InspectionUtil.validateText(result["state"]);
    this.view.loadingScreen.show("Sync in Progress",1);
  },
  successCB:function(response){
    debugger;
    this.isSyncInProgress=false;
    kony.logger.currentLogLevel = kony.logger.logLevel.ALL; 
    kony.logger.activatePersistors(kony.logger.consolePersistor);
    kony.print(response);
    //this.view.loadingScreen.hide(1);
    this.view.forceLayout();
    //this.onFormPostShow();

  },
  _onClickProfile: function(){
    this.hideMenu();
    var navObj=new kony.mvc.Navigation("frmProfile");
    var navigationData = {};
    navigationData.previousForm = "frmDashBoard";
    //navigationData.userAttribute = this._navigationData;
    navigationData.userAttribute = this.param;
    //this._navigationData=null;
    navObj.navigate(navigationData);
  },
  failureCB:function(response){
    //alert("Failure: "+JSON.stringify(response));
    //this.view.loadingScreen.hide(1);
    //this.view.loadingScreen.show(response.message,4);
    this.view.forceLayout();
    //this.isSyncInProgress=false;
    //kony.application.dismissLoadingScreen();
    debugger;
    kony.print(response);
  },
  /**
   * @function
   *
   */
  navigateToFrmInspectionList:function(){
    var navObj=new kony.mvc.Navigation("frmInspectionsList");
    try{
      navObj.navigate(this.param);
    }catch(excp){
      debugger;
    }
  },
  _onClickAddBtn: function(){
    this.hideMenu();
    var navObj=new kony.mvc.Navigation("frmInspectionCreation");
    var navigationData = {};
    navigationData.previousForm = "frmInspectionsList";
    navigationData.userAttribute = this.param;
    //this._navigationData=null;
    try{
      navObj.navigate(navigationData);
    }catch(excp){
      debugger;
    }

  },
  /**
   * @function
   *
   * @param widgetId 
   */
  changeFocusSkin:function(widgetId){
    debugger;
    this.view.flxSearchInspection.skin = "sknFlxHamburgerUnselected";
    this.view.flxAddInspection.skin = "sknFlxHamburgerUnselected"
    this.view.flxSync.skin = "sknFlxHamburgerUnselected"
    this.view.flxMyAccount.skin = "sknFlxHamburgerUnselected";
    try{
      switch(widgetId){
        case "flxSearchInspection":
          this.view.flxSearchInspection.skin = "sknFlxHamburgerSelected";
          this.changeFlxAccountProperties();
          this.changeSelectedFlexSkin("flxSearchInspection");
          break;
        case "flxAddInspection":
          this.view.flxAddInspection.skin = "sknFlxHamburgerSelected";
          this.changeFlxAccountProperties();
          this.changeSelectedFlexSkin("flxAddInspection");
          break;
        case "flxSync":
          this.view.flxSync.skin = "sknFlxHamburgerSelected";
          this.changeFlxAccountProperties();
          this.changeSelectedFlexSkin("flxSync");
          break;
        case "flxMyAccount":
          this.view.flxMyAccount.skin = "sknFlxHamburgerSelected";
          this.changeSelectedFlexSkin("flxMyAccount");
          break;
      }
    }
    catch(exception){
      debugger;
      alert(JSON.stringify(exception));
    }   
  },
  changeFlxAccountProperties:function(){
    this.view.lblMyAccount.skin = "sknFlxHamburgerSelected";
    this.view.imgUserIcon.src = "user_menu_deselect.png";

  },
  changeSelectedFlexSkin:function(widgetID){
    this.view.lblInspectionTitle.skin = "sknlblHamburgerUnselected";
    this.view.imgInspection.src = "inspection_deselect.png";
    this.view.lblAddInspection.skin = "sknlblHamburgerUnselected";
    this.view.imgAddIcon.src = "new_inspection_deselect.png";
    this.view.lblSync.skin = "sknlblHamburgerUnselected";
    this.view.imgSyncIcon.src = "sync_now_deselect.png";
    this.view.lblMyAccount.skin = "sknlblHamburgerUnselected";
    this.view.imgUserIcon.src = "user_menu_deselect.png";
    switch(widgetID){    
      case "flxSearchInspection":
        this.view.lblInspectionTitle.skin = "sknlblHamburgerSelected";
        this.view.imgInspection.src = "inspection_select.png";

        break;
      case "flxAddInspection":
        this.view.lblAddInspection.skin = "sknlblHamburgerSelected";
        this.view.imgAddIcon.src = "new_inspection_select.png";
        break;
      case "flxSync":
        this.view.lblSync.skin = "sknlblHamburgerSelected";
        this.view.imgSyncIcon.src = "sync_now_select.png";
        break;
      case "flxMyAccount":
        this.view.lblMyAccount.skin = "sknlblHamburgerSelected";
        this.view.imgUserIcon.src = "user_menu_select.png";
        break;

    }
  }

});