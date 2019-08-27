package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.InspectionMeasurement;

public interface InspectionMeasurementDao {

	String save(InspectionMeasurement assetLocation);

	InspectionMeasurement get(String id);

   List<InspectionMeasurement> list();

   void update(String id, InspectionMeasurement asset);

   void delete(String id);

}
