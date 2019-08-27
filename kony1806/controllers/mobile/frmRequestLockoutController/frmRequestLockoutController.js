define({
  dataForm:[],
  onNavigate:function(param){
    this.dataForm = param;
  },
  
  preshow:function(){
    var yearComp = [
      ["y1","2019"],
      ["y2","2020"],
      ["y3","2021"],33
    ];
    var monthComp = [
      ["m1","January"],
      ["m2","February"],
      ["m3","March"],
      ["m4","April"],
      ["m5","May"],
      ["m6","June"],
      ["m7","July"],
      ["m8","August"],
      ["m9","September"],
      ["m10","October"],
      ["m11","November"],
      ["m12","December"],33
    ];
    var dataDataCOmp = [];
    for(var i = 1; i<32;i++){
      dataDataCOmp.push(
        [("d"+i),i.toFixed(0)]
      );
    }
    dataDataCOmp.push(34);
    this.view.pickerDueDate.masterData = [monthComp,dataDataCOmp,yearComp];
//     this.view.pickerDueDate.masterData = [
//       monthComp,tempdayData,yearComp
//     ]
    
  },
  selKeyEarlier : ["m1","d1","y1"],
  
  selectDate:function(){
    var selKeys = this.view.pickerDueDate.selectedKeys;
    alert(selKeys)
  },
  pickerSelection:function(){
    var selKeys = this.view.pickerDueDate.selectedKeys;
    var yr = this.view.pickerDueDate.selectedKeyValues[2][1];
    var mon = selKeys[0].slice(1);
    if(selKeys[0] == this.selKeyEarlier[0] && selKeys[2] == this.selKeyEarlier[2]){
      
    }else{
      var dataDataCOmp = [];
      var dayMon = 28;
      if(mon == 1 || mon == 3 || mon ==5 || mon ==7 || mon ==8 || mon == 10 || mon == 12){
        dayMon = 31;
      }else if(mon == 2){
        if(parseInt(yr) %4 == 0){
          dayMon = 29;
        }else{
          dayMon = 28;
        }
      }else{
        dayMon = 30; 
      }
      
      
      for(var i = 1; i<= dayMon;i++){
        dataDataCOmp.push(
          [("d"+i),i.toFixed(0)]
        );
      }
    
      
      
      
      
      this.view.pickerDueDate.setComponentData(1, dataDataCOmp);
      this.view.pickerDueDate.selectedKeys = [selKeys[0],selKeys[1],selKeys[2]];
      this.selKeyEarlier = selKeys;
    }
  },
  
  dayData:function(mon,yr){
    var dayData = [];
    var d1 = new Date();
    var febMOn = 28;
    if(parseInt(yr) % 4 == 0){
      febMOn = 29;
    }else{
      febMOn = 28;
    }
    
    if(mon == 1 || mon == 3 || mon ==5 || mon ==7 || mon ==8 || mon == 10 || mon == 12){
      for(var i = 1; i<32;i++){
        dayData.push({i:i.toFixed(0)});
      }
    }else if(mon == 2){
      for(var i = 1; i<=febMOn;i++){
        dayData.push({i:i.toFixed(0)});
      }
    }else{
      for(var i = 1; i<31;i++){
        dayData.push(["d"+i,i.toFixed(0)]);
      }
    }
    return dayData;
  },
  
  onsegRowClickMOnth:function(){
    alert(this.view.segMonth.selectedRowIndex);
  },
  navBack:function(){
    var prevForm = kony.application.getPreviousForm().id;
    var navObj = new kony.mvc.Navigation(prevForm);
    navObj.navigate(this.dataForm);
  },
  navToSummary:function(){
    var param = {"key":"Operational"};
    var navObj = new kony.mvc.Navigation("frmProcedureCompleteSummary");
    navObj.navigate(param);
  }

 //Type your controller code here 

 });