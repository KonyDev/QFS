define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** OnProceedClick defined for alertpopup **/
    AS_UWI_h409e10aa8a14180b233765db3caa0e4: function AS_UWI_h409e10aa8a14180b233765db3caa0e4(eventobject) {
        var self = this;
        this.navigateToMyJourney();
    },
    /** onClick defined for flxBack **/
    AS_FlexContainer_fb66606b76d4497299c8937530d8f910: function AS_FlexContainer_fb66606b76d4497299c8937530d8f910(eventobject) {
        var self = this;
        this.naviagteToFormMyJourney();
    },
    /** onClick defined for flxDepartureTitleContainer **/
    AS_FlexContainer_b9579e588269455a8dde2c24ae0ba217: function AS_FlexContainer_b9579e588269455a8dde2c24ae0ba217(eventobject) {
        var self = this;
        this.updateDepartureAddress();
    },
    /** onClick defined for flxDepartureTimeTitle **/
    AS_FlexContainer_a92fc5e26ebc4f3d9a0f25b3f91d2e17: function AS_FlexContainer_a92fc5e26ebc4f3d9a0f25b3f91d2e17(eventobject) {
        var self = this;
        this.showSelectorFlex("flxDepartureDateTime");
    },
    /** onClick defined for flxArrivalTitleContainer **/
    AS_FlexContainer_h0efc3cbdc7b403690b91b443bd1ee11: function AS_FlexContainer_h0efc3cbdc7b403690b91b443bd1ee11(eventobject) {
        var self = this;
        this.updateArrivalAddress();
    },
    /** onClick defined for flxArrivalTimeTitle **/
    AS_FlexContainer_b41a7aac897048f1adbcbb9702d8a02c: function AS_FlexContainer_b41a7aac897048f1adbcbb9702d8a02c(eventobject) {
        var self = this;
        this.showSelectorFlex("flxArrivalDateTime");
    },
    /** onClick defined for flxDepartureDetails **/
    AS_FlexContainer_dc5fe0cea57e42f1a3d774453311f7e6: function AS_FlexContainer_dc5fe0cea57e42f1a3d774453311f7e6(eventobject) {
        var self = this;
        alert("Clicked");
    },
    /** onClick defined for flxCrewInfo **/
    AS_FlexContainer_ebec010cf0eb454db614dfed5a687f1a: function AS_FlexContainer_ebec010cf0eb454db614dfed5a687f1a(eventobject) {
        var self = this;
        //this.onDriverPassengerClick();
        this.showSelectorFlex("flxUserAndPassenger");
    },
    /** onClick defined for flxTrackingPointDetails **/
    AS_FlexContainer_icc7ec77d8664f1d88e810a49921a0a8: function AS_FlexContainer_icc7ec77d8664f1d88e810a49921a0a8(eventobject) {
        var self = this;
        //this.TrackingDetailsOnClickEvent();
        this.showTrackingPointSelector();
    },
    /** onClick defined for flxCheckPointInfo **/
    AS_FlexContainer_f9be124d7ebe48deb0cd8238d9cc946a: function AS_FlexContainer_f9be124d7ebe48deb0cd8238d9cc946a(eventobject) {
        var self = this;
        //this.onDriverPassengerClick();
        this.showSelectorFlex("flxSelectCheckInTypeAndInterval");
    },
    /** onClick defined for flxVehicleDetails **/
    AS_FlexContainer_b8f98deda89d4df9b0d93671df237651: function AS_FlexContainer_b8f98deda89d4df9b0d93671df237651(eventobject) {
        var self = this;
        //this.VehicleDetailsOnClickEvent();
        this.showSelectorFlex("flxSelectVehicle");
    },
    /** onClick defined for btnSelectVehicle **/
    AS_Button_h057b5084be541358de626b937d0802e: function AS_Button_h057b5084be541358de626b937d0802e(eventobject) {
        var self = this;
        this.showSelectorFlex("flxSelectVehicle");
        //this.view.flxBeginJourneySelectVehicle.isVisible = true;
    },
    /** onClick defined for btnSubmit **/
    AS_Button_fc247e3a560e423cbe7a9e8818eca5b4: function AS_Button_fc247e3a560e423cbe7a9e8818eca5b4(eventobject) {
        var self = this;
        this.updateJourney();
    },
    /** onRowClick defined for segmentPersonalCar **/
    AS_Segment_d57d97e15d6246a0901051b4318b5b5e: function AS_Segment_d57d97e15d6246a0901051b4318b5b5e(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onCarSegementRowClick(eventobject);
    },
    /** onClick defined for flxClose **/
    AS_FlexContainer_ba4dd6405630490f84b21e795123a89b: function AS_FlexContainer_ba4dd6405630490f84b21e795123a89b(eventobject) {
        var self = this;
        this.hideSelectorFlex("flxSelectVehicle");
    },
    /** onClick defined for flxSelectVehicle **/
    AS_FlexContainer_e3bd7f098d6e429eb7a16dc0100bb7b8: function AS_FlexContainer_e3bd7f098d6e429eb7a16dc0100bb7b8(eventobject) {
        var self = this;
        return;
    },
    /** onClick defined for flxClose1 **/
    AS_FlexContainer_bc4fc5774a4645a1b32366526a755dad: function AS_FlexContainer_bc4fc5774a4645a1b32366526a755dad(eventobject) {
        var self = this;
        this.hideSelectorFlex("flxSelectCheckInTypeAndInterval");
    },
    /** onSelection defined for lstTimeCheckins **/
    AS_ListBox_bab58eeae7f34ef592dbde77de7d3066: function AS_ListBox_bab58eeae7f34ef592dbde77de7d3066(eventobject) {
        var self = this;
        this.onCheckInTypeSelection();
        return;
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
    AS_ListBox_ec087ac4a9384200b0eb6b8681cd436c: function AS_ListBox_ec087ac4a9384200b0eb6b8681cd436c(eventobject) {
        var self = this;
        this.onCheckInTimeFrameSelection();
        return;
    },
    /** onClick defined for btnUpdateCheckInTypeAndInterval **/
    AS_Button_b15e4b92b16142ed907856ec12e9a681: function AS_Button_b15e4b92b16142ed907856ec12e9a681(eventobject) {
        var self = this;
        this.hideSelectorFlex("flxSelectCheckInTypeAndInterval");
    },
    /** onClick defined for flxSelectCheckInTypeAndInterval **/
    AS_FlexContainer_ef82f8a7410e4a9a84b532a5d475bec1: function AS_FlexContainer_ef82f8a7410e4a9a84b532a5d475bec1(eventobject) {
        var self = this;
        return;
    },
    /** onClick defined for flxCloseTracking **/
    AS_FlexContainer_cc571ae63fe1422ab735f939f14fc909: function AS_FlexContainer_cc571ae63fe1422ab735f939f14fc909(eventobject) {
        var self = this;
        this.hideSelectorFlex("flxTrackingPoint");
    },
    /** onRowClick defined for segTrackingPoints **/
    AS_Segment_b79d0c75a70a4f6d967d562a54553261: function AS_Segment_b79d0c75a70a4f6d967d562a54553261(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onTrackingPointSelection();
        return;
        this.view.flxNewJourneyTracking.flxTracking1.isVisible = false;
        this.view.flxNewJourneyTracking.flxTracking2.isVisible = true;
        //Setting the JSONVariable
        ApplicationData1.SavingData.TrackingPoint = this.view.segTrackingPoints.selectedRowItems[0].lblTrackingPoint;
        //Setting the MasterData of the Segment to the ListBox.
        for (var i = 0; i < this.view.lstBoxTrackingPoints.masterDataMap[0].length; i++) {
            if (this.view.lstBoxTrackingPoints.masterDataMap[0][i].myvalue == ApplicationData1.SavingData.TrackingPoint) {
                this.view.lstBoxTrackingPoints.selectedKey = (this.view.lstBoxTrackingPoints.masterDataMap[0][i].mykey);
            }
        }
    },
    /** onClick defined for btnSubmitTrakingDetails **/
    AS_Button_dd44cea67db7498dabac622c395b2c67: function AS_Button_dd44cea67db7498dabac622c395b2c67(eventobject) {
        var self = this;
        this.updateTrackingDetails();
    },
    /** onClick defined for flxTrackingPoint **/
    AS_FlexContainer_jb71ea10136c4121bcbac07a269757bb: function AS_FlexContainer_jb71ea10136c4121bcbac07a269757bb(eventobject) {
        var self = this;
        return;
    },
    /** onClick defined for flxCloseUser **/
    AS_FlexContainer_ie040d60e2094ee9a848bc9de6de6c5c: function AS_FlexContainer_ie040d60e2094ee9a848bc9de6de6c5c(eventobject) {
        var self = this;
        this.hideSelectorFlex("flxUserAndPassenger");
    },
    /** onRowClick defined for segPassenger **/
    AS_Segment_jfeb2745fca64367ac742c8c99d6d09b: function AS_Segment_jfeb2745fca64367ac742c8c99d6d09b(eventobject, sectionNumber, rowNumber) {
        var self = this;
        //this.onSegPsngrRowClick();
    },
    /** onClick defined for btnAddPassenger **/
    AS_Button_d6a7db5214db4ed39c0e31af84df9e6e: function AS_Button_d6a7db5214db4ed39c0e31af84df9e6e(eventobject) {
        var self = this;
        this.addPassenger(" ", " ");
    },
    /** onClick defined for btnNextStep **/
    AS_Button_cbe8dc7b46764b738ea789cd4d0b9b51: function AS_Button_cbe8dc7b46764b738ea789cd4d0b9b51(eventobject) {
        var self = this;
        this.updateUserDetail();
    },
    /** onClick defined for flxUserAndPassenger **/
    AS_FlexContainer_j3570c4e8f8f4d84b90110d64c1912c5: function AS_FlexContainer_j3570c4e8f8f4d84b90110d64c1912c5(eventobject) {
        var self = this;
        return;
    },
    /** onClick defined for flxCloseRouteSelection **/
    AS_FlexContainer_j52caecda2cf4a5db7c16bacab92be74: function AS_FlexContainer_j52caecda2cf4a5db7c16bacab92be74(eventobject) {
        var self = this;
        this.hideSelectorFlex("flxRouteSelection");
    },
    /** onClick defined for mapJourney **/
    AS_Map_j0e7bfd769df4fcfadb1c4fb596e1b19: function AS_Map_j0e7bfd769df4fcfadb1c4fb596e1b19(eventobject, location) {
        var self = this;
    },
    /** onTextChange defined for txtBoxDeparture **/
    AS_TextField_ce94e76c5fc749179d1191647c65785d: function AS_TextField_ce94e76c5fc749179d1191647c65785d(eventobject, changedtext) {
        var self = this;
        this.onDeparturePointPlaceSearch();
    },
    /** onRowClick defined for segDeparturePoints **/
    AS_Segment_ca3df38e4cf548448170615a92cebe78: function AS_Segment_ca3df38e4cf548448170615a92cebe78(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onDepartureAddressSelection(eventobject, rowNumber, sectionNumber);
    },
    /** onTextChange defined for txtBoxArraival **/
    AS_TextField_j15345ae91b448bcbae6c1ae115a9b18: function AS_TextField_j15345ae91b448bcbae6c1ae115a9b18(eventobject, changedtext) {
        var self = this;
        this.onArraivalPointPlaceSearch();
    },
    /** onRowClick defined for segArrivalPoints **/
    AS_Segment_aa747f13b1c141fe81ddcbe1762c3b26: function AS_Segment_aa747f13b1c141fe81ddcbe1762c3b26(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onArraivalAddressSelection.call(this, eventobject, rowNumber, sectionNumber);
    },
    /** onClick defined for btnUpdateRoute **/
    AS_Button_c368435504bc407aa25eff82753c7d08: function AS_Button_c368435504bc407aa25eff82753c7d08(eventobject) {
        var self = this;
        this.onProceedClick();
    },
    /** onClick defined for flxRouteSelection **/
    AS_FlexContainer_e0505b09121d4d5488490723d70c6406: function AS_FlexContainer_e0505b09121d4d5488490723d70c6406(eventobject) {
        var self = this;
        return;
    },
    /** onClick defined for flxCloseDepartureDateTime **/
    AS_FlexContainer_ba899c8d42384a218192f5f5714ed92e: function AS_FlexContainer_ba899c8d42384a218192f5f5714ed92e(eventobject) {
        var self = this;
        this.hideSelectorFlex("flxDepartureDateTime");
    },
    /** onDateSelected1 defined for departureDatepicker **/
    AS_UWI_id574c91fb13440dacd831f7811cf7ad: function AS_UWI_id574c91fb13440dacd831f7811cf7ad(selectedDate) {
        var self = this;
        this.onDepartureDateSelection.call(this, selectedDate);
    },
    /** onTimeSelected defined for departureTimePicker **/
    AS_UWI_j0c6052f42e4450e9b30cb9cde99365a: function AS_UWI_j0c6052f42e4450e9b30cb9cde99365a(selectedTime) {
        var self = this;
        this.onDepartureTimeSelection.call(this, selectedTime);
    },
    /** onClick defined for btnSubmitDepartureDateTime **/
    AS_Button_f3431a1205d749ebac87d487c55fff0c: function AS_Button_f3431a1205d749ebac87d487c55fff0c(eventobject) {
        var self = this;
        this.hideSelectorFlex("flxDepartureDateTime");
    },
    /** onClick defined for flxCloseArrivalDateTime **/
    AS_FlexContainer_b8292ff6d6cd4c5581daba59fe012027: function AS_FlexContainer_b8292ff6d6cd4c5581daba59fe012027(eventobject) {
        var self = this;
        this.hideSelectorFlex("flxArrivalDateTime");
    },
    /** onDateSelected1 defined for arrivalDatePicker **/
    AS_UWI_c0bec114089c42059b7581f38e92703d: function AS_UWI_c0bec114089c42059b7581f38e92703d(selectedDate) {
        var self = this;
        this.onArrivalDateSelection.call(this, selectedDate);
    },
    /** onTimeSelected defined for arrivalTimePicker **/
    AS_UWI_f18fe1ea20214faaa8293dea1f5a60e6: function AS_UWI_f18fe1ea20214faaa8293dea1f5a60e6(selectedTime) {
        var self = this;
        this.onArrivalTimeString.call(this, selectedTime);
    },
    /** onClick defined for btnSubmitArrivalDateTime **/
    AS_Button_e3a132fd36cc443d9de97e72103eeb62: function AS_Button_e3a132fd36cc443d9de97e72103eeb62(eventobject) {
        var self = this;
        this.hideSelectorFlex("flxArrivalDateTime");
    },
    /** postShow defined for frmUpdateJourney **/
    AS_Form_ec12446027f04bc38084a0e8909364ed: function AS_Form_ec12446027f04bc38084a0e8909364ed(eventobject) {
        var self = this;
        this.onFormPostShow();
    },
    /** onClick defined for flxPopUps **/
    AS_FlexContainer_d8eb8fbe6a424208b5634c3bc149de54: function AS_FlexContainer_d8eb8fbe6a424208b5634c3bc149de54(eventobject) {
        var self = this;
        return;
    }
});