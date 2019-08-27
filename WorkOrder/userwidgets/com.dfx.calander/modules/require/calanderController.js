define(function() {

	return {
      preshow:function(){
        var d1 = new Date();
        this.view.lblMonth.text = this.getMonthInString(d1.getMonth())+" "+d1.getFullYear();
        var toDaysDate = d1.getDate();
        d1.setDate(1);
        var d1InString = d1.getDay();
        var tot = this.getMaxDays(d1.getMonth());
        var dateStart = 1;
        for(var i=1;i<7;i++){
          eval("this.view.flexWeek"+i).skin = "skinWeekNormal";
          for(var j = 0;j<7;j++){
            var day = this.getDayInString(j);
            if(i == 1){
              if(d1.getDay() > j){
                eval("this.view.lbl"+this.getDayInString(j)+"W"+i).text = "";
                eval("this.view.lbl"+this.getDayInString(j)+"W"+i).skin = "skinDateNormal";
              }else{
                eval("this.view.lbl"+this.getDayInString(j)+"W"+i).text = dateStart.toFixed(0);
                if(dateStart == toDaysDate){
                  eval("this.view.lbl"+this.getDayInString(j)+"W"+i).skin = "skinTodaysDate";
                }else{
                  eval("this.view.lbl"+this.getDayInString(j)+"W"+i).skin = "skinDateNormal";
                }
                
                dateStart =dateStart+1;
              }
            }else{
               
              if(tot >= dateStart){
                eval("this.view.lbl"+this.getDayInString(j)+"W"+i).text = dateStart.toFixed(0);
                if(dateStart == toDaysDate){
                  eval("this.view.lbl"+this.getDayInString(j)+"W"+i).skin = "skinTodaysDate";
                }else{
                  eval("this.view.lbl"+this.getDayInString(j)+"W"+i).skin = "skinDateNormal";
                }
                dateStart =dateStart+1;
              }else{
                eval("this.view.lbl"+this.getDayInString(j)+"W"+i).text = "";
                if(dateStart == toDaysDate){
                  eval("this.view.lbl"+this.getDayInString(j)+"W"+i).skin = "skinTodaysDate";
                }else{
                  eval("this.view.lbl"+this.getDayInString(j)+"W"+i).skin = "skinDateNormal";
                }
                dateStart =dateStart+1;
              }
            }
          }
        }
        
        //alert(d1InString)
      },
      
      
      selectWeek:function(){
        var d = new Date();
        var weekNo = 0;
        //alert(d.getDate())
        for(var i = 1; i<7;i++){
          for(var j = 0;j<7;j++){
            if(eval("this.view.lbl"+this.getDayInString(j)+"W"+i).text == parseInt(d.getDate()).toFixed(0)){
              weekNo = i;
            }
          }
        }
        eval("this.view.flexWeek"+weekNo).skin = "skinWeekFocus";
        eval("this.view.lblSUW"+weekNo).skin = "skinWeekEndStart";
        eval("this.view.lblSAW"+weekNo).skin = "skinWeekEndStart";
        this.view.btnThisWeek.skin = "skinCalBtnF";
        this.view.btnThisWeek.skin = "skinCalBtnF";
      },
      
      getMaxDays:function(mon){
        var maxDays = 31;
        if(mon == 0 || mon == 2 || mon == 4 || mon == 6 || mon ==7 || mon ==9 || mon == 11){
          maxDays = 31;
        }else if(mon == 3 || mon == 5 || mon == 8 || mon == 10){
          maxDays = 30;
        }else{
          var d = new Date();
          var getYearFull = d.getFullYear();
          if(parseInt(getYearFull) % 4 == 0){
            maxDays = 29;
          }else{
            maxDays = 28;
          }
        }
        return maxDays;
      },
        
      
      getDayInString:function(day){
        var dayInString = "";
        switch(day){
          case 0:
            dayInString = "SU";
            break;
          case 1:
            dayInString = "M";
            break;
          case 2:
            dayInString = "TU";
            break;
          case 3:
            dayInString = "W";
            break;
          case 4:
            dayInString = "TH";
            break;
          case 5:
            dayInString = "F";
            break;
          case 6:
            dayInString = "SA";
            break;
        }
        return dayInString;
      },
      getMonthInString:function(mon){
        var moninString = "";
        switch(mon){
          case 0:
            moninString = "January";
            break;
          case 1:
            moninString = "February";
            break;
          case 2:
            moninString = "March";
            break;
          case 3:
            moninString = "April";
            break;
          case 4:
            moninString = "May";
            break;
          case 5:
            moninString = "June";
            break;
          case 6:
            moninString = "July";
            break;
          case 7:
            moninString = "August";
            break;
          case 8:
            moninString = "September";
            break;
          case 9:
            moninString = "October";
            break;
          case 10:
            moninString = "November";
            break;
          case 11:
            moninString = "December";
            break;
        }
        return moninString;
      }

	};
});