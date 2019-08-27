define({ 
  preshow:function(){
    if(filterTable.length == 0){
      this.view.btnApplyFilter.skin = "skinDeActive";
      this.view.btnApplyFilter.focusSkin = "skinDeActive";
    }else{
      this.view.btnApplyFilter.skin = "skinActive";
      this.view.btnApplyFilter.focusSkin = "skinActive";
    }
    this.view.btnCalander.text = "Select Date Range";
    this.view.calanderfilter.isVisible = false;
  },
  
  showCalander:function(){
    this.view.calanderfilter.isVisible = true;
  },
  navForm:function(frmName){
    var navObj = new kony.mvc.Navigation(frmName);
    navObj.navigate();
  },
  dismissCalanderFilter:function(){
    this.view.calanderfilter.isVisible = false;
  },
  saveCalanderFilter:function(){
    //this.view.btnCalander.text = "";
    var weekNo = 0;
    for(var i = 1; i<7;i++){
      if(eval("this.view.calanderfilter.flexWeek"+i).skin == "skinWeekFocus"){
        weekNo = i.toFixed(0);
      }
    }
    var d = new Date();
    dateRange = "";
    if(weekNo >0){
      if(eval("this.view.calanderfilter.lblSAW"+weekNo).text == ""){
        var maxMonth = 31;
        var mon = d.getMonth();
        if(mon == 0 || mon == 2 || mon ==4 || mon == 6 || mon ==7 || mon == 9 || mon == 11){
          maxMonth = 31;
        }else if(mon == 3 || mon == 5 || mon == 8 || mon == 10){
          maxMonth = 30;
          
        }else{
          if(parseInt(d.getFullYear())%4 == 0){
            maxMonth = 29;
          }else{
            maxMonth = 28;
          }
        }
        dateRange = eval("this.view.calanderfilter.lblSUW"+weekNo).text+" "+this.view.calanderfilter.lblMonth.text.slice(0, 3)+" - "+maxMonth+" "+this.view.calanderfilter.lblMonth.text.slice(0, 3)+" "+d.getFullYear();
      }else{
        dateRange = eval("this.view.calanderfilter.lblSUW"+weekNo).text+" "+this.view.calanderfilter.lblMonth.text.slice(0, 3)+" - "+eval("this.view.calanderfilter.lblSAW"+weekNo).text+" "+this.view.calanderfilter.lblMonth.text.slice(0, 3)+" "+d.getFullYear();
      }
      
    }else{
      dateRange = d.getDate()+" "+ this.view.calanderfilter.lblMonth.text.slice(0, 3)+" "+d.getFullYear();
    }
    this.view.calanderfilter.isVisible = false;
    this.view.btnCalander.text =  dateRange;
    //this.view.btnCalander.text = "Select Date Range";
    this.view.calanderfilter.isVisible = false;
    this.view.btnApplyFilter.skin = "skinActive";
    this.view.btnApplyFilter.focusSkin = "skinActive";
    
  },
  
  applyFilters:function(){
    if(filterTable.length != 0 || this.view.btnApplyFilter.skin == "skinActive"){
      var navObj = new kony.mvc.Navigation("frmDashboard");
      navObj.navigate();
    }
  },
  
  

 //Type your controller code here 

 });