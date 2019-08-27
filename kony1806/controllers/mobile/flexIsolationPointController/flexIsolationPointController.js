define({ 
  onSecClick:function(param){
    var secInd =param.sectionIndex ;
    //alert(secInd)
    this.executeOnParent("showIsolationProcedure",secInd);
//     var formId = kony.application.getCurrentForm();
//     formId.flexIsolationProcedure.isVisible = true;
//     formId.showIsolationProcedure();
    //alert("Hi"+formId._konyControllerName);
  }

 //Type your controller code here 

 });