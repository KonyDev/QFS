function jsons(stringValueFromJsonObject)
{
  return JSON.stringify(stringValueFromJsonObject);
}

var ReturnRecords = {};
var isSuccess = false;
var errorCode = "";
var errorMessage = "";

// =======================================================================================================================
// ================================= GetResponseFromDatabaseWhereClause ==================================================
// =======================================================================================================================
function onGetAllSuccess_GetResponseFromDatabaseWhereClause(records){
  isSuccess = true;
  ReturnRecords = (records);
}
function onGetAllFail_GetResponseFromDatabaseWhereClause(error){
  errorCode = error.code;
  errorMessage = error.message;
}
function GetResponseFromDatabaseWhereClause(TableName, ComparingField, ComparingFieldValue)
{
  var categories = new kony.sdk.KNYObj(TableName);
  var whereClause = ComparingField+" = '"+ComparingFieldValue+"'";
  var options = {};
  options["whereConditionAsAString"] = whereClause;
  if(ComparingField === null && ComparingFieldValue === null)
  {
    (categories.get(null, onGetAllSuccess_GetResponseFromDatabaseWhereClause, onGetAllFail_GetResponseFromDatabaseWhereClause));
  }
  else
  {
    (categories.get(options, onGetAllSuccess_GetResponseFromDatabaseWhereClause, onGetAllFail_GetResponseFromDatabaseWhereClause));
  }
  while(true)
  {
    if(isSuccess)
      return ReturnRecords;
    else
      return "Error : "+errorCode + " Error Message : "+errorMessage;
  }
}
// =======================================================================================================================
// =======================================================================================================================

function successCallback(response){
  alert("Record Updated successfully: "+jsons(response));
}
function errorCallback(error){
  alert("Update failed with error: " + JSON.stringify(error));
}



function UpdateRecord()
{
  var category = new kony.sdk.KNYObj(USER_TBL_GLOBAL);
  var options = {};
  var record = {};
  var primaryKeys = {};
  record["user_firstname"] = "Madhu123";
  record["lastupdateddatetime"] = null;
  primaryKeys["user_emp_id_pk"] = "00576943";
  options["primaryKeys"] = primaryKeys;
  category.updateByPK(record, options, successCallback, errorCallback)
}



function successCallbackWithParams(response){
  //   toast("Record Updated !!!");
}
function errorCallbackWithParams(error){
  throw error;
}



function UpdateRecordWithParams(TableName,PrimaryKey,PrimaryKeyValue,recordJSONtoUpdate)
{
  // alert(jsons(recordJSONtoUpdate));
  try
  {
    var category = new kony.sdk.KNYObj(TableName);
    var options = {};
    var primaryKeys = {};
    primaryKeys[PrimaryKey] = PrimaryKeyValue;
    options["primaryKeys"] = primaryKeys;
    category.updateByPK(recordJSONtoUpdate, options, successCallbackWithParams, errorCallbackWithParams);
  }
  catch(err)
  {
    alert("Error in the UpdateRecordWithParams: "+err.message);
  }
}




//========================================================================================================
//=================================== Delete Row by Primary Key ==========================================
//========================================================================================================

//Success callback
function onSuccess_DeleteRowByPrimaryKey(){
  alert("DONEDELETE");
}
//Failure callback
function onFailure_DeleteRowByPrimaryKey(error){
  alert("FAILEDDELETE");
}

function DeleteRowByPrimaryKey(TableName,PrimaryKey,PrimaryKeyValue)
{
  var categories = new kony.sdk.KNYObj(TableName);
  var primaryKeys = {};
  primaryKeys[PrimaryKey] = PrimaryKeyValue;
  var options = {};
  options["primaryKeys"]=primaryKeys;
  categories.deleteByPK(options, onSuccess_DeleteRowByPrimaryKey, onFailure_DeleteRowByPrimaryKey);
}



//========================================================================================================
//=================================== Add Row by Primary Key ==========================================
//========================================================================================================

//Success callback
function onSuccess_AddNewRowIntoTable(){
  alert("DONE");
}
//Failure callback
function onFailure_AddNewRowIntoTable(error){
  alert("FAILED: "+error.message);
}

function AddNewRowIntoTable(TableName,recordToInsert)
{
  var category = new kony.sdk.KNYObj(TableName);
  category.create(recordToInsert, {}, onSuccess_AddNewRowIntoTable, onFailure_AddNewRowIntoTable);
}


function fmgLogout(){
  kony.print("inside fmgLogout");
  //kony.store.setItem(DATA_MODEL.USER_TBL, null);
  //kony.store.setItem("IsAlreadyLoggedIn", false);
  var authClient = KNYMobileFabric.getIdentityService(IdentityServiceName);
  authClient.logout(
    function(response) {
      kony.print("logout Success: "+JSON.stringify(response));
      kony.store.removeItem(DATA_MODEL.USER_TBL);
      var device = kony.os.deviceInfo().name; 
      if(device === "android") { 
        kony.print("clearing cookies");
        kony.net.removeAllCookies(); 
      }else{
        kony.net.clearCookies();
      }
    },
    function(error) {
      kony.print("logout failed: "+ JSON.stringify(error));
    }, {});
  //navigating to logout screen
  var navObj = new kony.mvc.Navigation("LoginADFS");
  navObj.navigate();
}


function createRecord_online(dataModel,record){
  try{
    var objSvc = kony.sdk.getCurrentInstance().getObjectService(JConstant.OFFLINE_OBJECT_SERVICE, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(dataModel);
    var options = {
      "dataObject": dataObject,
      "headers":{}
    }; 
    dataObject.setRecord(record);
    kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);
    objSvc.create(options,
                  createRecordSuccess(dataModel),
                  createRecordailure(dataModel)); 

  }catch(excp){
    alert(excp.error);
    kony.application.dismissLoadingScreen();
  }
}


function createRecordSuccess(dataModel,result){
  kony.application.dismissLoadingScreen();
  return result;
}


function createRecordailure(passengerList,error){
  kony.application.dismissLoadingScreen();
  return error;
}


function tConvert (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}
function DateConversion(r){

  var arrayofDateString = r.toDateString().split(' ');
  var DateString = arrayofDateString[2]+" "+arrayofDateString [1]+" "+arrayofDateString[3];
  var arrayofTimeString = tConvert(r.toLocaleTimeString()).split(":");
  var TimeString = arrayofTimeString[0] + ":" + arrayofTimeString[1] + " " + arrayofTimeString[2].substr(-2);
  return DateString+" "+TimeString;
}

function parse(htmlCOntent){
  debugger;
  var regExp=/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/g;
  var parseContent=[];
  if(typeof htmlContent=='string')
    try{
      parseContent=htmlContent.match(regExp);
    }catch(excp){
      parseContent=[];
      debugger;
    }
  return parseContent;
}


function toast(s)
{
  try
  {
    if((kony.os.deviceInfo().name).toLowerCase() == "android")
    {
      var toastObj = new kony.ui.Toast({"text": s,"duration": constants.TOAST_LENGTH_SHORT});
      var offset = { 
        gravity: constants.TOAST_POS_MIDDLE_CENTER, 
        x: "0",
        y: "1000"
      };
      toastObj.alignConfig = offset;
      toastObj.show();
    }
    else
    {
      alert(s);
    }
  }
  catch(err)
  {

  }
}
