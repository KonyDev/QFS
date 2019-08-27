package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.MeasurementRange;

public interface MeasurementRangeService {

	String save(MeasurementRange AssetLocation);
   MeasurementRange get(String id);
   List<MeasurementRange> list();
   void update(String id, MeasurementRange book);
   void delete(String id);
}
