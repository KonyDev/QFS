define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnVehicleOptionOne **/
    AS_Button_c0c96c3dce8846a38a6ec4a40b0dd6a3: function AS_Button_c0c96c3dce8846a38a6ec4a40b0dd6a3(eventobject) {
        var self = this;
        this.view.FlxPersonalVehicleDetails.isVisible = false;
        this.view.FlxCompanyVehicleListBox.isVisible = true;
    },
    /** onClick defined for flxVehicleOptionOne **/
    AS_FlexContainer_d92c6534c62a4dfebabfeb9fd767d96a: function AS_FlexContainer_d92c6534c62a4dfebabfeb9fd767d96a(eventobject) {
        var self = this;
        this.selectVehicle(eventobject);
    },
    /** onSelection defined for listboxVehicleDetails **/
    AS_ListBox_j3635c98820546da927cd06d0b04f941: function AS_ListBox_j3635c98820546da927cd06d0b04f941(eventobject) {
        var self = this;
        this.selectedCompanyVehicle(eventobject);
    },
    /** onClick defined for btnVehicleOptionTwo **/
    AS_Button_b4e09ab756da4f8c9adecb5d3642a260: function AS_Button_b4e09ab756da4f8c9adecb5d3642a260(eventobject) {
        var self = this;
        this.view.FlxPersonalVehicleDetails.isVisible = true;
        this.view.FlxCompanyVehicleListBox.isVisible = false;
    },
    /** onClick defined for flxVehicleOptionTwo **/
    AS_FlexContainer_cd22b74e88fb47e4bf244c8a07ebd726: function AS_FlexContainer_cd22b74e88fb47e4bf244c8a07ebd726(eventobject) {
        var self = this;
        this.selectVehicle(eventobject);
    },
    /** onSelection defined for listboxPersonalVehicleDetails **/
    AS_ListBox_eebe2039b66c408d9ad3a303e2850173: function AS_ListBox_eebe2039b66c408d9ad3a303e2850173(eventobject) {
        var self = this;
        this.selectedCompanyVehicle(eventobject);
    },
    /** onClick defined for flxVehicleOptionThree **/
    AS_FlexContainer_j804b12ad4684ad5bc3d919834dcd44c: function AS_FlexContainer_j804b12ad4684ad5bc3d919834dcd44c(eventobject) {
        var self = this;
        this.selectVehicle(eventobject);
    },
    /** onClick defined for btnVehicleOptionFour **/
    AS_Button_af812e5d858d4528b9eb276715902e42: function AS_Button_af812e5d858d4528b9eb276715902e42(eventobject) {
        var self = this;
        this.view.FlxPersonalVehicleDetails.isVisible = true;
        this.view.FlxCompanyVehicleListBox.isVisible = false;
    },
    /** onClick defined for flxVehicleOptionFour **/
    AS_FlexContainer_f2d162fec6c74109b6c2515b0d440b61: function AS_FlexContainer_f2d162fec6c74109b6c2515b0d440b61(eventobject) {
        var self = this;
        this.selectVehicle(eventobject);
    },
    /** onClick defined for btnNext **/
    AS_Button_d4ad6539194c4d78a06ce7f67a36c7e6: function AS_Button_d4ad6539194c4d78a06ce7f67a36c7e6(eventobject) {
        var self = this;
        this.onClickOfNext();
    },
    /** onClick defined for btnSave **/
    AS_Button_he535bb4fd804441bb99c6fddbcc24e4: function AS_Button_he535bb4fd804441bb99c6fddbcc24e4(eventobject) {
        var self = this;
        this.updateData();
    },
    /** onClick defined for flxDashboard **/
    AS_FlexContainer_b65c8b24f9bb47c8bbba3a199a821246: function AS_FlexContainer_b65c8b24f9bb47c8bbba3a199a821246(eventobject) {
        var self = this;
        this.backToReview();
    },
    /** postShow defined for frmVehicleDetails **/
    AS_Form_d556725a10e84baab7b44a88e5a77309: function AS_Form_d556725a10e84baab7b44a88e5a77309(eventobject) {
        var self = this;
        this.fetchVehicleDetails();
    }
});