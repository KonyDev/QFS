define(function() {

  return {
    _DATA_MODEL:{
      "QUESTION_LOCALISATION_TBL":"question_localisation_mapping_tbl",
      "CHECKLIST_QUESTIONS_TBL":"checklist_questions_master_tbl",
      "QUESTION_OPTIONS_TBL":"question_options_tbl"
    },
    _QUESTION_OPTIONS_TBL:{
      "ID":"question_options_row_id_pk",
      "QUESTION_ID":"question_id_fk",
      "QUESTION_OPTION":"question_option_to_choose",
      "IS_OPTION_TO_BE_SELECTED_MANDATORY":"is_option_to_be_selected_mandatory"
    },
    _CHECKLIST_QUESTIONS_TBL:{
      "QUESTION_ID":"question_id_pk",
      "QUESTION_TYPE_ID":"question_type_id_fk",
      "QUESTION_DESC":"question_text",
      "IS_MANDATORY_TO_ANSWER":"is_mandatory_to_answer"
    },
    _QUESTION_LOCALISATION_TBL:{
      "QUESTION_ID":"question_id_fk",
      "COUNTRY_ID":"country_id_fk",
      "REGION_ID":"region_id_fk",
      "LANGUAGE_ID":"language_id_fk"
    },
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    //setQuestions: All the key pairs that user wants in the JsonObject
    setQuestions:function(questionData){
      debugger;
      kony.print("In SetQuestions, questionData is: "+questionData);
      var totalQuestionnaire=[];
      try{
        if(Array.isArray(questionData) && questionData.length>0){
          this.view.lblQuestionPleaseConfirm.setVisibility(true);
          for(var i=0;i<questionData.length;i++){

            var questionType = questionData[i][this._CHECKLIST_QUESTIONS_TBL.QUESTION_TYPE_ID];
            var answerOptions = questionData[i][this._DATA_MODEL.QUESTION_OPTIONS_TBL];
            var segData={};
            //Handling Radio Button Questions
            //if(questionType == "RADIO_BUTTON")
            if(questionType == 2)//2 for radio button
            {
              if(Array.isArray(answerOptions)){
                for(var j=0;j<answerOptions.length;j++){
                  if("YES"==answerOptions[j][this._QUESTION_OPTIONS_TBL.QUESTION_OPTION].toUpperCase()){
                    segData.hdnOptionYesValue=answerOptions[j][this._QUESTION_OPTIONS_TBL.ID];
                    //segData[this._QUESTION_OPTIONS_TBL.ID]=answerOptions[j][this._QUESTION_OPTIONS_TBL.ID];
                  }
                  if("NO"==answerOptions[j][this._QUESTION_OPTIONS_TBL.QUESTION_OPTION].toUpperCase()){
                    segData.hdnOptionNoValue=answerOptions[j][this._QUESTION_OPTIONS_TBL.ID];
                    segData["selectedAnswerId"]=answerOptions[j][this._QUESTION_OPTIONS_TBL.ID];
                    //segData[this._QUESTION_OPTIONS_TBL.ID]=answerOptions[j][this._QUESTION_OPTIONS_TBL.ID];
                  }
                }
                segData[this._DATA_MODEL.QUESTION_OPTIONS_TBL]=answerOptions;
              }
              segData.flexCheckboxUnselected={"onClick":this.onAnsweringYesNoQuestion};
              segData.flexCheckBoxSelected={"visible":false};
              segData.flexYesNoQuestions={"visible":true};
              segData.flexTextQuestions={"visible":false};
              segData.lblYesNoQuestion=questionData[i][this._CHECKLIST_QUESTIONS_TBL.QUESTION_DESC];
            }
            //Handling other types here, only text type at present
            else{
              segData.flexYesNoQuestions={"visible":false};
              segData.flexTextQuestions={"visible":true};
              segData.lblTextQuestion=questionData[i][this._CHECKLIST_QUESTIONS_TBL.QUESTION_DESC];
              segData.textAreaAnswer={"text":""};
            }
            segData.hdnQuestionId=questionData[i][this._CHECKLIST_QUESTIONS_TBL.QUESTION_ID];
            segData[this._CHECKLIST_QUESTIONS_TBL.QUESTION_ID]=questionData[i][this._CHECKLIST_QUESTIONS_TBL.QUESTION_ID];
            segData.hdnIsMandatoryToAnswer=questionData[i][this._CHECKLIST_QUESTIONS_TBL.IS_MANDATORY_TO_ANSWER];
            segData.hdnQuestionType=questionType;
            totalQuestionnaire.push(segData);
          }
          this.view.segmentQuestions.setData(totalQuestionnaire);
        }else{
          this.view.lblQuestionPleaseConfirm.setVisibility(false);
          this.view.segmentQuestions.removeAll();
        }
      }catch(excp){
        debugger;
        alert("Exception occured while setting question list");
      }
    },
    //Method to toggle between Yes/No for Radio button Questions
    onAnsweringYesNoQuestion:function(selectedData, selectedRowIndex){
      //var selectedData=this.view.segmentQuestions.selectedRowItems[0];
      debugger;
      //return;
      try{
        var selectedData=this.view.segmentQuestions.selectedItems[0];
        selectedData.flexCheckBoxSelected.visible = !(selectedData.flexCheckBoxSelected.visible);
        if(selectedData.flexCheckBoxSelected.visible===true){
          selectedData["selectedAnswerId"]=selectedData["hdnOptionYesValue"];
        }else{
          selectedData["selectedAnswerId"]=selectedData["hdnOptionNoValue"];
        }
        if(kony.os.deviceInfo().name.toLocaleLowerCase()=='iphone'){
          this.view.segmentQuestions.setDataAt(selectedData,this.view.segmentQuestions.selectedIndex[1]);
        }else if(kony.os.deviceInfo().name.toLocaleLowerCase()=='android'){
          this.view.segmentQuestions.setDataAt(selectedData,this.view.segmentQuestions.selectedRowIndex[1]);
        }
        
      }catch(excp){
        debugger;
      }
    },

    getAnswers:function()
    {
      var segAnswerData = this.view.segmentQuestions.data;
      return segAnswerData;
      var allAnswered=true;
      var answerData={};
      var answerDetails=[],unAnsweredQuestions=[];
      for(var i=0;i<segAnswerData.length;i++)
      {
        var rowData = segAnswerData[i];
        var answeredQuestion = this.checkQuestionAnswered(rowData);
        if(rowData.hdnIsMandatoryToAnswer=="true" && !answeredQuestion)
        {
          allAnswered = false;
        }
        if(rowData.hdnQuestionType=="RADIO_BUTTON")
        {
          answerDetails.push({"questionId":rowData.hdnQuestionId,"selectedOption":this.getAnswerFromSegmentRowData(rowData)}); 
        }
        else
        {
          if(this.getAnswerFromSegmentRowData(rowData)=="")
          {
            unAnsweredQuestions.push(rowData.hdnQuestionId);
          }
          else
          {
            answerDetails.push({"questionId":rowData.hdnQuestionId,"enteredText":this.getAnswerFromSegmentRowData(rowData)});
          }
        }
      }
      if(allAnswered)
      {
        answerData.answerDetails=answerDetails;
        answerData.unAnsweredQuestions=unAnsweredQuestions;
        return answerData
      }
      else
      {
        alert("Please answer all mandatory questions!!");
      }
    },

    checkQuestionAnswered:function(segmentRowData)
    {
      if(segmentRowData.hdnQuestionType=="RADIO_BUTTON")
      {
        return (segmentRowData.flexCheckBoxSelected.visible);
      }
      else
      {
        return (segmentRowData.textAreaAnswer.text!=="");
      }
    },

    getAnswerFromSegmentRowData:function(segmentRowData)
    {
      if(segmentRowData.hdnQuestionType=="RADIO_BUTTON")
      {
        if(segmentRowData.flexCheckBoxSelected.visible)
          return (segmentRowData.hdnOptionYesValue);
        else
          return (segmentRowData.hdnOptionNoValue);
      }
      else
      {
        return (segmentRowData.textAreaAnswer.text);
      }   
    },
  };
});