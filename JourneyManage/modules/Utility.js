//Type your code here
var JourneyUtil=(function(){
  return{
    parseRecords:function(records,key){
      var mappedData=null;
      if(Array.isArray(records) && typeof key ==='string'){
        var recordLength=records.length;
        var recordKey;
        mappedData={};
        for(var i=0;i<recordLength;i++){
          recordKey=records[i][key];
          if(typeof recordKey === 'string' || typeof recordKey === 'number'){
            if(mappedData[recordKey]===null || mappedData[recordKey]===undefined){
              mappedData[recordKey]=[records[i]];
            }else{
              mappedData[recordKey].push(records[i]);
            }
          }
        }
      }
      return mappedData;
    },
    processText:function(txt){
      try{
        if(typeof txt=='string'){
          txt=txt.trim();
          return txt;
        }else{
          return null;
        }
      }catch(excp){
        debugger;
        throw excp;
      }
    },
    isNetworkAvailable:function(){
      return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
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
    ordinal_suffix_of:function (i) {
      var j = i % 10,
          k = i % 100;
      if (j == 1 && k != 11) {
        return i + "st";
      }
      if (j == 2 && k != 12) {
        return i + "nd";
      }
      if (j == 3 && k != 13) {
        return i + "rd";
      }
      return i + "th";
    },
    /**
   * @function
   *
   * @param dateString 
   * @param timestring 
   */
    getUTCdatetime:function(dateString,timestring){
      debugger;
      var local_date=new Date();
      var dateinSQLFormat=null;
      try{
        if(typeof dateString=="string"){
          dateString=dateString.split("/");
        }
        local_date.setDate(dateString[1]);
        local_date.setMonth(parseInt(dateString[0])-1);
        local_date.setFullYear(dateString[2]);
        if(timestring.includes('/')){
          timestring=timestring.split('/');
          if(timestring[2]=="PM" && Number(timestring[0])!=12){
            timestring[0]=parseInt(timestring[0])+12;
          }else if(timestring[2]=="AM"){
            if(Number(timestring[0])==12){
              timestring[0]=0;
            }
          }
        }else if(timestring.includes(':')){
          timestring=timestring.split(':');
        }
        local_date.setHours(timestring[0]);
        local_date.setMinutes(timestring[1]);
        local_date.setSeconds(0);
        local_date.setMilliseconds(0);
        var currentDate = new Date();
        var userTimezoneOffset = currentDate.getTimezoneOffset() * 60000;
        var utc_date = new Date(local_date.getTime() + userTimezoneOffset);
        var currDay = this.addZeroPrefix(utc_date.getDate());
        var currMonth = this.addZeroPrefix(utc_date.getMonth() + 1);
        var currYear = this.addZeroPrefix(utc_date.getFullYear());
        var hr = this.addZeroPrefix(utc_date.getHours());
        var min = this.addZeroPrefix(utc_date.getMinutes());
        var sec = this.addZeroPrefix(utc_date.getSeconds());
        dateinSQLFormat = currYear + "-" + currMonth + "-" + currDay + "T" + hr + ":" + min + ":" + sec;
      }catch(excp){
        debugger;
      }

      return dateinSQLFormat;
    },
    getReadableTimeString:function (dateObj){
      var timeString="";
      if(dateObj!==null && dateObj!==undefined){
        try{
          //var dateObj=new Date(param);
          var hrs = dateObj.getHours();
          hrs=this.addZeroPrefix(hrs);//+"";
          var min = dateObj.getMinutes();
          min=this.addZeroPrefix(min);
          timeString=hrs+":"+min+" Hrs";
        }catch(excp){
          debugger;
          kony.print(excp.toString());
          throw excp;

        }
      }
      return timeString;
    },
    /**
     * @function
     *
     * @param date 
     */
    getTimeStringIn12HrsFromat:function (date) {
      try{
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        hours = hours < 10 ? '0' + hours:hours;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
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
    getReadableFullDateString:function (dateObj){
      var dateString="";
      if(dateObj!==null && dateObj!==undefined){
        try{
          //var dateObj=new Date(param);
          var mDate=dateObj.getDate();
          mDate= mDate < 10 ? '0'+ mDate: mDate;
          var mMonth=dateObj.toLocaleString("en-us", { month: "short" });
          new Date().getFullYear();
          var year=dateObj.getFullYear();
          dateString=mDate+" "+mMonth+", "+year;
        }catch(excp){
          debugger;
          kony.print(excp.toString());
          throw excp;
        }
      }
      return dateString;
    },
    /**
     * @function
     *
     */
    getCurrentDateTimeInUTC:function(){
      try{
        var mDate=new Date();
        var utcDate=mDate.getUTCDate();
        var utcMonth=1+mDate.getUTCMonth();
        var utcYear=mDate.getFullYear();
        var utcHour=mDate.getUTCHours();
        var utcMinute=mDate.getUTCMinutes();
        var utcSecond=mDate.getUTCSeconds();
        var dateString=utcYear+"-"+this.addZeroPrefix(utcMonth)+"-"+this.addZeroPrefix(utcDate)+"T"+
            this.addZeroPrefix(utcHour)+":"+this.addZeroPrefix(utcMinute)+":"+this.addZeroPrefix(utcSecond);
        return dateString;
      }catch(excp){
        debugger;
      }
    },
    /**
     * @function
     *
     * @param milliseconds 
     */
    getTimeInUTCString:function(milliseconds){
      try{
        var mDate=new Date();
        if(typeof milliseconds=='number'){
          mDate.setTime(milliseconds);
        }
        var utcDate=mDate.getUTCDate();
        var utcMonth=1+mDate.getUTCMonth();
        var utcYear=mDate.getFullYear();
        var utcHour=mDate.getUTCHours();
        var utcMinute=mDate.getUTCMinutes();
        var utcSecond=mDate.getUTCSeconds();
        var dateString=utcYear+"-"+this.addZeroPrefix(utcMonth)+"-"+this.addZeroPrefix(utcDate)+"T"+
            this.addZeroPrefix(utcHour)+":"+this.addZeroPrefix(utcMinute)+":"+this.addZeroPrefix(utcSecond);
        return dateString;
      }catch(excp){
        debugger;
      }
    },
    /**
     * @function
     *
     * @param sqlDateString 
     */
    getSqlDatetoJSDate:function(sqlDateString){
      //Converts UTC date to local date also.
      var jsDateObj=null;
      if(typeof sqlDateString=='string'){
        try{
          //var utcDateObj=new Date(sqlDateString);
          //return utcDateObj;
          var dateTimeString=sqlDateString.split("T");
          if(Array.isArray(dateTimeString) && dateTimeString.length>1){
            var dateString=dateTimeString[0];
            var timeString=dateTimeString[1];
            dateString=dateString.split("-");
            timeString=timeString.split(":");
            timeString[2]=timeString[2].replace('Z', '');
            var dateObj=new Date(Date.UTC(dateString[0], Number(dateString[1])-1, dateString[2], 
                                          Number(timeString[0]), Number(timeString[1]),Number(timeString[2])));
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
      return jsDateObj;
    },
    getDistanceInMiles: function(sourceLocation,destinationLocation) {
      var distance=null;
      if(typeof sourceLocation=='object' && sourceLocation!==null && 
         typeof destinationLocation=='object' && destinationLocation!==null){
        var lat1=Number(sourceLocation["lat"]);
        var lon1=Number(sourceLocation["lon"]);
        var lat2=Number(destinationLocation["lat"]);
        var lon2=Number(destinationLocation["lon"]);
        var Radius = 6371; 
        var radConst = (Math.PI/180);
        try{
          var dLat = (lat2-lat1)*radConst; 
          var dLon = (lon2-lon1)*radConst; 
          var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos((lat1*radConst)) * Math.cos(lat2*radConst) * 
              Math.sin(dLon/2) * Math.sin(dLon/2); 
          var centralAngle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          distance = Radius * centralAngle * 0.6237; 
        }catch(excp){
          debugger;
          distance=null;
        }
      }
      return distance;
    },
    getTwoDatesTimeDifference:function(arrivalDateString, departureDateString)
    {
      debugger;
      var ArrivalLocalDateObject = new Date((new Date(arrivalDateString)).toLocaleString());
      var DepartureLocalDateObject = new Date((new Date(departureDateString)).toLocaleString());
      //var TimeInHourDifference = Math.floor((ArrivalLocalDateObject.getTime() - DepartureLocalDateObject.getTime())/3600000);
      var modulo = (ArrivalLocalDateObject.getTime() - DepartureLocalDateObject.getTime())/(1000*60*60);
      //var modulo=diff/(1000*60*60);
      var hrs=Math.floor(modulo);
      var minutes=(modulo-hrs)*60;
      minutes=Math.round(minutes);
      hrs=JourneyUtil.addZeroPrefix(hrs);
      minutes=JourneyUtil.addZeroPrefix(minutes);
      //TimeInHourDifference=(Math.round(TimeInHourDifference*100))/100;
      return hrs+"."+minutes;
    },
    checkOnlineAndLoggedIn:function()
    {
      debugger;
      var proceedWithOperationFlag = false;
      kony.print("***** Entered checkOnlineAndLoggedIn");
      try
      {
        if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
        {
          var IsAlreadyLoggedIn = kony.store.getItem("IsAlreadyLoggedIn");
          if(IsAlreadyLoggedIn!==null || IsAlreadyLoggedIn!==undefined ||IsAlreadyLoggedIn!==false)
          {
            proceedWithOperationFlag=true;
          }
          else
          {
            toast("Please Login to proceed with the action.");
            var launchModeParams={"launchmode":1,"launchparams":{}};
            var navObj;
            navObj=new kony.mvc.Navigation("LoginADFS");
            navObj.navigate(launchModeParams);
          }
        }
        else
        {
          toast("Network Not Available.");
        }
        kony.print("***** In checkOnlineAndLoggedIn, proceedWithOperationFlag:"+proceedWithOperationFlag);
        kony.print("***** Exiting checkOnlineAndLoggedIn");
      }
      catch(err)
      {
        kony.print("***** In checkOnlineAndLoggedIn, exception is:"+JSON.stringify(err));
      }
      return proceedWithOperationFlag;
    }
  };
})();
