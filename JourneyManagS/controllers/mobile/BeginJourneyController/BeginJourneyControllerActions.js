define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_da8909a628154a16b0ca023d96ea74e9: function AS_FlexContainer_da8909a628154a16b0ca023d96ea74e9(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmMyJourneys");
        ntf.navigate();
    },
    /** onClick defined for CopybtnSubmit0hd82445071ce4b **/
    AS_Button_eadd5d7abb224e7097b1214baf458ec0: function AS_Button_eadd5d7abb224e7097b1214baf458ec0(eventobject) {
        var self = this;
        this.view.flxBeginJourneySelectVehicle.isVisible = true;
    },
    /** onClick defined for CopyFlexContainer0f7f4b5024bcc44 **/
    AS_FlexContainer_dc5fba53aa9b43ea9f461ac44757bf2f: function AS_FlexContainer_dc5fba53aa9b43ea9f461ac44757bf2f(eventobject) {
        var self = this;
        if (this.view.flxCheckBox.isVisible == true) {
            this.view.flxCheckBox.isVisible = false;
        } else {
            this.view.flxCheckBox.isVisible = true;
        }
    },
    /** onClick defined for CopyFlexContainer0d52abf4a758a40 **/
    AS_FlexContainer_ed0ac56ee85a4e85aa71020fdae1a31c: function AS_FlexContainer_ed0ac56ee85a4e85aa71020fdae1a31c(eventobject) {
        var self = this;
        if (this.view.flxCheckBox.isVisible == true) {
            this.view.flxCheckBox.isVisible = false;
        } else {
            this.view.flxCheckBox.isVisible = true;
        }
    },
    /** onClick defined for CopyFlexContainer0dec21020acd342 **/
    AS_FlexContainer_e958f6a4f03d467a95a82b5be745aa7c: function AS_FlexContainer_e958f6a4f03d467a95a82b5be745aa7c(eventobject) {
        var self = this;
        if (this.view.flxCheckBox1.isVisible == true) {
            this.view.flxCheckBox1.isVisible = false;
        } else {
            this.view.flxCheckBox1.isVisible = true;
        }
    },
    /** onClick defined for CopyFlexContainer0ef86fc2d7bec48 **/
    AS_FlexContainer_jbe711f8fce84c27a4b70a6df858e771: function AS_FlexContainer_jbe711f8fce84c27a4b70a6df858e771(eventobject) {
        var self = this;
        if (this.view.flxCheckBox1.isVisible == true) {
            this.view.flxCheckBox1.isVisible = false;
        } else {
            this.view.flxCheckBox1.isVisible = true;
        }
    },
    /** onClick defined for flxCheckBox31 **/
    AS_FlexContainer_a5db289b62bc43ff92515ea3b80b9450: function AS_FlexContainer_a5db289b62bc43ff92515ea3b80b9450(eventobject) {
        var self = this;
        if (this.view.flxCheckBox3.isVisible == true) {
            this.view.flxCheckBox3.isVisible = false;
            this.view.flxCheckBox4.isVisible = true;
        } else {
            this.view.flxCheckBox3.isVisible = true;
            this.view.flxCheckBox4.isVisible = false;
        }
    },
    /** onClick defined for CopyFlexContainer0a5df3b93e66d45 **/
    AS_FlexContainer_f0cbd330a84b4951a7dc71c274d7c672: function AS_FlexContainer_f0cbd330a84b4951a7dc71c274d7c672(eventobject) {
        var self = this;
        if (this.view.flxCheckBox4.isVisible == true) {
            this.view.flxCheckBox4.isVisible = false;
            this.view.flxCheckBox3.isVisible = true;
        } else {
            this.view.flxCheckBox4.isVisible = true;
            this.view.flxCheckBox3.isVisible = false;
        }
    },
    /** onClick defined for btnSubmit **/
    AS_Button_bfc664357d1b4e808634326e11a23c3a: function AS_Button_bfc664357d1b4e808634326e11a23c3a(eventobject) {
        var self = this;
        try {
            var x = new kony.mvc.Navigation("frmONJourney");
            x.navigate();
        } catch (err) {
            alert(err);
        }
    },
    /** onRowClick defined for segmentPersonalCar **/
    AS_Segment_da99eaa38031498fbfd640a5b380ea25: function AS_Segment_da99eaa38031498fbfd640a5b380ea25(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.view.flxNewJourneyVehiclePersonal.isVisible = true;
        this.view.flxNewJourneyRouteSelectVehicle.isVisible = false;
    },
    /** onRowClick defined for segmentCompanyCar **/
    AS_Segment_abf797feb6914dc4817a3c7d4e689768: function AS_Segment_abf797feb6914dc4817a3c7d4e689768(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.view.flxNewJourneyVehiclePersonal.isVisible = true;
        this.view.flxNewJourneyRouteSelectVehicle.isVisible = false;
    },
    /** onClick defined for btnEdit **/
    AS_Button_a283ff985879431aad6c9b3925f2d076: function AS_Button_a283ff985879431aad6c9b3925f2d076(eventobject) {
        var self = this;
        this.view.flxBeginJourneySelectVehicle.isVisible = false;
        this.view.flxAddNewVehicle.isVisible = true;
    },
    /** onClick defined for btnDoneOnSelectVehicle **/
    AS_Button_j875dd41d89a4c0186e11d1ebffae4d7: function AS_Button_j875dd41d89a4c0186e11d1ebffae4d7(eventobject) {
        var self = this;
        this.view.flxAddNewVehicle.isVisible = false;
        this.view.flxSelectVehicleContainer.isVisible = false;
        this.view.flxNewJourneyReady.isVisible = true;
    }
});