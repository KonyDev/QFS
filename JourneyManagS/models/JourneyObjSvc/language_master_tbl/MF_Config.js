define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"language_id_pk" : "language_id_pk",
		"language_name" : "language_name",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"language_id_pk" : "number",
		"language_name" : "string",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"language_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "language_master_tbl"
	};
	Object.freeze(config);
	
	return config;
})
