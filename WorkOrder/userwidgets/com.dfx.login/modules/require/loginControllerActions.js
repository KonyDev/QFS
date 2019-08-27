define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSignIn **/
    AS_Button_i6b6ec99c00545da8df42ae36d58a067: function AS_Button_i6b6ec99c00545da8df42ae36d58a067(eventobject) {
        var self = this;
        this.login();
    },
    /** onTextChange defined for tbxEmail **/
    AS_UWI_g2328f20c3a144a28c8f0f8be6357633: function AS_UWI_g2328f20c3a144a28c8f0f8be6357633(eventobject, changedtext) {
        var self = this;
        return self.validateText.call(this);
    },
    /** onTextChange defined for tbxPassword **/
    AS_UWI_e3d23088853043fcbc084fd010a5acb9: function AS_UWI_e3d23088853043fcbc084fd010a5acb9(eventobject, changedtext) {
        var self = this;
        return self.validateText.call(this);
    },
    /** preShow defined for login **/
    AS_FlexContainer_c61791e8033c4659a2d1c5a3002d439d: function AS_FlexContainer_c61791e8033c4659a2d1c5a3002d439d(eventobject) {
        var self = this;
        this.preshow();
    }
});