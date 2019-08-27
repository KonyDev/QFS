define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._startYear=0;
      this._endYear=0;
      this.onScrollEnd();
      this._globalDaysIndexStore={};
      this._globalYearIndexStore={};
      this._selectedDateIndex=0;
      this._selectedDate="";
      this._selectedMonth="";
      this._selectedYear="";
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
    setDefaultData:function(){
      //debugger;
      this.setDefaultDate();
      this.setDefaultMonthData();
      this.setDefaultYearData();
    },
    setDefaultDate:function(numberOfDays){
      //debugger;
      var dateArr = [];
      if(numberOfDays){
        dateArr.push({lblDatePicker:" "});
        for(i=1;i<=numberOfDays;i++){
          if(i<10){
            dateArr.push({lblDatePicker:"0"+i.toFixed()});
          }
          else{
            dateArr.push({lblDatePicker:i.toFixed()});
          }

        } 
        dateArr.push({lblDatePicker:" "});
        this.view.segDays.setData(dateArr);
        this.mapDays(numberOfDays);
      }
      else{
        dateArr.push({lblDatePicker:" "});
        for(i=1;i<=31;i++){
          if(i<10){
            dateArr.push({lblDatePicker:"0"+i.toFixed()});
          }
          else{
            dateArr.push({lblDatePicker:i.toFixed()});
          }       
        } 
        dateArr.push({lblDatePicker:" "});
        this.view.segDays.setData(dateArr);
        this.mapDays(31);
      }

    },
    setDefaultMonthData:function(){
      //debugger;
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
      this.view.segMonths.setData(monthData)
    },
    setDefaultYearData:function(){
      //debugger;
      var yearInfo = [];
      yearInfo.push({lblDatePicker:" "});
      var diff = this._endYear-this._startYear;
      for(i=1;i<=diff;i++){
        yearInfo[i] = {
          lblDatePicker:(this._startYear+(i-1)).toFixed()
        };
      }
      yearInfo.push({lblDatePicker:" "});
      this.view.segYears.setData(yearInfo);
    },
    getNumberOfDaysForCurrentMonth:function(monthName,year){
      //debugger;
      return new Date(Number(year)+1, monthName+1, 0).getDate();
    },
    mapMonths:function(monthName){
      //debugger;
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
    mapDays:function(numberOfDays){
      //debugger;
      var daysWrapper={};
      for(i=1;i<=numberOfDays;i++){
        daysWrapper[i]=i;
      }
      this._globalDaysIndexStore = daysWrapper;
    },
    mapYears:function(year){
      //debugger;
      var yearsWrapper={};
      var diff=this._endYear-this._startYear;
      for(i=0;i<diff;i++){
        yearsWrapper[i+1]=this._startYear+i;
      }
      this._globalYearIndexStore=yearsWrapper;
      var yearIndex = this.getSelectedYearIndex(year);
      return yearIndex;
    },
    getSelectedYearIndex:function(year){
      //debugger;
      for(i=1;i<=Object.keys(this._globalYearIndexStore).length;i++){
        if(this._globalYearIndexStore[i]===year){
          return i;
        }
      }
    },
    getSelectedDateIndex:function(day){
      return this._globalDaysIndexStore[day];
    },
    onScrollEnd:function(){
      this.view.segDays.onScrollEnd=function(){
        this._selectedDateIndex = Number(this.view.segDays.getFirstVisibleRow().rowIndex);
        this.view.segDays.selectedRowIndex=[0,this._selectedDateIndex];
      }.bind(this);

      this.view.segMonths.onScrollEnd=function(){
        //debugger;
        var currentSelectedMonthIndex=this.view.segMonths.getFirstVisibleRow().rowIndex;
        var currentSelectedMonth=this.view.segMonths.data[currentSelectedMonthIndex].lblDatePicker;
        var monthIndex=this.mapMonths(currentSelectedMonth);
        var currentSelectedYearIndex=this.view.segYears.getFirstVisibleRow().rowIndex;
        var currentSelectedYear=this.view.segYears.data[currentSelectedYearIndex].lblDatePicker;
        var numberOfDays=this.getNumberOfDaysForCurrentMonth(monthIndex, currentSelectedYear);
        this.setDefaultDate(numberOfDays);
        this.mapDays(numberOfDays);
        this.view.segMonths.selectedRowIndex=[0,currentSelectedMonthIndex];
        this.view.segDays.selectedRowIndex=[0,this._selectedDateIndex];
      }.bind(this);

      this.view.segYears.onScrollEnd=function(){
        //debugger;
        var currentSelectedMonthIndex=this.view.segMonths.getFirstVisibleRow().rowIndex;
        var currentSelectedMonth=this.view.segMonths.data[currentSelectedMonthIndex].lblDatePicker;
        var monthIndex=this.mapMonths(currentSelectedMonth);
        var currentSelectedYearIndex=this.view.segYears.getFirstVisibleRow().rowIndex;
        var currentSelectedYear=this.view.segYears.data[currentSelectedYearIndex].lblDatePicker;
        var numberOfDays=this.getNumberOfDaysForCurrentMonth(monthIndex, currentSelectedYear);
        this.setDefaultDate(numberOfDays);
        this.mapDays(numberOfDays);
        this.view.segYears.selectedRowIndex=[0,currentSelectedYearIndex];
        this.view.segDays.selectedRowIndex=[0,this._selectedDateIndex];
      }.bind(this);
    },
    setDate:function(dateString){
      //debugger;
      if(dateString !== ""){
        var now = new Date(dateString);
        var currentDay = now.getDate();
        var currentMonth = now.getMonth();
        var currentYear = now.getFullYear();
        var dayIndex = this.getSelectedDateIndex(currentDay);
        dayIndex-=1;
        this._selectedDateIndex=dayIndex;
        var monthIndex = this.mapMonths(this.getMonthStringFromDateIndex(currentMonth));
        monthIndex-=1;
        var yearIndex = this.mapYears(currentYear);
        yearIndex-=1;
        this.view.segDays.selectedRowIndex=[0,dayIndex];
        this.view.segMonths.selectedRowIndex=[0,monthIndex];
        this.view.segYears.selectedRowIndex=[0,yearIndex];
      }
      else{
        this.setCurrentDate();
      }
    },
    setCurrentDate:function(){
      //debugger;
      var now = new Date();
      var selectedDay = now.getDate();
      var selectedMonth=now.getMonth();
      var selectedYear=now.getFullYear();
      var dayIndex = this.getSelectedDateIndex(Number(selectedDay));
      dayIndex-=1;
      var monthIndex = this.mapMonths(this.getMonthStringFromDateIndex(selectedMonth));
      monthIndex-=1;
      var yearIndex = this.mapYears(selectedYear);
      yearIndex-=1;
      this.view.segDays.selectedRowIndex=[0,dayIndex];
      this.view.segMonths.selectedRowIndex=[0,(monthIndex)];
      this.view.segYears.selectedRowIndex=[0,(yearIndex)];
    },
    getMonthStringFromDateIndex:function(monthIndex){
      //debugger;
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
    onDateSelected:function(){
      //debugger;
      var currentSelectedMonthIndex=this.view.segMonths.getFirstVisibleRow().rowIndex+1;
      var currentSelectedMonth=this.view.segMonths.data[currentSelectedMonthIndex].lblDatePicker;
      var monthInfo=this.mapMonths(currentSelectedMonth);
      var currentSelectedYearIndex=this.view.segYears.getFirstVisibleRow().rowIndex+1;
      var yearInfo=this.view.segYears.data[currentSelectedYearIndex].lblDatePicker;
      var dateIndex = this.view.segDays.getFirstVisibleRow().rowIndex+1;
      var dateInfo=this.view.segDays.data[dateIndex].lblDatePicker;
      var date = new Date(yearInfo+"/"+monthInfo+"/"+dateInfo);
      var jsonObjectToSend = {};
      jsonObjectToSend.date = date.getDate();
      jsonObjectToSend.year = date.getFullYear();
      jsonObjectToSend.month = date.getMonth();
      jsonObjectToSend.dateObj=date;
      //jsonObjectToSend.dateString = date.toLocaleDateString();
      jsonObjectToSend.dateString = ""+(1+date.getMonth())+"/"+date.getDate()+"/"+date.getFullYear();//   date.toLocaleDateString();
      this.onDateSelected1(jsonObjectToSend);
    }

  };
});