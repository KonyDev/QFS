define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_da847ea9cb41404eb49aa480b866474f: function AS_FlexContainer_da847ea9cb41404eb49aa480b866474f(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyTraveller");
        ntf.navigate();
    },
    /** onRowClick defined for segDeparturePoints **/
    AS_Segment_a19725197d8f4c1dad9cf15d746a61e2: function AS_Segment_a19725197d8f4c1dad9cf15d746a61e2(eventobject, sectionNumber, rowNumber) {
        var self = this;
        // ApplicationData1.SavingData.DeparturePoint =  (this.view.segDeparturePoints.selectedRowItems[0].lblDeparturePoints);
        this.view.flxNewJourneyRoute.isVisible = false;
        this.view.flxNewJourneyRoute2.isVisible = true;
        //Setting the JSONVariable
        ApplicationData1.SavingData.DeparturePoint = (this.view.segDeparturePoints.selectedRowItems[0].lblDeparturePoints);
        this.view.HeaderEntry2.text = ApplicationData1.SavingData.DeparturePoint;
        //Setting the MasterData of the Segment to the ListBox.
        // for(var i=0;i<this.view.lstBoxTrackingPoints.masterDataMap[0].length;i++)
        //   {
        //     if(this.view.lstBoxTrackingPoints.masterDataMap[0][i].myvalue == ApplicationData1.SavingData.TrackingPoint)
        //       {
        //         this.view.lstBoxTrackingPoints.selectedKey = (this.view.lstBoxTrackingPoints.masterDataMap[0][i].mykey);
        //       }
        //   }
    },
    /** onTouchEnd defined for HeaderEntry2 **/
    AS_UWI_c27c4bd1e432414a9de8d00075e4e055: function AS_UWI_c27c4bd1e432414a9de8d00075e4e055(eventobject, x, y) {
        var self = this;
        alert(ApplicationData1.SavingData.DeparturePoint);
    },
    /** onRowClick defined for segArrivalPoints **/
    AS_Segment_f8bafcecb74f4f7497c20bb3124ff678: function AS_Segment_f8bafcecb74f4f7497c20bb3124ff678(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.view.flxNewJourneyRoute.isVisible = false;
        this.view.flxNewJourneyRoute2.isVisible = false;
        this.view.flxNewJourneyReady.isVisible = true;
        ApplicationData1.SavingData.ArrivalPoint = (this.view.segArrivalPoints.selectedRowItems[0].lblDeparturePoints);
        this.view.lblFromArrival.text = ApplicationData1.SavingData.ArrivalPoint;
        this.view.lblFromDeparture.text = ApplicationData1.SavingData.DeparturePoint;
    },
    /** onClick defined for CopybtnCancel0g1254084c13249 **/
    AS_Button_i55eeb04ba1a4527922b589901e72265: function AS_Button_i55eeb04ba1a4527922b589901e72265(eventobject) {
        var self = this;
        this.view.flxNewJourneyReady.isVisible = false;
        this.view.flxNewJourneyRoute.isVisible = true;
    },
    /** onClick defined for btnSubmit **/
    AS_Button_b484c3b7d28e4640916aa54fbc6b52a6: function AS_Button_b484c3b7d28e4640916aa54fbc6b52a6(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyTracking");
        ntf.navigate();
    },
    /** preShow defined for frmNewJourneyRoute **/
    AS_Form_f4f725bb4dc1413fb1942f48b75006ca: function AS_Form_f4f725bb4dc1413fb1942f48b75006ca(eventobject) {
        var self = this;
        this.view.flxNewJourneyRoute.isVisible = true;
        this.view.flxNewJourneyReady.isVisible = false;
        this.view.flxNewJourneyRoute2.isVisible = false;
    },
    /** postShow defined for frmNewJourneyRoute **/
    AS_Form_a497d684b0b24b3b8c6a6a68aec15b39: function AS_Form_a497d684b0b24b3b8c6a6a68aec15b39(eventobject) {
        var self = this;
        this.setSegmentDeparturePoints();
    }
});