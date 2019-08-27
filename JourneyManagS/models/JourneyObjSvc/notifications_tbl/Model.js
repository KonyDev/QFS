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
		notification_id_pk : function(val, state){
			state['notification_id_pk'] = val;
		},
		notification_message : function(val, state){
			state['notification_message'] = val;
		},
		notification_sent_by_fk : function(val, state){
			state['notification_sent_by_fk'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
	};
	
	
	//Create the Model Class
	function notifications_tbl(defaultValues){
		var privateState = {};
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.notification_id_pk = defaultValues?(defaultValues["notification_id_pk"]?defaultValues["notification_id_pk"]:null):null;
			privateState.notification_message = defaultValues?(defaultValues["notification_message"]?defaultValues["notification_message"]:null):null;
			privateState.notification_sent_by_fk = defaultValues?(defaultValues["notification_sent_by_fk"]?defaultValues["notification_sent_by_fk"]:null):null;
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
				"notification_id_pk" : {
					get : function(){return privateState.notification_id_pk},
					set : function(val){throw Error("notification_id_pk cannot be changed."); },
					enumerable : true,
				},
				"notification_message" : {
					get : function(){return privateState.notification_message},
					set : function(val){
						setterFunctions['notification_message'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"notification_sent_by_fk" : {
					get : function(){return privateState.notification_sent_by_fk},
					set : function(val){
						setterFunctions['notification_sent_by_fk'].call(this,val,privateState);
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
	BaseModel.isParentOf(notifications_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(notifications_tbl);
	
	var registerValidatorBackup = notifications_tbl.registerValidator;
	
	notifications_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( notifications_tbl.isValid(this, propName, val) ){
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
					name : "notifications_tbl_journey_notif_map_tbl",
					targetObject : "journey_notif_map_tbl",
					type : "OneToMany",
					cascade : "false",
					relationFields : [
						{
							sourceField : "notification_id_pk",
							targetField : "notification_id_fk"
						},
					]
				},
	];
	
	notifications_tbl.relations = relations;
	
	notifications_tbl.prototype.isValid = function(){
		return notifications_tbl.isValid(this);
	};
	
	notifications_tbl.prototype.objModelName = "notifications_tbl";
	
	return notifications_tbl;
});