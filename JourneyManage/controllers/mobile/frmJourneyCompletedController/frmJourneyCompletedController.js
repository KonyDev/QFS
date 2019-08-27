define({ 

 //Type your controller code here 
setData:function(){
    var data= [
      {
        "imgTrackingPoint":"departurepoint.png",
        "lblTrackingPointName":"123 Baker Street",
        "carImg":"car.png",
        "clockImg":"clock.png",
        "lblMiles":"0 mi",
        "lblTime":"4:10 PM",
        "flxJourneyData":{isVisible:false},
        "flxShadow":{isVisible:false}
      },
      {
        "imgTrackingPoint":"enteredcheckpoint.png",
        "lblTrackingPointName":"55 Lacey Walk ",
        "carImg":"car.png",
        "clockImg":"clock.png",
        "lblMiles":"210 mi",
        "lblTime":"4:40 PM",
        "flxJourneyData":{isVisible:false},
        "flxShadow":{isVisible:false}
      },
      {
        "imgTrackingPoint":"enteredcheckpoint.png",
        "lblTrackingPointName":"493 Manual Ridge",
        "carImg":"car.png",
        "clockImg":"clock.png",
        "lblMiles":"260 mi",
        "lblTime":"5:10 PM",
        "flxJourneyData":{isVisible:false},
        "flxShadow":{isVisible:false}
      },
      {
       "imgTrackingPoint":"enteredcheckpoint.png",
        "lblTrackingPointName":"40 Wunsh Keys",
        "carImg":"car.png",
        "clockImg":"clock.png",
        "lblMiles":"330 mi",
        "lblTime":"6:46 PM",
        "flxJourneyData":{isVisible:false},
        "flxShadow":{isVisible:false}
      },
      {
        "imgTrackingPoint":"arrival.png",
        "lblTrackingPointName":"231 Wellington Street",
        "carImg":"car.png",
        "clockImg":"clock.png",
        "lblMiles":"410 mi",
        "lblTime":"7:10 PM",
        "flxJourneyData":{isVisible:true},
        "lblJourneyTime":"Journey Time",
        "lblJourneyDuration":"2H 30Min",
        "flxShadow":{isVisible:true},
        "btnStatus":{skin:"sknAwaitingApproval",text:"delayed by 30Min",width:"100dp"}
      }
    ];
    this.view.segJourneyStatus.setData(data);
  }
 });