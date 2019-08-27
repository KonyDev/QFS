define({ 

  //Type your controller code here 
  //Type your controller code here 
  navigationData:null,
  isFreshForm:true,
  /**
   * @function
   *
   * @param param 
   */
  onNavigate:function(param){
    debugger;
    if(typeof param=='object' && param!==null){
      this.navigationData=param;
      this.isFreshForm=true;
    }else{
      this.isFreshForm=false;
    }
  },
  /**
   * @function
   *
   */
  onFormPostShow:function(){
    if(this.isFreshForm===true){
      try{
        var arrivalDateObj;
        var departureDateObj
        var journey=this.navigationData["journey"];
        this.view.lblDepartureAddress.text=journey[JOURNEY_TBL.EXPECTED_DEPARTURE_ADDRESS ];
        this.view.lblArrivalAddress.text=journey[JOURNEY_TBL.EXPECTED_ARRIVALPOINT_ADDRESS];
        this.view.lblDepartureDateTime.text=DateConversion(new Date(journey[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]));
        this.view.lblArribalDateTime.text=DateConversion(new Date(journey[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]));
        this.view.lblJourneyId.text=journey[JOURNEY_TBL.UF_ID];
        
//         try{
//             departureDateObj=JourneyUtil.getSqlDatetoJSDate(journey[JOURNEY_TBL.EXPECTED_DEPARTURE_DATETIME]);
//             var departureDateString=JourneyUtil.getReadableDateString(departureDateObj);
//             var departureTimeString=JourneyUtil.getReadableTimeString(departureDateObj);
//             this.view.lblDepartureDateTime.text=departureDateString+" "+departureTimeString;
//           }catch(excp){
//             debugger;
//           }
//           try{
//             arrivalDateObj=JourneyUtil.getSqlDatetoJSDate(journey[JOURNEY_TBL.EXPECTED_ARRIVAL_DATETIME]);
//             var  arrivalDateString=JourneyUtil.getReadableDateString(arrivalDateObj);
//             var  arrivalTimeString=JourneyUtil.getReadableTimeString(arrivalDateObj);
//             this.view.lblArribalDateTime.text=arrivalDateString+" "+arrivalTimeString;
//           }catch(excp){
//             debugger;
//           }

        var timeDiffInHrs=(arrivalDateObj.getTime()-departureDateObj.getTime())/(1000*60*60);

        this.view.CopyLabel0de267e89f78941.text=Math.ceil(timeDiffInHrs)+" Hrs";

      }catch(exp){
        debugger;
      }
    }
  },

});