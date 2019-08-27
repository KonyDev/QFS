define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSignIn defined for LoginComponent **/
    AS_UWI_ge8a3eb716fc4df5839e2409f079c1d5: function AS_UWI_ge8a3eb716fc4df5839e2409f079c1d5() {
        var self = this;
        this.doLogin();
    },
    /** onDone defined for tbxUsername **/
    AS_TextField_fbe648add972456a9e2c79eac6e6b6ec: function AS_TextField_fbe648add972456a9e2c79eac6e6b6ec(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblUsername);
    },
    /** onClick defined for flxLblUsername **/
    AS_FlexContainer_i69a706f56404b65a7cd70ac11ad9836: function AS_FlexContainer_i69a706f56404b65a7cd70ac11ad9836(eventobject) {
        var self = this;
        if (this.view.lblUsername.top == "6%") {
            this.view.flxLblUsername.isVisible = false;
            this.invokeTouch(this.view.lblUsername, "-1%");
        }
        this.view.forceLayout();
    },
    /** onDone defined for tbxPassword **/
    AS_TextField_e31a7d136b814abbac802ef4fc6f7202: function AS_TextField_e31a7d136b814abbac802ef4fc6f7202(eventobject, changedtext) {
        var self = this;
        this.onDoneCredentials(this.view.lblPassword);
    },
    /** onClick defined for flxLblPassword **/
    AS_FlexContainer_fcdd0585eb114c34a68b94fdb09cd2d3: function AS_FlexContainer_fcdd0585eb114c34a68b94fdb09cd2d3(eventobject) {
        var self = this;
        if (this.view.lblPassword.top == "23%") {
            this.view.flxLblPassword.isVisible = false;
            this.invokeTouch(this.view.lblPassword, "16%");
        }
        this.view.forceLayout();
    },
    /** onClick defined for flxRememberMe **/
    AS_FlexContainer_f1212430baae482498f6122eec667a26: function AS_FlexContainer_f1212430baae482498f6122eec667a26(eventobject) {
        var self = this;
        this.remembermeSelection();
    },
    /** onClick defined for btnLogin **/
    AS_Button_e041471720264f548884e0c2f018ac55: function AS_Button_e041471720264f548884e0c2f018ac55(eventobject) {
        var self = this;
        //this.invokeButtonClick();
        this.doLogin();
    },
    /** onClick defined for CopybtnCallRepresentative0d876baeedd3a45 **/
    AS_Button_j4036c6e331c4535b7b87e95136b272b: function AS_Button_j4036c6e331c4535b7b87e95136b272b(eventobject) {
        var self = this;
        this.onClickCallNumber();
    },
    /** onClick defined for flxTouchId **/
    AS_FlexContainer_a404d2a1b93c48698185c7b50a84c40b: function AS_FlexContainer_a404d2a1b93c48698185c7b50a84c40b(eventobject) {
        var self = this;
        this.invokeTouchID();
    },
    /** onClick defined for btnEnable **/
    AS_Button_ad9fce664731445aa8cebe7ec6739aea: function AS_Button_ad9fce664731445aa8cebe7ec6739aea(eventobject) {
        var self = this;
        this.touchEnableAction();
    },
    /** onClick defined for btnCancel **/
    AS_Button_bc9fb7c111344c149c01baca356c950c: function AS_Button_bc9fb7c111344c149c01baca356c950c(eventobject) {
        var self = this;
        this.touchCancelAction();
    },
    /** onClick defined for btnTouchCancel **/
    AS_Button_ab654ca22609487a9427a4cd04cc9020: function AS_Button_ab654ca22609487a9427a4cd04cc9020(eventobject) {
        var self = this;
        this.cancelTouchID();
    },
    /** preShow defined for frmLogin2 **/
    AS_Form_h4b0a07ea0984f12831a9ef4a85af13b: function AS_Form_h4b0a07ea0984f12831a9ef4a85af13b(eventobject) {
        var self = this;
        this.onFormPreShow();
    },
    /** postShow defined for frmLogin2 **/
    AS_Form_a7522476426448a1b8ed8bc0de3c9d0e: function AS_Form_a7522476426448a1b8ed8bc0de3c9d0e(eventobject) {
        var self = this;
        this.onFormPostShow();
    },
    /** onDeviceBack defined for frmLogin2 **/
    AS_Form_a00480894d154f06a26a9a85d04f1836: function AS_Form_a00480894d154f06a26a9a85d04f1836(eventobject) {
        var self = this;

        function doNothing() {};
        doNothing();
    }
});