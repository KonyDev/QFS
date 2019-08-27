define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onKeyUp defined for tbxDepartureDetails **/
    AS_TextField_j43e6d33ef7b4c5b877487ed06750f10: function AS_TextField_j43e6d33ef7b4c5b877487ed06750f10(eventobject) {
        var self = this;
        return self.searchForLocation.call(this);
    },
    /** onRowClick defined for segPlaceDetails **/
    AS_Segment_c8ec59a4ad4e4be4875087314fd76919: function AS_Segment_c8ec59a4ad4e4be4875087314fd76919(eventobject, sectionNumber, rowNumber) {
        var self = this;
        debugger;
        this.view.segPlaceDetails.pressedSkin = "segRowFocusSkin";
        this.view.tbxDepartureDetails.text = this.view.segPlaceDetails.data[rowNumber].lblPlaceData;
        this.view.segPlaceDetails.setVisibility(false);
    },
    /** onSelection defined for lsMonth **/
    AS_ListBox_i92349be028b42e79f2c27c4f63d21ad: function AS_ListBox_i92349be028b42e79f2c27c4f63d21ad(eventobject) {
        var self = this;
        var selectedMonth = this.view.lsMonth.selectedKey;
        var year = this.view.lsYear.selectedKeyValue;
        var day = this.view.lsDate.selectedKey;
        var noOfDays = this.getNumberOfDaysinCurrentMonth(selectedMonth, year[1]);
        this.setDefaultDatesData(noOfDays);
        this.view.lsDate.selectedKey = day;
    },
    /** onSelection defined for lsYear **/
    AS_ListBox_c71e476da1de4d9aa4c5648b36dac899: function AS_ListBox_c71e476da1de4d9aa4c5648b36dac899(eventobject) {
        var self = this;
        var selectedMonth = this.view.lsMonth.selectedKey;
        var year = this.view.lsYear.selectedKeyValue;
        var day = this.view.lsDate.selectedKey;
        var noOfDays = this.getNumberOfDaysinCurrentMonth(selectedMonth, year[1]);
        this.setDefaultDatesData(noOfDays);
        this.view.lsDate.selectedKey = day;
    },
    /** onClick defined for btnDone **/
    AS_Button_ice095a5f61f40d4aa2e3d5652c31a45: function AS_Button_ice095a5f61f40d4aa2e3d5652c31a45(eventobject) {
        var self = this;
        return self.onButtonClick.call(this);
    },
    /** postShow defined for placeDetails **/
    AS_FlexContainer_d0a176186293433888c1abb05fd91ae9: function AS_FlexContainer_d0a176186293433888c1abb05fd91ae9(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});