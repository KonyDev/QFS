//Type your code here

var app_constant={
  "inspection":"Inspection0",
  "asset":"Asset0",
  "user":"User000",
  "measurement_set":"MEA0",
  "offline_inspection_msg":"Inspection to sync(",
  "offline_inspection_closing_msg":")",
  "NO_NETWORK_MESSAGE":"Please check your network connection!"
};
var DATA_MODEL={
  "INSPECTION":"inspection",
  "INSPECTION_MEASUREMENT":"inspection_measurement",
  "MEDIA":"media",
  "MEASUREMENT_IMAGE":"measurement_images",
  "MEASUREMENT_RANGE":"measurement_range",
  "TIME_SHEET":"Inspection_Date_Time_Sheet",
  "ASSET_REPRESENTER":"Asset_Representer",
  "ASSET":"asset",
  "ASSET_LOCATION":"asset_location",
  "ASSET_TYPE":"asset_type"
};
var OBJECT_SERVICE={
	"SYNC":"InspSyncObjSrvc"
};

var InspectionUtil=(function(){
  return{
    isJsonObject:function(param){
      var isJson;
      if(typeof param==='object' && typeof param!==null){
        isJson=true;
      }else{
        isJson=false;
      }
      return isJson;
    },
    /**
     * @function
     *
     */
    isNetworkAvailable:function(){
      return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
    },
    addZeroPrefix:function(number) {
      var result;
      if (number >= 0 && number < 10) {
        result = "0" + number;
      } else {
        result = number;
      }
      return result;
    },
    validateText:function (param){
      var text="";
      if(param!==null&&param!==undefined){
        param=param+"";
        text=param.trim();
      }
      return text;
    },
    getReadableTimeString:function (dateObj){
      var timeString="";
      if(dateObj!==null && dateObj!==undefined){
        try{
          //var dateObj=new Date(param);
          var hrs = dateObj.getHours();
          hrs=this.addZeroPrefix(hrs);//+"";
          var min = dateObj.getMinutes();
          min=this.addZeroPrefix(min);
          timeString=hrs+":"+min+" Hrs";
        }catch(excp){
          debugger;
          kony.print(excp.toString());
          throw excp;
          
        }
      }
      return timeString;
    },
    getReadableDateString:function (dateObj){
      var dateString="";
      if(dateObj!==null && dateObj!==undefined){
        try{
          //var dateObj=new Date(param);
          var mDate=dateObj.getDate();
          var mMonth=dateObj.toLocaleString("en-us", { month: "short" });
          dateString=mDate+" "+mMonth;
        }catch(excp){
          debugger;
          kony.print(excp.toString());
          throw excp;
        }
      }
      return dateString;
    },
    /**
     * @function
     *
     * @param sqlDateString 
     */
    getSqlDatetoJSDate:function(sqlDateString){
      //Converts UTC date to local date also.
      var jsDateObj=null;
      if(typeof sqlDateString=='string'){
        try{
          //var utcDateObj=new Date(sqlDateString);
          //return utcDateObj;
          var dateTimeString=sqlDateString.split("T");
          if(Array.isArray(dateTimeString) && dateTimeString.length>1){
            var dateString=dateTimeString[0];
            var timeString=dateTimeString[1];
            dateString=dateString.split("-");
            timeString=timeString.split(":");
            var dateObj=new Date(Date.UTC(dateString[0], Number(dateString[1])-1, dateString[2], timeString[0], timeString[1], 0));
            jsDateObj=dateObj;
          }
        }catch(excp){
          debugger;
          jsDateObj=null;
          throw excp;
        }

      }else{
        debugger;
        throw "Invalid date string!";
      }
      return jsDateObj;
    },
    /**
     * @function
     *
     * @param dateObj 
     */
    getUTCtoLocalDatetime:function(utcDateObj){
      var localDateObj=null;
      try{
        //var utcDateObj=new Date(dateObj);
        localDateObj=new Date();
        var localDateString=utcDateObj.toLocaleDateString();
        var localTimeString=utcDateObj.toLocaleTimeString();
        
        //localDateString=localDateString.split(/(-|\/)/);
        localDateString=localDateString.split('-');
        localDateObj.setFullYear(localDateString[0]);
        localDateObj.setMonth(localDateString[1]);
        localDateObj.setDate(localDateString[2]);
        utcDateObj.toLocaleTimeString();
        
        //localTimeString=localTimeString.split(/(:)/);
        localTimeString=localTimeString.split(':');
        localDateObj.setHours(localTimeString[0]);
        localDateObj.setMinutes(localTimeString[1]);
        localDateObj.setSeconds(localTimeString[2]);
        
      }catch(excp){
        debugger;
        localDateObj=null;
        throw excp;
      }
      return localDateObj;
    },
    parseRecords:function(records,key){
      var mappedData=null;
      if(Array.isArray(records) && typeof key ==='string'){
        var recordLength=records.length;
        var recordKey;
        mappedData={};
        for(var i=0;i<recordLength;i++){
          recordKey=records[i][key];
          if(typeof recordKey === 'string' || typeof recordKey === 'number'){
            if(mappedData[recordKey]===null || mappedData[recordKey]===undefined){
              mappedData[recordKey]=[records[i]];
            }else{
              mappedData[recordKey].push(records[i]);
            }
          }
        }
      }
      return mappedData;
    },
    filterByStatus:function (statusKeyList,recordList){
      var filteredRecords=[];
      var status;
      if(Array.isArray(recordList)&&Array.isArray(statusKeyList)){
        var recordLength=recordList.length;
        var statusKeyListLength=statusKeyList.length;
        var record;
        var statusKey;
        if(statusKeyListLength===0)
          return recordList;
        for(var i=0;i<recordLength;i++){
          record=recordList[i];
          if(typeof record["Status"]==='string' && record["Status"]!==null){
            status=record["Status"].toLowerCase();
            for(var j=0;j<statusKeyListLength;j++){
              statusKey=statusKeyList[j];
              if(typeof statusKey==='string' && statusKey!==null){
                statusKey=statusKey.toLowerCase();
                if(status===statusKey){
                  filteredRecords.push(record);
                  break;
                }
              }
            }
          }
        }
      }else{
        filteredRecords= [];
      }
      return filteredRecords;
    },
    sortByDate:function(inspectionList){
      //debugger;
      if(Array.isArray(inspectionList)){
        inspectionList.sort(function(a,b){
          var date1=a["Assigned_Timestamp"];
          //date1=_convertDateStringToEpochTime(date1);
          date1=new Date(date1);
          var date2=b["Assigned_Timestamp"];
          //date2=_convertDateStringToEpochTime(date2);
          date2=new Date(date2);
          return date2-date1;
        });
      }
    },
    findDistanceInMiles: function(lat1,lon1,lat2,lon2) {
      var Radius = 6371; 
      var radConst = (Math.PI/180);
      var dLat = (lat2-lat1)*radConst; 
      var dLon = (lon2-lon1)*radConst; 
      var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos((lat1*radConst)) * Math.cos(lat2*radConst) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
      var centralAngle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var distance = Radius * centralAngle * 0.6237; 
      return distance;
    },
    
  };
})();
var Inspection= (function (){
  var assetGroupsList=null;
  var assetLocationsList=null;
  var assetMeasurementsList=null;
  var assetsList=null;
  var assetGroupNameList=null;
  var assetTypesList=null;
  var inspectionMeasurementList=null;
  var inspectionList=null;
  var measurementHistoryList=null;
  var measurementImageList=null;
  var measurementRangeList=null;
  var measurementList=null;
  var measurementSetRangeList=null;
  var mediaList=null;
  var userList=null;
  return{
    getAssetGroupList:function(){
      return assetGroupsList;
    },
    setAssetGroupsList:function(val){
      assetGroupsList=val;
    },
    getAssetLocationsList:function(){
      return assetLocationsList;
    },
    getAssetMeasurementsList:function(){
      return assetMeasurementsList;
    },
    setAssetMeasurementsList:function(val){
      assetMeasurementsList=val;
    },
    getAssetsList:function(){
      return assetsList;
    },
    setAssetsList:function(val){
      assetsList=val;
    },
    getAssetGroupNameList:function(){
      return assetGroupNameList;
    },
    setAssetGroupNameList:function(val){
      assetGroupNameList=val;
    },
    getAssetTypesList:function(){
      return assetTypesList;
    },
    setAssetTypesList:function(val){
      assetTypesList=val;
    },
    getInspectionMeasurementList:function(){
      return inspectionMeasurementList;
    },
    setInspectionMeasurementList:function(val){
      inspectionMeasurementList=val;
    },
    getInspectionList:function(){
      return inspectionList;
    },
    setInspectionList:function(val){
      inspectionList=val;
    },
    getMeasurementHistoryList:function(){
      return measurementHistoryList;
    },
    setMeasurementHistoryList:function(val){
      measurementHistoryList=val;
    },
    getMeasurementImageList:function(){
      return measurementImageList;
    },
    setMeasurementImageList:function(val){
      measurementImageList=val;
    },
    getMeasurementRangeList:function(){
      return measurementRangeList;
    },
    setMeasurementRangeList:function(val){
      measurementRangeList=val;
    },
    getMeasurementList:function(){
      return measurementList;
    },
    setMeasurementList:function(val){
      measurementList =val;
    },
    getMeasurementSetRangeList:function(){
      return measurementSetRangeList;
    },
    setMeasurementSetRangeList:function(val){
      measurementSetRangeList =val;
    },
    getMediaList:function(){
      return mediaList;
    },
    setMediasList:function(val){
      mediaList =val;
    },
    getUserList:function(){
      return userList;
    },
    setUserList:function(val){
      userList =val;
    }
  };
})();