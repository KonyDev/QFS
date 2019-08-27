define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_eb0574e77df14d59b228ace5bfdb96be: function AS_FlexContainer_eb0574e77df14d59b228ace5bfdb96be(eventobject) {
        var self = this;
        return self.openHam.call(this);
    },
    /** onClick defined for flxNotes **/
    AS_FlexContainer_b4da34d96660471a8ef2e541ef9cf158: function AS_FlexContainer_b4da34d96660471a8ef2e541ef9cf158(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmDocuments");
        ntf.navigate();
    },
    /** onClick defined for flexDownArrow **/
    AS_FlexContainer_gac0f6ca85ba441d9b840fc023c19687: function AS_FlexContainer_gac0f6ca85ba441d9b840fc023c19687(eventobject) {
        var self = this;
        return self.show_TaskDetails.call(this);
    },
    /** onTouchEnd defined for imgEdit **/
    AS_Image_ife2ea90f93f4dd5bff3b582f1498d76: function AS_Image_ife2ea90f93f4dd5bff3b582f1498d76(eventobject, x, y) {
        var self = this;
        return self.show_editableScreen.call(this);
    },
    /** onClick defined for flxDropdown **/
    AS_FlexContainer_fce0fa51aeff422a97f0191cdce249ea: function AS_FlexContainer_fce0fa51aeff422a97f0191cdce249ea(eventobject) {
        var self = this;
        return self.show_Asset.call(this);
    },
    /** onClick defined for btnCompleteTask **/
    AS_Button_h13e5c0cf9524ad7b04f0cb2ed171380: function AS_Button_h13e5c0cf9524ad7b04f0cb2ed171380(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCompleteTaskS3");
        ntf.navigate();
    },
    /** onClick defined for btnReAssign **/
    AS_Button_be9d2061681c43c784889e28b76c0b95: function AS_Button_be9d2061681c43c784889e28b76c0b95(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmTaskReAssign");
        ntf.navigate();
    },
    /** onClick defined for btnCancel **/
    AS_Button_b458a0345daa44159a49fa643e07a5e0: function AS_Button_b458a0345daa44159a49fa643e07a5e0(eventobject) {
        var self = this;
        return self.frm_preshow.call(this);
    },
    /** onClickBlurMenu defined for menuDFX **/
    AS_UWI_bcea9bfc66de49749d6c2f82c80cf150: function AS_UWI_bcea9bfc66de49749d6c2f82c80cf150(eventobject) {
        var self = this;
        return self.closeHam.call(this);
    },
    /** preShow defined for frmCompleteTaskS2 **/
    AS_Form_ef2f01bf43db44e7808f7bd1feecaf65: function AS_Form_ef2f01bf43db44e7808f7bd1feecaf65(eventobject) {
        var self = this;
        return self.frm_preshow.call(this);
    }
});