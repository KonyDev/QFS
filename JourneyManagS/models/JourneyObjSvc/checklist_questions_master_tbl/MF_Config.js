define([],function(){
	var mappings = {
		"createdby" : "createdby",
		"createddatetime" : "createddatetime",
		"is_mandatory_to_answer" : "is_mandatory_to_answer",
		"lastupdatedby" : "lastupdatedby",
		"lastupdateddatetime" : "lastupdateddatetime",
		"question_id_pk" : "question_id_pk",
		"question_text" : "question_text",
		"question_type_id_fk" : "question_type_id_fk",
		"softdeleteflag" : "softdeleteflag",
	};
	Object.freeze(mappings);
	
	var typings = {
		"createdby" : "string",
		"createddatetime" : "date",
		"is_mandatory_to_answer" : "number",
		"lastupdatedby" : "string",
		"lastupdateddatetime" : "date",
		"question_id_pk" : "number",
		"question_text" : "string",
		"question_type_id_fk" : "number",
		"softdeleteflag" : "number",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"question_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "checklist_questions_master_tbl"
	};
	Object.freeze(config);
	
	return config;
})
