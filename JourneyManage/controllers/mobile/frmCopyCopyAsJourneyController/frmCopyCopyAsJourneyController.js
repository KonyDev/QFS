define({ 


  onNavigate:function(param){
    debugger;
    var departureDateObj="";
    var arrivalDateObj="";
    var travelTime="";
    if(typeof param=='object' && param!==null && param.Type == "Copy"){
      departureDateObj=param.journey_expected_departure_datetime;
      arrivalDateObj=param.journey_expected_arrival_datetime;
      travelTime=JourneyUtil.getTwoDatesTimeDifference(arrivalDateObj.getTime(), departureDateObj.getTime())+" Hrs";  
      this.view.lblTravelTime.text = travelTime;
      this.view.lblArrivalAddress.text = param.journey_expected_arrivalpoint_address;
      this.view.lblDepartureAddress.text = param.journey_expected_departure_address;
      this.GetResponseFromDatabaseWhereClause('journey_tbl', 'journey_id_pk', param.JourneyId);
//       this.view.lblJourneyId.text = parseInt(param.JourneyId);
      this.view.lblDepartureDateTime.text = DateConversion(param.journey_expected_departure_datetime);
      this.view.lblArribalDateTime.text = DateConversion(param.journey_expected_arrival_datetime);
    }
    if(typeof param=='object' && param!==null && param.Type == "CopyAsReturn"){
      departureDateObj=param.journey_expected_departure_datetime;
      arrivalDateObj=param.journey_expected_arrival_datetime;
      travelTime=JourneyUtil.getTwoDatesTimeDifference(arrivalDateObj.getTime(), departureDateObj.getTime())+" Hrs";  
      this.view.lblTravelTime.text = travelTime;
      this.view.lblArrivalAddress.text = param.journey_expected_arrivalpoint_address;
      this.view.lblDepartureAddress.text = param.journey_expected_departure_address;
      //this.view.lblJourneyId.text = parseInt(param.JourneyId);
      this.GetResponseFromDatabaseWhereClause('journey_tbl', 'journey_id_pk', param.JourneyId);
      this.view.lblDepartureDateTime.text = DateConversion(param.journey_expected_departure_datetime);
      this.view.lblArribalDateTime.text = DateConversion(param.journey_expected_arrival_datetime);
    }
  },
  onGetAllSuccess_GetResponseFromDatabaseWhereClause:function(records){
    this.view.lblJourneyId.text = records[0].journey_uf_id;
  },
  onGetAllFail_GetResponseFromDatabaseWhereClause:function(error){
  },
  GetResponseFromDatabaseWhereClause:function(TableName, ComparingField, ComparingFieldValue)
  {
    var categories = new kony.sdk.KNYObj(TableName);
    var whereClause = ComparingField+" = '"+ComparingFieldValue+"'";
    var options = {};
    options["whereConditionAsAString"] = whereClause;
    categories.get(options, this.onGetAllSuccess_GetResponseFromDatabaseWhereClause.bind(this), this.onGetAllFail_GetResponseFromDatabaseWhereClause.bind(this));
  }


});