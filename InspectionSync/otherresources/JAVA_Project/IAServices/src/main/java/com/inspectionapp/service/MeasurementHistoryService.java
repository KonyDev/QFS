package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.MeasurementHistory;
import com.inspectionapp.model.MeasurementHistoryRecord;

public interface MeasurementHistoryService {

	String save(MeasurementHistoryRecord AssetLocation);
   MeasurementHistory get(String id);
   List<MeasurementHistory> list();
   List<MeasurementHistory> listBySetId(String id);
   void update(String id, MeasurementHistory book);
   void delete(String id);
}
