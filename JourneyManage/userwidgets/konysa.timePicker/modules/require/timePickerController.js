define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._selectedHour=0;
      this._selectedMin=0;
      this._selectedAMPM="AM";
      this._totalHours=12;
      this._totalMins=60;
      this._timeInterval=0;
      this._isHourProvided=false;
      this._isMinsProvided=false;
      this._currentSelectedHour=0;
      this._currentSelectedMins=0;
      this._currentSelectedAMPM="AM";
      this._isCustomTimeSet=false;
      this._globalHoursIndexStore={};
      this._globalMinsIndexStore={};
      this._globalAMPMIndexStore={};
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineSetter(this, "timeInterval", function(val) {
        if((typeof val=='number') && (val !== 0)){
          this._timeInterval=val;
        }
      });
      defineGetter(this, "timeInterval", function() {
        return this._timeInterval;
      });
    },
    setDefaultData:function(){
      this.setDefaultHourData();
      this.setDefaultMinsData();
      this.setDefaultAMPMData();
    },
    preshow:function(){
      this.setDefaultData();
      this.OnScroll();
    },
    setDefaultHourData:function(){
      var hourData=[];
      hourData.push({lblTimePicker:" "});
      for(i=1;i<=this._totalHours;i++){
        if(i<10){
          hourData[i]={lblTimePicker:"0"+i.toFixed()};
        }
        else{
          hourData[i]={lblTimePicker:(i).toFixed()};
        }
      }
      hourData.push({lblTimePicker:" "});
      this.mapHours();
      this.view.segHours.setData(hourData);
    },
    setDefaultMinsData:function(){
      var minsData=[];
      if(this._timeInterval>0){
        minsData.push({lblTimePicker:" "});
        var scaleFactor=Math.round(this._totalMins/this._timeInterval);
        for(i=0;i<scaleFactor;i++){
          if((this._timeInterval*i)<=10){
            minsData[i+1]={lblTimePicker:"0"+(this._timeInterval*i).toFixed()};
          }
          else{
            minsData[i+1]={lblTimePicker:(this._timeInterval*i).toFixed()};
          }

        }
        minsData.push({lblTimePicker:" "});
        this.mapMins();
        this.view.segMins.setData(minsData);

      }
      else{
        minsData.push({lblTimePicker:" "});
        for(i=1;i<this._totalMins+1;i++){
          if(i<10){
            minsData[i]={lblTimePicker:"0"+(i-1).toFixed()};
          }
          else{
            minsData[i]={lblTimePicker:(i-1).toFixed()};
          }
        }
        minsData.push({lblTimePicker:" "});
        this.mapMins();
        this.view.segMins.setData(minsData);  
      }

    },
    setDefaultAMPMData:function(){
      var ampmData=[];
      ampmData[0]={lblTimePicker:" "};
      ampmData[1]={lblTimePicker:"AM"};
      ampmData[2]={lblTimePicker:"PM"};
      ampmData[3]={lblTimePicker:" "};
      this.mapAMPM();
      this.view.segDayTime.setData(ampmData);

    },
    OnScroll:function(){
      this.view.segDayTime.onScrollEnd=function(){
        this.view.segDayTime.selectedRowIndex=[0,this.view.segDayTime.getFirstVisibleRow().rowIndex];
        var selectedAMPMDataIndex=this.view.segDayTime.getFirstVisibleRow().rowIndex+1;
        this._selectedAMPM=this.view.segDayTime.data[selectedAMPMDataIndex].lblTimePicker;
      }.bind(this);

      this.view.segMins.onScrollEnd=function(){
        this.view.segMins.selectedRowIndex=[0,this.view.segMins.getFirstVisibleRow().rowIndex];
        var selectedMinsIndex=this.view.segMins.getFirstVisibleRow().rowIndex+1;
        this._selectedMin=this.view.segMins.data[selectedMinsIndex].lblTimePicker;

      }.bind(this);

      this.view.segHours.onScrollEnd=function(){
        this.view.segHours.selectedRowIndex=[0,this.view.segHours.getFirstVisibleRow().rowIndex];
        var selectedHourIndex=this.view.segHours.getFirstVisibleRow().rowIndex+1;
        this._selectedHour = this.view.segHours.data[selectedHourIndex].lblTimePicker;
      }.bind(this);

    },
    onTimeSelectButtonClick:function(){
      debugger;
      var selectedTime="";
      if(this._isCustomTimeSet){
        var selectedHourIndex=this.view.segHours.getFirstVisibleRow().rowIndex+1;
        this._selectedHour=this.view.segHours.data[selectedHourIndex].lblTimePicker;
        var selectedTimeIndex=this.view.segMins.getFirstVisibleRow().rowIndex+1;
        this._selectedMin=this.view.segMins.data[selectedTimeIndex].lblTimePicker;
        var selectedAMPMIndex=this.view.segDayTime.getFirstVisibleRow().rowIndex+1;
        this._selectedAMPM=this.view.segDayTime.data[selectedAMPMIndex].lblTimePicker;
        if(this._selectedAMPM=="PM"){
          if(Number(this._selectedHour)<12){
            selectedTime=Number(Number(this._selectedHour)+12)+":"+this._selectedMin;
            if(typeof this.onTimeSelected=='function'){
              this.onTimeSelected(selectedTime);
            }
          }
          else{
            selectedTime=this._selectedHour+":"+this._selectedMin;
            if(typeof this.onTimeSelected=='function'){
              this.onTimeSelected(selectedTime);
              selectedTime="00"+":"+this._selectedMin;
            }
          }

        }else{
          if(Number(this._selectedHour)<12){
            selectedTime=Number(this._selectedHour)+":"+this._selectedMin;
            if(typeof this.onTimeSelected=='function'){
              this.onTimeSelected(selectedTime);
            }
          }
          else{
            selectedTime="00"+":"+this._selectedMin;
            if(typeof this.onTimeSelected=='function'){
              this.onTimeSelected(selectedTime);
            }
          }

        }

      }
      else{
        if(this._selectedAMPM==="AM"){
          var selectedHourIndex2=this.view.segHours.getFirstVisibleRow().rowIndex+1;
          this._selectedHour=this.view.segHours.data[selectedHourIndex2].lblTimePicker;
          var selectedTimeIndex2=this.view.segMins.getFirstVisibleRow().rowIndex+1;
          this._selectedMin=this.view.segMins.data[selectedTimeIndex2].lblTimePicker;
          if(Number(this._selectedHour)<12){
            selectedTime=this._selectedHour+":"+this._selectedMin;
            if(typeof this.onTimeSelected=='function'){
              this.onTimeSelected(selectedTime);
            } 
          }
          else{
            selectedTime="00"+":"+this._selectedMin;
            if(typeof this.onTimeSelected=='function'){
              this.onTimeSelected(selectedTime);
            }
          }

        }
        else{
          var selectedHourIndex1=this.view.segHours.getFirstVisibleRow().rowIndex+1;
          this._selectedHour=this.view.segHours.data[selectedHourIndex1].lblTimePicker;
          var selectedTimeIndex1=this.view.segMins.getFirstVisibleRow().rowIndex+1;
          this._selectedMin=this.view.segMins.data[selectedTimeIndex1].lblTimePicker;
          var selectedHour=Number(this._selectedHour)+12;
          if(Number(this._selectedHour<12)){
            selectedTime=Number(Number(this._selectedHour)+12)+":"+this._selectedMin;
            if(typeof this.onTimeSelected=='function'){
              this.onTimeSelected(selectedTime);
            }
          }
          else{
            selectedTime=selectedHour+":"+this._selectedMin;
            if(typeof this.onTimeSelected=='function'){
              this.onTimeSelected(selectedTime);
            }
          }

        }
      }


      return selectedTime;
    },
    setTime:function(timeString){
      //debugger;
      this._isCustomTimeSet=true;
      this.setDefaultData();
      if(timeString!==""){
        //this.setDefaultData();
        var inputTime=timeString.split(":");
        var selectedHour=Number(inputTime[0]);
        if(selectedHour>=12 && selectedHour<24){
          if(selectedHour>12){
            selectedHour=selectedHour-12;
            this._currentSelectedHour="0"+selectedHour;
            this._currentSelectedAMPM="PM" ;
          }
          else{
            this._currentSelectedHour=12;
            this._currentSelectedAMPM="PM";
          }

        }
        else{
          this._currentSelectedHour=selectedHour;
          this._currentSelectedAMPM="AM"
        }

        var selectedMins=Number(inputTime[1]);
        if(selectedMins<60){
          this._currentSelectedMins=selectedMins;
        }
        this.setCurrentSelections(this._currentSelectedHour, this._currentSelectedMins,this._currentSelectedAMPM);
      }
      else{
        var now = new Date();
        var currentHour = now.getHours();
        if(currentHour>12){
          currentHour=currentHour-12;
        }
        var currentMins = now.getMinutes();
        var hourIndex = this.getSelectedHourIndex(currentHour);
        var minsIndex = this.getSelectedMinsIndex(currentMins);
        var ampmIndex=0;
        if(currentHour>=12){
          selectedAMPM="PM"
          ampmIndex=this.getSelectedAMPMIndex(selectedAMPM);
        }
        else{
          selectedAMPM="AM"
          ampmIndex=this.getSelectedAMPMIndex(selectedAMPM);
        }
        this.view.segHours.selectedRowIndex=[0,hourIndex-1];
        this.view.segMins.selectedRowIndex=[0,minsIndex];
        this.view.segDayTime.selectedRowIndex=[0,ampmIndex];

      }
      //this.setCurrentSelections(this._currentSelectedHour, this._currentSelectedMins,this._currentSelectedAMPM);
    },
    setCurrentSelections:function(selectedHour,selectedMins,selectedAMPM){
      //debugger;
      var hourIndex=this.getSelectedHourIndex(selectedHour);
      var minsIndex=this.getSelectedMinsIndex(selectedMins);
      var ampmIndex=this.getSelectedAMPMIndex(selectedAMPM);
      this.view.segHours.selectedRowIndex=[0,hourIndex-1];
      this.view.segMins.selectedRowIndex=[0,minsIndex];
      this.view.segDayTime.selectedRowIndex=[0,ampmIndex-1];
    },
    mapHours:function(){
      //debugger;
      var hourWrapper={};
      for(i=1;i<=this._totalHours;i++){
        hourWrapper[i]=i; 
      }
      this._globalHoursIndexStore=hourWrapper;

    },
    mapMins:function(){
      //debugger;
      var minsWrapper={};
      for(i=0;i<this._totalMins;i++){
        minsWrapper[i]=i;
      }
      this._globalMinsIndexStore=minsWrapper;      
    },
    mapAMPM:function(){
      //debugger;
      var ampmWrapper={};
      ampmWrapper[1]="AM";
      ampmWrapper[2]="PM";
      this._globalAMPMIndexStore=ampmWrapper;
    },
    getSelectedHourIndex:function(selectedHour){
      //debugger;
      for(i=1;i<=Object.keys(this._globalHoursIndexStore).length;i++){
        if(this._globalHoursIndexStore[i] === Number(selectedHour)){
          return i;
        }
      }
    },
    getSelectedMinsIndex:function(selectedMins){
      //debugger;
      for(i=0;i<Object.keys(this._globalMinsIndexStore).length;i++){
        if(this._globalMinsIndexStore[i] === Number(selectedMins)){
          return i;
        }
      }
    },
    getSelectedAMPMIndex:function(selectedAMPM){
      //debugger;
      for(i=1;i<=Object.keys(this._globalAMPMIndexStore).length;i++){
        if(this._globalAMPMIndexStore[i] === selectedAMPM){
          return i;
        }
      }
    }



  };
});