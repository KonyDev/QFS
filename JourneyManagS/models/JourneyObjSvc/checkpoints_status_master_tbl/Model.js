define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		checkpoint_status_desc : function(val, state){
			state['checkpoint_status_desc'] = val;
		},
		checkpoint_status_id_pk : function(val, state){
			state['checkpoint_status_id_pk'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
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
	function checkpoints_status_master_tbl(defaultValues){
		var privateState = {};
			privateState.checkpoint_status_desc = defaultValues?(defaultValues["checkpoint_status_desc"]?defaultValues["checkpoint_status_desc"]:null):null;
			privateState.checkpoint_status_id_pk = defaultValues?(defaultValues["checkpoint_status_id_pk"]?defaultValues["checkpoint_status_id_pk"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"checkpoint_status_desc" : {
					get : function(){return privateState.checkpoint_status_desc},
					set : function(val){
						setterFunctions['checkpoint_status_desc'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkpoint_status_id_pk" : {
					get : function(){return privateState.checkpoint_status_id_pk},
					set : function(val){throw Error("checkpoint_status_id_pk cannot be changed."); },
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
	BaseModel.isParentOf(checkpoints_status_master_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(checkpoints_status_master_tbl);
	
	var registerValidatorBackup = checkpoints_status_master_tbl.registerValidator;
	
	checkpoints_status_master_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( checkpoints_status_master_tbl.isValid(this, propName, val) ){
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
					name : "checkpoints_status_master_tbl_checkpoints_tbl",
					targetObject : "checkpoints_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "checkpoint_status_id_pk",
							targetField : "checkpoint_status_id_fk"
						},
					]
				},
	];
	
	checkpoints_status_master_tbl.relations = relations;
	
	checkpoints_status_master_tbl.prototype.isValid = function(){
		return checkpoints_status_master_tbl.isValid(this);
	};
	
	checkpoints_status_master_tbl.prototype.objModelName = "checkpoints_status_master_tbl";
	
	return checkpoints_status_master_tbl;
});