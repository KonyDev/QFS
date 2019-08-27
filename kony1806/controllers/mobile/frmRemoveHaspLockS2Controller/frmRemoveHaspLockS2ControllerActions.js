define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickMenu defined for headerDFX **/
    AS_UWI_dc13f3d40db34e37a00220c59e09a1c7: function AS_UWI_dc13f3d40db34e37a00220c59e09a1c7(eventobject) {
        var self = this;
        this.openHam();
    },
    /** onClickMenu defined for headerPendingUnlockS2 **/
    AS_UWI_a83ed26395f540cc8ec1854ab2dd5e60: function AS_UWI_a83ed26395f540cc8ec1854ab2dd5e60(eventobject) {
        var self = this;
        this.openHam();
    },
    /** onClickCheck defined for CheckRemoveLock **/
    AS_UWI_a12285e7bad04f10bba51ef2e489987c: function AS_UWI_a12285e7bad04f10bba51ef2e489987c(eventobject) {
        var self = this;
        this.removeLock();
    },
    /** onClickCheck defined for CheckRemoveTag **/
    AS_UWI_caf1fea07b40491ca3ae542aaa2e4c46: function AS_UWI_caf1fea07b40491ca3ae542aaa2e4c46(eventobject) {
        var self = this;
        this.removeTag()
    },
    /** onClickCheck defined for CheckReviewTag **/
    AS_UWI_d91d48b0ee704606b136bb91efcd05f6: function AS_UWI_d91d48b0ee704606b136bb91efcd05f6(eventobject) {
        var self = this;
        this.reviewTag();
    },
    /** onClickLeft defined for headerProcedure **/
    AS_UWI_ae75ee5009da40c59a497a1f306f2603: function AS_UWI_ae75ee5009da40c59a497a1f306f2603(eventobject) {
        var self = this;
        this.closeProcedure();
    },
    /** onClickBlurMenu defined for menuDFX **/
    AS_UWI_d68cb178610a4dbdbba5ac7aeeb586b2: function AS_UWI_d68cb178610a4dbdbba5ac7aeeb586b2(eventobject) {
        var self = this;
        this.closeHam();
    },
    /** onRowClick defined for segIsolationProcedure **/
    AS_Segment_ff1ba4fa7b8f4f5db097971e0219d9fc: function AS_Segment_ff1ba4fa7b8f4f5db097971e0219d9fc(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSegRowClick();
    },
    /** onClick defined for btnDone **/
    AS_Button_e1548a075b1e4182b4b47db8e3f74f0c: function AS_Button_e1548a075b1e4182b4b47db8e3f74f0c(eventobject) {
        var self = this;
        this.onDone();
    },
    /** onTextChange defined for tbxBarcode **/
    AS_TextField_f8eec2b001ea46d3bb2c5be4a9b3ca91: function AS_TextField_f8eec2b001ea46d3bb2c5be4a9b3ca91(eventobject, changedtext) {
        var self = this;
        this.checkCompletionProcedure();
    },
    /** onClick defined for btnDoneProcedure **/
    AS_Button_f66081889b5b4034b919bf8c503302ab: function AS_Button_f66081889b5b4034b919bf8c503302ab(eventobject) {
        var self = this;
        this.onDoneProcedure();
    },
    /** preShow defined for frmRemoveHaspLockS2 **/
    AS_Form_da7f1efa687842719f60c14b54d9d2f9: function AS_Form_da7f1efa687842719f60c14b54d9d2f9(eventobject) {
        var self = this;
        this.preshow();
    }
});