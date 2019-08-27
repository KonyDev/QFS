define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		image_base64 : function(val, state){
			state['image_base64'] = val;
		},
		lastupdatedby : function(val, state){
			state['lastupdatedby'] = val;
		},
		lastupdateddatetime : function(val, state){
			state['lastupdateddatetime'] = val;
		},
		row_id_pk : function(val, state){
			state['row_id_pk'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
		vehicle_id_fk : function(val, state){
			state['vehicle_id_fk'] = val;
		},
	};
	
	
	//Create the Model Class
	function vehicle_images_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.image_base64 = defaultValues?(defaultValues["image_base64"]?defaultValues["image_base64"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.row_id_pk = defaultValues?(defaultValues["row_id_pk"]?defaultValues["row_id_pk"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
			privateState.vehicle_id_fk = defaultValues?(defaultValues["vehicle_id_fk"]?defaultValues["vehicle_id_fk"]:null):null;
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
				"image_base64" : {
					get : function(){return privateState.image_base64},
					set : function(val){
						setterFunctions['image_base64'].call(this,val,privateState);
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
				"row_id_pk" : {
					get : function(){return privateState.row_id_pk},
					set : function(val){throw Error("row_id_pk cannot be changed."); },
					enumerable : true,
				},
				"softdeleteflag" : {
					get : function(){return privateState.softdeleteflag},
					set : function(val){
						setterFunctions['softdeleteflag'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"vehicle_id_fk" : {
					get : function(){return privateState.vehicle_id_fk},
					set : function(val){
						setterFunctions['vehicle_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(vehicle_images_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(vehicle_images_tbl);
	
	var registerValidatorBackup = vehicle_images_tbl.registerValidator;
	
	vehicle_images_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( vehicle_images_tbl.isValid(this, propName, val) ){
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
	
	vehicle_images_tbl.relations = relations;
	
	vehicle_images_tbl.prototype.isValid = function(){
		return vehicle_images_tbl.isValid(this);
	};
	
	vehicle_images_tbl.prototype.objModelName = "vehicle_images_tbl";
	
	return vehicle_images_tbl;
});