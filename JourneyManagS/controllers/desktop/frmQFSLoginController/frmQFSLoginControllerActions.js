define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for tbxPassword **/
    AS_TextField_f8860e91e04e4f1195a113ad5fe1cba5: function AS_TextField_f8860e91e04e4f1195a113ad5fe1cba5(eventobject, changedtext) {
        var self = this;
        return self.doLogin.call(this);
    },
    /** onTouchStart defined for flxEyeImg **/
    AS_FlexContainer_e6d61ba367de4a99b5724ffb8fdbf763: function AS_FlexContainer_e6d61ba367de4a99b5724ffb8fdbf763(eventobject, x, y) {
        var self = this;
        this.view.tbxPassword.secureTextEntry = false;
    },
    /** onTouchEnd defined for flxEyeImg **/
    AS_FlexContainer_i29298aa4b7b44d98c1ad18d91cbf1d7: function AS_FlexContainer_i29298aa4b7b44d98c1ad18d91cbf1d7(eventobject, x, y) {
        var self = this;
        this.view.tbxPassword.secureTextEntry = true;
    },
    /** onClick defined for btnSignin **/
    AS_Button_ecdca045adab4cd49d237377dd82cd1d: function AS_Button_ecdca045adab4cd49d237377dd82cd1d(eventobject) {
        var self = this;
        return self.doLogin.call(this);
    }
});