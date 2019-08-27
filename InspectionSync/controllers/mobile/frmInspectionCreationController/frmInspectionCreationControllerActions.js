define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_f0092fe5305a487aa18e0b793429cf4e: function AS_FlexContainer_f0092fe5305a487aa18e0b793429cf4e(eventobject) {
        var self = this;
        this._onClickBack();
    },
    /** onClick defined for CopyflxSearch0face141278fd44 **/
    AS_FlexContainer_i882a8237b7149a29251c4024be83419: function AS_FlexContainer_i882a8237b7149a29251c4024be83419(eventobject) {
        var self = this;
        this.showSearchContainer();
    },
    /** onTextChange defined for txtSearch **/
    AS_TextField_ec21736265f7427b8e5a572b9eb88048: function AS_TextField_ec21736265f7427b8e5a572b9eb88048(eventobject, changedtext) {
        var self = this;
        this._onTextChangeOfSearch(eventobject, changedtext);
    },
    /** onTouchEnd defined for imgSearchCancel **/
    AS_Image_a1b7f59bcb5040ccb85e07a7cc761dc5: function AS_Image_a1b7f59bcb5040ccb85e07a7cc761dc5(eventobject, x, y) {
        var self = this;
        this._onClickSearchClear();
    },
    /** onClick defined for flxCancel **/
    AS_FlexContainer_c090074a5ee14464ad81a84162114ac4: function AS_FlexContainer_c090074a5ee14464ad81a84162114ac4(eventobject) {
        var self = this;
        this._onClickCancel();
    },
    /** onRowClick defined for segAssets **/
    AS_Segment_d602395aae09499e87305c80fbd26a99: function AS_Segment_d602395aae09499e87305c80fbd26a99(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this._onClickSegAsset();
    },
    /** onClick defined for flxFilterScreenClose **/
    AS_FlexContainer_gf12234f8f974643a773791b6b33696c: function AS_FlexContainer_gf12234f8f974643a773791b6b33696c(eventobject) {
        var self = this;
        this._hideFilterScreen();
    },
    /** onClick defined for flxFilterReset **/
    AS_FlexContainer_i3fdc61799ca4275b124340d9b6ae480: function AS_FlexContainer_i3fdc61799ca4275b124340d9b6ae480(eventobject) {
        var self = this;
        this._onClickFilterReset();
    },
    /** onClick defined for btnApplyFilter **/
    AS_Button_a0f0a9378a7949889806a909d327031b: function AS_Button_a0f0a9378a7949889806a909d327031b(eventobject) {
        var self = this;
        this._onClickApplyFilter();
    },
    /** onClick defined for flxFilter **/
    AS_FlexContainer_bf730e6ccefd4a1dab5c4b6f14eb4b79: function AS_FlexContainer_bf730e6ccefd4a1dab5c4b6f14eb4b79(eventobject, context) {
        var self = this;
        this._showFilterScreen();
    },
    /** onTextChange defined for txtBoxSearchInspection **/
    AS_TextField_b9940ec29c19480881b93beda92f8e4d: function AS_TextField_b9940ec29c19480881b93beda92f8e4d(eventobject, changedtext) {
        var self = this;
        this.onTextChange();
    },
    /** onTouchEnd defined for imgClearTextBox **/
    AS_Image_e4b1650f5a244dc799715550eb075dab: function AS_Image_e4b1650f5a244dc799715550eb075dab(eventobject, x, y) {
        var self = this;
        this.resetInspectionSearch();
    },
    /** onClick defined for FlexGroup0hf163e96e3374a **/
    AS_FlexContainer_aa2348e175f14d9c97de546871ea58c5: function AS_FlexContainer_aa2348e175f14d9c97de546871ea58c5(eventobject) {
        var self = this;
        this.hideSearchContainer();
    },
    /** onRowClick defined for segAssetSearch **/
    AS_Segment_e7e90dc6da394a3f8e061d1bddf541a5: function AS_Segment_e7e90dc6da394a3f8e061d1bddf541a5(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSegRowClick(eventobject, sectionNumber, rowNumber);
    },
    /** preShow defined for frmInspectionCreation **/
    AS_Form_c916991bd6e141d8b0375246eabbf5b0: function AS_Form_c916991bd6e141d8b0375246eabbf5b0(eventobject) {
        var self = this;
        //this._fetchData();
        this.onFormPreShow();
    },
    /** postShow defined for frmInspectionCreation **/
    AS_Form_hcc6d9e6c92f473bb380b2f9cf732443: function AS_Form_hcc6d9e6c92f473bb380b2f9cf732443(eventobject) {
        var self = this;
        this.onFormPostShow();
    },
    /** onDeviceBack defined for frmInspectionCreation **/
    AS_Form_g86c9a527d7d45dd8b26fc65cb87bbe1: function AS_Form_g86c9a527d7d45dd8b26fc65cb87bbe1(eventobject) {
        var self = this;

        function doNothing() {};
        doNothing();
    }
});