define([],function(){
	var mappings = {
		"country_id_fk" : "country_id_fk",
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"language_id_fk" : "language_id_fk",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"question_id_fk" : "question_id_fk",
		"question_localisation_row_id" : "question_localisation_row_id",
		"region_id_fk" : "region_id_fk",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"country_id_fk" : "number",
		"createdby" : "string",
		"createddatetime" : "date",
		"language_id_fk" : "number",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"question_id_fk" : "number",
		"question_localisation_row_id" : "number",
		"region_id_fk" : "number",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"question_localisation_row_id",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "question_localisation_mapping_tbl"
	};
	Object.freeze(config);
	
	return config;
})
