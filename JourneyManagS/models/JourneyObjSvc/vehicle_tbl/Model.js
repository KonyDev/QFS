define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
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
		user_emp_id_fk : function(val, state){
			state['user_emp_id_fk'] = val;
		},
		vehicle_color : function(val, state){
			state['vehicle_color'] = val;
		},
		vehicle_id_pk : function(val, state){
			state['vehicle_id_pk'] = val;
		},
		vehicle_make : function(val, state){
			state['vehicle_make'] = val;
		},
		vehicle_model : function(val, state){
			state['vehicle_model'] = val;
		},
		vehicle_reg_num : function(val, state){
			state['vehicle_reg_num'] = val;
		},
	};
	
	
	//Create the Model Class
	function vehicle_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
			privateState.user_emp_id_fk = defaultValues?(defaultValues["user_emp_id_fk"]?defaultValues["user_emp_id_fk"]:null):null;
			privateState.vehicle_color = defaultValues?(defaultValues["vehicle_color"]?defaultValues["vehicle_color"]:null):null;
			privateState.vehicle_id_pk = defaultValues?(defaultValues["vehicle_id_pk"]?defaultValues["vehicle_id_pk"]:null):null;
			privateState.vehicle_make = defaultValues?(defaultValues["vehicle_make"]?defaultValues["vehicle_make"]:null):null;
			privateState.vehicle_model = defaultValues?(defaultValues["vehicle_model"]?defaultValues["vehicle_model"]:null):null;
			privateState.vehicle_reg_num = defaultValues?(defaultValues["vehicle_reg_num"]?defaultValues["vehicle_reg_num"]:null):null;
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
				"user_emp_id_fk" : {
					get : function(){return privateState.user_emp_id_fk},
					set : function(val){
						setterFunctions['user_emp_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"vehicle_color" : {
					get : function(){return privateState.vehicle_color},
					set : function(val){
						setterFunctions['vehicle_color'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"vehicle_id_pk" : {
					get : function(){return privateState.vehicle_id_pk},
					set : function(val){throw Error("vehicle_id_pk cannot be changed."); },
					enumerable : true,
				},
				"vehicle_make" : {
					get : function(){return privateState.vehicle_make},
					set : function(val){
						setterFunctions['vehicle_make'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"vehicle_model" : {
					get : function(){return privateState.vehicle_model},
					set : function(val){
						setterFunctions['vehicle_model'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"vehicle_reg_num" : {
					get : function(){return privateState.vehicle_reg_num},
					set : function(val){
						setterFunctions['vehicle_reg_num'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(vehicle_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(vehicle_tbl);
	
	var registerValidatorBackup = vehicle_tbl.registerValidator;
	
	vehicle_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( vehicle_tbl.isValid(this, propName, val) ){
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
					name : "vehicle_tbl_journey_tbl",
					targetObject : "journey_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "vehicle_id_pk",
							targetField : "journey_selected_vehicle_id_fk"
						},
					]
				},
				{
					name : "vehicle_tbl_vehicle_images_tbl",
					targetObject : "vehicle_images_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "vehicle_id_pk",
							targetField : "vehicle_id_fk"
						},
					]
				},
	];
	
	vehicle_tbl.relations = relations;
	
	vehicle_tbl.prototype.isValid = function(){
		return vehicle_tbl.isValid(this);
	};
	
	vehicle_tbl.prototype.objModelName = "vehicle_tbl";
	
	return vehicle_tbl;
});