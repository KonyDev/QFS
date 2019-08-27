define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		actual_checkin_timestamp : function(val, state){
			state['actual_checkin_timestamp'] = val;
		},
		checkpoint_reported_by_fk : function(val, state){
			state['checkpoint_reported_by_fk'] = val;
		},
		checkpoint_row_id_pk : function(val, state){
			state['checkpoint_row_id_pk'] = val;
		},
		checkpoint_status_id_fk : function(val, state){
			state['checkpoint_status_id_fk'] = val;
		},
		check_point_seq_num : function(val, state){
			state['check_point_seq_num'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		expected_checkin_timestamp : function(val, state){
			state['expected_checkin_timestamp'] = val;
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
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
	};
	
	
	//Create the Model Class
	function checkpoints_tbl(defaultValues){
		var privateState = {};
			privateState.actual_checkin_timestamp = defaultValues?(defaultValues["actual_checkin_timestamp"]?defaultValues["actual_checkin_timestamp"]:null):null;
			privateState.checkpoint_reported_by_fk = defaultValues?(defaultValues["checkpoint_reported_by_fk"]?defaultValues["checkpoint_reported_by_fk"]:null):null;
			privateState.checkpoint_row_id_pk = defaultValues?(defaultValues["checkpoint_row_id_pk"]?defaultValues["checkpoint_row_id_pk"]:null):null;
			privateState.checkpoint_status_id_fk = defaultValues?(defaultValues["checkpoint_status_id_fk"]?defaultValues["checkpoint_status_id_fk"]:null):null;
			privateState.check_point_seq_num = defaultValues?(defaultValues["check_point_seq_num"]?defaultValues["check_point_seq_num"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.expected_checkin_timestamp = defaultValues?(defaultValues["expected_checkin_timestamp"]?defaultValues["expected_checkin_timestamp"]:null):null;
			privateState.journey_id_fk = defaultValues?(defaultValues["journey_id_fk"]?defaultValues["journey_id_fk"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"actual_checkin_timestamp" : {
					get : function(){return privateState.actual_checkin_timestamp},
					set : function(val){
						setterFunctions['actual_checkin_timestamp'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkpoint_reported_by_fk" : {
					get : function(){return privateState.checkpoint_reported_by_fk},
					set : function(val){
						setterFunctions['checkpoint_reported_by_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"checkpoint_row_id_pk" : {
					get : function(){return privateState.checkpoint_row_id_pk},
					set : function(val){throw Error("checkpoint_row_id_pk cannot be changed."); },
					enumerable : true,
				},
				"checkpoint_status_id_fk" : {
					get : function(){return privateState.checkpoint_status_id_fk},
					set : function(val){
						setterFunctions['checkpoint_status_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"check_point_seq_num" : {
					get : function(){return privateState.check_point_seq_num},
					set : function(val){
						setterFunctions['check_point_seq_num'].call(this,val,privateState);
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
				"expected_checkin_timestamp" : {
					get : function(){return privateState.expected_checkin_timestamp},
					set : function(val){
						setterFunctions['expected_checkin_timestamp'].call(this,val,privateState);
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
	BaseModel.isParentOf(checkpoints_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(checkpoints_tbl);
	
	var registerValidatorBackup = checkpoints_tbl.registerValidator;
	
	checkpoints_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( checkpoints_tbl.isValid(this, propName, val) ){
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
	
	checkpoints_tbl.relations = relations;
	
	checkpoints_tbl.prototype.isValid = function(){
		return checkpoints_tbl.isValid(this);
	};
	
	checkpoints_tbl.prototype.objModelName = "checkpoints_tbl";
	
	return checkpoints_tbl;
});