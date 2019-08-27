//Type your code here
var DefaultUserConstraint ={
  "LanguageID":1,
  "RegionID":1,
  "CountryID":1,
  "GroupID":1
};
var GlobalDateToSetToDatePickerDeparture = "";
var GlobalDateToSetToDatePickerArrival = "";
var GlobalTimeToSetToTimePickerDeparture = "";
var GlobalTimeToSetToTimePickerArrival = "";

var ExplorationPointsObjectService=[];

var JConstant=(function(){
  return{
    "GOOGLE_API_KEY":"AIzaSyBeIDNhaa-u8IZcdqkNub-N648OCzb9QH4",
    //"OFFLINE_OBJECT_SERVICE":"JouObjSvcOffline",
    "IS_PUSH_SUBSCRIBED":"is_push_subscribed",
    "SENDER_ID":"430084202746",
    "IDENTITY_SERVICE":"InspCustomLogin",
    "OFFLINE_OBJECT_SERVICE":"JourneyObSrvc",
    
    "PROXIMITY_DISTANCE_IN_MILES":1,
    "PLACE_INTG_SERVICE":{
      "NAME":"PlaceAutocomplete",
      "OPERATION":"getPlace"
    },
    "PLACE_GEOMETRY_INTG_SERVICE":{
      "NAME":"PlaceDetail",
      "OPERATION":"getDetail"
    },
    "REVERSE_GEO_INTG_SERVICE":{
      "NAME":"ReverseGeoCode",
      "OPERATION":"getAddress"
    },
    "DISTANCE_MATRIX_INTG_SERVICE":{
      "NAME":"DistanceMatrix",
      "OPERATION":"getDistanceAndTime"
    },
    "PUSH_ORCH_SERVICE":{
      "NAME":"fmgOrchSvcForPush",
      "OPERATION":"notifyAdminUsers"
    },
    "NOTIFICATION_TITLE":"Journey manage",
    "NOTIFICATION_MESSAGE":"Time to Check-In"
  };
})();
var JourneyUtils={
  "MAP_KEY":"AIzaSyBeIDNhaa-u8IZcdqkNub-N648OCzb9QH4"
};
var PROGRESS_STATUS={
  "DEPARTURE_ADDRESS":0,
  "DEPARTURE_DATE":1,
  "DEPARTUE_TIME":2,
  "ARRAIVAL_ADDRESS":3,
  "ARRAIVAL_DATE":4,
  "ARRAIVAL_TIME":5,
};

var ObjectServiceName = "JouObjSvcOffline";
//var IdentityServiceName = "InspCustomLogin";
var TYPEOFOBJECTSERVICE = 'offline';
var OptionalCheckinDuration = 1;