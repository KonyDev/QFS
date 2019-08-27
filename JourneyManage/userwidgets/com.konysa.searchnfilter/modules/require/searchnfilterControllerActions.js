define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxSearchTitle **/
    AS_FlexContainer_a13a63d8bf234bbfae73929b2a05c17c: function AS_FlexContainer_a13a63d8bf234bbfae73929b2a05c17c(eventobject) {
        var self = this;
        this.showSearchBox();
    },
    /** onClick defined for flxFilterTitle **/
    AS_FlexContainer_j87bebbe7b3f440cb3ca3bb2d7dcbd52: function AS_FlexContainer_j87bebbe7b3f440cb3ca3bb2d7dcbd52(eventobject) {
        var self = this;
        return self.showFilterBox.call(this);
    },
    /** onClick defined for flxCloseSearch **/
    AS_FlexContainer_d19344e6068441a6abd6f230bfda56b5: function AS_FlexContainer_d19344e6068441a6abd6f230bfda56b5(eventobject) {
        var self = this;
        return self.hideSearchBox.call(this);
    },
    /** onClick defined for flxCloseFIlter **/
    AS_FlexContainer_d3e9d1bf6a5f4e539a73dbc3e2d7500e: function AS_FlexContainer_d3e9d1bf6a5f4e539a73dbc3e2d7500e(eventobject) {
        var self = this;
        return self.hideFilterBox.call(this);
    }
});