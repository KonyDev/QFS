define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
		"user_emp_id_fk" : "user_emp_id_fk",
		"vehicle_color" : "vehicle_color",
		"vehicle_id_pk" : "vehicle_id_pk",
		"vehicle_make" : "vehicle_make",
		"vehicle_model" : "vehicle_model",
		"vehicle_reg_num" : "vehicle_reg_num",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
		"user_emp_id_fk" : "string",
		"vehicle_color" : "string",
		"vehicle_id_pk" : "number",
		"vehicle_make" : "string",
		"vehicle_model" : "string",
		"vehicle_reg_num" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"vehicle_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "vehicle_tbl"
	};
	Object.freeze(config);
	
	return config;
})
