define({ 
  isTimerRunning:false,
  onNavigate:function(){
    this.view.flexCheckedInSuccess.isVisible = false;
    this.isTimerRunning=false;
  },
  locationMap : {
    dest:{
      lat:35.0765676,lon:-90.0212331,name:"D",desc:"2519 Elvis Presley Blvd, Memphis, TN 38106, USA",image:"map_icon.png"},
    source:{
      lat:35.092196,lon:-90.010186,name:"S",desc:"Thompson Courts, 1875 Keltner Cir, Memphis, TN 38114, USA",image:"trackerdot.png"},
    pinA:{
      lat:35.078009,lon:-90.010873,image:"trackerdot.png"},
    pinB:{
      lat:35.078044,lon:-90.019499,image:"trackerdot.png"}
  },
  flagTemp:"",
  flagSource : "",
  
  showRouteSourceDest:function(){
    this.view.btnCheckIn.skin = "skinDeActive";
    this.view.btnCheckIn.focusSkin = "skinDeActive";
    this.view.btnForcedCheckIn.isVisible = true;
    this.showRouteFromLocation("source");
  },
  
  startGPS:function(){
    if(this.isTimerRunning == false){
      this.isTimerRunning = true;
      this.flagSource = "source";
      kony.timer.schedule("myTimer", this.timerFunc, 1, true);
    }
    
  },
  timerFunc(){
    this.showRouteFromLocation(this.flagSource);
    
    if(this.flagSource == "source"){
      this.flagSource = "pinA";
    }else if(this.flagSource == "pinA"){
      this.flagSource = "pinB";
    }else if(this.flagSource == "pinB"){
      this.isTimerRunning = false;
      kony.timer.cancel("myTimer")
      this.flagSource = "source";
    }
  },
  
  showRouteFromLocation:function(getPin){
    this.flagTemp = getPin;
    var locationData = [];
    locationData.push(this.locationMap.dest);
    switch(getPin){
      case "source":
        locationData.push(this.locationMap.source);
        break;
      case "pinA":
        locationData.push(this.locationMap.pinA);
        break;
      case "pinB":
        locationData.push(this.locationMap.pinB);
    }
    this.callSearchRoutefunc(locationData[1]);
  },
  
  callSearchRoutefunc:function(sourceOrigin){
    var searchCriteriaObj = {
      alternatives : true, 
      directionServiceUrl : "https://maps.googleapis.com/maps/api/directions/json",
      destination : this.locationMap.dest,
      origin : sourceOrigin , 
      transportMode : "driving",
      apiKey:"AIzaSyBxz_lS49jNEpML6LiwXTbKQRPsTSS8HZM"
    };
    kony.map.searchRoutes(searchCriteriaObj, this.searchRouteSuccesCallback, this.errorRouteSuccesCallback);  
  },
  errorRouteSuccesCallback:function(errorCode,errorMessage){
    alert(errorCode+"   "+errorMessage);
  },
  searchRouteSuccesCallback:function(routes){
    this.displySearchRoutes(routes);
  },
  displySearchRoutes:function(Searchroutes){
    routeColors = ["0000FFFF","FF00FFFF","FF0000FF","FFFF00FF","0x000000FF"];
    this.drawRoute("route"+0, Searchroutes[0].polylinePoints, routeColors[0]);
  },
  drawRoute:function(routeid,polyPoints,color){
    var steps = polyPoints;
    kony.print("################The polyline points");
    kony.print(steps);
    ei = steps.length-1;

    var startLoc = {
        lat:steps[0].lat,
        lon:steps[0].lon,
        image:{source:"trackingarrow.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}
    };

    var endLoc = {
        lat:steps[ei].lat,
        lon:steps[ei].lon,
        image:{source:"map_icon.png",anchor:kony.map.PIN_IMG_ANCHOR_CENTER}
    };

    polylineData = {
        id : routeid,
        locations : steps,
        startLocation : startLoc,
        endLocation : endLoc,
        polylineConfig : {lineWidth : 5, lineColor: color}
    };
    this.view.mapCheckIn.addPolyline(polylineData);
    var dist = kony.map.distanceBetween(endLoc, startLoc);
    this.view.lblDistance.text = (dist/1000).toFixed(2)+" Miles Away";
    this.showCheckIn(dist);
  },
  showCheckIn:function(dist){
    if(dist <300){
      this.view.btnCheckIn.skin = "skinActive";
      this.view.btnCheckIn.focusSkin = "skinActive";
      this.view.btnForcedCheckIn.isVisible = true;
      this.view.lblTime.text = "0 Min"
    }else{
      this.view.btnCheckIn.skin = "skinDeActive";
      this.view.btnCheckIn.focusSkin = "skinDeActive";
      this.view.btnForcedCheckIn.isVisible = true;
      this.view.lblTime.text = (dist/300).toFixed(0)+" Min"
    }
  },
  checkIn:function(){
    if(this.view.btnCheckIn.skin == "skinActive")
      this.view.flexCheckedInSuccess.isVisible = true;
  },
  navToForm:function(frmName){
    var navForm = new kony.mvc.Navigation(frmName);
    navForm.navigate();
  }


 //Type your controller code here 

 });