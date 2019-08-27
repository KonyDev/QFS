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
      this._watchId=null;
      this._enableHighAccuracy=null;
      this._enableLocationSimulation=null;
      this._timeOut=null;
      this._maximumCachedAge=null;
      this._minimumDistance=null;
      this._minimumTime=null;
      this._proximity=0.003;
      this._apiKey="AIzaSyBxz_lS49jNEpML6LiwXTbKQRPsTSS8HZM";
      this._checkPointDetails={};
      this._phoneNumber=null;
      this._name=null;
      this._placesData=[];
      this._destLat=null;
      this._destLon=null;
      this._destination={"lattitude":"29.858389","longitude":"-95.378321"};
      this._source={"lat":"29.856866","lon":"-95.122587"};
      this._wayPoints=[];
      this._checkPointData=[];
      this._checkPoints=[];
      this._globalPlaceDataIndex=null;
      this._selectedWayPoint= 0;
      this._placesDataLength=null;
      this._globalTimer=false;
      this._currentTimerID=null;
      this._gestureType=null;
      this._journeyDetails={};
      this._checkPointDetails={};
      this._checkPointIndex=0;
      this._gestureType ={pressDuration:2};
      this._enteredCheckPoint1=false;
      this._enteredCheckPoint2=false;
      this._enteredCheckPoint3=false;
      this._enteredCheckPoints=[];
      this._reachedDestination = false;
      this._count=0;
      this._filteredWayPoints=[];
      this._isEtaEnabled = true;
      this._totalJourneyDuration =0;
      this._totalJourneyDistance=0;
      this._currentCheckPoint="";
      this._checkPointIndices=[];
      try{
        this.view.flxInnerDetails.setGestureRecognizer(constants.GESTURE_TYPE_LONGPRESS, this._gestureType, this.formGesture.bind(this));
      }
      catch(err){
        alert(err);
      }
    },

    formGesture: function(myWidget,gestureInfo){
      this.view.removeGestureRecognizer(this._gestureType);
      this.startJourneyMocking(this._source, this._destination);

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
          this._minimumTime=60000;
        }
      });
      defineGetter(this, "minimumTime", function() {
        return this._minimumTime;
      });
      defineSetter(this, "apiKey", function(val) {
        if(typeof val=='string'){
          this._apiKey=val;
        }else{
        }
      });
      defineGetter(this, "apiKey", function() {
        return this._apiKey;
      });
      defineSetter(this, "enableLocationSimulation", function(val) {
        if(typeof val=='boolean'){
          this._enableLocationSimulation=val;
        }else{
          this._enableLocationSimulation=false;
        }
      });
      defineGetter(this, "enableLocationSimulation", function() {
        return this._enableHighAccuracy;
      });
      defineSetter(this, "proximity", function(val) {
//         if(typeof val=='boolean'){
//           this._enableLocationSimulation=val;
//         }else{
//           debugger;
//           this._enableLocationSimulation=false;
//         }
      });
      defineGetter(this, "proximity", function() {
        return "";
      });
    },
    month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
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
            if(!this._enableLocationSimulation){
              this.trackLocation();
            }

          }catch(excp){
          }

        }
      }else{
        alert("Destination not available");
      }
    },

    /**
     * @function
     *
     */
    trrigerCheckInCallback:function(){
      if(typeof this.checkInCallback=='function'){
        this.clearWatch();
        var currentdate = new Date(); 
        var datetime =  "Date "+currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + 
            currentdate.getFullYear() + " Time " + currentdate.getHours() + ":"  + 
            currentdate.getMinutes() + ":" + currentdate.getSeconds();
        this.checkInCallback(datetime);
        //this.view.btnCheckin.onClick=this.checkinCallback;
      }
    },

    /**
   * @function
   *
   * @param res 
   */
    trackLocationSuccessCB: function (res) {
      //alert("res:"+JSON.stringify(res));
      if(typeof res=='object' && res!==null){
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
            //alert("hello");
            this.view.getdirection.originPlace=coords["latitude"]+","+coords["longitude"];
            var dateObj = new Date(); 
            var currentDate=dateObj.getDate();
            if(currentDate<10)
              currentDate="0"+currentDate;
            var currentMonth=this.month[dateObj.getMonth()+1];
            //var currentMonth=dateObj.toLocaleString("en-us", { month: "short" });
            var currentHour=dateObj.getHours();
            if(currentHour<10){
              currentHour="0"+currentHour;
            }
            var currentMinute=dateObj.getMinutes();
            if(currentMinute<10){
              currentMinute="0"+currentMinute;
            }
            var datetime = currentDate+" " +currentMonth + " " + currentHour + ":"  + currentMinute +" Hrs";
            this.view.lblCheckinnTimestamp.text=datetime;
            if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)===true){
              this.searchRoute(sourceLoc, this._destination);
            }else{
              // show map pins.
              this.view.mapNavigator.clear();
              this.view.mapNavigator.locationData=[this._destination,sourceLoc];
            }

          }catch(excp){
          }

        }
      }

    },
    /**
   * @function
   *
   * @param err 
   */
    trackLocationFailureCB: function (err) {
      //             alert(err);
    },
    
    resetComponent: function () {
      //             alert(err);
    },
    clearWatch: function () {
      //             alert(err);
    },
     mockLocation: function () {
      //             alert(err);
    },
    displayAlert2: function () {
      //             alert(err);
    },


    /**
   * @function
   *
   */
    onPostShow:function(){
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
    searchRoute:function(sourceLocation,destinationLocation){
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
          //alert("searchCriteriaObj: "+JSON.stringify(searchCriteriaObj));
          kony.map.searchRoutes(searchCriteriaObj, this.searchRouteSuccesCallback.bind(this), this.searchRoutesErrorCallback); 
        }catch(excp){
          alert("Excp in search routes:"+JSON.stringify(excp));
          debugger;
        }

      }
    },
    /**
   * @function
   *
   * @param routes 
   */
    searchRouteSuccesCallback : function(routes){
      if(routes.length != 0 && this._reachedDestination == false){
        this.displySearchRoutes(routes);
      }
      else{
        alert("no route exists");
      } 
    },

    /**
   * @function
   *
   * @param errorCode 
   * @param errorMessage 
   */
    searchRoutesErrorCallback:function(errorCode,errorMessage){
      //alert("Error in search route");
      debugger;
      //alert(errorCode+"   "+errorMessage);
    },
    /**
     * @function
     *
     * @param searchedRoutes 
     */
    displySearchRoutes:function(searchedRoutes){
      // alert("Searched routes: "+searchedRoutes.length);
      var routeColors = ["0000FFFF","FF00FFFF","FF0000FF","FFFF00FF","0x000000FF"];
      if(Array.isArray(searchedRoutes) && searchedRoutes.length>0){
        if(this._count == 0){
          this._wayPoints = searchedRoutes[0].polylinePoints;
          this._wayPoints.splice(this._wayPoints.length, 3);
          this._count++;
        }
        
        var finalDestination={
          "lat":this._destination["lattitude"],
          "lon":this._destination["longitude"]
        };
        this.drawRoute("route"+0, searchedRoutes[0].polylinePoints, routeColors[0],this._checkPoints);
      }else{
        debugger;
      }
    },
    /**
     * @function
     *
     * @param routeid 
     * @param polyPoints 
     * @param color 
     */
    drawRoute:function(routeid,polyPoints,color,checkpointsData){
      //alert("draw route:");
      var steps = polyPoints;
      kony.print("################The polyline points");
      kony.print(steps);
      var ei = steps.length-1;
      var startLoc = {
        lat:steps[0].lat,
        lon:steps[0].lon,
        image:{source:"sourcemodified.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}
      };
      var endLoc = {
        lat:steps[ei].lat,
        lon:steps[ei].lon,
        image:{source:"arrivalfinal.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}
      };
      var polylineData = {
        id : routeid,
        locations : steps,
        startLocation : startLoc,
        endLocation : endLoc,
        polylineConfig : {lineWidth : 5, lineColor: color}
      };

      
      try{
        this.view.mapNavigator.clear();
        this.view.mapNavigator.addPolyline(polylineData);
        this.view.mapNavigator.navigateTo(0);
        if(this._selectedWayPoint === 1){
          this.setCheckPoints(this._wayPoints,this.view.mapNavigator);
        }
        else if(this._selectedWayPoint > 1){
          if(this._enteredCheckPoint1 == false){
            this.view.mapNavigator.addPin(this._checkPoints[0]);
          }
          else{
            this.view.mapNavigator.addPin(this._enteredCheckPoints[0]);
          }

          if(this._enteredCheckPoint2 == false){
            this.view.mapNavigator.addPin(this._checkPoints[1]);
          }
          else{
            this.view.mapNavigator.addPin(this._enteredCheckPoints[1]);
          }

          if(this._enteredCheckPoint3 == false){
            this.view.mapNavigator.addPin(this._checkPoints[2]);
          }else{
            this.view.mapNavigator.addPin(this._enteredCheckPoints[2]);
          }
        }
        var alertObj = this.view.customAlertWithoutContactCheckin;
        var mapObj = this.view.mapNavigator;
        this.trackCheckPoints(startLoc,endLoc,checkpointsData,alertObj,mapObj);
      } 
      catch(excp){
        alert("Excp in adding polyline:"+excp);
        debugger;
      }
    },

    /**
     * @function
     *
     */
    clearWatch:function(){
      try{
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
      this.view.mapNavigator.clear();
      try{
        kony.location.clearWatch(this._watchId);
      }catch(excp){
        debugger;
      }
    },

    dialSupervisor:function(){
      try {
        this._phoneNumber="8686186516";
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

    dialTrackingPoint:function(){
      try {
        this._phoneNumber="8686186516";
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

    changeButtonSkin:function(){
      var config = {};
      var self=this;
      config.statusChange = function (isOnLine)
      {
        if(isOnLine)
        {
          this.view.btnNetStatus.text = "YOU ARE ONLINE";
          this.view.btnNetStatus.skin = "sknNetworkOnline";
        }
        else
        {
          self.view.btnNetStatus.skin = "sknNetworkOffLine";
          self.view.btnNetStatus.text = "YOU ARE OFFLINE, CHECK YOUR CONNECTION";
        }
      };
      kony.net.setNetworkCallbacks(config);
      var isOnLine = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
    },


    startJourneyMocking:function(srcLocation,destLocation){
      this.clearWatch(); 
      if(this._selectedWayPoint == 0  ){
        this.searchRoute(this._source,this._destination);
        this._selectedWayPoint++;
      }
      else if(this._wayPoints[this._selectedWayPoint]!= null){
        this.searchRoute(this._wayPoints[this._selectedWayPoint],this._destination);
        this._selectedWayPoint++;
      } 
      else{
        kony.timer.cancel("mytimer1");
      }
    },
    getETAforDestination:function(src,dest,checkPoints){
      
      try
      {
        var serviceName = "getETASForLoc";
      var integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
      var operationName = "getEta";
      var query = checkPoints[0].lat+","+checkPoints[0].lon+"|"+checkPoints[1].lat+","+checkPoints[1].lon+"|"+checkPoints[2].lat+","+checkPoints[2].lon;
      var data= {"srcLat": src.lat, "srcLon":src.lon, "destLat":dest.lattitude,"destLon":dest.longitude,"waypoints":query,"key": "AIzaSyBxz_lS49jNEpML6LiwXTbKQRPsTSS8HZM"};
      var headers= {};
        integrationObj.invokeOperation(operationName,headers,data,this.operationSuccess.bind(this),this.operationFailure.bind(this));

      }catch(exception){
        alert(exception.message);
      }
    },
    operationSuccess:function(response){
    var checkPointDetails ={};
      var legsLength = response.routes[0].legs.length;
      for(i=0;i<legsLength;i++){
        var checkPointName = "checkPoint"+i;
        checkPointDetails[checkPointName]={};
        checkPointDetails[checkPointName]["address"] = response.routes[0].legs[i].end_address.trim(",",1);
        checkPointDetails[checkPointName]["duration"] = response.routes[0].legs[i].duration.value;
        checkPointDetails[checkPointName]["distance"] = response.routes[0].legs[i].distance.value;  
      }
      var totalDuration=0;
      var totalDistance=0;
      for(i=0;i<legsLength;i++){
       var checkPointName = "checkPoint"+i;
       totalDuration+=checkPointDetails[checkPointName]["duration"]
       totalDistance+=checkPointDetails[checkPointName]["distance"]
      }
      totalDuration = Math.ceil(totalDuration/60);
      totalDistance=Math.ceil(totalDistance * 0.000621371192);
      checkPointDetails["totalJourneyDuration"] = totalDuration;
      checkPointDetails["totalJourneyDistance"] = totalDistance;
      var lastIndex = legsLength-1;
      checkPointDetails["destination"] = checkPointDetails["checkPoint"+lastIndex].address;
      this._checkPointDetails=checkPointDetails;
      this._currentCheckPoint=checkPointDetails["checkPoint"+0].address;
      kony.timer.schedule("mytimer1",this.startJourneyMocking.bind(this), 0.5, true);
      
    },

    operationFailure:function(err){
      alert(JSON.stringify(err.message));
    },

    setNetworkStatus:function(){
      try
        {
          var config = {};
      var self=this;
      config.statusChange = function (isOnLine)
      {
        if(isOnLine)
        {
          self.view.btnNetStatus.skin = "sknNetworkOnline";
          self.view.btnNetStatus.text = "YOU ARE ONLINE";
        }
        else
        {
          self.view.btnNetStatus.skin = "sknNetworkOffLine";
          self.view.btnNetStatus.text = "YOU ARE OFFLINE, CHECK YOUR CONNECTION";
        }
      };
      kony.net.setNetworkCallbacks(config);
      var isOnLine = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
        }
      catch(err)
        {
          alert(err.message);
        }
    },

    setCheckPoints:function(wayPoints,mapObj){
      this._checkPointIndex = Math.round(wayPoints.length/3)-1;
      this._checkPointIndices.push(this._checkPointIndex);
      this._checkPointData[0] = this._wayPoints[this._checkPointIndex];
      this._checkPointData[1] = this._wayPoints[2*this._checkPointIndex];
      var index;
      if (3*this._checkPointIndex < wayPoints.length){
        index = Math.round((2*this._checkPointIndex + 3*this._checkPointIndex)/2);
        this._checkPointData[2] = this._wayPoints[index];
        this._checkPointIndices.push(index);
      }
      else{
        index = wayPoints.length-15;
        this._checkPointData[2] = this._wayPoints[index];
      }
      if(this._isEtaEnabled == true){
        this.getETAforDestination(this._source, this._destination, this._checkPointData);
        this._isEtaEnabled = false;
      }
      
      var checkPoint1 = {
        lat:this._checkPointData[0].lat,
        lon:this._checkPointData[0].lon,
        image:{source:"checkpoint1.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}  
      };
      var checkPoint2 = {
        lat:this._checkPointData[1].lat,
        lon:this._checkPointData[1].lon,
        image:{source:"checkpoint2.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}

      };
      var checkPoint3 = {
        lat:this._checkPointData[2].lat,
        lon:this._checkPointData[2].lon,
        image:{source:"checkpoint3.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}
      };
      this._checkPoints[0]=checkPoint1;
      this._checkPoints[1]=checkPoint2;
      this._checkPoints[2]=checkPoint3;
      this.get
      mapObj.addPin(checkPoint1);
      mapObj.addPin(checkPoint2);
      mapObj.addPin(checkPoint3);
      mapObj.zoomLevel = 5;

    },
    trackCheckPoints:function(startLoc,endLoc,checkpointsData,alertObj,mapObj){
      var distance = this.findDistanceInMiles(startLoc,checkpointsData[0]);
      if(distance < this._proximity){
        this._enteredCheckPoint1=true
        var checkPoint1 = {
          lat:this._checkPointData[0].lat,
          lon:this._checkPointData[0].lon,
          image:{source:"enteredcheckpoint.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}  
        };
        this._enteredCheckPoints[0]=checkPoint1;
        mapObj.addPin(checkPoint1);
        alertObj.setVisibility(true);
        alertObj.text = "Regular Check-In";
        alertObj.text1 = "It's time for your 1st Check-In.";
        alertObj.text2 = "Check-In";
      }
      distance = this.findDistanceInMiles(startLoc,checkpointsData[1]);
      if(distance < this._proximity){
        this._enteredCheckPoint2=true
        var checkPoint2 = {
          lat:this._checkPointData[1].lat,
          lon:this._checkPointData[1].lon,
          image:{source:"enteredcheckpoint.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}
        };
        this._enteredCheckPoints[1]=checkPoint2;
        mapObj.addPin(checkPoint2);
        alertObj.setVisibility(true);
        alertObj.text = "Regular Check-In";
        alertObj.text1 = "It's time for your 2nd Check-In.";
        alertObj.text2 = "Check-In";


      }
      distance = this.findDistanceInMiles(startLoc,checkpointsData[2]);
      if(distance < this._proximity){
        this._enteredCheckPoint3=true;
        var checkPoint3 = {
          lat:this._checkPointData[2].lat,
          lon:this._checkPointData[2].lon,
          image:{source:"enteredcheckpoint.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}
        };
        this._enteredCheckPoints[2]=checkPoint3;
        mapObj.addPin(checkPoint3);
        alertObj.setVisibility(true);
        alertObj.text = "Regular Check-In";
        alertObj.text1 = "It's time for your 3rd Check-In.";
        alertObj.text2 = "Check-In";

      }

      distance = this.findDistanceInMiles(startLoc, endLoc);
      if(distance < this._proximity){
        this._enteredCheckPoint3=true;
        var checkPoint3 = {
          lat:this._checkPointData[2].lat,
          lon:this._checkPointData[2].lon,
          image:{source:"departurepoint.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}
        };
        mapObj.addPin(checkPoint3);
        alertObj.setVisibility(true);
        this._reachedDestination=true;
        alertObj.text = "Regular Check-In";
        alertObj.text1 = "You've reached your destination.\n Check-In now.";
        alertObj.text2 = "Check-In";
        kony.timer.cancel("mytimer1");
      }  
    },
    findDistanceInMiles: function(sourceLocation,destinationLocation) {
      var distance=null;
      if(typeof sourceLocation=='object' && sourceLocation!==null && 
         typeof destinationLocation=='object' && destinationLocation!==null){
        var lat1=Number(sourceLocation["lat"]);
        var lon1=Number(sourceLocation["lon"]);
        var lat2=Number(destinationLocation["lat"]);
        var lon2=Number(destinationLocation["lon"]);
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
    displayAlert2:function(){
     this.view.customAlertWithImage.setVisibility(true);
     this.view.customAlertWithImage.text = "Emergency Request Sent.";
     this.view.customAlertWithImage.text1 = "Help is on it's way.";
    },
    
    navigateTo:function(formName){
      var ntf = new kony.mvc.Navigation("frmJourneyCompleted");
      ntf.navigate();
    }
    
    
  };
});