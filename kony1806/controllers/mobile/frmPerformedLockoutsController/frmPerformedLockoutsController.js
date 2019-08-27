define({ 
  dataForm : [],
  onNavigate:function(param){
    this.dataForm = param;
  },
  navBack:function(){
    var navObj = new kony.mvc.Navigation("frmProjectDetail");
    navObj.navigate(this.dataForm);
  }

 //Type your controller code here 

 });