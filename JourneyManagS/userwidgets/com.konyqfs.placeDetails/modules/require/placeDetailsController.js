define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._startYear=0;
      this._endYear=0;
      this._totalDays=31;
      this._totalHours=12;
      this._totalMins=60;
      this._totalMonths=12;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineSetter(this, "startYear", function(val) {
        if(typeof val=='number'){
          this._startYear=val;
        }else{
          this._startYear=null;
        }
      });
      defineGetter(this, "startYear", function() {
        return this._startYear;
      });

      defineSetter(this, "endYear", function(val) {
        if(typeof val=='number'){
          this._endYear=val;
        }
        else{
          this._endYear=null;
        }
      });
      defineGetter(this, "endYear", function() {
        return this._endYear;
      });

    },
    preShow:function(){
      this.setDefaultData();
    },
    setDefaultData:function(){
      this.setDefaultHourData();
      this.setDefaultMinsData();
      this.setDefaultAMPMData();
      this.setDefaultDatesData(this._totalDays);
      this.setDefaultMonthsData();
      this.setDefaultYearsData();
      this.setCurrentDate();
      this.setCurrentTime();
    },
    setDefaultHourData:function(){
      debugger;
      var hoursMasterData=[];
      for(i=1;i<=this._totalHours;i++){
        var hoursDataMap=[];
          hoursDataMap.push(i);
          hoursDataMap.push(i)
          hoursMasterData.push(hoursDataMap); 
      }
      this.view.lsHour.masterData=hoursMasterData;
    },
    setDefaultMinsData:function(){
      debugger;
      var minsMasterData=[];
      for(i=0;i<this._totalMins;i++){
        var minsDataMap=[];
        if(i===0){
          minsDataMap.push(i);
          minsDataMap.push("MM");
          minsMasterData.push(minsDataMap);
        }
        else{
          minsDataMap.push(i);
          minsDataMap.push(i);
          minsMasterData.push(minsDataMap); 
        }
      }
      this.view.lsMins.masterData=minsMasterData;
    },
    setDefaultAMPMData:function(){
      debugger;
      var ampmMasterData=[];
      var ampmDataMap=[];
      ampmDataMap.push(0);
      ampmDataMap.push("AM");
      ampmMasterData.push(ampmDataMap);
      ampmDataMap=[];
      ampmDataMap.push(1);
      ampmDataMap.push("PM");
      ampmMasterData.push(ampmDataMap);
      this.view.lsAMPM.masterData=ampmMasterData;
    },
    setDefaultDatesData:function(numberOfDays){
      debugger;
      var datesMasterData=[];
      for(i=0;i<numberOfDays;i++){
        var daysDataMap=[];
        daysDataMap.push(i);
        daysDataMap.push(i+1)
        datesMasterData.push(daysDataMap); 

      }
      this.view.lsDate.masterData=datesMasterData;
    },
    setDefaultMonthsData:function(){
      debugger;
      var monthsMasterData=[];
      var monthsDataMap=[];
      monthsDataMap=[];
      monthsDataMap.push(1);
      monthsDataMap.push("January");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(2);
      monthsDataMap.push("February");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(3);
      monthsDataMap.push("March");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(4);
      monthsDataMap.push("April");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(5);
      monthsDataMap.push("May");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(6);
      monthsDataMap.push("June");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(7);
      monthsDataMap.push("July");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(8);
      monthsDataMap.push("August");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(9);
      monthsDataMap.push("September");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(10);
      monthsDataMap.push("October");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(11);
      monthsDataMap.push("November");
      monthsMasterData.push(monthsDataMap);
      monthsDataMap=[];
      monthsDataMap.push(12);
      monthsDataMap.push("December");
      monthsMasterData.push(monthsDataMap);
      this.view.lsMonth.masterData=monthsMasterData;
    },
    setDefaultYearsData:function(){
      debugger;
      var diff=this._endYear-this._startYear;
      var yearsMasterData=[];
      for(i=0;i<=diff;i++){
        var yearsDataMap=[];
        yearsDataMap.push(i);
        yearsDataMap.push(this._startYear+(i))
        yearsMasterData.push(yearsDataMap);   

      }
      this.view.lsYear.masterData=yearsMasterData;
    },
    getNumberOfDaysinCurrentMonth:function(month,year){
      debugger;
      return new Date(year, month, 0).getDate();
    },
    setSelections:function(selectedDateKey){
      debugger;
      this.view.lsDate.selectedKey=selectedDateKey;
    },
    searchForLocation:function(){
      debugger;
      var integrationObj = KNYMobileFabric.getIntegrationService("placeSearchAutoComplete");
      var data={
        input:this.view.tbxDepartureDetails.text,
        key:"AIzaSyBeIDNhaa-u8IZcdqkNub-N648OCzb9QH4"
      };
      var header={};
      var operationName="getPlaceDetails";
      integrationObj.invokeOperation(operationName, header, data, this.operationSuccess.bind(this), this.operationFailure.bind(this));
    },
    operationSuccess:function(response){
      debugger;
      if(response.predictions.length > 0){
        this.view.flxSegParent.setVisibility(true);
        this.view.segPlaceDetails.setVisibility(true);
        this.view.segPlaceDetails.rowFocusSkin="segRowFocusSkin";
        var data=[];
        for(var i=0;i<response.predictions.length;i++){
          var segData={};
          segData["lblPlaceData"]=response.predictions[i].description;
          data.push(segData);
        }
        this.view.segPlaceDetails.setData(data);
      }
      else{
        this.view.segPlaceDetails.removeAll();
        this.view.segPlaceDetails.setVisibility(false);
      }
      this.view.forceLayout();
    },
    operationFailure:function(err){
      debugger;
    },
    onButtonClick:function(){
      debugger;
      var data={};
      data["PlaceDetails"]=this.view.tbxDepartureDetails.text;
      var selectedHourIndex=this.view.lsHour.selectedKeyValue;
      var selectedHour=selectedHourIndex[1];
      var selectedMinsIndex=this.view.lsMins.selectedKeyValue;
      var selectedMins=selectedMinsIndex[1];
      var selectedAMPMIndex=this.view.lsAMPM.selectedKeyValue;
      var selectedAMPM=selectedAMPMIndex[1];
      var selectedDateIndex=this.view.lsDate.selectedKeyValue;
      var selectedDate=selectedDateIndex[1];
      var selectedMonthIndex=this.view.lsMonth.selectedKeyValue;
      var selectedMonth=selectedMonthIndex[1];
      var selectedYearIndex=this.view.lsYear.selectedKeyValue;
      var selectedYear=selectedYearIndex[1];
      var date=new Date(selectedMonth+"/"+selectedDate+"/"+selectedYear);
      data["Date"]=date.toString();
      var time=selectedHour+":"+selectedMins+selectedAMPM
      data["Time"]=time;
      this.onDone(data);
    },
    setCurrentTime:function(){
      var now=new Date();
      var currentHour=now.getHours();
      var currentMins=now.getMinutes();
      var ampmSelected="";
      if(currentHour>=12){
        if(currentHour===12){
          currentHour=12;
          ampmSelected="PM";
          this.view.lsAMPM.selectedKey=1;
        }
        currentHour=currentHour-12;
        ampmSelected="PM";
        this.view.lsAMPM.selectedKey=1;
      }
      else{
        currentHour=currentHour;
        ampmSelected="AM";
        this.view.lsAMPM.selectedKey=0;
      }
      this.view.lsHour.selectedKey=Number(currentHour);
      this.view.lsMins.selectedKey=Number(currentMins);
    },
    setCurrentDate:function(){
      var date=new Date();
      var currentDate=date.getDate();
      var currentMonth=date.getMonth();
      var currentYear=date.getFullYear();
      this.view.lsDate.selectedKey=Number(currentDate)-1;
      this.view.lsMonth.selectedKey=Number(currentMonth)+1;
      var diff=Number(currentYear)-Number(this._startYear);
      this.view.lsYear.selectedKey=Number(diff);
    },
    setTime:function(timeString){
      debugger;
      if(timeString){
        var inputTime=timeString.split(":");
        var selectedHour=Number(inputTime[0]);
        var selectedMins=Number(inputTime[1]);
        var ampmSelected=""
        if(selectedHour>=12){
          selectedHour=selectedHour-12;
          ampmSelected="PM";
          this.view.lsAMPM.selectedKey=1;
        }
        else{
          selectedHour=selectedHour;
          ampmSelected="AM";
          this.view.lsAMPM.selectedKey=0;
        }
        this.view.lsHour.selectedKey=Number(selectedHour);
        this.view.lsMins.selectedKey=Number(selectedMins);
      }
      else{
        this.setCurrentTime();
      }

    },
    setDate:function(dateString){
      debugger;
      if(dateString){
        var date=new Date(dateString);
        var currentDate=date.getDate();
        var currentMonth=date.getMonth();
        var currentYear=date.getFullYear(); 
        this.view.lsDate.selectedKey=Number(currentDate)-1;
        this.view.lsMonth.selectedKey=Number(currentMonth)+1;
        var diff=Number(currentYear)-Number(this._startYear);
        this.view.lsYear.selectedKey=Number(diff);
      }
      else{
        this.setCurrentDate();
      }

    },


  };
});