define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      setEmergencyDetails : function(dataObject)
      {
       kony.print("set Emergency Details "+dataObject["incident_type"]);
      this.view.lblEmergengyTypeVal.text=dataObject["incident_type"];//journeydetailsObject
     // this.view.lblAsstRequiredVal.text=incidentDetails[""];
      }
	};
});