define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_g595eab50c954185b5c0ad6fd67a3480: function AS_FlexContainer_g595eab50c954185b5c0ad6fd67a3480(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyVehicle");
        ntf.navigate();
    },
    /** onClick defined for CopyFlexContainer0f7f4b5024bcc44 **/
    AS_FlexContainer_f4aef4cc9cd04480a03dc6646b7934bb: function AS_FlexContainer_f4aef4cc9cd04480a03dc6646b7934bb(eventobject) {
        var self = this;
        if (this.view.flxCheckBox.isVisible == true) {
            this.view.flxCheckBox.isVisible = false;
        } else {
            this.view.flxCheckBox.isVisible = true;
        }
    },
    /** onClick defined for btnCreateJourney **/
    AS_Button_iee5a48458a34547aeacbed73ebc6aba: function AS_Button_iee5a48458a34547aeacbed73ebc6aba(eventobject) {
        var self = this;
    },
    /** postShow defined for frmNewJourneyVerification **/
    AS_Form_ea0775c3f2f14360b60ad7116492dfc0: function AS_Form_ea0775c3f2f14360b60ad7116492dfc0(eventobject) {
        var self = this;
        this.onFormPostshow();
        // this.view.flxTracker.shadowDepth = 6;
        // this.view.flxTracker.shadowType = constants.VIEW_BOUNDS_SHADOW;
    }
});