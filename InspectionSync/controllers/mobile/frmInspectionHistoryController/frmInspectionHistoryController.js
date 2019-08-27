define({
    inspections: null,
    measurementHistory: null,
    measurementImages: null,
    mediaList: null,
    measurement: null,
    measurementRanges: null,
    count: 0,
    assetId: null,
    _navigationData: null,
    onNavigate: function(Obj) {

        this.count = 0;
        this._navigationData = Obj;
        this.assetId = Obj["asset_id"];
        if (!InspectionUtil.isNetworkAvailable()) {}
        this.fetchRecords();
    },
    onFormPreShow: function() {

        var self = this;
        var config = {};
        config["statusChange"] = function(isOnline) {
            if (isOnline) {
                self.view.loadingScreen.hide(2);
            } else {
                self.view.loadingScreen.show("offline", 2);
            }
        }
        kony.net.setNetworkCallbacks(config);
    },
    onFormPostShow: function() {

    },
    fetchRecords: function() {

        this.view.loadingScreen.show("loading.." + 1);
        this._fetchRecords("inspection");
        this._fetchRecords("measurement_hstry");
        this._fetchRecords("measurement_images");
        this._fetchRecords("media");
        this._fetchRecords("measurement");
        this._fetchRecords("measurement_range");
    },

    _fetchRecords: function(dataModel) {

        var self = this;

        function successCB(record) {
            switch (dataModel) {
                case "inspection":
                    self.inspections = record;
                    break;
                case "measurement_hstry":
                    self.measurementHistory = record;
                    break;
                case "measurement_images":
                    self.measurementImages = record;
                    break;
                case "media":
                    self.mediaList = record;
                    break;
                case "measurement":
                    self.measurement = record;
                    break;
                case "measurement_range":
                    self.measurementRanges = record;
            }
            if (this.count === 5) {
                this.processRecord();
            }
            this.count = this.count + 1;
        }

        function failureCB(error) {
            alert(JSON.stringify(error));
        }
        try {
            var inspbj = new kony.sdk.KNYObj(dataModel);
            inspbj.get(null, successCB.bind(this), failureCB.bind(this));
        } catch (excp) {
            alert(excp.message);
        }
    },
    processRecord: function() {

        this.measurementMap = InspectionUtil.parseRecords(this.measurement, "Measurement_Id");
        this.measurementRangeMap = InspectionUtil.parseRecords(this.measurementRanges, "Measurement_Range_Id");
        if (Array.isArray(this.measurementRanges)) {
            for (var i = 0; i < this.measurementRanges.length; i++) {
                var measurementId = this.measurementRanges[i]["Measurement_Id"];
                if (typeof measurementId === 'string' || typeof measurementId === 'number')
                    if (Array.isArray(this.measurementMap[measurementId])) {
                        this.measurementRanges[i]["measurement"] = this.measurementMap[measurementId][0];
                    } else {
                        this.measurementRanges[i]["measurement"] = {};
                    }
            }
        }
        this.mediaListMap = InspectionUtil.parseRecords(this.mediaList, "media_id");
        if (Array.isArray(this.measurementImages)) {
            for (var i = 0; i < this.measurementImages.length; i++) {
                var mediaId = this.measurementImages[i]["media_id"];
                if (typeof mediaId === 'string' || typeof mediaId === 'number') {
                    if (Array.isArray(this.mediaListMap[mediaId])) {
                        this.measurementImages[i]["media"] = this.mediaListMap[mediaId][0];
                    } else {
                        this.measurementImages[i]["media"] = {};
                    }
                }
            }
        }

        this.measurementImageMap = InspectionUtil.parseRecords(this.measurementImages, "Measurement_History_Id");
        if (Array.isArray(this.measurementHistory)) {
            for (var i = 0; i < this.measurementHistory.length; i++) {
                var measurementHistoryID = this.measurementHistory[i]["Measurement_History_Id"];
                if (Array.isArray(this.measurementImageMap[measurementHistoryID])) {
                    this.measurementHistory[i]["measurementImageList"] = this.measurementImageMap[measurementHistoryID];
                } else {
                    this.measurementHistory[i]["measurementImageList"] = [];
                }

                if (Array.isArray(this.measurementRangeMap[this.measurementHistory[i]["Measurement_Range_Id"]])) {
                    var measurement = this.measurementRangeMap[this.measurementHistory[i]["Measurement_Range_Id"]][0]["measurement"];
                    if (typeof measurement === 'object' && typeof measurement !== null) {
                        this.measurementHistory[i]["measurement"] = measurement;
                    } else {
                        this.measurementHistory[i]["measurement"] = {};
                    }
                }
            }
        }
        this.measurementHistoryMap = InspectionUtil.parseRecords(this.measurementHistory, "Inspection_Id");
        var inspectionId;
        for (var i = 0; i < this.inspections.length; i++) {
            inspectionId = this.inspections[i]["Inspection_Id"];
            this.inspections[i]["measurementHistory"] = this.measurementHistoryMap[inspectionId];
        }
        this.inspectionMap = InspectionUtil.parseRecords(this.inspections, "Asset_Id");
        if (this.assetId !== null || this.assetId !== undefined) {
            this._setDataToSegmentInspection(this.inspectionMap[this.assetId]);
        } else {
            this._setDataToSegmentInspection(this.inspectionMap["1"]);
        }
        this.view.loadingScreen.hide(1);

    },
    _setDataToSegmentInspection: function(records) {

        if (Array.isArray(records) && records.length > 0) {
            var segHeaderObj = {};
            var segRowObj = {};
            var segRowList;
            var headerRowList = [];
            var segDataList = [];
            var inspectionsLength = records.length;
            var measurementHistoryList;
            var measurementHistoryLength;
            var inspectionId;
            for (var i = 0; i < inspectionsLength; i++) {
                segHeaderObj = {};
                segHeaderObj["imgDot"] = "";
                segHeaderObj["imgDotted"] = "verticalline.png";
                segHeaderObj["lblDate"] = this._getUTCDate(records[i]["Assigned_Timestamp"]) + " " + this._getUTCTime(records[i]["Assigned_Timestamp"]);
                segHeaderObj["lblInspection"] = "INSPECTION ID";
                inspectionId = parseInt(records[i]["Inspection_Id"]);
                if (isNaN(inspectionId) === false) {
                    if (inspectionId < 0) {
                        segHeaderObj["lblInspectionId"] = app_constant.offline_inspection_msg + (-1 * inspectionId) + app_constant.offline_inspection_closing_msg;
                    } else {
                        segHeaderObj["lblInspectionId"] = app_constant.inspection + records[i]["Inspection_Id"];
                    }
                } else {
                    segHeaderObj["lblInspectionId"] = app_constant.inspection + records[i]["Inspection_Id"];
                }

                segHeaderObj["lblTime"] = "";
                segRowList = [];
                measurementHistoryList = records[i].measurementHistory;
                if (Array.isArray(measurementHistoryList)) {
                    measurementHistoryLength = measurementHistoryList.length;
                    for (var j = 0; j < measurementHistoryLength; j++) {
                        segRowObj = {};
                        segRowObj["imgDotted"] = "fsins_ih_dot.png";
                        if (typeof measurementHistoryList[j]["measurement"] === 'object' && typeof measurementHistoryList[j]["measurement"] !== null) {
                            segRowObj["lblHeader"] = measurementHistoryList[j]["measurement"]["Name"];
                        } else {
                            segRowObj["lblHeader"] = "NA";
                        }
                        if (!kony.sdk.isNullOrUndefined(measurementHistoryList[j]["Inspection_Value"]))
                            segRowObj["lblValue"] = measurementHistoryList[j]["Inspection_Value"];
                        else
                            segRowObj["lblValue"] = "Not Captured";
                        segRowList.push(segRowObj);
                    }
                }
                headerRowList = [];
                headerRowList.push(segHeaderObj);
                headerRowList.push(segRowList);
                segDataList.push(headerRowList);
            }
            this.view.segHistory.removeAll();
            this.view.segHistory.addAll(segDataList);
        }
    },
    _getUTCDate: function(epochTime) {

        var result = "";
        var date = new Date(epochTime);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if (this._isDateCurrentDate(epochTime)) {
            result = "Today, ";
        } else {
            result = this._findSuffixOf(day) + " " + months[month - 1] + ", ";
        }
        return result;
    },
    _findSuffixOf: function(i) {

        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    },
    _isDateCurrentDate: function(epochTime) {

        var date = new Date(epochTime);
        var userTimezoneOffset = date.getTimezoneOffset() * 60000;
        date = new Date(date.getTime() - userTimezoneOffset);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var todayDate = new Date();
        var currDay = todayDate.getDate();
        var currMonth = todayDate.getMonth() + 1;
        var currYear = todayDate.getFullYear();
        if (day == currDay && month == currMonth && year == currYear) {
            return true;
        }
        return false;
    },
    _getUTCTime: function(epochTime) {

        var result;
        var currDate = new Date();
        var userTimezoneOffset = currDate.getTimezoneOffset() * 60000;
        var date = new Date(epochTime);
        var hr = this._addZeroPrefix(date.getHours());
        var min = this._addZeroPrefix(date.getMinutes());
        result = hr + ":" + min + " Hrs";
        return result;
    },
    _addZeroPrefix: function(number) {

        var result;
        if (number >= 0 && number < 10) {
            result = "0" + number;
        } else {
            result = number;
        }
        return result;
    },
    _onClickBack: function() {

        var navigationObj = new kony.mvc.Navigation(this._navigationData.previousForm);
        var navigationData = {};
        if (this._navigationData.previousForm == "frmMeasurementAssignment") {
            navigationData = this._navigationData.navigationData;
            navigationData.previousForm = "frmInspectionHistory";
            navigationObj.navigate(navigationData);
        } else if (this._navigationData.previousForm == "frmInspectionExecution") {
            navigationData.previousForm = "frmInspectionHistory";
            navigationObj.navigate(navigationData);
        } else if (this._navigationData.previousForm == "frmInspectionReview") {
            navigationData.previousForm = "frmInspectionHistory";
            navigationObj.navigate(navigationData);
        }
    },

});