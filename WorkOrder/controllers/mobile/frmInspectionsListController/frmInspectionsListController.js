define({ 
  segTableList:[],
  onNavigate:function(param){
    WOFORMLIST = this.view;
    filterTable = [];
    this.segTableList = workorderTable;
    this.view.SegInspectionDetails.setData(this.segTableList);
    this.view.flexNumbers.isVisible = false;
    this.view.flexClose.isVisible = false;
    this.view.menuDFX.left = "-100%";
    this.view.flexSearchBox.isVisible = false;
    if(filterTable.length == 0){
      this.view.btnApplyFilter.skin = "skinDeActive";
      this.view.btnApplyFilter.focusSkin = "skinDeActive";
      this.view.btnCalander.text = "Select Date Range";
    }else{
      this.view.btnApplyFilter.skin = "skinActive";
      this.view.btnApplyFilter.focusSkin = "skinActive";
    }
    
    this.view.calanderfilter.isVisible = false;
    this.view.flexFilters.top = "100%";
  },
 
  openHam:function(){
    this.view.menuDFX.animate(
      kony.ui.createAnimation({
        "100": {"left": "0%","stepConfig": {"timingFunction": kony.anim.EASE},}}), {
        		"delay": 0,"iterationCount": 1,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.3}, {"animationEnd":""});  
  },
  closeHam:function(){
    this.view.menuDFX.animate(
      kony.ui.createAnimation({
        "100": {"left": "-100%","stepConfig": {"timingFunction": kony.anim.EASE},}}), {
        		"delay": 0,"iterationCount": 1,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.3}, {"animationEnd":""});  
  },
  searchWorkOrders:function(){
    this.view.flexSearchBox.isVisible = true;
  },
  closeSearchWorkOrders:function(){
    this.view.flexSearchBox.isVisible = false;
  },
  searchOrders:function(){
    var searchtext = this.view.tbxSearch.text;
    searchtext = searchtext.toLowerCase();
    var assetId = "";
    var tempTab = [];
    for(var i in this.segTableList){
      assetId  = this.segTableList[i].lblWorkOrderName.text;
      assetId = assetId.toLowerCase();
      if(assetId.search(searchtext) >= 0){
        tempTab.push(this.segTableList[i]);
      }
    }
    this.view.SegInspectionDetails.setData(tempTab);
  },
  showFilters:function(){
    this.view.flexFilters.animate(
      kony.ui.createAnimation({
        "100": {"top": "0%","stepConfig": {"timingFunction": kony.anim.EASE},}}), {
        		"delay": 0,"iterationCount": 1,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.3}, {"animationEnd":""});  
  },
  hideFilters:function(){
    this.view.flexFilters.animate(
      kony.ui.createAnimation({
        "100": {"top": "100%","stepConfig": {"timingFunction": kony.anim.EASE},}}), {
        		"delay": 0,"iterationCount": 1,"fillMode": kony.anim.FILL_MODE_FORWARDS,"duration": 0.3}, {"animationEnd":""});  
  },
  
  showCalander:function(){
    this.view.calanderfilter.isVisible = true;
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
    var tempTable = [];
    this.segTableList = [];
    if(filterTable.length != 0 || this.view.btnApplyFilter.skin == "skinActive"){
      for(var i in workorderTable){
        if(filterTable.indexOf(workorderTable[i].lblAssign.text) >= 0 || filterTable.indexOf(workorderTable[i].lblMaintain.text)>= 0){
          this.segTableList.push(workorderTable[i]);
          //alert("Is exist")
        }else{
         // alert("Not exist")
        }
      }
      if(filterTable.length == 0){
        this.segTableList = workorderTable;
        this.view.flexClose.isVisible = false;
        this.view.flexNumbers.isVisible = false;
      }else{
        this.view.flexNumbers.isVisible = true;
        this.view.lblResultNumber.text = this.segTableList.length.toFixed(0)+" Results";
        this.view.flexClose.isVisible = true;
        
      }
      this.hideFilters();
      
    }else{
      
      //alert("Hi")
    }
    this.view.SegInspectionDetails.setData(this.segTableList);
  },
  resetFilters:function(){
    filterTable = [];
    this.view.btnCalander.text = "Select Date Range";
    this.view.btnApplyFilter.skin = "skinDeActive";
    this.view.btnApplyFilter.focusSkin = "skinDeActive";
    var woData = ["Inspection","Repair","Maintenance","Replacement"];
    var statusData = ["Assigned","Pending","Cancelled","Completed"];
    this.view.filterWorkorderType.resetData(woData);
    this.view.filterStatus.resetData(statusData);
  },
  
  navToDetails:function(){
    var ind = this.view.SegInspectionDetails.selectedRowItems[0].lblWorkOrderName.text;
    WO_SELIND = -1;
    for(var i in workorderTable){
      if(workorderTable[i].lblWorkOrderName.text == ind){
        WO_SELIND = i;
      }
    }
    var navForm = new kony.mvc.Navigation("frmMaintananceSummary");
    navForm.navigate();
  }
  
  
});