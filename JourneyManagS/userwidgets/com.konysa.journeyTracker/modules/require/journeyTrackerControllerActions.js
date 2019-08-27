define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for flxImage **/
    AS_FlexContainer_ad8b1bff9a7a45df84e898e7f9b201c5: function AS_FlexContainer_ad8b1bff9a7a45df84e898e7f9b201c5(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmEmergencyRequest");
        ntf.navigate();
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
    /** postShow defined for journeyTracker **/
    AS_FlexContainer_h5d3b7fa804547dd8e8e340e8a1307eb: function AS_FlexContainer_h5d3b7fa804547dd8e8e340e8a1307eb(eventobject) {
        var self = this;
        return self.setNetworkStatus.call(this);
    },
    /** onDestroy defined for journeyTracker **/
    AS_FlexContainer_j9f62e0a77d441938ef418b42516bcaa: function AS_FlexContainer_j9f62e0a77d441938ef418b42516bcaa(eventobject) {
        var self = this;
        this.clearWatch();
    },
    /** onHide defined for journeyTracker **/
    AS_FlexContainer_b4e83feab808489dbf2e40a410926e3b: function AS_FlexContainer_b4e83feab808489dbf2e40a410926e3b(eventobject) {
        var self = this;
        this.clearWatch();
    }
});