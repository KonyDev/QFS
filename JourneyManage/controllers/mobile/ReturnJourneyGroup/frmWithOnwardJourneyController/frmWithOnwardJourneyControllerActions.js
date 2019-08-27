define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_dc49a2b31f744cbfb5aff96d93e247ba: function AS_FlexContainer_dc49a2b31f744cbfb5aff96d93e247ba(eventobject) {
        var self = this;
        this.onHamburgerMenuClick();
    },
    /** onClick defined for btnGotoMyJourney **/
    AS_Button_f0684ec45eaf44fbb013cd93f74f00ee: function AS_Button_f0684ec45eaf44fbb013cd93f74f00ee(eventobject) {
        var self = this;
        this.navigateToForm("frmMyJourneys");
    },
    /** onHamburgerMenuHide defined for slidingmenu **/
    AS_UWI_b9b8b940a8394e57896eb66e02b264df: function AS_UWI_b9b8b940a8394e57896eb66e02b264df() {
        var self = this;
        this.hideSlidingMenu();
    },
    /** onJourneyClick defined for slidingmenu **/
    AS_UWI_d4e90860ddae47c2a3c0599cb9738847: function AS_UWI_d4e90860ddae47c2a3c0599cb9738847() {
        var self = this;
        this.navigateToForm("frmMyJourneys");
    },
    /** postShow defined for frmWithOnwardJourney **/
    AS_Form_e177bacc5f8844d5b35ef37573b05d9f: function AS_Form_e177bacc5f8844d5b35ef37573b05d9f(eventobject) {
        var self = this;
        this.onFormPostShow();
    },
    /** onDeviceBack defined for frmWithOnwardJourney **/
    AS_Form_ba3ee425c7094ecfa86ea038f82e8057: function AS_Form_ba3ee425c7094ecfa86ea038f82e8057(eventobject) {
        var self = this;
        return;
    }
});