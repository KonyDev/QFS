define({ 
  pastDays:7,
  previousIndex : [],
  count:0,
  ufids : [],
  //Type your controller code here 
  onFormPreSHow:function(){
    kony.print("in form preSHow");
    journiesList_launch_Flow="Normal_flow";
    kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    isJourneyDetailsUpdated=false;
    isComingFromJourneyDetails=false;
    this.resetDashBoard();
    this.fetchJourneyDetails();
    //this.view.journeydetail.onPreShowOfJourneyDetails();
    // this.view.journeydetail.onPreShowOfJourneyDetails();
    //this.view.journeymap.setPin(pin);
  },
  destroyPreviousForms : function(){
    kony.application.destroyForm("frmTravellerDetails");    
    kony.application.destroyForm("frmRoute");    
    kony.application.destroyForm("frmTrackingDetails");    
    kony.application.destroyForm("frmVehicleDetails");    
    kony.application.destroyForm("frmReviewDetails");    
  },
  resetDashBoard : function()
  {
    kony.print("in resetDashBoard method");
    this.view.searchnfilter.hideFilterBox();
    this.view.searchnfilter.hideSearchBox();
    this.view.segJourneyList.removeAll();
    this.view.tabpane.setSkinForSelectedTab("All");
  },
  onAddClick:function(param){
    var navigationObj = new kony.mvc.Navigation("frmTravellerDetails");
    navigationObj.navigate();
  },
  onNotificationBellClick:function(){
    this.fetchLatestIncidentsList();
    this.view.jrmgmtheader.enableBellNotification(2);
  },
  onNotificationCloseClick:function(){
    journiesList_launch_Flow="Notification_flow"
    this.view.flxNotificationContainer.setVisibility(false);
    this.fetchJourneyDetails();
  },
  onLogOutClick:function(){

  },
  onJourneyCardClick:function(){
    kony.print("inonJourneyCardClick");
    selectedJourney=this.view.segJourneyList.selectedRowItems;
    kony.print("selectedJourney  "+JSON.stringify(selectedJourney));
    this.view.journeymap.setZoomLevelOnMap();
    kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    this.fetchCheckPointsListForJourneyId(selectedJourney[0]["journey_id"]);
    this.view.journeydetail.setVisibilityOfActionFlex(selectedJourney[0]["journeyStatus"]["text"]);

    //this.showDetailScreen();

  },
  onJourneyDetailBack:function(param){
    try{

      if(polylineId!==null || polylineId !=="")
      {
        kony.print("removing previous PolyLine");
        this.view.journeymap.deletePolyline(polylineId);
      }
      this.removePinsFromMap();
      if(isJourneyDetailsUpdated!=null && isJourneyDetailsUpdated!=""  && isJourneyDetailsUpdated!=undefined )
      {
        if(isJourneyDetailsUpdated==true)
        {
          journiesList_launch_Flow="Normal_flow";
          kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
          this.fetchJourneyDetails();
          isJourneyDetailsUpdated=false;
        }
      }
      else
      {
        var data=this.view.segJourneyList.data;
        for(var i=0;i<data.length;i++)
        {
          pin= this.createPin(i,data);
          kony.print("pin ::"+JSON.stringify(pin));
          if(pin["lon"]==null || pin["lat"]==null||pin["lon"]=="" || pin["lat"]=="")
            kony.print("unable set the pin for record"+row);
          else
          {
            this.view.journeymap.setPin(pin);
            pinsList.push(pin);
          }

        }

      }
      this.hideDetailScreen();
    }catch(excp){
      //debugger;
    }
  },
  // onFormPostShow:function(){
  // this.view.forceLayout();
  // },
  showDetailScreen:function(){
    try{
      this.view.flxJourneyDetail.animate(
        kony.ui.createAnimation({100:{left:"0%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.30},
        {animationEnd: function() {
        } 
        });
    }catch(excp){
      //debugger;
      throw excp;
    }
  },
  hideDetailScreen:function(){
    try{
      this.view.flxJourneyDetail.animate(
        kony.ui.createAnimation({100:{left:"-100%","stepConfig":{}}}),
        {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.30},
        {animationEnd: function() {
        } 
        });
    }catch(excp){
      debugger;
      throw excp;
    }
  },
  fetchJourneyDetails: function()
  {
    kony.print("in fetchJourneyDetails");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });

    var dataObject = new kony.sdk.dto.DataObject("journey_tbl");
    var bufferDate = new Date();
    bufferDate.setDate(bufferDate.getDate()-this.pastDays);
    var utcDate = new Date(bufferDate).toISOString();
    //var odataUrl = "$select=event_id,name";
    //var filterParam="journey_id_pk eq "+"JOU-000000";

    //var odataUrl = "$filter="+filterParam+" ";
    //     var odataUrl = "$orderby="+"lastupdateddatetime"+" desc";
    //     //var odataUrl ="";
    //     dataObject.odataUrl =odataUrl;
    var options = {
      "dataObject": dataObject,
      "queryParams":{
        "$filter":"journey_expected_arrival_datetime gt "+utcDate,
        "$orderby":"journey_expected_arrival_datetime desc"
      }
    };
    objSvc.fetch(options,
                 this.fetchJourneyDetailsSuccessCallback.bind(this),
                 this.fetchJourneyDetailsFailureCallback.bind(this));
  },
  fetchJourneyDetailsSuccessCallback: function (response)
  {

    kony.print("journeyDetails"+JSON.stringify(response));
    journeyDetails=response;
    polylineId=null;
    pinList_LiveTab=[];
    var supervisorsMasterData=this.prepareSUpervisorsMasterData();
    this.view.searchnfilter.supervisorsMasterData=supervisorsMasterData;
    this.fetchTrackingPoints();
    this.getUserNamesForUserIds();
    this.fetchCheckInIntervels();

  },
  fetchJourneyDetailsFailureCallback: function (error)
  {
    kony.print("journeyDetails"+JSON.stringify(error));
  },
  fetchCheckInIntervels: function()
  {
    kony.print("in fetchCheckInIntervels");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });

    var dataObject = new kony.sdk.dto.DataObject("checkin_interval_master_tbl");
    var odataUrl ="";
    dataObject.odataUrl =odataUrl;
    var options = {
      "dataObject": dataObject
    };
    objSvc.fetch(options,
                 this.fetchCheckInIntervelsSuccessCallback.bind(this),
                 this.fetchCheckInIntervelsFailureCallback.bind(this));
  },
  fetchCheckInIntervelsSuccessCallback: function (response)
  {
    kony.print(" fetchCheckInIntervelsSuccessCallback ::"+JSON.stringify(response));
    checkIn_intervels=response;
  },
  fetchCheckInIntervelsFailureCallback : function(error)
  {
    kony.print("in fetchCheckInIntervelsFailureCallback"+JSON.stringify(error));
  },
  fetchTrackingPoints: function()
  {
    kony.print("in fetchTrackingPoints");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("tracking_points_tbl");
    var odataUrl ="";
    dataObject.odataUrl =odataUrl;
    var options = {
      "dataObject": dataObject
    };
    objSvc.fetch(options,
                 this.fetchTrackingPointsSuccessCallback.bind(this),
                 this.fetchTrackingPointsFailureCallback.bind(this));
  },
  fetchTrackingPointsSuccessCallback: function (response)
  {
    kony.print("fetchTrackingPointsSuccessCallback"+JSON.stringify(response));
    tractingPointsResponse=response;
    var trackingPointsMasterData=this.prepareTrackingPointsMasterData();
    this.view.searchnfilter.setTrackingPointsData(trackingPointsMasterData);//ey1", "value1"],["key2", "value2"]];

  },
  fetchTrackingPointsFailureCallback : function(error)
  {
    kony.print("fetchTrackingPointsFailureCallback"+JSON.stringify(error));
  },


  getUserNamesForUserIds: function()
  {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("user_tbl");
    //var odataUrl = "$select=event_id,name";
    kony.print("journeyDetails1"+JSON.stringify(journeyDetails));
    var filterParam="user_emp_id_pk eq "+journeyDetails["records"][0]["user_emp_id_fk"];
    for(i=1;i<journeyDetails["records"].length;i++)
    {
      filterParam=filterParam+" or user_emp_id_pk eq "+journeyDetails["records"][i]["user_emp_id_fk"];
    }
    //var odataUrl = "$filter="+filterParam+" ";
    var odataUrl ="";
    dataObject.odataUrl =odataUrl;
    var options = {
      "dataObject": dataObject
    };
    objSvc.fetch(options,
                 this.getUserNamesForUserIdsSuccessCallback.bind(this),
                 this.getUserNamesForUserIdsFailureCallback.bind(this));
  },
  getUserNamesForUserIdsSuccessCallback: function (response)
  {
    kony.print("UserDetails"+JSON.stringify(response));
    userDetails=response;
    // userName=this.getUserNameForUserId("00576943");
    // kony.print("userName"+userName);
    // this.onFormPostSHow();
    this.fetchCheckPointsList();
  },
  getUserNamesForUserIdsFailureCallback: function (error)
  {
    kony.print("journeyDetails"+JSON.stringify(error));
  },
  getUserNameForUserId : function(userId)
  {
    kony.print("abcd.."+JSON.stringify(userDetails));
    for(i=0;i<userDetails["records"].length;i++)
    {
      if(userDetails["records"][i]["user_emp_id_pk"]==userId)
      {
        userName=userDetails["records"][i]["user_firstname"]+" "+userDetails["records"][i]["user_lastname"];
        break;
      }
    }
    return userName;

  },
  getUserEmailID : function(mailID)
  {
    var usermailID = "";
    for(i=0;i<userDetails["records"].length;i++){
      if(userDetails["records"][i]["user_emp_id_pk"] == mailID){
        usermailID = userDetails["records"][i]["user_email_id"];
        break;
      }
    }
    return usermailID;
  },
  onFormPostSHow:function(){
    // this.fetchJourneyDetails();
    this.view.forceLayout();
    this.view.segJourneyList.widgetDataMap = 
      {
      "lblDriverName" : "driverName",
      "lblLastKnownLocation" : "LastKnownLocation",
      "lblTime" : "LastCheckPointTime",
      "lblJourneyStatus" : "journeyStatus",
      "imgSelector":"imgSelector",
      "lblLastKonwnLocationTitle":"lblLastKonwnLocationTitle",
      "lblETA":"lblETA",
      "lblFooter2":"lblFooter2",
      "lblActionText" : "lblActionText",
      "imgCheckIn":"imgCheckIn",
      "lblEmailID":"userMailID",
      "lblShadow":"shadow"
    };

    segDataJson=this.prepareJourneyDetailsJson();
    this.view.segJourneyList.setData(segDataJson);
    kony.application.dismissLoadingScreen();
    segDataJson_All=segDataJson;
    currentJourniesList=segDataJson;
    kony.application.dismissLoadingScreen();
    pinsList=[];
    for(row=0;row<segDataJson.length;row++)
    {
      pin= this.createPin(row,segDataJson);
      kony.print("pin ::"+JSON.stringify(pin));
      if(pin["lon"]==null || pin["lat"]==null||pin["lon"]=="" || pin["lat"]=="")
        kony.print("unable set the pin for record"+row);
      else
      {
        this.view.journeymap.setPin(pin);
        pinsList.push(pin);
      }

    }
    if(journiesList_launch_Flow=="Notification_flow")
    {
      this.onClickForIncidentJourneys();
      journiesList_launch_Flow="Normal_flow";
    }
    if(journiesList_launch_Flow=="Refresh_flow")
    {
      this.view.tabpane.setSkinForSelectedTab("All");
      journiesList_launch_Flow="Normal_flow";
    }
  },
  removePinsFromMap:function()
  {
    kony.print("in removePinsFromMap"+JSON.stringify(pinsList));
    if(pinsList!==null && pinsList.length!==0)
      this.view.journeymap.deleteAllPins(pinsList);
    else
      kony.print("pinsLIst JSON is empty");
  },
  showAllPinsOnMap : function(segDataJson_filter)
  {
    pinsList=[];
    kony.print("in createPinsOnMap");
    for(row=0;row<segDataJson_filter.length;row++)
    {
      pin= this.createPin(row,segDataJson_filter);
      kony.print("pin ::"+JSON.stringify(pin));
      if(pin["lon"]==null || pin["lat"]==null||pin["lon"]=="" || pin["lat"]=="")
        kony.print("unable set the pin for record"+row);
      else
      {
        this.view.journeymap.setPin(pin);
        pinsList.push(pin);
      }

    }

  },
  showAllPinsOnMap_journeyDetails : function(segDataJson_filter)
  {
    pinsList=[];
    kony.print("in showAllPinsOnMap_journeyDetails");
    for(row=0;row<segDataJson_filter.length;row++)
    {
      pin= this.createPin_journeyDetails(row,segDataJson_filter);
      if(row==0)
      {
        pin["image"]="source_location.png";
        //pin["image"]="departurepoint.png";
      }

      if(row==segDataJson_filter.length-1)
      {
        pin["image"]="arrivalfinal.png";
        //pin["image"]="arrivalfinal.png";
        pin["lat"]=segDataJson_filter[row]["journey_expected_arrivalpoint_lat"];
        pin["lon"]=segDataJson_filter[row]["journey_expected_arrivalpoint_lon"];
      }
      kony.print("pin ::"+JSON.stringify(pin));
      if(pin["lon"]==null || pin["lat"]==null||pin["lon"]=="" || pin["lat"]=="")
        kony.print("unable set the pin for record"+row);
      else
      {
        this.view.journeymap.setPin(pin);
        pinsList.push(pin);
      }

    }

  },
  onClickForAllJourneys: function()
  {
    kony.print("in onClickForAllJourneys");
    this.view.segJourneyList.setData(segDataJson);
    this.removePinsFromMap();
    this.showAllPinsOnMap(segDataJson);
    this.view.tabpane.setSkinForSelectedTab("All");
    currentJourniesList=segDataJson;
  },
  onClickForDelayJourneys: function()
  {
    this.removePinsFromMap();
    this.tabOnClick("Delay");
    this.view.tabpane.setSkinForSelectedTab("Delay");

    // this.createPinsOnMap(segDataJson_filter);
  },
  onClickForIncidentJourneys: function()
  {
    this.removePinsFromMap();
    this.tabOnClick("incident Reported");
    // this.setSkinForSelectedTab("Incident");
    //// this.view.flxTab2.skin=sknFlxBgBlue;
    this.view.tabpane.setSkinForSelectedTab("Incident");

  },
  onClickForLiveJourneys : function()
  {
    // this.removePinsFromMap();
    //pinList_LiveTab=[];
    this.view.segJourneyList.removeAll();
    this.removePinsFromMap();
    var segDataJson_filter=this.filterJourney("Normal","journeyStatus");
    this.view.segJourneyList.setData(segDataJson_filter);
    /* segDataJson_filter=this.filterJourney("Delay","journeyStatus");
    this.view.segJourneyList.addAll(segDataJson_filter);
    segDataJson_filter=this.filterJourney("incident Reported","journeyStatus");
    this.view.segJourneyList.addAll(segDataJson_filter);*/
    currentJourniesList=this.view.segJourneyList.data;
    kony.print("pinList_LiveTab ::"+JSON.stringify(pinList_LiveTab));
    pinsList=pinList_LiveTab;
    kony.print("pinList ::"+JSON.stringify(pinsList));

    // this.showAllPinsOnMap(segDataJson_filter);
    this.view.tabpane.setSkinForSelectedTab("Live");

  },

  tabOnClick : function(filter)
  {


    var segDataJson_filter=this.filterJourney(filter,"journeyStatus");
    this.view.segJourneyList.removeAll();
    this.view.segJourneyList.setData(segDataJson_filter);
    currentJourniesList=segDataJson_filter;
    return segDataJson_filter;
  },

  filterJourney : function(filter,filterParam)
  {
    var segDataJson_filter=[];
    //  if(filter!="live")
    pinsList=[];
    var filterContent="";
    var data=this.view.segJourneyList.data;
    kony.print("data ::"+JSON.stringify(data));
    kony.print("filter ::"+filter);
    kony.print("filterParam ::"+filterParam);
    kony.print("segDataJson.length"+segDataJson.length);
    kony.print("segDataJson  ::"+JSON.stringify(segDataJson));


    for(var row=0;row<segDataJson.length;row++)
    {
      if(filterParam=="journeyStatus")
        filterContent=segDataJson[row][filterParam]["text"];
      else
        filterContent=segDataJson[row][filterParam];

      if(filterContent==filter)
      {
        segDataJson_filter.push(segDataJson[row]);
        pin= this.createPin(row,segDataJson);
        kony.print("pin ::"+JSON.stringify(pin));
        if(pin["lon"]==null || pin["lat"]==null||pin["lon"]=="" || pin["lat"]=="")
          kony.print("unable set the pin for record"+row);
        else
        {
          this.view.journeymap.setPin(pin);
          pinsList.push(pin);
          pinList_LiveTab.push(pin);
        }

      }
    }
    //kony.print("after segDataJson"+JSON.stringify(segDataJson));
    //kony.print("after segDataJson_All"+JSON.stringify(segDataJson_All));
    kony.print("segDataJson_filter"+JSON.stringify(segDataJson_filter));
    return segDataJson_filter;
  },
  filterJourneysFromAvailableList : function(filter,filterParam)
  {
    var segDataJson_filter=[];
    //  if(filter!="live")
    pinsList=[];
    var filterContent="";
    // kony.print("before segDataJson"+JSON.stringify(segDataJson));
    //kony.print("after segDataJson_All"+JSON.stringify(segDataJson_All));
    var segJourneyListData=this.view.segJourneyList.data;
    kony.print("currentJourniesList ::"+JSON.stringify(currentJourniesList));
    kony.print("filter ::"+filter);
    kony.print("filterParam ::"+filterParam);
    kony.print("segDataJson.length"+segJourneyListData.length);
    // kony.print("segDataJson  ::"+JSON.stringify(segDataJson));


    for(row=0;row<currentJourniesList.length;row++)
    {
      if(filterParam=="journeyStatus")
        filterContent=currentJourniesList[row][filterParam]["text"];
      else
        filterContent=currentJourniesList[row][filterParam];

      if(filterContent==filter)
      {
        segDataJson_filter.push(currentJourniesList[row]);
        pin= this.createPin(row,currentJourniesList);
        kony.print("pin ::"+JSON.stringify(pin));
        if(pin["lon"]==null || pin["lat"]==null||pin["lon"]=="" || pin["lat"]=="")
          kony.print("unable set the pin for record"+row);
        else
        {
          this.view.journeymap.setPin(pin);
          pinsList.push(pin);
        }

      }
    }
    //kony.print("after segDataJson"+JSON.stringify(segDataJson));
    //kony.print("after segDataJson_All"+JSON.stringify(segDataJson_All));
    kony.print("segDataJson_filter"+JSON.stringify(segDataJson_filter));
    return segDataJson_filter;
  },
  prepareJourneyDetailsJson:function()
  {

    kony.print("in prepareJourneyDetailsJson"+journeyDetails["records"].length);
    var segData=[];
    for(k=0;k<journeyDetails["records"].length;k++)
    {
      data={
        "driverName":"",
        "LastKnownLocation":"",
        "LastCheckPointTime" :"",
        "journeyStatus" :"",
        "lastLocation_lat" : "",
        "lastLocation_lon" : "",
        "journey_id" : journeyDetails["records"][k]["journey_id_pk"],
        "journey_arrival_address" : journeyDetails["records"][k]["journey_expected_arrivalpoint_address"],
        "journey_departure_address" : journeyDetails["records"][k]["journey_actual_departure_address"],
        "journey_expected_arrival_datetime" : journeyDetails["records"][k]["journey_expected_arrival_datetime"],
        "journey_actual_departure_datetime" : journeyDetails["records"][k]["journey_actual_departure_datetime"],
        "journey_selected_vehicle_id_fk" : journeyDetails["records"][k]["journey_selected_vehicle_id_fk"],
        "journeyTrackingpointId" : journeyDetails["records"][k]["journey_tracking_point_id_fk"],
        "journey_supervisor_name" : journeyDetails["records"][k]["journey_supervisor_name"],
        "userEmpId" : journeyDetails["records"][k]["user_emp_id_fk"],
        "journey_uf_id" : journeyDetails["records"][k]["journey_uf_id"],
        "journey_expected_arrivalpoint_lon" : journeyDetails["records"][k]["journey_expected_arrivalpoint_lon"],
        "journey_expected_arrivalpoint_lat" : journeyDetails["records"][k]["journey_expected_arrivalpoint_lat"],
        "journey_expected_departure_lon" : journeyDetails["records"][k]["journey_expected_departure_lon"],
        "journey_expected_departure_lat" : journeyDetails["records"][k]["journey_expected_departure_lat"],
        "journey_actual_departure_lon" : journeyDetails["records"][k]["journey_actual_departure_lon"],
        "journey_actual_departure_lat" : journeyDetails["records"][k]["journey_actual_departure_lat"],
        "incidentId" : "",
        "lblActionText" : "",
        "nextCheckPointSeqNumber" : "",
        "checkpoint_row_id_pk" : "",
        "expected_Nextcheckin_timestamp_UTC" : "",
        "checkin_interval_row_id_fk" : journeyDetails["records"][k]["checkin_interval_row_id_fk"],
        //"checkin_interval_row_id_fk" : null,
        "journey_actual_arrivalpoint_lon" : journeyDetails["records"][k]["journey_actual_arrivalpoint_lon"],
        "journey_actual_arrivalpoint_lat" : journeyDetails["records"][k]["journey_actual_arrivalpoint_lat"],
        "journey_actual_arrivalpoint_address" : journeyDetails["records"][k]["journey_actual_arrivalpoint_address"],
        "journey_actual_arrival_datetime" : journeyDetails["records"][k]["journey_actual_arrival_datetime"],
        "journey_expected_departure_datetime" : journeyDetails["records"][k]["journey_expected_departure_datetime"],
        "journey_expected_departure_address" :  journeyDetails["records"][k]["journey_expected_departure_address"],
        "journey_expected_departure_lat" : journeyDetails["records"][k]["journey_expected_departure_lat"],
        "journeystatus_code_fk" : journeyDetails["records"][k]["journeystatus_code_fk"],
        "incident_type_id_fk" : "",
        "incident_desciption" : "",
        "imgCheckIn":"",
        "userMailID" : "",
        "shadow":"Hello World"
      }

      this.getCheckPointstatus(journeyDetails["records"][k]["journey_id_pk"],k);
      // data["driverName"]="assd";
      lastLocationDetails=this.getLatestKnownLocation(k);
      data["driverName"]=this.getUserNameForUserId(journeyDetails["records"][k]["user_emp_id_fk"]);
      data["LastKnownLocation"]=lastLocationDetails["lastLocation"];
      data["imgCheckIn"] = "chechbox_unselected.png";
      data["userMailID"] = this.getUserEmailID(journeyDetails["records"][k]["journey_created_by_fk"]);
      data["lastLocation_lat"]=lastLocationDetails["lastLocation_lat"];
      data["lastLocation_lon"]=lastLocationDetails["lastLocation_lon"];
      var dateObj=this.getSqlDatetoJSDate(journeyDetails["records"][k]["journey_expected_arrival_datetime"]);
      data["LastCheckPointTime"]=this.getReadableDateString(dateObj)+" "+this.getTimeStringIn12HrsFromat(dateObj);

      if(journeyDetails["records"][k]["journeystatus_code_fk"]==3)
      {
        data["journeyStatus"]={text:"Completed",skin : "sknLblJourneyStatusNormal"}
      }
      else if(journeyDetails["records"][k]["journeystatus_code_fk"]==4)
      {
        data["journeyStatus"]={text:"Terminated",skin : "sknLblJourneyStatusNormal"};
      }

      else  if(journeyDetails["records"][k]["journeystatus_code_fk"]==1)
      {
        data["journeyStatus"]= {text:"Not Started",skin : "sknLblJourneyStatusNormal"}
      }
      else if(this.isPendingIncidentsAvailable(journeyDetails["records"][k]["journey_id_pk"])==true)
      {
        data["journeyStatus"]={text:"incident Reported",skin : "sknLblJourneyIncident"};
        data["incidentId"]=incidentId;
        data["incident_type_id_fk"]=incident_type_id_fk;
        data["incident_desciption"]=incident_desciption;
        data["lblActionText"]="Contact Supervisor";
        // data["nextCheckPointSeqNumber"]=lastCheckPoint["check_point_seq_num"]+1;
        //data["nextCheckpoint_row_id_pk"]=lastCheckPoint["checkpoint_row_id_pk"]+1;
      }
      else
      {
        data["journeyStatus"]=this.getCheckPointstatus(journeyDetails["records"][k]["journey_id_pk"],k);
        // data["nextCheckPointSeqNumber"]=lastCheckPoint["check_point_seq_num"]+1;
        //data["nextCheckpoint_row_id_pk"]=lastCheckPoint["checkpoint_row_id_pk"]+1;
        if(data["journeyStatus"]["text"]=="Delay")
        {
          data["lblActionText"]="Contact Traveler";
          data["nextCheckPointSeqNumber"]=lastCheckPoint["check_point_seq_num"]+1;
          data["nextCheckpoint_row_id_pk"]=lastCheckPoint["checkpoint_row_id_pk"]+1;
          data["expected_Nextcheckin_timestamp_UTC"]=expected_Nextcheckin_timestamp_UTC;

        }
      }
      data["imgSelector"]="checkbox_selected.png";
      data["lblLastKonwnLocationTitle"]="last Known Location";
      data["lblETA"]="ETA";
      //data["imgCheckIn"] = "checkbox_unselected.png";

      segData.push(data);
    }
    kony.print("segData ::"+JSON.stringify(segData));
    // this.createPin();
    return segData;

  },
  getLatestKnownLocation: function(recordNumber)
  {
    kony.print("in getLatestKnownLocation lastCheckPoint ::"+JSON.stringify(lastCheckPoint));
    var lastLocationDetails={
      "lastLocation" :"",
      "lastLocation_lat":"",
      "lastLocation_lon": ""
    }
    kony.print("recordNumber "+recordNumber);
    kony.print("journeystatus_code_fk "+journeyDetails["records"][recordNumber]["journeystatus_code_fk"]);
    if(journeyDetails["records"][recordNumber]["journeystatus_code_fk"]==1)
    {
      lastLocationDetails["lastLocation"]="N/A";

    }
    else  if(journeyDetails["records"][recordNumber]["journeystatus_code_fk"]==3)
    {
      lastLocationDetails["lastLocation"]=journeyDetails["records"][recordNumber]["journey_expected_arrivalpoint_address"];
    }

    else if(null!=lastCheckPoint && lastCheckPoint!="")
    {  // Delay & Normal case
      kony.print("lastCheckPoint is not empty ::"+journeyDetails["records"][recordNumber]["journey_id_pk"]);
      lastLocationDetails["lastLocation"]=lastCheckPoint["checkin_location_address"];
      lastLocationDetails["lastLocation_lat"]=lastCheckPoint["checkin_location_lat"];
      lastLocationDetails["lastLocation_lon"]=lastCheckPoint["checkin_location_lon"];
    }
    else
    {  // If Incident Happend in First Check Point
      kony.print("lastCheckPoint is  empty ::"+journeyDetails["records"][recordNumber]["journey_id_pk"]);
      lastLocationDetails["lastLocation"]=journeyDetails["records"][recordNumber]["journey_actual_departure_address"];
      lastLocationDetails["lastLocation_lat"]=journeyDetails["records"][recordNumber]["journey_actual_departure_lat"];
      lastLocationDetails["lastLocation_lon"]=journeyDetails["records"][recordNumber]["journey_actual_departure_lon"];

      /* lastLocationDetails["lastLocation"]=journeyDetails["records"][recordNumber]["journey_expected_departure_address"];
      lastLocationDetails["lastLocation_lat"]=journeyDetails["records"][recordNumber]["journey_expected_departure_lat"];
      lastLocationDetails["lastLocation_lon"]=journeyDetails["records"][recordNumber]["journey_expected_departure_lon"];*/
    }
    return lastLocationDetails;
  },
  fetchCheckPointsList : function()
  {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("checkpoints_tbl");
    var odataUrl = "$orderby="+"journey_id_pk"+" desc"+" , "+"check_point_seq_num"+" desc";
    dataObject.odataUrl =odataUrl;
    var options = {
      "dataObject": dataObject
    };
    objSvc.fetch(options,
                 this.fetchCheckPointsListSuccessCallback.bind(this),
                 this.fetchCheckPointsListFailureCallback.bind(this));
  },
  fetchCheckPointsListSuccessCallback:function(response)
  {
    kony.print("fetchCheckPointsListSuccessCallback"+JSON.stringify(response));
    checkPointsList=response;
    this.fetchIncidentsList();
  },
  fetchCheckPointsListFailureCallback : function(error)
  {
    kony.print("fetchCheckPointsListFailureCallback"+JSON.stringify(error));
  },
  getCheckPointstatus : function(journeyId,recordNumber1)
  {
    kony.print("journeyId.."+journeyId);
    kony.print("length.."+checkPointsList["records"].length);
    checkPointStatusId=1;
    lastCheckPoint="";
    nextCheckPoint="";
    for(i=0;i<checkPointsList["records"].length;i++)
    {
      if(checkPointsList["records"][i]["journey_id_fk"]==journeyId)
      {
        if(checkPointsList["records"][i]["checkin_location_address"]!=null || checkPointsList["records"][i]["checkin_location_address"]!="" && checkPointsList["records"][i]["checkin_location_address"]!=undefined)
        {
          checkPointStatusId=checkPointsList["records"][i]["checkpoint_status_id_fk"];
          //nextCheckPoint=checkPointsList["records"][i];
          lastCheckPoint=checkPointsList["records"][i];
          break;
        }
      }
    }
    // kony.print("lastCheck Point "+lastCheckPoint);
    kony.print("lastCheck Point "+JSON.stringify(lastCheckPoint));
    //var diffTimeInMinuts= compareTimeStamps();
    return this.getCheckPointStatusFlag(recordNumber1);
  },
  getCheckPointStatusFlag : function(recordNumber1)
  {

    checkPointStatusFlag= this.compareTimeStamps(recordNumber1);
    kony.print("checkPointStatusFlag ::"+checkPointStatusFlag);
    if(checkPointStatusFlag==1)
      return {text:"Normal",skin : "sknLblJourneyStatusNormal"};
    if(checkPointStatusFlag==2)
      return {text:"Delay",skin :"lblJourneyStatusDelay"};
    if(checkPointStatusFlag==3)
      return  {text:"-",skin : "sknLblJourneyStatusNormal"}

      },
  compareTimeStamps : function(recordNumber1)
  {
    kony.print("in compareTimeStamps function");
    expected_Nextcheckin_timestamp_UTC="";
    var expected_checkin_timestamp="";
    if(lastCheckPoint==null || lastCheckPoint=="" || lastCheckPoint==undefined)
    {
      kony.print("we don't have rows in checkpoint table ::"+journeyDetails["records"][recordNumber1]["journey_id_pk"]);
      expected_checkin_timestamp=journeyDetails["records"][recordNumber1]["journey_actual_departure_datetime"];
      kony.print("murali ::"+expected_checkin_timestamp);
    }
    else if(lastCheckPoint["actual_checkin_timestamp"]==null || lastCheckPoint["actual_checkin_timestamp"]=="")
    {
      kony.print("last checkpoint details are passed By Admin");
      expected_checkin_timestamp=lastCheckPoint["expected_checkin_timestamp"];
    }
    else
    {
      expected_checkin_timestamp=lastCheckPoint["actual_checkin_timestamp"];
    }
    expected_checkin_timestamp=expected_checkin_timestamp+"";
    var expected_checkin_timestamp_UTC=new Date(expected_checkin_timestamp);
    kony.print("expected_checkin_timestamp_UTC in UTC String"+expected_checkin_timestamp_UTC.toLocaleDateString());
    kony.print("expected_checkin_timestamp_UTC in UTC String"+expected_checkin_timestamp_UTC.toLocaleTimeString());
    var expected_checkin_timestamp_Local=this.getSqlDatetoJSDate(expected_checkin_timestamp);
    if(expected_checkin_timestamp_Local!=undefined && expected_checkin_timestamp_Local!=null && expected_checkin_timestamp_Local!="")
    {
      kony.print( "expected_checkin_timestamp is empty");
      var checkin_interval_row_id=journeyDetails["records"][recordNumber1]["checkin_interval_row_id_fk"];
      //var checkin_interval_row_id="";
      // kony.print(" murali checkin_interval_row_id ::"+checkin_interval_row_id)
      expected_checkin_timestamp_Local=this.prepareExpectedCheckInTimeStamp(expected_checkin_timestamp_Local,checkin_interval_row_id);
    }
    var systemTimeStamp=new Date();
    kony.print("systemTimeStamp"+systemTimeStamp);
    kony.print("expected_checkin_timestamp_Local"+expected_checkin_timestamp_Local);
    if(expected_checkin_timestamp_Local>systemTimeStamp)
    {
      expected_Nextcheckin_timestamp_UTC=expected_checkin_timestamp_UTC;
      return 1;
    }
    if(expected_checkin_timestamp_Local<systemTimeStamp)
    {
      expected_Nextcheckin_timestamp_UTC=expected_checkin_timestamp_UTC;
      return 2;
    }
    return 3;
  },
  fetchIncidentsList : function()
  {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("incident_notification_tbl");
    var options = {
      "dataObject": dataObject,
      "queryParams": {
        "$filter":"incident_status_id_fk eq 1",
        "$orderby":"lastupdateddatetime desc"
      }

    };
    objSvc.fetch(options,
                 this.fetchIncidentsListSuccessCallback.bind(this),
                 this.fetchIncidentsListFailureCallback.bind(this));
  },
  fetchIncidentsListSuccessCallback:function(response)
  {
    kony.print("fetchIncidentsListSuccessCallback"+JSON.stringify(response));
    incidentsList=response;
    localIncidentJourniesList=incidentsList;
    this.onFormPostSHow();
  },
  fetchIncidentsListFailureCallback : function(error)
  {
    kony.print("fetchIncidentsListFailureCallback"+JSON.stringify("error"));
    incidentsList={"records": []};
    // incidentsList=[];
    localIncidentJourniesList=incidentsList;

    this.onFormPostSHow();

  },
  isPendingIncidentsAvailable : function(journeyId)
  {
    incidentFlag=false;
    kony.print("in isPendingIncidentsAvailable function "+journeyId);
    for(i=0;i<incidentsList["records"].length;i++)
    {
      if(incidentsList["records"][i]["journey_id_fk"]==journeyId)
      {
        kony.print("we have incident for journeyId "+journeyId);
        if(incidentsList["records"][i]["incident_status_id_fk"]==1)
        {
          kony.print("incident is stil active ");
          incidentId=incidentsList["records"][i]["incident_id_pk"];
          incident_type_id_fk=incidentsList["records"][i]["incident_type_id_fk"];
          incident_desciption=incidentsList["records"][i]["incident_desciption"];
          incidentFlag=true;
          break;
        }
      }
    }
    return incidentFlag;
  },
  convertToLocalFormat : function(date_UTC)
  {
    var date_UTC=new Date(date_UTC);
    kony.print("date_UTC"+date_UTC);

    // kony.print("expected_checkin_timestamp_UTC in UTC String"+expected_checkin_timestamp_UTC.toUTCString());
    kony.print("date_UTC in to toLocaleDateString"+date_UTC.toLocaleDateString());
    kony.print("date_UTC in to toLocaleTimeString"+date_UTC.toLocaleTimeString());


    //var date_local=new Date(date_UTC.toLocaleDateString()+" "+date_UTC.toLocaleTimeString());
    return date_UTC.toLocaleDateString()+" "+date_UTC.toLocaleTimeString();

  },
  createPin : function(row,segDataJson)
  {
    kony.print("in Create PIN");
    //segDataJson[]
    var pin1 = {
      id : "id", // id is mandatory for every pin
      lat : "",
      lon : "",
      name : "",
      image : "pinb.png",
      focusImage:"pinb.png",  //focus image will be shown while map pin selected
      desc: "",
      "calloutData" : "",
      showCallout : true,
      "template":"flxMapTemplate",
      meta: {
        color: "green",
        label: "A"
      }
    }
    pin1["id"]=pin1["id"]+row+"";
    pin1["lat"]=segDataJson[row]["lastLocation_lat"];
    pin1["lon"]=segDataJson[row]["lastLocation_lon"];
    pin1["calloutData"]=segDataJson[row];
    // pin1["desc"]=segDataJson[row]["lblLocation"];
    return pin1;
  },
  createPin_journeyDetails : function(row,segDataJson)
  {
    kony.print("in Create PIN");
    //segDataJson[]
    var pin1 = {
      id : "id", // id is mandatory for every pin
      lat : "",
      lon : "",
      name : "",
      image : "pinb.png",
      focusImage:"pinb.png",  //focus image will be shown while map pin selected
      desc: "Kukatpally",
      showCallout : true,
      meta: {
        color: "green",
        label: "A"
      }
    }
    pin1["id"]=pin1["id"]+row+"";
    pin1["lat"]=segDataJson[row]["lastLocation_lat"];
    pin1["lon"]=segDataJson[row]["lastLocation_lon"];
    pin1["desc"]=segDataJson[row]["completeLocationAddress"];
    return pin1;
  },


  fetchCheckPointsListForJourneyId : function(journeyId)
  {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("checkpoints_tbl");
    //  var odataUrl = "$orderby="+journeyId+", "+ " check_point_seq_num"+" asc";
    //var odataUrl = "$orderby="+"lastupdateddatetime"+" desc";
    // var odataUrl ="";

    //  dataObject.odataUrl =odataUrl;
    var options = {
      "dataObject": dataObject,
      "queryParams": {
        "$filter":"journey_id_fk eq "+journeyId,
        // "$select":"checkin_location_lon,checkin_location_address,checkin_location_lat",
        "$orderby":"check_point_seq_num"
      }

    };
    objSvc.fetch(options,
                 this.fetchCheckPointsListForJourneyIdSuccessCallback.bind(this),
                 this.fetchCheckPointsListForJourneyIdFailureCallback.bind(this));
  },
  fetchCheckPointsListForJourneyIdSuccessCallback:function(response)
  {
    kony.print("fetchCheckPointsListForJourneyIdSuccessCallback"+JSON.stringify(response));
    checkPointsList_JourneyId=response;
    //this.fetchSuperviserNameBySuperviserId();
    this.fetchVehicleDetails();

  },
  fetchCheckPointsListForJourneyIdFailureCallback : function(error)
  {
    kony.print("fetchCheckPointsListForJourneyIdFailureCallback"+JSON.stringify(error));
  },
  prepareSegJsonForJourneyDetails : function()
  {
    kony.print("in prepareSegJsonForJourneyDetails ");
    kony.print("lenghth ::"+checkPointsList_JourneyId["records"].length);
    kony.print("checkPointsList in prepareSegJsonForJourneyDetails "+JSON.stringify(checkPointsList_JourneyId));
    actual_checkin_timestamp_string="";
    var segCheckPointsDataForPath=[];
    if(selectedJourney[0]["journeystatus_code_fk"]!=1)
    { // started journies (with Checkpoints & with out checkpoints)
      var checkPointsDataForPath={
        "lblLine0" : {text : "", isVisible : false},
        "lblLine1" : {text : "", isVisible : false},
        "lblLastKnownLocation" : {text :"Last Known Location",isVisible :false},
        "imgPathIcon" :  "location_white.png",
        "lblLocation" : "",
        "lblTime" : "",
        "imgClock" :"clock_2.png",
        "lblDate" : "",
        "imgVechile" : "vechile.png"
      };
      var checkInDate="";
      var checkInTime="";
      var expectedDate=selectedJourney[0]["journey_actual_departure_datetime"];
      var journey_expected_arrival_datetime=this.getSqlDatetoJSDate(expectedDate);
      kony.print("actual_checkin_timestamp_Local"+journey_expected_arrival_datetime);
      if(expectedDate!=null && expectedDate!="" && expectedDate!=undefined)
      {
        var checkInDate=journey_expected_arrival_datetime.getDate()+":"+(this.getMonthInMMMFormat(journey_expected_arrival_datetime.getMonth()));
        var checkInTime=journey_expected_arrival_datetime.getHours()+":"+(this.addZeroPrefix(journey_expected_arrival_datetime.getMinutes()));
      }
      location=selectedJourney[0]["journey_departure_address"];
      if(location!=null && location!="" && location!=undefined)
      {
        if(location.length>15)
        {
          location=location.substr(0,15);
        }
      }
      checkPointsDataForPath["lblLocation"]=location;
      kony.print("location :"+location);
      checkPointsDataForPath["completeLocationAddress"]=selectedJourney[0]["journey_departure_address"]; //,
      checkPointsDataForPath["lblDate"]=checkInDate; //journey_expected_arrival_datetime
      checkPointsDataForPath["lblTime"]=checkInTime;
      checkPointsDataForPath["lon"]=selectedJourney[0]["journey_actual_departure_lon"];
      checkPointsDataForPath["lat"]=selectedJourney[0]["journey_actual_departure_lat"];
      segCheckPointsDataForPath.push(checkPointsDataForPath);
      /*checkPointsDataForPath["lastLocation_lon"]=selectedJourney[0]["journey_actual_departure_lon"];
      checkPointsDataForPath["lastLocation_lat"]=selectedJourney[0]["journey_actual_departure_lat"];
      checkPointsDataForPath["journey_expected_arrivalpoint_lon"]=selectedJourney[0]["journey_actual_departure_lon"];
      checkPointsDataForPath["journey_expected_arrivalpoint_lat"]=selectedJourney[0]["journey_actual_departure_lat"];*/
    }
    else
    { //Not started Journies
      var checkPointsDataForPath={
        "lblLine0" : {text : "", isVisible : false},
        "lblLine1" : {text : "", isVisible : false},
        "lblLastKnownLocation" : {text :"Last Known Location",isVisible :false},
        "imgPathIcon" :  "location_white.png",
        "lblLocation" : "",
        "lblTime" : "",
        "imgClock" :"clock_2.png",
        "lblDate" : "",
        "imgVechile" : "vechile.png"
      };
      var checkInDate="";
      var checkInTime="";
      var expectedDate=selectedJourney[0]["journey_expected_departure_datetime"];
      var journey_expected_arrival_datetime=this.getSqlDatetoJSDate(expectedDate);
      kony.print("actual_checkin_timestamp_Local"+journey_expected_arrival_datetime);
      if(expectedDate!=null && expectedDate!="" && expectedDate!=undefined)
      {
        var checkInDate=journey_expected_arrival_datetime.getDate()+":"+(this.getMonthInMMMFormat(journey_expected_arrival_datetime.getMonth()));
        var checkInTime=journey_expected_arrival_datetime.getHours()+":"+(this.addZeroPrefix(journey_expected_arrival_datetime.getMinutes()));
      }
      location=selectedJourney[0]["journey_expected_departure_address"];
      if(location!=null && location!="" && location!=undefined)
      {
        if(location.length>15)
        {
          location=location.substr(0,15);
        }
      }
      //location=kony.string.split(selectedJourney[0]["journey_expected_departure_address"],",");
      checkPointsDataForPath["lblLocation"]=location;
      kony.print("location :"+location);
      //checkPointsDataForPath["lblLocation"]=location;
      checkPointsDataForPath["completeLocationAddress"]=selectedJourney[0]["journey_expected_departure_address"]; //,
      checkPointsDataForPath["lblDate"]=checkInDate; //journey_expected_arrival_datetime
      checkPointsDataForPath["lblTime"]=checkInTime;
      checkPointsDataForPath["lon"]=selectedJourney[0]["journey_expected_departure_lon"];
      checkPointsDataForPath["lat"]=selectedJourney[0]["journey_expected_departure_lat"];
      segCheckPointsDataForPath.push(checkPointsDataForPath);
      checkPointsDataForPath["lastLocation_lon"]=selectedJourney[0]["journey_expected_departure_lon"];
      checkPointsDataForPath["lastLocation_lat"]=selectedJourney[0]["journey_expected_departure_lat"];
      checkPointsDataForPath["journey_expected_arrivalpoint_lon"]=selectedJourney[0]["journey_expected_departure_lon"];
      checkPointsDataForPath["journey_expected_arrivalpoint_lat"]=selectedJourney[0]["journey_expected_departure_lat"]; 
    }
    if(checkPointsList_JourneyId["records"].length!=0)
    {
      kony.print("we have checkPoints for selected Journey");
      for(var i=0;i<checkPointsList_JourneyId["records"].length;i++)
      {
        checkPointsDataForPath={
          "lblLine0" : {text : ""},
          "lblLine1" : {text : ""},
          "lblLastKnownLocation" : {text :"Last Known Location",isVisible :false},
          "imgPathIcon" :  "enteredcheckpoint.png",
          "lblLocation" : "",
          "lblTime" : "",
          "imgClock" :"clock_2.png",
          "lblDate" : "",
          "imgVechile" : "vechile.png",
          "lastLocation_lon" : "",
          "lastLocation_lat" : "",
          "lat" : "",
          "lon" : "",
          "completeLocationAddress" : ""
        };
        var checkInDate="";
        var checkInTime="";
        kony.print("actual_checkin_timestamp in String format ::"+checkPointsList_JourneyId["records"][i]["actual_checkin_timestamp"]);
        actual_checkin_timestamp_string=checkPointsList_JourneyId["records"][i]["actual_checkin_timestamp"];
        var actual_checkin_timestamp=checkPointsList_JourneyId["records"][i]["actual_checkin_timestamp"];

        var actual_checkin_timestamp_Local=this.getSqlDatetoJSDate(actual_checkin_timestamp);
        kony.print("actual_checkin_timestamp_Local"+actual_checkin_timestamp_Local);
        if(actual_checkin_timestamp_string!="" && actual_checkin_timestamp_string!=null && actual_checkin_timestamp_string!=undefined)
        {
          var checkInDate=actual_checkin_timestamp_Local.getDate()+":"+(this.getMonthInMMMFormat(actual_checkin_timestamp_Local.getMonth()));
          var checkInTime=actual_checkin_timestamp_Local.getHours()+":"+(this.addZeroPrefix(actual_checkin_timestamp_Local.getMinutes()));

        }
        // var location=kony.string.split(checkPointsList_JourneyId["records"][i]["checkin_location_address"],",")
        var location=checkPointsList_JourneyId["records"][i]["checkin_location_address"];
        kony.print("locationofcheckpoint"+location);
        if( location==null || location=="" )
        {
          kony.print("location is eq null");
        }
        else
        {
          kony.print("location not eq null");
          if(location.length>15)
            location=location.substr(0,15);

        }
        kony.print("location :"+location);
        checkPointsDataForPath["lblLocation"]=location;
        checkPointsDataForPath["completeLocationAddress"]=checkPointsList_JourneyId["records"][i]["checkin_location_address"]
        checkPointsDataForPath["lblDate"]=checkInDate;
        checkPointsDataForPath["lblTime"]=checkInTime;
        checkPointsDataForPath["lastLocation_lon"]=checkPointsList_JourneyId["records"][i]["checkin_location_lon"];
        checkPointsDataForPath["lastLocation_lat"]=checkPointsList_JourneyId["records"][i]["checkin_location_lat"];
        checkPointsDataForPath["lon"]=checkPointsList_JourneyId["records"][i]["checkin_location_lon"];
        checkPointsDataForPath["lat"]=checkPointsList_JourneyId["records"][i]["checkin_location_lat"];

        if(i==0)
        {
          checkPointsDataForPath["imgPathIcon"]="departurepoint_1.png";
        }
        if(selectedJourney[0]["journeyStatus"]["text"]!="Completed")
        {
          kony.print("Un completed Journey")
          if(i==checkPointsList_JourneyId["records"].length-1)
          {
            checkPointsDataForPath["lblLastKnownLocation"]={text :"Last Known Location",isVisible :true};
          }

          /*if(i==checkPointsList_JourneyId["records"].length-1)
        {
          var minuts=this.calculateTimeDifferenceInMinuts(actual_checkin_timestamp_Local);
          kony.print("minuts ::"+minuts);
          checkPointsDataForPath["lblLocation"]="Next CheckIn in "+minuts+" minuts ";
          checkPointsDataForPath["imgPathIcon"]="clock_2.png"
        } */
        }
        if(location!=null && location!="" && location!=undefined)
        {
          segCheckPointsDataForPath.push(checkPointsDataForPath);
        }
      }

      if(i==checkPointsList_JourneyId["records"].length && (actual_checkin_timestamp_string!=null && actual_checkin_timestamp_string!="" && actual_checkin_timestamp_string!="undefined") && (selectedJourney[0]["checkin_interval_row_id_fk"]!="" && selectedJourney[0]["checkin_interval_row_id_fk"]!=null && selectedJourney[0]["checkin_interval_row_id_fk"]!=undefined))
      {
        checkPointsDataForPath={
          "lblLine0" : {text : ""},
          "lblLine1" : {text : ""},
          "lblLastKnownLocation" : {text :"Last Known Location",isVisible :false},
          "imgPathIcon" :  "enteredcheckpoint.png",
          "lblLocation" : "",
          "lblTime" : "",
          "imgClock" :"",
          "lblDate" : "",
          "imgVechile" : "",
          "lastLocation_lon" : "",
          "lastLocation_lat" : "",
          "lat" : "",
          "lon" : "",
          "completeLocationAddress" : ""
        };
        var minuts=this.calculateTimeDifferenceInMinuts(actual_checkin_timestamp_Local);
        kony.print("minuts ::"+minuts);
        var checkin_interval_row_id=selectedJourney[0]["checkin_interval_row_id_fk"];
        var checkin_interval=this.getCheckInInterval(checkin_interval_row_id);

        if(minuts>checkin_interval)
        {
          checkPointsDataForPath["lblLocation"]="Next CheckIn delayed by  "+(minuts-checkin_interval)+" minutes";
        }
        else
        {
          checkPointsDataForPath["lblLocation"]="Next CheckIn in "+minuts+" minutes"; 
        }


        checkPointsDataForPath["imgPathIcon"]="clock_2.png";
        segCheckPointsDataForPath.push(checkPointsDataForPath);
      }
    }
    else
    {
      kony.print("we don't have checkpoints for the selected Journey");
    }


    if(segCheckPointsDataForPath.length!=0)
    {
      if(selectedJourney[0]["journeystatus_code_fk"]==3)
      { //completed journey
        checkPointsDataForPath={
          "lblLine0" : {text : ""},
          "lblLine1" : {text : ""},
          "lblLastKnownLocation" : {text :"Estimated Time of Arrival",isVisible :false},
          "imgPathIcon" :  "location_white.png",
          "lblLocation" : "",
          "lblTime" : "",
          "imgClock" :"clock_2.png",
          "lblDate" : "",
          "imgVechile" : "vechile.png",
          "lastLocation_lon" : "",
          "lastLocation_lat" : "",
          "lat" : "",
          "lon" : "",
          "journey_expected_arrivalpoint_lat" : "",
          "journey_expected_arrivalpoint_lon"  : "",
          "completeLocationAddress" : ""
        };
        var checkInDate="";
        var checkInTime="";
        var expectedDate=selectedJourney[0]["journey_actual_arrival_datetime"];
        var journey_expected_arrival_datetime=this.getSqlDatetoJSDate(expectedDate);
        kony.print("actual_checkin_timestamp_Local"+journey_expected_arrival_datetime);
        if(expectedDate!=null && expectedDate!="" && expectedDate!=undefined)
        {
          var checkInDate=journey_expected_arrival_datetime.getDate()+":"+(this.getMonthInMMMFormat(journey_expected_arrival_datetime.getMonth()));
          var checkInTime=journey_expected_arrival_datetime.getHours()+":"+(this.addZeroPrefix(journey_expected_arrival_datetime.getMinutes()));
        }
        location=selectedJourney[0]["journey_actual_arrivalpoint_address"];
        if(location!=null && location!="" && location!=undefined)
        {
          if(location.length>15)
          {
            location=location.substr(0,15);
          }
        }
        kony.print("location :"+location);
        checkPointsDataForPath["lblLocation"]=location;
        checkPointsDataForPath["completeLocationAddress"]=selectedJourney[0]["journey_actual_arrivalpoint_address"]; //,
        checkPointsDataForPath["lblDate"]=checkInDate; //journey_expected_arrival_datetime
        checkPointsDataForPath["lblTime"]=checkInTime;
        checkPointsDataForPath["lon"]=selectedJourney[0]["journey_actual_arrivalpoint_lon"];
        checkPointsDataForPath["lat"]=selectedJourney[0]["journey_actual_arrivalpoint_lat"];

        checkPointsDataForPath["lastLocation_lon"]=selectedJourney[0]["lastLocation_lon"];
        checkPointsDataForPath["lastLocation_lat"]=selectedJourney[0]["lastLocation_lat"];
        checkPointsDataForPath["journey_expected_arrivalpoint_lon"]=selectedJourney[0]["journey_actual_arrivalpoint_lon"];
        checkPointsDataForPath["journey_expected_arrivalpoint_lat"]=selectedJourney[0]["journey_actual_arrivalpoint_lat"];
        segCheckPointsDataForPath.push(checkPointsDataForPath);
      }
      else
      {
        checkPointsDataForPath={
          "lblLine0" : {text : ""},
          "lblLine1" : {text : ""},
          "lblLastKnownLocation" : {text :"Estimated Time of Arrival",isVisible :true},
          "imgPathIcon" :  "location_white.png",
          "lblLocation" : "",
          "lblTime" : "",
          "imgClock" :"clock_2.png",
          "lblDate" : "",
          "imgVechile" : "vechile.png",
          "lastLocation_lon" : "",
          "lastLocation_lat" : "",
          "lat" : "",
          "lon" : "",
          "journey_expected_arrivalpoint_lat" : "",
          "journey_expected_arrivalpoint_lon"  : "",
          "completeLocationAddress" : ""
        };
        var expectedDate=selectedJourney[0]["journey_expected_arrival_datetime"];
        var journey_expected_arrival_datetime=this.getSqlDatetoJSDate(expectedDate);
        var checkInDate="";
        var checkInTime="";                                                           
        kony.print("actual_checkin_timestamp_Local"+journey_expected_arrival_datetime);
        if(expectedDate!=null && expectedDate!="" && expectedDate!=undefined)
        {
          var checkInDate=journey_expected_arrival_datetime.getDate()+":"+(this.getMonthInMMMFormat(journey_expected_arrival_datetime.getMonth()));
          var checkInTime=journey_expected_arrival_datetime.getHours()+":"+(this.addZeroPrefix(journey_expected_arrival_datetime.getMinutes()));
        }
        location=selectedJourney[0]["journey_arrival_address"];
        if(location!=null && location!="" && location!=undefined)
        {
          if(location.length>15)
          {
            location=location.substr(0,15);
          }
        }
        kony.print("location :"+location);
        checkPointsDataForPath["lblLocation"]=location;
        checkPointsDataForPath["completeLocationAddress"]=selectedJourney[0]["journey_arrival_address"]; //,
        checkPointsDataForPath["lblDate"]=checkInDate; //journey_expected_arrival_datetime
        checkPointsDataForPath["lblTime"]=checkInTime;
        checkPointsDataForPath["lon"]=selectedJourney[0]["journey_expected_arrivalpoint_lon"];
        checkPointsDataForPath["lat"]=selectedJourney[0]["journey_expected_arrivalpoint_lat"];
        segCheckPointsDataForPath.push(checkPointsDataForPath);

        checkPointsDataForPath["lastLocation_lon"]=selectedJourney[0]["lastLocation_lon"];
        checkPointsDataForPath["lastLocation_lat"]=selectedJourney[0]["lastLocation_lat"];
        checkPointsDataForPath["journey_expected_arrivalpoint_lon"]=selectedJourney[0]["journey_expected_arrivalpoint_lon"];
        checkPointsDataForPath["journey_expected_arrivalpoint_lat"]=selectedJourney[0]["journey_expected_arrivalpoint_lat"];
      }
    }
    kony.application.dismissLoadingScreen();
    return segCheckPointsDataForPath;
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
  prepareJsonForJourneyDetails: function()
  {
    kony.print("in prepareJsonForJourneyDetails");
    // var journeyId=selectedJourney[0]["journey_id"];
    var journeydetailsObject={
      "driverName" : selectedJourney[0]["driverName"],
      "journeyId"  : selectedJourney[0]["journey_uf_id"],
      "journeyTrackingpointName" :"",
      "superviserName" :selectedJourney[0]["journey_supervisor_name"],
      "journeyStatus" :selectedJourney[0]["journeyStatus"],
      "incident_type" : ""
    };
    journeydetailsObject["journeyTrackingpointName"]=this.getTrackPointName(selectedJourney[0]["journeyTrackingpointId"])
    if(selectedJourney[0]["journeyStatus"]["text"]=="incident Reported")
    {
      journeydetailsObject["incident_type"]=this.getIncidentDescByIncidentId(selectedJourney[0]["incident_type_id_fk"]);
      journeydetailsObject["incident_desciption"]=selectedJourney[0]["incident_desciption"];
      kony.print("incident_type "+journeydetailsObject["incident_type"])
    }
    var segCheckPointsDataForPath=this.prepareSegJsonForJourneyDetails();
    this.view.journeydetail.setDataToWidgets(journeydetailsObject,segCheckPointsDataForPath,vehicleDetails,passengersDetails);
    this.removePinsFromMap();

    this.showAllPinsOnMap_journeyDetails(segCheckPointsDataForPath);
    if(polylineId!==null || polylineId !="")
    {
      kony.print("removing previous PolyLine");
      this.view.journeymap.deletePolyline(polylineId);
    }

    this.drawRoute(segCheckPointsDataForPath,"575ee7");
  },
  fetchVehicleDetails : function()
  {
    var vehicleId=selectedJourney[0]["journey_selected_vehicle_id_fk"];
    kony.print("vehicle id :"+vehicleId);
    if(vehicleId==null || vehicleId=="" || vehicleId==undefined)
    {
      kony.print("vehicle id is Null");
      vehicleDetails=null;
      this.fetchPassengersDetails();

    }
    else
    {
      kony.print("we have Vehicle");
      var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
        "access": "online"
      });
      var dataObject = new kony.sdk.dto.DataObject("vehicle_tbl");
      var options = {
        "dataObject": dataObject,
        "queryParams": {
          "$filter":"vehicle_id_pk eq "+vehicleId,

        }

      };
      objSvc.fetch(options,
                   this.fetchVehicleDetailsSuccessCallback.bind(this),
                   this.fetchVehicleDetailsFailureCallback.bind(this));

    }

  },
  fetchVehicleDetailsSuccessCallback:function(response)
  {
    kony.print("fetchVehicleDetailsSuccessCallback"+JSON.stringify(response));
    vehicleDetails=response["records"][0];
    this.fetchPassengersDetails();
    /* this.prepareJsonForJourneyDetails();
    this.showDetailScreen(); */
  },
  fetchVehicleDetailsFailureCallback : function(error)
  {
    kony.print("fetchVehicleDetailsFailureCallback"+JSON.stringify(error));
  },
  fetchPassengersDetails : function()
  {
    var journeyId=selectedJourney[0]["journey_id"];
    kony.print("journeyId :"+journeyId);

    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("journey_passengers_tbl");
    var options = {
      "dataObject": dataObject,
      "queryParams": {
        "$filter":"journey_id_fk eq "+journeyId,

      }

    };
    objSvc.fetch(options,
                 this.fetchPassengerDetailsSuccessCallback.bind(this),
                 this.fetchPassengerDetailsFailureCallback.bind(this));
  },
  fetchPassengerDetailsSuccessCallback:function(response)
  {
    kony.print("fetchPassengerDetailsSuccessCallback"+JSON.stringify(response));
    // if(response["records"].length==0)

    passengersDetails=response["records"];
    this.prepareJsonForJourneyDetails();
    this.showDetailScreen();
  },
  fetchPassengerDetailsFailureCallback : function(error)
  {
    kony.print("fetchPassengerDetailsFailureCallback"+JSON.stringify(error));
  },


  drawRoute:function(polyPoints,color){ //575ee7
    var steps = polyPoints;
    kony.print("################The polyline points############");
    kony.print(steps);
    var ei = steps.length-1;

    var startLoc = {
      lat:steps[0].lat,
      lon:steps[0].lon,
      image:"source_location.png",
      //image:"departurepoint.png",
      desc : steps[0].completeLocationAddress,
      name : ""
    };
    var endLoc = {
      lat:steps[ei].lat,
      lon:steps[ei].lon,
      image:"arrivalfinal.png",
      //image:"arrivalfinal.png",
      desc : steps[ei].completeLocationAddress,
      name : ""
    };
    polylineId=selectedJourney[0]["journey_uf_id"];
    if(steps.length>2 && selectedJourney[0]["journeyStatus"]["text"]!="Completed")
    {
      kony.print("we are having checkpoints and Journey is not completed");
      var polylineData = {
        id : polylineId,
        locations : steps.slice(0,ei-1),
        //locations : steps,
        startLocation : startLoc,
        endLocation : endLoc,
        polylineConfig : {lineWidth : 5, lineColor: color}
      };
    }
    else
    {
      kony.print("we don't have checkpoints or journey is completed");
      var polylineData = {
        id : polylineId,
        //locations : steps.slice(1,ei+1),
        locations : steps,
        startLocation : startLoc,
        endLocation : endLoc,
        polylineConfig : {lineWidth : 5, lineColor: color}
      };

    }
    this.view.journeymap.drawPolyline(polylineData);
  },
  prepareSupervisorsList : function()
  {
    kony.print("in prepareSupervisorsList");
    for(var row=0;row<journeyDetails["records"].length;row++)
    {
      supervisorsList[row]=journeyDetails["records"][row]["journey_supervisor_name"];
    }
  },

  onSelectionCallBack : function(eventobject)
  {
    kony.print("onSelectionCallBack "+eventobject);
    kony.print("selectedKeyValue is "+eventobject["selectedKeyValue"][1]);
    this.removePinsFromMap();
    var segDataJson_filter=this.filterJourneysFromAvailableList(eventobject["selectedKeyValue"][1],"journey_supervisor_name");
    this.view.segJourneyList.removeAll();
    this.view.segJourneyList.setData(segDataJson_filter);
  },
  prepareSUpervisorsMasterData : function()
  {

    var supervisorsMasterData=[];

    for(var row=0;row<journeyDetails["records"].length;row++)
    {
      var supervisorDataSet=["key1", "value1"];
      supervisorDataSet[0]=journeyDetails["records"][row]["journey_supervisor_emp_id"];
      supervisorDataSet[1]=journeyDetails["records"][row]["journey_supervisor_name"];
      supervisorsMasterData.push(supervisorDataSet);
    }
    kony.print("supervisorsMasterData "+JSON.stringify(supervisorsMasterData));
    supervisorsMasterData=this.removeDuplicateSupervisorsRecords(supervisorsMasterData);
    kony.print("unique supervisorsMasterData ::"+JSON.stringify(supervisorsMasterData));
    return supervisorsMasterData
  },
  prepareTrackingPointsMasterData : function()
  {
    kony.print("in prepareTrackingPointsMasterData");
    trackingPointsMasterData=[];

    for(var row=0;row<journeyDetails["records"].length;row++)
    {
      var trackingPointsDataSet={"lblTrackingPoint" : "",
                                 "imgSelection":"defaultdeselect_2.png",
                                 "trackingPointId" : ""};
      //["key1", "value1"];
      trackingPointsDataSet["trackingPointId"]=journeyDetails["records"][row]["journey_tracking_point_id_fk"];
      trackingPointsDataSet["lblTrackingPoint"]=this.getTrackPointName(journeyDetails["records"][row]["journey_tracking_point_id_fk"]);
      trackingPointsMasterData.push(trackingPointsDataSet);

    }
    kony.print("trackingPointsMasterData"+JSON.stringify(trackingPointsMasterData));
    trackingPointsMasterData=this.removeDuplicaterecords(trackingPointsMasterData);
    kony.print("unique trackingPointsMasterData"+JSON.stringify(trackingPointsMasterData));
    return trackingPointsMasterData
  },
  getTrackPointName : function(trackPointId)
  {
    kony.print("in getTrackPointName");
    var trackPointName="";
    for(var j=0;j<tractingPointsResponse["records"].length;j++)
    {
      if(tractingPointsResponse["records"][j]["tracking_point_id_pk"]==trackPointId)
        trackPointName=tractingPointsResponse["records"][j]["tracking_point_address"];
    }
    return trackPointName;
  },
  trackingPointsOnSelectionCallBack : function(eventobject)
  {
    kony.print("in trackingPointsOnSelectionCallBack "+eventobject);
    kony.print("selectedKeyValue is "+eventobject["selectedKeyValue"][0]);
    this.removePinsFromMap();
    var segDataJson_filter=this.filterJourneysFromAvailableList(eventobject["selectedKeyValue"][0],"journeyTrackingpointId");
    this.view.segJourneyList.removeAll();
    this.view.segJourneyList.setData(segDataJson_filter);
  },
  trackingPointsSegmentOnclick : function(eventobject)
  {
    kony.print("in trackingPointsSegmentOnclick ");
    var selectedIndices=this.view.searchnfilter.selectedIndices;
    //kony.print("this.view.searchnfilter.selectedIndices"+this.view.searchnfilter.selectedindices2)
    if(selectedIndices==null)
    {
      kony.print("selectedIndices is null")
      this.view.segJourneyList.setData(currentJourniesList);
    }
    else
    {
      var selectedIndices_string=selectedIndices.toString();
      kony.print("type of x ::"+(typeof selectedIndices_string))
      kony.print("selectedIndices_string::"+selectedIndices_string);
      var selectedIndexArray=kony.string.split(selectedIndices_string,",");
      kony.print("selectedIndexArray.length"+selectedIndexArray.length);
      kony.print("selectedIndexArray ::"+selectedIndexArray);
      this.removePinsFromMap();
      this.view.segJourneyList.removeAll();
      kony.print("trackingPointsMasterData"+JSON.stringify(trackingPointsMasterData));
      for(var row=2; row<selectedIndexArray.length;row++)
      {
        var selectedTrackingPoint=selectedIndexArray[row]; 
        kony.print("selectedTrackingPoint"+selectedTrackingPoint);
        var trackingPointId=trackingPointsMasterData[selectedTrackingPoint]["trackingPointId"];
        kony.print("trackingPointId::"+trackingPointId);

        var segDataJson_filter=this.filterJourneysFromAvailableList(trackingPointId,"journeyTrackingpointId");
        this.view.segJourneyList.addAll(segDataJson_filter);
      }
    }

  },
  filterBySearchBox : function(eventObject)
  {
    kony.print("filterBySearchBox ::"+ eventObject["text"]);
    var searchString =eventObject["text"];
    this.removePinsFromMap();
    var segDataJson_filter=this.filterJourneysFromSearchBox(searchString);
    this.view.segJourneyList.removeAll();
    this.view.segJourneyList.setData(segDataJson_filter);
  },
  filterJourneysFromSearchBox : function(searchString)
  {
    var segDataJson_filter=[];
    //  if(filter!="live")
    pinsList=[];
    var filterContent="";
    // kony.print("before segDataJson"+JSON.stringify(segDataJson));
    //kony.print("after segDataJson_All"+JSON.stringify(segDataJson_All));
    var segJourneyListData=this.view.segJourneyList.data;
    kony.print("currentJourniesList ::"+JSON.stringify(currentJourniesList));
    kony.print("searchString ::"+searchString);
    //kony.print("filterParam ::"+filterParam);
    kony.print("currentJourniesList.length"+currentJourniesList.length);
    // kony.print("segDataJson  ::"+JSON.stringify(segDataJson));

    if(searchString=="" || searchString==null)
    {
      kony.print("search String is empty..")
      return currentJourniesList;
    }
    for(row=0;row<currentJourniesList.length;row++)
    {
      var driverName=currentJourniesList[row]["driverName"];
      if(driverName!="" && driverName!=null && driverName!=undefined)
      {
        driverName=driverName.toUpperCase();
        searchString=searchString.toUpperCase();
      }
      var driverNameMatch=driverName.indexOf(searchString);
      kony.print("status ::"+driverName.indexOf(searchString));
      if(searchString==currentJourniesList[row]["journey_id"] || driverNameMatch!=-1 || searchString==currentJourniesList[row]["userEmpId"])
      {
        segDataJson_filter.push(currentJourniesList[row]);
        pin= this.createPin(row,currentJourniesList);
        kony.print("pin ::"+JSON.stringify(pin));
        if(pin["lon"]==null || pin["lat"]==null||pin["lon"]=="" || pin["lat"]=="")
          kony.print("unable set the pin for record"+row);
        else
        {
          this.view.journeymap.setPin(pin);
          pinsList.push(pin);
        }

      }
    }
    //kony.print("after segDataJson"+JSON.stringify(segDataJson));
    //kony.print("after segDataJson_All"+JSON.stringify(segDataJson_All));
    kony.print("segDataJson_filter"+JSON.stringify(segDataJson_filter));
    return segDataJson_filter;
  },

  closeFilter : function()
  {
    kony.print("in closeFilter");
    this.view.searchnfilter.hideFilterBox();
    this.view.segJourneyList.removeAll();
    this.view.segJourneyList.setData(currentJourniesList);

  },

  closeSearch : function()
  {
    kony.print("in closeSearch");
    this.view.searchnfilter.hideSearchBox();
    this.view.segJourneyList.removeAll();
    this.view.segJourneyList.setData(currentJourniesList);
  },
  getMonthInMMMFormat : function(month)
  {
    kony.print("in getMonthInMMMFormat");
    var monthsList=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    return monthsList[month];
  },
  getIncidentDescByIncidentId : function(incidentId)
  {
    kony.print("in getIncidentDescByIncidentId");
    var incidentsDescList=["Accident","Vehicle Breakdown","Out of Fuel","Extreme Weather","Other"];
    return incidentsDescList[incidentId-1];
  },
  calculateTimeDifferenceInMinuts: function(actual_checkin_timestamp_Local)
  {
    kony.print("in calculateTimeDifferenceInMinuts ::"+actual_checkin_timestamp_Local);
    var systemTimeStamp=new Date();
    timeInMS=systemTimeStamp.getTime()-actual_checkin_timestamp_Local.getTime();
    timeInMinuts=Math.ceil(timeInMS/60000);

    kony.print("timeInMinuts ::"+timeInMinuts);
    kony.print("timeInMS ::"+timeInMS);
    return timeInMinuts;
  },
  removeDuplicaterecords : function(trackingPointsMasterData)
  {
    var uniqueNames = [];
    var uniqueRows=[];
    for(var i = 0; i< trackingPointsMasterData.length; i++){  
      // kony.print("uniqueNames.indexOf ::"+uniqueNames.indexOf(trackingPointsMasterData[i].trackingPointId))
      if(uniqueNames.indexOf(trackingPointsMasterData[i].trackingPointId)==-1){
        uniqueNames.push(trackingPointsMasterData[i].trackingPointId);   
        uniqueRows.push(trackingPointsMasterData[i]);
      }        
    }
    kony.print("uniqueRows ::"+JSON.stringify(uniqueRows));
    return uniqueRows;
  },
  removeDuplicateSupervisorsRecords : function(supervisorsMasterData)
  {
    var uniqueNames = [];
    var uniqueRows=[];
    for(var i = 0; i< supervisorsMasterData.length; i++){  
      // kony.print("uniqueNames.indexOf ::"+uniqueNames.indexOf(trackingPointsMasterData[i].trackingPointId))
      if(uniqueNames.indexOf(supervisorsMasterData[i][0])==-1){
        uniqueNames.push(supervisorsMasterData[i][0]);   
        uniqueRows.push(supervisorsMasterData[i]);
      }        
    }
    kony.print("uniqueRows ::"+JSON.stringify(uniqueRows));
    return uniqueRows;
  },
  fetchLatestIncidentsList : function()
  {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("incident_notification_tbl");
    var options = {
      "dataObject": dataObject,
      "queryParams": {
        "$filter":"lastupdateddatetime gt "+incidentsList["records"][0]["lastupdateddatetime"]+" and incident_status_id_fk eq 1"
      }
    };
    objSvc.fetch(options,
                 this.fetchLatestIncidentsListSuccessCallback.bind(this),
                 this.fetchLatestIncidentsListFailureCallback.bind(this));
  },

  fetchLatestIncidentsListSuccessCallback:function(response)
  {
    kony.print("fetchLatestIncidentsListSuccessCallback"+JSON.stringify(response));
    if(response["records"].length!=0)
    {
      kony.print("incident list have updated");
      this.showIncidentNotifications(response["records"]);
    }
    else
    {
      alert("All incidents are in Local List");
      //this.showIncidentNotifications();
    }

  },
  fetchLatestIncidentsListFailureCallback : function(error)
  {
    kony.print("fetchLatestIncidentsListFailureCallback"+JSON.stringify("error"));
  },
  getSqlDatetoJSDate:function(sqlDateString){
    //Converts UTC date to local date also.
    var jsDateObj=null;
    if(typeof sqlDateString=='string'){
      try{
        //var utcDateObj=new Date(sqlDateString);
        //return utcDateObj;
        kony.print("sqlDateString::"+sqlDateString);
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
      //throw "Invalid date string!";
    }
    // kony.print("jsDateObj.toLocaleDateString ::"+ jsDateObj.toLocaleDateString());
    kony.print("jsDateObj ::"+jsDateObj);
    return jsDateObj;
  } ,
  onlinePushNotification: function(msg){
    alert("Message Recieved" + JSON.stringify(msg));
    this.view.jrmgmtheader.enableBellNotification(1);
    this.view.forceLayout();
  },
  offlinePushNotification:function(){

  },
  onNavigate:function(){
    kony.print("inside on navigate");
    if (isFromPush){
      alert("in onnavigate inside if");
      //this.view.Button0aabcead72bb748.text = "New Offline Message";
      isFromPush  = false;
    }
  },
  showIncidentNotifications : function(response)
  {
    var notificationsList=[];

    for(var i=0; i<response.length;i++)
    {
      notificationsJson={
        "lblNotificationMsg" : "",
        "lblTime" : "",
        "lblMsg" : ""
      }
      var driverName="";
      driverName=this.getDriverNameByJourneyId(response[i]["journey_id_fk"]);
      notificationsJson["lblNotificationMsg"]="Incident reported";
      notificationsJson["lblTime"]="JustNow";
      notificationsJson["lblMsg"]=driverName+" send an Emergency Status for his journey";
      notificationsList.push(notificationsJson);
    }

    this.view.segNotificationMsg.setData(notificationsList);
    this.view.flxNotificationContainer.setVisibility(true);
    this.view.forceLayout();

  },
  onClickOfFlxAction : function()
  {

    this.view.flxEscalationpolocy.setVisibility(true);
    this.view.escalationpolicy.launchPolicy();
    var data="";
    if(selectedJourneyStatus=="Delay")
    {
      esclationPolocy_count=1;
      titile="Driver"
      subTitle="Step 1 of Escalation reported policy. Contact the driver and provide status. If you are not able to acquire contact you will proceed to Step 2 contact the Supervisor.";
      reportSubTitle="Step 1 of Escalation reported policy. Contact the driver and provide status. If you are not able to acquire contact you will proceed to Step 2<b> contact the Supervisor.</b>";
      data=this.preapareDataForSegNotePoints_delay();
    }
    if(selectedJourneyStatus=="incident Reported")
    {
      titile="Supervisor"
      subTitle="Step 2 of Escalation reported policy. Contact the Supervisor and provide status. If you are not able to acquire contact you will proceed to Step 3 contact the Escalation Team.";
      reportSubTitle="Step 2 of Escalation reported policy. Contact the Supervisor and provide status. If you are not able to acquire contact you will proceed to Step 3<b> contact the Escalation Team.</b>";
      esclationPolocy_count=2;
      data=this.preapareDataForSegNotePoints_Incident();
    }
    this.view.escalationpolicy.setDataToSegNotePoints(data);
    this.view.escalationpolicy.setDataToHeaderWidgets(titile,subTitle,reportSubTitle,"Next");
  },
  onClickOfNoContinueAction : function()
  {
    esclationPolocy_count++;
    if(esclationPolocy_count==1)
    {
      titile="Driver"
      subTitle="Step 1 of Escalation reported policy. Contact the driver and provide status. If you are not able to acquire contact you will proceed to Step 2 contact the Supervisor.";
      reportSubTitle="Step 1 of Escalation reported policy. Contact the driver and provide status. If you are not able to acquire contact you will proceed to Step 2<b> contact the Supervisor.</b>";
      btnText="Next";
    }
    if(esclationPolocy_count==2)
    {
      titile="Supervisor"
      subTitle="Step 2 of Escalation reported policy. Contact the Supervisor and provide status. If you are not able to acquire contact you will proceed to Step 3 contact the Escalation Team.";
      reportSubTitle="Step 2 of Escalation reported policy. Contact the Supervisor and provide status. If you are not able to acquire contact you will proceed to Step 3<b> contact the Escalation Team.</b>";
      btnText="Next";
    }
    if(esclationPolocy_count==3)
    {
      titile="Escalation Team";
      subTitle="Step 3 of Escalation reported policy. Contact the Escalation Team and provide status";
      reportSubTitle="Step 3 of Escalation reported policy. Contact the Escalation Team and provide status";
      btnText="Close Escalation";
    }

    this.view.escalationpolicy.setDataToHeaderWidgets(titile,subTitle,reportSubTitle,btnText);
  },
  onClickofYesContinueAction : function()
  {
    //esclationPolocy_count--;
    var actionDesc=this.view.escalationpolicy.getEscalationDesc();
    kony.print("actionDesc "+actionDesc);
    if(selectedJourneyStatus=="Delay")
    {
      this.updateActionDetailsOnCheckPoints_delay(actionDesc,nextCheckPointSeqNumber,esclationPolocy_count,selectedJourneyId,expected_Nextcheckin_timestamp_UTC,checkin_interval_row_id);
    }
    else
    {
      this.updateActionDetailsOnIncidnetsList(actionDesc,nextCheckPointSeqNumber,esclationPolocy_count);
    }
    kony.print("escalation closed "+esclationPolocy_count);
    this.view.flxEscalationpolocy.setVisibility(false);
  },
  onClickOfYesCancelAction : function()
  {
    this.view.flxEscalationpolocy.setVisibility(false);
    // esclationPolocy_count=1;
  },
  onClickOfNoCancelAction : function()
  {
    this.view.flxEscalationpolocy.setVisibility(false);
    // esclationPolocy_count=1;
  },
  updateActionDetailsOnCheckPoints_delay: function(actionDesc,nextCheckPointSeqNumber,esclationPolocy_count,selectedJourneyId,expected_Nextcheckin_timestamp_UTC,checkin_interval_row_id)
  {
    kony.print("in updateEscalationDetailsOnCheckPoints");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });

    var dataObject = new kony.sdk.dto.DataObject("checkpoints_tbl");
    var odataUrl ="";
    kony.print("selectedCheckPointRowId::"+selectedCheckPointRowId);
    expected_Nextcheckin_timestamp_UTC=this.prepareExpectedCheckInTimeStamp(expected_Nextcheckin_timestamp_UTC,checkin_interval_row_id);
    var data = {
      checkpoint_row_id_pk : selectedCheckPointRowId,
      admin_action_id_for_delay_fk: esclationPolocy_count,
      admin_action_description: actionDesc,
      check_point_seq_num : nextCheckPointSeqNumber,
      journey_id_fk : selectedJourneyId,
      softdeleteflag : false,
      checkpoint_status_id_fk : 2,
      expected_checkin_timestamp : expected_Nextcheckin_timestamp_UTC ,
    };
    kony.print("current CheckPoint details ::"+JSON.stringify(data));

    dataObject.setRecord(data);
    var options = {
      "dataObject": dataObject
    };

    objSvc.create(options,
                  this.updateActionDetailsOnCheckPoints_delaySuccessCallback.bind(this),
                  this.updateActionDetailsOnCheckPoints_delayFailureCallback.bind(this)); 
  },
  updateActionDetailsOnCheckPoints_delaySuccessCallback : function(response)
  {
    kony.print("Successfully updated Action details for DELAY case"+JSON.stringify(response));
    kony.print("escalation closed "+esclationPolocy_count);
    this.view.flxEscalationpolocy.setVisibility(false);
  },
  updateActionDetailsOnCheckPoints_delayFailureCallback : function(error)
  {
    kony.print("in updateActionDetailsOnCheckPoints_delayFailureCallback"+JSON.stringify(error));
  },

  updateActionDetailsOnIncidnetsList: function(actionDesc,nextCheckPointSeqNumber,esclationPolocy_count)
  {
    kony.print("in updateActionDetailsOnIncidnetsList");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    esclationPolocy_count--;
    var dataObject = new kony.sdk.dto.DataObject("incident_notification_tbl");
    kony.print("selectedIncindet_Id::"+selectedIncindet_Id);
    var data = {
      incident_id_pk : selectedIncindet_Id,
      incident_response_id_fk: esclationPolocy_count,
      incident_response_text: actionDesc,
      incident_status_id_fk : 2
    };
    dataObject.setRecord(data);
    var options = {
      "dataObject": dataObject
    };
    objSvc.update(options,
                  this.updateActionDetailsOnIncidnetsListSuccessCallback.bind(this),
                  this.updateActionDetailsOnIncidnetsListFailureCallback.bind(this)); 
  },
  updateActionDetailsOnIncidnetsListSuccessCallback : function(response)
  {
    kony.print("Successfully updated Action details for INCIDENT case"+JSON.stringify(response));
    kony.print("escalation closed "+esclationPolocy_count);
    if(isComingFromJourneyDetails!=null && isComingFromJourneyDetails!=undefined && isComingFromJourneyDetails!="")
    {
      if(isComingFromJourneyDetails==true)
      {
        //change status to delay
        this.view.journeydetail.updateJourneyStatusOnJourneyDetailsUI("Delay");
        isComingFromJourneyDetails=false;
        isJourneyDetailsUpdated=true;
      }
      else
      {
        this.onClickOfFlxRefreshBtn();
      }

    }
    else
    {
      this.onClickOfFlxRefreshBtn();
    }

    this.view.flxEscalationpolocy.setVisibility(false);
  },
  updateActionDetailsOnIncidnetsListFailureCallback : function(error)
  {
    kony.print("in updateActionDetailsOnIncidnetsListFailureCallback"+JSON.stringify(error));
  },
  preapareDataForSegNotePoints_delay : function()
  {
    var  reportPolocyJson=
        [
          {

            "lblTitle" : "Contact Traveler",

            "rchTxtDesc" : "You will be pushed to contact the Travelere, if you succeed you will be able to close the Escalation case. If you were <b>NOT</b> able to contact the traveler, you will provide status information. This information will be saved on the details profile of the journey.",

            "lblWhiteShadow" : "1",

            "lblDummy" : "label"
          },
          {
            "lblTitle" : "Contact Supervisor",

            "rchTxtDesc" : "You will be pushed to contact the Travelere, if you succeed you will be able to close the Escalation case. If you were <b>NOT</b> able to contact the traveler, you will provide status information. This information will be saved on the details profile of the journey.",

            "lblWhiteShadow" :"2",

            "lblDummy" : "label"
          },
          {

            "lblTitle" :"Notify Emergency Team",

            "rchTxtDesc" : "This is the last measure of resort, where you will notify the Emergency team and from there you will be able to officially close the escalation in the system.",

            "lblWhiteShadow" : "3",
            "lblDummy" : "label"
          }
        ]
    return reportPolocyJson;
  },
  preapareDataForSegNotePoints_Incident : function()
  {
    var reportPolocyJson=
        [
          {
            "lblTitle" : "Contact Supervisor",

            "rchTxtDesc" : "You will be pushed to contact the Travelere, if you succeed you will be able to close the Escalation case. If you were <b>NOT</b> able to contact the traveler, you will provide status information. This information will be saved on the details profile of the journey.",

            "lblWhiteShadow" : "1",

            "lblDummy" : "label"
          },
          {

            "lblTitle" :"Notify Emergency Team",

            "rchTxtDesc" : "This is the last measure of resort, where you will notify the Emergency team and from there you will be able to officially close the escalation in the system.",

            "lblWhiteShadow" : "2",
            "lblDummy" : "label"
          }
        ]
    return reportPolocyJson;
  },
  // Need to Add Minuts
  prepareExpectedCheckInTimeStamp : function(ActualCheckInTimeStamp,checkin_interval_row_id)
  {
    kony.print("in prepareExpectedCheckInTimeStamp");
    checkin_interval_minutes=0;
    for(var i=0; i<checkIn_intervels["records"].length;i++)
    {
      if(checkIn_intervels["records"][i]["checkin_interval_row_id_pk"]==checkin_interval_row_id)
      {
        checkin_interval_minutes=checkIn_intervels["records"][i]["checkin_interval_minutes"];
        break;
      }
    }
    kony.print("------checkin_interval_minutes ::"+ checkin_interval_minutes);
    kony.print("-----before adding CheckIn minuts :: "+ActualCheckInTimeStamp);
    ActualCheckInTimeStamp.setMinutes ( ActualCheckInTimeStamp.getMinutes() + checkin_interval_minutes);
    kony.print("-----after adding CheckIn minuts :: "+ActualCheckInTimeStamp);
    return ActualCheckInTimeStamp
  },

  getTimeStringIn12HrsFromat:function (date) {
    try{
      if(date!=null || date!=undefined)
      {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        hours = hours < 10 ? '0' + hours:hours;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
      else
      {
        return null;
      }

    }catch(excp){
      debugger;
      throw excp;
    }

  },
  getReadableDateString:function (dateObj){
    var dateString="";
    if(dateObj!==null && dateObj!==undefined){
      try{
        //var dateObj=new Date(param);
        var mDate=dateObj.getDate();
        mDate= mDate < 10 ? '0'+ mDate: mDate;
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
  getDriverNameByJourneyId : function(journeyId)
  {
    kony.print("in getDriverNameByJourneyId ::"+journeyId);
    var driverName="";
    for(var i=0;i<journeyDetails["records"].length;i++)
    {
      if(journeyDetails["records"][i]["journey_id_pk"]==journeyId)
      {
        driverName=this.getUserNameForUserId(journeyDetails["records"][i]["user_emp_id_fk"]);
      }
    }
    return driverName;
  },
  /* actionOfChangeETABtn : function(params)
  {
    kony.print("in actionOfChangeETABtn ");
    //this.view.flxETA.setVisibility(true);
  }*/
  actionOfChangeETA : function(params)
  {
    kony.print("actionOfChangeETA");
    this.view.flxETA.setVisibility(true);
  },
  actionOfCloseJourney: function(param)
  {
    kony.print("actionOfCloseJourney");
    this.view.flxTerminateJourney.setVisibility(true);
  },
  onClickOfUpdateETACancel : function()
  {
    kony.print("in onClickOfUpdateETACancel");
    this.view.flxETA.setVisibility(false);
  },
  onClickOfUpdateETAConformBtn : function()
  {
    kony.print("in onClickOfUpdateCheckINConform");
    // kony.print("selectedKeyValue ::"+selectedKeyValue);
    var minutes=this.view.ETAReporting.getListBoxSelectedValue();
    kony.print("minutes To be Added::"+minutes);
    kony.print("selected JourneyID ::"+selectedJourney[0]["journey_id"]);
    kony.print("current journey_expected_arrival_datetime ::"+selectedJourney[0]["journey_expected_arrival_datetime"]);
    var updatedDate=this.addingMinutesToUTCDate(selectedJourney[0]["journey_expected_arrival_datetime"],minutes);
    this.changeETAByJourneyID(updatedDate,selectedJourney[0]["journey_id"]);
  },
  addingMinutesToUTCDate : function(expectedCheckInTimeStamp,minutes)
  {
    kony.print("------Minutes to be added ::"+ minutes);
    kony.print("-----before adding CheckIn minuts :: "+expectedCheckInTimeStamp);
    var expectedCheckInTimeStamp_date=new Date(expectedCheckInTimeStamp);
    kony.print("-----before adding CheckIn minuts As Date Obj :: "+expectedCheckInTimeStamp_date);
    expectedCheckInTimeStamp_date.setMinutes ( expectedCheckInTimeStamp_date.getMinutes() + minutes);
    kony.print("-----after adding CheckIn minuts :: "+expectedCheckInTimeStamp_date);
    return expectedCheckInTimeStamp_date;
  },
  changeETAByJourneyID: function(updatedDateObj,journeyId)
  {
    kony.print("in changeETAByJourneyID");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });

    var dataObject = new kony.sdk.dto.DataObject("journey_tbl");
    kony.print("journeeyId::"+journeyId);
    var data = {
      journey_id_pk : journeyId,
      journey_expected_arrival_datetime: updatedDateObj,
    };
    dataObject.setRecord(data);
    var options = {
      "dataObject": dataObject
    };
    objSvc.update(options,
                  this.changeETAByJourneyIDSuccessCallback.bind(this),
                  this.changeETAByJourneyIDFailureCallback.bind(this)); 
  },
  changeETAByJourneyIDSuccessCallback : function(response)
  {
    kony.print("Successfully updated ETA in Journey Table"+JSON.stringify(response));
    //kony.print("escalation closed "+esclationPolocy_count);
    this.view.flxETA.setVisibility(false);
    isJourneyDetailsUpdated=true;

  },
  changeETAByJourneyIDFailureCallback : function(error)
  {
    kony.print("in changeETAByJourneyIDFailureCallback"+JSON.stringify(error));
  },

  actionOfTerminateJourneyConform : function()
  {

    kony.print("in actionOfTerminateJourneyConform");
    kony.print("selected JourneyID ::"+selectedJourney[0]["journey_id"]);
    this.updateJourneyStatusByJourneyId(selectedJourney[0]["journey_id"]);
  },
  updateJourneyStatusByJourneyId : function(journeyId)
  {
    kony.print("journeyId ::"+journeyId);
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });

    var dataObject = new kony.sdk.dto.DataObject("journey_tbl");
    kony.print("journeeyId::"+journeyId);
    var data = {
      journey_id_pk : journeyId,
      journeystatus_code_fk: 4,
    };
    dataObject.setRecord(data);
    var options = {
      "dataObject": dataObject
    };
    objSvc.update(options,
                  this.updateJourneyStatusByJourneyIdSuccessCallback.bind(this),
                  this.updateJourneyStatusByJourneyIdFailureCallback.bind(this)); 
  },
  updateJourneyStatusByJourneyIdSuccessCallback : function(response)
  {
    kony.print("Successfully updated Jourey Status in Journey Table"+JSON.stringify(response));
    this.view.flxTerminateJourney.setVisibility(false);
    isJourneyDetailsUpdated=true;
    alert("Your Journey has been Terminated");
    this.view.journeydetail.updateJourneyStatusOnJourneyDetailsUI("Terminated");
  },
  onClickOfTerminateJourneyCancelBtn : function()
  {
    kony.print(" in onClickOfTerminateJourneyCancelBtn");
    this.view.flxTerminateJourney.setVisibility(false);
  },
  updateJourneyStatusByJourneyIdFailureCallback : function(error)
  {
    kony.print("in updateJourneyStatusByJourneyIdFailureCallback"+JSON.stringify(error));
  },

  onClickOfCreateCheckInBtn : function()
  {
    kony.print("onClickOfCreateCheckInBtn ");
    this.createNewCheckIn();
  },

  createNewCheckIn: function()
  {
    kony.print("in createNewCheckIn ::"+JSON.stringify(selectedJourney));
    nextCheckPointSeqNumber=selectedJourney[0]["nextCheckPointSeqNumber"];
    selectedJourneyId=selectedJourney[0]["journey_id"];
    selectedCheckPointRowId=selectedJourney[0]["nextCheckpoint_row_id_pk"];
    expected_Nextcheckin_timestamp_UTC=selectedJourney[0]["expected_Nextcheckin_timestamp_UTC"];
    actual_checkin_timestamp1=getCurrentDateTimeInUTC();
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });

    var dataObject = new kony.sdk.dto.DataObject("checkpoints_tbl");
    var odataUrl ="";
    //expected_Nextcheckin_timestamp_UTC=this.prepareExpectedCheckInTimeStamp(expected_Nextcheckin_timestamp_UTC,checkin_interval_row_id);
    var data = {
      checkpoint_row_id_pk : selectedCheckPointRowId,
      check_point_seq_num : nextCheckPointSeqNumber,
      journey_id_fk : selectedJourneyId,
      softdeleteflag : 0,
      checkpoint_status_id_fk : 1,
      expected_checkin_timestamp : expected_Nextcheckin_timestamp_UTC,
      actual_checkin_timestamp : actual_checkin_timestamp1
    };
    kony.print("current CheckPoint details ::"+JSON.stringify(data));

    dataObject.setRecord(data);
    var options = {
      "dataObject": dataObject
    };

    objSvc.create(options,
                  this.createNewCheckInSuccessCallback.bind(this),
                  this.createNewCheckInFailureCallback.bind(this));  
  },
  createNewCheckInSuccessCallback : function(response)
  {
    kony.print("Successfully created Check In from Admin"+JSON.stringify(response));
    alert("check in Created Successfully");
  },
  createNewCheckInFailureCallback : function(error)
  {
    kony.print("in createNewCheckInFailureCallback"+JSON.stringify(error));
  },
  getCheckInInterval : function(checkin_interval_row_id)
  {
    var checkin_interval_minutes=0;
    for(var i=0; i<checkIn_intervels["records"].length;i++)
    {
      if(checkIn_intervels["records"][i]["checkin_interval_row_id_pk"]==checkin_interval_row_id)
      {
        checkin_interval_minutes=checkIn_intervels["records"][i]["checkin_interval_minutes"];
        break;
      }
    }
    return checkin_interval_minutes;
  },
  onClickOfFlxRefreshBtn : function()
  {
    kony.print("refresh Button On click");
    journiesList_launch_Flow="Refresh_flow"
    //this.view.tabpane.setSkinForSelectedTab("All");
    //this.onFormPreSHow();
    kony.application.showLoadingScreen("","Please wait..",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    isJourneyDetailsUpdated=false;
    this.fetchJourneyDetails();

  },
  actionOfEmergencyBtnOnJourneyDetails: function()
  {
    kony.print("in actionOfEmergencyBtnOnJourneyDetails");
    isComingFromJourneyDetails=true;
    nextCheckPointSeqNumber=selectedJourney[0]["nextCheckPointSeqNumber"];
    selectedJourneyId=selectedJourney[0]["journey_id"];
    selectedCheckPointRowId=selectedJourney[0]["nextCheckpoint_row_id_pk"];
    expected_Nextcheckin_timestamp_UTC=selectedJourney[0]["expected_Nextcheckin_timestamp_UTC"];
    //actual_checkin_timestamp1=getCurrentDateTimeInUTC();
    selectedJourneyStatus=selectedJourney[0]["journeyStatus"]["text"];
    selectedIncindet_Id=selectedJourney[0]["incidentId"];
    checkin_interval_row_id=selectedJourney[0]["checkin_interval_row_id_fk"];
    this.onClickOfFlxAction();
  },
  notify : function(){
    this.view.flxNotifyScreen.isVisible = true;
    var username = [];
    for(var i=0;i<this.ufids.length;i++){
      var id = this.ufids[i].ufid;
      var splitID = id.split(".");
      var firstName = (splitID[0].split(""))[0].toUpperCase();
      var lastName = (splitID[1].split(""))[0].toUpperCase();
      var initials = firstName+lastName;
      username.push(initials);
    }
    this.view.flxUserDetails.removeAll();
    for(var j=0;j<username.length;j++){
      var left = "0%";
      if(j!==0){
        left = "10px";
      }
      var flxUser = new kony.ui.FlexContainer({
        "id": "flxUser"+(j+1),
        "top": "0%",
        "left": left,
        "width": "34px",
        "height": "34px",
        "skin":"konyqfsSknFlxUsers",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "isVisible": true,
        "clipBounds": true,
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      var lblUserName = new kony.ui.Label({
        "id": "lblUserName"+(j+1),
        "centerX": "48%",
        "centerY": "48%",
        "skin":"konyqfsSknLblUsername",
        "zIndex": 1,
        "text":username[j],
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "isVisible": true,
        "clipBounds": true,
      }, {
        "padding": [0, 0, 0, 0]
      }, {});
      flxUser.add(lblUserName);
      this.view.flxUserDetails.add(flxUser);
    }
  },
  pushMessage : function(){
    alert(JSON.stringify(this.ufids));
    var integrationObj = new kony.sdk.getCurrentInstance().getIntegrationService("OrchPushNotificationService");
    var operationName = "notifyMobileUsers";
    var data = {
      "msg":this.view.txtAreaMessageContent.text,
      "password":"India$890",
      "subscribers":this.ufids,
      "appId":"2f23d110-46dd-40a0-8770-983d96a8afbe",
      "title":this.view.txtboxTitle.text,
      "userid":"sreenivasu.nampelli@kony.com"
    };
    if (kony.sdk.getCurrentInstance().currentClaimToken === null) {
      return;
    }
    var headers = {};
    integrationObj.invokeOperation(operationName, headers, data, this.notifySuccess.bind(this), this.notifyFailure.bind(this));
  },
  notifySuccess : function(response){
    alert(JSON.stringify(response));
    this.view.flxNotifyScreen.isVisible = false;
  },
  notifyFailure : function(err){
    alert(JSON.stringify(err));
    this.view.flxNotifyScreen.isVisible = false;
  },
  enableNotifyButton : function(context){
    var index = context.rowIndex;
    if(this.count === 0){
      this.previousIndex.push(index);
      this.count++;
      var subscribers = {"ufid":this.view.segJourneyList.data[index].userMailID};
      this.ufids.push(subscribers);
      this.view.segJourneyList.data[index].imgCheckIn = "checkbox_selected.png";
      var data = this.view.segJourneyList.data[index];
      this.view.segJourneyList.setDataAt(data, index);
      this.view.lblSelectedData.text = this.count+" selected journey";
      this.view.flxHeader.isVisible = false;
      this.view.flxNotify.isVisible = true;
    }
    else{
      if(this.previousIndex.includes(index)){
        var removeID;
        var removeindex = this.previousIndex.indexOf(index);
        this.previousIndex.splice(removeindex,1);
        this.count--;
        for(var i=0;i<this.ufids.length;i++){
          if(this.view.segJourneyList.data[index].userMailID === this.ufids[i].ufid){
            removeID = i;
          }
        }
        alert(removeID);
        this.ufids.splice(removeID,1);
        this.view.segJourneyList.data[index].imgCheckIn = "chechbox_unselected.png";
        var data = this.view.segJourneyList.data[index];
        this.view.segJourneyList.setDataAt(data, index);
        if(this.count === 0){
          this.view.flxNotify.isVisible = false;
          this.view.flxHeader.isVisible = true;
        }
        else
          this.view.lblSelectedData.text = this.count+" selected journey";
      }
      else{
        this.previousIndex.push(index);
        this.count++;
        var subscribers = {"ufid":this.view.segJourneyList.data[index].userMailID};
        this.ufids.push(subscribers);
        this.view.segJourneyList.data[index].imgCheckIn = "checkbox_selected.png";
        var data = this.view.segJourneyList.data[index];
        this.view.segJourneyList.setDataAt(data, index);
        this.view.lblSelectedData.text = this.count+" selected journey";
        this.view.flxHeader.isVisible = false;
        this.view.flxNotify.isVisible = true;
      } 
    }
    this.view.forceLayout();  
  }


});