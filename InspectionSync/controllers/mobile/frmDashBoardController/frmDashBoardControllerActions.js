define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_i138213c531a4c25ba1131fb5b07edcf: function AS_FlexContainer_i138213c531a4c25ba1131fb5b07edcf(eventobject) {
        var self = this;
        return;
        this.onClickHamburger();
    },
    /** onClick defined for flxInspection **/
    AS_FlexContainer_d917c5b5b5454971aa3c2278cba35772: function AS_FlexContainer_d917c5b5b5454971aa3c2278cba35772(eventobject) {
        var self = this;
        this.navigateToFrmInspectionList();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_f7b9acdc023545029e22d9cc606ba662: function AS_FlexContainer_f7b9acdc023545029e22d9cc606ba662(eventobject) {
        var self = this;
        this.navigateToFrmInspectionList();
    },
    /** onClick defined for flxSearchInspection **/
    AS_FlexContainer_b2ff9446830b45328747e0130c07e6bf: function AS_FlexContainer_b2ff9446830b45328747e0130c07e6bf(eventobject) {
        var self = this;
        this.hideMenu();
        this.changeFocusSkin("flxSearchInspection");
        this.navigateToFrmInspectionList();
    },
    /** onClick defined for flxAddInspection **/
    AS_FlexContainer_e42475ff21e1452ebac7f5d0c72ea446: function AS_FlexContainer_e42475ff21e1452ebac7f5d0c72ea446(eventobject) {
        var self = this;
        this.changeFocusSkin("flxAddInspection");
        this._onClickAddBtn();
    },
    /** onClick defined for flxSync **/
    AS_FlexContainer_hbdb892b8ef4474a99f07c2b8f7bf290: function AS_FlexContainer_hbdb892b8ef4474a99f07c2b8f7bf290(eventobject) {
        var self = this;
        this.startSync();
        this.hideMenu();
        this.changeFocusSkin("flxSync");
    },
    /** onClick defined for flxMyAccount **/
    AS_FlexContainer_d2b5c7c0e6034a4aa87d935e37d866ac: function AS_FlexContainer_d2b5c7c0e6034a4aa87d935e37d866ac(eventobject) {
        var self = this;
        this._onClickProfile();
        this.changeFocusSkin("flxMyAccount");
    },
    /** onClick defined for flxHamburgerOverlay **/
    AS_FlexContainer_c905e7aacd5a4f1d954c024871ca706a: function AS_FlexContainer_c905e7aacd5a4f1d954c024871ca706a(eventobject) {
        var self = this;
        this.hideMenu();
    },
    /** onClick defined for flxHamburgerMenu **/
    AS_FlexContainer_b330af7bbe304129be45d36ccd0abc55: function AS_FlexContainer_b330af7bbe304129be45d36ccd0abc55(eventobject) {
        var self = this;
    },
    /** postShow defined for frmDashBoard **/
    AS_Form_faf23e5262a74b6090977f758f5e1c9b: function AS_Form_faf23e5262a74b6090977f758f5e1c9b(eventobject) {
        var self = this;
        //return;
        this.onFormPostShow();
    }
});