    function getCurrentDateTimeInUTC()
	{
 	
        var mDate=new Date();
        var utcDate=mDate.getUTCDate();
        var utcMonth=1+mDate.getUTCMonth();
        var utcYear=mDate.getFullYear();
        var utcHour=mDate.getUTCHours();
        var utcMinute=mDate.getUTCMinutes();
        var utcSecond=mDate.getUTCSeconds();
        var dateString=utcYear+"-"+this.addZeroPrefix(utcMonth)+"-"+this.addZeroPrefix(utcDate)+"T"+this.addZeroPrefix(utcHour)+":"+this.addZeroPrefix(utcMinute)+":"+this.addZeroPrefix(utcSecond);
        return dateString;
      
 }
    function getTimeInUTCString(milliseconds){
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
    }
   function addZeroPrefix(number) {
      var result;
      if (number >= 0 && number < 10) {
        result = "0" + number;
      } else {
        result = number;
      }
      return result;
    }
      