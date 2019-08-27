define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._mapKey="";
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      debugger;
      defineGetter(this, "mapKey", function() {
        return this._mapKey;
      });
      defineSetter(this, "mapKey", function(val) {
        this._mapKey = val;
      });
    },
    onPreShow:function(){
      kony.print("in MAP pre Show");
      if(typeof this._mapKey=='string' && this._mapKey.length>0){
        this.view.mapJourney.mapKey=this._mapKey;
        this.view.mapJourney.mode =constants.MAP_VIEW_MODE_SATELLITE;
        //this.view.mapJourney.zoomLevel=6;
       // alert("map ::"+this.view.mapJourney.zoomLevel);
        this.view.mapJourney.showZoomControl=true;
       this.view.mapJourney.defaultPinImage="";
      this.view.mapJourney.widgetDataMapForCallout = 
  {
  "lblDriverName" : "driverName",
  "lblLastKnownLocation" : "LastKnownLocation",
  "lblTime" : "LastCheckPointTime",
  "lblJourneyStatus" : "journeyStatus",
    "imgSelector":"imgSelector",
  "lblLastKonwnLocationTitle":"lblLastKonwnLocationTitle",
  "lblETA":"lblETA",
   "lblJourneyId":"journey_id"
  
 };
        var pin1 = {
      id : "id123", // id is mandatory for every pin
      lat : "-21.592100",
      lon : "121.523700",
      name : "",
      //image : "",
      //focusImage:"",  //focus image will be shown while map pin selected
      showCallout : false,
          //zoomLevel :1
      meta: {
        color: "green",
        label: "A"
      }
    }
    this.setPin(pin1);    
        //this.view.mapJourney.navigateToLocation(pin1, false, false);
      }
    },
    setPin:function(locationObj){
      try{
        if(typeof locationObj=='object' && locationObj!==null){
          this.view.mapJourney.addPin(locationObj);
        }
      }catch(excp){
        debugger;
      }
    },
    //
    deleteAllPins:function(locationJsonArray){
      try{
        if(locationJsonArray!==null && locationJsonArray.length!=0){
          this.view.mapJourney.removePins(locationJsonArray);
        }
      }catch(excp){
        debugger;
      }
    },
    drawPolyline : function(polylineData)
    {
      kony.print("polylineData"+JSON.stringify(polylineData));
      //this.view.mapJourney.clear();
      
      this.view.mapJourney.navigateToLocation(polylineData["startLocation"], true, true);
       this.view.mapJourney.addPolyline(polylineData);
    
   },
    
    deletePolyline : function(polylineId)
    {
      kony.print("polyline id ::"+polylineId);
      this.view.mapJourney.removePolyline(polylineId);
      
    },
    setZoomLevelOnMap : function()
    {
      //this.view.mapJourney.zoomLevel=1;
    }
  };
});