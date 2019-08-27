define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c2775cc9edf04ea493dfdea106f6a0de: function AS_FlexContainer_c2775cc9edf04ea493dfdea106f6a0de(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onClick defined for flxRight **/
    AS_FlexContainer_e90d5b04a91242aa99a341ea78def246: function AS_FlexContainer_e90d5b04a91242aa99a341ea78def246(eventobject) {
        var self = this;
        self.onEditClick.call(this);
    },
    /** onClick defined for flxDone **/
    AS_FlexContainer_j0882bdb0bf248e7a8b0ea1bc6a95ab2: function AS_FlexContainer_j0882bdb0bf248e7a8b0ea1bc6a95ab2(eventobject) {
        var self = this;
        return self.onBtnOkClick.call(this);
    },
    /** onSelection defined for userCountry **/
    AS_UWI_e815437c460d4cb1be1819883288405e: function AS_UWI_e815437c460d4cb1be1819883288405e(eventobject) {
        var self = this;
        return self.onSelection.call(this);
    },
    /** onClick defined for btnSaveProfile **/
    AS_Button_eee221a5f34a4517a2a282dc1ae7bd8a: function AS_Button_eee221a5f34a4517a2a282dc1ae7bd8a(eventobject, context) {
        var self = this;
        return self.onClickUpdateDetails.call(this);
    },
    /** onClick defined for flxBackButton **/
    AS_FlexContainer_df966c60b32c46b0b630f2bf43a0c756: function AS_FlexContainer_df966c60b32c46b0b630f2bf43a0c756(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onRowClick defined for segGuidesManual **/
    AS_Segment_ie48a7a2bd474971b6f07a04a2a69ad3: function AS_Segment_ie48a7a2bd474971b6f07a04a2a69ad3(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this._invokePDFviewerMethod();
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
    /** preShow defined for MyAccount **/
    AS_Form_b4a8777ba4d3422eb0556972a960d201: function AS_Form_b4a8777ba4d3422eb0556972a960d201(eventobject) {
        var self = this;
        return self.preshow.call(this);
    },
    /** postShow defined for MyAccount **/
    AS_Form_a10e7287a2f74eb9a939b035be0bd79c: function AS_Form_a10e7287a2f74eb9a939b035be0bd79c(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
        this.setDefaultValues();
    }
});