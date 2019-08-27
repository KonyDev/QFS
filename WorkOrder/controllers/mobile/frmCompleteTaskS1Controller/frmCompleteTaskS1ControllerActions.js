define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_c62d4e0ddafd4002b521f5ac562c05b6: function AS_FlexContainer_c62d4e0ddafd4002b521f5ac562c05b6(eventobject) {
        var self = this;
        return self.openHam.call(this);
    },
    /** onClick defined for flxNotes **/
    AS_FlexContainer_e28a4168d8cb45eeaaeb9826d8789429: function AS_FlexContainer_e28a4168d8cb45eeaaeb9826d8789429(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDocuments");
        ntf.navigate();
    },
    /** onClickNo defined for togglebuttons **/
    AS_UWI_c4d4eed33dfd40cabf52bc088fb1a776: function AS_UWI_c4d4eed33dfd40cabf52bc088fb1a776(eventobject) {
        var self = this;
        return self.onClickToggleButton.call(this, 0);
    },
    /** onClickYes defined for togglebuttons **/
    AS_UWI_dbb42088880e4ba9917ad28571d3169a: function AS_UWI_dbb42088880e4ba9917ad28571d3169a(eventobject) {
        var self = this;
        return self.onClickToggleButton.call(this, 1);
    },
    /** onClick defined for btnCompleteTask **/
    AS_Button_i2e40cb82e3c41e2bd9d9b8bb0b6f544: function AS_Button_i2e40cb82e3c41e2bd9d9b8bb0b6f544(eventobject) {
        var self = this;
        return self.completeS1.call(this);
    },
    /** onClick defined for btnReAssign **/
    AS_Button_be262702eff749c2bf36b61a46b3666f: function AS_Button_be262702eff749c2bf36b61a46b3666f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmTaskReAssign");
        ntf.navigate();
    },
    /** onClickBlurMenu defined for menuDFX **/
    AS_UWI_bc1b2e45daa04bcabdd34c4f69b73055: function AS_UWI_bc1b2e45daa04bcabdd34c4f69b73055(eventobject) {
        var self = this;
        return self.closeHam.call(this);
    }
});