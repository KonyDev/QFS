define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickOfFlxRefresh defined for jrmgmtheader **/
    AS_UWI_haf809f07eb74af7b56559ff1efa5bb6: function AS_UWI_haf809f07eb74af7b56559ff1efa5bb6(eventobject) {
        var self = this;
        return self.onClickOfFlxRefreshBtn.call(this);
    },
    /** onClickOfBtnRefresh defined for jrmgmtheader **/
    AS_UWI_dfe28cbc07b146eebac9384118b0218c: function AS_UWI_dfe28cbc07b146eebac9384118b0218c(eventobject) {
        var self = this;
        return self.onClickOfFlxRefreshBtn.call(this);
    },
    /** onClickOfLogOut defined for jrmgmtheader **/
    AS_UWI_b48b864a89b24621bd8c9ab45f09f98e: function AS_UWI_b48b864a89b24621bd8c9ab45f09f98e(eventobject) {
        var self = this;
        fmgLogout();
    },
    /** onAddClick defined for jrmgmtheader **/
    AS_UWI_j786026f97f942afad8ad7d1cc8bcd0a: function AS_UWI_j786026f97f942afad8ad7d1cc8bcd0a(param) {
        var self = this;
        this.onAddClick(param);
    },
    /** onBellClick defined for jrmgmtheader **/
    AS_UWI_i1492552b8454295914be88b92e2fa59: function AS_UWI_i1492552b8454295914be88b92e2fa59(param) {
        var self = this;
        this.onNotificationBellClick(param);
    },
    /** onLogOutClick defined for jrmgmtheader **/
    AS_UWI_a1ec3a9f842b46fc97bea1a913bb407e: function AS_UWI_a1ec3a9f842b46fc97bea1a913bb407e(param) {
        var self = this;
        this.onLogOutClick(param);
    },
    /** onClick defined for btnNotify **/
    AS_Button_b57cecbbb3824538a95782e6c68da03d: function AS_Button_b57cecbbb3824538a95782e6c68da03d(eventobject) {
        var self = this;
        this.notify();
    },
    /** allTabOnClick defined for tabpane **/
    AS_UWI_f4d1aac08cf84e3d84e1e8f61610ff03: function AS_UWI_f4d1aac08cf84e3d84e1e8f61610ff03(eventobject) {
        var self = this;
        return self.onClickForAllJourneys.call(this);
    },
    /** liveTabOnClick defined for tabpane **/
    AS_UWI_b9a975eb2e0444478ea830e8aa80d91a: function AS_UWI_b9a975eb2e0444478ea830e8aa80d91a(eventobject) {
        var self = this;
        return self.onClickForLiveJourneys.call(this);
    },
    /** incidentTabOnClick defined for tabpane **/
    AS_UWI_b895d26363dd4362bcca5ebe7f0fae72: function AS_UWI_b895d26363dd4362bcca5ebe7f0fae72(eventobject) {
        var self = this;
        return self.onClickForIncidentJourneys.call(this);
    },
    /** delayTabOnClick defined for tabpane **/
    AS_UWI_fe41a29704c24646bd04c502239cb139: function AS_UWI_fe41a29704c24646bd04c502239cb139(eventobject) {
        var self = this;
        return self.onClickForDelayJourneys.call(this);
    },
    /** onTouchStart defined for tabpane **/
    AS_UWI_af2db03d134f47e28f7d937b99e7d15b: function AS_UWI_af2db03d134f47e28f7d937b99e7d15b(eventobject, x, y) {
        var self = this;
    },
    /** onSelectionOfTrackingPoints defined for searchnfilter **/
    AS_UWI_be962e8d47ca44bbad6ac766e74cc63b: function AS_UWI_be962e8d47ca44bbad6ac766e74cc63b(eventobject) {
        var self = this;
        return self.trackingPointsOnSelectionCallBack.call(this, eventobject);
    },
    /** onDoneOfTxtBoxUser defined for searchnfilter **/
    AS_UWI_cc729a4bce26407b931a50744ecddaa0: function AS_UWI_cc729a4bce26407b931a50744ecddaa0(eventobject) {
        var self = this;
        return self.filterBySearchBox.call(this, eventobject);
    },
    /** onSelectionCallBack defined for searchnfilter **/
    AS_UWI_hf26053530b44be8a82ab81691e661fa: function AS_UWI_hf26053530b44be8a82ab81691e661fa(eventobject) {
        var self = this;
        return self.onSelectionCallBack.call(this, eventobject);
    },
    /** onSelectionOfTrackingPointsSegment defined for searchnfilter **/
    AS_UWI_adc89a31cd9d42c59c14efa883a7b57c: function AS_UWI_adc89a31cd9d42c59c14efa883a7b57c(eventobject) {
        var self = this;
        return self.trackingPointsSegmentOnclick.call(this, eventobject);
    },
    /** closeFilter defined for searchnfilter **/
    AS_UWI_c298512c399548a7b7a69d76b44a73dd: function AS_UWI_c298512c399548a7b7a69d76b44a73dd(eventobject) {
        var self = this;
        return self.closeFilter.call(this);
    },
    /** closeSearch defined for searchnfilter **/
    AS_UWI_e8b65465ec5a4bb586e9612ff504defd: function AS_UWI_e8b65465ec5a4bb586e9612ff504defd(eventobject) {
        var self = this;
        return self.closeSearch.call(this);
    },
    /** onRowClick defined for segJourneyList **/
    AS_Segment_ff39eb080d91432b8e795d455b73ea4f: function AS_Segment_ff39eb080d91432b8e795d455b73ea4f(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onJourneyCardClick.call(this);
    },
    /** onClickOfCreateCheckInBtn defined for journeydetail **/
    AS_UWI_b44b68f718674cf79bfce23916b9d888: function AS_UWI_b44b68f718674cf79bfce23916b9d888(eventobject) {
        var self = this;
        return self.onClickOfCreateCheckInBtn.call(this);
    },
    /** onBackClick defined for journeydetail **/
    AS_UWI_c5da25c5417949619c75f4d5f3b61c21: function AS_UWI_c5da25c5417949619c75f4d5f3b61c21(param) {
        var self = this;
        this.onJourneyDetailBack(param);
    },
    /** actionOfChangeETABtn defined for journeydetail **/
    AS_UWI_bb69736aa78c4ff98c2341b70f7eb166: function AS_UWI_bb69736aa78c4ff98c2341b70f7eb166(param) {
        var self = this;
        this.actionOfChangeETA();
    },
    /** actionOfCloseJourneyBtn defined for journeydetail **/
    AS_UWI_b7eb136173be48d6858d7a3792c08317: function AS_UWI_b7eb136173be48d6858d7a3792c08317(param) {
        var self = this;
        this.actionOfCloseJourney();
    },
    /** onClick defined for flxCloseNotificationMsg **/
    AS_FlexContainer_f9751b35941e48eda431984dd5429073: function AS_FlexContainer_f9751b35941e48eda431984dd5429073(eventobject) {
        var self = this;
        this.onNotificationCloseClick();
    },
    /** onClickOfNoContinueAction defined for escalationpolicy **/
    AS_UWI_h26099c71eb74b7e90f8985714787583: function AS_UWI_h26099c71eb74b7e90f8985714787583(eventobject) {
        var self = this;
        return self.onClickOfNoContinueAction.call(this);
    },
    /** onClickofYesContinueAction defined for escalationpolicy **/
    AS_UWI_d6225be8372c43fbafef78ef9ffb9a5a: function AS_UWI_d6225be8372c43fbafef78ef9ffb9a5a(eventobject) {
        var self = this;
        return self.onClickofYesContinueAction.call(this);
    },
    /** onClickOfYesCancelAction defined for escalationpolicy **/
    AS_UWI_c9fb0a45516d4a06a88bb4cb521d9199: function AS_UWI_c9fb0a45516d4a06a88bb4cb521d9199(eventobject) {
        var self = this;
        return self.onClickOfYesCancelAction.call(this);
    },
    /** onClickOfNoCancelAction defined for escalationpolicy **/
    AS_UWI_f323da83d81b451f8e1bdb73ddc33b10: function AS_UWI_f323da83d81b451f8e1bdb73ddc33b10(eventobject) {
        var self = this;
        return self.onClickOfNoCancelAction.call(this);
    },
    /** onClickOfFlxCancel defined for escalationpolicy **/
    AS_UWI_d0f10c94b0344f5b891789b0d76dc80d: function AS_UWI_d0f10c94b0344f5b891789b0d76dc80d(eventobject) {
        var self = this;
        return self.onClickOfYesCancelAction.call(this);
    },
    /** onClickOfContactDriverCancel defined for escalationpolicy **/
    AS_UWI_fcac8f9a51b14028bfe32d22f295ede4: function AS_UWI_fcac8f9a51b14028bfe32d22f295ede4(eventobject) {
        var self = this;
        return self.onClickOfYesCancelAction.call(this);
    },
    /** onClickOfUpdateETA defined for ETAReporting **/
    AS_UWI_d63b8ae9a0d447cca32abc2ace40ab51: function AS_UWI_d63b8ae9a0d447cca32abc2ace40ab51(eventobject) {
        var self = this;
        this.onClickOfUpdateETAConformBtn();
    },
    /** onClickOfUpdateETACancel defined for ETAReporting **/
    AS_UWI_ib866057f3684175914841f498b8dd82: function AS_UWI_ib866057f3684175914841f498b8dd82(eventobject) {
        var self = this;
        this.onClickOfUpdateETACancel();
    },
    /** OnClickOfTerminateJourneyConform defined for terminateJourney **/
    AS_UWI_f592aec7a5b7468099a9621941e42083: function AS_UWI_f592aec7a5b7468099a9621941e42083(eventobject) {
        var self = this;
        return self.actionOfTerminateJourneyConform.call(this);
    },
    /** onClickOfTerminateJourneyCancel defined for terminateJourney **/
    AS_UWI_d73cad65855546e6a6740b73018e0284: function AS_UWI_d73cad65855546e6a6740b73018e0284(eventobject) {
        var self = this;
        this.onClickOfTerminateJourneyCancelBtn();
    },
    /** onClick defined for btnCancel **/
    AS_Button_af8a6e50065c486693754ea18573eced: function AS_Button_af8a6e50065c486693754ea18573eced(eventobject) {
        var self = this;
        this.view.flxNotifyScreen.isVisible = false;
    },
    /** onClick defined for btnSend **/
    AS_Button_c6dfbb872c8d46669e57eca44f04dfd9: function AS_Button_c6dfbb872c8d46669e57eca44f04dfd9(eventobject) {
        var self = this;
        this.pushMessage();
    },
    /** preShow defined for frmJourneyList **/
    AS_Form_b2ff41a7dfef4076a7d6f6811c686f68: function AS_Form_b2ff41a7dfef4076a7d6f6811c686f68(eventobject) {
        var self = this;
        self.onFormPreSHow.call(this);
        setAllCallbacks(this.onlinePushNotification, this.offlinePushNotification);
        registerKMS();
    },
    /** postShow defined for frmJourneyList **/
    AS_Form_h753595f0f374d7dab4279b72929e2ef: function AS_Form_h753595f0f374d7dab4279b72929e2ef(eventobject) {
        var self = this;
        this.destroyPreviousForms();
    }
});