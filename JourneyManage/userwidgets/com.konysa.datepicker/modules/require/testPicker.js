define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._startYear=0;
      this._endYear=0;
      this._selectedDate="";
      this._selectedMonth="";
      this._selectedYear="";
      this.onScrollEnd();
      this._currentMonth="";
      this._currentDate="";
      this._currentYear="";
      this._isDefaultDateProvided=false;
      this._isDefaultMonthProvided=false;
      this._isDefaultYearProvided=false;
      this._rawDate="";
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

      defineSetter(this, "startYear", function(val) {
        if((typeof val=='number') && (val != "")){
          this._startYear=val;
        }
      });
      defineGetter(this, "startYear", function() {
        return this._startYear;
      });
      defineSetter(this, "endYear", function(val) {
        if(typeof val=='number'){
          this._endYear=val;
        }
      });
      defineGetter(this, "endYear", function() {
        return this._endYear;
      });
      defineSetter(this, "dateComponent", function(val) {
        if((typeof val=='string') && (val !== "")){
          this._rawDate=val;
          this._isDefaultDateProvided=true;
          this._isDefaultMonthProvided=true;
          this._isDefaultYearProvided=true;
        }
      });
      defineGetter(this, "dateComponent", function() {
        return this._currentYear;
      });

    },

    preshow:function(){
      this.processDateFromRawDateString(this._rawDate);
      this.setDefaultData();


    },
    setDefaultData:function(){
      debugger;
      var dateData = [
        {lblDatePicker:""},
        {lblDatePicker:"01"},
        {lblDatePicker:"02"},
        {lblDatePicker:"03"},
        {lblDatePicker:"04"},
        {lblDatePicker:"05"}, 
        {lblDatePicker:"06"}, 
        {lblDatePicker:"07"}, 
        {lblDatePicker:"08"}, 
        {lblDatePicker:"09"}, 
        {lblDatePicker:"10"}, 
        {lblDatePicker:"11"}, 
        {lblDatePicker:"12"}, 
        {lblDatePicker:"13"}, 
        {lblDatePicker:"14"}, 
        {lblDatePicker:"15"}, 
        {lblDatePicker:"16"}, 
        {lblDatePicker:"17"}, 
        {lblDatePicker:"18"}, 
        {lblDatePicker:"19"}, 
        {lblDatePicker:"20"}, 
        {lblDatePicker:"21"}, 
        {lblDatePicker:"22"}, 
        {lblDatePicker:"23"}, 
        {lblDatePicker:"24"}, 
        {lblDatePicker:"25"}, 
        {lblDatePicker:"26"}, 
        {lblDatePicker:"27"}, 
        {lblDatePicker:"28"}, 
        {lblDatePicker:"29"}, 
        {lblDatePicker:"30"}, 
        {lblDatePicker:"31"}, 
        {lblDatePicker:""}
      ];

      var monthData=[
        {lblDatePicker:""},
        {lblDatePicker:"January"},
        {lblDatePicker:"February"},
        {lblDatePicker:"March"},
        {lblDatePicker:"April"},
        {lblDatePicker:"May"},
        {lblDatePicker:"June"},
        {lblDatePicker:"July"},
        {lblDatePicker:"August"},
        {lblDatePicker:"September"},
        {lblDatePicker:"October"},
        {lblDatePicker:"November"},
        {lblDatePicker:"December"},
        {lblDatePicker:""}  
      ];

      this.view.segDays.setData(dateData);
      this.view.segMonths.setData(monthData);

      var yearInfo = [];
      yearInfo.push({lblDatePicker:" "});
      var diff = this._endYear-this._startYear;
      for(i=1;i<=diff;i++){
        yearInfo[i] = {
          lblDatePicker:(this._startYear+(i-1)).toFixed()
        }
      }
      yearInfo.push({lblDatePicker:" "});
      this.view.segYears.setData(yearInfo);
      // this.setDefaultSelection();
    },
    getNumberOfDaysForCurrentMonth:function(monthName,year){
      return new Date(year, monthName, 0).getDate();
    },

    setDates:function(numberOfDays){
      var dateInfo=[];
      dateInfo[0]={"lblDatePicker":" "};
      for(i=1;i<=numberOfDays;i++){
        if(i<10){
          dateInfo[i]={
            lblDatePicker:"0"+i.toFixed()
          }
        }
        else{
          dateInfo[i]={
            lblDatePicker:i.toFixed()
          }
        }

      }
      dateInfo.push({"lblDatePicker":" "})
      this.view.segDays.setData(dateInfo);
    },
    onScrollEnd:function(){
      this.view.segDays.onScrollEnd=function(){
        this.view.segDays.selectedRowIndex=[0,Number(this.view.segDays.getFirstVisibleRow().rowIndex+1)];
      }.bind(this);

      this.view.segMonths.onScrollEnd=function(){
        this.view.segMonths.selectedRowIndex=[0,Number(this.view.segMonths.getFirstVisibleRow().rowIndex+1)];
        var currentSelectedMonthIndex=this.view.segMonths.getFirstVisibleRow().rowIndex+1;
        var currentSelectedMonth=this.view.segMonths.data[currentSelectedMonthIndex].lblDatePicker;
        var monthIndex=this.mapMonths(currentSelectedMonth);
        var currentSelectedYearIndex=this.view.segYears.getFirstVisibleRow().rowIndex+1;
        var currentSelectedYear=this.view.segYears.data[currentSelectedYearIndex].lblDatePicker;
        var numberOfDays1=this.getNumberOfDaysForCurrentMonth(monthIndex, currentSelectedYear);
        this.setDates(numberOfDays1);
      }.bind(this);

      this.view.segYears.onScrollEnd=function(){
        this.view.segYears.selectedRowIndex=[0,Number(this.view.segYears.getFirstVisibleRow().rowIndex+1)];
        var currentSelectedMonthIndex=this.view.segMonths.getFirstVisibleRow().rowIndex+1;
        var currentSelectedMonth=this.view.segMonths.data[currentSelectedMonthIndex].lblDatePicker;
        var monthIndex=this.mapMonths(currentSelectedMonth);
        var currentSelectedYearIndex=this.view.segYears.getFirstVisibleRow().rowIndex+1;
        var currentSelectedYear=this.view.segYears.data[currentSelectedYearIndex].lblDatePicker;
        var numberOfDays1=this.getNumberOfDaysForCurrentMonth(monthIndex, currentSelectedYear);
        this.setDates(numberOfDays1);
      }.bind(this);


    },
    mapMonths:function(monthName){
      var monthsMapper = {};
      monthsMapper.January=1;
      monthsMapper.February=2;
      monthsMapper.March=3;
      monthsMapper.April=4;
      monthsMapper.May=5;
      monthsMapper.June=6;
      monthsMapper.July=7;
      monthsMapper.August=8;
      monthsMapper.September=9;
      monthsMapper.October=10;
      monthsMapper.November=11;
      monthsMapper.December=12;
      return monthsMapper[monthName];
    },
    onDateSelected:function(){
      var currentSelectedMonthIndex=this.view.segMonths.getFirstVisibleRow().rowIndex+1;
      var currentSelectedMonth=this.view.segMonths.data[currentSelectedMonthIndex].lblDatePicker;
      var monthInfo=this.mapMonths(currentSelectedMonth);
      var currentSelectedYearIndex=this.view.segYears.getFirstVisibleRow().rowIndex+1;
      var yearInfo=this.view.segYears.data[currentSelectedYearIndex].lblDatePicker;
      var dateIndex = this.view.segDays.getFirstVisibleRow().rowIndex+1;
      var dateInfo=this.view.segDays.data[dateIndex].lblDatePicker;
      var date = new Date(yearInfo+"/"+monthInfo+"/"+dateInfo);
      this.onDateSelected1(date);
      //return date;
    },
    setDefaultSelection:function(){
      var currentSelectedRowIndex=this.view.segDays.getFirstVisibleRow().rowIndex+1;
      var currentSelectedDay = Number(this.view.segDays.data[currentSelectedRowIndex].lblDatePicker);
      var currentSelectedMonthRowIndex=this.view.segMonths.getFirstVisibleRow().rowIndex+1;
      var currentSelectedMonth = Number(this.mapMonths(this.view.segMonths.data[currentSelectedMonthRowIndex].lblDatePicker));
      var currentSelectedYearRowIndex=this.view.segYears.getFirstVisibleRow().rowIndex+1;
      var currentSelectedYear=Number(this.view.segYears.data[currentSelectedYearRowIndex].lblDatePicker);
      var diff=0;
      var defaultSelectionIndex=0;
      if(this._isDefaultDateProvided){
        if(currentSelectedDay>Number(this._currentDate)){
          diff=currentSelectedDay-Number(this._currentDate);
          defaultSelectionIndex=(currentSelectedRowIndex-diff).toFixed();
          this.view.segDays.selectedRowIndex=[0,Number(defaultSelectionIndex-1)];
        }
        else{
          diff=Number(this._currentDate)-currentSelectedDay;
          defaultSelectionIndex=(currentSelectedRowIndex+diff).toFixed();
          this.view.segDays.selectedRowIndex=[0,Number(defaultSelectionIndex)-1];  
        }
      }
      else{
        var today=new Date();
        var currentDate=today.getDate();
        if(currentSelectedDay>currentDate){
          diff=(currentSelectedDay-Number(currentDate)).toFixed();
          defaultSelectionIndex=Number(currentSelectedRowIndex-diff);
          this.view.segDays.selectedRowIndex=[0,Number(defaultSelectionIndex)-1];
        }
        else{
          diff=(Number(currentDate)-currentSelectedDay).toFixed();
          defaultSelectionIndex=Number(Number(currentSelectedRowIndex)+Number(diff));
          this.view.segDays.selectedRowIndex=[0,Number(defaultSelectionIndex)-1];
        }
      }
      if(this._isDefaultMonthProvided){
        var selectedMonth=this.mapMonths(this._currentMonth);
        selectedMonth=(selectedMonth).toFixed();
        if(currentSelectedMonth>selectedMonth){
          defaultSelectionIndex=Number(currentSelectedMonthRowIndex-selectedMonth);
          this.view.segMonths.selectedRowIndex=[0,Number(defaultSelectionIndex)-1];
        }
        else{
          diff=Number(selectedMonth-currentSelectedMonthRowIndex);
          defaultSelectionIndex=diff.toFixed();
          this.view.segMonths.selectedRowIndex=[0,Number(defaultSelectionIndex)];

        }
      }else{
        var date= new Date();
        var currentMonth = date.getMonth()+1;
        if(currentSelectedMonth>currentMonth){
          defaultSelectionIndex=Number(currentSelectedMonthRowIndex-currentMonth);
          this.view.segMonths.selectedRowIndex=[0,Number(defaultSelectionIndex)-1];
        }
        else{
          diff=Number(currentMonth-currentSelectedMonthRowIndex);
          defaultSelectionIndex=diff.toFixed();
          this.view.segMonths.selectedRowIndex=[0,Number(defaultSelectionIndex)];

        }
      }
      if(this._isDefaultYearProvided){
        if(Number(currentSelectedYear) > Number(this._currentYear)){
          diff=Number(currentSelectedYear)-Number(this._currentYear);
          defaultSelectionIndex=Number(currentSelectedYearRowIndex-diff);
          this.view.segYears.selectedRowIndex=[0,Number(defaultSelectionIndex)-1];
        }
        else{
          diff=Number(this._currentYear)-Number(currentSelectedYear);
          defaultSelectionIndex=Number(currentSelectedYearRowIndex+diff);
          this.view.segYears.selectedRowIndex=[0,Number(defaultSelectionIndex)-1];
        }
      }
      else{
        var now=new Date();
        var currentYear=now.getFullYear();
        this._currentYear=0;
        if(Number(currentYear)>Number(currentSelectedYear)){
          diff=(Number(currentYear)-Number(currentSelectedYear)).toFixed();
          defaultSelectionIndex=Number(currentSelectedYearRowIndex+diff);
          this.view.segYears.selectedRowIndex=[0,Number(defaultSelectionIndex)-1];

        }
        else{
          diff=(Number(currentSelectedYear)-Number(currentYear)).toFixed();
          defaultSelectionIndex=(Number(currentSelectedYearRowIndex)-diff).toFixed();
          this.view.segYears.selectedRowIndex=[0,Number(defaultSelectionIndex)-1];
        }

      }
    },
    processDateFromRawDateString:function(rawDateString){
      if(rawDateString!=""){
        var currentDate=new Date(rawDateString);
        this._currentDate=currentDate.getDate();
        var currentMonthIndex=currentDate.getMonth();
        this._currentYear=currentDate.getFullYear();
        this._currentMonth=this.getMonthStringFromDateIndex(currentMonthIndex);
      }
      else{
        this._currentDate=0;
        this._currentMonth="";
        this._currentYear=0;
      }

    },
    getMonthStringFromDateIndex:function(monthIndex){
      var mapMonthsWithIndex={};
      mapMonthsWithIndex["0"]="January";
      mapMonthsWithIndex["1"]="February";
      mapMonthsWithIndex["2"]="March";
      mapMonthsWithIndex["3"]="April";
      mapMonthsWithIndex["4"]="May";
      mapMonthsWithIndex["5"]="June";
      mapMonthsWithIndex["6"]="July";
      mapMonthsWithIndex["7"]="August";
      mapMonthsWithIndex["8"]="September";
      mapMonthsWithIndex["9"]="October";
      mapMonthsWithIndex["10"]="November";
      mapMonthsWithIndex["11"]="December";

      return mapMonthsWithIndex[monthIndex];
    },
    setDate:function(dateString){
      if(dateString!==""){
        this._isDefaultDateProvided=true;
        this._isDefaultMonthProvided=true;
        this._isDefaultYearProvided=true;
        this.processDateFromRawDateString(dateString);
        this.setDefaultData();
        this.setDefaultSelection();
        //this.onScrollEnd();
      }
      else{
        alert("provide correct date format ;)")
        // this.onScrollEnd();
      }

    }

  };
});