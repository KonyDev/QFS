define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c3abcd6e61874b42be1de7e417611524: function AS_FlexContainer_c3abcd6e61874b42be1de7e417611524(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmInspectionsList");
        ntf.navigate();
    },
    /** onClick defined for flxHistory **/
    AS_FlexContainer_f1b6bf6784744fb28e6487e97a79048e: function AS_FlexContainer_f1b6bf6784744fb28e6487e97a79048e(eventobject) {
        var self = this;
        this._onClickOfHistory();
    },
    /** onClick defined for btnSubmitInspection **/
    AS_Button_c092cab97541473e961a40cbeb94ae61: function AS_Button_c092cab97541473e961a40cbeb94ae61(eventobject) {
        var self = this;
        this.navigateToInspectionList();
    },
    /** onDeviceBack defined for frmInspectionConfirmation **/
    AS_Form_h33ad0ca82fc4b208062ba07b7749619: function AS_Form_h33ad0ca82fc4b208062ba07b7749619(eventobject) {
        var self = this;

        function doNothing() {};
        doNothing();
    }
});