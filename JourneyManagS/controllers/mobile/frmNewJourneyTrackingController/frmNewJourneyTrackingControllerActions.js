define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_b381f5414033463db47db9ab24fef561: function AS_FlexContainer_b381f5414033463db47db9ab24fef561(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyRoute");
        ntf.navigate();
    },
    /** onRowClick defined for segTrackingPoints **/
    AS_Segment_efecae9c7343484681e9c2f6296ceaa4: function AS_Segment_efecae9c7343484681e9c2f6296ceaa4(eventobject, sectionNumber, rowNumber) {
        var self = this;
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
    /** onClick defined for CopybtnSignIn0d5627f2b523048 **/
    AS_Button_i76561f6a03e43d585634a272a10bcf7: function AS_Button_i76561f6a03e43d585634a272a10bcf7(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyVehicle");
        ntf.navigate();
    },
    /** preShow defined for frmNewJourneyTracking **/
    AS_Form_a60fa54f1cff4c50941607df9537c5a3: function AS_Form_a60fa54f1cff4c50941607df9537c5a3(eventobject) {
        var self = this;
        this.view.flxTracking1.isVisible = true;
        this.view.flxTracking2.isVisible = false;
    },
    /** postShow defined for frmNewJourneyTracking **/
    AS_Form_f6ae0b3ad1ee4dc987d3bd923cc5d628: function AS_Form_f6ae0b3ad1ee4dc987d3bd923cc5d628(eventobject) {
        var self = this;
        this.setFlxNewJourneyTracking();
        this.setListBoxTrackingPoints();
    }
});