define({ 

 //Type your controller code here 
  onActionButtonClick:function(eventobject, context){
    debugger;
    if(typeof context=='object' && context!=null){
      if(context["widgetInfo"]=='object' && context["widgetInfo"]!=null){
        if(context["widgetInfo"]["selectedRowItems"]=='object' && context["widgetInfo"]["selectedRowItems"]!=null){
          try{
            this.executeOnParent("",context["widgetInfo"]["selectedRowItems"]);
          }catch(excp){
            kony.print("Exception occured in template action button click: "+JSON.stringify(excp));
          }
        }
      }
    }
  }

 });