var response = {
    "driverDetails":
    {
       "driverEmail":"johngreen@gmail.com",
       "driverPhone":"094-228-0095",
       "driverSatellite":"011 870 320488888",
       "driverRadio":"106.7",
   },
   "vehiclesMasterData":[
        {"vehicleName":"Personal car","Make":"Ford","Model":"Focus","Color":"Red","RegistrationNumber":"345226"},
        {"vehicleName":"Company Car1","Make":"Ford","Model":"Focus","Color":"Blue","RegistrationNumber":"3468345"},
        {"vehicleName":"Company Car2","Make":"Ford","Model":"Focus","Color":"Green","RegistrationNumber":"3894798"}
    ],
   "guidesAndManualsMasterData":[
        {"Title":"The Pilabara Road Safety","url":""},
        {"Title":"Vehicle Specification Guide","url":""},
        {"Title":"Traffic Management Procedure","url":""},
    ],
 
     "trackingPointsMasterData":[
        {"trackingPointName":"Exploration","Supervisor":{"Name":"Alex Davis","Mobile":"094-338-0087","campRoomNumber":32},"Company":{"Name":"abc","phoneNumber":"1234567"}}
    ],
 
    "departureAndArrivalPointsMasterData":[
        {"lat":"","lon":"","location":"123 Baker Street"},
        {"lat":"","lon":"","location":"221 Birmingham Street"},
        {"lat":"","lon":"","location":"Laplace Stores"}
    ],
 
    "verificationChecklistCheckboxesMasterData":[
        {"checklistItem":"I have performed the pre-start check"},
        {"checklistItem":"I have checked the road conditions."},
        {"checklistItem":"I have sufficient drinking water."}
    ],
 
     "natureOfEmergencyMasterData":[
        {"Title":"Emergency 1"},
        {"Title":"Emergency 2"},
        {"Title":"Emergency 3"},
        {"Title":"Emergency 4"}
    ],
 
     "verificationChecklistRadiobuttonsMasterData":
        {
           "radioBtnQuestion1":{"id1":"I have a map of my route.", "id2":"I don’t have a map of my route, but Iam familiar with the route of travel"}
        },
    "journey":{
        "jouneyID":"100-FR-EM-0048_19",
        "jouneyStatus":"Approved",
        "journeyTime":"6H",
        "journeyFrom":"123 Baker Street",
        "journeyTo":"231 Wellington Street",
        "journeyStartDateTime":"24-06-2018:12:00",
        "journeyEndDateTime":"24-06-2018:20:14:10",
        "journeyPassengers":[{"Name":"Josh Bowers","Mobile":"094-345-3554"},{"Name":"Edward Thomas","Mobile":"094-345-3554"}],
//         "selectedTrackingPoint":trackingPointsMasterData[0],
//         "selectedDeparturePoint":departureAndArrivalPointsMasterData[0],
//         "selectedArrivalPoint": departureAndArrivalPointsMasterData[1],
//         "selectedVehicle":vehiclesMasterData[0],
        "capturedVehicleImages":[],
        "isVehicleInspected":"true",
        "valuesSelectedForCheckListCheckboxTypeAnswers":[{/*verificationChecklistCheckboxesMasterData[0]:"true",verificationChecklistCheckboxesMasterData[1]:"false",verificationChecklistCheckboxesMasterData[2]:"true"*/}],
        "specialInstructions":"",
        "valuesSelectedForCheckListRadioButtonTypeAnswers": [/*verificationChecklistRadiobuttonsMasterData.radioBtnQuestion1.id1*/],
        "signature":"",
        "checkInPoints":[{"lat":"","lon":""},{"lat":"","lon":""},{"lat":"","lon":""},{"lat":"","lon":""}],
        "presentCheckPoint":/*checkInPoints[1]*/"",
        "isApproved":"true",
        "isCheckInCompleted":"true",
        "isReturnJourneyConfigured":"false",
        "returnJourneyFor":"120-EM-FR-0086_22",
        "isEmergencyReported":"true",
        "emergencyDetails":{
                        "natureOfEmergency":/*natureOfEmergencyMasterData[1]*/"",
                        "emergencyLocation":{"lat":"","lon":""},
                        "empergencyTime":"",
                        "emergencyDescription":""
                        }
}

};
 
 
var verticalDottedLine = {text:"|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n"};
 


define({ 
 
 //Type your controller code here 
  InitialSelection:function()
  {
    //Set the Tab1 to selected when the form loads.
    this.view.tab3.skin="tabNonSelected";
    this.view.tab1.skin="tabSelected";
    this.view.tab2.skin="tabNonSelected";
  },
  NavigateToBeginJourney:function(eventobject,params)
  {
    var x = new kony.mvc.Navigation("BeginJourney");
	x.navigate();
  },
  changetab1BtnSkins:function(){
    this.view.tab3.skin="tabNonSelected";
    this.view.tab1.skin="tabSelected";
    this.view.tab2.skin="tabNonSelected";
  },
  
  changetab2BtnSkins:function(){
    this.view.tab3.skin="tabNonSelected";
    this.view.tab1.skin="tabNonSelected";
    this.view.tab2.skin="tabSelected";
  },
  
  changetab3BtnSkins:function(){
    this.view.tab3.skin="tabSelected";
    this.view.tab1.skin="tabNonSelected";
    this.view.tab2.skin="tabNonSelected";
  },
  
  
  
  setData:function(){
    var data = [{
      "lblJourneyId":"100-FR-EM-0048_22",
      "lblJourneyTime":"4h",
      "lblDot":"......................................",
      "depatureImg":"departurepoint.png",
      "imgDestination":"arrivalfinal.png",
      "lblFrom":"From",
      "lblStart":"Start",
      "lblTo":"To",
      "btnProgress":{isVisible:true, text:"Approved", widgetAlignment :"WIDGET_ALIGN_CENTER",padding:[1,1,1,1]},
      "lblArrival":"Arrival",
      "lblFromData":"123 Backer Street",
      "lblStartData":"25 Sep 10:10 PM",
      "lblToData":"231 Wellington Drive Suite 717",
      "lblArrivalData":"25 Sep  4:10 PM",
      "btnSeeDetails":{isVisible:false, skin:"sknApproved", text:"Approved",top:"30dp"},
      "btnEdit":{top:"5dp",text:"Edit",bottom:"30dp",padding:[1,1,1,1]},
      "btnBegin":{top:"5dp",text:"Begin",bottom:"30dp",padding:[1,1,1,1]},
      "locationImg":"departurepoint.png",
      "destIcon":"arrivalfinal.png",
      "lblVerticalDottedLine":verticalDottedLine.text
    }];
    this.view.segTodayJourneyDetails.setData(data);
  },
  setData2:function(){
    var data = [{
      "lblJourneyId":"100-FR-EM-0048_22",
      "lblJourneyTime":"4h",
      "lblFrom":"From",
      "lblStart":"Start",
      "lblTo":"To",
      "lblDot":"......................................",
      "depatureImg":"departurepoint.png",
      "imgDestination":"arrivalfinal.png",
      "btnProgress":{isVisible:true, text:"Approved",widgetAlignment :"WIDGET_ALIGN_CENTER",padding:[1,1,1,1]},
      "lblArrival":"Arrival",
      "lblFromData":"123 Backer Street",
      "lblStartData":"25 Sep 10:10 PM",
      "lblToData":"231 Wellington Drive Suite 717",
      "lblArrivalData":"25 Sep  4:10 PM",
      "btnSeeDetails":{isVisible:false, text:"Approved",top:"30dp"},
      "btnEdit":{top:"5dp",text:"Edit",bottom:"30dp"},
      "btnBegin":{top:"5dp",text:"Begin",bottom:"30dp"},
      "locationImg":"departurepoint.png",
      "destIcon":"arrivalfinal.png",
      "lblVerticalDottedLine":verticalDottedLine.text
    },
    {
      "lblJourneyId":"100-FR-EM-0048_22",
      "lblJourneyTime":"4h",
      "lblFrom":"From",
      "lblStart":"Start",
      "lblTo":"To",
      "lblDot":"......................................",
      "depatureImg":"departurepoint.png",
      "btnProgress":{isVisible:true, skin:"sknAwaitingApproval",width:"120dp", text:"Awaiting approval",widgetAlignment :"WIDGET_ALIGN_CENTER",padding:[1,1,1,1]},
      "lblArrival":"Arrival",
      "lblFromData":"123 Backer Street",
      "lblStartData":"25 Sep 4:10 PM",
      "lblToData":"231 Wellington Drive Suite 717",
      "lblArrivalData":"25 Sep  8:10 PM",
      "btnSeeDetails":{isVisible:false, text:"Approved"},
      "btnEdit":{text:"Edit",left:"3%",skin:"btnPressed1",width:"100%",centerX:"50%",top:"5dp",bottom:"30dp"},
      "locationImg":"departurepoint.png",
      "destIcon":"arrivalfinal.png",
      "lblVerticalDottedLine":verticalDottedLine.text
    },
    {
      "lblJourneyId":"100-FR-EM-0048_22",
      "lblJourneyTime":"4h",
      "lblFrom":"From",
      "lblStart":"Start",
      "lblTo":"To",
      "lblDot":"......................................",
      "depatureImg":"departurepoint.png",
      "imgDestination":"arrivalfinal.png",
      "btnProgress":{isVisible:true,skin:"sknAwaitingApproval",width:"120dp", text:"Awaiting approval",padding:[1,1,1,1]},
      "lblArrival":"Arrival",
      "lblArrivalData":"25 Sep  8:10 PM",
      "lblFromData":"231 Wellington Drive Suite 717",
      "lblStartData":"25 Sep 10:10 PM",
      "lblToData":"123 Backer Street",
      "btnSeeDetails":{isVisible:false, text:"Approved"},
      "btnEdit":{text:"Edit", left:"3%", right:"3%",skin:"btnPressed1",width:"100%",centerX:"50%",top:"5dp",bottom:"30dp"},
      "locationImg":"departurepoint.png",
      "destIcon":"arrivalfinal.png",
      "lblVerticalDottedLine":verticalDottedLine.text
    },
     {
       "lblJourneyId":"100-FR-EM-0048_22",
      "lblJourneyTime":"4h",
      "lblFrom":"From",
      "lblStart":"Start",
      "lblTo":"To",
       "lblDot":"......................................",
      "depatureImg":"departurepoint.png",
      "imgDestination":"arrivalfinal.png",
      "btnProgress":{isVisible:true, skin:"sknAwaitingApproval", text:"Awaiting approval",widgetAlignment :"WIDGET_ALIGN_CENTER",padding:[1,1,1,1],width:"120dp"},
      "lblArrival":"Arrival",
      "lblFromData":"323 Moore Course Apt. 744",
      "lblStartData":"25 Sep 10:10 PM",
      "lblToData":"944 Stiedemann Mountains",
       "lblArrivalData":"25 Sep  8:10 PM",
      "btnSeeDetails":{isVisible:false,  text:"Approved",top:"30dp"},
      "btnEdit":{text:"Edit",  left:"3%",skin:"btnPressed1", right:"3%",width:"100%",centerX:"50%",top:"5dp",bottom:"30dp"},
       "locationImg":"departurepoint.png",
      "destIcon":"arrivalfinal.png",
      "lblVerticalDottedLine":verticalDottedLine.text
    }];
    this.view.segTodayJourneyDetails.setData(data);
  },
setData3:function(){
     var data = [{
      "lblJourneyId":"100-FR-EM-0048_22",
      "lblJourneyTime":"4h",
      "lblFrom":"From",
      "lblStart":"Start",
      "lblTo":"To",
       "lblDot":"......................................",
      "depatureImg":"departurepoint.png",
      "imgDestination":"arrivalfinal.png",
      "btnProgress":{isVisible:false, text:"Approved",widgetAlignment :"WIDGET_ALIGN_CENTER",padding:[1,1,1,1]},
      "lblArrival":"Arrival",
      "lblFromData":"123 Backer Street",
      "lblStartData":"25 Sep 10:10 PM",
      "lblToData":"231 Wellington Drive Suite 717",
      "lblArrivalData":"25 Sep  4:10 PM",
      "btnSeeDetails":{isVisible:true,  top:"30dp"},
       "btnEdit":{top:"5dp",text:"Edit",bottom:"30dp",isVisible:false},
      "btnBegin":{top:"5dp",text:"Begin",bottom:"30dp",isVisible:false},
       "locationImg":"departurepoint.png",
      "destIcon":"arrivalfinal.png",
      "lblVerticalDottedLine":verticalDottedLine.text,
       "imgVerticalDotsBlue":"verticalthreedotsblue.png"
    },
    {
      "lblJourneyId":"100-FR-EM-0048_22",
      "lblJourneyTime":"4h",
      "lblFrom":"From",
      "lblStart":"Start",
      "lblTo":"To",
      "lblDot":"......................................",
      "depatureImg":"departurepoint.png",
      "imgDestination":"arrivalfinal.png",
      "btnProgress":{isVisible:false, skin:"sknApproved", text:"Approved",widgetAlignment :"WIDGET_ALIGN_CENTER",padding:[1,1,1,1]},
      "lblArrival":"Arrival",
      "lblFromData":"123 Backer Street",
      "lblStartData":"25 Sep 4:10 PM",
      "lblToData":"231 Wellington Drive Suite 717",
      "lblArrivalData":"25 Sep  8:10 PM",
      "btnSeeDetails":{isVisible:true,  top:"30dp"},
       "btnEdit":{top:"5dp",text:"Edit",bottom:"30dp",isVisible:false},
      "btnBegin":{top:"5dp",text:"Begin",bottom:"30dp",isVisible:false},
      "locationImg":"departurepoint.png",
      "destIcon":"arrivalfinal.png",
      "lblVerticalDottedLine":verticalDottedLine.text,
       "imgVerticalDotsBlue":"verticalthreedotsblue.png"
    },
    {
       "lblJourneyId":"100-FR-EM-0048_22",
      "lblJourneyTime":"4h",
      "lblFrom":"From",
      "lblStart":"Start",
      "lblDot":"......................................",
      "depatureImg":"departurepoint.png",
      "imgDestination":"arrivalfinal.png",
      "btnProgress":{isVisible:false, skin:"sknApproved", text:"Approved",widgetAlignment :"WIDGET_ALIGN_CENTER",padding:[1,1,1,1]},
      "lblTo":"To",
      "lblArrival":"Arrival",
      "lblFromData":"123 Backer Street",
      "lblStartData":"25 Sep 10:10 PM",
      "lblToData":"231 Wellington Drive Suite 717",
      "lblArrivalData":"25 Sep  4:10 PM",
      "btnSeeDetails":{isVisible:true, top:"30dp"},
       "btnEdit":{top:"5dp",text:"Edit",bottom:"30dp",isVisible:false},
      "btnBegin":{top:"5dp",text:"Begin",bottom:"30dp",isVisible:false},
      "locationImg":"departurepoint.png",
      "destIcon":"arrivalfinal.png",
      "lblVerticalDottedLine":verticalDottedLine.text,
       "imgVerticalDotsBlue":"verticalthreedotsblue.png"
    }];
    this.view.segTodayJourneyDetails.setData(data);
  },
  
  navigateToPastDetailsForm : function(eventobject,params){
    var x = new kony.mvc.Navigation("frmPastDetails");
	x.navigate();
  }
 });