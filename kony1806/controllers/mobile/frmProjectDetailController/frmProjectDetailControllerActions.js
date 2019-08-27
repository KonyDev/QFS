define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flexSummary **/
    AS_FlexContainer_b69ae10a7ace496caf773f2a0fb221c6: function AS_FlexContainer_b69ae10a7ace496caf773f2a0fb221c6(eventobject) {
        var self = this;
        this.toggleTabs(0);
    },
    /** onClick defined for flexIsolationPoint **/
    AS_FlexContainer_ed47bd00faed402daa88674285327c77: function AS_FlexContainer_ed47bd00faed402daa88674285327c77(eventobject) {
        var self = this;
        this.toggleTabs(1);
    },
    /** onClick defined for flexMessage **/
    AS_FlexContainer_hfa0260290b0441c8323fed20ab918e6: function AS_FlexContainer_hfa0260290b0441c8323fed20ab918e6(eventobject) {
        var self = this;
        this.showpopupMessage();
    },
    /** onClick defined for FlexContainer0f23b10441ed541 **/
    AS_FlexContainer_hd78d730f60c4ae59b160e37803de394: function AS_FlexContainer_hd78d730f60c4ae59b160e37803de394(eventobject) {
        var self = this;
        this.navForm("frmPerformedLockouts", 1);
    },
    /** onClickDetails defined for isolationPoint **/
    AS_UWI_jde0489b2ed0436a8d1f52a78f54262d: function AS_UWI_jde0489b2ed0436a8d1f52a78f54262d(eventobject) {
        var self = this;
        this.onClickIsolationPoint.bind(this, i);
    },
    /** onRowClick defined for isolationPoint **/
    AS_UWI_bb6908b39cf9473692a48d8e391bff64: function AS_UWI_bb6908b39cf9473692a48d8e391bff64(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onClickIsolationPoint.bind(this, i);
    },
    /** onClick defined for btnSend **/
    AS_Button_ab749b0ac7824572be38b8683d84d1e4: function AS_Button_ab749b0ac7824572be38b8683d84d1e4(eventobject) {
        var self = this;
        this.sendMessage();
    },
    /** onClickLeft defined for headerProjectDetails **/
    AS_UWI_f7176bbc4d8b496385317723cb286c21: function AS_UWI_f7176bbc4d8b496385317723cb286c21(eventobject) {
        var self = this;
        this.navBack();
    },
    /** preShow defined for frmProjectDetail **/
    AS_Form_e96d4475503d4512b1464a74f131f37e: function AS_Form_e96d4475503d4512b1464a74f131f37e(eventobject) {
        var self = this;
        this.preshow();
    }
});