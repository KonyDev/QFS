define([],function(){
	var mappings = {
		"country_id_fk" : "country_id_fk",
		"createddatetime" : "createddatetime",
		"group_id_fk" : "group_id_fk",
		"language_id_fk" : "language_id_fk",
		"lastupdateddatetime" : "lastupdateddatetime",
		"region_id_fk" : "region_id_fk",
		"softdeleteflag" : "softdeleteflag",
		"user_email_id" : "user_email_id",
		"user_emp_id_pk" : "user_emp_id_pk",
		"user_firstname" : "user_firstname",
		"user_lastname" : "user_lastname",
		"user_phone1" : "user_phone1",
	};
	Object.freeze(mappings);
	
	var typings = {
		"country_id_fk" : "number",
		"createddatetime" : "date",
		"group_id_fk" : "number",
		"language_id_fk" : "number",
		"lastupdateddatetime" : "date",
		"region_id_fk" : "number",
		"softdeleteflag" : "number",
		"user_email_id" : "string",
		"user_emp_id_pk" : "string",
		"user_firstname" : "string",
		"user_lastname" : "string",
		"user_phone1" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"user_emp_id_pk",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "JourneyObjSvc",
		tableName : "user_tbl"
	};
	Object.freeze(config);
	
	return config;
})
