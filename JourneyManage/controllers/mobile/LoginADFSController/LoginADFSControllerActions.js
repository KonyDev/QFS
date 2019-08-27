define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSuccess defined for brwLogin **/
    AS_Browser_d9a55d71d8214c20be942e7e66dacdd5: function AS_Browser_d9a55d71d8214c20be942e7e66dacdd5(eventobject) {
        var self = this;
        try {
            this.view.flxSplashContainer.isVisible = false;
            kony.application.dismissLoadingScreen();
        } catch (err) {
            alert(err.message);
        }
    },
    /** onClick defined for btnCreateNotification **/
    AS_Button_e79dd508c16644b19ef650b846315c69: function AS_Button_e79dd508c16644b19ef650b846315c69(eventobject) {
        var self = this;
        return self.simulateJourneyNotification.call(this, null, null);
    },
    /** postShow defined for LoginADFS **/
    AS_Form_b41ea3f09c9744d591f94bc699bce853: function AS_Form_b41ea3f09c9744d591f94bc699bce853(eventobject) {
        var self = this;
        try {
            this.doLogin();
        } catch (err) {
            alert(err.message);
        }
    },
    /** onDeviceBack defined for LoginADFS **/
    AS_Form_d48533257f6844f8b04f12ec4bc65eb7: function AS_Form_d48533257f6844f8b04f12ec4bc65eb7(eventobject) {
        var self = this;
        return;
    }
});