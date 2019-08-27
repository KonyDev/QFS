define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		journey_id_fk : function(val, state){
			state['journey_id_fk'] = val;
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
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
		user_answer_plain_text : function(val, state){
			state['user_answer_plain_text'] = val;
		},
		user_answer_row_id : function(val, state){
			state['user_answer_row_id'] = val;
		},
	};
	
	
	//Create the Model Class
	function user_answers_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.journey_id_fk = defaultValues?(defaultValues["journey_id_fk"]?defaultValues["journey_id_fk"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.question_id_fk = defaultValues?(defaultValues["question_id_fk"]?defaultValues["question_id_fk"]:null):null;
			privateState.question_options_row_id_pk = defaultValues?(defaultValues["question_options_row_id_pk"]?defaultValues["question_options_row_id_pk"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
			privateState.user_answer_plain_text = defaultValues?(defaultValues["user_answer_plain_text"]?defaultValues["user_answer_plain_text"]:null):null;
			privateState.user_answer_row_id = defaultValues?(defaultValues["user_answer_row_id"]?defaultValues["user_answer_row_id"]:null):null;
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
				"journey_id_fk" : {
					get : function(){return privateState.journey_id_fk},
					set : function(val){
						setterFunctions['journey_id_fk'].call(this,val,privateState);
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
					set : function(val){
						setterFunctions['question_options_row_id_pk'].call(this,val,privateState);
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
				"user_answer_plain_text" : {
					get : function(){return privateState.user_answer_plain_text},
					set : function(val){
						setterFunctions['user_answer_plain_text'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"user_answer_row_id" : {
					get : function(){return privateState.user_answer_row_id},
					set : function(val){throw Error("user_answer_row_id cannot be changed."); },
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(user_answers_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(user_answers_tbl);
	
	var registerValidatorBackup = user_answers_tbl.registerValidator;
	
	user_answers_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( user_answers_tbl.isValid(this, propName, val) ){
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
	];
	
	user_answers_tbl.relations = relations;
	
	user_answers_tbl.prototype.isValid = function(){
		return user_answers_tbl.isValid(this);
	};
	
	user_answers_tbl.prototype.objModelName = "user_answers_tbl";
	
	return user_answers_tbl;
});