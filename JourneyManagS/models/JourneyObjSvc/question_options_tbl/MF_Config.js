define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"is_option_to_be_selected_mandatory" : "is_option_to_be_selected_mandatory",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"question_id_fk" : "question_id_fk",
		"question_options_row_id_pk" : "question_options_row_id_pk",
		"question_option_to_choose" : "question_option_to_choose",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"is_option_to_be_selected_mandatory" : "number",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"question_id_fk" : "number",
		"question_options_row_id_pk" : "number",
		"question_option_to_choose" : "string",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"question_options_row_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "question_options_tbl"
	};
	Object.freeze(config);
	
	return config;
})
