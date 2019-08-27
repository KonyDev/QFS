define({ 

 //Type your controller code here 
  onActionButtonClick:function(eventobject, context){
   // kony.print("context ::"+JSON.stringify(context));
                                                    
   nextCheckPointSeqNumber= context["widgetInfo"]["selectedRowItems"][0]["nextCheckPointSeqNumber"];
    selectedJourneyId=context["widgetInfo"]["selectedRowItems"][0]["journey_id"];
    selectedJourneyStatus=context["widgetInfo"]["selectedRowItems"][0]["journeyStatus"]["text"];
    selectedCheckPointRowId=context["widgetInfo"]["selectedRowItems"][0]["nextCheckpoint_row_id_pk"];
    selectedIncindet_Id=context["widgetInfo"]["selectedRowItems"][0]["incidentId"];
    expected_Nextcheckin_timestamp_UTC=context["widgetInfo"]["selectedRowItems"][0]["expected_Nextcheckin_timestamp_UTC"];
    checkin_interval_row_id=context["widgetInfo"]["selectedRowItems"][0]["checkin_interval_row_id_fk"];
    
     this.executeOnParent("onClickOfFlxAction");
  },
  
 });