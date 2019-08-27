define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		country_id_fk : function(val, state){
			state['country_id_fk'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		language_id_fk : function(val, state){
			state['language_id_fk'] = val;
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
		question_localisation_row_id : function(val, state){
			state['question_localisation_row_id'] = val;
		},
		region_id_fk : function(val, state){
			state['region_id_fk'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
	};
	
	
	//Create the Model Class
	function question_localisation_mapping_tbl(defaultValues){
		var privateState = {};
			privateState.country_id_fk = defaultValues?(defaultValues["country_id_fk"]?defaultValues["country_id_fk"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.language_id_fk = defaultValues?(defaultValues["language_id_fk"]?defaultValues["language_id_fk"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.question_id_fk = defaultValues?(defaultValues["question_id_fk"]?defaultValues["question_id_fk"]:null):null;
			privateState.question_localisation_row_id = defaultValues?(defaultValues["question_localisation_row_id"]?defaultValues["question_localisation_row_id"]:null):null;
			privateState.region_id_fk = defaultValues?(defaultValues["region_id_fk"]?defaultValues["region_id_fk"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"country_id_fk" : {
					get : function(){return privateState.country_id_fk},
					set : function(val){
						setterFunctions['country_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
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
				"language_id_fk" : {
					get : function(){return privateState.language_id_fk},
					set : function(val){
						setterFunctions['language_id_fk'].call(this,val,privateState);
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
				"question_localisation_row_id" : {
					get : function(){return privateState.question_localisation_row_id},
					set : function(val){throw Error("question_localisation_row_id cannot be changed."); },
					enumerable : true,
				},
				"region_id_fk" : {
					get : function(){return privateState.region_id_fk},
					set : function(val){
						setterFunctions['region_id_fk'].call(this,val,privateState);
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
	BaseModel.isParentOf(question_localisation_mapping_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(question_localisation_mapping_tbl);
	
	var registerValidatorBackup = question_localisation_mapping_tbl.registerValidator;
	
	question_localisation_mapping_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( question_localisation_mapping_tbl.isValid(this, propName, val) ){
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
	
	question_localisation_mapping_tbl.relations = relations;
	
	question_localisation_mapping_tbl.prototype.isValid = function(){
		return question_localisation_mapping_tbl.isValid(this);
	};
	
	question_localisation_mapping_tbl.prototype.objModelName = "question_localisation_mapping_tbl";
	
	return question_localisation_mapping_tbl;
});