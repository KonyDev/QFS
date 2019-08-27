define([],function(){
	var mappings = {
		"admin_flag" : "admin_flag",
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"group_id_pk" : "group_id_pk",
		"group_name" : "group_name",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"admin_flag" : "number",
		"createdby" : "string",
		"createddatetime" : "date",
		"group_id_pk" : "number",
		"group_name" : "string",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"group_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "ad_group_master_tbl"
	};
	Object.freeze(config);
	
	return config;
})
