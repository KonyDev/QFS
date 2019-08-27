package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.Measurement;

public interface MeasurementDao {

	String save(Measurement assetLocation);

   Measurement get(String id);

   List<Measurement> list();

   void update(String id, Measurement asset);

   void delete(String id);

}
