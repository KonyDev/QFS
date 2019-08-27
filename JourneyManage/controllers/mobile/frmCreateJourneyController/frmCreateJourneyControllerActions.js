define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for CopyflxBack0eb1237f9aa094f **/
    AS_FlexContainer_adeafe2e5f4c4897a8b16beb9b2de71c: function AS_FlexContainer_adeafe2e5f4c4897a8b16beb9b2de71c(eventobject) {
        var self = this;
        this.onHamburgerMenuClick();
    },
    /** onClick defined for btnCreateReturnJourney **/
    AS_Button_g31cd1c391ca4bd9b8d68ff2307fa00a: function AS_Button_g31cd1c391ca4bd9b8d68ff2307fa00a(eventobject) {
        var self = this;
        this.returnJourney();
    },
    /** onClick defined for btnSubmit **/
    AS_Button_g9dbff46fcd045aab463560b66b00c85: function AS_Button_g9dbff46fcd045aab463560b66b00c85(eventobject) {
        var self = this;
        this.proceedToNextNavigate("frmMyJourneys");
    },
    /** onHamburgerMenuHide defined for slidingmenu **/
    AS_UWI_dfdffce582a64b7b82623c522a204b76: function AS_UWI_dfdffce582a64b7b82623c522a204b76() {
        var self = this;
        this.hideSlidingMenu();
    },
    /** onJourneyClick defined for slidingmenu **/
    AS_UWI_c3279e5eb0a74679b903c56bbe0e47a1: function AS_UWI_c3279e5eb0a74679b903c56bbe0e47a1() {
        var self = this;
        this.proceedToNextNavigate("frmMyJourneys");
    },
    /** preShow defined for frmCreateJourney **/
    AS_Form_h2e661853f5e4c2190f60f7c7157e627: function AS_Form_h2e661853f5e4c2190f60f7c7157e627(eventobject) {
        var self = this;
        return;
        this.view.lblToDeparture.text = ApplicationData1.SavingData.DeparturePoint;
        this.view.lblFromDeparture.text = ApplicationData1.SavingData.DeparturePoint;
        this.view.lblToArrival.text = ApplicationData1.SavingData.ArrivalPoint;
        this.view.lblFromArrival.text = ApplicationData1.SavingData.ArrivalPoint;
    },
    /** postShow defined for frmCreateJourney **/
    AS_Form_ca7ded0b38764cf6afd9213088421e83: function AS_Form_ca7ded0b38764cf6afd9213088421e83(eventobject) {
        var self = this;
        return self.onFormPostShow.call(this);
    }
});