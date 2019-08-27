define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c969f8a35af148f2933fdcfe371d14a5: function AS_FlexContainer_c969f8a35af148f2933fdcfe371d14a5(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmWorkOrder");
        ntf.navigate();
    },
    /** onClick defined for flxCheckSparePart **/
    AS_FlexContainer_g92ee51fb54641b38999bf6d68e58996: function AS_FlexContainer_g92ee51fb54641b38999bf6d68e58996(eventobject) {
        var self = this;
        return self.toggle_SpareParts.call(this);
    },
    /** onClick defined for flxNextStep1 **/
    AS_FlexContainer_f13f899e8b9e4f5aa076869d68fc654b: function AS_FlexContainer_f13f899e8b9e4f5aa076869d68fc654b(eventobject) {
        var self = this;
        return self.show_Material.call(this);
    },
    /** onClick defined for CopyflxCheckbox0da46d5ae7f5142 **/
    AS_FlexContainer_fd7eaaba513c43a1be41cc11dfe35216: function AS_FlexContainer_fd7eaaba513c43a1be41cc11dfe35216(eventobject) {
        var self = this;
        return self.toggle_Tools.call(this);
    },
    /** onClick defined for btnNext **/
    AS_Button_gb39f2fe6a744f7b96aa55ff3a1065f2: function AS_Button_gb39f2fe6a744f7b96aa55ff3a1065f2(eventobject) {
        var self = this;
        return self.showTaskDetail.call(this);
    },
    /** onClick defined for flxAddCheckListVA **/
    AS_FlexContainer_e27640d1eb3c45d3bb696a92f0496fa7: function AS_FlexContainer_e27640d1eb3c45d3bb696a92f0496fa7(eventobject) {
        var self = this;
        return self.addCheckList.call(this);
    },
    /** onClick defined for CopyflxAddCheckListVA0b0f2f38e6f2740 **/
    AS_FlexContainer_ea934a9148fa48bcb65c44a59f13c12f: function AS_FlexContainer_ea934a9148fa48bcb65c44a59f13c12f(eventobject) {
        var self = this;
        return self.addCheckList.call(this);
    },
    /** onClick defined for CopyflxAddCheckListVA0f7885bab6c5542 **/
    AS_FlexContainer_j3048154f9864894a492fda450da0dca: function AS_FlexContainer_j3048154f9864894a492fda450da0dca(eventobject) {
        var self = this;
        return self.addCheckList.call(this);
    },
    /** onClick defined for flxAddTask **/
    AS_FlexContainer_e36f95b576f14d80b233b1254fe2f5d0: function AS_FlexContainer_e36f95b576f14d80b233b1254fe2f5d0(eventobject) {
        var self = this;
        return self.addnewTask.call(this);
    },
    /** onClick defined for flxAddNewStep3 **/
    AS_FlexContainer_f81e7cb2f23b4d038fc6d0b0c1ba99e5: function AS_FlexContainer_f81e7cb2f23b4d038fc6d0b0c1ba99e5(eventobject) {
        var self = this;
        return self.addnewTask.call(this);
    },
    /** onClick defined for btnDoneTaskDetails **/
    AS_Button_cbb8da7344724f1d86c8ab9fa23e51c5: function AS_Button_cbb8da7344724f1d86c8ab9fa23e51c5(eventobject) {
        var self = this;
        return self.onDone.call(this);
    },
    /** onClick defined for btnGoToWorkOrder **/
    AS_Button_f194ca24f5fa419096922b24d53ded91: function AS_Button_f194ca24f5fa419096922b24d53ded91(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmWorkOrder");
        ntf.navigate();
    },
    /** onClick defined for flxChckPreperationSurvey **/
    AS_FlexContainer_b527bbe4f0f54632b5d01bc4c0a3fee5: function AS_FlexContainer_b527bbe4f0f54632b5d01bc4c0a3fee5(eventobject) {
        var self = this;
        return self.SurveyDetais_PrepimgToggle.call(this);
    },
    /** onClick defined for flxCheckCompletionSurvey **/
    AS_FlexContainer_g3d790fc56a841178990f2e2bd93e72b: function AS_FlexContainer_g3d790fc56a841178990f2e2bd93e72b(eventobject) {
        var self = this;
        return self.SurveyDetais_Completion_img_Toggle.call(this);
    },
    /** onClick defined for btnGoToCompletionDetails **/
    AS_Button_ca6d482cbda5410e90b0c83568b40f17: function AS_Button_ca6d482cbda5410e90b0c83568b40f17(eventobject) {
        var self = this;
        return self.showCompletionDetail.call(this);
    },
    /** onClick defined for flxImgUser1 **/
    AS_FlexContainer_hd43cb8a909e4215bf4e9e5ffc1c15f1: function AS_FlexContainer_hd43cb8a909e4215bf4e9e5ffc1c15f1(eventobject) {
        var self = this;
        return self.show_flxSearch.call(this);
    },
    /** onClick defined for flxCheckRequireLocation **/
    AS_FlexContainer_cf1a736025954ed697ce59189b077b25: function AS_FlexContainer_cf1a736025954ed697ce59189b077b25(eventobject) {
        var self = this;
        return self.toggleLocationRequire.call(this);
    },
    /** onClick defined for CopybtnNext0c761bb2ee95948 **/
    AS_Button_a774e851b5a444dd9566ab34592391a6: function AS_Button_a774e851b5a444dd9566ab34592391a6(eventobject) {
        var self = this;
        return self.showReview.call(this);
    },
    /** onClick defined for flxCompletionDetail **/
    AS_FlexContainer_ffee5e2a91454bf1803b2847aaa6b710: function AS_FlexContainer_ffee5e2a91454bf1803b2847aaa6b710(eventobject) {
        var self = this;
    },
    /** onClick defined for btnShowReview **/
    AS_Button_fdf1ecf541704094b892eebf9f0e103e: function AS_Button_fdf1ecf541704094b892eebf9f0e103e(eventobject) {
        var self = this;
        return self.showReview.call(this);
    },
    /** onTextChange defined for tbxSearch **/
    AS_TextField_db4264c1d831462c83a107cf5af57e06: function AS_TextField_db4264c1d831462c83a107cf5af57e06(eventobject, changedtext) {
        var self = this;
        return self.Search_Functionality.call(this);
    },
    /** onEndEditing defined for tbxSearch **/
    AS_TextField_e1fd8ecc580247a59a844adc04825c9f: function AS_TextField_e1fd8ecc580247a59a844adc04825c9f(eventobject, changedtext) {
        var self = this;
        return self.Search_Functionality.call(this);
    },
    /** onRowClick defined for segUsers **/
    AS_Segment_jba8902d30d1436296e25048c93f3e29: function AS_Segment_jba8902d30d1436296e25048c93f3e29(eventobject, sectionNumber, rowNumber) {
        var self = this;
    },
    /** onClick defined for btnDoneSearch **/
    AS_Button_be0e57ca8ce84eb9b80317398a449c7f: function AS_Button_be0e57ca8ce84eb9b80317398a449c7f(eventobject) {
        var self = this;
        return self.show_LocationDetails.call(this);
    },
    /** preShow defined for frmWorkOrderDetails **/
    AS_Form_f6ee940e62dc4f7a942c6266593d90b3: function AS_Form_f6ee940e62dc4f7a942c6266593d90b3(eventobject) {
        var self = this;
        return self.showWODetail.call(this);
    }
});