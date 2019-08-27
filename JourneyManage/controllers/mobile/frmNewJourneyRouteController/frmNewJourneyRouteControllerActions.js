define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_da847ea9cb41404eb49aa480b866474f: function AS_FlexContainer_da847ea9cb41404eb49aa480b866474f(eventobject) {
        var self = this;
        this.navigateBack();
    },
    /** onClick defined for mapJourney **/
    AS_Map_jcc18b7d72c749fa912a0ac9dd352988: function AS_Map_jcc18b7d72c749fa912a0ac9dd352988(eventobject, location) {
        var self = this;
        this.onMapClick(eventobject, location);
    },
    /** onClick defined for flexSwitchToSearch **/
    AS_FlexContainer_fc94401c9b33477084688468d704a858: function AS_FlexContainer_fc94401c9b33477084688468d704a858(eventobject) {
        var self = this;
        this.view.flexDeparturePoint.isVisible = true;
        this.view.flexSwitchToSearch.isVisible = false;
    },
    /** onClick defined for flexDepartureChooseOnMap **/
    AS_FlexContainer_ie59ac354a1a4fb7a209336c10084f67: function AS_FlexContainer_ie59ac354a1a4fb7a209336c10084f67(eventobject) {
        var self = this;
        return self.onClickChooseOnMap.call(this);
    },
    /** onTextChange defined for txtBoxDeparture **/
    AS_TextField_fe76b612ddd5485fa3852a2297e94bf0: function AS_TextField_fe76b612ddd5485fa3852a2297e94bf0(eventobject, changedtext) {
        var self = this;
        this.onDeparturePointPlaceSearch();
    },
    /** onRowClick defined for segDeparturePoints **/
    AS_Segment_cbb939f7e85546bd995f87adc14ecc66: function AS_Segment_cbb939f7e85546bd995f87adc14ecc66(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onDepartureAddressSelection(eventobject, rowNumber, sectionNumber);
    },
    /** onClick defined for flexDeparturePoint **/
    AS_FlexContainer_d7839bc7e40e4a44bd4a9743fe476134: function AS_FlexContainer_d7839bc7e40e4a44bd4a9743fe476134(eventobject) {
        var self = this;
        kony.print("disabled map click by giving this flex a dummy onclick");
    },
    /** onDateSelected1 defined for datepicker **/
    AS_UWI_a1cad10ef4034d36a70e2a9132780d3d: function AS_UWI_a1cad10ef4034d36a70e2a9132780d3d(selectedDate) {
        var self = this;
        this.onDepartureDateSelection(selectedDate);
    },
    /** onTimeSelected defined for timePicker **/
    AS_UWI_d94005f3b93145cab9cd294779a11f5e: function AS_UWI_d94005f3b93145cab9cd294779a11f5e(selectedTime) {
        var self = this;
        this.onDepartureTimeSelected(selectedTime);
    },
    /** onClick defined for flxDepartureDate **/
    AS_FlexContainer_ce74d3b2985e403c849461168b7886ca: function AS_FlexContainer_ce74d3b2985e403c849461168b7886ca(eventobject) {
        var self = this;
        kony.print("disabled map click by giving this flex a dummy onclick");
    },
    /** onClick defined for flexSwitchToSearchArrival **/
    AS_FlexContainer_fc1dfe4c3adb4689a926cbffd1b26687: function AS_FlexContainer_fc1dfe4c3adb4689a926cbffd1b26687(eventobject) {
        var self = this;
        this.view.flxArrivalPoint.isVisible = true;
        this.view.flexSwitchToSearchArrival.isVisible = false;
    },
    /** onClick defined for flexArrivalChooseOnMap **/
    AS_FlexContainer_a5c88c1ba2c3429dba177687983de4cb: function AS_FlexContainer_a5c88c1ba2c3429dba177687983de4cb(eventobject) {
        var self = this;
        return self.onClickChooseOnMap.call(this);
    },
    /** onTextChange defined for txtBoxArraival **/
    AS_TextField_b5c99d4c0fe048efaabdf9dc2ee15243: function AS_TextField_b5c99d4c0fe048efaabdf9dc2ee15243(eventobject, changedtext) {
        var self = this;
        this.onArraivalPointPlaceSearch();
    },
    /** onRowClick defined for segArrivalPoints **/
    AS_Segment_i05c5adc0a3a42429472126a379a61f5: function AS_Segment_i05c5adc0a3a42429472126a379a61f5(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onArraivalAddressSelection(eventobject, rowNumber, sectionNumber);
    },
    /** onClick defined for flxArrivalPoint **/
    AS_FlexContainer_fbf636cd9b824b32b5a44d46411f283a: function AS_FlexContainer_fbf636cd9b824b32b5a44d46411f283a(eventobject) {
        var self = this;
        kony.print("disabled map click by giving this flex a dummy onclick");
    },
    /** onDateSelectionDone defined for arrivalDatepicker **/
    AS_UWI_h3b68bc2a9cf4acb936ebc50b4a1a0a0: function AS_UWI_h3b68bc2a9cf4acb936ebc50b4a1a0a0() {
        var self = this;
        var dateString = "";
        this.onArrivalDateSelection(dateString);
    },
    /** onDateSelected1 defined for datepickerArrival **/
    AS_UWI_bc9b0473ad6c4b00b2950f5563ccc635: function AS_UWI_bc9b0473ad6c4b00b2950f5563ccc635(selectedDate) {
        var self = this;
        this.onArrivalDateSelection(selectedDate);
    },
    /** onTimeSelected defined for timePicker1 **/
    AS_UWI_ea82b322292e4648859f9a4853d09dfa: function AS_UWI_ea82b322292e4648859f9a4853d09dfa(selectedTime) {
        var self = this;
        this.onArrivalTimeSelected(selectedTime);
    },
    /** onTextChange defined for CopytxtBoxArraival0j622c141846846 **/
    AS_TextField_c93e8a4fb09b4abeb5f1b87ce61d0286: function AS_TextField_c93e8a4fb09b4abeb5f1b87ce61d0286(eventobject, changedtext) {
        var self = this;
        this.onArraivalPointPlaceSearch();
    },
    /** onRowClick defined for CopysegArrivalPoints0i1f6502c3cad40 **/
    AS_Segment_d8097a01db3144478c55f11327fe130a: function AS_Segment_d8097a01db3144478c55f11327fe130a(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onArraivalAddressSelection.call(this, null, null, null);
    },
    /** onClick defined for flexEditFrom **/
    AS_FlexContainer_e950951fb05346ccaba07dfe22fcb715: function AS_FlexContainer_e950951fb05346ccaba07dfe22fcb715(eventobject) {
        var self = this;
        this.onEditIconClick("from");
    },
    /** onClick defined for flexEditTo **/
    AS_FlexContainer_d3a6aa9a481a4c17bdf7d29f8fb72fa0: function AS_FlexContainer_d3a6aa9a481a4c17bdf7d29f8fb72fa0(eventobject) {
        var self = this;
        this.onEditIconClick("to");
    },
    /** onClick defined for flexEditStart **/
    AS_FlexContainer_jfb05182ae7641c896fc0df2a613b387: function AS_FlexContainer_jfb05182ae7641c896fc0df2a613b387(eventobject) {
        var self = this;
        this.onEditIconClick("start");
    },
    /** onClick defined for flexEditArrival **/
    AS_FlexContainer_cc950c227b5f42bd99128f57d0bf0742: function AS_FlexContainer_cc950c227b5f42bd99128f57d0bf0742(eventobject) {
        var self = this;
        this.onEditIconClick("arrival");
    },
    /** onSelection defined for lstTimeCheckins **/
    AS_ListBox_d5df47b75e6e426a92018a89f73714ae: function AS_ListBox_d5df47b75e6e426a92018a89f73714ae(eventobject) {
        var self = this;
        try {
            debugger;
            this.selectedCheckinTypeUpdate = parseInt(this.view.lstTimeCheckins.selectedKey);
            if (this.selectedCheckinTypeUpdate == 3) {
                this.view.lblCheckinTimeFrame.isVisible = false;
                this.view.flxTimeframeSelectorRoot.isVisible = false;
                this.view.lstTimeFrameForCheckins.selectedKey = null;
            } else {
                this.view.lblCheckinTimeFrame.isVisible = true;
                this.view.flxTimeframeSelectorRoot.isVisible = true;
                this.view.lstTimeFrameForCheckins.selectedKey = 7;
            }
        } catch (err) {
            alert(err);
        }
    },
    /** onSelection defined for lstTimeFrameForCheckins **/
    AS_ListBox_a51862f57dd442f5a6702e7027454c23: function AS_ListBox_a51862f57dd442f5a6702e7027454c23(eventobject) {
        var self = this;
        try {
            debugger;
            this.selectedCheckinRowIdUpdate = parseInt(this.view.lstTimeFrameForCheckins.selectedKey);
        } catch (err) {
            alert(err.message);
        }
    },
    /** onClick defined for btnEditDetail **/
    AS_Button_j939b0086bb64f9f837ecae7c5d5b461: function AS_Button_j939b0086bb64f9f837ecae7c5d5b461(eventobject) {
        var self = this;
        this.onEditDetail();
    },
    /** onClick defined for btnNext **/
    AS_Button_j56f5a9830634a828cd95348f943f3ea: function AS_Button_j56f5a9830634a828cd95348f943f3ea(eventobject) {
        var self = this;
        this.proceedNext();
    },
    /** onClick defined for flexEditClose **/
    AS_FlexContainer_gd3a404471e94a09ad7b1a0fb54449e2: function AS_FlexContainer_gd3a404471e94a09ad7b1a0fb54449e2(eventobject) {
        var self = this;
        this.onClickEditClose();
    },
    /** onClick defined for btnSearchAgain **/
    AS_Button_babafa5b96104210919046accc6dae0a: function AS_Button_babafa5b96104210919046accc6dae0a(eventobject) {
        var self = this;
        return self.onClickBackToSearch.call(this);
    },
    /** onClick defined for btnConfirmAddressSelection **/
    AS_Button_a11af82f9a3749049892a52ffa7b98b9: function AS_Button_a11af82f9a3749049892a52ffa7b98b9(eventobject) {
        var self = this;
        return self.onClickChoosenPointConfirm.call(this);
    },
    /** onClick defined for flxConfirmAddressSelection **/
    AS_FlexContainer_a63b560b4cfa42718a3bdc778964f4f2: function AS_FlexContainer_a63b560b4cfa42718a3bdc778964f4f2(eventobject) {
        var self = this;
        kony.print("disabled map click by giving this flex a dummy onclick");
    },
    /** postShow defined for frmNewJourneyRoute **/
    AS_Form_a497d684b0b24b3b8c6a6a68aec15b39: function AS_Form_a497d684b0b24b3b8c6a6a68aec15b39(eventobject) {
        var self = this;
        this.onFormPostShow();
    }
});