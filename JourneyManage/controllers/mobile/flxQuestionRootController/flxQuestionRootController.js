define({ 

 //Type your controller code here 
  /**
   * @function
   *
   * @param param1 
   * @param param2 
   */
  onFlexCheckboxClick:function(eventobject, context){
    debugger;
    try{
      var selectedRowIndex=context["rowIndex"];
      var selectedItem=context["widgetInfo"]["selectedItems"][0];
      this.executeOnParent("onAnsweringYesNoQuestion",selectedItem, selectedRowIndex);
    }catch(excp){
      debugger;
    }
  }

 });