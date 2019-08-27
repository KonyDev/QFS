define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segIsolationProcedure **/
    AS_Segment_b28c5f175a3b42c58f16d948c9a51c20: function AS_Segment_b28c5f175a3b42c58f16d948c9a51c20(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSegRowClick();
    },
    /** onClick defined for btnDone **/
    AS_Button_b2eb16112ab2438f898262aadbff4fa9: function AS_Button_b2eb16112ab2438f898262aadbff4fa9(eventobject) {
        var self = this;
        this.onDoneStep3();
    },
    /** onClickMenu defined for headerWithMenu **/
    AS_UWI_he11aa2408024ec68db5553e9f41d722: function AS_UWI_he11aa2408024ec68db5553e9f41d722(eventobject) {
        var self = this;
        this.openHam();
    },
    /** onClickCheck defined for CheckMarkAsDone **/
    AS_UWI_aad9551608564db082eba2a32b19a74e: function AS_UWI_aad9551608564db082eba2a32b19a74e(eventobject) {
        var self = this;
        this.clickCheckBox();
    },
    /** onClick defined for btnDoneIsolationProcedure **/
    AS_Button_abb1ea81923b4cb79ab532d328307d10: function AS_Button_abb1ea81923b4cb79ab532d328307d10(eventobject) {
        var self = this;
        this.onDoneIsolationProcedure();
    },
    /** onClickLeft defined for headerIsolationProcedure **/
    AS_UWI_b4bdf4dad4ae49368739655959c757ba: function AS_UWI_b4bdf4dad4ae49368739655959c757ba(eventobject) {
        var self = this;
        this.closeIsolationProcedure();
    },
    /** onClickCheck defined for CheckApplyLock **/
    AS_UWI_d05e1774b93f42aa9f5da518bd667ea9: function AS_UWI_d05e1774b93f42aa9f5da518bd667ea9(eventobject) {
        var self = this;
        this.onClickApplyLock();
    },
    /** onClickCheck defined for CheckApplyTag **/
    AS_UWI_e1b88eb4907e4c548b301bf32c29e4d0: function AS_UWI_e1b88eb4907e4c548b301bf32c29e4d0(eventobject) {
        var self = this;
        this.onClickApplyTag();
    },
    /** onClickCheck defined for CheckTestDevices **/
    AS_UWI_f7cf8c920c1e4f95945d35ec1171f541: function AS_UWI_f7cf8c920c1e4f95945d35ec1171f541(eventobject) {
        var self = this;
        this.onClickTestDevices();
    },
    /** onClickCheck defined for CheckReviewTag **/
    AS_UWI_e41903c3bff349bbb6483aca42919c10: function AS_UWI_e41903c3bff349bbb6483aca42919c10(eventobject) {
        var self = this;
        this.onClickReview();
    },
    /** onTextChange defined for tbxBarcode **/
    AS_TextField_g790c9d14d1d4c88a4051e905748f2e6: function AS_TextField_g790c9d14d1d4c88a4051e905748f2e6(eventobject, changedtext) {
        var self = this;
        this.checkCompletionOfTask();
    },
    /** onClick defined for btnDoneProcedure **/
    AS_Button_c410699f80eb4a3fa6bd12b4beffa728: function AS_Button_c410699f80eb4a3fa6bd12b4beffa728(eventobject) {
        var self = this;
        this.onDoneProcedure();
    },
    /** onClickLeft defined for headerProcedure **/
    AS_UWI_fb70a6b75b484347ad1ca58b243d8c19: function AS_UWI_fb70a6b75b484347ad1ca58b243d8c19(eventobject) {
        var self = this;
        this.closeProcedure();
    },
    /** onClickBlurMenu defined for menuDFX **/
    AS_UWI_g00b105ef44b4b7eabb6b5be14affc41: function AS_UWI_g00b105ef44b4b7eabb6b5be14affc41(eventobject) {
        var self = this;
        this.closeHam();
    },
    /** preShow defined for frmLockoutS2 **/
    AS_Form_ed1d0ca5b0b841088157b700b2b4ce6a: function AS_Form_ed1d0ca5b0b841088157b700b2b4ce6a(eventobject) {
        var self = this;
        this.preshow();
    }
});