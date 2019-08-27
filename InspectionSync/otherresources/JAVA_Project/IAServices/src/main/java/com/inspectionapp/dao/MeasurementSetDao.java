package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.MeasurementSet;

public interface MeasurementSetDao {

	String save(MeasurementSet assetLocation);

   MeasurementSet get(String id);

   List<MeasurementSet> list();

   void update(String id, MeasurementSet asset);

   void delete(String id);

}
