define({ 

  navigationData:null,
  prevForm:null,
  journey:null,
  passengerList:null,
  checkIfFilter:false,

  //EditDetails
  isEditDetails : {},
  isEdit : false,
  isEditFlag:false,


  deviceLat:null,
  deviceLon:null,
  isFreshForm:true,

  departureLat:null,
  departureLon:null,
  departureAddress:null,

  arrivalLatitude:null,
  arrivalLongitude:null,
  arraivalAddress:null,

  departureDate:null,
  departureTime:null,

  arrivalDate:null,
  arrivalTime:null,

  status:PROGRESS_STATUS.DEPARTURE_ADDRESS,
  selectedCheckinTypeId:null,
  selectedCheckInTimeFrameId:null,

  user:null,

  AddressDetails:{},
  isUpdate:false,
  typeOfDataEdit:null,
  selectedCheckinRowIdUpdate: null,
  selectedCheckinTypeUpdate: null,
  clearTracking:true,

  _isNetworkAvailable:true,
  /**
   * @function
   *
   */
  onNavigate:function(param){
    debugger;
    
    this.isUpdate = false;
	this.isEditFlag = false;
    if(param!==undefined && param!==null && param.isUpdate && param.typeOfDataEdit === "AddressDetails")
    {
      this.isUpdate = param.isUpdate;
      this.view.lblCenterText.text = "Update Journey";
      this.typeOfDataEdit = param.typeOfDataEdit;
      this.AddressDetails = param.AddressDetails;
    }
    if(param !==undefined && param!== null && param.isEdit)
    {
      this.isEdit = true;
      this.view.lblCenterText.text = "Update Journey";
      this.isEditDetails = param.EditDetails;
    }
    if(typeof param=='object' && param!==null){
      if(param["clearTracking"]===false){
        this.clearTracking=false;
        this.isFreshForm = false;
        return;
      }
      this.clearTracking=true;
      this.resetGlobalVariable();
      this.navigationData=param;
      this.journey=param["journey"];
      this.prevForm=param["prevForm"];
      this.passengerList=param["passangerList"];
      this.user=param[DATA_MODEL.USER_TBL];
      this.isFreshForm=true;
      this.status=PROGRESS_STATUS.DEPARTURE_ADDRESS;
      this.view.flexDeparturePoint.setVisibility(true);
      this.view.mapJourney.height="100%";
      this.view.flexEditClose.isVisible=false;
      this.view.flexSwitchToSearch.isVisible=false;
      this.view.flxDepartureDate.setVisibility(false);
      this.hideArraivalAddressSelector();
      this.hideArrivalDateTimePicker();
      this.view.flxConfirmAddressSelection.isVisible=false;
      this.view.selectedAddress.isVisible=false;
      this.view.forceLayout();
    }else{
      this.isFreshForm=false;
      this.status="ARRAIVAL";
    }
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    debugger;
    if(this.isFreshForm===true){
      try {
        kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
        this.resetFormData();
        if (this.deviceLat === null && this.deviceLon === null) {
          this.getCurrentLocation();
        } else {
          this.setLocationOnMap(this.deviceLat, this.deviceLon);
          var segObj = {};
          segObj["imgDeparturePoints"] = "bluelocation.png";
          segObj["lblDeparturePoints"] = "Current Location";
          segObj["current_lattitude"] = this.deviceLat;
          segObj["current_longitude"] = this.deviceLon;
          if(this.isUpdate)
          {
            this.setLocationOnMap(parseFloat(this.AddressDetails.journey_expected_departure_lat), parseFloat(this.AddressDetails.journey_expected_departure_lon));
            var segObj1 = {};
            segObj1["imgDeparturePoints"] = "bluetracker.png";
            segObj1["lblDeparturePoints"] = this.AddressDetails.journey_expected_departure_address;
            segObj1["current_lattitude"] = this.AddressDetails.journey_expected_departure_lat;
            segObj1["current_longitude"] = this.AddressDetails.journey_expected_departure_lon;
            this.populatePlaceDataToDepartureSegment([segObj,segObj1]);
          }
          else
          {
            this.populatePlaceDataToDepartureSegment([segObj]);
          }
          this.populatePlaceDataToArraivalSegment([segObj]);
        }
        if(this.isUpdate)
        {
          var segObj3 = {};
          segObj3["imgDeparturePoints"] = "bluelocation.png";
          segObj3["lblDeparturePoints"] = "Current Location";
          segObj3["current_lattitude"] = this.deviceLat;
          segObj3["current_longitude"] = this.deviceLon;
          var segObjTemp = {};
          segObjTemp["imgDeparturePoints"] = "bluetracker.png";
          segObjTemp["lblDeparturePoints"] = this.AddressDetails.journey_expected_arrivalpoint_address;
          segObjTemp["current_lattitude"] = this.AddressDetails.journey_expected_arrivalpoint_lat;
          segObjTemp["current_longitude"] = this.AddressDetails.journey_expected_arrivalpoint_lon;
          this.populatePlaceDataToArraivalSegment([segObj3,segObjTemp]);
        }
        this.setJourneyMasterData();
        kony.application.dismissLoadingScreen();
      } catch (excp) {
        debugger;
        kony.application.dismissLoadingScreen();
      }
    }
  },
  /**
   * @function
   *
   */
  proceedNext:function(){
    debugger;
    var param={};
    var journeyObj=this.getJourneyObj();
    if(this.isUpdate)
    {
      this.AddressDetails.journey_expected_arrivalpoint_lat = journeyObj.ArrivalLat;
      this.AddressDetails.journey_expected_arrivalpoint_lon = journeyObj.ArrivalLon;
      this.AddressDetails.journey_expected_arrivalpoint_address = journeyObj.ArrivalAddress;
      this.AddressDetails.journey_expected_arrival_datetime = journeyObj.ArrivalDatetime;
      this.AddressDetails.journey_expected_departure_address = journeyObj.DepartureAddress;
      this.AddressDetails.journey_expected_departure_datetime = journeyObj.DepartureDateTime;
      this.AddressDetails.journey_expected_departure_lat = journeyObj.DepartureLat;
      this.AddressDetails.journey_expected_departure_lon = journeyObj.DepartureLon;

      this.AddressDetails.checkin_type_id_fk = this.selectedCheckinTypeUpdate;
      this.AddressDetails.checkin_interval_row_id_fk = this.selectedCheckinRowIdUpdate;
      var navigationObject = new kony.mvc.Navigation('frmUpdateJourney');
      var params = {
        "AddressDetails":this.AddressDetails,
        "typeOfDataEdit":"AddressDetails"
      };
      navigationObject.navigate(params);
      return;
    }
    if(this.isEdit)
    {
      (this.isEditDetails).JourneyDetails.checkin_interval_row_id_fk = journeyObj.checkin_interval_row_id_fk;
      (this.isEditDetails).JourneyDetails.checkin_type_id_fk = journeyObj.checkin_type_id_fk;
      param['JourneyDetails'] = (this.isEditDetails);
      param['isEdit'] = true;
    }
    var passengerList=this.passengerList;

    param["journey"]=journeyObj;
    param["passengerList"]=passengerList;
    param["prevForm"]="frmNewJourneyRoute";
    param[DATA_MODEL.USER_TBL]=this.user;
    param["clearTracking"]=this.clearTracking;

    var navobj=new kony.mvc.Navigation("frmNewJourneyTracking");
    try{
      navobj.navigate(param);
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  getJourneyObj:function(){
    debugger;
    if ((typeof this.journey == 'object' && this.journey !== null) || this.isUpdate) {
      var checkin_interval_row_id_fk = this.view.lstTimeFrameForCheckins.selectedKey;
      var checkin_type_id_fk = this.view.lstTimeFrameForCheckins.selectedKey;
      if(this.isUpdate)
      {
        var Details = {};
        Details.CheckInIntervalRowId = this.AddressDetails.checkin_interval_row_id_fk;
        Details.CheckInType = this.AddressDetails.checkin_type_id_fk;
        Details.ArrivalLat = "" + this.arrivalLatitude;
        Details.ArrivalLon = "" + this.arrivalLongitude;
        Details.ArrivalAddress = this.arraivalAddress;
        Details.ArrivalDatetime = DateConversion(new Date(this.arrivalDate +" "+ this.arrivalTime));
        Details.DepartureAddress = this.departureAddress;
        Details.DepartureDateTime = DateConversion(new Date(this.departureDate +" "+this.departureTime));
        Details.DepartureLat = "" + this.departureLat;
        Details.DepartureLon = "" + this.departureLon;
        return Details;
      }
      this.journey[JOURNEY_TBL.CHECKIN_INTERVAL_ROW_ID_FK]=parseInt(checkin_interval_row_id_fk);
      this.journey[JOURNEY_TBL.CHECKIN_TYPE_ID_FK ]=this.selectedCheckinTypeId;
      this.journey[JOURNEY_TBL.CREATED_BY_FK ]=this.journey["user_emp_id_fk"];

      //this.journey[JOURNEY_TBL.JOURNEY_IS_CHECKPOINT_ENABLED ]=1;

      this.journey[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LAT]=""+this.arrivalLatitude;
      this.journey[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_LON ]=""+this.arrivalLongitude;
      this.journey[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS ]=this.arraivalAddress;
      this.journey[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=JourneyUtil.getUTCdatetime(this.arrivalDate, this.arrivalTime);

      //this.journey[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]=DateConversion(new Date(this.arrivalDate +" "+ this.arrivalTime));


      //this.journey[JOURNEY_TBL.JOURNEY_ARRIVALPOINT_LON ]=this.arrivalLongitude;
      //this.journey[JOURNEY_TBL.JOURNEY_ARRIVALPOINT_LAT ]=this.arrivalLatitude;
      //this.journey[JOURNEY_TBL.JOURNEY_ARRIVAL_ADDRESS ]=this.arraivalAddress;

      this.journey[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS ]=this.departureAddress;
      this.journey[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]=JourneyUtil.getUTCdatetime(this.departureDate, this.departureTime);
      this.journey[JOURNEY_TBL.EXPECTED_DEPARTURE_LAT ]=""+this.departureLat;
      this.journey[JOURNEY_TBL.EXPECTED_DEPARTURE_LON ]=""+this.departureLon;

      //this.journey[JOURNEY_TBL.JOURNEY_TRACKINGPOINT_NAME ]="Cloudbreak";
      //this.journey[JOURNEY_TBL.JOURNEY_SUPERVISOR_PHONE ]="0000000000";

      //this.journey[JOURNEY_TBL.JOURNEY_SATELLITE ]=this.journey[JOURNEY_TBL.JOURNEY_SATELLITE];
      this.journey[JOURNEY_TBL.LAST_UPDATED_BY_FK ]=this.journey["user_emp_id_fk"];
      //this.journey[JOURNEY_TBL.REASON_ID_FK]=1;
      //this.journey[JOURNEY_TBL.SELECTED_VEHICLE_ID_FK ]=2;
      this.journey[JOURNEY_TBL.STATUS_CODE_FK]=1;
      //this.journey[JOURNEY_TBL.SUPERVISOR_EMP_ID ]="00576999";
      //this.journey[JOURNEY_TBL.SUPERVISOR_NAME ]="John";

      //this.journey[JOURNEY_TBL.JOURNEY_TRACKINGPOINT_LAT ]="17.4214559";
      this.journey[JOURNEY_TBL.USER_EMP_ID_FK ]=this.journey["user_emp_id_fk"];
      //this.journey[JOURNEY_TBL.JOURNEY_TRACKINGPOINT_LON ]="78.3447289";

      return this.journey;
    }
  },
  /**
   * @function
   *
   */
  onDeparturePointPlaceSearch:function(){
    var placeKey=this.view.txtBoxDeparture.text;
    this.checkIfFilter = true;
    if(typeof placeKey=='string' && placeKey.length>3){
      try{
        this.searchPlaceWithKey(placeKey);
      }catch(excp){
        debugger;
      }
    }
  },
  onArraivalPointPlaceSearch:function(){
    var placeKey=this.view.txtBoxArraival.text;
    this.checkIfFilter = true;
    if(typeof placeKey=='string' && placeKey.length>3){
      try{
        //this.view.flxScRoute.scrollToEnd();
        this.searchPlaceWithKey(placeKey);
      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   */
  onDepartureAddressSelection:function(eventobject,rowIndex,sectionIndex){
    debugger;
    try{
      if(rowIndex===0){
        this.departureLat=this.deviceLat;
        this.departureLon=this.deviceLon;
        if(this.isEdit)
        {
          this.isEditDetails.JourneyDetails.journey_expected_departure_lat = this.departureLat;
          this.isEditDetails.JourneyDetails.journey_expected_departure_lon = this.departureLon;
        }
        this.getAddressForLanLang(this.departureLat,this.departureLon);
        this.setLocationOnMap(this.departureLat, this.departureLon);
      }else{
        if(typeof eventobject=='object' && eventobject!==null){
          var selectedRowItems= this.view.segDeparturePoints.selectedRowItems;
          if(Array.isArray(selectedRowItems) && selectedRowItems.length>0){
            if(typeof selectedRowItems[0]=='object' && selectedRowItems[0]!==null){
              this.departureAddress=selectedRowItems[0]["lblDeparturePoints"];
              this.departureLat = selectedRowItems[0]['current_lattitude'];
              this.departureLon = selectedRowItems[0]['current_longitude'];
              if(this.isEdit)
              {
                this.isEditDetails.JourneyDetails.journey_expected_departure_address = this.departureAddress;
              }
              var placeId=selectedRowItems[0]["place_id"];
              if(typeof placeId=='string' && placeId.length>0){
                this.getLocationGeometry(placeId);
              }else{
                this.setLocationOnMap(this.departureLat, this.departureLon);
              }
              this.setAddress(selectedRowItems[0]["lblDeparturePoints"]);
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
        this.arrivalLatitude=this.deviceLat;
        this.arrivalLongitude=this.deviceLon;
        if(this.isUpdate)
        {
          this.arrivalLatitude = this.AddressDetails.journey_expected_arrivalpoint_lat;
          this.arrivalLongitude = this.AddressDetails.journey_expected_arrivalpoint_lon;
          this.getAddressForLanLang(this.arrivalLatitude, this.arrivalLongitude);
          this.setLocationOnMap(this.arrivalLatitude, this.arrivalLongitude);
          return;
        }
        if(this.isEdit)
        {
          this.isEditDetails.JourneyDetails.journey_expected_arrivalpoint_lat =""+ this.arrivalLatitude;
          this.isEditDetails.JourneyDetails.journey_expected_arrivalpoint_lon =""+ this.arrivalLongitude;
        }

        this.getAddressForLanLang(this.deviceLat,this.deviceLon);
        this.setLocationOnMap(this.deviceLat,this.deviceLon);
      }else{
        if(typeof eventobject=='object' && eventobject!==null){
          var selectedRowItems= this.view.segArrivalPoints.selectedRowItems;
          if(Array.isArray(selectedRowItems) && selectedRowItems.length>0){
            if(typeof selectedRowItems[0]=='object' && selectedRowItems[0]!==null){
              var placeId=selectedRowItems[0]["place_id"];
              this.arraivalAddress=selectedRowItems[0]["lblDeparturePoints"];
              this.arrivalLatitude = selectedRowItems[0]['current_lattitude'];
              this.arrivalLongitude = selectedRowItems[0]['current_longitude'];
              if(this.isEdit)
              {
                this.isEditDetails.JourneyDetails.journey_expected_arrivalpoint_address = this.arraivalAddress;
              }
              if(typeof placeId=='string' && placeId.length>0){
                this.getLocationGeometry(placeId);
              }else{
                this.setLocationOnMap(this.arrivalLatitude, this.arrivalLongitude);
              }
              this.setAddress(selectedRowItems[0]["lblDeparturePoints"]);

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
   * @param latitude 
   * @param longitude 
   * @param name 
   * @param desc 
   * @param image 
   * @param navigateAndZoom 
   * @param showcallout 
   * @param calloutData 
   */
  getMapPin:function(latitude,longitude,name,desc,image,navigateAndZoom,showcallout,calloutData){
    debugger;
    var pin={};
    pin["lat"]=""+latitude;
    pin["lon"]=""+longitude;
    pin["name"]=name;
    if(typeof name=='string'){
      pin["name"]=name;
    }else{
      pin["name"]="";
    }
    if(typeof desc=='string'){
      pin["desc"]=desc;
    }else{
      pin["desc"]="";
    }
    pin["image"]={
      "source":image,
      "sourceType":kony.map.PIN_IMG_SRC_TYPE_RESOURCES,
      "anchor":kony.map.PIN_IMG_ANCHOR_CENTER
    };
    pin["showcallout"]=showcallout;
    if(typeof calloutData=='object' && calloutData!==null){
      pin["calloutData"]=showcallout;
    }
    return pin;
  },
  /**
   * @function
   *
   */
  drawRouteOnMap:function(){
    debugger;
    var departurePoint=this.getMapPin(this.departureLat, this.departureLon,"Expected Departure Point",
                                      this.departureAddress,"departure_point_pin.png", true, true, null);
    var arrivalPoint=this.getMapPin(this.arrivalLatitude, this.arrivalLongitude, "Expected Arrival Point",
                                    this.arraivalAddress, "arrival_point_pin.png", true, true, null);
    this.view.mapJourney.clear();
    this.drawRoutePolyline(departurePoint, arrivalPoint,"ROUTE","d3d3d3FF");
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
        }else {
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
   * @param eventobject 
   * @param latLang 
   */
  onMapClick:function(eventobject,latLang){
    debugger;
    if(typeof latLang=='object' && latLang!==null){
      if(this.status==PROGRESS_STATUS.DEPARTURE_ADDRESS){
        this.departureLat=latLang["lat"];
        this.departureLon=latLang["lon"];
        this.setLocationOnMap(latLang["lat"],latLang["lon"]);
        if(this.isEdit)
        {
          this.isEditDetails.JourneyDetails.journey_expected_departure_lat =""+ this.departureLat;
          this.isEditDetails.JourneyDetails.journey_expected_departure_lon =""+ this.departureLon;
        }
        this.getAddressForLanLang(latLang["lat"],latLang["lon"]);
      }else if(this.status==PROGRESS_STATUS.ARRAIVAL_ADDRESS){
        this.arrivalLatitude=latLang["lat"];
        this.arrivalLongitude=latLang["lon"];
        if(this.isEdit)
        {
          this.isEditDetails.JourneyDetails.journey_expected_arrivalpoint_lat =""+ this.arrivalLatitude;
          this.isEditDetails.JourneyDetails.journey_expected_arrivalpoint_lon =""+ this.arrivalLongitude;
        }
        this.setLocationOnMap(latLang["lat"],latLang["lon"]);
        this.getAddressForLanLang(latLang["lat"],latLang["lon"]);
      }
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
    kony.application.dismissLoadingScreen();
    if(typeof result=='object' && result!==null){
      if(Array.isArray(result["results"]) && result["results"].length>0){
        if(this.status===PROGRESS_STATUS.DEPARTURE_ADDRESS){
          this.departureAddress=result["results"][0]["formatted_address"];
          if(this.isEdit)
          {
            this.isEditDetails.JourneyDetails.journey_expected_departure_address = this.departureAddress;
          }
          this.setAddress(this.departureAddress);
        }else if(this.status===PROGRESS_STATUS.ARRAIVAL_ADDRESS){
          this.arraivalAddress=result["results"][0]["formatted_address"];
          if(this.isEdit)
          {
            this.isEditDetails.JourneyDetails.journey_expected_arrivalpoint_address = this.arraivalAddress;
          }
          this.setAddress(this.arraivalAddress);
        }
      }else{
        //this.setAddress("NA");
        if(this.status===PROGRESS_STATUS.DEPARTURE_ADDRESS){
          this.departureAddress=lattitude+", "+longitude;
          if(this.isEdit)
          {
            this.isEditDetails.JourneyDetails.journey_expected_departure_address = this.departureAddress;
          }
          this.setAddress(this.departureAddress);
        }else if(this.status===PROGRESS_STATUS.ARRAIVAL_ADDRESS){
          this.arraivalAddress=lattitude+", "+longitude;
          if(this.isEdit)
          {
            this.isEditDetails.JourneyDetails.journey_expected_arrivalpoint_address = this.arraivalAddress;
          }
          this.setAddress(this.arraivalAddress);
        }
      }
    }
  },
  /**
   * @function
   *
   * @param result 
   */
  _reverseGeoFailure:function(lattitude,longitude,result){
    debugger;
    kony.application.dismissLoadingScreen();
    this.setAddress(""+lattitude+", "+longitude);
  },
  /**
   * @function
   *
   * @param addressString 
   */
  setAddress:function(addressString){
    if(typeof addressString=='string'){
      addressString=addressString.trim();
      if(addressString.length===0){
        addressString="NA";
      }
    }else{
      addressString="NA";
    }
    //Setting common selected address component
    this.view.selectedAddress.setData("Choosen point",addressString,false);
    this.view.flxConfirmAddressSelection.isVisible=true;
    this.view.selectedAddress.isVisible=true;
    
    if(this.status==PROGRESS_STATUS.DEPARTURE_ADDRESS){
      this.view.departureAddress.setData("Departure Point",addressString,false);
      this.view.flexDeparturePoint.isVisible=false;
    }else if(this.status==PROGRESS_STATUS.ARRAIVAL_ADDRESS||this.status==PROGRESS_STATUS.ARRAIVAL_DATE) {           
      this.view.flxArrivalPoint.isVisible=false;
      this.view.arrivalAddress.setData("Arrival Point",addressString,false);
    }
  },
  /**
   * @function
   *
   */
  showDepartureDateTimePicker:function(){

  },
  /**
   * @function
   *
   */
  hideDepartureDateTimePicker:function(){
    this.view.flxDepartureDate.setVisibility(false);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  showArrivalDateTimePicker:function(){
    this.view.flexEditClose.isVisible=this.isEditFlag;
    this.view.flxArrivalDate.setVisibility(true);
    this.view.arrivalAddress.setVisibility(true);
    this.view.arrivalDate.setVisibility(false);
    this.view.lblArrivalDateTitle.setVisibility(true);
    //     this.view.arrivalDatepicker.setVisibility(true);
    this.view.datepickerArrival.setVisibility(true);
    this.view.lblArrivalTimeTitle.setVisibility(false);
    this.view.timePicker1.setVisibility(false);
    this.view.arrivalTime.setVisibility(false);
    this.view.forceLayout();
    try
    {
      this.view.datepickerArrival.setDate('');
      if(this.isUpdate)
      {
        var dateArrivalToBeSetToArrivalDatePicker = new Date(this.AddressDetails.journey_expected_arrival_datetime);
        this.view.datepickerArrival.setDate(dateArrivalToBeSetToArrivalDatePicker.toLocaleDateString());
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
  hideArrivalDateTimePicker:function(){
    this.view.flxArrivalDate.setVisibility(false);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  showDepartureDateTimePicker:function(){
    this.view.flexEditClose.isVisible=this.isEditFlag;
    this.view.flexDeparturePoint.setVisibility(false);
    this.view.flexSwitchToSearch.setVisibility(false);
    this.view.datepicker.setVisibility(true);
    this.view.departureDate.setVisibility(false);
    this.view.lblDepartureDateTitle.setVisibility(true);
    this.view.flxDepartureDate.setVisibility(true);
    this.view.departureTime.setVisibility(false);
    this.hideDepartureTimePicker();
    this.view.forceLayout();

    try
    {
      this.view.datepicker.setDate('');
      if(this.isUpdate)
      {
        var dateDepartureToBeSetToDepartureDatePicker = new Date(this.AddressDetails.journey_expected_departure_datetime);
        this.view.datepicker.setDate(dateDepartureToBeSetToDepartureDatePicker.toLocaleDateString());
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
  getLocationGeometry:function(placeId){
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
                                      inputParam,this._locationGeometrySuccess.bind(this),
                                      this._locationGeometryFailure.bind(this));
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
  _locationGeometrySuccess:function(result){
    debugger;
    kony.application.dismissLoadingScreen();
    try{
      if(typeof result=='object' && result!==null){
        if(typeof result["location"]=='object' && result["location"]!==null){
          if(this.status===PROGRESS_STATUS.ARRAIVAL_ADDRESS||this.status===PROGRESS_STATUS.ARRAIVAL_DATE){
            this.arrivalLatitude=result["location"]["lat"];
            this.arrivalLongitude=result["location"]["lng"];
            if(this.isEdit)
            {
              this.isEditDetails.JourneyDetails.journey_expected_arrivalpoint_lat =""+ this.arrivalLatitude;
              this.isEditDetails.JourneyDetails.journey_expected_arrivalpoint_lon =""+ this.arrivalLongitude;
            }
            this.setLocationOnMap(this.arrivalLatitude, this.arrivalLongitude);
            return;
          }else{

          }
          this.departureLat=result["location"]["lat"];
          this.departureLon=result["location"]["lng"];
          if(this.isEdit)
          {
            this.isEditDetails.JourneyDetails.journey_expected_departure_lat =""+ this.departureLat;
            this.isEditDetails.JourneyDetails.journey_expected_departure_lon =""+ this.departureLon;
          }
          this.view.mapJourney.clear();
          this.setLocationOnMap(this.departureLat, this.departureLon);
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
  _locationGeometryFailure:function(result){
    debugger;
    kony.application.dismissLoadingScreen();
  },
  _placeSearchSuccess:function(result){
    debugger;
    if(typeof result=='object' && result!==null){
      var locationDataList=[];
      var imageName;
      var segObj={};
      segObj["imgDeparturePoints"]="bluelocation.png";
      segObj["lblDeparturePoints"]="Current Location";
      segObj["current_lattitude"]=this.deviceLat;
      segObj["current_longitude"]=this.deviceLon;
      locationDataList.push(segObj);
      if(this.status===PROGRESS_STATUS.ARRAIVAL_ADDRESS){
        imageName="bluetracker.png";
      }else if(this.status===PROGRESS_STATUS.DEPARTURE_ADDRESS){
        imageName="bluetracker.png";
      }
      if(Array.isArray(result["predictions"]) && result["predictions"].length>0){
        for(var i=0;i<result["predictions"].length;i++){
          segObj={};
          segObj["imgDeparturePoints"]=imageName;
          segObj["lblDeparturePoints"]=result["predictions"][i]["description"];
          segObj["place_id"]=result["predictions"][i]["place_id"];
          locationDataList.push(segObj);
        }
      }
      if(this.status===PROGRESS_STATUS.ARRAIVAL_ADDRESS){
        this.populatePlaceDataToArraivalSegment(locationDataList);
      }else if(this.status===PROGRESS_STATUS.DEPARTURE_ADDRESS){
        this.populatePlaceDataToDepartureSegment(locationDataList);
      }
    }
  },
  /**
   * @function
   *
   * @param dataList 
   */
  populatePlaceDataToDepartureSegment:function(dataList){
    debugger;
    var AddressSearch = this.view.txtBoxDeparture.text;
    var BoolCheckGT5 = false;
    var FilteredSearchResults = ExplorationPointsObjectService;
    if(AddressSearch!=="" && this.checkIfFilter)
    {
      var filter = {
        Address: AddressSearch
      };

      FilteredSearchResults= FilteredSearchResults.filter(function(item) {
        for (var key in filter) {
          if (item[key] === undefined || !((item[key]).toLowerCase().includes(filter[key].toLowerCase())))
            return false;
        }
        return true;
      });
      debugger;

      if(FilteredSearchResults!==null && FilteredSearchResults!==undefined && FilteredSearchResults.length>5)
      {
        BoolCheckGT5 = true;
      }
    }

    if(Array.isArray(dataList) && dataList.length>0){
      var ArrayOfExploration = [];
      if(BoolCheckGT5)
      {
        FilteredSearchResults = FilteredSearchResults.slice(0,5);
      }
      FilteredSearchResults.forEach(function(item){
        var imgDeparturePointsSrc = "bluetracker.png";
        if(item.Address=="Current Location"){
          imgDeparturePointsSrc = "bluelocation.png";
        }else{
          imgDeparturePointsSrc = "bluetracker.png";
        }
        ArrayOfExploration.push({imgDeparturePoints: imgDeparturePointsSrc, lblDeparturePoints: item.Address, current_lattitude: item.Lattitude, current_longitude: item.Longitude});
      });
      var datatoSetStepWise = [];
      datatoSetStepWise = datatoSetStepWise.concat(dataList[0]);
      datatoSetStepWise = datatoSetStepWise.concat(ArrayOfExploration);
      datatoSetStepWise = datatoSetStepWise.concat(dataList.splice(1));
      this.view.segDeparturePoints.removeAll();
      this.view.segDeparturePoints.addAll(datatoSetStepWise);
    }
  },
  populatePlaceDataToArraivalSegment:function(dataList){

    debugger;
    var AddressSearch = this.view.txtBoxArraival.text;
    var BoolCheckGT5 = false;
    var FilteredSearchResults = ExplorationPointsObjectService;
    if(AddressSearch!=="" && this.checkIfFilter)
    {
      var filter = {
        Address: AddressSearch
      };

      FilteredSearchResults= FilteredSearchResults.filter(function(item) {
        for (var key in filter) {
          if (item[key] === undefined || !((item[key]).toLowerCase().includes(filter[key].toLowerCase())))
            return false;
        }
        return true;
      });
      debugger;

      if(FilteredSearchResults!==null && FilteredSearchResults!==undefined && FilteredSearchResults.length>5)
      {
        BoolCheckGT5 = true;
      }
    }
    if(Array.isArray(dataList) && dataList.length>0){
      var ArrayOfExploration = [];
      if(BoolCheckGT5)
      {
        FilteredSearchResults = FilteredSearchResults.slice(0,5);
      }
      FilteredSearchResults.forEach(function(item){
        var imgDeparturePointsSrc = "bluetracker.png";
        if(item.Address=="Current Location"){
          imgDeparturePointsSrc = "bluelocation.png";
        }else{
          imgDeparturePointsSrc = "bluetracker.png";
        }
        ArrayOfExploration.push({imgDeparturePoints: imgDeparturePointsSrc, lblDeparturePoints: item.Address, current_lattitude: item.Lattitude, current_longitude: item.Longitude});
      });
      var datatoSetStepWise = [];
      //       datatoSetStepWise.append(dataList[0]);
      //       datatoSetStepWise = datatoSetStepWise.concat(ArrayOfExploration);
      datatoSetStepWise = datatoSetStepWise.concat(dataList[0]);
      datatoSetStepWise = datatoSetStepWise.concat(ArrayOfExploration);
      datatoSetStepWise = datatoSetStepWise.concat(dataList.splice(1));
      this.view.segArrivalPoints.removeAll();
      this.view.segArrivalPoints.addAll(datatoSetStepWise);
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
          this.view.flxScRoute.scrollToEnd();
          this._isNetworkAvailable=true;
          var inputParam={};
          inputParam["input"]=placeKey;
          inputParam["key"]=JConstant.GOOGLE_API_KEY;
          var client = kony.sdk.getCurrentInstance();
          var intgService = client.getIntegrationService(JConstant.PLACE_INTG_SERVICE.NAME);
          intgService.invokeOperation(JConstant.PLACE_INTG_SERVICE.OPERATION,{},
                                      inputParam,this._placeSearchSuccess.bind(this),this._placeSearchFailure.bind(this));
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
    try{
      kony.application.dismissLoadingScreen();
      if(typeof result==='object' && result!==null){
        if(typeof result["coords"]=='object' && result["coords"]!==null){
          this.deviceLat =result.coords.latitude;
          this.deviceLon=result.coords.longitude;
          this.setLocationOnMap(this.deviceLat, this.deviceLon);
          var segObj={};
          segObj["imgDeparturePoints"]="bluelocation.png";
          segObj["lblDeparturePoints"]="Current Location";
          segObj["current_lattitude"]=this.deviceLat;
          segObj["current_longitude"]=this.deviceLon;
          if(this.isUpdate)
          {
            this.setLocationOnMap(parseFloat(this.AddressDetails.journey_expected_departure_lat), parseFloat(this.AddressDetails.journey_expected_departure_lon));
            var segObj1 = {};
            segObj1["imgDeparturePoints"] = "bluetracker.png";
            segObj1["lblDeparturePoints"] = this.AddressDetails.journey_expected_departure_address;
            segObj1["current_lattitude"] = this.AddressDetails.journey_expected_departure_lat;
            segObj1["current_longitude"] = this.AddressDetails.journey_expected_departure_lon;

            var segObjTemp = {};
            segObjTemp["imgDeparturePoints"] = "bluetracker.png";
            segObjTemp["lblDeparturePoints"] = this.AddressDetails.journey_expected_arrivalpoint_address;
            segObjTemp["current_lattitude"] = this.AddressDetails.journey_expected_arrivalpoint_lat;
            segObjTemp["current_longitude"] = this.AddressDetails.journey_expected_arrivalpoint_lon;


            this.populatePlaceDataToArraivalSegment([segObj,segObjTemp]);
            this.populatePlaceDataToDepartureSegment([segObj,segObj1]);
            return;
          }
          this.populatePlaceDataToDepartureSegment([segObj]);
          this.populatePlaceDataToArraivalSegment([segObj]);
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
  setLocationOnMap:function(lattitude,longitude){
    debugger;
    if(typeof lattitude=='number' && typeof longitude=='number'){
      var locObj={};
      locObj["lat"]=lattitude;
      locObj["lon"]=longitude;
      locObj["name"]="Current Location";
      locObj["showCallout"]=false;
      if(this.status==PROGRESS_STATUS.ARRAIVAL_ADDRESS){
        /*locObj["image"]="arrival.png";
        this.view.mapJourney.zoomLevel=15;
        this.view.mapJourney.navigateToLocation(locObj, false, true);*/

        /*var destinationPin=this.getMapPin(lattitude, longitude,"Expected arrival point", this.arraivalAddress, 
                                          "arrival_point_pin.png", true, true, null);*/
        //this.view.mapJourney.navigateToLocation(destinationPin, false, true);
        //this.view.mapJourney.zoomLevel=15;
        this.drawRouteOnMap();
      }else if(this.status==PROGRESS_STATUS.DEPARTURE_ADDRESS){
        this.view.mapJourney.clear();
        locObj["image"]="current_location.png";
        if(kony.os.deviceInfo().name.toLowerCase()=='iphone' || kony.os.deviceInfo().name.toLowerCase()=='ipad'){
          this.view.mapJourney.navigateToLocation(locObj, false, true);
          this.view.mapJourney.zoomLevel=15;
        }else {
          this.view.mapJourney.zoomLevel=15;
          this.view.mapJourney.navigateToLocation(locObj, false, true);
        }
        this.view.forceLayout();
        /*var addressString=this.departureAddress;
        if(typeof this.departureAddress!=='string'){
          addressString="Current location";
        }
        var sourcePin=this.getMapPin(lattitude, longitude,"Expected departure point",addressString, 
                                     "departure_point_pin.png", true, true, null);
        this.view.mapJourney.navigateToLocation(sourcePin, false, true);
        this.view.mapJourney.zoomLevel=15;
        this.view.forceLayout();*/
      }else if(this.status==PROGRESS_STATUS.DEPARTURE_DATE){
        this.view.mapJourney.clear();
        locObj["image"]="departure_point_pin.png";
        if(kony.os.deviceInfo().name.toLowerCase()=='iphone' || kony.os.deviceInfo().name.toLowerCase()=='ipad'){
          this.view.mapJourney.navigateToLocation(locObj, false, true);
          this.view.mapJourney.zoomLevel=15;
        }else{
          this.view.mapJourney.zoomLevel=15;
          this.view.mapJourney.navigateToLocation(locObj, false, true);
        }
        this.view.forceLayout();
      }else if(this.status==PROGRESS_STATUS.ARRAIVAL_DATE){
        /* locObj["image"]="arrival.png";
        this.view.mapJourney.zoomLevel=15;
        this.view.mapJourney.navigateToLocation(locObj, false, true);*/

        /*var destinationPin=this.getMapPin(lattitude, longitude,"Expected arrival point", this.arraivalAddress, 
                                          "arrival_point_pin.png", true, true, null);
        this.view.mapJourney.navigateToLocation(destinationPin, false, true);
        this.view.mapJourney.zoomLevel=15;*/
        this.view.forceLayout();
        this.drawRouteOnMap();
      }
    }
  },
  /**
   * @function
   *
   * @param lattitude 
   * @param longitude 
   */
  setArraivalPointOnMap:function(lattitude,longitude){
    if(typeof lattitude=='number' && typeof longitude=='number'){
      var locObj={};
      locObj["lat"]=lattitude;
      locObj["lon"]=longitude;
      locObj["name"]="";
      locObj["image"]="arrival.png";
      locObj["showCallout"]=false;
      if(kony.os.deviceInfo().name.toLowerCase()=='iphone' || kony.os.deviceInfo().name.toLowerCase()=='ipad'){
        this.view.mapJourney.navigateToLocation(locObj, false, true);
        this.view.mapJourney.zoomLevel=15;
      }else{
        this.view.mapJourney.zoomLevel=15;
        this.view.mapJourney.navigateToLocation(locObj, false, true);
      }
      this.view.forceLayout();
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
   */
  resetFormData:function(){
    this.view.txtBoxDeparture.text="";
    this.view.txtBoxArraival.text="";
    this.view.timePicker.setTime("");
    this.view.timePicker1.setTime("");
    this.view.mapJourney.clear();
    this.view.segDeparturePoints.removeAll();
    this.view.segArrivalPoints.removeAll();
    this.hideJourneyDetail();
  },
  /**
   * @function
   *
   */
  resetGlobalVariable:function(){
    this.navigationData=null;
    this.prevForm=null;
    this.journey=null;
    this.passengerList=null;
    this.checkIfFilter=false;

    //EditDetails
    this.isEditDetails = {};
    this.isEdit = false;


    this.deviceLat=null;
    this.deviceLon=null;
    this.isFreshForm=true;

    this.departureLat=null;
    this.departureLon=null;
    this.departureAddress=null;

    this.arrivalLatitude=null;
    this.arrivalLongitude=null;
    this.arraivalAddress=null;

    this.departureDate=null;
    this.departureTime=null;

    this.arrivalDate=null;
    this.arrivalTime=null;

    this.status=PROGRESS_STATUS.DEPARTURE_ADDRESS;
    this.selectedCheckinTypeId=null;
    this.selectedCheckInTimeFrameId=null;

    this.user=null;

    this.AddressDetails={};
    this.isUpdate=false;
    this.typeOfDataEdit=null;
    this.selectedCheckinRowIdUpdate= null;
    this.selectedCheckinTypeUpdate= null;
  },
  /**
   * @function
   *
   */
  navigateBack:function(){
    if(typeof this.prevForm==='string'){
      var navObj=new kony.mvc.Navigation(this.prevForm);
      try{
        navObj.navigate();
      }catch(excp){
        debugger;
      }
    }
  },
  /**
   * @function
   *
   * @param param1 
   * @param param2 
   * @param param3 
   */
  onDepartureDateSelection:function(dateString){
    debugger;
    if(this.status==PROGRESS_STATUS.ARRAIVAL_ADDRESS){
      this.onArrivalDateSelection();
      return;
    }
    var selectedDate=dateString;
    if(typeof selectedDate=='object' && selectedDate!==null){
      var today = new Date();
      var yesterday = new Date(today);
	  yesterday.setDate(today.getDate() - 1);
      if(selectedDate["dateObj"]<yesterday)
      {
        alert("Please select a future date");
      }
      else
      {
        this.departureDate=selectedDate["dateString"];
        var tempDateObjDeparture = new Date(this.departureDate);
        var selectedDateObj=selectedDate["dateObj"];
        var outputDateString=JourneyUtil.getReadableFullDateString(selectedDateObj);
        //var outputDateString = tempDateObjDeparture.getDate()+"/"+(tempDateObjDeparture.getMonth()+1)+"/"+tempDateObjDeparture.getFullYear();
        this.view.departureDate.setData("Departure Date",outputDateString,false,"calendar_grey.png");
        this.view.datepicker.setVisibility(false);
        this.view.departureTime.setVisibility(false);
        this.view.lblDepartureDateTitle.setVisibility(false);
        this.view.departureDate.setVisibility(true);
        this.showDepartureTimePicker();
        try
        {
          if(this.isUpdate)
          {
            var timeArrival = this.AddressDetails.journey_expected_departure_datetime;
            var dateObj = (new Date(timeArrival));
            this.view.timePicker.setTime(dateObj.toLocaleTimeString());
          }
        }
        catch(err)
        {
          alert(err.message);
        }
        this.view.forceLayout();
      }
    }
  },
  /**
   * @function
   *
   */
  onArrivalDateSelection:function(dateString){
    debugger;
    var selectedDate=dateString;
    if(typeof selectedDate=='object' && selectedDate!==null){
      var today = new Date();
      var yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      if(selectedDate["dateObj"]<yesterday)
      {
        alert("Please select a future date");
      }
      else
      {
        this.arrivalDate =selectedDate["dateString"];
        var tempDateObjArrival = dateString["dateObj"];
        //var outputDateString = tempDateObjArrival.getDate()+"/"+(tempDateObjArrival.getMonth()+1)+"/"+tempDateObjArrival.getFullYear();
        var outputDateString = JourneyUtil.getReadableFullDateString(tempDateObjArrival);
        this.view.arrivalDate.setData("Arrival Date",outputDateString,false,"calendar_grey.png");
        this.view.arrivalDate.setVisibility(true);

        this.view.lblArrivalDateTitle.setVisibility(false);
        this.view.datepickerArrival.setVisibility(false);
        //       this.view.arrivalDatepicker.setVisibility(false);

        this.view.lblArrivalTimeTitle.setVisibility(true);
        this.view.timePicker1.setVisibility(true);

        this.view.arrivalTime.setVisibility(false);
        try
        {
          if(this.isUpdate)
          {
            var timeArrival = this.AddressDetails.journey_expected_arrival_datetime;
            var dateObj = (new Date(timeArrival));
            this.view.timePicker1.setTime(dateObj.toLocaleTimeString());
          }
        }
        catch(err)
        {
          alert(err.message);
        }
        this.view.forceLayout();
      }
    }
  },
  onArrivalTimeSelected:function(timeString){
    debugger;
    try{
      if(typeof timeString=='string' && timeString.length>0){
        this.arrivalTime=timeString;
        timeString=timeString.split(':');
        var dateObj=new Date();
        dateObj.setHours(timeString[0]);
        dateObj.setMinutes(timeString[1]);
        dateObj.setSeconds(timeString[1]);
        this.hideArrivalDateTimePicker();
        var readableTimestring=JourneyUtil.getTimeStringIn12HrsFromat(dateObj);
        this.view.arrivalTime.setData("Arrival Time",readableTimestring,false);
        this.view.arrivalTime.setVisibility(true);
        this.status=PROGRESS_STATUS.ARRAIVAL_TIME;
        this.showJourneyDetail();
      }else{
        this.arrivalTime=null;
      }
      this.view.forceLayout();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  showJourneyDetail:function(){
    debugger;
    this.view.mapJourney.height="40%";
    this.view.mapJourney.zoomLevel=this.view.mapJourney.zoomLevel-1;
    this.view.flxJourneyDetail.setVisibility(true);
    this.view.flexEditClose.setVisibility(false);
    this.view.lblFromDeparture.text=this.departureAddress;
    this.view.lblFromArrival.text=this.arraivalAddress;
    try{
      var departureDateUTCString=JourneyUtil.getUTCdatetime(this.departureDate, this.departureTime);
      var departureDateObj = JourneyUtil.getSqlDatetoJSDate(departureDateUTCString);
      //var tempDateTimeObj = new Date(departureDateObject.toLocaleString().split(' ')[0]+" "+this.departureTime.replace('/',':').replace('/',':'))
      //this.view.lblFromDepartureTime.text=DateConversion(tempDateTimeObj);       
      var dateString=JourneyUtil.getReadableDateString(departureDateObj);
      var timeString=JourneyUtil.getTimeStringIn12HrsFromat(departureDateObj);

      this.view.lblFromDepartureTime.text=dateString+" "+timeString;
    }catch(excp){
      this.view.lblFromDepartureTime.text="Not Available";
    }
    try{
      var arrivalDateUTCString=JourneyUtil.getUTCdatetime(this.arrivalDate, this.arrivalTime);
      var arrivalDateObj=JourneyUtil.getSqlDatetoJSDate(arrivalDateUTCString);
      var dateString=JourneyUtil.getReadableDateString(arrivalDateObj);
      var timeString=JourneyUtil.getTimeStringIn12HrsFromat(arrivalDateObj);
      this.view.lblFromArrivalTime.text=dateString+" "+timeString;
      //var arrivalDateObject = new Date(this.arrivalDate);
      //var tempDateTimeObjArrival = new Date(arrivalDateObject.toLocaleString().split(' ')[0]+" "+this.arrivalTime.replace('/',':').replace('/',':'))
      //this.view.lblFromArrivalTime.text=DateConversion(tempDateTimeObjArrival);
    }catch(excp){
      this.view.lblFromArrivalTime.text="Not Available";
    }
    try{
      var tempDateTimeObj = new Date(departureDateObj.toLocaleString().split(' ')[0]+" "+this.departureTime.replace('/',':').replace('/',':'));
      var tempDateTimeObjArrival = new Date(arrivalDateObj.toLocaleString().split(' ')[0]+" "+this.arrivalTime.replace('/',':').replace('/',':'));

      var timeDifference = JourneyUtil.getTwoDatesTimeDifference(tempDateTimeObjArrival,tempDateTimeObj);
      if(timeDifference>OptionalCheckinDuration){
        this.view.lstTimeCheckins.selectedKey=1;
        this.view.lblCheckinTimeFrame.isVisible=true;
        this.view.flxTimeframeSelectorRoot.isVisible=true;
        this.view.lstTimeFrameForCheckins.selectedKey=7;
      }else{
        this.view.lstTimeCheckins.selectedKey=3;
        this.view.lblCheckinTimeFrame.isVisible=false;
        this.view.flxTimeframeSelectorRoot.isVisible=false;
        this.view.lstTimeFrameForCheckins.selectedKey=null;
      }
    }catch(excp){
      this.view.lstTimeCheckins.selectedKey=1;
    }
    this.drawRouteOnMap();
    this.view.forceLayout();

  },
  /**
   * @function
   *
   */
  hideJourneyDetail:function(){
    this.view.flxJourneyDetail.setVisibility(false);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  onDepartureTimeSelected:function(timeString){
    debugger;
    try{
      if(typeof timeString=='string' && timeString.length>0){
        this.departureTime=timeString;
        timeString=timeString.split(':');
        var d=new Date();
        d.setHours(timeString[0]);
        d.setMinutes(timeString[1]);
        var readableTimeString=JourneyUtil.getTimeStringIn12HrsFromat(d);
        this.view.departureTime.setData("Departure Time",readableTimeString,false);
        this.view.departureTime.setVisibility(true);
        this.status=PROGRESS_STATUS.ARRAIVAL_ADDRESS;
        this.hideDepartureDateTimePicker();
        if(this.isEditFlag)
        {
          this.onClickEditClose();
        }
        else
        {
          this.showArraivalAddressSelector();
        }
      }else{
        this.departureTime=null;
      }
      this.hideDepartureTimePicker();
      this.view.forceLayout();
    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  showArrivalTimePicker:function(){
    this.view.timePicker1.setVisibility(true);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  hideArrivalTimePicker:function(){
    this.view.timePicker1.setVisibility(false);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  showArraivalAddressSelector:function(){
    this.view.flexEditClose.isVisible=this.isEditFlag;
    this.view.flexSwitchToSearchArrival.isVisible=false;
    this.view.flxArrivalPoint.setVisibility(true);
    this.view.forceLayout();
  },
  hideArraivalAddressSelector:function(){
    this.view.flexSwitchToSearchArrival.isVisible=false;
    this.view.flxArrivalPoint.setVisibility(false);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  showDepartureTimePicker:function(){
    this.view.lblDepartureTitle.setVisibility(true);
    this.view.timePicker.setVisibility(true);
    this.view.forceLayout();
  },
  /**
   * @function
   *
   */
  hideDepartureTimePicker:function(){
    this.view.lblDepartureTitle.setVisibility(false);
    this.view.timePicker.setVisibility(false);
    this.view.forceLayout();
  },

  /**
   * @function
   *
   */
  onCheckInTypeSelected:function(){
    debugger;
    try{
      this.selectedCheckinTypeUpdate = parseInt(this.view.lstTimeCheckins.selectedKey);
      if(this.selectedCheckinTypeUpdate==3){
        this.view.lstTimeFrameForCheckins.setEnabled(false);
      }else{
        this.view.lstTimeFrameForCheckins.setEnabled(true);
      }
    }catch(err){
      alert(err);
    }
  },
  //==============================================================================================
  /**
   * @function
   *
   */
  setJourneyMasterData:function(){
    debugger;
    try{
      this.getCheckInTypeList();
      this.getCheckInTimeFrameList();

    }catch(excp){
      debugger;
    }
  },
  /**
   * @function
   *
   */
  getCheckInTimeFrameList:function(){
    debugger;
    try{
      this.selectedCheckinTimeFrameId=null;

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

  /**
   * @function
   *
   */
  getCheckInTypeList:function(){
    debugger;
    try{
      this.selectedCheckinTypeId=null;
      this.fetchRecords(DATA_MODEL.CHECKIN_TYPE_TBL,null);
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
        this.view.lstTimeCheckins.masterData=chekinTypeMasterData;
        if(records.length>0){
          debugger;
          if(this.isUpdate)
          {
            this.view.lstTimeCheckins.selectedKey = this.AddressDetails.checkin_type_id_fk;
            this.selectedCheckinTypeId = this.AddressDetails.checkin_type_id_fk;
          }
          else
          {
            this.view.lstTimeCheckins.selectedKey = records[0][CHECKIN_TYPE_TBL.CHECKIN_TYPE_ID_PK];
            this.selectedCheckinTypeId = records[0][CHECKIN_TYPE_TBL.CHECKIN_TYPE_ID_PK];
          }
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
   * @param checkInTimeFrameId 
   */
  setCheckinTimeFrameId:function(checkInTimeFrameId){
    debugger;
    try{
      var id=parseInt(checkInTimeFrameId);
      if(isNaN(id)==false){
        this.selectedCheckInTimeFrameId=id;
      }else{
        this.selectedCheckInTimeFrameId=null;
      }
    }catch(excp){
      this.selectedCheckInTimeFrameId=null;
      debugger;
    }
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
          if(this.isUpdate)
          {
            this.view.lstTimeFrameForCheckins.selectedKey = this.AddressDetails.checkin_interval_row_id_fk;
            this.setCheckinTimeFrameId(this.AddressDetails.checkin_interval_row_id_fk);
          }
          else
          {this.view.lstTimeFrameForCheckins.selectedKey = result[1][CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL_ID];
           this.setCheckinTimeFrameId(result[1][CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL_ID]);

          }

        }else{
          this.setCheckinTimeFrameId(result[0][CHECKIN_INTERVAL_TBL.CHECKIN_INTERVAL_ID]);
        }
      }else{
        this.setCheckinTimeFrameId(null);
        this.view.lstTimeFrameForCheckins.masterData=[];
      }
    }catch(excp){
      debugger;
    }
  },
  onEditDetail:function(){
    try{
      this.status=PROGRESS_STATUS.DEPARTURE_ADDRESS;
      this.view.flxJourneyDetail.setVisibility(false);
      this.view.flexDeparturePoint.setVisibility(true);
      this.view.mapJourney.clear();
      this.view.forceLayout();
    }catch(excp){
      debugger;
    }
  },
  
  onClickChooseOnMap:function()
  {
    if(this.status==PROGRESS_STATUS.DEPARTURE_ADDRESS)
    {
      this.view.flexDeparturePoint.isVisible=false;
	  this.view.flxConfirmAddressSelection.isVisible=true;
      this.view.selectedAddress.isVisible=false;
    }
    else if(this.status==PROGRESS_STATUS.ARRAIVAL_ADDRESS)
    {
      this.view.flxArrivalPoint.isVisible=false;
      this.view.flxConfirmAddressSelection.isVisible=true;
      this.view.selectedAddress.isVisible=false;
    }
  },
  
  onClickBackToSearch:function()
  {
    if(this.status==PROGRESS_STATUS.DEPARTURE_ADDRESS)
    {
      this.view.flexDeparturePoint.isVisible=true;
	  this.view.flxConfirmAddressSelection.isVisible=false;
      this.view.selectedAddress.isVisible=false;
    }
    else if(this.status==PROGRESS_STATUS.ARRAIVAL_ADDRESS)
    {
      this.view.flxArrivalPoint.isVisible=true;
      this.view.flxConfirmAddressSelection.isVisible=false;
      this.view.selectedAddress.isVisible=false;
    }
  },
  
  onClickChoosenPointConfirm:function()
  {
    
    if(this.view.selectedAddress.isVisible)
    {
      kony.print("Proceeding with next flow based on ststus flag and editflag value");
      this.view.flxConfirmAddressSelection.isVisible=false;
      this.view.selectedAddress.isVisible=false;
      if(this.status==PROGRESS_STATUS.DEPARTURE_ADDRESS)
      {
        if(this.isEditFlag)
        {
          this.onClickEditClose();
        }
        else
        {
          this.showDepartureDateTimePicker();
          this.status=PROGRESS_STATUS.DEPARTURE_DATE;
        }
      }
      else if(this.status==PROGRESS_STATUS.ARRAIVAL_ADDRESS)
      {
        if(this.isEditFlag)
        {
          this.onClickEditClose();
        }
        else
        {
          this.hideArraivalAddressSelector();
          this.showArrivalDateTimePicker();
          this.status=PROGRESS_STATUS.ARRAIVAL_DATE;
        } 
      }
    }
    else
    {
      alert("Please choose an address.");
    }
  },
  
  onEditIconClick:function(editValue)
  {
    debugger;
    kony.print("In onEditIconClick, editValue:"+editValue);
    this.view.flxJourneyDetail.setVisibility(false);
    this.view.flexDeparturePoint.setVisibility(false);
    this.view.mapJourney.height="100%";
    this.view.mapJourney.zoomLevel=this.view.mapJourney.zoomLevel+1;
    this.view.flexSwitchToSearch.isVisible=false;
    this.hideDepartureDateTimePicker();
    this.hideArraivalAddressSelector();
    this.hideArrivalDateTimePicker();
    this.isEditFlag=true;
    
    if(editValue == "from")
    {
      this.status=PROGRESS_STATUS.DEPARTURE_ADDRESS;
      this.view.flexDeparturePoint.setVisibility(true);
      this.view.flexEditClose.isVisible=this.isEditFlag;
    }
    else if(editValue == "to")
    {
      this.status=PROGRESS_STATUS.ARRAIVAL_ADDRESS;
      this.showArraivalAddressSelector();
    }
    else if(editValue == "start")
    {
      this.status=PROGRESS_STATUS.DEPARTURE_DATE;
      this.showDepartureDateTimePicker();
    }
    else if(editValue == "arrival")
    {
      this.status=PROGRESS_STATUS.ARRAIVAL_DATE;
      this.showArrivalDateTimePicker();
    }
  },
  
  onClickEditClose:function()
  {
    this.status=PROGRESS_STATUS.ARRAIVAL_TIME;
    this.view.flexDeparturePoint.setVisibility(false);
    this.view.flexSwitchToSearch.isVisible=false;
    this.view.flxConfirmAddressSelection.isVisible=false;
    this.view.selectedAddress.isVisible=false;
    this.hideDepartureDateTimePicker();
    this.hideArraivalAddressSelector();
    this.hideArrivalDateTimePicker();
    this.showJourneyDetail();
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
          //this.passengerList=result;
          //this.setPassengetList(result);
          break;
        case DATA_MODEL.VEHICLE_TBL:
          /*if(info=="VEHICLE_LIST"){
            this.setCompanyAndPersonalVehiclList(result);
          }else{
            this.setVehicleDetail(result);
          }*/
          // this.vehicleObj=
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
  }

});