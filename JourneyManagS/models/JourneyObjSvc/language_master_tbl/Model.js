define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		language_id_pk : function(val, state){
			state['language_id_pk'] = val;
		},
		language_name : function(val, state){
			state['language_name'] = val;
		},
		lastupdatedby : function(val, state){
			state['lastupdatedby'] = val;
		},
		lastupdateddatetime : function(val, state){
			state['lastupdateddatetime'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
	};
	
	
	//Create the Model Class
	function language_master_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.language_id_pk = defaultValues?(defaultValues["language_id_pk"]?defaultValues["language_id_pk"]:null):null;
			privateState.language_name = defaultValues?(defaultValues["language_name"]?defaultValues["language_name"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
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
				"language_id_pk" : {
					get : function(){return privateState.language_id_pk},
					set : function(val){throw Error("language_id_pk cannot be changed."); },
					enumerable : true,
				},
				"language_name" : {
					get : function(){return privateState.language_name},
					set : function(val){
						setterFunctions['language_name'].call(this,val,privateState);
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
	BaseModel.isParentOf(language_master_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(language_master_tbl);
	
	var registerValidatorBackup = language_master_tbl.registerValidator;
	
	language_master_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( language_master_tbl.isValid(this, propName, val) ){
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
					name : "language_master_tbl_guides_manuals_tbl",
					targetObject : "guides_manuals_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "language_id_pk",
							targetField : "language_id_fk"
						},
					]
				},
				{
					name : "language_master_tbl_question_localisation_mapping_tbl",
					targetObject : "question_localisation_mapping_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "language_id_pk",
							targetField : "language_id_fk"
						},
					]
				},
	];
	
	language_master_tbl.relations = relations;
	
	language_master_tbl.prototype.isValid = function(){
		return language_master_tbl.isValid(this);
	};
	
	language_master_tbl.prototype.objModelName = "language_master_tbl";
	
	return language_master_tbl;
});