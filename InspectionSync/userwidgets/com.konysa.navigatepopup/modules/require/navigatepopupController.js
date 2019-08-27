define(function () {

  return {
    constructor: function (baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function () {

    },
      show: function (text) {
      if (kony.sdk.isNullOrUndefined(text)) {
        text = "";
      }
      this.view.CopyLabel0gb63023645da4f.text = text;
      this.view.isVisible = true;
    },
    hide: function () {
      this.view.isVisible = false;
    },
    successcallback1: function (position) {
      var geoPosition = "Latitude: " + position.coords.latitude;
      geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
      geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
      geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
      geoPosition = geoPosition + " Altitude Accuracy: " + position.coords.altitudeAccuracy;
      geoPosition = geoPosition + " Heading: " + position.coords.heading;
      geoPosition = geoPosition + " Speeding: " + position.coords.speeding;
      geoPosition = geoPosition + " Timestamp: " + position.timestamp;
//       alert(geoPosition);
      var Address = kony.store.getItem("Address");
      var Latitude = kony.store.getItem("Latitude");
      var Longitude = kony.store.getItem("Longitude");
      var Proximity = kony.store.getItem("Proximity");
      location1 = {
        lat: "" + position.coords.latitude,
        lon: "" + position.coords.longitude
      };

      location2 = {
        lat: Latitude,
        lon: Longitude
      };
      //Check if the values are getting stored at backend
      if (location2.lat === null || location2.lat === undefined) {
        new kony.ui.Toast({
          "text": "Destination Location Not Defined.",
          "duration": constants.TOAST_LENGTH_SHORT
        }).show();
        return;
      }
      var distanceInMeters = kony.map.distanceBetween(location1, location2);
      //Check if user is outside proximity
      //If yes then prompt user to navigate back to the Customer Location.
      if (distanceInMeters > Proximity) {
        //If outside the proximity 
        //hide the visibility of the Popup Flex
        this.view.flxPopup.isVisible = true;
        new kony.ui.Toast({
          "text": "Inside Proximity",
          "duration": constants.TOAST_LENGTH_SHORT
        }).show();
      } else {
        //Raise the Popup
        //If Outside the proximity
        this.view.flxPopup.isVisible = false;
        new kony.ui.Toast({
          "text": "Outside Proximity",
          "duration": constants.TOAST_LENGTH_SHORT
        }).show();
      }
    },
    errorcallback1: function (positionerror) {
      var errorMesg = "Error code: " + positionerror.code;
      errorMesg = errorMesg + " message: " + positionerror.message;
//       alert(errorMesg);
    },
    checkLocation: function () {
      var positionoptions = {
        minimumTime: 20000
      };
      watchID = kony.location.watchPosition(this.successcallback1, this.errorcallback1, positionoptions);
    },
    /**
     * @function
     *
     */
    setLocation:function(param){
      if(typeof param=='string'){
        this.view.lblLocationVal.text=param;
      }
    }

  };
});