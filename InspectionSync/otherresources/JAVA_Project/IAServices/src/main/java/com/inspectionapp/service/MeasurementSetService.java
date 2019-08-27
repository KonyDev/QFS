package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.MeasurementSet;

public interface MeasurementSetService {

	String save(MeasurementSet AssetLocation);
   MeasurementSet get(String id);
   List<MeasurementSet> list();
   void update(String id, MeasurementSet book);
   void delete(String id);
}
