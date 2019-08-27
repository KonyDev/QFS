define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_a3546a2d0c4e40a68ddec2a1664a7f1c: function AS_FlexContainer_a3546a2d0c4e40a68ddec2a1664a7f1c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmInspectionsList");
        ntf.navigate();
    },
    /** onClick defined for flxHistory **/
    AS_FlexContainer_d348d34b438143e9bb8c84a112c0e9de: function AS_FlexContainer_d348d34b438143e9bb8c84a112c0e9de(eventobject) {
        var self = this;
        this._onClickOfHistory();
    },
    /** onClick defined for btnSubmitInspection **/
    AS_Button_d627aab3f1f2490985b78af9e42d5fa6: function AS_Button_d627aab3f1f2490985b78af9e42d5fa6(eventobject) {
        var self = this;
        this.navigateToInspectionList();
    },
    /** onDeviceBack defined for frmInspectionConfirmationScreen **/
    AS_Form_de7fd97b337d4bbd92034f5ee35ca4b0: function AS_Form_de7fd97b337d4bbd92034f5ee35ca4b0(eventobject) {
        var self = this;

        function doNothing() {};
        doNothing();
    }
});