define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_b3b1f5a6694343b8bb19c6242164fa0f: function AS_FlexContainer_b3b1f5a6694343b8bb19c6242164fa0f(eventobject) {
        var self = this;
        return self.openHam.call(this);
    },
    /** onClick defined for btnCompleteTask **/
    AS_Button_ccadc10077b54864a3588c02260877ee: function AS_Button_ccadc10077b54864a3588c02260877ee(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmWorkOrderComplete");
        ntf.navigate();
    },
    /** onClickBlurMenu defined for menuDFX **/
    AS_UWI_f357bdb8ca704ba982dabc621ff71a95: function AS_UWI_f357bdb8ca704ba982dabc621ff71a95(eventobject) {
        var self = this;
        return self.closeHam.call(this);
    }
});