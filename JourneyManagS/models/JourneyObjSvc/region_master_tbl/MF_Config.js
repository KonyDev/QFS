define([],function(){
	var mappings = {
		"country_id_fk" : "country_id_fk",
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"region_id_pk" : "region_id_pk",
		"region_name" : "region_name",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"country_id_fk" : "number",
		"createdby" : "string",
		"createddatetime" : "date",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"region_id_pk" : "number",
		"region_name" : "string",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"region_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "region_master_tbl"
	};
	Object.freeze(config);
	
	return config;
})
