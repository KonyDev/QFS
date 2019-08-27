define({ 

 removeAddedPassenger : function(eventObj){
   var index = eventObj.rowContext.rowIndex;
   this.executeOnParent("deleteSelectedRow",index);
 }

 });