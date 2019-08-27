package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.InspectionMeasurement;

public interface InspectionMeasurementService {

   String save(InspectionMeasurement AssetLocation);
   InspectionMeasurement get(String id);
   List<InspectionMeasurement> list();
   void update(String id, InspectionMeasurement book);
   void delete(String id);
}
