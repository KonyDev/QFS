define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segIsolationProcedure **/
    AS_Segment_d71529dca0824ad9a6d2295681b0243e: function AS_Segment_d71529dca0824ad9a6d2295681b0243e(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSegRowClick();
    },
    /** onClick defined for btnDone **/
    AS_Button_c76fc6158aa542d4afd5a4211d14e88c: function AS_Button_c76fc6158aa542d4afd5a4211d14e88c(eventobject) {
        var self = this;
        this.onDone()
    },
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
    /** onTextChange defined for tbxBarcode **/
    AS_TextField_j7211aea19dd4ed6ac3e3e5519d45823: function AS_TextField_j7211aea19dd4ed6ac3e3e5519d45823(eventobject, changedtext) {
        var self = this;
        this.checkCompletionProcedure();
    },
    /** onClick defined for btnDoneProcedure **/
    AS_Button_bd7dfa1baace48ce9ec06c6d09571f93: function AS_Button_bd7dfa1baace48ce9ec06c6d09571f93(eventobject) {
        var self = this;
        this.onDoneProcedure();
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
    /** preShow defined for frmPendingUnlockS2 **/
    AS_Form_a5141d31f7944123935927c1ac0e67cb: function AS_Form_a5141d31f7944123935927c1ac0e67cb(eventobject) {
        var self = this;
        this.preshow();
    }
});