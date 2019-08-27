define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_dd23977cf3c34e0d8af7d2a1600c3c65: function AS_FlexContainer_dd23977cf3c34e0d8af7d2a1600c3c65(eventobject) {
        var self = this;
        return self.openHam.call(this);
    },
    /** onClick defined for btnSubmit **/
    AS_Button_c85601c652484e4fa3b7a77625672e47: function AS_Button_c85601c652484e4fa3b7a77625672e47(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmInspectionsList");
        ntf.navigate();
    },
    /** onClickBlurMenu defined for menuDFX **/
    AS_UWI_a7bfc0fc7b8a41498be4048ab7d03ed8: function AS_UWI_a7bfc0fc7b8a41498be4048ab7d03ed8(eventobject) {
        var self = this;
        return self.closeHam.call(this);
    }
});