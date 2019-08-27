define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_a0cb3a7f5d15469692ac87c7d98763a5: function AS_FlexContainer_a0cb3a7f5d15469692ac87c7d98763a5(eventobject) {
        var self = this;
        return self.openHam.call(this);
    },
    /** onClick defined for flxNotes **/
    AS_FlexContainer_cff780dcf81b40f390b218df344fe45c: function AS_FlexContainer_cff780dcf81b40f390b218df344fe45c(eventobject) {
        var self = this;
        this.showSearchContainer();
    },
    /** onClickNo defined for toggleWorkStandard **/
    AS_UWI_jafc16b3c85e45cea8acfd564a37981b: function AS_UWI_jafc16b3c85e45cea8acfd564a37981b(eventobject) {
        var self = this;
        return self.onClickToggleWorkStandard.call(this, 0);
    },
    /** onClickYes defined for toggleWorkStandard **/
    AS_UWI_d48e4bf65dc94b83a06fc81c10f8a07e: function AS_UWI_d48e4bf65dc94b83a06fc81c10f8a07e(eventobject) {
        var self = this;
        return self.onClickToggleWorkStandard.call(this, 1);
    },
    /** onClickNo defined for toggleTaskDifficul **/
    AS_UWI_hdd7f81f10b14e11895c697fb4c8c86f: function AS_UWI_hdd7f81f10b14e11895c697fb4c8c86f(eventobject) {
        var self = this;
        return self.onClickToggleTaskDifficulty.call(this, 0);
    },
    /** onClickYes defined for toggleTaskDifficul **/
    AS_UWI_d22eeb364ab447399615f82dcacaab1a: function AS_UWI_d22eeb364ab447399615f82dcacaab1a(eventobject) {
        var self = this;
        return self.onClickToggleTaskDifficulty.call(this, 1);
    },
    /** onClickNo defined for toggleSignoff **/
    AS_UWI_ef292a1acf5b45c9b147ff685d2b7033: function AS_UWI_ef292a1acf5b45c9b147ff685d2b7033(eventobject) {
        var self = this;
        return self.onClickToggleSignOff.call(this, 0);
    },
    /** onClickYes defined for toggleSignoff **/
    AS_UWI_dec06ea04f6a4c9bb5ae0d8f7a3ed63f: function AS_UWI_dec06ea04f6a4c9bb5ae0d8f7a3ed63f(eventobject) {
        var self = this;
        return self.onClickToggleSignOff.call(this, 1);
    },
    /** onClick defined for btnCompleteTask **/
    AS_Button_i90115ac45cd4748b5507f9f4c5f327b: function AS_Button_i90115ac45cd4748b5507f9f4c5f327b(eventobject) {
        var self = this;
        return self.completeSafetyCheckList.call(this);
    },
    /** onClickBlurMenu defined for menuDFX **/
    AS_UWI_ade221eda3154307bcffe73ea7b1f6fb: function AS_UWI_ade221eda3154307bcffe73ea7b1f6fb(eventobject) {
        var self = this;
        return self.closeHam.call(this);
    }
});