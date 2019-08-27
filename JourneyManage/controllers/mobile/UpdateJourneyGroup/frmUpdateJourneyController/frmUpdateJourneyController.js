define({
  journeyObj:null,
  userObj:null,
  passengerList:null,
  vehicleListMap:null,
  trackingPointListMap:null,
  status:null,
  deviceLat:null,
  deviceLon:null,
  passengerToDelete:[],
  passengerToAdd:[],
  passengerToUpdate:[],
  ADDRESS_UPDATE_STATUS:{
    "DEPARTURE_ADDRESS":0,
    "ARRIVAL_ADDRESS":1
  },
  arrivalPin:null,
  arrivalPinId:"arrivalPoint",
  departurePin:null,
  departurePinId:"departurePoint",
  routeId:"journeyRoute",

  onNavigate:function(context){
    debugger;
    try{
      if(typeof context =='object' && context!==null){
        this.resetForm();
        this.getCurrentLocation();
        this.journeyObj = context[DATA_MODEL.JOURNEY_TBL];
        this.userObj = context[DATA_MODEL.USER_TBL];
      }
    }catch(err){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  getCurrentLocation:function(){
    var positionoptions={};
    positionoptions.enableHighAccuracy=true;
    positionoptions.timeout=10000;
    positionoptions.maximumAge=1000;
    try{
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      kony.location.getCurrentPosition(this._geoSuccessCallback.bind(this),this._geoFailureCallback,positionoptions);
    }catch(exception){
      kony.application.dismissLoadingScreen();
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _geoSuccessCallback:function(result){
    debugger;
    try{
      kony.application.dismissLoadingScreen();
      if(typeof result==='object' && result!==null){
        if(typeof result["coords"]=='object' && result["coords"]!==null){
          this.deviceLat =result.coords.latitude;
          this.deviceLon=result.coords.longitude;
          //this.view.mapJourney.clear();
          /*var locObj={};
          locObj["lat"]=this.deviceLat;
          locObj["lon"]=this.deviceLon;
          locObj["name"]="Current Location";
          locObj["showCallout"]=false;
          locObj["image"]={};
          locObj["image"]["source"]="current_location.png";
          locObj["image"]["anchor"]=kony.map.PIN_IMG_ANCHOR_CENTER;
          if(kony.os.deviceInfo().name.toLowerCase()=='iphone' || kony.os.deviceInfo().name.toLowerCase()=='ipad'){
            this.view.mapJourney.navigateToLocation(locObj, false, true);
            this.view.mapJourney.zoomLevel=15;
          }else {
            this.view.mapJourney.zoomLevel=15;
            this.view.mapJourney.navigateToLocation(locObj, false, true);
          }*/
          //this.setLocationOnMap(this.deviceLat, this.deviceLon);
          /*var segObj={};
          segObj["imgDeparturePoints"]="bluetracker.png";
          segObj["lblDeparturePoints"]="Current Location";
          segObj["current_lattitude"]=""+this.deviceLat;
          segObj["current_longitude"]=""+this.deviceLon;*/
          //this.populatePlaceDataToDepartureSegment([segObj]);
          //this.populatePlaceDataToArraivalSegment([segObj]);
        }
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
  _geoFailureCallback:function(result){
    kony.application.dismissLoadingScreen();
    debugger;
  },
  /**
   * @function
   *
   * @param journeyObj 
   */
  setPinsAndRouteOnMap:function(journeyObj){
    this.arrivalPin=this.getPin(journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT], 
                                journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON],
                                this.arrivalPinId, "Arrival Point", 
                                journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS],
                                "arrival_point_pin.png");
    this.departurePin=this.getPin(journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT], 
                                  journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON],
                                  this.departurePinId, "Departure Point", 
                                  journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS],
                                  "departure_point_pin.png");
    try{
      this.view.mapJourney.clear();
      this.drawRoutePolyline(this.departurePin, this.arrivalPin, this.routeId, "d3d3d3FF");
      if((typeof this.deviceLat=='string'|| typeof this.deviceLat=='number') && 
         (typeof this.deviceLon=='string' || typeof this.deviceLon=='number')){
        var locObj={};
        locObj["lat"]=""+this.deviceLat;
        locObj["lon"]=""+this.deviceLon;
        locObj["name"]="Current Location";
        locObj["showCallout"]=false;
        locObj["id"]="Current Location";
        locObj["desc"]="Current Location";
        if(kony.os.deviceInfo().name.toLowerCase()=='iphone' || kony.os.deviceInfo().name.toLowerCase()=='ipad' ){
          locObj["image"]="current_location.png";
        }else{
          locObj["image"]={};
          locObj["image"]["source"]="current_location.png";
          locObj["image"]["anchor"]=kony.map.PIN_IMG_ANCHOR_CENTER;
        }
        //this.view.mapJourney.navigateToLocation(locObj, false, true);
        if(kony.os.deviceInfo().name.toLowerCase()=='iphone' || kony.os.deviceInfo().name.toLowerCase()=='ipad'){
          this.view.mapJourney.navigateToLocation(locObj, false, true);
          this.view.mapJourney.zoomLevel=10;
        }else {
          this.view.mapJourney.zoomLevel=10;
          this.view.mapJourney.navigateToLocation(locObj, false, true);
        }
      }
      this.view.forceLayout();
    }catch(excp){
      debugger;
    }
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
  /**
   * @function
   *
   * @param lat 
   * @param lon 
   * @param title 
   * @param description 
   * @param image 
   */
  getPin:function(lat,lon,id,title,description,image){
    if((typeof lat=='string' || typeof lat =='number') && 
       (typeof lon == 'string' || typeof lon=='number')) {
      /*departurePoint={};
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
        }*/
      var mapPin={};
      mapPin["lat"]=lat;
      mapPin["lon"]=lon;
      mapPin["id"]=id||"";
      mapPin["name"]=title||"";
      mapPin["desc"]=description||"";
      //mapPin["image"]=image||"";
      if(kony.os.deviceInfo().name.toLowerCase()=='iphone' || kony.os.deviceInfo().name.toLowerCase()=='ipad' ){
        mapPin["image"]=image||"";
      }else{
        mapPin["image"]={};
        mapPin["image"]["source"]=image||"";
        mapPin["image"]["anchor"]=kony.map.PIN_IMG_ANCHOR_CENTER;
      }
      mapPin["showCallout"]=true;
      return mapPin;

    }
  },
  /**
   * @function
   *
   * @param journeyObj 
   */
  populateJourneyInfo:function(journeyObj){
    try{
      if(typeof journeyObj == 'object' && journeyObj!==null){
        this.view.lblJourneyId.text = journeyObj[JOURNEY_TBL.UF_ID];
        this.setPinsAndRouteOnMap(journeyObj);
        this.setExpectedDepartureAddress(journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS]);
        this.setExpectedArrivalAddress(journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS]);
        this.setExpectedDepartureTimestamp(journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]);
        this.setExpectedArrivalTimeStamp(journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
        this.setPassengerInfo(journeyObj[JOURNEY_TBL.ID_PK]);
        this.setTrackingPointInfo(journeyObj[JOURNEY_TBL.TRACKING_POINT_ID_FK]);
        this.view.lblSupervisor.text=journeyObj[JOURNEY_TBL.SUPERVISOR_NAME];
        this.view.lblSupervisorNumber.text = journeyObj[JOURNEY_TBL.SUPERVISOR_PHONE];
        this.setVehicleInfo(journeyObj[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK]);
        this.setCheckInType(journeyObj[JOURNEY_TBL.CHECKIN_TYPE_ID_FK]);
        this.setCheckInIntervalInfo(journeyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK]);
        this.view.TravellerPhone.setText(journeyObj[JOURNEY_TBL.EMP_PHONE_NUM],
                                         true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
        this.view.supervisiorName.setText(journeyObj[JOURNEY_TBL.SUPERVISOR_NAME],true);
        this.view.supervisorPhone.setText(journeyObj[JOURNEY_TBL.SUPERVISOR_PHONE],
                                          true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
        this.view.supervisorId.setText(journeyObj[JOURNEY_TBL.SUPERVISOR_PHONE],true);
        var expectedDepartureDate=JourneyUtil.getSqlDatetoJSDate(
          journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]);
        this.view.departureDatepicker.setDate(expectedDepartureDate);
        this.view.departureTimePicker.setTime(expectedDepartureDate.getHours()+":"+
                                              expectedDepartureDate.getMinutes());
        var expectedDepartureTime=JourneyUtil.getSqlDatetoJSDate(
          journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
        this.view.arrivalDatePicker.setDate(expectedDepartureTime);
        this.view.arrivalTimePicker.setTime(expectedDepartureTime.getHours()+":"+
                                            expectedDepartureTime.getMinutes());
      }else{

      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  updateUserDetail:function(){
    var userPhone=this.view.TravellerPhone.getText();
    if(typeof userPhone=='string'){
      this.journeyObj[JOURNEY_TBL.EMP_PHONE_NUM]=userPhone;
    }
    this.hideSelectorFlex("flxUserAndPassenger");
  },
  /**
   * @function
   *
   */
  getLocationGeometry:function(placeId,address){
    debugger;
    if(typeof placeId=='string' && placeId.length>0){
      try{
        if(JourneyUtil.isNetworkAvailable()===true){
          var inputParam={};
          inputParam["placeid"]=placeId;
          inputParam["key"]=JConstant.GOOGLE_API_KEY;
          inputParam["fields"]="geometry";
          var client = kony.sdk.getCurrentInstance();
          var intgService = client.getIntegrationService(JConstant.PLACE_GEOMETRY_INTG_SERVICE.NAME);
          kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
          intgService.invokeOperation(JConstant.PLACE_GEOMETRY_INTG_SERVICE.OPERATION,{},
                                      inputParam,this._locationGeometrySuccess.bind(this,address),
                                      this._locationGeometryFailure.bind(this,address));
        }else{
          alert("Please check your network connection!");
        }
      }catch(excp){
        debugger;
        kony.application.dismissLoadingScreen();
        throw excp;
      }
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _locationGeometrySuccess:function(address,result){
    debugger;
    kony.application.dismissLoadingScreen();
    try{
      if(typeof result=='object' && result!==null){
        if(typeof result["location"]=='object' && result["location"]!==null){
          if(this.status===this.ADDRESS_UPDATE_STATUS.ARRIVAL_ADDRESS){
            this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT]=result["location"]["lat"];
            this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON]=result["location"]["lng"];
            this.setExpectedArrivalAddress(address);
          }else if(this.status==this.ADDRESS_UPDATE_STATUS.DEPARTURE_ADDRESS){
            this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT]=result["location"]["lat"];
            this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON]=result["location"]["lng"];
            this.setExpectedDepartureAddress(address);
          }
          // this.view.mapJourney.clear();
          //this.setLocationOnMap(this.departureLat, this.departureLon);
        }
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
  _locationGeometryFailure:function(address,result){
    debugger;
    kony.application.dismissLoadingScreen();
  },
  /**
   * @function
   *
   */
  onDepartureAddressSelection:function(eventobject,rowIndex,sectionIndex){
    debugger;
    try{
      if(rowIndex===0){
        //this.departureLat=this.deviceLat;
        //this.departureLon=this.deviceLon;
        this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT]=""+this.deviceLat;
        this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON]=""+this.deviceLon;
        this.getAddressForLanLang(this.deviceLat,this.deviceLon);
        // this.setLocationOnMap(this.departureLat, this.departureLon);
      }else{
        if(typeof eventobject=='object' && eventobject!==null){
          var selectedRowItems= this.view.segDeparturePoints.selectedRowItems;
          if(Array.isArray(selectedRowItems) && selectedRowItems.length>0){
            if(typeof selectedRowItems[0]=='object' && selectedRowItems[0]!==null){
              var placeId=selectedRowItems[0]["place_id"];
              if(typeof placeId=='string' && placeId.length>0){
                this.getLocationGeometry(placeId,selectedRowItems[0]["lblDeparturePoints"]);
              }else{
                this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT]=""+selectedRowItems[0]['current_lattitude'];
                this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON]=""+selectedRowItems[0]['current_longitude'];
                this.setExpectedDepartureAddress(selectedRowItems[0]["lblDeparturePoints"]);
                //this.setLocationOnMap(this.departureLat, this.departureLon);
              }
            }
          }
        }
      }
    }catch(excp){
      debugger;
    }
  },
  onArraivalAddressSelection:function(eventobject,rowIndex,sectionIndex){
    debugger;
    try{
      if(rowIndex===0){
        //this.arrivalLatitude=this.deviceLat;
        //this.arrivalLongitude=this.deviceLon;
        this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT]=""+this.deviceLat;
        this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON]=""+this.deviceLon;
        this.getAddressForLanLang(this.deviceLat,this.deviceLon);
      }else{
        if(typeof eventobject=='object' && eventobject!==null){
          var selectedRowItems= this.view.segArrivalPoints.selectedRowItems;
          if(Array.isArray(selectedRowItems) && selectedRowItems.length>0){
            if(typeof selectedRowItems[0]=='object' && selectedRowItems[0]!==null){
              var placeId=selectedRowItems[0]["place_id"];
              if(typeof placeId=='string' && placeId.length>0){
                this.getLocationGeometry(placeId,selectedRowItems[0]["lblDeparturePoints"]);
              }else{
                this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT]=""+selectedRowItems[0]['current_lattitude'];
                this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON]=""+selectedRowItems[0]['current_longitude'];
                this.setExpectedArrivalAddress(selectedRowItems[0]["lblDeparturePoints"]);
              }
              //this.setAddress(selectedRowItems[0]["lblDeparturePoints"]);

            }
          }
        }
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param lattitude 
   * @param longitude 
   */
  getAddressForLanLang:function(lattitude,longitude){
    if((typeof lattitude=='string' || typeof lattitude=='number') &&
       (typeof longitude=='string' || typeof longitude=='number')){
      try{
        if(JourneyUtil.isNetworkAvailable()===true){
          var inputParam={};
          inputParam["latitude"]=lattitude;
          inputParam["longitude"]=longitude;
          inputParam["key"]=JConstant.GOOGLE_API_KEY;
          var client = kony.sdk.getCurrentInstance();
          var intgService = client.getIntegrationService(JConstant.REVERSE_GEO_INTG_SERVICE.NAME);
          kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
          intgService.invokeOperation(JConstant.REVERSE_GEO_INTG_SERVICE.OPERATION,{},
                                      inputParam,this._reverseGeoSuccess.bind(this,lattitude,longitude),
                                      this._reverseGeoFailure.bind(this,lattitude,longitude));
        }else{
          alert("Please check your network connection!");
        }
      }catch(excp){
        debugger;
        kony.application.dismissLoadingScreen();
        //throw excp;
      }
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _reverseGeoSuccess:function(lattitude,longitude,result){
    debugger;
    if(typeof result=='object' && result!==null){
      if(Array.isArray(result["results"]) && result["results"].length>0){
        if(this.status===this.ADDRESS_UPDATE_STATUS.DEPARTURE_ADDRESS){
          this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS]=result["results"][0]["formatted_address"]||
            (" "+lattitude+","+longitude);
          this.setExpectedDepartureAddress(this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS]);
        }else if(this.status===this.ADDRESS_UPDATE_STATUS.ARRIVAL_ADDRESS){
          this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS]=result["results"][0]["formatted_address"]||
            (" "+lattitude+","+longitude);
          this.setExpectedArrivalAddress(this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS]);
        }
      }else{
        if(this.status===this.ADDRESS_UPDATE_STATUS.DEPARTURE_ADDRESS){
          this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS]=" "+lattitude+","+longitude;
          this.setExpectedDepartureAddress(this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS]);
        }else if(this.status===this.ADDRESS_UPDATE_STATUS.ARRIVAL_ADDRESS){
          this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS]=" "+lattitude+","+longitude;
          this.setExpectedArrivalAddress(this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS]);
        }
      }
      this.setPinsAndRouteOnMap(this.journeyObj);
      kony.application.dismissLoadingScreen();
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _reverseGeoFailure:function(lattitude,longitude,result){
    debugger;
    if(this.status===this.ADDRESS_UPDATE_STATUS.DEPARTURE_ADDRESS){
      this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS]=" "+lattitude+","+longitude;
    }else if(this.status===this.ADDRESS_UPDATE_STATUS.ARRIVAL_ADDRESS){
      this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS]=" "+lattitude+","+longitude;
    }
    this.setPinsAndRouteOnMap(this.journeyObj);
    kony.application.dismissLoadingScreen();
  },
  /**
   * @function
   *
   */
  onDeparturePointPlaceSearch:function(){
    debugger;
    var placeKey=this.view.txtBoxDeparture.text;
    //this.checkIfFilter = true;
    if(typeof placeKey=='string' && placeKey.length>3){
      try{
        this.searchPlaceWithKey(placeKey);
      }catch(excp){
        debugger;
      }
    }else{
      this.setExplorationPointListToAddressSegment();
    }
  },
  /**
   * @function
   *
   */
  onArraivalPointPlaceSearch:function(){
    debugger;
    var placeKey=this.view.txtBoxArraival.text;
    //this.checkIfFilter = true;
    if(typeof placeKey=='string' && placeKey.length>3){
      try{
        //this.view.flxScRoute.scrollToEnd();
        this.searchPlaceWithKey(placeKey);
      }catch(excp){
        debugger;
      }
    }else{
      this.setExplorationPointListToAddressSegment();
    }
  },
  /**
   * @function
   *
   * @param placeKey 
   */
  searchPlaceWithKey:function(placeKey){
    if(typeof placeKey=='string' && placeKey.length>1){
      try{
        if(JourneyUtil.isNetworkAvailable()===true){
          //this.view.flxScRoute.scrollToEnd();
          this._isNetworkAvailable=true;
          var inputParam={};
          inputParam["input"]=placeKey;
          inputParam["key"]=JConstant.GOOGLE_API_KEY;
          var client = kony.sdk.getCurrentInstance();
          var intgService = client.getIntegrationService(JConstant.PLACE_INTG_SERVICE.NAME);
          intgService.invokeOperation(JConstant.PLACE_INTG_SERVICE.OPERATION,{},
                                      inputParam,this._placeSearchSuccess.bind(this,placeKey),this._placeSearchFailure.bind(this));
        }else if(this._isNetworkAvailable==true){
          alert("Please check your network connection!");
          this._isNetworkAvailable=false;
        }
      }catch(excp){
        debugger;
        throw excp;
      }
    }
  },
  _placeSearchSuccess:function(placeKey,result){
    debugger;
    if(typeof result=='object' && result!==null){
      var locationDataList=[];
      var imageName;
      var segObj={};
      segObj["imgDeparturePoints"]="bluetracker.png";
      segObj["lblDeparturePoints"]="Current Location";
      segObj["current_lattitude"]=""+this.deviceLat;
      segObj["current_longitude"]=""+this.deviceLon;
      locationDataList.push(segObj);
      /*if(this.status===PROGRESS_STATUS.ARRAIVAL_ADDRESS){
        imageName="bluetracker.png";
      }else if(this.status===PROGRESS_STATUS.DEPARTURE_ADDRESS){
        imageName="bluetracker.png";
      }*/
      imageName="bluetracker.png";
      if(Array.isArray(result["predictions"]) && result["predictions"].length>0){
        for(var i=0;i<result["predictions"].length;i++){
          segObj={};
          segObj["imgDeparturePoints"]=imageName;
          segObj["lblDeparturePoints"]=result["predictions"][i]["description"];
          segObj["place_id"]=result["predictions"][i]["place_id"];
          locationDataList.push(segObj);
        }
      }
      if(this.status===this.ADDRESS_UPDATE_STATUS.ARRIVAL_ADDRESS){
        this.populatePlaceDataToArraivalSegment(placeKey,locationDataList);
      }else if(this.status===this.ADDRESS_UPDATE_STATUS.DEPARTURE_ADDRESS){
        this.populatePlaceDataToDepartureSegment(placeKey,locationDataList);
      }
    }
  },
  /**
   * @function
   *
   * @param placeKey 
   * @param locationDataList 
   */
  populatePlaceDataToDepartureSegment:function(placeKey,locationDataList){
    debugger;
    var segObj={};
    var segList=[];
    var explorationPoints;
    if(typeof placeKey=='string'){
      placeKey=placeKey.toLowerCase();
    }
    if(Array.isArray(ExplorationPoints) && ExplorationPoints.length>0){
      for(var i=0;i<ExplorationPoints.length;i++){
        if(typeof ExplorationPoints[i]["Address"]=='string'){
          explorationPoints=ExplorationPoints[i]["Address"].toLowerCase();
          if(explorationPoints==placeKey || explorationPoints.includes(placeKey)){
            segObj={};
            segObj["imgDeparturePoints"]="bluelocation.png";
            segObj["lblDeparturePoints"]=ExplorationPoints[i]["Address"];
            segList.push(segObj);
          }
        }
      }
    }
    if(Array.isArray(locationDataList)){
      locationDataList=locationDataList.concat(segList);
      this.view.segDeparturePoints.removeAll();
      this.view.segDeparturePoints.addAll(locationDataList);
    }
  },
  /**
   * @function
   *
   * @param placeKey 
   * @param dataList 
   */
  populatePlaceDataToArraivalSegment:function(placeKey,locationDataList){
    debugger;
    var segObj={};
    var segList=[];
    var explorationPoints;
    if(typeof placeKey=='string'){
      placeKey=placeKey.toLowerCase();
    }
    if(Array.isArray(ExplorationPoints) && ExplorationPoints.length>0){
      for(var i=0;i<ExplorationPoints.length;i++){
        if(typeof ExplorationPoints[i]["Address"]=='string'){
          explorationPoints=ExplorationPoints[i]["Address"].toLowerCase();
          if(explorationPoints==placeKey || explorationPoints.includes(placeKey)){
            segObj={};
            segObj["imgDeparturePoints"]="bluelocation.png";
            segObj["lblDeparturePoints"]=ExplorationPoints[i]["Address"];
            segList.push(segObj);
          }
        }
      }
    }
    if(Array.isArray(locationDataList)){
      locationDataList=locationDataList.concat(segList);
      this.view.segArrivalPoints.removeAll();
      this.view.segArrivalPoints.addAll(locationDataList);
    }
  },

  /**
   * @function
   *
   * @param result 
   */
  _placeSearchFailure:function(result){
    debugger;
  },
  /**
   * @function
   *
   */
  setExplorationPointListToAddressSegment:function(){
    try{
      debugger;
      var segObj={};
      var segList=[];
      segObj["imgDeparturePoints"]="bluetracker.png";
      segObj["lblDeparturePoints"]="Current Location";
      segObj["current_lattitude"]=""+this.deviceLat;
      segObj["current_longitude"]=""+this.deviceLon;
      segList.push(segObj);
      if(Array.isArray(ExplorationPoints)){
        for(var i=0;i<ExplorationPoints.length;i++){
          segObj={};
          segObj["imgDeparturePoints"]="bluelocation.png";
          segObj["lblDeparturePoints"]=ExplorationPoints[i]["Address"];
          segObj["current_lattitude"]=""+ExplorationPoints[i]["Lattitude"];
          segObj["current_longitude"]=""+ExplorationPoints[i]["Longitude"];
          segList.push(segObj);
        }
        this.view.segDeparturePoints.removeAll();
        this.view.segArrivalPoints.removeAll();
        this.view.segDeparturePoints.addAll(segList);
        this.view.segArrivalPoints.addAll(segList);
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  updateDepartureAddress:function(){
    debugger;
    this.view.flxDepartureAddressSelector.setVisibility(true);
    this.view.flxArraivalAddressSelector.setVisibility(false);
    this.showSelectorFlex("flxRouteSelection");
    this.status=this.ADDRESS_UPDATE_STATUS.DEPARTURE_ADDRESS;
  },
  /**
   * @function
   *
   */
  updateArrivalAddress:function(){
    debugger;
    this.view.flxDepartureAddressSelector.setVisibility(false);
    this.view.flxArraivalAddressSelector.setVisibility(true);
    this.showSelectorFlex("flxRouteSelection");
    this.status=this.ADDRESS_UPDATE_STATUS.ARRIVAL_ADDRESS;
  },
  /**
   * @function
   *
   */
  onDepartureDateSelection:function(dateString){
    if(typeof dateString=='object' && dateString!=null){
      var selectedDateObj=dateString["dateObj"];
      var utcDateString= JourneyUtil.getTimeInUTCString(selectedDateObj.getTime());
      this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]=utcDateString;
      this.view.lblStartData.text=JourneyUtil.getReadableDateString(selectedDateObj)+" "+
        JourneyUtil.getTimeStringIn12HrsFromat(selectedDateObj);
    }
  },
  /**
   * @function
   *
   */
  onArrivalDateSelection:function(dateString){
    debugger;
    if(typeof dateString=='object' && dateString!=null){
      var selectedDateObj=dateString["dateObj"];
      var utcDateString= JourneyUtil.getTimeInUTCString(selectedDateObj.getTime());
      this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=utcDateString;
      this.view.lblArrivalData.text=JourneyUtil.getReadableDateString(selectedDateObj)+" "+
        JourneyUtil.getTimeStringIn12HrsFromat(selectedDateObj);
    }
  },
  /**
   * @function
   *
   * @param timeString 
   */
  onDepartureTimeSelection:function(timeString){
    debugger;
    if(typeof timeString=='string' && timeString.length>0){
      timeString=timeString.split(':');
      var dateObj=JourneyUtil.getSqlDatetoJSDate(this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]);
      dateObj.setMinutes(timeString[1]);
      dateObj.setHours(timeString[0]);
      this.view.lblStartData.text=JourneyUtil.getReadableDateString(dateObj)+" "+
        JourneyUtil.getTimeStringIn12HrsFromat(dateObj);
      this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]=JourneyUtil.getTimeInUTCString(dateObj.getTime());
    }
  },
  /**
   * @function
   *
   * @param timeString 
   */
  onArrivalTimeString:function(timeString){
    debugger;
    if(typeof timeString=='string' && timeString.length>0){
      timeString=timeString.split(':');
      var dateObj=JourneyUtil.getSqlDatetoJSDate(this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
      dateObj.setMinutes(timeString[1]);
      dateObj.setHours(timeString[0]);
      this.view.lblArrivalData.text=JourneyUtil.getReadableDateString(dateObj)+" "+
        JourneyUtil.getTimeStringIn12HrsFromat(dateObj);
      this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=JourneyUtil.getTimeInUTCString(dateObj.getTime());
    }
  },
  /**
   * @function
   *
   * @param checkInIntervalId 
   */
  setCheckInIntervalInfo:function(checkInIntervalId){
    if(typeof checkInIntervalId == 'string' || typeof checkInIntervalId=='number'){
      var options = {};
      options["whereConditionAsAString"]=CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL_ID+"='"+checkInIntervalId+"'";
      this.fetchRecords(DATA_MODEL.CHECKIN_INTERVAL_TBL, options, null);
    }else{
      this.view.lblCheckInInterval.text="NA";
    }
  },
  /**
   * @function
   *
   * @param records 
   */
  populateCheckInIntervalInfo:function(records){
    try{
      if(Array.isArray(records) && records.length>0){
        this.view.lblCheckInInterval.text = ""+records[0][CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL];
      }else{
        this.view.lblCheckInInterval.text="NA";
      }
    }catch(excp){
      debugger;
    }
  },

  /**
   * @function
   *
   * @param checkInTypeId 
   */
  setCheckInType:function(checkInTypeId){
    if(typeof checkInTypeId == 'number' || typeof checkInTypeId == 'string'){
      var options={};
      options["whereConditionAsAString"]=CHECKIN_TYPE_TBL.CHECKIN_TYPE_ID_PK+"='"+checkInTypeId+"'";
      this.fetchRecords(DATA_MODEL.CHECKIN_TYPE_TBL, options, null);
    }
  },
  /**
   * @function
   *
   * @param vehicleId 
   */
  setVehicleInfo:function(vehicleId){
    debugger;
    if(typeof vehicleId == 'string' || typeof vehicleId == 'number'){
      this.view.flxSelectVehicleContainer.setVisibility(false);
      var options ={};
      options["whereConditionAsAString"]=VEHICLE_TBL.VEHICLE_ID_PK+"='"+vehicleId+"'";
      this.fetchRecords(DATA_MODEL.VEHICLE_TBL, options, null);
    }else{
      this.view.flxSelectVehicleContainer.setVisibility(true);
      this.view.flxVehicleDetails.setVisibility(false);
    }
    this.view.forceLayout();
  },
  /**
   * @function
   *
   * @param vehicleList 
   */
  populateVehicleInfo:function(vehicleList){
    try{
      if(Array.isArray(vehicleList) && vehicleList.length>0){
        this.view.flxVehicleName.text=vehicleList[0][VEHICLE_TBL.VEHICLE_MAKE];
        this.view.lblVehiclecolor.text=vehicleList[0][VEHICLE_TBL.VEHICLE_COLOR];
        this.view.lblVehicleNo.text=vehicleList[0][VEHICLE_TBL.VEHICLE_REG_NUM];
        this.view.flxVehicleDetails.setVisibility(true);
        this.view.flxSelectVehicleContainer.setVisibility(false);
      }else{
        this.view.flxVehicleDetails.setVisibility(false);
        this.view.flxSelectVehicleContainer.setVisibility(true);
      }
      this.view.forceLayout();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param journeyId 
   */
  setPassengerInfo:function(journeyId){
    if(typeof journeyId=='string' || typeof journeyId =='number'){
      var options = {};
      options["whereConditionAsAString"]=PASSENGERS_TBL.JOURNEY_ID_FK+"= '"+journeyId+"'";
      this.fetchRecords(DATA_MODEL.PASSENGERS_TBL, options);
    }
  },
  /**
   * @function
   *
   * @param passengerList 
   */
  populatePassengerInfo:function(passengerList){
    debugger;
    if(Array.isArray(passengerList) && passengerList.length>0){
      this.passengerList = passengerList;
      this.view.lblPassengerName.text = passengerList[0][PASSENGERS_TBL.PASSENGER_NAME];
      var segObj={};
      var segList=[];
      this.populatePassengerInfoToSegment(passengerList);
    }else{
      this.passengerList = [];
      this.view.lblPassengerName.text = "None";
      this.view.segPassenger.removeAll();
    }
  },
  /**
   * @function
   *
   */
  populatePassengerInfoToSegment:function(passengerList){
    var passengerTitle="Passenger ";
    var passengerSegObj={};
    var passengerSegList=[];
    for(var i=0;i<passengerList.length;i++){
      passengerSegObj={};
      passengerSegObj["imgHorizontalLine"]="separator.png";
      passengerSegObj["lblPassenger"]=passengerTitle+(i+1);
      passengerSegObj["imgClose"]="crossimageblue.png";
      passengerSegObj["lblNameHeader"]="Name";
      passengerSegObj["txtUserName"]=passengerList[i][PASSENGERS_TBL.PASSENGER_NAME];
      passengerSegObj["lblLine"]="";
      passengerSegObj["lblPhoneHeader"]="Mobile";
      passengerSegObj["txtUserPhone"]=passengerList[i][PASSENGERS_TBL.PASSENGER_MOBILE];
      //passengerSegObj[PASSENGERS_TBL.]
      passengerSegObj["lblLine1"]="";
      passengerSegObj[PASSENGERS_TBL.ID]=passengerList[i][PASSENGERS_TBL.ID];
      passengerSegList.push(passengerSegObj);
    }
    this.view.segPassenger.removeAll();
    this.view.segPassenger.addAll(passengerSegList);
  },
  /**
   * @function
   *
   * @param trackingPointId 
   */
  setTrackingPointInfo:function(trackingPointId){
    debugger;
    try{
      if(typeof trackingPointId=='string'|| typeof trackingPointId=='number'){
        var options={};
        options["whereConditionAsAString"]=TRACKING_POINTS_TBL.TRACKING_POINT_ID+" = "+"'"+trackingPointId+"'";
        try{
          this.fetchRecords(DATA_MODEL.TRACKING_POINTS_TBL, options);
        }catch(excp){
          debugger;
        }
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
  populateTrackingPointInfo:function(records){
    //debugger;
    try{
      if(Array.isArray(records) && records.length>0){
        this.view.lblTrackingPointName.text=records[0][TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS];
        this.view.lblTrackingPointNumber.text=records[0][TRACKING_POINTS_TBL.POINT_PHONE_1];
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
  populateCheckInTypeInfo:function(records){
    try{
      if(Array.isArray(records) && records.length>0){
        this.view.lblCheckInType.text=records[0][CHECKIN_TYPE_TBL.CHECKIN_TYPE_DESC];
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param timestamp 
   */
  setExpectedDepartureTimestamp:function(timestamp){
    if(typeof timestamp == 'string' && timestamp.length>0){
      try{
        var expectedDepartureDateObj= JourneyUtil.getSqlDatetoJSDate(timestamp);
        var expetedDepartureDateString = JourneyUtil.getReadableDateString(expectedDepartureDateObj);
        var expectedDepartureTimeString = JourneyUtil.getTimeStringIn12HrsFromat(expectedDepartureDateObj);
        this.view.lblStartData.text = expetedDepartureDateString+ " "+expectedDepartureTimeString;
      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   * @param timestamp 
   */
  setExpectedArrivalTimeStamp:function(timestamp){
    if(typeof timestamp == 'string' && timestamp.length>0){
      try{
        var expectedArrivalDateObj= JourneyUtil.getSqlDatetoJSDate(timestamp);
        var expetedArrivalDateString = JourneyUtil.getReadableDateString(expectedArrivalDateObj);
        var expectedArrivalTimeString = JourneyUtil.getTimeStringIn12HrsFromat(expectedArrivalDateObj);
        this.view.lblArrivalData.text = expetedArrivalDateString+ " "+expectedArrivalTimeString;
      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   * @param addressString 
   */
  setExpectedDepartureAddress:function(addressString){
    if(typeof addressString == 'string'){
      this.view.lblFromData.text = this.stringSubstringReturn(addressString);
      this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS]=addressString;
      this.hideSelectorFlex("flxRouteSelection");
    }
  },
  /**
   * @function
   *
   * @param addressString 
   */
  setExpectedArrivalAddress:function(addressString){
    if(typeof addressString == 'string'){
      this.view.lblToData.text = this.stringSubstringReturn(addressString);
      this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS]=addressString;
      this.hideSelectorFlex("flxRouteSelection");
    }
  },
  /**
   * @function
   *
   * @param user 
   */
  populateUserInfo:function(user){
    if(typeof user == 'object' && user!==null){
      var userName=user[USER_TBL.USER_FIRSTNAME]+" "+user[USER_TBL.USER_LASTNAME];
      this.view.lblDriverName.text = userName;
      this.view.TravellerName.setText(userName,false);
      this.setVehicleList(user[USER_TBL.USER_EMP_ID_PK]);
    }
  },
  /**
   * @function
   *
   */
  updateTrackingDetails:function(){
    debugger;
    try{
      this.updateSuperVisorDetail();
      var selectedTrackingPoints=this.view.segTrackingPoints.selectedRowItems;
      if(Array.isArray(selectedTrackingPoints) && selectedTrackingPoints.length>0){
        var trackingPointId=selectedTrackingPoints[0][TRACKING_POINTS_TBL.TRACKING_POINT_ID];
        this.journeyObj[JOURNEY_TBL.TRACKING_POINT_ID_FK]=trackingPointId;
        var trackingPointObj=this.trackingPointListMap[trackingPointId];
        this.populateTrackingPointInfo(trackingPointObj);
        var selectedJourneyReason=this.view.lstBoxJourneyReason.selectedKey;
        if(typeof selectedJourneyReason=='string' || typeof selectedJourneyReason == 'number'){
          selectedJourneyReason= parseInt(selectedJourneyReason);
          this.journeyObj[JOURNEY_TBL.REASON_ID_FK]=selectedJourneyReason;
        }
        this.hideSelectorFlex("flxTrackingPoint");
      }
    }catch(excp){
      debugger;
      //alert("exvp "+excp.message);
    }
  },
  /**
   * @function
   *
   */
  updateSuperVisorDetail:function(){
    var supervisorName;
    supervisorName=this.view.supervisiorName.getText();
    if(typeof supervisorName!=='string'){
      supervisorName="";
    }if(supervisorName.length===0){
      alert("Please provide Supervisor name!");
      throw {"message":"Supervisor phone can't be empty"};
    }
    var supervisorPhone=this.view.supervisorPhone.getText();
    if(typeof supervisorPhone!=='string'){
      supervisorPhone="";
    }
    if(supervisorPhone.length===0){
      alert("Please provide Supervisor phone!");
      throw {"message":"Supervisor phone can't be empty!"};
    }
    var supervisorSAPid;//=this.view.lstBoxSupervisor.selectedKeyValue[1];
    supervisorSAPid=this.view.supervisorId.getText();
    if(typeof supervisorSAPid!=='string'){
      supervisorSAPid="";
    }if(supervisorSAPid.length===0){
      alert("Please provide Supervisor Id!");
      throw {"message":"Supervisor name can't be empty!"};
    }
    this.view.lblSupervisor.text=supervisorName;
    this.view.lblSupervisorNumber.text=supervisorPhone;
    this.journeyObj[JOURNEY_TBL.SUPERVISOR_NAME]=supervisorName;
    this.journeyObj[JOURNEY_TBL.SUPERVISOR_PHONE]=supervisorPhone;
    this.journeyObj[JOURNEY_TBL.SUPERVISOR_EMP_ID]=supervisorSAPid;
  },
  /**
   * @function
   *
   * @param userId 
   */
  setVehicleList:function(userId){
    var options={};
    options["whereConditionAsAString"]=VEHICLE_TBL.USER_EMP_ID_FK+"='"+userId+"'";
    this.fetchRecords(DATA_MODEL.VEHICLE_TBL, options,"VEHICLE_TBL");
  },
  /**
   * @function
   *
   * @param records 
   */
  populateVehicleList:function(vehicelList){
    try{
      debugger;
      var vehicle=null;
      var vehicleObj;
      var personalVehicleList=[];
      if(Array.isArray(vehicelList)){
        this.vehicleListMap = JourneyUtil.parseRecords(vehicelList, VEHICLE_TBL.VEHICLE_ID_PK);
        for (var i = 0; i < vehicelList.length; i++) {
          vehicle = vehicelList[i];
          if (typeof vehicle == 'object' && vehicle !== null) {
            vehicleObj = {};
            vehicleObj["lblCarName"] = vehicle[VEHICLE_TBL.VEHICLE_MAKE] + " " + vehicle[VEHICLE_TBL.VEHICLE_MODEL];
            vehicleObj["lblCarModel"] = vehicle[VEHICLE_TBL.VEHICLE_REG_NUM];
            vehicleObj["lblCarColor"] = vehicle[VEHICLE_TBL.VEHICLE_COLOR];
            vehicleObj["imgVehicleIcon"] = "bluecar.png";
            vehicleObj[VEHICLE_TBL.VEHICLE_ID_PK] = vehicle[VEHICLE_TBL.VEHICLE_ID_PK];
            vehicleObj[VEHICLE_TBL.USER_EMP_ID_FK] = vehicle[VEHICLE_TBL.USER_EMP_ID_FK];
            personalVehicleList.push(vehicleObj);
          }
        }
        this.view.segmentPersonalCar.removeAll();
        this.view.segmentPersonalCar.addAll(personalVehicleList);
      }else{
        this.view.segmentPersonalCar.removeAll();
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param eventobject 
   */
  onCarSegementRowClick:function(eventobject){
    debugger;
    if(typeof eventobject=='object' && eventobject!==null){
      try{
        var selectedRowItems=eventobject.selectedRowItems;
        var vehicleObj;
        if(Array.isArray(selectedRowItems) && selectedRowItems.length>0){
          var selectedVehicle=selectedRowItems[0];
          this.setVehicleForJourney(selectedVehicle[VEHICLE_TBL.VEHICLE_ID_PK],this.journeyObj);
          vehicleObj=this.vehicleListMap[selectedVehicle[VEHICLE_TBL.VEHICLE_ID_PK]];
          if(Array.isArray(vehicleObj) && vehicleObj.length>0){
            this.populateVehicleInfo(vehicleObj);
            this.hideSelectorFlex("flxSelectVehicle");
          }
        }
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
  setVehicleForJourney:function(vehicleId,journeyObj){
    debugger;
    if(typeof vehicleId=='string' || typeof vehicleId=='number' ){
      //this.selectedVehicleId=vehicleId;
      if(typeof journeyObj=='object' && journeyObj!==null){
        journeyObj[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK]=vehicleId;
      }
    }
  },
  /**
   * @function
   *
   */
  showCheckInPointInfoSelector:function(){
    debugger;
    try{
      this.view.lstTimeCheckins.selectedKey=this.journeyObj[JOURNEY_TBL.CHECKIN_TYPE_ID_FK];
      this.onCheckInTypeSelection();
      this.showSelectorFlex("flxSelectCheckInTypeAndInterval");
      this.view.forceLayout();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  onCheckInTypeSelection:function(){
    debugger;
    try{
      debugger;
      var selectedCheckinTypeUpdate = parseInt(this.view.lstTimeCheckins.selectedKey);
      //this.journeyObj[JOURNEY_TBL.CHECKIN_TYPE_ID_FK]=selectedCheckinTypeUpdate;
      var selectedKeyValue=this.view.lstTimeCheckins.selectedKeyValue;
      /*if(Array.isArray(selectedKeyValue) && selectedKeyValue.length>1){
        this.view.lblCheckInType.text=selectedKeyValue[1];
        //this.view.lblCheckInInterval.text="NA";
      }*/
      if(selectedCheckinTypeUpdate==3){
        // No checkIn type selected.
        this.view.lblCheckinTimeFrame.isVisible=false;
        this.view.flxTimeframeSelectorRoot.isVisible=false;
        this.view.lstTimeFrameForCheckins.selectedKey=null;
        //this.journeyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK]=null;
        //this.view.lblCheckInInterval.text="NA";
      }else{
        // Setting default time interval selection in case of Time based chackin.
        this.view.lblCheckinTimeFrame.isVisible=true;
        this.view.flxTimeframeSelectorRoot.isVisible=true;
        this.view.lstTimeFrameForCheckins.selectedKey=this.journeyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK];
        //this.journeyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK]=7;
        /*var selectedTimeFrameKeyValue=this.view.lstTimeFrameForCheckins.selectedKeyValue;
        if(Array.isArray(selectedTimeFrameKeyValue) && selectedTimeFrameKeyValue.length>1){
          this.view.lblCheckInInterval.text=selectedTimeFrameKeyValue[1];
        }*/
      }
    }catch(err){
      kony.print("Exception occured while selecting checkin type and interval: "+
                 JSON.stringify(err));
      debugger;
    }
  },
  /**
   * @function
   *
   */
  onCheckInTimeFrameSelection:function(){
    return;
    try {
      debugger;
      var selectedCheckinRowIdUpdate = parseInt(this.view.lstTimeFrameForCheckins.selectedKey);
      this.journeyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK]=selectedCheckinRowIdUpdate;
      var selectedValue=this.view.lstTimeFrameForCheckins.selectedKeyValue;
      if(Array.isArray(selectedValue) && selectedValue.length>1){
        this.view.lblCheckInInterval.text=selectedValue[1];
      }
    } catch (err) {
      debugger;
      //alert(err.message);
    }
  },
  /**
   * @function
   *
   */
  showTrackingPointSelector:function(){
    debugger;
    try{
      /*this.view.flxTracking1.setVisibility(false);
      this.view.flxTracking2.setVisibility(true);
      this.showSelectorFlex("flxTrackingPoint");*/
      if(typeof this.journeyObj[JOURNEY_TBL.REASON_ID_FK] ||
         typeof this.journeyObj[JOURNEY_TBL.REASON_ID_FK]=='number'){
        this.view.lstBoxJourneyReason.selectedKey=this.journeyObj[JOURNEY_TBL.REASON_ID_FK];
      }
      this.view.supervisiorName.setText(journeyObj[JOURNEY_TBL.SUPERVISOR_NAME],true);
      this.view.supervisorPhone.setText(journeyObj[JOURNEY_TBL.SUPERVISOR_PHONE],
                                        true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
      this.view.supervisorId.setText(journeyObj[JOURNEY_TBL.SUPERVISOR_PHONE],true);
      this.view.flxTracking1.setVisibility(true);
      this.view.flxTracking2.setVisibility(false);
      this.view.forceLayout();
      this.showSelectorFlex("flxTrackingPoint");
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  showCrewSelector:function(){
    debugger;
    this.view.TravellerPhone.setText(this.journeyObj[JOURNEY_TBL.EMP_PHONE_NUM],
                                     true,constants.TEXTBOX_INPUT_MODE_NUMERIC);
    this.showSelectorFlex("flxUserAndPassenger");
  },
  /**
   * @function
   *
   */
  updateCheckInTypeAndInterval:function(){
    debugger;
    try{
      var selectedCheckinTypeUpdate = parseInt(this.view.lstTimeCheckins.selectedKey);
      this.journeyObj[JOURNEY_TBL.CHECKIN_TYPE_ID_FK]=selectedCheckinTypeUpdate;
      var selectedKeyValue=this.view.lstTimeCheckins.selectedKeyValue;
      if(Array.isArray(selectedKeyValue) && selectedKeyValue.length>1){
        this.view.lblCheckInType.text=selectedKeyValue[1];
        //this.view.lblCheckInInterval.text="NA";
      }
      if(selectedCheckinTypeUpdate==3){
        // No checkIn type selected.
        this.journeyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK]=null;
        this.view.lblCheckInInterval.text="NA";
      }else{
        // Setting default time interval selection in case of Time based chackin.
        var selectedTimeFrameKeyValue=this.view.lstTimeFrameForCheckins.selectedKeyValue;
        if(Array.isArray(selectedTimeFrameKeyValue) && selectedTimeFrameKeyValue.length>1){
          this.view.lblCheckInInterval.text=selectedTimeFrameKeyValue[1];
          this.journeyObj[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK]=parseInt(this.view.lstTimeFrameForCheckins.selectedKey);
        }
      }
      this.hideSelectorFlex("flxSelectCheckInTypeAndInterval");
    }catch(err){
      kony.print("Exception occured while selecting checkin type and interval: "+
                 JSON.stringify(err));
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
        //var trackingPointId=selectedRowItems[0][TRACKING_POINTS_TBL.TRACKING_POINT_ID];
        this.view.lstBoxJourneyReason.selectedKey=this.journeyObj[JOURNEY_TBL.REASON_ID_FK];
        this.view.flxTracking1.setVisibility(false);
        this.view.flxTracking2.setVisibility(true);
      }

    }catch(excp){
      alert("exvp "+excp.message);
    }
  },
  /**
   * @function
   *
   */
  naviagteToFormMyJourney:function(){
    try{
      var navObj=new kony.mvc.Navigation("frmMyJourneys");
      navObj.navigate();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  setJourneyReasonList:function(){
    this.fetchRecords(DATA_MODEL.JOURNEY_REASONS_MASTER_TBL, null, null);
  },
  /**
   * @function
   *
   * @param records 
   */
  populateJourneyReasonList:function(records){
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
        this.view.lstBoxJourneyReason.masterData=journeyReasonMasterData;
        this.view.lstBoxJourneyReason.selectedKey=this.journeyObj[JOURNEY_TBL.REASON_ID_FK];
        if(records.length>0){
          this.view.lstBoxJourneyReason.selectedKey=records[0][JOURNEY_REASONS_MASTER_TBL.REASON_ID_PK];
          this.selectedJourneyReasonId=records[0][JOURNEY_REASONS_MASTER_TBL.REASON_ID_PK];
        }
      }else{
        //this.selectedTrackingPointId=null;
        this.selectedJourneyReasonId=null;
        this.view.lstBoxJourneyReason.masterData=[];
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  setCheckInTypeList:function(){
    this.fetchRecords(DATA_MODEL.CHECKIN_TYPE_TBL, null,"CHECKIN_TYPE_TBL");
  },
  /**
   * @function
   *
   */
  populateCheckInTypeList:function(records){
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
        this.view.lstTimeCheckins.masterData=chekinTypeMasterData;
        if(records.length>0){
          debugger;
          this.view.lstTimeCheckins.selectedKey = records[0][CHECKIN_TYPE_TBL.CHECKIN_TYPE_ID_PK];
          this.selectedCheckinTypeId = records[0][CHECKIN_TYPE_TBL.CHECKIN_TYPE_ID_PK];
        }
      }else{
        this.selectedCheckinTypeId=null;
        this.view.lstTimeCheckins.masterData=[];
      }
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  setCheckInIntervalList:function(){
    var orderByMapJSONObj={};
    orderByMapJSONObj[CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL]="ASC";

    var orderByMap=[];
    orderByMap.push(orderByMapJSONObj);

    var options={};
    options["orderByMap"]=orderByMap;
    this.fetchRecords(DATA_MODEL.CHECKIN_INTERVAL_TBL, options,"CHECKIN_INTERVAL_TBL");
  },
  /**
   * @function
   *
   * @param result 
   */
  populateCheckInTimeFrameToListBox:function(result){
    debugger;
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
        if(result.length>1){
          this.view.lstTimeFrameForCheckins.selectedKey = result[1][CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL_ID];
          //this.setCheckinTimeFrameId(result[1][CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL_ID]);
        }else{
          //this.setCheckinTimeFrameId(result[0][CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL_ID]);
        }
      }else{
        //this.setCheckinTimeFrameId(null);
        this.view.lstTimeFrameForCheckins.masterData=[];
      }
    }catch(excp){
      debugger;
    }
  },
  addPassenger:function(PassengerName,PassengerPhone){
    debugger;
    try{
      var rows=this.view.segPassenger.data;
      var passengerTitle="Passenger ";
      var count=0;
      if(Array.isArray(rows)){
        passengerTitle=passengerTitle+(rows.length+1);
        count=rows.length;
      }else{
        passengerTitle=passengerTitle+1;
      }
      var data={
        "imgHorizontalLine":"separator.png",
        "lblPassenger":passengerTitle,
        "imgClose":"crossimageblue.png",

        "lblNameHeader":"Name",
        "txtUserName":PassengerName,
        "lblLine":" ",

        "lblPhoneHeader":"Mobile",
        "txtUserPhone":PassengerPhone,
        "lblLine1":" "
      };
      //data[PASSENGERS_TBL.ID]=null;
      if(PassengerName!=="" || PassengerPhone!=="")
        this.view.segPassenger.addDataAt(data, count, 0);
      this.view.flxNewJourneyTraveller.scrollToEnd();
    }catch(err){
      debugger;
    }
  },
  removePassenger:function(widgetRef,param){
    debugger;
    if(typeof param=='object' && param!==null){
      if((typeof param["rowIndex"]=='string'||typeof param["rowIndex"]=='number')&&
         (typeof param["sectionIndex"]=='string'||typeof param["sectionIndex"]=='number')){
        this.view.segPassenger.removeAt(param["rowIndex"], param["sectionIndex"]);
      }
    }
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    debugger;
    this.populateJourneyInfo(this.journeyObj);
    this.populateUserInfo(this.userObj);
    //this.view.segPassenger.setEnabled(false);
    this.setTrackingPointList();
    this.setJourneyReasonList();
    this.setCheckInTypeList();
    this.setCheckInIntervalList();
    this.setExplorationPointListToAddressSegment();
    this.view.txtBoxArraival.text="";
    this.view.txtBoxDeparture.text="";

    //this.setJourneyReasonList();
    return;

    if(context.typeOfDataEdit == "AddressDetails"){
      debugger;
      this.AddressDetails = context.AddressDetails;
      this.view.lblFromData.text = this.stringSubstringReturn(this.AddressDetails.journey_expected_departure_address);
      //this.view.lblStartData.text = DateConversion(new Date(this.AddressDetails.journey_expected_departure_datetime));
      if(typeof this.AddressDetails.journey_expected_departure_datetime == 'string' && 
         this.AddressDetails.journey_expected_departure_datetime.length>0){
        try{
          var expectedDepartureDateObj= JourneyUtil.getSqlDatetoJSDate(this.AddressDetails.journey_expected_departure_datetime);
          var expetedDepartureDateString = JourneyUtil.getReadableDateString(expectedDepartureDateObj);
          var expectedDepartureTimeString = JourneyUtil.getTimeStringIn12HrsFromat(expectedDepartureDateObj);
          this.view.lblStartData.text = expetedDepartureDateString+ " "+expectedDepartureTimeString;
        }catch(excp){
          debugger;
        }
      }
      //this.view.lblArrivalData.text = DateConversion(new Date(this.AddressDetails.journey_expected_arrival_datetime));
      if(typeof this.AddressDetails.journey_expected_arrival_datetime == 'string' && 
         this.AddressDetails.journey_expected_arrival_datetime.length>0){
        try{
          var expectedArrivalDateObj= JourneyUtil.getSqlDatetoJSDate(this.AddressDetails.journey_expected_arrival_datetime);
          var expetedArrivalDateString = JourneyUtil.getReadableDateString(expectedArrivalDateObj);
          var expectedArrivalTimeString = JourneyUtil.getTimeStringIn12HrsFromat(expectedArrivalDateObj);
          this.view.lblArrivalData.text = expetedArrivalDateString+ " "+expectedArrivalTimeString;
        }catch(excp){
          debugger;
        }
      }
      this.view.lblToData.text = this.stringSubstringReturn(this.AddressDetails.journey_expected_arrivalpoint_address);
      return;
    }
    if (this.typeOfDataEdit == "VehicleDetails") {
      this.view.flxVehicleName.text = context.VehicleDetails.vehicle_make + " " + context.VehicleDetails.vehicle_model;
      this.view.lblVehiclecolor.text = context.VehicleDetails.vehicle_color;
      this.view.lblVehicleNo.text = context.VehicleDetails.vehicle_reg_num;
      this.VehicleDetails.vehicle_make = context.VehicleDetails.vehicle_make;
      this.VehicleDetails.vehicle_model = context.VehicleDetails.vehicle_model;
      this.VehicleDetails.vehicle_reg_num = context.VehicleDetails.vehicle_reg_num;
      this.VehicleDetails.vehicle_color = context.VehicleDetails.vehicle_color;
      this.VehicleDetails.vehicle_id_pk = context.VehicleDetails.vehicle_id_pk;
      return;
    }
    if(this.typeOfDataEdit == "DriverPassenger")
    {

      //Update in the Driver details
      this.DriverDetails[0].user_satellite = context.JourneyObj.journey_satellite;
      this.DriverDetails[0].user_radio = context.JourneyObj.journey_radio;

      //Update in the Passenger Details
      this.PassengerDetails = context.PassengerList;
      if(this.PassengerDetails.length>0)
      {
        this.view.lblPassengerName.text =  this.PassengerDetails[0].passenger_name;
      }
      else
      {
        this.view.lblPassengerName.text = "None";
      }
      return;
    }
    if (this.typeOfDataEdit == "TrackingDetails") {
      this.TrackingDetails = context.TrackingDetails;
      try
      {
        var TrackingPointIdNew = GetResponseFromDatabaseWhereClause(TRACKING_POINTS_TBL_GLOBAL,
                                                                    TRACKING_POINTS_TBL.TRACKING_POINT_ID,
                                                                    this.TrackingDetails.journey_tracking_point_id_fk);
        this.view.lblTrackingPointName.text = TrackingPointIdNew[0].tracking_point_address;
        this.view.lblTrackingPointNumber.text = TrackingPointIdNew[0].tracking_point_phone_1;
        this.view.lblSupervisor.text = this.TrackingDetails.journey_supervisor_name;
        this.view.lblSupervisorNumber.text = this.TrackingDetails.journey_supervisor_phone;
      }
      catch(err)
      {
        this.view.lblTrackingPointName.text = "";
        this.view.lblTrackingPointNumber.text = "";
        this.view.lblSupervisor.text = "";
        this.view.lblSupervisorNumber.text = "";
        alert(err.message);
      }
      return;
    }



    //MainScreen HeaderText
    var JourneyIDPK = context.data[0].journey_id_pk;
    this.JourneyIDPK = JourneyIDPK;
    var ReceivedDataFromMyJourneys = context.data[0];
    this.view.lblJourneyId.text = context.data[0].journey_uf_id;


    //MainScreen Departure
    this.view.lblFromData.text = this.stringSubstringReturn(ReceivedDataFromMyJourneys.journey_expected_departure_address);
    //this.view.lblStartData.text = DateConversion(new Date(ReceivedDataFromMyJourneys.journey_expected_departure_datetime));
    if(typeof ReceivedDataFromMyJourneys.journey_expected_departure_datetime == 'string' && 
       ReceivedDataFromMyJourneys.journey_expected_departure_datetime.length>0){
      try{
        var expectedDepartureDateObj= JourneyUtil.getSqlDatetoJSDate(ReceivedDataFromMyJourneys.journey_expected_departure_datetime);
        var expetedDepartureDateString = JourneyUtil.getReadableDateString(expectedDepartureDateObj);
        var expectedDepartureTimeString = JourneyUtil.getTimeStringIn12HrsFromat(expectedDepartureDateObj);
        this.view.lblStartData.text = expetedDepartureDateString+ " "+expectedDepartureTimeString;
      }catch(excp){
        debugger;
      }
    }
    //MainScreen Arrival
    //this.view.lblArrivalData.text = DateConversion(new Date(ReceivedDataFromMyJourneys.journey_expected_arrival_datetime));

    if(typeof ReceivedDataFromMyJourneys.journey_expected_arrival_datetime == 'string' && 
       ReceivedDataFromMyJourneys.journey_expected_arrival_datetime.length>0){
      try{
        var expectedArrivalDateObj= JourneyUtil.getSqlDatetoJSDate(ReceivedDataFromMyJourneys.journey_expected_arrival_datetime);
        var expetedArrivalDateString = JourneyUtil.getReadableDateString(expectedArrivalDateObj);
        var expectedArrivalTimeString = JourneyUtil.getTimeStringIn12HrsFromat(expectedArrivalDateObj);
        this.view.lblArrivalData.text = expetedArrivalDateString+ " "+expectedArrivalTimeString;
      }catch(excp){
        debugger;
      }
    }
    this.view.lblToData.text = this.stringSubstringReturn(ReceivedDataFromMyJourneys.journey_expected_arrivalpoint_address);

    var AddressDetails = {};
    AddressDetails['journey_expected_departure_address'] = ReceivedDataFromMyJourneys.journey_expected_departure_address;
    AddressDetails['journey_expected_departure_datetime'] = ReceivedDataFromMyJourneys.journey_expected_departure_datetime;
    AddressDetails['journey_expected_arrivalpoint_address'] = ReceivedDataFromMyJourneys.journey_expected_arrivalpoint_address;
    AddressDetails['journey_expected_arrival_datetime'] = ReceivedDataFromMyJourneys.journey_expected_arrival_datetime;
    AddressDetails['journey_expected_departure_lat'] = ReceivedDataFromMyJourneys.journey_expected_departure_lat;
    AddressDetails['journey_expected_departure_lon'] = ReceivedDataFromMyJourneys.journey_expected_departure_lon;
    AddressDetails['journey_expected_arrivalpoint_lat'] = ReceivedDataFromMyJourneys.journey_expected_arrivalpoint_lat;
    AddressDetails['journey_expected_arrivalpoint_lon'] = ReceivedDataFromMyJourneys.journey_expected_arrivalpoint_lon;
    AddressDetails['checkin_interval_row_id_fk'] = ReceivedDataFromMyJourneys.checkin_interval_row_id_fk;
    AddressDetails['checkin_type_id_fk'] = ReceivedDataFromMyJourneys.checkin_type_id_fk;
    this.AddressDetails = AddressDetails;



    //MainScreen DriveDetails
    try{
      var DriverDetails = GetResponseFromDatabaseWhereClause(USER_TBL_GLOBAL, USER_TBL.USER_EMP_ID_PK, ReceivedDataFromMyJourneys.user_emp_id_fk);
      this.DriverDetails = DriverDetails;
      this.view.lblDriverName.text = DriverDetails[0].user_firstname+" "+DriverDetails[0].user_lastname;
    }
    catch(err)
    {
      alert("Error in Getting Driver Details: "+err.message);
    }

    //MainScreen Passengers
    try{
      var PassengerDetails = GetResponseFromDatabaseWhereClause(JOURNEY_PASSENGERS_TBL_GLOBAL, JOURNEY_PASSENGERS_TABLE.JOURNEY_ID_FK, JourneyIDPK);
      if(PassengerDetails.length === 0)
      {
        this.view.lblPassengerName.text = "None";
      }
      else
      {
        this.view.lblPassengerName.text = PassengerDetails[0].passenger_name;
        this.PassengerDetails = PassengerDetails;
      }
    }
    catch(err)
    {
      alert("Error in Getting PassengerDetails: "+err.message);
    }


    //MainScreen Tracking Point
    try{
      var TrackingDetails = GetResponseFromDatabaseWhereClause(TRACKING_POINTS_TBL_GLOBAL, TRACKING_POINTS_TBL.TRACKING_POINT_ID, ReceivedDataFromMyJourneys.journey_tracking_point_id_fk);
      this.view.lblTrackingPointName.text = TrackingDetails[0].tracking_point_address;
      this.view.lblTrackingPointNumber.text = TrackingDetails[0].tracking_point_phone_1;
      //       this.TrackingDetails = TrackingDetails;
    }
    catch(err)
    {
      alert("Error in Getting TrackingDetails: "+err.message);
    }

    //MainScreen Spervisor
    this.view.lblSupervisor.text = ReceivedDataFromMyJourneys.journey_supervisor_name;
    this.view.lblSupervisorNumber.text = ReceivedDataFromMyJourneys.journey_supervisor_phone;

    this.TrackingDetails.journey_supervisor_name = ReceivedDataFromMyJourneys.journey_supervisor_name;
    this.TrackingDetails.journey_supervisor_emp_id = ReceivedDataFromMyJourneys.journey_supervisor_emp_id;
    this.TrackingDetails.journey_supervisor_phone = ReceivedDataFromMyJourneys.journey_supervisor_phone;
    this.TrackingDetails.journey_tracking_point_id_fk = ReceivedDataFromMyJourneys.journey_tracking_point_id_fk;
    this.TrackingDetails.journey_reason_id_fk = ReceivedDataFromMyJourneys.journey_reason_id_fk;

    //MainScreen VehicleDetails
    try{
      var VehicleDetails = GetResponseFromDatabaseWhereClause(VEHICLE_TBL_GLOBAL, VEHICLE_TBL.VEHICLE_ID_PK, ReceivedDataFromMyJourneys.journey_selected_vehicle_id_fk);
      this.view.flxVehicleName.text = VehicleDetails[0].vehicle_make+" "+VehicleDetails[0].vehicle_model;
      this.view.lblVehiclecolor.text = VehicleDetails[0].vehicle_color;
      this.view.lblVehicleNo.text = VehicleDetails[0].vehicle_reg_num;
      this.VehicleDetails = VehicleDetails;
    }
    catch(err)
    {
      toast("Error in Getting VehicleDetails: "+err.message);
    }
  },
  /**
   * @function
   *
   */
  setTrackingPointList:function(){
    try{
      this.fetchRecords(DATA_MODEL.TRACKING_POINTS_TBL, null, "TRACKINGPOINT_LIST");
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  populateTrackinPointList:function(records){
    try{
      var segObj;
      var trackingPointList=[];
      if(Array.isArray(records) && records.length>0){
        this.trackingPointListMap=JourneyUtil.parseRecords(records, TRACKING_POINTS_TBL.TRACKING_POINT_ID);
        for(var i=0;i<records.length;i++){
          segObj={};
          segObj["imgTrackingPoint"]="trackerblue.png";
          segObj["imgSelected"]="threeverticaldotswhite.png";
          segObj["lblTrackingPoint"]=records[i][TRACKING_POINTS_TBL.TRACKING_POINT_ADDRESS];
          segObj[TRACKING_POINTS_TBL.TRACKING_POINT_ID]=records[i][TRACKING_POINTS_TBL.TRACKING_POINT_ID];
          trackingPointList.push(segObj);
        }
        this.view.segTrackingPoints.removeAll();
        this.view.segTrackingPoints.setData(trackingPointList);
        //this.view.flxTracking1.setVisibility(true);
      }else{
        this.view.segTrackingPoints.removeAll();
      }
    }catch(excp){
      debugger;
    }
  },

  onDriverPassengerClick:function()
  {
    var params={"isUpdate":true,"DriverDetails":this.DriverDetails,"isDriver":true,"isPassenger":true,"PassengerDetails":this.PassengerDetails};
    var navObj = new kony.mvc.Navigation("frmNewJourneyTraveller");
    navObj.navigate(params);
  },
  stringSubstringReturn:function(stringToReturn)
  {
    if(typeof(stringToReturn) == 'string') 
    {
      //return stringToReturn.substring(0,40)+"...";
    }
    return stringToReturn;
  },
  TrackingDetailsOnClickEvent:function()
  {
    var params={"isUpdate":true,"typeOfDataEdit":"TrackingDetails","TrackingDetails":this.TrackingDetails};
    var navObj = new kony.mvc.Navigation("frmNewJourneyTracking");
    navObj.navigate(params);
  },
  VehicleDetailsOnClickEvent:function()
  {
    var navObj = new kony.mvc.Navigation('frmNewJourneyVehicle');
    var params = {
      "isUpdate": true,
      "typeOfDataEdit": "VehicleDetails",
      "VehicleDetails": this.VehicleDetails
    };

    navObj.navigate(params);
  },

  RouteDetailsOnClickEvent:function()
  {
    debugger;
    var navObj = new kony.mvc.Navigation('frmNewJourneyRoute');
    var params = {
      "isUpdate": true,
      "typeOfDataEdit": "AddressDetails",
      "AddressDetails": this.AddressDetails
    };

    navObj.navigate(params);
  },
  //Final Call Update Journey
  UpdateJourneyWithDetails:function()
  {
    debugger;
    try {
      var RecordsToUpdate = {
        "journey_last_updated_by": this.VehicleDetails[0].lastupdatedby,
        "journey_satellite": this.DriverDetails[0].user_satellite,
        "journey_expected_departure_lat": this.AddressDetails.journey_expected_departure_lat,
        "journey_emp_phone_num": this.DriverDetails[0].user_phone1,
        "journey_selected_vehicle_id_fk": this.VehicleDetails[0].vehicle_id_pk,
        "journey_expected_arrivalpoint_address": this.AddressDetails.journey_expected_arrivalpoint_address,
        "journey_expected_departure_address": this.AddressDetails.journey_expected_departure_address,
        "journey_supervisor_phone": this.TrackingDetails.journey_supervisor_phone,
        "checkin_interval_row_id_fk": this.AddressDetails.checkin_interval_row_id_fk,
        "journey_radio": this.DriverDetails[0].user_radio,
        "journey_expected_arrivalpoint_lon": this.AddressDetails.journey_expected_arrivalpoint_lon,
        "journey_expected_departure_datetime": this.AddressDetails.journey_expected_departure_datetime,
        "user_emp_id_fk": this.DriverDetails[0].user_emp_id_pk,
        "journey_created_by_fk": this.DriverDetails[0].user_emp_id_pk,
        "journey_expected_arrivalpoint_lat": this.AddressDetails.journey_expected_arrivalpoint_lat,
        "checkin_type_id_fk": this.AddressDetails.checkin_type_id_fk,
        "journey_expected_departure_lon": this.AddressDetails.journey_expected_departure_lon,
        "journey_supervisor_name": this.TrackingDetails.journey_supervisor_name,
        "journey_supervisor_emp_id": this.TrackingDetails.journey_supervisor_emp_id,
        "journey_reason_id_fk": this.TrackingDetails.journey_reason_id_fk,
        "journey_expected_arrival_datetime": this.AddressDetails.journey_expected_arrival_datetime,
        "journey_tracking_point_id_fk": this.TrackingDetails.journey_tracking_point_id_fk,
        "lastupdateddatetime":null
      };
      UpdateRecordWithParams(JOURNEY_TBL_GLOBAL, "journey_id_pk", this.JourneyIDPK, RecordsToUpdate);


      debugger;
      var ArrayofPassengerObj = GetResponseFromDatabaseWhereClause(JOURNEY_PASSENGERS_TBL_GLOBAL, 'journey_id_fk', this.JourneyIDPK);
      var ArrayofPassengerObjNew = this.PassengerDetails;

      try
      {if(ArrayofPassengerObj !== null && ArrayofPassengerObj !== undefined && ArrayofPassengerObj.length!==0)
      {
        ArrayofPassengerObj.forEach(function(EachPassenger){
          try
          {
            DeleteRowByPrimaryKey(JOURNEY_PASSENGERS_TBL_GLOBAL, 
                                  JOURNEY_PASSENGERS_TABLE.ROW_ID_PK,
                                  EachPassenger[JOURNEY_PASSENGERS_TABLE.ROW_ID_PK]);
          }
          catch(err)
          {
            toast("Error :: DeleteRowByPrimaryKey");

          }
        }.bind(this));
        if(ArrayofPassengerObjNew !== null && ArrayofPassengerObjNew !== undefined && ArrayofPassengerObjNew.length!==0)
        {
          ArrayofPassengerObjNew.forEach(function(EachPassenger){
            try
            {
              EachPassenger[JOURNEY_PASSENGERS_TABLE.JOURNEY_ID_FK] = this.JourneyIDPK;
              AddNewRowIntoTable(JOURNEY_PASSENGERS_TBL_GLOBAL, EachPassenger);
            }
            catch(err)
            {
              toast("Error :: AddNewRowIntoTable");
            }
          }.bind(this));
        }
      }
      }catch(err)
      {
        alert(err.message);
      }
      if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
      {
        this.startSync();        
      }
      else
      {
        alert("Please Be Online and Sync at Login.");
        var navObj = new kony.mvc.Navigation("frmMyJourneys");
        var param={};
        param["prevForm"]="UpdateJourney";
        navObj.navigate(param);
      }
    }
    catch(err)
    {
      alert(err.message);
    }

  },
  /**
   * @function
   *
   */
  startSync2:function(){
    debugger;
    kony.application.showLoadingScreen("","Syncing Please Wait.",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var syncOptions={};
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    //syncOptions.uploadBatchSize = 200;
    //syncOptions.getSyncStats = true;
    syncOptions.filter={};
    syncOptions.filter[DATA_MODEL.JOURNEY_TBL]=JOURNEY_TBL.USER_EMP_ID_FK+' eq '+this.userObj[USER_TBL.USER_EMP_ID_PK];
    try{
      var syncObjService= new kony.sdk.KNYObjSvc(ObjectServiceName);
      syncObjService.startSync(syncOptions,this.successCBStartSync.bind(this),this.failureCBStartSync.bind(this),this.progressCBStartSync.bind(this));
    }catch(excp){
      kony.application.dismissLoadingScreen();
      kony.print("Error in StartSync: "+excp.error);
    }
  },

  successCBStartSync:function(result){
    kony.application.showLoadingScreen("","Navigating to Main Form.",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    var navObj = new kony.mvc.Navigation("frmMyJourneys");
    var param={};
    param["prevForm"]="UpdateJourney";
    navObj.navigate(param);

  },
  progressCBStartSync:function(result){

  },
  failureCBStartSync:function(result){
    debugger;
    alert("Sync Failed."+JSON.stringify(result));
    kony.application.dismissLoadingScreen();
  },
  /**
   * @function
   *
   */
  resetForm:function(){
    try{
      this.view.flxPopUps.setVisibility(false);
      this.view.mapJourney.clear();
    }catch(excp){
      debugger;
    }
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
  showSelectorFlex:function(flexId){
    try{
      this.view[flexId].animate(
        kony.ui.createAnimation({100:{top:"0%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.2},
        {animationEnd: function() {
        } 
        });
    }catch(excp){
      debugger;
      kony.print("Exception occured while trying to show the flex");
    }   
  },
  /**
   * @function
   *
   */
  hideSelectorFlex:function(flexId){
    try{
      this.view[flexId].animate(
        kony.ui.createAnimation({100:{top:"100%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.2},
        {animationEnd: function() {
        } 
        });
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
          /*case DATA_MODEL.USER_TBL:
          this.userObj=result[0];
          this.setUserInfo(result[0]);
          break;*/
        case DATA_MODEL.PASSENGERS_TBL:
          this.populatePassengerInfo(result);
          break;
        case DATA_MODEL.VEHICLE_TBL:
          //this.view.flxVehicleDetails.setVisibility(true);
          if(info=="VEHICLE_TBL"){
            //this.setCompanyAndPersonalVehiclList(result);
            this.populateVehicleList(result);
          }else{
            this.populateVehicleInfo(result);
          }
          break;
        case DATA_MODEL.CHECKIN_INTERVAL_TBL:
          if(info == "CHECKIN_INTERVAL_TBL"){
            this.populateCheckInTimeFrameToListBox(result);
          }else{
            this.populateCheckInIntervalInfo(result);
          }
          break;
        case DATA_MODEL.TRACKING_POINTS_TBL:
          if(info=="TRACKINGPOINT_LIST"){
            this.populateTrackinPointList(result);
          }else{
            this.populateTrackingPointInfo(result);
          }
          break;
        case DATA_MODEL.CHECKIN_TYPE_TBL:
          if(info=="CHECKIN_TYPE_TBL"){
            this.populateCheckInTypeList(result);
          }else{
            this.populateCheckInTypeInfo(result);
          }
          break;
        case DATA_MODEL.JOURNEY_REASONS_MASTER_TBL:
          this.populateJourneyReasonList(result);
          break;
          /*case DATA_MODEL.GUIDES_MANUALS_TBL:
          this.populateGuidesAndMannuals(result);
          break;
        case DATA_MODEL.QUESTION_LOCALISATION_TBL:
          this.processQuestionLocalisationList(result);
          break;
        case DATA_MODEL.CHECKLIST_QUESTIONS_TBL:
          this.processCheckListQuestion(result,info);
          break;
        case DATA_MODEL.QUESTION_OPTIONS_TBL:
          this.processQuestionOptions(result);
          break;*/
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
  updateJourney:function(){
    //this.updateVehicleInfo();
    debugger;
    if(typeof this.journeyObj=='object' && this.journeyObj!==null){
      try{
        var updateRecord = JSON.parse(JSON.stringify(this.journeyObj));
        delete updateRecord[JOURNEY_TBL.ID_PK];
        updateRecord[JOURNEY_TBL.LAST_UPDATED_TIMESTAMP]=null;//JourneyUtil.getCurrentDateTimeInUTC();
        updateRecord[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT]=""+updateRecord[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT];
        updateRecord[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON]=""+updateRecord[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON];
        updateRecord[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT]=""+updateRecord[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT];
        updateRecord[JOURNEY_TBL.EXPECTED_DEPARTURE_LON]=""+updateRecord[JOURNEY_TBL.EXPECTED_DEPARTURE_LON];
        if(updateRecord[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK]==null){
          delete updateRecord[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK];
        }
        if(updateRecord[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK]==null){
          delete updateRecord[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK];
        }
        delete updateRecord["softdeleteflag"];
        var options={};
        var id=JOURNEY_TBL.ID_PK;
        options["primaryKeys"]={};
        options["primaryKeys"][id]=this.journeyObj[JOURNEY_TBL.ID_PK];
        var sdkObj=new kony.sdk.KNYObj(DATA_MODEL.JOURNEY_TBL);
        sdkObj.updateByPK(updateRecord,options, this.updateRecordSuccess.bind(this), this.updateRecordFailure.bind(this));
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
  updateRecordSuccess:function(result){
    debugger;
    try{
      this.startSync();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  updateRecordFailure:function(result){
    debugger;
  },
  startSync:function(){
    debugger;
    var syncOptions={};//"downloadBatchSize":"100",
    //syncOptions.uploadBatchSize="200";
    //syncOptions.GetSyncStats=true;
    syncOptions.uploadBatchSize=1;
    syncOptions.downloadBatchSize=1;
    
    //syncOptions.filter={};
    //syncOptions.filter[DATA_MODEL.JOURNEY_TBL]=JOURNEY_TBL.USER_EMP_ID_FK+' eq '+this.userObj[USER_TBL.USER_EMP_ID_PK];
    try{
      syncOptions["filter"]=kony.store.getItem("SYNC_FILTER");
      var syncObjService= new kony.sdk.KNYObjSvc(JConstant.OFFLINE_OBJECT_SERVICE);
      kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
      syncObjService.startSync(syncOptions,this.syncSuccessCB.bind(this),this.syncFailureCB.bind(this),this.progressCallBack);
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  /**
   * @function
   *
   */
  progressCallBack:function(){

  },
  /**
   * @function
   *
   * @param response 
   */
  syncSuccessCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
    this.view.flxPopUps.setVisibility(true);
    this.view.forceLayout();
    //alert("Journey updated successfully");
  },
  /**
   * @function
   *
   * @param response 
   */
  syncFailureCB:function(response){
    debugger;
    kony.application.dismissLoadingScreen();
  },
  /**
   * @function
   *
   */
  navigateToMyJourney:function(){
    debugger;
    try{
      var navObj=new kony.mvc.Navigation("frmMyJourneys");
      navObj.navigate();
    }catch(excp){
      debugger;
    }
  },
  onMapClick:function(eventobject,latLang){
    debugger;
    if(typeof latLang=='object' && latLang!==null){
      if(this.status==this.ADDRESS_UPDATE_STATUS.ARRIVAL_ADDRESS){
        if((typeof latLang["lat"]=='string' || typeof latLang["lat"]== 'number')&&
           (typeof latLang["lon"]=='string' || typeof latLang["lon"]== 'number')
          ){
          this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT]=""+latLang["lat"];
          this.journeyObj[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON]=""+latLang["lon"];
        }
      }else if(this.status==this.ADDRESS_UPDATE_STATUS.DEPARTURE_ADDRESS){
        if((typeof latLang["lat"]=='string' || typeof latLang["lat"]== 'number')&&
           (typeof latLang["lon"]=='string' || typeof latLang["lon"]== 'number')
          ){
          this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT]=""+latLang["lat"];
          this.journeyObj[JOURNEY_TBL.EXPECTED_DEPARTURE_LON]=""+latLang["lon"];
        }
      }
      this.getAddressForLanLang(latLang["lat"],latLang["lon"]);
    }
  },
  /**
   * @function
   *
   * @param lat 
   * @param lon 
   */
  setLocationOnMap:function(lat,lon,title,description){
    debugger;
  }

});