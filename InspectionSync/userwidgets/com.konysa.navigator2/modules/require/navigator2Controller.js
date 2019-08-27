define(function() {

  return {
    /**
		 * @function
		 *
		 * @param baseConfig 
		 * @param layoutConfig 
		 * @param pspConfig 
		 */
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      debugger;
      this._watchId=null;
      this._enableHighAccuracy=null;
      this._timeOut=null;
      this._maximumCachedAge=null;
      this._minimumDistance=null;
      this._minimumTime=null;
      this._proximity=null;//in miles.
      this._destination=null;
      this._apiKey=null;
      this._phoneNumber=null;
      this._name=null;
      this._isWatchStopped=false;
      this._mockServiceName="InspGMapIntgSrvc";
      this._mockOperationName="nearByPlaces";
      this._directionOperationName="mapDirection";
      this._isInSimulationMode=false;
      this._stepIndex=0;
      this._distanceInMeter=null;

      this.addLongPressGesture();
    },

    //Logic for getters/setters of custom properties
    /**
     * @function
     *
     */
    initGettersSetters: function() {
      defineSetter(this, "enableHighAccuracy", function(val) {
        if(typeof val=='boolean'){
          this._enableHighAccuracy=val;
        }else{
          debugger;
          this._enableHighAccuracy=true;
        }
      });
      defineGetter(this, "enableHighAccuracy", function() {
        return this._enableHighAccuracy;
      });

      defineSetter(this, "timeOut", function(val) {
        if(typeof val=='number'){
          this._timeOut=val;
        }else{
          debugger;
          this._timeOut=15000;
        }
      });
      defineGetter(this, "timeOut", function() {
        return this._timeOut;
      });

      defineSetter(this, "maximumCachedAge", function(val) {
        if(typeof val=='number'){
          this._maximumCachedAge=val;
        }else{
          debugger;
          this._maximumCachedAge=300000;
        }
      });
      defineGetter(this, "maximumCachedAge", function() {
        return this._maximumCachedAge;
      });

      defineSetter(this, "minimumDistance", function(val) {
        if(typeof val=='number'){
          this._minimumDistance=val;
        }else{
          debugger;
          this._minimumDistance=10;
        }
      });
      defineGetter(this, "minimumDistance", function() {
        return this._minimumDistance;
      });

      defineSetter(this, "minimumTime", function(val) {
        if(typeof val=='number'){
          this._minimumTime=val;
        }else{
          debugger;
          this._minimumTime=60000;
        }
      });
      defineGetter(this, "minimumTime", function() {
        return this._minimumTime;
      });

      defineSetter(this, "proximity", function(val) {
        if(typeof val=='number'){
          this._proximity=val;
        }else{
          debugger;
          this._proximity=1;//default 1 mile.
        }
      });
      defineGetter(this, "proximity", function() {
        return this._proximity;
      });
      defineSetter(this, "apiKey", function(val) {
        if(typeof val=='string'){
          this._apiKey=val;
        }else{
          debugger;
        }
      });
      defineGetter(this, "apiKey", function() {
        return this._apiKey;
      });
    },
    month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    /**
     * @function
     *
     */
    addLongPressGesture:function(){
      var longConfig={pressDuration:1};
      try{
        var gesturehandle=this.view.flxLocationInfoRoot.addGestureRecognizer(constants.GESTURE_TYPE_LONGPRESS,longConfig,this.longpressGestureCallBack);
      }catch(excp){
        debugger;
        alert("Unable to set gesture recognizer");
      }
    },
    /**
     * @function
     *
     * @param widgetRef 
     * @param gestureInfo 
     */
    longpressGestureCallBack:function(widgetRef,gestureInfo){
      debugger;
      this.clearWatch();
      this.mockLocation();
      this.hideConfirmationPopup();
      //alert(gestureInfo.gesturesetUpParams.pressDuration);
      //this.view.lblGesture.text= "A longpress gesture was performed for "+ gestureInfo.gesturesetUpParams.pressDuration+" Seconds";
    },
    /**
     * @function
     *
     */
    mockLocation:function(){
      if(typeof this._destination=="object" && this._destination!==null && 
         isNaN(this._destination["lattitude"])===false && isNaN(this._destination["longitude"])===false){
        try{
          if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)===true){
            this._isInSimulationMode=true;
            this.view.mapNavigator.clear();
            this._stepIndex=0;
            this.getNearByLocation(this._destination["lattitude"],this._destination["longitude"]);
          }else{
            alert("Please check your network connection!");
          }
        }catch(excp){
          debugger;
          alert(JSON.stringify(excp));
        }
      }else{
        debugger;
      }
    },
    /**
     * @function
     *
     */
    getNearByLocation:function(lat,lon){
      if(isNaN(lat)===false && isNaN(lon)===false){
        var header={};
        var param={};
        param["lat"]=""+lat;
        param["lon"]=""+lon;
        param["type"]="airport";
        param["apiKey"]=this._apiKey;
        param["rankBy"]="distance";
        param["radius"]="50000";
        var intgService=KNYMobileFabric.getIntegrationService(this._mockServiceName);
        try{
          kony.application.showLoadingScreen("","retrieving nearby airport..",
                                             constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,false,null);
          intgService.invokeOperation(this._mockOperationName,{},param,this.nearByLocationSuccessCB.bind(this),this.nearByLocationFailureCB.bind(this));
        }catch(excp){
          kony.application.dismissLoadingScreen();
          debugger;
          throw excp;
        }
      }else{
        throw "Destination not available";
      }
    },
    /**
     * @function
     *
     * @param response 
     */
    nearByLocationFailureCB:function(response){
      kony.application.dismissLoadingScreen();
      debugger;
    },
    /**
     * @function
     *
     * @param response 
     */
    nearByLocationSuccessCB:function(response){
      debugger;
      try{
        //kony.application.dismissLoadingScreen();
        if(typeof response=='object' && response!==null){
          var records=response["results"];
          if(Array.isArray(records) && records.length>0){
            var recordLength=records.length;
            var sourcePoint=records[recordLength-1];
            if(typeof sourcePoint=='object' && sourcePoint!==null ){
              var source={};
              source["image"]=sourcePoint["icon"];
              source["id"]=sourcePoint["id"];
              source["name"]=sourcePoint["name"];
              source["vicinity"]=sourcePoint["vicinity"];
              source["lat"]=sourcePoint["geometry"]["location"]["lat"];
              source["lon"]=sourcePoint["geometry"]["location"]["lng"];
              if(typeof sourcePoint["geometry"]["location"] && sourcePoint["geometry"]["location"]!==null){
                source["lat"]=sourcePoint["geometry"]["location"]["lat"];
                source["lon"]=sourcePoint["geometry"]["location"]["lng"];
                this.searchRoute(source, this._destination);
              }else{
                debugger;
              }
            }else{
              debugger;
            }

          }
        }else{
          debugger;
        }
      }catch(excp){
        debugger;
      }
    },
    /**
     * @function
     *
     * @param phNumber 
     */
    setphoneNumber:function(phNumber){
      if(typeof phNumber=='string'){
        this._phoneNumber=phNumber;
      }else{
        this._phoneNumber=null;
      }
    },
    /**
     * @function
     *
     */
    showConfirmationPopup:function(){
      var animationEndCallBack=function(){
        this.view.flxPopOverShade.skin="Copykonympap";
      };
      this.view.flxPopOverShade.animate(
        kony.ui.createAnimation({100:{top:"0%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.30},
        {animationEnd: animationEndCallBack.bind(this)
        });
    },
    /**
     * @function
     *
     */
    hideConfirmationPopup: function(){
      var animationEndCallBack=function(){
        this.view.flxPopOverShade.skin="slFbox";
      };
      this.view.flxPopOverShade.animate(
        kony.ui.createAnimation({100:{top:"100%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.30},
        {animationEnd: animationEndCallBack.bind(this)
        });
      this.view.forceLayout();
    },

    /**
     * @function
     *
     */
    setName:function(name){
      if(typeof name=='string'){
        this.view.lblSiteRepresentativeValue.text=name;
        this._name=name;
      }else{
        this.view.lblSiteRepresentativeValue.text="NA";
      }
    },
    /**
     * @function
     *
     * @param destination 
     */
    setDestination:function(destination){
      if(typeof destination=='object' && destination!==null){
        if(!isNaN(destination["lattitude"]) && !isNaN(destination["longitude"])){
          //this.view.mapNavigator.clear();
          try{
            this.view.getdirection.destinationPlace=destination["lattitude"]+","+destination["longitude"];
            this.resetComponent();
            this._destination=destination;
            this.drawCircle(destination);
            //this.trackLocation();
          }catch(excp){
            debugger;
          }

        }
      }else{
        alert("Destination not available");
      }
    },
    /**
     * @function
     *
     * @param source 
     */
    drawCircle: function (source) {
      if(typeof source==='object' && source!==null){
        var circleData = {
          id: "circle0",
          centerLocation: {
            lat: source["lattitude"],
            lon: source["longitude"]
          },
          navigatetoZoom: false,
          radius: this._proximity,
          circleConfig: {
            lineColor: "0x858585FF",
            lineWidth: 1,
            fillColor: "0x85858580"
          },
          showCenterPin: false
        };
        try{
          this.view.mapNavigator.addCircle(circleData); 
          this.view.mapNavigator.navigateToLocation(circleData.centerLocation , true, true);
        }catch(excp){
          debugger;
        }
      }else{
        debugger;
      }
    },
    /**
     * @function
     *
     */
    trackLocation: function () {

      var positionoptions = {};
      positionoptions.enableHighAccuracy=this._enableHighAccuracy;
      positionoptions.timeout=this._timeOut;
      positionoptions.maximumAge=this._maximumCachedAge;
      positionoptions.minimumTime=this._minimumTime;
      positionoptions.minimumDistance=this._minimumDistance;
      this._isWatchStopped=false;
      this.hideConfirmationPopup();
      try {
        this._watchId = kony.location.watchPosition(this.trackLocationSuccessCB.bind(this), 
                                                    this.trackLocationFailureCB.bind(this), 
                                                    positionoptions);
      } catch (exception) {
        debugger;
        //alert("Exception is ::" + exception.message);
      }
    },
    /**
     * @function
     *
     */
    trrigerCheckInCallback:function(){
      debugger;
      // To run app in preview enable it.
      this.onClickForcedCheckIn();
      return;


      this.clearWatch();
      //this.view.mapNavigator.clear();
      if(typeof this.checkInCallback=='function'){
        var currentdate = new Date(); 
        var datetime =  "Date "+currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + 
            currentdate.getFullYear() + " Time " + currentdate.getHours() + ":"  + 
            currentdate.getMinutes() + ":" + currentdate.getSeconds();
        this.checkInCallback(currentdate,this._isInSimulationMode);
        //this.checkInCallbac
        //this.checkInCallback(datetime);
        //this.view.btnCheckin.onClick=this.checkinCallback;
      }
    },

    /**
   * @function
   *
   * @param res 
   */
    trackLocationSuccessCB: function (res) {
      debugger;
      //alert("res:"+JSON.stringify(res));
      if(typeof res=='object' && res!==null && this._isWatchStopped===false){
        var coords=res["coords"];
        if(typeof coords=='object' && coords!==null){
          var sourceLoc = {
            lat: coords["latitude"],
            lon: coords["longitude"],
            name: "Current Location",
            desc: "",
            image: "myself.png"
          };

          try{
            this.view.getdirection.originPlace=coords["latitude"]+","+coords["longitude"];
            if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)===true){
              this.searchRoute(sourceLoc, this._destination);
            }else{
              // show map pins.
              this.view.mapNavigator.clear();
              this.setPinsToMap([this._destination, sourceLoc]);
              //this.view.mapNavigator.locationData=[this._destination,sourceLoc];
            }
            //var distanceInMeter=this.findDistanceInMiles(sourceLoc, this._destination)*1609;
            var distanceInMiles=this.findDistanceInMiles(sourceLoc, this._destination);
            this.showDistanceInView(distanceInMiles);
            //this.view.lblDistanceVal.text=Math.round(distanceInMiles)+" mi";
            if(distanceInMiles>this._proximity){
              this.disableCheckIn();
            }else{
              this.enableCheckIn();
            }
          }catch(excp){
            debugger;
          }

        }
      }
    },
    /**
     * @function
     *
     */
    disableCheckIn:function(){
      this.view.btnCheckin.skin="sknBtnBgWhiteFonte3e3e3SizeSize56BorderE3e3e3";
      this.view.btnCheckin.focusSkin="sknBtnBgWhiteFonte3e3e3SizeSize56BorderE3e3e3";
      this.view.btnCheckin.onClick=null;
    },
    /**
     * @function
     *
     */
    enableCheckIn:function(){
      this.view.btnCheckin.skin="sknBtnWhiteBgFont575ee7Border";
      this.view.btnCheckin.focusSkin="sknBtnBg575ee7FontWhite";
      if(typeof this.checkInCallback=='function'){
        this.view.btnCheckin.onClick=this.trrigerCheckInCallback;
      }
    },
    /**
     * @function
     *
     */
    showDistanceInView:function(distance){
      if(typeof distance=='number'){
        if(distance<1){
          //if distance is less than 1 mile show in feet
          distance=distance*5280;
          this.view.lblDistanceVal.text=(Math.round(distance*100))/100+" feet";
        }else{
          this.view.lblDistanceVal.text=(Math.round(distance*100))/100+" mi";
        }

      }
    },
    /**
   * @function
   *
   * @param err 
   */
    trackLocationFailureCB: function (err) {
      debugger;
      //             alert(err);
    },
    onClickForcedCheckIn:function(){
      //Timestamp Return in case of ForcedExecution.
      this.hideConfirmationPopup();
      var currentdate = new Date(); 
      var datetime =  "Date "+currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " Time " + currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds();
      this.clearWatch();
      if(typeof this.forcedCheckInCallback=='function'){
        this.forcedCheckInCallback(currentdate);
      }

    },
    onClickCallNumber() {
      try {
        var phoneNumber=this._phoneNumber;
        if (phoneNumber !== undefined || phoneNumber !== ""){
          kony.phone.dial(phoneNumber);
        }else{
          alert("provide valid number");
        }

      } catch (err) {
        debugger;
        alert("error in dial:: " + err);
      }
    },
    /**
     * @function
     *
     */
    setCheckInTime:function(checkInTime){
      var checkInDateString="NA";
      if(typeof checkInTime=='string'){
        try{
          //var checkInTImeStamp=checkInTime.replace('T', ' ');
          var dateTimeString=checkInTime.split("T");
          if(Array.isArray(dateTimeString) && dateTimeString.length>1){
            //var dateObj=new Date();
            var dateString=dateTimeString[0];
            var timeString=dateTimeString[1];
            dateString=dateString.split("-");
            timeString=timeString.split(":");
            var dateObj=new Date(Date.UTC(dateString[0], Number(dateString[1])-1, dateString[2], timeString[0], timeString[1], 0));
            checkInDateString=dateObj.getDate()+" "+this.month[dateObj.getMonth()]+" "+
              dateObj.getHours()+":"+dateObj.getMinutes()+" Hrs";
          }
        }catch(excp){
          debugger;
        }

      }else{
        debugger;
      }
      this.view.lblCheckinnTimestamp.text=checkInDateString;
    },

    /**
   * @function
   *
   */
    onPostShow:function(){
      debugger;
      //this.searchRoute(this.locationMap.source, this.locationMap.dest);
      this.resetComponent();
      this.view.forceLayout();
      var locationData={};
      this.getGeoPosition();
    },
    /**
   * @function
   *
   * @param sourceLocation 
   * @param destinationLocation 
   */
    searchRoute2:function(sourceLocation,destinationLocation){
      //alert("sourceLocation:"+JSON.stringify(sourceLocation));
      //alert("destinationLocation:"+JSON.stringify(destinationLocation));
      if(typeof sourceLocation==='object' && sourceLocation!==null &&
         typeof destinationLocation==='object' && destinationLocation!==null){
        var param={};
        var source={};
        param["destLat"]=Number(destinationLocation["lattitude"]);
        param["destLon"]=Number(destinationLocation["longitude"]);
        param["sourceLat"]=sourceLocation["lat"];
        param["sourceLon"]=sourceLocation["lon"];
        try{
          kony.application.showLoadingScreen("","retrieving nearby airport..",
                                             constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,false,null);
          var intgService=KNYMobileFabric.getIntegrationService(this._directionOperationName);
          intgService.invokeOperation(this.mapDirection,{},param,this.nearByLocationSuccessCB.bind(this),this.nearByLocationFailureCB.bind(this));
        }catch(excp){
          kony.application.dismissLoadingScreen();
          debugger;
          throw excp;
        }

      }
    },
    /**
     * @function
     *
     * @param response 
     */
    searchRouteIntgSuccessCB:function(response){
      debugger;
    },
    /**
     * @function
     *
     * @param response 
     */
    searchRouteIntgFailureCB:function(response){
      debugger;
    },
    /**
   * @function
   *
   * @param sourceLocation 
   * @param destinationLocation 
   */
    searchRoute:function(sourceLocation,destinationLocation){
      //alert("sourceLocation:"+JSON.stringify(sourceLocation));
      //alert("destinationLocation:"+JSON.stringify(destinationLocation));
      if(typeof sourceLocation==='object' && sourceLocation!==null &&
         typeof destinationLocation==='object' && destinationLocation!==null){
        var dest={};
        var source={};
        dest["lat"]=Number(destinationLocation["lattitude"]);
        dest["lon"]=Number(destinationLocation["longitude"]);
        dest["address"]="";
        source["lat"]=sourceLocation["lat"];
        source["lon"]=sourceLocation["lon"];
        source["address"]="";
        var searchCriteriaObj={};
        searchCriteriaObj["alternatives"]=true;
        searchCriteriaObj["directionServiceUrl"]="https://maps.googleapis.com/maps/api/directions/json";
        searchCriteriaObj["destination"]=dest;
        searchCriteriaObj["origin"]=source;
        searchCriteriaObj["transportMode"]="driving";
        searchCriteriaObj["apiKey"]=this._apiKey;
        try{
          /*kony.application.showLoadingScreen("","retrieving routes..",
                                             constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,false,null);*/
          kony.map.searchRoutes(searchCriteriaObj, this.searchRouteSuccesCallback.bind(this,sourceLocation,destinationLocation), 
                                this.searchRoutesErrorCallback.bind(this,sourceLocation,destinationLocation)); 
        }catch(excp){
          kony.application.dismissLoadingScreen();
          alert("Excp in search routes:"+JSON.stringify(excp));
          debugger;
          throw excp;

        }

      }
    },
    /**
   * @function
   *
   * @param routes 
   */
    searchRouteSuccesCallback : function(source,dest,routes){
      if(Array.isArray(routes) && routes.length>0){
        this.displySearchRoutes(routes);
        this.view.mapNavigator.zoomLevel=12;
      }else{
        this.setPinsToMap([dest,source]);
      }
    },
    /**
     * @function
     *
     * @param source 
     * @param dest 
     */
    setPinsToMap:function(locationList){
      debugger;
      if(Array.isArray(locationList) && locationList.length>1){
        try{
          var dest=locationList[0];
          var destObj={};
          destObj["lat"]=locationList[0]["lattitude"];
          destObj["lon"]=locationList[0]["longitude"];
          destObj["desc"]=locationList[0]["address"];
          destObj["showCallout"]=true;
          locationList[0]=destObj;
          this.view.mapNavigator.locationData=locationList;
          kony.application.dismissLoadingScreen();
          //this.view.mapNavigator.navigateToLocation(locationList[1], false, true);
          this.view.mapNavigator.zoomLevel=1;
        }catch(excp){
          debugger;
        }

      }
    },
    /**
   * @function
   *
   * @param errorCode 
   * @param errorMessage 
   */
    searchRoutesErrorCallback:function(source,dest,errorCode,errorMessage){
      //alert("Error in search route");
      debugger;
      kony.application.dismissLoadingScreen();
      this.setPinsToMap([dest,source]);
      //alert(errorCode+"   "+errorMessage);
    },
    /**
     * @function
     *
     */
    /*setDistance:function(distanceInMeter){
      var distanceInMiles=distanceInMeter*0.000621371;
    },*/
    /**
     * @function
     *
     * @param searchedRoutes 
     */
    displySearchRoutes:function(searchedRoutes){
      var routeColors = ["0000FFFF","FF00FFFF","FF0000FF","FFFF00FF","0x000000FF"];
      if(Array.isArray(searchedRoutes) && searchedRoutes.length>0){
        if(this._isInSimulationMode===true){
          var source={};
          try{
            this._distanceInMeter=searchedRoutes[0]["distance"];
            kony.application.dismissLoadingScreen();
            try{
              kony.timer.cancel("mytimer2");
            }catch(excp){
              debugger;
            }
            try{
              kony.timer.schedule("mytimer2",this.simulatePath.bind(this,searchedRoutes), 2, false);
            }catch(excp){
              debugger;
            }
          }catch(excp){
            debugger;
          }
        }else{
          this.drawRoute("route"+0, searchedRoutes[0].polylinePoints, routeColors[0],0);
        }
      }else{
        debugger;
      }
    },
    startSimulation:function(searchedRoutes){
      kony.application.dismissLoadingScreen();
      if(Array.isArray(searchedRoutes) && searchedRoutes.length>1){
        if(isNaN(this._stepIndex)===true){
          this._stepIndex=0;
          //this._distanceInMeter=searchedRoutes[0]["distance"];
        }
        var index=this._stepIndex;
        var distance=this._distanceInMeter;
        var polyPointsLength=searchedRoutes[0].polylinePoints.length;
        if(this._stepIndex>=polyPointsLength){
          try{
            index=polyPointsLength-1;
            distance=10;
            this._distanceInMeter=10;
            this.enableCheckIn();
            kony.timer.cancel("mytimer1");
          }catch(excp){
            debugger;
          }
        }
        //this.setDistance(distance);
        this.showDistanceInView(distance*0.000621371);
        this.drawRoute("route"+0, searchedRoutes[0].polylinePoints,"0000FFFF",index);
        index=index+Math.ceil(polyPointsLength/5);
        this._distanceInMeter=this._distanceInMeter-this._distanceInMeter/5;
        this._stepIndex=index;
      }
    },
    /**
     * @function
     *
     */
    simulatePath:function(searchedRoutes){
      try{
        kony.timer.cancel("mytimer1");
      }catch(excp){
        debugger;
      }
      try{
        kony.timer.schedule("mytimer1",this.startSimulation.bind(this,searchedRoutes), 1, true);
      }catch(excp){
        debugger;
      }
      /*if(Array.isArray(searchedRoutes) && searchedRoutes.length>1){
        if(isNaN(this._stepIndex)===true){
          this._stepIndex=0;
          //this._distanceInMeter=searchedRoutes[0]["distance"];
        }
        var index=this._stepIndex;
        var distance=this._distanceInMeter;
        var polyPointsLength=searchedRoutes[0].polylinePoints.length;
        if(this._stepIndex>=polyPointsLength){
          try{
            index=polyPointsLength-1;
            distance=10;
            this._distanceInMeter=10;
            this.enableCheckIn();
            kony.timer.cancel("mytimer1");
          }catch(excp){
            debugger;
          }
        }
        //this.setDistance(distance);
        this.showDistanceInView(distance*0.000621371);
        this.drawRoute("route"+0, searchedRoutes[0].polylinePoints,"0000FFFF",index);
        index=index+Math.ceil(polyPointsLength/5);
        this._distanceInMeter=this._distanceInMeter-this._distanceInMeter/5;
        this._stepIndex=index;
      }*/
    },
    /**
     * @function
     *
     * @param routeid 
     * @param polyPoints 
     * @param color 
     */
    drawRoute:function(routeid,polyPoints,color,index){
      //alert("draw route:");
      var steps = polyPoints;
      kony.print("################The polyline points############");
      kony.print(steps);
      var ei = steps.length-1;
      var startLoc = {
        lat:steps[index].lat,
        lon:steps[index].lon,
        image:{source:"myself.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}
      };
      var endLoc = {
        lat:steps[ei].lat,
        lon:steps[ei].lon,
        image:{source:"pindest.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}
      };
      var polylineData = {
        id : routeid,
        //locations : steps.slice(index,ei+1),
        locations : steps,
        startLocation : startLoc,
        endLocation : endLoc,
        polylineConfig : {lineWidth : 5, lineColor: color}
      };
      //this.navigateToStore();
      //this.view.directionMap.addPolyline(polylineData);
      try{
        this.view.mapNavigator.clear();
        this.view.mapNavigator.navigateToLocation(startLoc, true, true);
        this.view.mapNavigator.addPolyline(polylineData);
      }catch(excp){
        alert("Excp in adding polyline:");
        debugger;
      }
    },
    /**
     * @function
     *
     */
    findDistanceInMiles: function(sourceLocation,destinationLocation) {
      var distance=null;
      if(typeof sourceLocation=='object' && sourceLocation!==null && 
         typeof destinationLocation=='object' && destinationLocation!==null){
        var lat1=Number(sourceLocation["lat"]);
        var lon1=Number(sourceLocation["lon"]);
        var lat2=Number(destinationLocation["lattitude"]);
        var lon2=Number(destinationLocation["longitude"]);
        var Radius = 6371; 
        var radConst = (Math.PI/180);
        try{
          var dLat = (lat2-lat1)*radConst; 
          var dLon = (lon2-lon1)*radConst; 
          var a = 
              Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos((lat1*radConst)) * Math.cos(lat2*radConst) * 
              Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
          var centralAngle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          distance = Radius * centralAngle * 0.6237; 
        }catch(excp){
          debugger;
          distance=null;
        }
      }
      return distance;
    },
    /**
     * @function
     *
     */
    clearWatch:function(){
      try{
        this._isWatchStopped=true;
        kony.location.clearWatch(this._watchId);
      }catch(excp){
        debugger;
      }
    },
    /**
   * @function
   *
   */
    resetComponent:function(){
      this._stepIndex=0;
      this._isInSimulationMode=false;
      this.view.btnCheckin.onClick=function(){};
      this._stepIndex=0;
      this.view.btnCheckin.skin="sknBtnBgWhiteFonte3e3e3SizeSize56BorderE3e3e3";
      this.view.btnCheckin.focusSkin="sknBtnBgWhiteFonte3e3e3SizeSize56BorderE3e3e3";
      this.clearWatch();
      try{
        this.view.mapNavigator.clear();
        kony.timer.cancel("mytimer1");
      }catch(excp){
        debugger;
      }
    }
  };
});