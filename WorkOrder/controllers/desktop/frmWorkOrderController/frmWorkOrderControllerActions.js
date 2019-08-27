define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnWorkorder **/
    AS_Button_h463fda0dab346f4962512d7caf83b76: function AS_Button_h463fda0dab346f4962512d7caf83b76(eventobject) {
        var self = this;
        return self.onNavigate.call(this);
    },
    /** onClick defined for btnAssets **/
    AS_Button_abe3c1f1ac9a44a28d765ae5c421ccbb: function AS_Button_abe3c1f1ac9a44a28d765ae5c421ccbb(eventobject) {
        var self = this;
        self.btnAssets_onClick.call(this);
    },
    /** onClick defined for flxLogout **/
    AS_FlexContainer_d07c46eb6eea479d8a0223a6fd36abfc: function AS_FlexContainer_d07c46eb6eea479d8a0223a6fd36abfc(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    /** onClick defined for btnCreateWorkOrder **/
    AS_Button_iffb022dc8394082b27edd6a2be7504e: function AS_Button_iffb022dc8394082b27edd6a2be7504e(eventobject) {
        var self = this;
        self.showPopup.call(this);
    },
    /** onClick defined for flexInspection **/
    AS_FlexContainer_fed11ee5dde140b582a75e6607d71317: function AS_FlexContainer_fed11ee5dde140b582a75e6607d71317(eventobject) {
        var self = this;
        return self.selectWorkOrderType.call(this, 1);
    },
    /** onClick defined for flexRepair **/
    AS_FlexContainer_b78f52ab7a2944758e88992e03107549: function AS_FlexContainer_b78f52ab7a2944758e88992e03107549(eventobject) {
        var self = this;
        return self.selectWorkOrderType.call(this, 2);
    },
    /** onClick defined for flexReplacement **/
    AS_FlexContainer_de2ba148ef2a4d828731c8857758758c: function AS_FlexContainer_de2ba148ef2a4d828731c8857758758c(eventobject) {
        var self = this;
        return self.selectWorkOrderType.call(this, 3);
    },
    /** onClick defined for flexMaintainance **/
    AS_FlexContainer_i99d6dc6157b446ea8bd22bc93167af5: function AS_FlexContainer_i99d6dc6157b446ea8bd22bc93167af5(eventobject) {
        var self = this;
        return self.selectWorkOrderType.call(this, 4);
    },
    /** onClick defined for btnCancel **/
    AS_Button_b7bd2b4f4e0a4563bae8c7739d9a7c64: function AS_Button_b7bd2b4f4e0a4563bae8c7739d9a7c64(eventobject) {
        var self = this;
        return self.cancelPopup.call(this);
    },
    /** onClick defined for btnCreate **/
    AS_Button_b8c4a5f61fa3434b898f8c7a0d240287: function AS_Button_b8c4a5f61fa3434b898f8c7a0d240287(eventobject) {
        var self = this;
        return self.createWo.call(this);
    }
});