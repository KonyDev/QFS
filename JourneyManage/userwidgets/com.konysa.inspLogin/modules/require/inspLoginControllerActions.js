define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onEndEditing defined for txtBoxEmail **/
    AS_TextField_j050ab7e2c2b45ba8fbab697a24e42cc: function AS_TextField_j050ab7e2c2b45ba8fbab697a24e42cc(eventobject, changedtext) {
        var self = this;
        this.onTextInputDone("txtBoxEmail");
    },
    /** onEndEditing defined for txtBoxEmail **/
    AS_TextField_gf00d26e8d3a40648eb53887c41781e6: function AS_TextField_gf00d26e8d3a40648eb53887c41781e6(eventobject, changedtext) {
        var self = this;
        this.onTextInputDone("txtBoxEmail");
    },
    /** onClick defined for flxEmailEnabler **/
    AS_FlexContainer_ea666148b33946a5bc36cde942b88324: function AS_FlexContainer_ea666148b33946a5bc36cde942b88324(eventobject) {
        var self = this;
        this.enableTextBox("flxEmailEnabler");
    },
    /** onEndEditing defined for txtBoxPassword **/
    AS_TextField_i5da719abfa344dbb489d167d2935e6e: function AS_TextField_i5da719abfa344dbb489d167d2935e6e(eventobject, changedtext) {
        var self = this;
        this.onTextInputDone("txtBoxPassword");
    },
    /** onEndEditing defined for txtBoxPassword **/
    AS_TextField_gcd60816bfb144409c95b17b89f0aac8: function AS_TextField_gcd60816bfb144409c95b17b89f0aac8(eventobject, changedtext) {
        var self = this;
        this.onTextInputDone("txtBoxPassword");
    },
    /** onClick defined for flxPasswordEnabler **/
    AS_FlexContainer_hc68a01919e3400da82736690ae56f79: function AS_FlexContainer_hc68a01919e3400da82736690ae56f79(eventobject) {
        var self = this;
        this.enableTextBox("flxPasswordEnabler");
    },
    /** onClick defined for flxImageContainer **/
    AS_FlexContainer_f53f4c948e224141936f1981484018cf: function AS_FlexContainer_f53f4c948e224141936f1981484018cf(eventobject) {
        var self = this;
    },
    /** onClick defined for flxRememberMe **/
    AS_FlexContainer_a9aebbaa4b8740e8a18a10a98b70b4e7: function AS_FlexContainer_a9aebbaa4b8740e8a18a10a98b70b4e7(eventobject) {
        var self = this;
        this.setRememberOption();
    },
    /** onClick defined for btnSubmit **/
    AS_Button_bb7992cfb4ca46efb848ee1dd260ce97: function AS_Button_bb7992cfb4ca46efb848ee1dd260ce97(eventobject) {
        var self = this;
        this.doLogin();
    },
    /** onClick defined for btnTouchId **/
    AS_Button_c103434ae43e4e2697cdb7c4d15bf618: function AS_Button_c103434ae43e4e2697cdb7c4d15bf618(eventobject) {
        var self = this;
        this.loginWithTouchId();
    },
    /** onClick defined for btnEnable **/
    AS_Button_ce9cd89cb58842039127babdf108d80a: function AS_Button_ce9cd89cb58842039127babdf108d80a(eventobject) {
        var self = this;
    },
    /** onClick defined for btnTouchCancel **/
    AS_Button_i3fb3e53d8bf4f3780dbc8c6eb94a0e2: function AS_Button_i3fb3e53d8bf4f3780dbc8c6eb94a0e2(eventobject) {
        var self = this;
        this.dismissTouchAuthEnablementMsg();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_da1f2e7d37be496e96d371138a7d65db: function AS_FlexContainer_da1f2e7d37be496e96d371138a7d65db(eventobject) {
        var self = this;
        this.cancelTouchAuth();
    },
    /** postShow defined for inspLogin **/
    AS_FlexContainer_ba547aa0ac064814ac61870917a63aae: function AS_FlexContainer_ba547aa0ac064814ac61870917a63aae(eventobject) {
        var self = this;
        this.onComponnetPosthow();
    }
});