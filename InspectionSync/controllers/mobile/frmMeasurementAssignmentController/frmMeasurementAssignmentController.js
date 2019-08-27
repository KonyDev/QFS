define({

  _navigationData: null,
  assetMeasurementSet: null,
  measurementSetMeasurementRange: null,
  measurementSetRange: null,
  measurementRange: null,
  measurement: null,
  measurementMap: null,
  selectedMeasurement: null,
  _selectedIndex: -1,
  count: 0,
  _technicianList: [],
  asset:null,
  fromPdf:null,
  /**
   * @function
   *
   * @param data 
   */
  onNavigate: function(data) {
    if(data===undefined){
      this.fromPdf=true;
      return;
    }

    if (!InspectionUtil.isNetworkAvailable()) {}
    this._navigationData = data;
    this.preProcessFormData();
    this._userData = data.userData;
    this._userRole = data.userData.userRole;

    if ((this._userRole + "").toLowerCase() == "admin") {
      this.view.segAssignedTech.removeAll();
      this.view.flxAssignedToAdmin.isVisible = true;
      this.view.lblTechnicianName.text = "";
      this.view.lblMemberName.text = data.userData.firstName + " " + data.userData.lastName;
      this.view.flxAssignedToMember.isVisible = false;
    } else {
      this.view.flxAssignedToAdmin.isVisible = false;
      this.view.lblTechnicianName.text = data.userData.firstName + " " + data.userData.lastName;
      this.view.lblMemberName.text = data.userData.firstName + " " + data.userData.lastName;
      this.view.flxAssignedToMember.isVisible = true;
    }
  },
  onFormPreShow: function() {

    var self = this;
    this.hideSearchContainer();

    var config = {};
    config["statusChange"] = function(isOnline) {
      if (isOnline) {
        self.view.loadingScreen.hide(2);
      } else {
        self.view.loadingScreen.show("offline", 2);
      }
    }
    //kony.net.setNetworkCallbacks(config);
  },
  /**
   * @function
   *
   */
  onFormPostShow: function() {
    debugger;
    var self = this;
    if(this.fromPdf===true){
      return;
    }
    if (typeof this._navigationData === 'object' && this._navigationData !== null) {
      var asset = this._navigationData["assetInfo"];
      this.populateAssetInfo(asset);
      this.getAssetMeasurement(asset["Asset_Id"]);
    }
  },
  getMesurementInfo: function(measurementID, measurement_Range_ID, measurementSetId) {

    if ((typeof measurementID === 'string' || typeof measurementID === 'number') &&
        (typeof measurement_Range_ID === 'string' || typeof measurement_Range_ID == 'number')) {
      if (typeof this.measurementMap === 'object' && this.measurementMap !== null) {
        var measurement = this.measurementMap[measurementID];
        if (typeof measurement === 'object' && measurement !== null) {
          this.selectedMeasurement = measurement;
        }
        if (typeof measurementSetId === 'string' || typeof measurementSetId === 'number') {
          var options = {};
          options["whereConditionAsAString"] = "Measurement_Set_Id = '" + measurementSetId +
            "' AND Measurement_Range_Id ='" + measurement_Range_ID + "'";
          //alert("options :"+JSON.stringify(options));
          this._fetchRecord("measurement_hstry", options);
        }
      }
    }
  },
  getInspectionRecord: function(assetMeasurement) {

    var inspectionObj = {};
    inspectionObj["Status"] = "Assigned";
    inspectionObj["Signature"] = "";
    inspectionObj["SoftDeleteFlag"] = false;
    inspectionObj["id"] = 0;

    var scheduledTimestamp = this._getScheduledDate();
    if (kony.sdk.isNullOrUndefined(scheduledTimestamp)) {
      alert("Select scheduled timestamp.");
      return;
    }
    inspectionObj["Assigned_Timestamp"] = scheduledTimestamp;
    //inspectionObj["CreatedTimestamp"] = scheduledTimestamp;
    //inspectionObj["LastUpdatedTimestamp"] = scheduledTimestamp;
    var assigned_to = "";
    if (this._userRole.toLowerCase() == "admin") {
      if (!kony.sdk.isNullOrUndefined(this.view.segAssignedTech.selectedRowItems) && this.view.segAssignedTech.selectedRowItems.length > 0) {
        assigned_to = this.view.segAssignedTech.selectedRowItems[0]["User_Id"];
      } else {
        alert("Select Technician to Assign");
        return;
      }
    } else {
      assigned_to = this._userData.userid;
    }
    inspectionObj["Assigned_To"] = assigned_to + "";
    inspectionObj["InspectedBy"] = assigned_to + "";
    if (typeof this._navigationData === 'object' && this._navigationData !== null) {
      var asset = this._navigationData["assetInfo"];
      if (typeof asset === 'object' && asset !== null) {
        var assetId = asset["Asset_Id"];
        if (typeof assetId === 'string' || typeof assetId === 'number') {
          inspectionObj["Asset_Id"] = assetId;
        }
      }
    }
    return inspectionObj;
  },
  createInspection: function(assetMeasurement) {

    if (typeof assetMeasurement === 'object' && assetMeasurement !== null) {
      var dataModel = "";
      var inspectionRecord = this.getInspectionRecord(assetMeasurement);
      this._createRecord(DATA_MODEL.INSPECTION, inspectionRecord);
    }
  },
  _createFailure: function(dataModel, response) {

    this.view.loadingScreen.hide(1);
    switch (dataModel) {
      case DATA_MODEL.INSPECTION:
        break;
      case DATA_MODEL.INSPECTION_MEASUREMENT:
    }
  },
  _createSuccess: function(dataModel, response) {

    this.view.loadingScreen.hide(1);
    switch (dataModel) {
      case DATA_MODEL.INSPECTION:
        if (typeof response === 'object' && response !== null) {
          var inspectionId = response["Inspection_Id"];
          if (!isNaN(inspectionId)) {
            this.createInspectionMeasurement(inspectionId);
          }
        }
        break;
      case DATA_MODEL.INSPECTION_MEASUREMENT:
        var inspectionId = parseInt(response["Inspection_Id"]);
        if (inspectionId < 0) {
          inspectionId = inspectionId * -1;
        }
        this.navigateToConfirmation(inspectionId);
        break;
    }
  },
  createInspectionMeasurement: function(inspectionId) {

    if (!isNaN(inspectionId)) {
      if (!isNaN(this._selectedIndex) && this._selectedIndex > -1 &&
          Array.isArray(this.assetMeasurementSet)) {
        var assetMeasurementSet = this.assetMeasurementSet[this._selectedIndex];
        if (typeof assetMeasurementSet === 'object' && assetMeasurementSet !== null) {
          var measurementSetId = assetMeasurementSet["Measurement_Set_Id"];
          if (typeof measurementSetId === 'string' || typeof measurementSetId === 'number') {
            var record = {};
            record["Inspection_Id"] = inspectionId;
            record["Measurement_Set_Id"] = measurementSetId;
            record["SoftDeleteFlag"] = false;
            //record["CreatedTimestamp"] = this._getScheduledDate();
            //record["LastUpdatedTimestamp"] = this._getScheduledDate();
            this._createRecord(DATA_MODEL.INSPECTION_MEASUREMENT, record);
          }
        }
      }
    }
  },
  _createRecord: function(dataModel, record) {

    if (typeof dataModel === 'string' && dataModel.length > 0 && typeof record === 'object' && record !== null) {
      try {
        var dataObj = new kony.sdk.KNYObj(dataModel);
        //xyz this.view.loadingScreen.show("Loading..",1);
        dataObj.create(record, {}, this._createSuccess.bind(this, dataModel), this._createFailure.bind(this, dataModel));
      } catch (excp) {

        kony.print("#### Exception occured while creating record: ####" + excp.message);
      }
    }
  },
  /**
   * @function
   *
   */
  _onClickofSubmit: function() {
    
    if (typeof this._selectedIndex === 'number' && this._selectedIndex !== -1) {
      if (Array.isArray(this.assetMeasurementSet)) {
        var assetMeasurement = this.assetMeasurementSet[this._selectedIndex];
        if (typeof assetMeasurement === 'object' && assetMeasurement !== null) {
          this.createInspection(assetMeasurement);
        }
      }
    } else {
      alert("Please select measurement set!");
    }
  },
  getAssetMeasurement: function(assetId) {

    var dataModel = "asset_measurement_set";
    var options = {};
    options["whereConditionAsAString"] = "Asset_Id = '" + assetId + "'";
    this._fetchRecord(dataModel, options);
  },
  recordFetchSuccess: function(dataModel, record) {

    this.view.loadingScreen.hide(1);
    switch (dataModel) {
      case "asset_measurement_set":
        this.assetMeasurementSet = record;
        if (Array.isArray(this.assetMeasurementSet)) {
          var assetMeasurementSetLength = record.length;
          var measurementSetClause = "Measurement_Set_Id IN (";
          var i = 0;
          for (; i < assetMeasurementSetLength - 1; i++) {
            measurementSetClause = measurementSetClause + record[i]["Measurement_Set_Id"] + ",";
          }
          measurementSetClause = measurementSetClause + record[i]["Measurement_Set_Id"] + ")";
          var options = {};
          options["whereConditionAsAString"] = measurementSetClause;
          this._fetchRecord("measurementset_measurementrange", options);
        }
        break;
      case "measurementset_measurementrange":
        this.measurementSetRange = record;
        if (Array.isArray(record) && record.length > 0) {
          var measurementRangeClause = "Measurement_Range_Id IN (";
          var i = 0;
          for (; i < record.length - 1; i++) {
            measurementRangeClause = measurementRangeClause + record[i]["Measurement_Range_Id"] + ",";
          }
          measurementRangeClause = measurementRangeClause + record[i]["Measurement_Range_Id"] + ")";
          var options = {};
          options["whereConditionAsAString"] = measurementRangeClause;

          this._fetchRecord("measurement_range", options);
        }
        break;
      case "measurement_range":
        this.measurementRange = record;
        var measurementClause = "Measurement_Id IN (";
        if (Array.isArray(record) && record.length > 0) {
          var i = 0;
          for (; i < record.length - 1; i++) {
            measurementClause = measurementClause + record[i]["Measurement_Id"] + ",";
          }
          measurementClause = measurementClause + record[i]["Measurement_Id"] + ")";
          var options = {};
          options["whereConditionAsAString"] = measurementClause;
          this._fetchRecord("measurement", options);
        }
        break;
      case "measurement":
        this.measurement = record;
        this.processMeasurementSetRecord();
        this.getTechnicians();
        break;
      case "inspection_user":
        this.processTechnicianRecords(record);
        break;
      case "measurement_hstry":
        this.measurementHistory = record;
        this.onSuccesCallbackInfo(this.selectedMeasurement, this.measurementHistory);
    }
  },
  processTechnicianRecords: function(technicianList) {

    this.inspectionUser = technicianList;
    var technician;
    var result = [];
    if (Array.isArray(technicianList)) {
      var listLength = technicianList.length;
      var tempJSON;

      var initials;
      for (var i = 0; i < listLength; i++) {
        technician = technicianList[i];
        tempJSON = {};
        var name = technician["FirstName"] + " " + technician["LastName"];
        initials = "";
        if (typeof technician["FirstName"] === 'string' && typeof technician["LastName"] === 'string') {
          initials = technician.FirstName.charAt(0) + technician.LastName.charAt(0);
        }
        tempJSON.email = technician.email;
        tempJSON.name = name;
        tempJSON.initials = initials;
        tempJSON.User_Id = technician["User_Id"];
        result.push(tempJSON);
      }
    }
    this._setUserData(result);
  },
  _setUserData: function(data) {

    if (!kony.sdk.isNullOrUndefined(data) && Array.isArray(data) && data.length > 0) {
      var widgetDataMap = {
        "lblInitials": "initials",
        "lblName": "name",
        "lblEmail": "email",
        "lblUserId": "User_Id"
      };
      this.view.segAssignedTech.widgetDataMap = widgetDataMap;
      this.view.segAssignedTech.removeAll();
      this._technicianList = data;
      this.view.segAssignedTech.setData(data);
    }

  },
  getTechnicians: function() {

    this._fetchRecord("inspection_user", null);
  },
  processMeasurementSetRecord: function() {

    var measurementMap = InspectionUtil.parseRecords(this.measurement, "Measurement_Id");
    this.measurementMap = measurementMap;
    if (Array.isArray(this.measurementRange)) {
      var listLength = this.measurementRange.length;
      var measurementRange;
      var measurementId;
      var measurementObj;
      for (var i = 0; i < listLength; i++) {
        measurementRange = this.measurementRange[i];
        if (typeof measurementRange === 'object' && measurementRange !== null) {
          measurementId = measurementRange["Measurement_Id"];
          if (typeof measurementId === 'string' || typeof measurementId === 'number') {
            measurementObj = measurementMap[measurementId];
            if (Array.isArray(measurementObj) && measurementObj.length > 0) {
              measurementRange["measurement"] = measurementObj[0];
            } else {
              measurementRange["measurement"] = null;
            }
          }

        }
      }
    }
    var measurementRangeMap = InspectionUtil.parseRecords(this.measurementRange, "Measurement_Range_Id");
    if (Array.isArray(this.measurementSetRange)) {
      var listLength = this.measurementSetRange.length;
      var measurementSetRangeObj;
      var measurementRangeId;
      var measurementRangeObj;
      for (var i = 0; i < listLength; i++) {
        measurementSetRangeObj = this.measurementSetRange[i];
        measurementRangeId = measurementSetRangeObj["Measurement_Range_Id"];
        if (typeof measurementRangeId === 'string' || typeof measurementRangeId === 'number') {
          measurementRangeObj = measurementRangeMap[measurementRangeId];
          if (Array.isArray(measurementRangeObj) && measurementRangeObj.length > 0) {
            measurementSetRangeObj["measurement_range"] = measurementRangeObj[0];
          } else {
            measurementSetRangeObj["measurement_range"] = null;
          }
        }
      }
    }
    var measurementSetRangeMap = InspectionUtil.parseRecords(this.measurementSetRange, "Measurement_Set_Id");
    if (Array.isArray(this.assetMeasurementSet)) {
      var listLength = this.assetMeasurementSet.length;
      var assetMeasurementSetObj;
      var measurementSetId;
      var measurementSetRangeObj;
      for (var i = 0; i < listLength; i++) {
        assetMeasurementSetObj = this.assetMeasurementSet[i];
        measurementSetId = assetMeasurementSetObj["Measurement_Set_Id"];
        if (typeof measurementSetId === 'string' || typeof measurementSetId === 'number') {
          measurementSetRangeObj = measurementSetRangeMap[measurementSetId];
          if (Array.isArray(measurementSetRangeObj)) {
            assetMeasurementSetObj["measurement_set_range"] = measurementSetRangeObj;
          } else {
            assetMeasurementSetObj["measurement_set_range"] = [];
          }
        }
      }
    }
    this._createDynamicMeasurementSet(this.assetMeasurementSet);
  },
  _createDynamicMeasurementSet: function(measurementSetList) {

    this.view.flxMeasurementSet.removeAll();
    if (Array.isArray(measurementSetList)) {
      var listLength = measurementSetList.length;
      var measurementSet;
      var measurementSetRangeList;
      for (var i = 0; i < listLength; i++) {
        measurementSet = measurementSetList[i];
        if (typeof measurementSet === 'object' && measurementSet !== null) {
          measurementSetRangeList = measurementSet["measurement_set_range"];
          if (Array.isArray(measurementSetRangeList) && measurementSetRangeList.length > 0) {
            this.sortMeasurementSetRange(measurementSetRangeList);
            var set = this._getDynamicMeasurementSet(measurementSetList[i], i, measurementSet["Measurement_Set_Id"]);
            this.view.flxMeasurementSet.add(set);
          }
        }
      }
    }
  },
  sortMeasurementSetRange: function(measurementSetRangeList) {

    if (Array.isArray(measurementSetRangeList)) {
      measurementSetRangeList.sort(function(a, b) {
        var nameA;
        var nameB;
        var measurement_range;
        var measurement;
        if (typeof a === 'object' && a !== null) {
          measurement_range = a["measurement_range"];
          if (typeof measurement_range === 'object' && measurement_range !== null) {
            measurement = measurement_range["measurement"];
            if (typeof measurement === 'object' && measurement !== null) {
              nameA = measurement["Name"];
            }
          }
        }
        if (typeof b === 'object' && b !== null) {
          measurement_range = b["measurement_range"];
          if (typeof measurement_range === 'object' && measurement_range !== null) {
            measurement = measurement_range["measurement"];
            if (typeof measurement === 'object' && measurement !== null) {
              nameB = measurement["Name"];
            }
          }
        }
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
  },
  _fetchRecord: function(dataModel, options) {

    function failureCB(error) {
      alert(JSON.stringify(error));
      this.view.loadingScreen.hide(1);
      kony.print("Unable to get record for " + dataModel + ": " + JSON.stringify(error));
    }
    if (typeof dataModel === 'string') {
      try {
        if (options === undefined)
          options = null;
        var inspbj = new kony.sdk.KNYObj(dataModel);
        inspbj.get(options, this.recordFetchSuccess.bind(this, dataModel), failureCB.bind(this));
      } catch (excp) {
        this.view.loadingScreen.hide(1);
      }
    } else {
      alert("Data model name can't be empty");
    }

  },
  populateAssetInfo: function(asset) {

    if (typeof asset === 'object' && asset !== null) {
      this.asset=asset;
      this.view.lblAssetId.text = app_constant.asset + asset["Asset_Id"];
      this.view.lblDistance.text = asset["distance"]; //hardcoded foe now
      this.view.lblAssetAddress.text = "" + asset.location.Description + ", " + asset.location.Street + ", " + asset.location.City + ", " + asset.location.Post_Code;
      this.view.imgAssetImage.base64 = asset.image_base64;
      var assetType = asset["type"];
      if (typeof assetType === 'object' && assetType !== null) {
        this.view.lblAssetType.text = assetType["Name"];
        this.view.lblAssetDescription.text = assetType["Description"];
      }
      if (typeof asset["Reference_Doc"] === 'string' && asset["Reference_Doc"] !== "null" && asset["Reference_Doc"].length > 0) {
        //this.view.pdfviewer.setURL(asset["Reference_Doc"]);
      } else {
        //this.view.pdfviewer.setURL("http://forms.kony.com/rs/konysolutions/images/DS-Kony-Marketplace.pdf");
      }
    }
  },
  /**
   * @function
   *
   */
  _onClickPDF: function() {
    if(kony.os.deviceInfo().name=="iphone")
      return;

    /*if (!kony.sdk.isNullOrUndefined(this.view.pdfviewer)) {
      //this.view.pdfviewer.isVisible = true;
      //this.view.flxPDFViewer.isVisible = true;
      //this.view.flxPDFViewer.left = "0%";
      this.showAssetReferenceDoc();
    }*/
    this.showAssetReferenceDoc();

  },
  _getDynamicMeasurementSet: function(data, index, measurementSetId) {

    if (data === null || data === undefined || index === null || index === undefined)
      return;
    var flxSet = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
      "clipBounds": true,
      "id": "flxSet" + index,
      "isVisible": true,
      "layoutType": kony.flex.FLOW_VERTICAL,
      "left": "0dp",
      "skin": "sknFlxICDefault",
      "top": "0dp",
      "width": "100%",
      "zIndex": 1
    }, {}, {});
    flxSet.setDefaultUnit(kony.flex.DP);
    var flxSetHeader = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "clipBounds": true,
      "height": "60dp",
      "id": "flxSetHeader" + index,
      "isVisible": true,
      "layoutType": kony.flex.FLOW_HORIZONTAL,
      "left": "0dp",
      "skin": "sknFlxICDefault",
      "top": "14dp",
      "width": "100%",
      "zIndex": 1
    }, {}, {});
    flxSetHeader.setDefaultUnit(kony.flex.DP);
    var flxRadioImage = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "clipBounds": true,
      "height": "60dp",
      "id": "flxRadioImage" + index,
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": "21dp",
      "skin": "sknFlxICDefault",
      "top": "0dp",
      "width": "30dp",
      "zIndex": 1,
      "onClick": this._onClickOfRadioButtion.bind(this)
    }, {}, {});
    flxRadioImage.setDefaultUnit(kony.flex.DP);
    var imgRadio = new kony.ui.Image2({
      "centerY": "50%",
      "height": "20dp",
      "id": "imgRadio" + index,
      "isVisible": true,
      "left": "5dp",
      "skin": "sknImgICDefault",
      "src": "radio_buttion_inactive.png",
      "top": "0dp",
      "width": "20dp",
      "zIndex": 1
    }, {
      "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {});
    flxRadioImage.add(imgRadio);
    var lblSetHeader = new kony.ui.Label({
      "centerY": "50%",
      "id": "lblSetHeader" + index,
      "isVisible": true,
      "left": "5dp",
      "skin": "sknFlxMeasumentSetNew",
      //"text": data[index].measurement_setID.toUpperCase(),
      "text": app_constant.measurement_set + data["Measurement_Set_Id"], //.measurement_setID.toUpperCase(),
      "textStyle": {
        "letterSpacing": 0,
        "strikeThrough": false
      },
      "top": "10%",
      "width": kony.flex.USE_PREFFERED_SIZE,
      "zIndex": 1
    }, {
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {
      "textCopyable": false
    });
    flxSetHeader.add(flxRadioImage, lblSetHeader);
    var flxSetBody = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
      "clipBounds": true,
      "id": "flxSetBody" + index,
      "isVisible": true,
      "layoutType": kony.flex.FLOW_VERTICAL,
      "left": "0dp",
      "skin": "sknFlxICDefault",
      "top": "5dp",
      "width": "100%",
      "zIndex": 1
    }, {}, {});
    flxSetBody.setDefaultUnit(kony.flex.DP);
    if (!kony.sdk.isNullOrUndefined(data["measurement_set_range"]) && Array.isArray(data["measurement_set_range"])) {
      var measurementSetRangeListLength = data["measurement_set_range"].length;
      var measurementSetRangeObj;
      var measurementRangeObj;
      for (var i = 0; i < measurementSetRangeListLength; i++) {
        measurementSetRangeObj = data["measurement_set_range"][i];
        if (typeof measurementSetRangeObj === 'object' && measurementSetRangeObj !== null) {
          measurementRangeObj = measurementSetRangeObj["measurement_range"];
          if (typeof measurementRangeObj === 'object' && measurementRangeObj !== null) {
            var flxMeasurement = this._getDynamicSetBody(measurementRangeObj, index, i, measurementSetRangeObj["Measurement_Set_Id"]);
            flxSetBody.add(flxMeasurement);
          }
        }
      }
    }
    flxSet.add(flxSetHeader, flxSetBody);
    return flxSet;
  },
  _getDynamicSetBody: function(data, index, i, measurementSetId) {

    var measurementName;
    var measurementId;
    var measurementRangeId;
    measurementId = data["Measurement_Id"];
    measurementRangeId = data["Measurement_Range_Id"];
    if (typeof data["measurement"] === 'object' && data["measurement"] !== null) {
      measurementName = data["measurement"]["Name"];
    } else {
      measurementName = "NA";
    }
    var flxMeasurement = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
      "bottom": "14dp",
      "clipBounds": true,
      "id": "flxMeasurement" + index + i,
      "isVisible": true,
      "layoutType": kony.flex.FLOW_HORIZONTAL,
      "left": "13%",
      "skin": "sknFlxBr666effRound",
      "top": "0dp",
      "width": "77%",
      "zIndex": 1
    }, {}, {});
    flxMeasurement.setDefaultUnit(kony.flex.DP);
    var flxImageContainer = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "clipBounds": true,
      "height": "22dp",
      "id": "flxImageContainer" + index + i,
      "isVisible": true,
      "left": "14dp",
      "top": "12dp",
      "width": "22dp",
      "zIndex": 1,
      "layoutType": kony.flex.FREE_FORM,
      "skin": "sknFlxICDefault",
      "onClick": this._onClickOfInfoImage.bind(this, data, index, i, measurementId, measurementRangeId, measurementSetId)
    }, {}, {});
    flxImageContainer.setDefaultUnit(kony.flex.DP);
    var imgMeasurement = new kony.ui.Image2({
      "centerY": "50%",
      "centerX": "50%",
      "height": "22dp",
      "id": "imgMeasurement" + index + i,
      "isVisible": true,
      "skin": "sknImgICDefault",
      "src": "fsins_ic_info.png",
      "width": "22dp",
      "zIndex": 1,
    }, {
      "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {});
    flxImageContainer.add(imgMeasurement);
    var lblMeasurementName = new kony.ui.Label({
      "id": "lblMeasurementName" + index + i,
      "isVisible": true,
      "left": "13dp",
      "skin": "sknLblMeasumentNew",
      "text": measurementName,
      "textStyle": {
        "letterSpacing": 0,
        "strikeThrough": false
      },
      "top": "10dp",
      "bottom": "10dp",
      "width": "74.44%",
      "zIndex": 1
    }, {
      "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    }, {
      "textCopyable": false
    });
    flxMeasurement.add(flxImageContainer, lblMeasurementName);
    return flxMeasurement;
  },
  _onClickOfInfoImage: function(data, index, i, measurementID, measurement_Range_ID, measurementSetId, eventObject, x, y) {

    this.getMesurementInfo(measurementID, measurement_Range_ID, measurementSetId);
  },
  onSuccesCallbackInfo: function(measurementInfo, measurementHistory) {

    if (Array.isArray(measurementInfo) && measurementInfo.length > 0 &&
        Array.isArray(measurementHistory)) {
      var data = this._processData(measurementInfo, measurementHistory);
      this.view.flxInfoCard.animate(
        kony.ui.createAnimation({
          100: {
            top: "0%",
            "stepConfig": {}
          }
        }), {
          delay: 0,
          fillMode: kony.anim.FILL_MODE_FORWARDS,
          duration: .3
        }, {
          animationEnd: function() {}
        });
      this.view.InfoCard.setData(data);
      this.view.forceLayout();
      this.view.loadingScreen.hide(1);
    }
  },
  _processData: function(measurementInfo, measurementHistory) {

    var result = {};
    if (Array.isArray(measurementInfo) && measurementInfo.length > 0) {
      result.measurement_name = measurementInfo[0]["Name"];
      result.measurement_Id = "#" + measurementInfo[0]["Measurement_Id"];
      result.measurement_description = measurementInfo[0]["Description"];
    }
    if (Array.isArray(measurementHistory) && measurementHistory.length > 0) {
      var values = [];
      var tempJSON;
      for (var i = 0; i < measurementHistory.length; i++) {
        tempJSON = {};
        tempJSON.date = this._getUTCDate(measurementHistory[i].Inspection_Timestamp);
        tempJSON.time = this._getUTCTime(measurementHistory[i].Inspection_Timestamp);
        tempJSON.value = measurementHistory[i].Inspection_Value;
        tempJSON["Response_Type"] = measurementHistory[i]["Response_Type"];
        values.push(tempJSON);
      }
      result.values = values;
    }
    return result;
  },
  errorCallbackInfo: function(response) {

    this.view.loadingScreen.hide();
    kony.application.dismissLoadingScreen();
  },
  /**
   * @function
   *
   * @param epochTime 
   */
  _getUTCDate: function(epochTime) {
    debugger;
    var result = "";
    var date = new Date(epochTime);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    result = this._addZeroPrefix(day) + "/" + this._addZeroPrefix(month) + "/" + year;
    return result;
  },
  _getUTCTime: function(epochTime) {

    var result;
    var currDate = new Date();
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
  _onClickOfRadioButtion: function(eventobject) {

    var index = eventobject.id.replace("flxRadioImage", "");
    this._selectedIndex = parseInt(index);
    var measurementSetRangeList;
    var measurementSet;
    if (!kony.sdk.isNullOrUndefined(this.assetMeasurementSet) && Array.isArray(this.assetMeasurementSet)) {
      for (var i = 0; i < this.assetMeasurementSet.length; i++) {
        measurementSet = this.assetMeasurementSet[i];
        if (typeof measurementSet === 'object' && measurementSet !== null) {
          measurementSetRangeList = measurementSet["measurement_set_range"];
          if (Array.isArray(measurementSetRangeList) && measurementSetRangeList.length > 0) {
            if (i == this._selectedIndex) {
              this.view["imgRadio" + i].src = "radio_buttion_active.png";
            } else {
              this.view["imgRadio" + i].src = "radio_buttion_inactive.png";
            }
          }
        }
      }
    }
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
  _getDateComponent: function() {

    var hrs = this.view.lbxScheduledHours.selectedKey;
    var min = this.view.lbxScheduledMinutes.selectedKey;
    if (kony.sdk.isNullOrUndefined(this.view.calScheduledDate.dateComponents)) {
      return;
    }
    var dateComponent = this.view.calScheduledDate.dateComponents;
    if (dateComponent[0] == -1 && dateComponent[1] == -1) {
      return;
    }
    var jsDateComponent = new Date(dateComponent[2], dateComponent[1] - 1, dateComponent[0], parseInt(hrs), parseInt(min), 0);
    return jsDateComponent;
  },
  _getScheduledDate: function() {

    var date = this._getDateComponent();
    if (kony.sdk.isNullOrUndefined(date)) {
      return;
    }
    var currentDate = new Date();
    var userTimezoneOffset = currentDate.getTimezoneOffset() * 60000;
    date = new Date(date.getTime() + userTimezoneOffset);
    var currDay = this._addZeroPrefix(date.getDate());
    var currMonth = this._addZeroPrefix(date.getMonth() + 1);
    var currYear = this._addZeroPrefix(date.getFullYear());
    var hr = this._addZeroPrefix(date.getHours());
    var min = this._addZeroPrefix(date.getMinutes());
    var sec = this._addZeroPrefix(date.getSeconds());
    var dateinSQLFormat = currYear + "-" + currMonth + "-" + currDay + "T" + hr + ":" + min + ":" + sec;
    return dateinSQLFormat;
  },
  _onClickHistory: function() {
    debugger;
    var navObj = new kony.mvc.Navigation("frmInspectionHistory");
    var obj = {};
    obj.navigationData = this._navigationData;
    if (typeof this._navigationData === 'object' && this._navigationData !== null) {
      var asset = this._navigationData["assetInfo"];
      if (typeof asset === 'object' && asset !== null) {
        var assetId = asset["Asset_Id"];
        if (typeof assetId === 'string' || typeof assetId === 'number') {
          obj.asset_id = assetId;
          obj.previousForm = "frmMeasurementAssignment";
          navObj.navigate(obj);
        }
      }
    }
  },
  _onClickBack: function() {
    debugger;
    var navObj = new kony.mvc.Navigation("frmInspectionCreation");
    navObj.navigate(this._userData);
  },
  _onClickCloseAssignedTech: function() {
    debugger;
    this.view.flxAssignedTechnician.left = "100%";
  },
  _showAssignedListBox: function() {
    debugger;
    this.view.flxAssignedTechnician.left = "0%";
  },
  _onRowClickAssignedTech: function() {
    debugger;
    var data = this.view.segAssignedTech.selectedRowItems[0];
    this.view.lblTechnicianName.text = data.name;
    this.view.flxAssignedTechnician.left = "100%";
  },
  preProcessFormData: function() {
    debugger;
    this._selectedIndex = -1;
    this.count = 0;
    this.view.flxMeasurementSet.removeAll();
    this.view.lblTechnicianName.text = "Select";
  },
  navigateToConfirmation: function(inspectionId) {

    var navObj = new kony.mvc.Navigation("frmInspectionConfirmationScreen");
    var navigationData = {
      "id": inspectionId
    };
    navigationData.userAttribute = this._userData;
    navObj.navigate(navigationData);
  },
  showSearchContainer: function() {
    debugger;
    var self = this;
    this.resetAssetSearch();
    this.view.flxSearchAsset.isVisible = true;
    this.view.flxSearchAsset.animate(
      kony.ui.createAnimation({
        100: {
          left: "0%",
          "stepConfig": {}
        }
      }), {
        delay: 0,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: .3
      }, {
        animationEnd: function() {
          self.view.txtBoxSearchInspection.setFocus(true);
          //self.view.flxCancelBtn.setVisibility(true);
        }
      });
  },
  resetAssetSearch: function() {
    debugger;
    this.view.imgClearTextBox.setVisibility(false);
    this.view.txtBoxSearchInspection.text = "";
    this.view.segTechnician.removeAll();
  },
  hideSearchContainer: function() {

    var self = this;
    this.view.flxSearchAsset.isVisible = false;
    this.view.flxSearchAsset.animate(
      kony.ui.createAnimation({
        100: {
          left: "100%",
          "stepConfig": {}
        }
      }), {
        delay: 0,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: .3
      }, {
        animationEnd: function() {
        }
      });
  },
  onTextChange: function() {
    debugger;
    var searchKey = this.view.txtBoxSearchInspection.text;
    searchKey = searchKey.trim();
    searchKey = (searchKey + "").toLowerCase();
    var filteredSearchData = null;
    filteredSearchData = this._getFilteredSearchData(this._technicianList, searchKey);
    this.populateSegTechnician(filteredSearchData);
  },
  _getFilteredSearchData: function(data, changedtext) {
    debugger;
    var filteredData = null;
    try {
      if (Array.isArray(data) && data.length > 0) {
        filteredData = data.filter(function(str) {
          if (((str["email"] + "").toLowerCase()).indexOf(changedtext) >= 0)
            return true;
          else
            return false;
        });
      } else {
        filteredData = [];
      }
    } catch (exception) {}
    return filteredData;
  },
  populateSegTechnician: function(technicianList) {
    debugger;
    if (Array.isArray(technicianList)) {
      var widgetDataMap = {
        "lblSearchedResult": "email",
        "lblDisplayText": "email"
      };
      this.view.segTechnician.widgetDataMap = widgetDataMap;
      this.view.segTechnician.removeAll();
      this.view.segTechnician.setData(technicianList);
    }
  },
  _onRowClickSearch: function(eventobject, sectionNumber, rowNumber) {
    debugger;
    var data = this.view.segTechnician.selectedRowItems[0];
    var email = data.email;
    var rowIndex = parseInt(this._findRowIndexByEmail(email));
    this.view.segAssignedTech.selectedIndices = [0, rowIndex];
    this.view.lblTechnicianName.text = data.name;
    this.view.flxAssignedTechnician.left = "100%";
    this.hideSearchContainer();
  },
  _findRowIndexByEmail: function(email) {
    debugger;
    var indexValue = 0;
    if (Array.isArray(this._technicianList)) {
      for (var i = 0; i < this._technicianList.length; i++) {
        if (this._technicianList[i].email === email) {
          indexValue = i;
          break;
        }
      }
    }
    return indexValue;
  },
  /**
   * @function
   *
   */
  showAssetReferenceDoc:function(){
    debugger;
    try{
      if(kony.os.deviceInfo().name==="iPhone"){

        var mainLoc1 = kony.io.FileSystem.getDataDirectoryPath();
        var myFileLoc1 = mainLoc1 + constants.FILE_PATH_SEPARATOR +"Reference_Doc.pdf";
        var myFile1 = new kony.io.File(myFileLoc1);

        if(myFile1.exists()){
          myFile1.remove(true);
        }

        //Taking the local stored base64
        //Converting to rawbytes and saving to pdf file locally.
        var base64 = this.asset['Reference_Doc'];
        if(base64=="" || base64==null)
        {
          return;
        }
        else
        {
          var mainLocIOS = kony.io.FileSystem.getDataDirectoryPath();
          var myFileLoc = mainLocIOS + constants.FILE_PATH_SEPARATOR + "Reference_Doc.pdf";
          var myFile = new kony.io.File(myFileLoc).createFile();   //returns true or false.
          var getMyFile = kony.io.FileSystem.getFile(myFileLoc);
          var rawBytes = kony.convertToRawBytes(base64);
          if(getMyFile !== null) 
          {
            getMyFile.write(rawBytes);
          }
          var fileObj =  kony.io.FileSystem.getFile(getMyFile['fullPath']);
          //var navigationObj = getMyFile['fullPath'];
          var param={};
          param["file_path"]=getMyFile['fullPath'];
          param["last_form"]="frmMeasurementAssignment";
          //Navigate to the New Form.
          var navObj = new kony.mvc.Navigation("frmPdfViewer");
          navObj.navigate(param);
        }

        return;
      }
      //Checks if the file is present in the local store
      //if present then it will delete it first
      var mainLoc1 = kony.io.FileSystem.getExternalStorageDirectoryPath();
      var myFileLoc1 = mainLoc1 + constants.FILE_PATH_SEPARATOR +"Reference_Doc.pdf";
      var myFile1 = new kony.io.File(myFileLoc1);
      myFile1.createFile();
      myFile1.remove(true);

      //Taking the local stored base64
      //Converting to rawbytes and saving to pdf file locally.
      var base64;
      if(typeof this.asset=='object' && this.asset!==null){
        base64 = this.asset['Reference_Doc'];
      }else{
        return;
      }

      if(base64=="" || base64==null)
      {
        new kony.ui.Toast({"text":"PDF Not Available!", "duration":constants.TOAST_LENGTH_SHORT}).show();
      }
      else      {
        //If the base64 is nonempty then it will save to local store.
        var mainLoc = kony.io.FileSystem.getExternalStorageDirectoryPath();
        var myFileLoc = mainLoc + constants.FILE_PATH_SEPARATOR + "Reference_Doc.pdf";
        //alert(myFileLoc);
        var myFile = new kony.io.File(myFileLoc).createFile();
        var getMyFile = kony.io.FileSystem.getFile(myFileLoc);
        var rawBytes = kony.convertToRawBytes(base64);

        if(getMyFile === null) 
        {
          new kony.ui.Toast({"text":"Getting File failed with null.", "duration":constants.TOAST_LENGTH_SHORT}).show();
        }
        else 
        {
          getMyFile.write(rawBytes);
        }

        //Navigate to the New Form.
        var param={};
        param["file_path"]=getMyFile['fullPath'];
        param["last_form"]="frmMeasurementAssignment";
        var navObj = new kony.mvc.Navigation("frmPdfViewer");
        navObj.navigate(param);
      }
    }
    catch(err){
      debugger;
      //new kony.ui.Toast({"text":"Error in Saving PDF File.", "duration":constants.TOAST_LENGTH_SHORT}).show();
    }
  }
});