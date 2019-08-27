define({ 

  //Type your controller code here 
  isFreshForm:true,
  navigationData:null,
  selectedCheckinTypeId:null,
  departureTimestamp:null,
  arrivalTimestamp:null,
  selectedCheckInTimeFrameId:null,
  user:null,
  status:0,

  expectedDepartureDateString:null,
  expectedDepartureTimeString:null,

  expectedArrivalDateString:null,
  expectedArrivalTimeString:null,

  onJourney:null,
  returnJourneyObj:null,
  returnJourneyPassengerList:null,

  returnJourneyId:null,

  onNavigate:function(param){
    debugger;
    this.status=0;
    if(typeof param=='object' && param!==null){
      this.navigationData=param;
      this.isFreshForm=true;
      this.user=param[DATA_MODEL.USER_TBL];
    }else{
      this.isFreshForm=false;
    }
    this.view.flxScRoute.scrollToEnd();
  },
  onFormPostShow:function(){
    try{
      if(this.isFreshForm===true){
        this.isFreshForm=false;
        this.resetForm();
        if(typeof this.navigationData=='object' && this.navigationData!==null){
          var journeyObj=this.navigationData[DATA_MODEL.JOURNEY_TBL];
          var returnJourneyObj=this.getReturnJourneyObj(journeyObj);
          this.returnJourneyObj=returnJourneyObj;
          this.setExpectedDepartureTimestamp(journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
          this.onJourney=journeyObj;
          this.setLocationsToMap(returnJourneyObj);
          this.setDefaultJourneyTimestamp(returnJourneyObj);
          this.setDepartureAddress(returnJourneyObj);
          this.setArrivalAddress(returnJourneyObj);
          this.setMasterData();
          this.getPassengerList(this.onJourney[JOURNEY_TBL.ID_PK]);
        }
      }
    }catch(excp){
      debugger;
    }
  },
  getPassengerList:function(journeyId){
    debugger;
    if(typeof journeyId=='number'){
      try{
        var options={};
        options["whereConditionAsAString"]=PASSENGERS_TBL.JOURNEY_ID_FK+"= '"+journeyId+"'";
        this.fetchRecords(DATA_MODEL.PASSENGERS_TBL, options, null);

      }catch(excp){
        debugger;
        throw excp;
      }
    }
  },
  setDefaultJourneyTimestamp:function(journeyObj){
    if(typeof journeyObj=='object' && journeyObj!==null){
      try{
        var departureTimestamp=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME];
        var dateObj=JourneyUtil.getSqlDatetoJSDate(departureTimestamp);
        this.view.datepicker.setDate(dateObj);
        this.view.datepickerArrival.setDate(dateObj);
        this.view.timePicker.setTime("");
        this.view.timePicker1.setTime("");
        var dateString=JourneyUtil.getReadableDateString(dateObj);
        var timeString=JourneyUtil.getTimeStringIn12HrsFromat(dateObj);
        this.departureTimestamp=departureTimestamp;
        this.arrivalTimestamp=null;
        this.view.departureDate.setData("Departure Date",dateString+" "+timeString,false,"calendar_grey.png");
        this.view.arrivalDate.setData("Arrival Date","Select Arrival date",false,"calendar_grey.png");

      }catch(excp){
        debugger;
        throw excp;
      }
    }
  },
  setMasterData:function(){
    try{
      this.getCheckInTypeList();
      this.getCheckInTimeFrameList();
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  getCheckInTypeList:function(){
    try{
      this.selectedCheckinTypeId=null;
      this.fetchRecords(DATA_MODEL.CHECKIN_TYPE_TBL,null);
    }catch(excp){
      debugger;
    }
  },
  getCheckInTimeFrameList:function(){
    try{
      this.selectedCheckInTimeFrameId=null;
      var orderByMapJSONObj={};
      orderByMapJSONObj[CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL]="ASC";

      var orderByMap=[];
      orderByMap.push(orderByMapJSONObj);

      var options={};
      options["orderByMap"]=orderByMap;
      this.fetchRecords(DATA_MODEL.CHECKIN_INTERVAL_TBL,options);
    }catch(excp){
      debugger;
    }
  },

  setArrivalAddress:function(journeyObj){
    if(typeof journeyObj=='object' && journeyObj!==null){
      try{
        var arrivalAddress=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS];
        if(typeof arrivalAddress=='string' && arrivalAddress.length>0){

        }else{
          arrivalAddress=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT]+","+journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON];
        }
        this.view.arrivalAddress.setData("Arrival Point",arrivalAddress,false,"grey.png");
        this.view.lblFromArrival.text=arrivalAddress;
      }catch(excp){
        debugger;
        throw excp;
      }
    }
  },
  setDepartureAddress:function(journeyObj){
    if(typeof journeyObj=='object' && journeyObj!==null){
      try{
        var departureAddress=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS];
        if(typeof departureAddress=='string' && departureAddress.length>0){

        }else{
          departureAddress=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT]+","+journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON];
        }
        this.view.departureAddress.setData("Departure Point",departureAddress,false,"grey.png");
        this.view.lblFromDeparture.text=departureAddress;
      }catch(excp){
        debugger;
        throw excp;
      }
    }
  },
  setLocationsToMap:function(returnJourneyObj){
    if(typeof returnJourneyObj=='object' && returnJourneyObj!==null){
      try{
        var departurePin=this.getDeparturePin(returnJourneyObj);
        var arrivalPin=this.getArrivalPin(returnJourneyObj);
        this.view.mapJourney.clear();
        this.drawRoutePolyline(departurePin, arrivalPin, "path1", "d3d3d3FF");
      }catch(excp){
        debugger;
        throw excp
      }
    }
  },
  toggleArrivalDateTimeFlex:function(){
    if(this.view.flxArrivalDateTimeRoot.isVisible===true){
      this.disableArrivalDatetimeSelection();
    }else{
      this.enableArrivalDatetimeSelection();
      this.view.flxScRoute.scrollToEnd();
    }
  },
  enableArrivalDatetimeSelection:function(){
    try{
      this.view.flxArrivalTimeRoot.setVisibility(false);
      this.view.flxArrivalDateRoot.setVisibility(true);
      this.view.flxArrivalDateTimeRoot.setVisibility(true);
    }catch(excp){
      debugger;
    }
  },
  disableArrivalDatetimeSelection:function(){
    try{
      this.view.flxArrivalTimeRoot.setVisibility(false);
      this.view.flxArrivalDateRoot.setVisibility(false);
      this.view.flxArrivalDateTimeRoot.setVisibility(false);
    }catch(excp){
      debugger;
    }
  },
  toggleDepartureDateTimeFlex:function(){
    if(this.view.flxDepartureDateTimeRoot.isVisible===true){
      this.disableDepartureDatetimeSelection();
    }else{
      this.enableDepartureDatetimeSelection();
    }
  },
  enableDepartureDatetimeSelection:function(){
    try{
      this.view.flxDepartureTimeRoot.setVisibility(false);
      this.view.flxDepartureDateRoot.setVisibility(true);
      this.view.flxDepartureDateTimeRoot.setVisibility(true);
    }catch(excp){
      debugger;
    }
  },
  disableDepartureDatetimeSelection:function(){
    try{
      this.view.flxDepartureTimeRoot.setVisibility(false);
      this.view.flxDepartureDateRoot.setVisibility(false);
      this.view.flxDepartureDateTimeRoot.setVisibility(false);
    }catch(excp){
      debugger;
    }
  },
  getArrivalPin:function(journeyObj){
    var arrivalPoint;
    if(typeof journeyObj=='object' && journeyObj!==null){
      try{
        arrivalPoint={};
        arrivalPoint["lat"]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT];
        arrivalPoint["lon"]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON];
        arrivalPoint["name"]="Expected arrival point";
        arrivalPoint["image"]="arrival_point_pin.png";
        arrivalPoint["showCallout"]=true;
        if(typeof journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS]=='string' && 
           journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS].length>0){
          arrivalPoint["desc"]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS];
        }else{
          arrivalPoint["desc"]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT]+","+
            journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON];
        }
      }catch(excp){
        debugger;
        throw excp;
      }
    }else{
      arrivalPoint=null;
    }
    return arrivalPoint;
  },
  getDeparturePin:function(journeyObj){
    var departurePoint;
    if(typeof journeyObj=='object' && journeyObj!==null){
      try{
        departurePoint={};
        departurePoint["lat"]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT];
        departurePoint["lon"]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON];
        departurePoint["name"]="Expected departure point";
        departurePoint["image"]="departure_point_pin.png";
        departurePoint["showCallout"]=true;
        if(typeof journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS]=='string' && 
           journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS].length>0){
          departurePoint["desc"]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS];
        }else{
          departurePoint["desc"]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT]+","+
            journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON];
        }
      }catch(excp){
        debugger;
        throw excp;
      }
    }else{
      departurePoint=null;
    }
    return departurePoint;
  },
  /**
     * @function
     *
     * @param source 
     * @param destination 
     */
  drawRoutePolyline:function(suorcePin,destination,id,lineColor){
    debugger;
    try{
      if(typeof suorcePin=='object' && suorcePin!==null && typeof destination=='object' && destination!==null){
        var polylineObj={};
        polylineObj["id"]=""+id;
        polylineObj["startLocation"]=suorcePin;
        polylineObj["endLocation"]=destination;
        polylineObj["locations"]=[suorcePin,destination];
        polylineObj["polylineConfig"]={};
        polylineObj["polylineConfig"]["lineWidth"]=1;
        if(typeof lineColor=='string' && lineColor.length>0){
          polylineObj["polylineConfig"]["lineColor"]=lineColor;
        }else{
          polylineObj["polylineConfig"]["lineColor"]="0000FFFF";
        }
        this.view.mapJourney.addPolyline(polylineObj);
        if(kony.os.deviceInfo().name.toLowerCase()=='iphone' || kony.os.deviceInfo().name.toLowerCase()=='ipad'){
          this.view.mapJourney.navigateToLocation(suorcePin, false, true);
          this.view.mapJourney.zoomLevel=10;
        }else{
          this.view.mapJourney.zoomLevel=10;
          this.view.mapJourney.navigateToLocation(suorcePin, false, true);
        }
        this.view.forceLayout();
      }
    }catch(excp){
      debugger;
    }
  },
  createReturnJourneyPassenger:function(records){
    if(Array.isArray(records) && records.length>0 ){
      var passengerList=[];
      var passenger;
      for(var i=0;i<records.length;i++){
        passenger={};
        passenger[PASSENGERS_TBL.JOURNEY_ID_FK]=this.returnJourneyId;
        passenger[PASSENGERS_TBL.PASSENGER_COMPANY]=records[i][PASSENGERS_TBL.PASSENGER_COMPANY];
        passenger[PASSENGERS_TBL.PASSENGER_MOBILE]=records[i][PASSENGERS_TBL.PASSENGER_MOBILE];
        passenger[PASSENGERS_TBL.PASSENGER_NAME]=records[i][PASSENGERS_TBL.PASSENGER_NAME];
        passengerList.push(passenger);
      }
      var record={};
      record["records"]=passengerList;
      this.createRecord_online(DATA_MODEL.PASSENGERS_TBL,record);
    }else{
      this.updateJourney();
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
        case DATA_MODEL.CHECKIN_TYPE_TBL:
          this.populateCheckinTypeToListBox(result);
          break;
        case DATA_MODEL.CHECKIN_INTERVAL_TBL:
          this.populateCheckInTimeFrameToListBox(result);
          break;
        case DATA_MODEL.PASSENGERS_TBL:
          this.returnJourneyPassengerList =result;
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
  populateCheckInTimeFrameToListBox:function(result){
    try{
      var listArray;
      var checkInTimeFrameMasterData=[];
      if(Array.isArray(result)){
        for(var i=0;i<result.length;i++){
          listArray=[];
          listArray.push(result[i][CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL_ID]);
          listArray.push(""+parseInt(result[i][CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL]));
          checkInTimeFrameMasterData.push(listArray);
        }
        this.view.lstTimeFrameForCheckins.masterData=checkInTimeFrameMasterData;
        //this.view.lstTimeFrameForCheckins.selectedKey=this.returnJourneyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK];
        //this.selectedCheckInTimeFrameId=this.returnJourneyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK];
        this.view.lstTimeFrameForCheckins.selectedKey=6;
        this.selectedCheckInTimeFrameId=6;
      }else{
        this.view.lstTimeFrameForCheckins.masterData=[[-1,"None"]];
        this.selectedCheckInTimeFrameId=null;
        this.view.lstTimeFrameForCheckins.selectedKey=-1;
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  populateCheckinTypeToListBox:function(records){
    debugger;
    try{
      var listArray;
      var chekinTypeMasterData=[];
      if(Array.isArray(records) && records.length>0){
        for(var i=0;i<records.length;i++){
          listArray=[];
          listArray.push(records[i][CHECKIN_TYPE_TBL.CHECKIN_TYPE_ID_PK]);
          listArray.push(records[i][CHECKIN_TYPE_TBL.CHECKIN_TYPE_DESC]);
          chekinTypeMasterData.push(listArray);
        }
        this.view.lstCheckInType.masterData=chekinTypeMasterData;
        this.view.lstCheckInType.selectedKey=this.returnJourneyObj[JOURNEY_TBL.CHECKIN_TYPE_ID_FK];
        this.selectedCheckinTypeId=this.returnJourneyObj[JOURNEY_TBL.CHECKIN_TYPE_ID_FK];
      }else{
        this.selectedCheckinTypeId=null;
        this.view.lstCheckInType.masterData=[[-1,"None"]];
        this.view.lstCheckInType.selectedKey=-1;
      }
    }catch(excp){
      debugger;
    }
  },
  getReturnJourneyObj:function(journeyObj){
    var returnJourneyObj;
    try{
      if(typeof journeyObj=='object' && journeyObj!==null){
        returnJourneyObj={};
        returnJourneyObj[JOURNEY_TBL.USER_EMP_ID_FK]=journeyObj[JOURNEY_TBL.USER_EMP_ID_FK];
        returnJourneyObj[JOURNEY_TBL.EMP_PHONE_NUM]=journeyObj[JOURNEY_TBL.EMP_PHONE_NUM];
        returnJourneyObj[JOURNEY_TBL.STATUS_CODE_FK]=journeyObj[JOURNEY_TBL.STATUS_CODE_FK];

        returnJourneyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT];
        returnJourneyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON];
        returnJourneyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS];

        returnJourneyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]=journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME];
        //returnJourneyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=
        //this.setExpectedDepartureTimestamp(journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
        //this.setExpectedArrivalTimestamp(null);

        returnJourneyObj[JOURNEY_TBL.TRACKING_POINT_ID_FK]=journeyObj[JOURNEY_TBL.TRACKING_POINT_ID_FK];
        returnJourneyObj[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK]=journeyObj[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK];
        returnJourneyObj[JOURNEY_TBL.CREATED_BY_FK]=journeyObj[JOURNEY_TBL.CREATED_BY_FK];
        returnJourneyObj[JOURNEY_TBL.LAST_UPDATED_BY_FK]=journeyObj[JOURNEY_TBL.LAST_UPDATED_BY_FK];
        returnJourneyObj[JOURNEY_TBL.REASON_ID_FK]=journeyObj[JOURNEY_TBL.REASON_ID_FK];
        returnJourneyObj[JOURNEY_TBL.SUPERVISOR_EMP_ID]=journeyObj[JOURNEY_TBL.SUPERVISOR_EMP_ID];
        returnJourneyObj[JOURNEY_TBL.SUPERVISOR_NAME]=journeyObj[JOURNEY_TBL.SUPERVISOR_NAME];
        returnJourneyObj[JOURNEY_TBL.SUPERVISOR_PHONE]=journeyObj[JOURNEY_TBL.SUPERVISOR_PHONE];
        returnJourneyObj[JOURNEY_TBL.SUPERVISOR_CAMP_ROOM_NUM]=journeyObj[JOURNEY_TBL.SUPERVISOR_CAMP_ROOM_NUM];
        var selectedCheckInTypeId=this.view.lstCheckInType.selectedKey;
        if(typeof selectedCheckInTypeId=='string'){
          selectedCheckInTypeId=Number(selectedCheckInTypeId);
        }else{
          selectedCheckInTypeId=3;
        }
        returnJourneyObj[JOURNEY_TBL.CHECKIN_TYPE_ID_FK]=selectedCheckInTypeId;
        returnJourneyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK]=journeyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK];
        returnJourneyObj[JOURNEY_TBL.JOURNEY_SATELLITE]=journeyObj[JOURNEY_TBL.JOURNEY_SATELLITE];
        returnJourneyObj[JOURNEY_TBL.JOURNEY_RADIO]=journeyObj[JOURNEY_TBL.JOURNEY_RADIO];

        returnJourneyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT];
        returnJourneyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON];
        returnJourneyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS]=journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS];

      }else{
        returnJourneyObj=null;
      }

    }catch(excp){
      debugger;
      throw excp;
    }
    return returnJourneyObj;
  },
  onDepartureDateSelection:function(dateObj){
    debugger;
    if(typeof dateObj=='object' && dateObj!==null){
      try
      {
        var today = new Date();
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        if(dateObj["dateObj"]<yesterday)
        {
          alert("Please select a future date");
        }
        else
        {
          this.expectedDepartureDateString=dateObj["dateString"];
          var selectedDateObj=dateObj["dateObj"];
          var dateFullString=JourneyUtil.getReadableFullDateString(selectedDateObj);
          this.view.departureDate.setData("Departure Date",dateFullString,false,"calendar_grey.png");
          this.view.flxDepartureTimeRoot.setVisibility(true);
          this.view.flxDepartureDateRoot.setVisibility(false);
        }
      }catch(excp){
        debugger;
      }

    }
  },
  onDepartureTimeSelected:function(selectedTime){
    if(typeof selectedTime=='string' && selectedTime.length>0){
      try{
        this.expectedDepartureTimeString=selectedTime;
        this.departureTimestamp =JourneyUtil.getUTCdatetime(this.expectedDepartureDateString,selectedTime);
        this.setExpectedDepartureTimestamp(this.departureTimestamp);
        var dateObj=JourneyUtil.getSqlDatetoJSDate(this.departureTimestamp);
        var excpectedDateString=JourneyUtil.getReadableDateString(dateObj);
        var expectedTimeString=JourneyUtil.getTimeStringIn12HrsFromat(dateObj);
        this.view.departureDate.setData("Departure Date",excpectedDateString+" "+expectedTimeString,false,"calendar_grey.png");
        this.view.lblFromDepartureTime.text=excpectedDateString+" "+expectedTimeString;
        this.disableDepartureDatetimeSelection();
      }catch(excp){
        debugger;
      }
    }
  },
  onTimeIntervalSelection:function(){
    debugger;
    try{
      var timeIntervalId=this.view.lstTimeFrameForCheckins.selectedKey;
      this.returnJourneyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK]=parseInt(timeIntervalId);
    }catch(excp){
      debugger;
    }
  },
  setExpectedDepartureTimestamp:function(timestampString){
    if(typeof timestampString=='string' && timestampString.length>0){
      this.returnJourneyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]=timestampString;
      var dateObj=JourneyUtil.getSqlDatetoJSDate(timestampString);
      var excpectedDateString=JourneyUtil.getReadableDateString(dateObj);
      var expectedTimeString=JourneyUtil.getTimeStringIn12HrsFromat(dateObj);
      this.view.lblFromDepartureTime.text=excpectedDateString+" "+expectedTimeString;
    }else{
      this.returnJourneyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]=null;
      this.departureTimestamp=null;
    }
  },
  setExpectedArrivalTimestamp:function(timestampString){
    if(typeof timestampString=='string' && timestampString.length>0){
      this.returnJourneyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=timestampString;
      this.arrivalTimestamp=timestampString;
    }else{
      this.returnJourneyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=null;
      this.arrivalTimestamp=null;
    }
  },
  onArrivalDateSelection:function(dateObj){
    if(typeof dateObj=='object' && dateObj!==null){
      try{
        var today = new Date();
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        if(dateObj["dateObj"]<yesterday)
        {
          alert("Please select a future date");
        }
        else
        {
          this.expectedArrivalDateString=dateObj["dateString"];
          var selectedDateObj=dateObj["dateObj"];
          var dateFullString=JourneyUtil.getReadableFullDateString(selectedDateObj);
          this.view.arrivalDate.setData("Arrival Date",dateFullString,false,"calendar_grey.png");
          this.view.flxArrivalTimeRoot.setVisibility(true);
          this.view.flxArrivalDateRoot.setVisibility(false);
        }
      }catch(excp){
        debugger;
      }
    }
  },
  onArrivalTimeSelected:function(selectedTime){  
    if(typeof selectedTime=='string' && selectedTime.length>0){
      try{
        this.expectedArrivalTimeString=selectedTime;
        this.arrivalTimestamp =JourneyUtil.getUTCdatetime(this.expectedArrivalDateString,selectedTime);
        this.setExpectedArrivalTimestamp(this.arrivalTimestamp);
        var dateObj=JourneyUtil.getSqlDatetoJSDate(this.arrivalTimestamp);
        var excpectedDateString=JourneyUtil.getReadableDateString(dateObj);
        var expectedTimeString=JourneyUtil.getTimeStringIn12HrsFromat(dateObj);
        this.view.arrivalDate.setData("Arrival Date",excpectedDateString+" "+expectedTimeString,false,"calendar_grey.png");
        this.view.lblFromArrivalTime.text=excpectedDateString+" "+expectedTimeString;
        this.disableArrivalDatetimeSelection();
        this.selectTimeFrame();
      }catch(excp){
        debugger;
      }
    }
  },
  selectTimeFrame:function(){
    this.showJourneyDetailFlex();
    this.hideDepartureDateTimeInfo();
  },
  showJourneyDetailFlex:function(){
    this.view.flxJourneyDetail.setVisibility(true);
    this.view.JourneyTracking.setVisibility(false);
    this.view.flxScRoute.top="8%";
    this.view.forceLayout();
  },
  hideJourneyDetailFlex:function(){
    this.view.flxJourneyDetail.setVisibility(false);
    this.view.JourneyTracking.setVisibility(true);
    this.view.flxScRoute.top="18%";
    this.view.forceLayout();
  },
  showDepartureDateTimeInfo:function(){
    this.view.flxDepartureDateTimeInfo.setVisibility(true);
  },
  hideDepartureDateTimeInfo:function(){
    this.view.flxDepartureDateTimeInfo.setVisibility(false);
  },
  onEditDetail:function(){
    this.view.flxDepartureDateTimeInfo.setVisibility(true);
    this.view.flxJourneyDetail.setVisibility(false);
    this.view.JourneyTracking.setVisibility(true);
    this.view.flxScRoute.top="18%";
    this.view.forceLayout();
  },

  resetForm:function(){
    //this.view.lstCheckInType.setEnabled(false);
    this.view.flxDepartureDateTimeInfo.setVisibility(true);
    this.view.flxJourneyDetail.setVisibility(false);
    this.view.JourneyTracking.setVisibility(true);
    this.view.flxScRoute.top="18%";
    this.disableArrivalDatetimeSelection();
    this.disableDepartureDatetimeSelection();
    this.view.flxScRoute.scrollToEnd();
    this.view.forceLayout();
  },
  proceedNext:function(){
    debugger;
    if(this.status==0){
      this.createJourneyOnline();
    }else{
      this.startSync();
    }
  },
  /**
   * @function
   *
   */
  createJourneyOnline:function(){
    try{
      if(JourneyUtil.isNetworkAvailable()===true){
        this.createRecord_online(DATA_MODEL.JOURNEY_TBL,this.returnJourneyObj);
      }else{
        alert("Please check your network connection!");
      }
    }catch(err){
      alert("Error of the createJourneyOnline: "+err.message);
    }
  },
  createRecord_online:function(dataModel,record){
    try{
      var objSvc = kony.sdk.getCurrentInstance().getObjectService(JConstant.OFFLINE_OBJECT_SERVICE, {
        "access": "online"
      });
      var dataObject = new kony.sdk.dto.DataObject(dataModel);
      var options = {
        "dataObject": dataObject,
        "headers":{}
      }; 
      dataObject.setRecord(record);
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      objSvc.create(options,
                    this.createRecordSuccess.bind(this,dataModel),
                    this.createRecordFailure.bind(this,dataModel)); 

    }catch(excp){
      alert(excp.error);
      kony.application.dismissLoadingScreen();
    }
  },
  /**
   * @function
   *
   */
  createRecordSuccess:function(dataModel,result){
    debugger;
    try{
      kony.application.dismissLoadingScreen();
      switch(dataModel){
        case DATA_MODEL.JOURNEY_TBL:
          this.returnJourneyId=result[JOURNEY_TBL.ID_PK];
          this.createReturnJourneyPassenger(this.returnJourneyPassengerList);
          //this.createPassengerList(result[JOURNEY_TBL.ID_PK], this.passengerList);
          break;
        case DATA_MODEL.PASSENGERS_TBL:
          debugger;
          this.updateJourney();
          //this.doSync();
          //var navObj=new kony.mvc.Navigation("frmCreateJourney");
          //navObj.navigate(this.navigationData);
          break;
      }
      return;

    }catch(excp){
      alert(excp.error);
      debugger;
    }

  },
  /**
   * @function
   *
   * @param result 
   */
  createRecordFailure:function(passengerList,result){
    alert(result);
    kony.application.dismissLoadingScreen();
    debugger;
  },
  updateJourney:function(){
    try{
      var options={};
      var id=JOURNEY_TBL.ID_PK;
      options["primaryKeys"]={};
      options["primaryKeys"][id]=this.onJourney[JOURNEY_TBL.ID_PK];
      var updateRecord={};
      updateRecord[JOURNEY_TBL.ONWARD_JOURNEY_ID]=""+this.returnJourneyId;
      updateRecord[JOURNEY_TBL.LAST_UPDATED_TIMESTAMP]=null;
      this.updateRecord(options, updateRecord);
    }catch(excp){
      debugger;
    }
  },
  updateRecord:function(options,updateRecord){
    debugger;
    try{
      if(typeof updateRecord=='object' && updateRecord!==null && typeof options=='object' && options!==null){
        var sdkObj=new kony.sdk.KNYObj(DATA_MODEL.JOURNEY_TBL);
        sdkObj.updateByPK(updateRecord,options, this.updateRecordSuccess.bind(this), this.updateRecordFailure.bind(this));
      }
    }catch(excp){
      debugger;
    }
  },
  updateRecordSuccess:function(result){
    debugger;
    try{
      this.status=1;
      this.startSync();
    }catch(excp){
      debugger;
    }
  },
  updateRecordFailure:function(result){
    debugger;
  },
  onCheckInTypeSelected:function(){
    debugger;
    try{
      this.selectedCheckinTypeUpdate = parseInt(this.view.lstCheckInType.selectedKey);
      if(this.selectedCheckinTypeUpdate==3){
        //this.view.lstTimeFrameForCheckins.setEnabled(false);
        this.view.lblCheckinTimeFrame.isVisible=false;
        this.view.flxTimeframeSelectorRoot.isVisible=false;
        // this.view.lstTimeFrameForCheckins.selectedKey=null;
      }else{
        this.view.lblCheckinTimeFrame.isVisible=true;
        this.view.flxTimeframeSelectorRoot.isVisible=true;
        this.view.lstTimeFrameForCheckins.selectedKey=6;
      }
    }catch(err){
      alert(err);
    }
  },
  startSync:function(){
    debugger;
    var syncOptions={};//"downloadBatchSize":"100",
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    //syncOptions.GetSyncStats=false;
    try{
      syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
      var syncObjService= new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      syncObjService.startSync(syncOptions,this.syncSuccessCB.bind(this),
                               this.syncFailureCB.bind(this),this.progressCallback.bind(this));
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  progressCallback:function(param){

  },
  syncSuccessCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
    try{
      var param={};
      param[DATA_MODEL.JOURNEY_TBL]=this.onJourney;
      param[JOURNEY_TBL.ONWARD_JOURNEY_ID]=this.returnJourneyId;
      param[DATA_MODEL.USER_TBL]=this.user;
      var navObj=new kony.mvc.Navigation("ReturnJourneyGroup/frmWithOnwardJourney");
      navObj.navigate(param);
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param response 
   */
  syncFailureCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
    try{

    }catch(excp){
      debugger;
    }
  },

});