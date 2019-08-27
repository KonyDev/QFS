define({
  count: 0,
  assetLocationsList: null,
  assetsList: null,
  assetTypesList: null,
  processedAssetList: null,
  onNavigate: function(Obj) {  
    this.count = 0;
    this._filterCount = 0;
    this.populateFilterCount();
    if (!InspectionUtil.isNetworkAvailable()) {}
    if (!kony.sdk.isNullOrUndefined(Obj.previousForm) && Obj.previousForm == "frmInspectionsList") {
      this._navigationData = Obj.userAttribute;

    } else if (!kony.sdk.isNullOrUndefined(Obj.previousForm) && Obj.previousForm == "frmInspectionsList") {
      this._navigationData = Obj;
    } else {
      this.view.flxBack.isVisible = false;
      this._navigationData = Obj;
    }
    if (this._navigationData.userRole == "Admin") {
      this.view.flxBack.isVisible = false;
      this.view.flxSearch.left = "6.5%";
    } else {
      this.view.flxBack.isVisible = true;
    }
    this.view.lblTaskNumbers.text = "0 Result";
  },
  //to fetch all the records related to this form controller.
  getInspectionListData: function() {

    this.count = 0;
    this._fetchRecords("asset");
    this._fetchRecords("asset_location");
    this._fetchRecords("asset_type");
  },
  //to read records from table
  _fetchRecords: function(dataModel) {
    function successCB(record) {
      this.view.loadingScreen.hide(1);
      switch (dataModel) {
        case "asset_location":
          this.assetLocationsList = record;
          break;
        case "asset":
          this.assetsList = record;
          break;
        case "asset_type":
          this.assetTypesList = record;
          this._successFetchAssetTypes(record)
      }
      if (this.count == 2) {
        this.processRecords();
      }
      this.count = this.count + 1;
    }
    function failureCB(error) {
      this.view.loadingScreen.hide(1);
    }
    try {
      var inspObj = new kony.sdk.KNYObj(dataModel);
      inspObj.get(null, successCB.bind(this), failureCB.bind(this));
    } catch (excp) {
      this.view.loadingScreen.hide(1);
    }
  },
  processRecords: function() {   
    var assetLocationMap = InspectionUtil.parseRecords(this.assetLocationsList, "Id");
    var assetTypeListMap = InspectionUtil.parseRecords(this.assetTypesList, "Asset_Type_Id");
    if (typeof assetLocationMap === 'object' && assetLocationMap !== null && Array.isArray(this.assetsList)) {
      for (var i = 0; i < this.assetsList.length; i++) {
        var asset = this.assetsList[i];
        if (typeof asset === 'object' && asset !== null) {
          if (typeof asset["Asset_Location_Id"] === 'string') {
            var assetLocation = assetLocationMap[asset["Asset_Location_Id"]];
            if (Array.isArray(assetLocation) && assetLocation.length > 0) {
              asset["location"] = assetLocation[0];
            }
          }
          if (typeof asset["Asset_Type_Id"] === 'string' && typeof assetTypeListMap === 'object' && assetTypeListMap !== null) {
            if (Array.isArray(assetTypeListMap[asset["Asset_Type_Id"]]) && (assetTypeListMap[asset["Asset_Type_Id"]])) {
              asset["type"] = assetTypeListMap[asset["Asset_Type_Id"]][0];
            }
          }
        }
      }
    }
    this.processedAssetList = this.assetsList;
    this._setDataToSegment(this.assetsList);
    this.view.loadingScreen.hide(1);
  },
  _setDataToSegment: function(data) {
    if (Array.isArray(data)) {
      var assetListLength = data.length;
      var segList = [];
      var segObj = {};
      var assetType;
      var asset;
      for (var i = 0; i < assetListLength; i++) {
        segObj = {};
        asset = data[i];
        if (typeof asset === 'object' && asset !== null) {
          segObj["lblAssetId"] = app_constant.asset + asset["Asset_Id"];
          if (typeof asset["image_base64"] === 'string' && asset["image_base64"].length > 0) {
            segObj["imgAssetImage"] = {
              "base64": asset["image_base64"]
            };
          } else {
            segObj["imgAssetImage"] = "transformer.png";
          }
          var location = asset["location"];
          if (typeof location === 'object' && location !== null && typeof asset['Asset_Location_Id'] === 'string') {
            segObj["lblAddress"] = location["Description"] + ", " + location["Street"] + ", " + location["City"] + ", " + location["Post_Code"];
          }
          var assetType = asset["type"];
          if (typeof assetType === 'object' && assetType !== null && typeof assetType['Name'] === 'string') {
            segObj["lblAssetType"] = assetType["Name"];
            segObj["lblAssetDescription"] = this.truncateString(assetType["Description"]); //@TODO
          }
        }
        var currLat = kony.store.getItem("currLat");
        var currLong = kony.store.getItem("currLong");
        var desLat = Number(asset.location.Latitude);
        var desLong = Number(asset.location.Longitude)
        segObj["lblDistance"] = Number(InspectionUtil.findDistanceInMiles(currLat, currLong, desLat, desLong)).toFixed(2) + " mi";;
        segObj["imgLocation"] = "map_icon.png";
        segList.push(segObj);
      }
      this.view.segAssets.removeAll();
      this.view.segAssets.addAll(segList);
      this._checkEmptySegment();
      var tempData = this.view.segAssets.data;
      if (!kony.sdk.isNullOrUndefined(tempData)) {
        this._setDataToTotalTask(tempData);
      } else {
        this._setDataToTotalTask([]);
      }
    }
  },
  onFormPreShow: function() {

    this.hideSearchContainer();
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
  _assetDistance: [],
  _assetData: [],
  _filteredData: [],
  _assetTypes: [],
  _selectedFilter: [],
  _isFilterEnabled: false,
  _checkEmptySegment: function() {           
    var data = this.view.segAssets.data;
    if (kony.sdk.isNullOrUndefined(data) || (!kony.sdk.isNullOrUndefined(data) && Array.isArray(data) && data.length == 0)) {
      this.view.flxEmptyContainer.isVisible = true;
    } else {
      this.view.flxEmptyContainer.isVisible = false;
    }
  },
  onFormPostShow: function() {  
    this.getInspectionListData();
  },
  _setDataToTotalTask: function(data) {
    this.view.lblTaskNumbers.text = data.length + " Results";
  },
  _getFilteredSearchData: function(data, changedtext) {
    var filteredData = null;
    try {
      if (Array.isArray(data) && data.length > 0) {
        filteredData = data.filter(function(str) {
          if (((str["Id"] + "").toLowerCase()).indexOf(changedtext) >= 0)
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
  _createDynamicAssetType: function(data) {
    if (!kony.sdk.isNullOrUndefined(data) && Array.isArray(data) && data.length > 0) {
      var lblAssetHeader = new kony.ui.Label({
        "id": "lblAssetType",
        "isVisible": true,
        "left": "6%",
        "skin": "sknlblICBg00000Op0SFPTxtReg100",
        "text": "TYPE",
        "textStyle": {
          "letterSpacing": 0,
          "strikeThrough": false
        },
        "top": "0dp",
        "bottom": "6dp",
        "width": "70%",
        "zIndex": 1
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {
        "textCopyable": false
      });
      this.view.flxFilterContent.add(lblAssetHeader);
      for (var i = 0; i < data.length; i++) {
        var flxAssetType = new kony.ui.FlexContainer({
          "autogrowMode": kony.flex.AUTOGROW_NONE,
          "clipBounds": true,
          "height": "50dp",
          "id": "flxAssetType" + i,
          "isVisible": true,
          "layoutType": kony.flex.FREE_FORM,
          "left": "0dp",
          "skin": "slFbox",
          "top": "0dp",
          "width": "100%",
          "zIndex": 1
        }, {}, {});
        flxAssetType.setDefaultUnit(kony.flex.DP);
        var flxAssetDivider = new kony.ui.FlexContainer({
          "autogrowMode": kony.flex.AUTOGROW_NONE,
          "clipBounds": true,
          "height": "1dp",
          "id": "flxAssetDivider" + i,
          "isVisible": true,
          "layoutType": kony.flex.FREE_FORM,
          "left": "6%",
          "skin": "sknFlxTransBGBorderE6E6E6",
          "top": "49dp",
          "width": "88%",
          "zIndex": 1
        }, {}, {});
        flxAssetDivider.setDefaultUnit(kony.flex.DP);
        var lblAssetType = new kony.ui.Label({
          "centerY": "50%",
          "id": "lblAssetType" + i,
          "isVisible": true,
          "left": "6%",
          "skin": "sknLblInspectionAssetType",
          "text": data[i]["Name"],
          "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
          },
          "top": "0dp",
          "width": "70%",
          "zIndex": 1
        }, {
          "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
          "padding": [0, 0, 0, 0],
          "paddingInPixel": false
        }, {
          "textCopyable": false
        });
        var flxImageBox = new kony.ui.FlexContainer({
          "autogrowMode": kony.flex.AUTOGROW_NONE,
          "clipBounds": true,
          "height": "100%",
          "id": "flxImageBox" + i,
          "isVisible": true,
          "layoutType": kony.flex.FREE_FORM,
          "right": "1%",
          "skin": "slFbox",
          "top": "0dp",
          "width": "15%",
          "onClick": this._onClickFlxImageBox.bind(this),
          "zIndex": 1
        }, {}, {});
        flxImageBox.setDefaultUnit(kony.flex.DP);
        var imgFilterBox = new kony.ui.Image2({
          "centerX": "50%",
          "centerY": "50%",
          "height": "20dp",
          "id": "imgFilterBox" + i,
          "isVisible": true,
          "skin": "slImage",
          "src": "check_box_inactive.png",
          "width": "20dp",
          "zIndex": 1
        }, {
          "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
          "padding": [0, 0, 0, 0],
          "paddingInPixel": false
        }, {});
        flxImageBox.add(imgFilterBox);
        flxAssetType.add(lblAssetType, flxImageBox, flxAssetDivider);
        this.view.flxFilterContent.add(flxAssetType);
      }
    }

  },
  _successFetchAssetTypes: function(response) {
    if (Array.isArray(response)) {
      this.assetTypesList = response.sort(function(a, b) {
        var nameA = a["Name"].toLowerCase();
        var nameB = b["Name"].toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.view.flxFilterContent.removeAll();
      this._createDynamicAssetType(this.assetTypesList);
    }

  },
  _failureFetchAssetTypes: function(res) {
    this.view.loadingScreen.hide();
    kony.application.dismissLoadingScreen();
    alert(res);
  },
  _onClickFlxImageBox: function(eventobject) {
    var id = eventobject.id.replace("flxImageBox", "");
    if (this.view.flxFilterContent["imgFilterBox" + id].src == "check_box_active.png") {
      this.view.flxFilterContent["imgFilterBox" + id].src = "check_box_inactive.png";
    } else {
      this.view.flxFilterContent["imgFilterBox" + id].src = "check_box_active.png";
    }
  },
  _onClickApplyFilter: function() {
    var widgets = this.view.flxFilterContent.widgets();
    var selectedAssetTypes = [];
    for (var i = 0; i < widgets.length - 1; i++) {
      if (this.view.flxFilterContent["imgFilterBox" + i].src == "check_box_active.png") {
        selectedAssetTypes.push(this.assetTypesList[i]["Name"]);
      }
    }
    this._selectedFilter = selectedAssetTypes;
    var filteredData = this.assetsList;
    var assetType;
    filteredData = filteredData.filter(function(element) {
      if (typeof element === 'object' && typeof element !== null) {
        assetType = element["type"];
        if (typeof assetType === 'object' && typeof assetType !== null) {
          return this._isStringInArray(assetType["Name"], selectedAssetTypes);
        } else
          return false;
      } else
        return false;
    }.bind(this));
    this._filterCount = this._selectedFilter.length;
    this.populateFilterCount();
    this._filteredData = filteredData;
    this._setDataToSegment(filteredData);
    this._checkEmptySegment();
    this.view.lblTaskNumbers.text = filteredData.length + " Results";
    this._isFilterEnabled = true;
    this._hideFilterScreen();
  },
  populateFilterCount: function() {
    if (this._filterCount > 0) {
      this.view.lblFilterScreen.text = "(" + Number(this._filterCount).toFixed() + ")" + " FILTER";
      this.view.lblFilterCount.text = Number(this._filterCount).toFixed();
      this.view.imgFilter.src = "filter.png"; //change to filter blue
      this.view.flxFilterCountContainer.isVisible = true;
    } else {
      this.view.lblFilterScreen.text = "FILTER";
      this.view.lblFilterCount.text = "";
      this.view.imgFilter.src = "filter.png";
      this.view.flxFilterCountContainer.isVisible = false;
    }
    this._filterCount = 0;
  },
  _isStringInArray: function(str, strArray) {
    for (var j = 0; j < strArray.length; j++) {
      if (strArray[j].match(str))
        return true;
    }
    return false;
  },
  _showFilterScreen: function() {
    this.view.flxFilterScreen.animate(
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
  },
  _hideFilterScreen: function() {
    this.view.flxFilterScreen.animate(
      kony.ui.createAnimation({
        100: {
          top: "100%",
          "stepConfig": {}
        }
      }), {
        delay: 0,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: .3
      }, {
        animationEnd: function() {}
      });
  },
  /**
     * @function
     *
     */
  _onClickSegAsset: function() {
    debugger;
    var selectedRowItem = this.view.segAssets.selectedRowItems;
    var assetInfo;
    if (Array.isArray(selectedRowItem) && selectedRowItem.length > 0) {
      var assetId = selectedRowItem[0]["lblAssetId"];
      if (typeof assetId === 'string') {
        assetId = assetId.split(app_constant.asset);
        if (Array.isArray(assetId) && assetId.length > 1) {
          assetId = assetId[1];
          assetInfo = this.getAssetInfoById(assetId);
          assetInfo["distance"]=selectedRowItem[0]["lblDistance"];
        }
      }
    }
    var navigationObj = new kony.mvc.Navigation("frmMeasurementAssignment");
    var navigationData = {};
    navigationData.previousForm = "frmInspectionCreation";
    navigationData.assetInfo = assetInfo;
    navigationData.userData = this._navigationData;
    try {
      navigationObj.navigate(navigationData);
    } catch (excp) {
      kony.print("##### Eception occured while navigating to the frmMeasurementAssignment #####" + JSON.stringify(navigationData));
    }
  },
  getAssetInfoById: function(assetId) {

    var assetInfo = null;
    if (Array.isArray(this.assetsList) && (typeof assetId === 'string' || typeof assetId === 'number')) {
      var assetListLength = this.assetsList.length;
      for (var i = 0; i < assetListLength; i++) {
        if (this.assetsList[i]["Asset_Id"] + "" === assetId) {
          assetInfo = this.assetsList[i];
          break;
        }
      }
    }
    return assetInfo;
  },
  _onClickFilterReset: function() {
    this.view.lblTaskNumbers.text = this.assetsList.length + " Results";
    this._setDataToSegment(this.assetsList);
    this._checkEmptySegment();
    this._selectedFilter = [];
    this._hideFilterScreen();
    this._filteredData = [];
    this._isFilterEnabled = false;
    var widgets = this.view.flxFilterContent.widgets();
    for (var i = 0; i < widgets.length - 1; i++) {
      this.view["imgFilterBox" + i].src = "check_box_inactive.png";
    }
    this._filterCount = 0;
    this.populateFilterCount();
  },
  _onClickBack: function() {
    var navObj = new kony.mvc.Navigation("frmInspectionsList");
    var navigationData = {};
    navigationData = this._navigationData;
    navObj.navigate(navigationData);
  },
  showSearchContainer: function() {
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
        }
      });
  },
  resetAssetSearch: function() {
    this.view.imgClearTextBox.setVisibility(false);
    this.view.txtBoxSearchInspection.text = "";
    this.view.segAssetSearch.removeAll();
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
    var searchKey = this.view.txtBoxSearchInspection.text;
    searchKey = searchKey.trim();
    searchKey = (searchKey + "").toLowerCase();
    var filteredSearchData = null;
    if (this._isFilterEnabled === false) {
      filteredSearchData = this._getFilteredSearchData(this.assetsList, searchKey);
    } else {
      filteredSearchData = this._getFilteredSearchData(this._filteredData, searchKey);
    }
    this.populateAssetIdToSearchSeg(filteredSearchData);
  },
  populateAssetIdToSearchSeg: function(assetList) {
    if (Array.isArray(assetList)) {
      var recordLength = assetList.length;
      var segObj = {};
      var segList = [];
      for (var i = 0; i < recordLength; i++) {
        segObj = {};
        segObj["lblSearchedResult"] = assetList[i]["Id"];
        segObj["lblDisplayText"] = assetList[i]["Id"];
        segList.push(segObj);
      }
      this.view.segAssetSearch.removeAll();
      this.view.segAssetSearch.setData(segList);
    }
  },
  onSegRowClick: function(eventObject, sectionNumber, rowNumber) {
    var selectedRowItem = eventObject["selectedRowItems"];
    var assetInfo = null;
    if (Array.isArray(selectedRowItem) && selectedRowItem.length > 0) {
      var assetId = selectedRowItem[0]["lblSearchedResult"];
      if (typeof assetId === 'string') {
        assetInfo = this.findAssetWithAssetId(assetId);
      }
    }
    var navigationObj = new kony.mvc.Navigation("frmMeasurementAssignment");
    var navigationData = {};
    navigationData.previousForm = "frmInspectionCreation";
    navigationData.assetInfo = assetInfo;
    navigationData.userData = this._navigationData;
    try {
      navigationObj.navigate(navigationData);
    } catch (excp) {
      kony.print("##### Eception occured while navigating to the frmMeasurementAssignment #####" + JSON.stringify(navigationData));
    }
  },
  findAssetWithAssetId: function(assetId) {
    var assetInfo = null;
    if (Array.isArray(this.assetsList) && (typeof assetId === 'string' || typeof assetId === 'number')) {
      var assetListLength = this.assetsList.length;
      for (var i = 0; i < assetListLength; i++) {
        if (this.assetsList[i]["Id"] + "" === assetId) {
          assetInfo = this.assetsList[i];
          break;
        }
      }
    }
    return assetInfo;
  },
  truncateString: function(str) {
    var resultString = "";
    str = String(str);
    var lengthOfStr = str.length;
    if (lengthOfStr > 20) {
      resultString = str.substring(0, 20);
      resultString = resultString + "...";
    } else {
      resultString = str;
    }
    return resultString;
  }
});