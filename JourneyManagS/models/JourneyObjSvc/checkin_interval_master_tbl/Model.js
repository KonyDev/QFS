define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		checkin_interval_minutes : function(val, state){
			state['checkin_interval_minutes'] = val;
		},
		checkin_interval_row_id_pk : function(val, state){
			state['checkin_interval_row_id_pk'] = val;
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
	function checkin_interval_master_tbl(defaultValues){
		var privateState = {};
			privateState.checkin_interval_minutes = defaultValues?(defaultValues["checkin_interval_minutes"]?defaultValues["checkin_interval_minutes"]:null):null;
			privateState.checkin_interval_row_id_pk = defaultValues?(defaultValues["checkin_interval_row_id_pk"]?defaultValues["checkin_interval_row_id_pk"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"checkin_interval_minutes" : {
					get : function(){return privateState.checkin_interval_minutes},
					set : function(val){
						setterFunctions['checkin_interval_minutes'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkin_interval_row_id_pk" : {
					get : function(){return privateState.checkin_interval_row_id_pk},
					set : function(val){throw Error("checkin_interval_row_id_pk cannot be changed."); },
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
	BaseModel.isParentOf(checkin_interval_master_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(checkin_interval_master_tbl);
	
	var registerValidatorBackup = checkin_interval_master_tbl.registerValidator;
	
	checkin_interval_master_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( checkin_interval_master_tbl.isValid(this, propName, val) ){
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
					name : "checkin_interval_master_tbl_journey_tbl",
					targetObject : "journey_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "checkin_interval_row_id_pk",
							targetField : "checkin_interval_row_id_fk"
						},
					]
				},
	];
	
	checkin_interval_master_tbl.relations = relations;
	
	checkin_interval_master_tbl.prototype.isValid = function(){
		return checkin_interval_master_tbl.isValid(this);
	};
	
	checkin_interval_master_tbl.prototype.objModelName = "checkin_interval_master_tbl";
	
	return checkin_interval_master_tbl;
});