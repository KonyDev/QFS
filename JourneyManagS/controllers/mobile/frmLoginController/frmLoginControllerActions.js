define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxEyeImageContainer **/
    AS_FlexContainer_j25cf47c8f0c4620a5ecd254218d515e: function AS_FlexContainer_j25cf47c8f0c4620a5ecd254218d515e(eventobject) {
        var self = this;
        if (kony.os.deviceInfo().category == "android") {
            new kony.ui.Toast({
                "text": "Password Visibility ON.",
                "duration": constants.TOAST_LENGTH_SHORT
            }).show();
        }
        alert("PAsdfasdf");
    },
    /** onTouchEnd defined for lblForgotPassword **/
    AS_Label_hec05d9b384b40feb807f8e6b9ed92d0: function AS_Label_hec05d9b384b40feb807f8e6b9ed92d0(eventobject, x, y) {
        var self = this;
        this.onClickForgotPassword();
    },
    /** onClick defined for btnSignIn **/
    AS_Button_dd7251f97cbf46b1aef563ba6cda8bde: function AS_Button_dd7251f97cbf46b1aef563ba6cda8bde(eventobject) {
        var self = this;
        this.onClickBtnSignIn();
    },
    /** onClick defined for btnSubmit **/
    AS_Button_f43fb5a86b7544c189cd5646cee4fdc9: function AS_Button_f43fb5a86b7544c189cd5646cee4fdc9(eventobject) {
        var self = this;
        this.onClickPasswordChangeSubmit();
    },
    /** onClick defined for btnCancel **/
    AS_Button_ad3b616d010d44f288558238d92f8b63: function AS_Button_ad3b616d010d44f288558238d92f8b63(eventobject) {
        var self = this;
        this.onClickPasswordChangeCancel();
    },
    /** onClick defined for btnProceed **/
    AS_Button_d01f0a3a01a0466aab7642c11ce8da33: function AS_Button_d01f0a3a01a0466aab7642c11ce8da33(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onTouchMove defined for flxPersonalAndVehicleDetailsSuccessPopup **/
    AS_FlexContainer_da4205bec9aa47508482e8f233caf33f: function AS_FlexContainer_da4205bec9aa47508482e8f233caf33f(eventobject, x, y) {
        var self = this;
        //Do Nothing.
    },
    /** onClick defined for btnForgotPassProceed **/
    AS_Button_edfec025aaa245feaa179c246a0c667d: function AS_Button_edfec025aaa245feaa179c246a0c667d(eventobject) {
        var self = this;
        this.onClickPassChangePopup();
    },
    /** onClick defined for btnSubmitDetails **/
    AS_Button_fa2732bad86040ad905762f4910c1e6c: function AS_Button_fa2732bad86040ad905762f4910c1e6c(eventobject) {
        var self = this;
        this.onClickPersonDetails();
    },
    /** onClick defined for btnCancelDetails **/
    AS_Button_b57a8609722a4c839790192884ee123b: function AS_Button_b57a8609722a4c839790192884ee123b(eventobject) {
        var self = this;
        this.onClickPersonDetailsPopup();
    }
});