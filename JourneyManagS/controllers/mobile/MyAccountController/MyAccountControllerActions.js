define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c2775cc9edf04ea493dfdea106f6a0de: function AS_FlexContainer_c2775cc9edf04ea493dfdea106f6a0de(eventobject) {
        var self = this;
        // new kony.ui.Toast({"text":"Back Button Clicked!","duration":constants.TOAST_LENGTH_SHORT }).show();
        this.view.flxSideBar.isVisible = true;
    },
    /** onClick defined for flxRight **/
    AS_FlexContainer_e90d5b04a91242aa99a341ea78def246: function AS_FlexContainer_e90d5b04a91242aa99a341ea78def246(eventobject) {
        var self = this;
        new kony.ui.Toast({
            "text": "Edit Button Clicked!",
            "duration": constants.TOAST_LENGTH_SHORT
        }).show();
    },
    /** onClick defined for CopyflxBack0b4f6c56a72904a **/
    AS_FlexContainer_df966c60b32c46b0b630f2bf43a0c756: function AS_FlexContainer_df966c60b32c46b0b630f2bf43a0c756(eventobject) {
        var self = this;
        new kony.ui.Toast({
            "text": "Back Button Clicked!",
            "duration": constants.TOAST_LENGTH_SHORT
        }).show();
    },
    /** onClick defined for CopyflxRight0f20a7c7a502543 **/
    AS_FlexContainer_hde7ee710676438f8c1e1fd8a99e0094: function AS_FlexContainer_hde7ee710676438f8c1e1fd8a99e0094(eventobject) {
        var self = this;
        new kony.ui.Toast({
            "text": "Edit Button Clicked!",
            "duration": constants.TOAST_LENGTH_SHORT
        }).show();
    },
    /** onClick defined for flxJourney **/
    AS_FlexContainer_g52f33803f1e484ca2711f40e82b465d: function AS_FlexContainer_g52f33803f1e484ca2711f40e82b465d(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onClick defined for flxNewJourney **/
    AS_FlexContainer_a97fd5b74aa64a5da952581602a9370c: function AS_FlexContainer_a97fd5b74aa64a5da952581602a9370c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyTraveller");
        ntf.navigate();
    },
    /** onClick defined for flxGuidesManuals **/
    AS_FlexContainer_h6e6fac038e842b2ab83f2e5ce2b5195: function AS_FlexContainer_h6e6fac038e842b2ab83f2e5ce2b5195(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
    },
    /** onClick defined for flxMyAccountSidebar **/
    AS_FlexContainer_i2186b5512e243ce89bc7ccb195298fb: function AS_FlexContainer_i2186b5512e243ce89bc7ccb195298fb(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
    },
    /** onClick defined for flxSidebarClicker **/
    AS_FlexContainer_a9237b6f5a5f44d38daf11b06b73e200: function AS_FlexContainer_a9237b6f5a5f44d38daf11b06b73e200(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
    },
    /** postShow defined for MyAccount **/
    AS_Form_a10e7287a2f74eb9a939b035be0bd79c: function AS_Form_a10e7287a2f74eb9a939b035be0bd79c(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
        // this.view.flxTab1.shadowDepth = 6;
        // this.view.flxTab1.shadowType = constants.VIEW_BOUNDS_SHADOW;
        // this.view.flxTab2.shadowDepth = 6;
        // this.view.flxTab2.shadowType = constants.VIEW_BOUNDS_SHADOW;
        // this.view.flxTab3.shadowDepth = 6;
        // this.view.flxTab3.shadowType = constants.VIEW_BOUNDS_SHADOW;
    }
});