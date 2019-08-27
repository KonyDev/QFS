define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for imgClearTextBox **/
    AS_Image_e4b1650f5a244dc799715550eb075dab: function AS_Image_e4b1650f5a244dc799715550eb075dab(eventobject, x, y) {
        var self = this;
        this.resetInspectionSearch();
    },
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_d7c9d2766caa4375931868f7cc194b01: function AS_FlexContainer_d7c9d2766caa4375931868f7cc194b01(eventobject) {
        var self = this;
        this.onClickHamburger();
    },
    /** onClick defined for flxSearch **/
    AS_FlexContainer_a466ecd981ab45578619331c3ffb74ff: function AS_FlexContainer_a466ecd981ab45578619331c3ffb74ff(eventobject) {
        var self = this;
        this.showSearchContainer();
    },
    /** onRowClick defined for SegInspectionDetails **/
    AS_Segment_g594481a550445f59227ff2957944ddb: function AS_Segment_g594481a550445f59227ff2957944ddb(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.view.SegInspectionDetails.pressedSkin = "segRowFocusSkin";
        this.onSegRowClick(eventobject, sectionNumber, rowNumber);
    },
    /** onClick defined for flxFilter **/
    AS_FlexContainer_a9af254f26874106a9b595728e5ca66d: function AS_FlexContainer_a9af254f26874106a9b595728e5ca66d(eventobject) {
        var self = this;
        this.showFilterContainer();
    },
    /** onClick defined for flxClose **/
    AS_FlexContainer_h0e102e6e5354015973cd14a8c374ed6: function AS_FlexContainer_h0e102e6e5354015973cd14a8c374ed6(eventobject) {
        var self = this;
        this.hideFilterContainer();
    },
    /** onTouchEnd defined for lblReset **/
    AS_Label_ed3251e548314313bca6b79079ef0ebf: function AS_Label_ed3251e548314313bca6b79079ef0ebf(eventobject, x, y) {
        var self = this;
        this.resetFilter();
    },
    /** onClick defined for flxNearestToMe **/
    AS_FlexContainer_eca315dd74724dc98d888016b847feae: function AS_FlexContainer_eca315dd74724dc98d888016b847feae(eventobject) {
        var self = this;
        return;
        this.onSortFlexClick(eventobject);
    },
    /** onClick defined for flxMostRecentInspection **/
    AS_FlexContainer_ef0fb1446e524ac186721c4101cde6d1: function AS_FlexContainer_ef0fb1446e524ac186721c4101cde6d1(eventobject) {
        var self = this;
        this.onSortFlexClick(eventobject);
    },
    /** onClick defined for flxBtnAssigned **/
    AS_FlexContainer_d18e3f6d2b2646bba1cc82122ee0c62a: function AS_FlexContainer_d18e3f6d2b2646bba1cc82122ee0c62a(eventobject) {
        var self = this;
        this.selectFilterStatus(eventobject);
    },
    /** onClick defined for flxBtnInProgress **/
    AS_FlexContainer_h168b67a2f124eb78249d4a3964098b3: function AS_FlexContainer_h168b67a2f124eb78249d4a3964098b3(eventobject) {
        var self = this;
        this.selectFilterStatus(eventobject);
    },
    /** onClick defined for flxBtnCompleted **/
    AS_FlexContainer_h7231107554b4f0783043e6c291aa0e2: function AS_FlexContainer_h7231107554b4f0783043e6c291aa0e2(eventobject) {
        var self = this;
        this.selectFilterStatus(eventobject);
    },
    /** onClick defined for btnApply **/
    AS_Button_h017207f3e6d4a10978ed65fa6c4eaef: function AS_Button_h017207f3e6d4a10978ed65fa6c4eaef(eventobject) {
        var self = this;
        this.applyFilter();
    },
    /** onTextChange defined for txtBoxSearchInspection **/
    AS_TextField_g45a5dea754649b1959ed4ec3702a1ad: function AS_TextField_g45a5dea754649b1959ed4ec3702a1ad(eventobject, changedtext) {
        var self = this;
        this.onTextChange();
    },
    /** onClick defined for btnCancelSearch **/
    AS_Button_cd0860be7edd4209a7d0ce2d24da3fd6: function AS_Button_cd0860be7edd4209a7d0ce2d24da3fd6(eventobject) {
        var self = this;
        return self.hideSearchContainer.call(this);
    },
    /** onClick defined for FlexGroup0hf163e96e3374a **/
    AS_FlexContainer_gf0361610f69480587123fdd2e2811b7: function AS_FlexContainer_gf0361610f69480587123fdd2e2811b7(eventobject) {
        var self = this;
        return self.hideSearchContainer.call(this);
    },
    /** onRowClick defined for SegAssets **/
    AS_Segment_fdb6c133635e4d5a9834e71cb8949f4c: function AS_Segment_fdb6c133635e4d5a9834e71cb8949f4c(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.view.SegAssets.pressedSkin = "segRowSkin";
        this.onSegRowClick(eventobject, sectionNumber, rowNumber);
    },
    /** onClick defined for flxSearchInspection **/
    AS_FlexContainer_c3b2d988f126422a88fdb0e5a8c89679: function AS_FlexContainer_c3b2d988f126422a88fdb0e5a8c89679(eventobject) {
        var self = this;
        this.hideMenu();
        this.changeFocusSkin("flxSearchInspection");
    },
    /** onClick defined for flxAddInspection **/
    AS_FlexContainer_c374ced6fbae450394d4973b1900e267: function AS_FlexContainer_c374ced6fbae450394d4973b1900e267(eventobject) {
        var self = this;
        this.changeFocusSkin("flxAddInspection");
        this._onClickAddBtn();
    },
    /** onClick defined for flxDashBoard **/
    AS_FlexContainer_g59bf8b000574655ac8a89de9b8f0622: function AS_FlexContainer_g59bf8b000574655ac8a89de9b8f0622(eventobject) {
        var self = this;
        this.hideMenu();
        this.changeFocusSkin("flxDashBoard");
        this.navigateToDashBoard();
    },
    /** onClick defined for flxSync **/
    AS_FlexContainer_d8183fbfb44f4c24a7a38f63cbdfa50a: function AS_FlexContainer_d8183fbfb44f4c24a7a38f63cbdfa50a(eventobject) {
        var self = this;
        this.startSync();
        this.hideMenu();
        this.changeFocusSkin("flxSync");
    },
    /** onClick defined for flxMyAccount **/
    AS_FlexContainer_cc2f98a8a3504775a3faef4a722262c8: function AS_FlexContainer_cc2f98a8a3504775a3faef4a722262c8(eventobject) {
        var self = this;
        this._onClickProfile();
        this.changeFocusSkin("flxMyAccount");
    },
    /** onClick defined for flxHamburgerOverlay **/
    AS_FlexContainer_af4364f27c1a45299d0c1ba4fa0405d8: function AS_FlexContainer_af4364f27c1a45299d0c1ba4fa0405d8(eventobject) {
        var self = this;
        this.hideMenu();
    },
    /** preShow defined for frmInspectionsList **/
    AS_Form_h72e9f80ff8b448fb4abe68e9e54c5e4: function AS_Form_h72e9f80ff8b448fb4abe68e9e54c5e4(eventobject) {
        var self = this;
        this.onFormPreShow();
    },
    /** postShow defined for frmInspectionsList **/
    AS_Form_g2089696768b4237a663ef05ca2027b8: function AS_Form_g2089696768b4237a663ef05ca2027b8(eventobject) {
        var self = this;
        this.onFormPostShow();
    },
    /** onDeviceBack defined for frmInspectionsList **/
    AS_Form_c6c27aebc24745c292b3e6eee71887b5: function AS_Form_c6c27aebc24745c292b3e6eee71887b5(eventobject) {
        var self = this;

        function doNothing() {};
        doNothing();
    }
});