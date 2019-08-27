package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.MeasurementHistory;

public interface MeasurementHistoryDao {

	String save(MeasurementHistory assetLocation);

   MeasurementHistory get(String id);

   List<MeasurementHistory> list();
   
   List<MeasurementHistory> listBySetId(String id);

   void update(String id, MeasurementHistory asset);

   void delete(String id);

}
