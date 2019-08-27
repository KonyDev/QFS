define({ 

  onClickSecHdr:function(params){
   //alert("hey sudheer***"+params.sectionIndex);
    var selIndexVal = params.sectionIndex;
    this.executeOnParent("showVerifyIsolation",selIndexVal);
  }
 });