define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxImage **/
    AS_FlexContainer_ff9bb85b67d04d2997937565f5db86f5: function AS_FlexContainer_ff9bb85b67d04d2997937565f5db86f5(eventobject) {
        var self = this;
        this.onSOSTrigger();
    },
    /** onClick defined for flxSubmitJourney **/
    AS_FlexContainer_b7fc30e40ab7490ab055f41410da9109: function AS_FlexContainer_b7fc30e40ab7490ab055f41410da9109(eventobject) {
        var self = this;
        this.onSubmitJourney();
    },
    /** onClick defined for flxSupervisor **/
    AS_FlexContainer_c0b3c4099c234713b1455ae9909bf16a: function AS_FlexContainer_c0b3c4099c234713b1455ae9909bf16a(eventobject) {
        var self = this;
        return self.dialSupervisor.call(this);
    },
    /** onClick defined for flxTrackingPoint **/
    AS_FlexContainer_f394252cb2dd4180afab9e2f7585d425: function AS_FlexContainer_f394252cb2dd4180afab9e2f7585d425(eventobject) {
        var self = this;
        return self.dialTrackingPoint.call(this);
    },
    /** OnCheckIn defined for regularCheckIn **/
    AS_UWI_ac37f80ea44a4005b87c2c9a2458a8ec: function AS_UWI_ac37f80ea44a4005b87c2c9a2458a8ec(checkInSequenceNumber, checkInSuccessCallBack, checkInFailureCallback) {
        var self = this;
    },
    /** dismissAlert defined for noNetworkPopup **/
    AS_UWI_a5b209fcbed54e19a70974057747fae2: function AS_UWI_a5b209fcbed54e19a70974057747fae2(eventobject) {
        var self = this;
    }
});