define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxJourneyDetails **/
    AS_FlexContainer_bd3f6b94e5604723a5c83c83eb860b3c: function AS_FlexContainer_bd3f6b94e5604723a5c83c83eb860b3c(eventobject) {
        var self = this;
        this.RouteDetailsOnClickEvent();
    },
    /** onClick defined for flxDepartureDetails **/
    AS_FlexContainer_f9c8b67152794f53954fb73132bc4703: function AS_FlexContainer_f9c8b67152794f53954fb73132bc4703(eventobject) {
        var self = this;
        alert("Clicked");
    },
    /** onClick defined for flxCrewInfo **/
    AS_FlexContainer_g08391ec9a39414bb8d7fbfad01a94e8: function AS_FlexContainer_g08391ec9a39414bb8d7fbfad01a94e8(eventobject) {
        var self = this;
        this.onDriverPassengerClick();
    },
    /** onClick defined for flxTrackingPointDetails **/
    AS_FlexContainer_b39f9ddcd7f14202ba6bf1df09e56288: function AS_FlexContainer_b39f9ddcd7f14202ba6bf1df09e56288(eventobject) {
        var self = this;
        this.TrackingDetailsOnClickEvent();
    },
    /** onClick defined for flxVehicleDetails **/
    AS_FlexContainer_g4551483d5174c7e940e8751a34aee77: function AS_FlexContainer_g4551483d5174c7e940e8751a34aee77(eventobject) {
        var self = this;
        this.VehicleDetailsOnClickEvent();
    },
    /** onClick defined for btnSubmit **/
    AS_Button_a2abdbd393d64dc3b64a9774f65faa76: function AS_Button_a2abdbd393d64dc3b64a9774f65faa76(eventobject) {
        var self = this;
    },
    /** onTouchEnd defined for btnSubmit **/
    AS_Button_f19c66bad10f410db4d07f2ea9f81c47: function AS_Button_f19c66bad10f410db4d07f2ea9f81c47(eventobject, x, y) {
        var self = this;
        this.UpdateJourneyWithDetails();
    }
});