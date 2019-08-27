package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.MeasurementRange;

public interface MeasurementRangeDao {

	String save(MeasurementRange assetLocation);

   MeasurementRange get(String id);

   List<MeasurementRange> list();

   void update(String id, MeasurementRange asset);

   void delete(String id);
}
