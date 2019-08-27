define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_da8909a628154a16b0ca023d96ea74e9: function AS_FlexContainer_da8909a628154a16b0ca023d96ea74e9(eventobject) {
        var self = this;
        this.onBackClick();
    },
    /** onClick defined for btnSelectVehicle **/
    AS_Button_eadd5d7abb224e7097b1214baf458ec0: function AS_Button_eadd5d7abb224e7097b1214baf458ec0(eventobject) {
        var self = this;
        this.showVehicleList();
        //this.view.flxBeginJourneySelectVehicle.isVisible = true;
    },
    /** onRowClick defined for segGuideAndMannual **/
    AS_Segment_dc6aa5400b5f45ecb5bc7479747f7784: function AS_Segment_dc6aa5400b5f45ecb5bc7479747f7784(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onGuideAndMannualSegClick();
    },
    /** onClick defined for flxStartJourney **/
    AS_FlexContainer_c05c96039c024287ab18d22495b9cbb2: function AS_FlexContainer_c05c96039c024287ab18d22495b9cbb2(eventobject) {
        var self = this;
        this.onClickButtonStartJourney();
    },
    /** onRowClick defined for segmentPersonalCar **/
    AS_Segment_da99eaa38031498fbfd640a5b380ea25: function AS_Segment_da99eaa38031498fbfd640a5b380ea25(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onCarSegementRowClick(eventobject);
    },
    /** onRowClick defined for segmentCompanyCar **/
    AS_Segment_abf797feb6914dc4817a3c7d4e689768: function AS_Segment_abf797feb6914dc4817a3c7d4e689768(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onCarSegementRowClick(eventobject);
    },
    /** onClick defined for btnAddNewVehicle **/
    AS_Button_a283ff985879431aad6c9b3925f2d076: function AS_Button_a283ff985879431aad6c9b3925f2d076(eventobject) {
        var self = this;
        this.showAddNewVehicleFlex();
        /*
this.view.flxBeginJourneySelectVehicle.isVisible = false;
this.view.flxAddNewVehicle.isVisible = true;*/
    },
    /** onClick defined for btnCreateVehicle **/
    AS_Button_j875dd41d89a4c0186e11d1ebffae4d7: function AS_Button_j875dd41d89a4c0186e11d1ebffae4d7(eventobject) {
        var self = this;
        this.createNewVehicle();
        /*

this.view.flxAddNewVehicle.isVisible = false;
this.view.flxSelectVehicleContainer.isVisible = false;
this.view.flxNewJourneyReady.isVisible = true;*/
    },
    /** onSelection defined for listBoxVehiclePersonal **/
    AS_ListBox_je5b3513777f4074946143ea075346d3: function AS_ListBox_je5b3513777f4074946143ea075346d3(eventobject) {
        var self = this;
        this.onVehicleSelectedFromListBox(eventobject);
    },
    /** onSelection defined for listBoxVehicleCompany **/
    AS_ListBox_df047ac6ff7f46c0813e9c20d68bdd94: function AS_ListBox_df047ac6ff7f46c0813e9c20d68bdd94(eventobject) {
        var self = this;
        this.onVehicleSelectedFromListBox(eventobject);
    },
    /** onClick defined for btnConfirmVehicle **/
    AS_Button_jca461ef63e747b781a7b6f38a95a707: function AS_Button_jca461ef63e747b781a7b6f38a95a707(eventobject) {
        var self = this;
        //this.proceedNext();
        this.getVehicleDetail(this.selectedVehicleId);
    },
    /** postShow defined for BeginJourney **/
    AS_Form_caeb9f1c4f74415ea9d3b252947812fd: function AS_Form_caeb9f1c4f74415ea9d3b252947812fd(eventobject) {
        var self = this;
        this.onFormPostShow();
    },
    /** onDeviceBack defined for BeginJourney **/
    AS_Form_be51c81b865e48369d5290ae31fb2af7: function AS_Form_be51c81b865e48369d5290ae31fb2af7(eventobject) {
        var self = this;
        this.onBackClick();
    }
});