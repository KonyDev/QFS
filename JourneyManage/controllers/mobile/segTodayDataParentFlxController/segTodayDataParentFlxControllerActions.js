define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSeeDetails **/
    AS_Button_f453987f5a3c4175b179ea74d582eab7: function AS_Button_f453987f5a3c4175b179ea74d582eab7(eventobject, context) {
        var self = this;
        try {
            this.executeOnParent("navigateToPastDetailsForm", {});
        } catch (err) {
            alert(err.message);
        }
    },
    /** onClick defined for btnEdit **/
    AS_Button_f8eb08fc0fca461e9e6382171cb88382: function AS_Button_f8eb08fc0fca461e9e6382171cb88382(eventobject, context) {
        var self = this;
        this.executeOnParent("_InvokeEditFunctionality", {});
    },
    /** onClick defined for btnBegin **/
    AS_Button_c519c15bf8e24c8d82022fb235effed2: function AS_Button_c519c15bf8e24c8d82022fb235effed2(eventobject, context) {
        var self = this;
        this.executeOnParent("NavigateToBeginJourney", {});
    }
});