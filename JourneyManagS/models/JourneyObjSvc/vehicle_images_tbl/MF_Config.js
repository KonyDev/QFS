define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"image_base64" : "image_base64",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"row_id_pk" : "row_id_pk",
		"softdeleteflag" : "softdeleteflag",
		"vehicle_id_fk" : "vehicle_id_fk",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"image_base64" : "string",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"row_id_pk" : "number",
		"softdeleteflag" : "number",
		"vehicle_id_fk" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"row_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "vehicle_images_tbl"
	};
	Object.freeze(config);
	
	return config;
})
