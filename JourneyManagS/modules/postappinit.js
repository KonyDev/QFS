function sCall()
{

}
function fCall()
{
  
}
function pCall()
{
  
}

function setupSyncForPostAppInit(){
    KNYMobileFabric.OfflineObjects.setup(sCallback,fCallback);
     function sCallback(){
        kony.print("journey setup success");
       
       
       
try
  {
    
    if( kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY))
{
  //Start Syncing 
  var inspObj=new kony.sdk.KNYObj("journey_tbl");
  inspObj.startSync({},sCall,fCall,pCall);
  
//   alert("Inside If of PostAppInit");
  
  
}
else
 {
//    alert("Inside Else of PostAppInit");
 } 
  }
catch(err)
  {
    alert("Error Message In PostAppInit: "+err.message);
      
  }
      }
      function fCallback(){
        alert("setup failure");
        kony.print("journey setup failure");
      } 
}
     
   
      
  
