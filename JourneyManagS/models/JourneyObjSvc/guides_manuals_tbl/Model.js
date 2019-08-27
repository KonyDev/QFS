define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		country_id_fk : function(val, state){
			state['country_id_fk'] = val;
		},
		createdby : function(val, state){
			state['createdby'] = val;
		},
		createddatetime : function(val, state){
			state['createddatetime'] = val;
		},
		guides_manuals_row_id_pk : function(val, state){
			state['guides_manuals_row_id_pk'] = val;
		},
		guide_manual_title : function(val, state){
			state['guide_manual_title'] = val;
		},
		guide_manual_url : function(val, state){
			state['guide_manual_url'] = val;
		},
		language_id_fk : function(val, state){
			state['language_id_fk'] = val;
		},
		lastupdatedby : function(val, state){
			state['lastupdatedby'] = val;
		},
		lastupdateddatetime : function(val, state){
			state['lastupdateddatetime'] = val;
		},
		region_id_fk : function(val, state){
			state['region_id_fk'] = val;
		},
		softdeleteflag : function(val, state){
			state['softdeleteflag'] = val;
		},
	};
	
	
	//Create the Model Class
	function guides_manuals_tbl(defaultValues){
		var privateState = {};
			privateState.country_id_fk = defaultValues?(defaultValues["country_id_fk"]?defaultValues["country_id_fk"]:null):null;
			privateState.createdby = defaultValues?(defaultValues["createdby"]?defaultValues["createdby"]:null):null;
			privateState.createddatetime = defaultValues?(defaultValues["createddatetime"]?defaultValues["createddatetime"]:null):null;
			privateState.guides_manuals_row_id_pk = defaultValues?(defaultValues["guides_manuals_row_id_pk"]?defaultValues["guides_manuals_row_id_pk"]:null):null;
			privateState.guide_manual_title = defaultValues?(defaultValues["guide_manual_title"]?defaultValues["guide_manual_title"]:null):null;
			privateState.guide_manual_url = defaultValues?(defaultValues["guide_manual_url"]?defaultValues["guide_manual_url"]:null):null;
			privateState.language_id_fk = defaultValues?(defaultValues["language_id_fk"]?defaultValues["language_id_fk"]:null):null;
			privateState.lastupdatedby = defaultValues?(defaultValues["lastupdatedby"]?defaultValues["lastupdatedby"]:null):null;
			privateState.lastupdateddatetime = defaultValues?(defaultValues["lastupdateddatetime"]?defaultValues["lastupdateddatetime"]:null):null;
			privateState.region_id_fk = defaultValues?(defaultValues["region_id_fk"]?defaultValues["region_id_fk"]:null):null;
			privateState.softdeleteflag = defaultValues?(defaultValues["softdeleteflag"]?defaultValues["softdeleteflag"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"country_id_fk" : {
					get : function(){return privateState.country_id_fk},
					set : function(val){
						setterFunctions['country_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createdby" : {
					get : function(){return privateState.createdby},
					set : function(val){
						setterFunctions['createdby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"createddatetime" : {
					get : function(){return privateState.createddatetime},
					set : function(val){
						setterFunctions['createddatetime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"guides_manuals_row_id_pk" : {
					get : function(){return privateState.guides_manuals_row_id_pk},
					set : function(val){throw Error("guides_manuals_row_id_pk cannot be changed."); },
					enumerable : true,
				},
				"guide_manual_title" : {
					get : function(){return privateState.guide_manual_title},
					set : function(val){
						setterFunctions['guide_manual_title'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"guide_manual_url" : {
					get : function(){return privateState.guide_manual_url},
					set : function(val){
						setterFunctions['guide_manual_url'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"language_id_fk" : {
					get : function(){return privateState.language_id_fk},
					set : function(val){
						setterFunctions['language_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastupdatedby" : {
					get : function(){return privateState.lastupdatedby},
					set : function(val){
						setterFunctions['lastupdatedby'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"lastupdateddatetime" : {
					get : function(){return privateState.lastupdateddatetime},
					set : function(val){
						setterFunctions['lastupdateddatetime'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"region_id_fk" : {
					get : function(){return privateState.region_id_fk},
					set : function(val){
						setterFunctions['region_id_fk'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"softdeleteflag" : {
					get : function(){return privateState.softdeleteflag},
					set : function(val){
						setterFunctions['softdeleteflag'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(guides_manuals_tbl);
	
	//Create new class level validator object
	BaseModel.Validator.call(guides_manuals_tbl);
	
	var registerValidatorBackup = guides_manuals_tbl.registerValidator;
	
	guides_manuals_tbl.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( guides_manuals_tbl.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	
	var relations = [
	];
	
	guides_manuals_tbl.relations = relations;
	
	guides_manuals_tbl.prototype.isValid = function(){
		return guides_manuals_tbl.isValid(this);
	};
	
	guides_manuals_tbl.prototype.objModelName = "guides_manuals_tbl";
	
	return guides_manuals_tbl;
});