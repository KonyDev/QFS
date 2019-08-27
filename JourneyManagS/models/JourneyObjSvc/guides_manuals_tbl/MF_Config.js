define([],function(){
	var mappings = {
		"country_id_fk" : "country_id_fk",
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"guides_manuals_row_id_pk" : "guides_manuals_row_id_pk",
		"guide_manual_title" : "guide_manual_title",
		"guide_manual_url" : "guide_manual_url",
		"language_id_fk" : "language_id_fk",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"region_id_fk" : "region_id_fk",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"country_id_fk" : "number",
		"createdby" : "string",
		"createddatetime" : "date",
		"guides_manuals_row_id_pk" : "number",
		"guide_manual_title" : "string",
		"guide_manual_url" : "string",
		"language_id_fk" : "number",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"region_id_fk" : "number",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"guides_manuals_row_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "guides_manuals_tbl"
	};
	Object.freeze(config);
	
	return config;
})
