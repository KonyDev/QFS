define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		admin_flag : function(val, state){
			state['admin_flag'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		group_id_pk : function(val, state){
			state['group_id_pk'] = val;
		},
		group_name : function(val, state){
			state['group_name'] = val;
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
	function ad_group_master_tbl(defaultValues){
		var privateState = {};
			privateState.admin_flag = defaultValues?(defaultValues["admin_flag"]?defaultValues["admin_flag"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.group_id_pk = defaultValues?(defaultValues["group_id_pk"]?defaultValues["group_id_pk"]:null):null;
			privateState.group_name = defaultValues?(defaultValues["group_name"]?defaultValues["group_name"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"admin_flag" : {
					get : function(){return privateState.admin_flag},
					set : function(val){
						setterFunctions['admin_flag'].call(this,val,privateState);
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
				"group_id_pk" : {
					get : function(){return privateState.group_id_pk},
					set : function(val){throw Error("group_id_pk cannot be changed."); },
					enumerable : true,
				},
				"group_name" : {
					get : function(){return privateState.group_name},
					set : function(val){
						setterFunctions['group_name'].call(this,val,privateState);
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
	BaseModel.isParentOf(ad_group_master_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(ad_group_master_tbl);
	
	var registerValidatorBackup = ad_group_master_tbl.registerValidator;
	
	ad_group_master_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ad_group_master_tbl.isValid(this, propName, val) ){
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
					name : "ad_group_master_tbl_user_tbl",
					targetObject : "user_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "group_id_pk",
							targetField : "group_id_fk"
						},
					]
				},
	];
	
	ad_group_master_tbl.relations = relations;
	
	ad_group_master_tbl.prototype.isValid = function(){
		return ad_group_master_tbl.isValid(this);
	};
	
	ad_group_master_tbl.prototype.objModelName = "ad_group_master_tbl";
	
	return ad_group_master_tbl;
});