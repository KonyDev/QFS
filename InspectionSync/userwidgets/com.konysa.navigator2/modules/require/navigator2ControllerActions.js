define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnCallRepresentative **/
    AS_Button_e737a50324f6433eb5ebe394e03b2cbe: function AS_Button_e737a50324f6433eb5ebe394e03b2cbe(eventobject) {
        var self = this;
        this.onClickCallNumber();
    },
    /** onClick defined for btnForcedCheckin **/
    AS_Button_e290db7a398e4fc19aec0eee241dcaf6: function AS_Button_e290db7a398e4fc19aec0eee241dcaf6(eventobject) {
        var self = this;
        this.showConfirmationPopup();
        //this.onClickForcedCheckIn();
    },
    /** onClick defined for flxAlertAction **/
    AS_FlexContainer_dd1efb37746e4809a7fc5b7adcda92db: function AS_FlexContainer_dd1efb37746e4809a7fc5b7adcda92db(eventobject) {
        var self = this;
    },
    /** onClick defined for btnAgree **/
    AS_Button_eeccb9b01cf044b28c9c4c9c0ae922c9: function AS_Button_eeccb9b01cf044b28c9c4c9c0ae922c9(eventobject) {
        var self = this;
        this.onClickForcedCheckIn();
    },
    /** onClick defined for flxPopOverShade **/
    AS_FlexContainer_df9fb4a19964470aaf9db199d8ab91ef: function AS_FlexContainer_df9fb4a19964470aaf9db199d8ab91ef(eventobject) {
        var self = this;
        this.hideConfirmationPopup();
    },
    /** preShow defined for navigator2 **/
    AS_FlexContainer_bfd4153e41884f519a6d99bd12f28c80: function AS_FlexContainer_bfd4153e41884f519a6d99bd12f28c80(eventobject) {
        var self = this;
        this.hideConfirmationPopup();
        this.resetComponent();
    },
    /** onDestroy defined for navigator2 **/
    AS_FlexContainer_aed2b09896154787b875175bee8aa2fe: function AS_FlexContainer_aed2b09896154787b875175bee8aa2fe(eventobject) {
        var self = this;
        this.clearWatch();
    },
    /** onHide defined for navigator2 **/
    AS_FlexContainer_d1d2e31353574c538f4186e1ae0c2269: function AS_FlexContainer_d1d2e31353574c538f4186e1ae0c2269(eventobject) {
        var self = this;
        this.clearWatch();
        //this.view.mapNavigator.
    }
});