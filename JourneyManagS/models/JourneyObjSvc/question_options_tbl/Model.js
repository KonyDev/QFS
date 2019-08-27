define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		is_option_to_be_selected_mandatory : function(val, state){
			state['is_option_to_be_selected_mandatory'] = val;
		},
		lastupdatedby : function(val, state){
			state['lastupdatedby'] = val;
		},
		lastupdateddatetime : function(val, state){
			state['lastupdateddatetime'] = val;
		},
		question_id_fk : function(val, state){
			state['question_id_fk'] = val;
		},
		question_options_row_id_pk : function(val, state){
			state['question_options_row_id_pk'] = val;
		},
		question_option_to_choose : function(val, state){
			state['question_option_to_choose'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
	};
	
	
	//Create the Model Class
	function question_options_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.is_option_to_be_selected_mandatory = defaultValues?(defaultValues["is_option_to_be_selected_mandatory"]?defaultValues["is_option_to_be_selected_mandatory"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.question_id_fk = defaultValues?(defaultValues["question_id_fk"]?defaultValues["question_id_fk"]:null):null;
			privateState.question_options_row_id_pk = defaultValues?(defaultValues["question_options_row_id_pk"]?defaultValues["question_options_row_id_pk"]:null):null;
			privateState.question_option_to_choose = defaultValues?(defaultValues["question_option_to_choose"]?defaultValues["question_option_to_choose"]:null):null;
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
				"is_option_to_be_selected_mandatory" : {
					get : function(){return privateState.is_option_to_be_selected_mandatory},
					set : function(val){
						setterFunctions['is_option_to_be_selected_mandatory'].call(this,val,privateState);
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
				"question_id_fk" : {
					get : function(){return privateState.question_id_fk},
					set : function(val){
						setterFunctions['question_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"question_options_row_id_pk" : {
					get : function(){return privateState.question_options_row_id_pk},
					set : function(val){throw Error("question_options_row_id_pk cannot be changed."); },
					enumerable : true,
				},
				"question_option_to_choose" : {
					get : function(){return privateState.question_option_to_choose},
					set : function(val){
						setterFunctions['question_option_to_choose'].call(this,val,privateState);
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
	BaseModel.isParentOf(question_options_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(question_options_tbl);
	
	var registerValidatorBackup = question_options_tbl.registerValidator;
	
	question_options_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( question_options_tbl.isValid(this, propName, val) ){
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
					name : "question_options_tbl_user_answers_tbl",
					targetObject : "user_answers_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "question_options_row_id_pk",
							targetField : "question_id_fk"
						},
					]
				},
	];
	
	question_options_tbl.relations = relations;
	
	question_options_tbl.prototype.isValid = function(){
		return question_options_tbl.isValid(this);
	};
	
	question_options_tbl.prototype.objModelName = "question_options_tbl";
	
	return question_options_tbl;
});