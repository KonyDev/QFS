define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		is_mandatory_to_answer : function(val, state){
			state['is_mandatory_to_answer'] = val;
		},
		lastupdatedby : function(val, state){
			state['lastupdatedby'] = val;
		},
		lastupdateddatetime : function(val, state){
			state['lastupdateddatetime'] = val;
		},
		question_id_pk : function(val, state){
			state['question_id_pk'] = val;
		},
		question_text : function(val, state){
			state['question_text'] = val;
		},
		question_type_id_fk : function(val, state){
			state['question_type_id_fk'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
	};
	
	
	//Create the Model Class
	function checklist_questions_master_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.is_mandatory_to_answer = defaultValues?(defaultValues["is_mandatory_to_answer"]?defaultValues["is_mandatory_to_answer"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.question_id_pk = defaultValues?(defaultValues["question_id_pk"]?defaultValues["question_id_pk"]:null):null;
			privateState.question_text = defaultValues?(defaultValues["question_text"]?defaultValues["question_text"]:null):null;
			privateState.question_type_id_fk = defaultValues?(defaultValues["question_type_id_fk"]?defaultValues["question_type_id_fk"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"createdby" : {
					get : function(){return privateState.createdby},
					set : function(val){
						setterFunctions['createdby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createddatetime" : {
					get : function(){return privateState.createddatetime},
					set : function(val){
						setterFunctions['createddatetime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"is_mandatory_to_answer" : {
					get : function(){return privateState.is_mandatory_to_answer},
					set : function(val){
						setterFunctions['is_mandatory_to_answer'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastupdatedby" : {
					get : function(){return privateState.lastupdatedby},
					set : function(val){
						setterFunctions['lastupdatedby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastupdateddatetime" : {
					get : function(){return privateState.lastupdateddatetime},
					set : function(val){
						setterFunctions['lastupdateddatetime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"question_id_pk" : {
					get : function(){return privateState.question_id_pk},
					set : function(val){throw Error("question_id_pk cannot be changed."); },
					enumerable : true,
				},
				"question_text" : {
					get : function(){return privateState.question_text},
					set : function(val){
						setterFunctions['question_text'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"question_type_id_fk" : {
					get : function(){return privateState.question_type_id_fk},
					set : function(val){
						setterFunctions['question_type_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"softdeleteflag" : {
					get : function(){return privateState.softdeleteflag},
					set : function(val){
						setterFunctions['softdeleteflag'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(checklist_questions_master_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(checklist_questions_master_tbl);
	
	var registerValidatorBackup = checklist_questions_master_tbl.registerValidator;
	
	checklist_questions_master_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( checklist_questions_master_tbl.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	
	var relations = [
				{
					name : "checklist_questions_master_tbl_question_localisation_mapping_tbl",
					targetObject : "question_localisation_mapping_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "question_id_pk",
							targetField : "question_id_fk"
						},
					]
				},
				{
					name : "checklist_questions_master_tbl_question_options_tbl",
					targetObject : "question_options_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "question_id_pk",
							targetField : "question_id_fk"
						},
					]
				},
				{
					name : "checklist_questions_master_tbl_user_answers_tbl",
					targetObject : "user_answers_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "question_type_id_fk",
							targetField : "question_id_fk"
						},
					]
				},
	];
	
	checklist_questions_master_tbl.relations = relations;
	
	checklist_questions_master_tbl.prototype.isValid = function(){
		return checklist_questions_master_tbl.isValid(this);
	};
	
	checklist_questions_master_tbl.prototype.objModelName = "checklist_questions_master_tbl";
	
	return checklist_questions_master_tbl;
});