define({ 

  //Type your controller code here 
  onNavigate:function(context,isBackNavigation)
  {
    try
    {
      var ReceivedUrl = context.url;
      kony.application.openURL(ReceivedUrl);
    }
    catch(err)
    {
      alert(err.message);
    }
  },

});