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
      this._timeOut=null;
      this._maximumCachedAge=null;
      this._minimumDistance=null;
      this._minimumTime=null;
      this._proximity=null;//proximity in miles
      this._destinationLatitude=null;
      this._destinationLongitude=null;
      this._destinationAddress=null;
    },
    //Logic for getters/setters of custom properties
    /**
     * @function
     *
     */
    initGettersSetters: function() {
      debugger;
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
    },
    /**
     * @function
     *
     * @param destinationLocation 
     */
    setDestinationLocation:function(destinationLocation){
      debugger;
      if(typeof destinationLocation==='object' && destinationLocation!==null){
        this._destinationLatitude=destinationLocation["lattitude"];
        this._destinationLongitude=destinationLocation["longitude"];
        this._destinationAddress=destinationLocation["address"];
      }else{
        debugger;
      }
    },
    /**
     * @function
     *
     * @param position 
     */
    watchPositionSuccess:function(position){
      debugger;
      if(typeof position==='object' && position!==null){
        /*var geoPosition = "Latitude: " + position.coords.latitude;
        geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
        geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
        geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
        geoPosition = geoPosition + " Altitude Accuracy: " + position.coords.altitudeAccuracy;
        geoPosition = geoPosition + " Heading: " + position.coords.heading;
        geoPosition = geoPosition + " Speeding: " + position.coords.speeding;
        geoPosition = geoPosition + " Timestamp: " + position.timestamp;*/
        var coords=position["coords"];
        if(typeof coords=='object' && coords!==null){
          var deviceLocation ={};
          deviceLocation["lat"]= "" + coords.latitude;
          deviceLocation["lon"]= "" + coords.longitude;
          var destinationLocation;
          if(this._destinationLatitude===null || this._destinationLongitude===null){
            destinationLocation=null;
          }else{
            destinationLocation={};
            destinationLocation["lattitude"]= this._destinationLatitude;
            destinationLocation["longitude"]= this._destinationLongitude;
            destinationLocation["address"]=this._destinationAddress;
          }
          var inProximity=this.isInProximity(this._proximity , deviceLocation, destinationLocation);
          var locationObject={};
          
          if(inProximity===true){
            //trigger in proximity callback.
            if(typeof this.inProximityCallback=='function'){
              this.inProximityCallback(deviceLocation,destinationLocation);
            }
          }else{
            //trigger out of proximity callback.
            if(typeof this.outSideProximityCallback=='function'){
              this.outSideProximityCallback(deviceLocation,destinationLocation);
            }
          }
        }
      }
    },
    /**
     * @function
     *
     */
    isInProximity:function(proximity,sourceLocation,destinationLocation){
      var inProximity=false;
      if(typeof sourceLocation=='object' && sourceLocation!==null && 
         typeof destinationLocation=='object'&& destinationLocation!==null && 
         typeof proximity=='number'){
        try{
          //var distanceInMeters = kony.map.distanceBetween(sourceLocation, destinationLocation);
          //var distanceInMeter=this.findDistanceInMiles(sourceLocation, destinationLocation)*1609;
          var distanceInMiles=this.findDistanceInMiles(sourceLocation, destinationLocation);
          if (distanceInMiles > proximity) {
            if(inProximity===true){
              this.view.flxPopOverShade.setVisibility(true);
            }
            inProximity=false;
          }else{
            inProximity=true;
            this.view.flxPopOverShade.setVisibility(false);
          }
        }catch(excp){
          debugger;
        }
      }else {
        inProximity=false;
      }
      return inProximity;
    },
    /**
     * @function
     *
     * @param positionerror 
     */
    watchPositionFailureCB:function(positionerror){
      debugger;
      if(typeof positionerror=='object' && positionerror!==null ){
        var errorMesg = "Error code: " + positionerror.code;
        errorMesg = errorMesg + " message: " + positionerror.message;
        kony.print("Error occured for watch position: "+errorMesg);
      }
    },
    /**
     * @function
     *
     */
    onComponentPostShow:function(){
      return;
      this.startLocationMonitoring();
    },
    /**
     * @function
     *
     */
    startLocationMonitoring:function(){
      debugger;
      var positionoptions={};
      positionoptions.enableHighAccuracy=this._enableHighAccuracy;
      positionoptions.timeout=this._timeOut;
      positionoptions.maximumAge=this._maximumCachedAge;
      positionoptions.minimumTime=this._minimumTime;
      positionoptions.minimumDistance=this._minimumDistance;
      //watchFlag = true;
      var watchID=null;
      try
      {
        watchID = kony.location.watchPosition (this.watchPositionSuccess.bind(this),this.watchPositionFailureCB.bind(this), positionoptions);
        this._watchId=watchID;
      }catch(excp){
        debugger;
        //alert(err.message);
      }
    },
    /**
     * @function
     *
     */
    onForcedCheckin:function(){
      this.view.flxPopOverShade.setVisibility(false);
      if(typeof this.forcedCheckinCallback=='function'){
        this.forcedCheckinCallback();
      }
    },
    /**
     * @function
     *
     */
    onLocationNavigate:function(){
      if(typeof this.onMapNavigate=='function'){
        this.onMapNavigate();
      }
    },
    /**
     * @function
     *
     */
    stopMonitoring:function(){
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
    showNavigationMessage:function(){
      this.view.flxPopOverShade.setVisibility(true);
    },
    /**
     * @function
     *
     */
    hideNavigationMessage:function(){
      this.view.flxPopOverShade.setVisibility(false);
    },
    /**
     * @function
     *
     */
    clearWatch:function(){
      debugger;
      if(typeof this._watchId=='number'){
        try{
          this._destinationLatitude=null;
          this._destinationLongitude=null;
          kony.location.clearWatch(this._watchId);
          this._watchId=null;
          this.hideNavigationMessage();
        }catch(excp){
          debugger;
          kony.print("Exception occured while cearing the watch: "+JSON.stringify(excp));
        }
      }
    },
    /**
       * @function
       *
       * @param sourceLocation 
       * @param destinationLocation 
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
  };
});