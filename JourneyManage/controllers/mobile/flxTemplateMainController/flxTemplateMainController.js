define({ 

  //Type your controller code here 
  onCloseClick:function(eventobject,context){
    debugger;
    var param={};
    if(typeof context=='object' && context!==null){
      if(typeof context["rowIndex"]=='string' || typeof context["rowIndex"]=='number' ){
        param["rowIndex"]=context["rowIndex"];
      }
      if(typeof context["sectionIndex"]=='string' || typeof context["sectionIndex"]=='number' ){
        param["sectionIndex"]=context["sectionIndex"];
      }
      if(typeof context["widgetInfo"]=='object' && context["widgetInfo"]!==null){
        if(Array.isArray(context["widgetInfo"]["selectedRowItems"]) && (context["widgetInfo"]["selectedRowItems"]).length>0){
          param["selectedRowItems"]=context["widgetInfo"]["selectedRowItems"];
        }
      }
      this.executeOnParent("removePassenger",param);
    }
  }

});