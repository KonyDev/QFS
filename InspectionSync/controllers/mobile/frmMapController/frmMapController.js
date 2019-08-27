define({ 

 //Type your controller code here 
  onNavigate:function(locationObj){
    debugger;
    if(typeof locationObj=='object' && locationObj!=null){
      this.origin =locationObj["origin"];
      this.destination=locationObj["destination"];
      this.drawCircle(this.destination);
      this.resetForm();
    }
  },

 });