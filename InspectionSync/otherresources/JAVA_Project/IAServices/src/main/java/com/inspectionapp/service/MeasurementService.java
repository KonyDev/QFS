package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.Measurement;

public interface MeasurementService {

	String save(Measurement AssetLocation);
   Measurement get(String id);
   List<Measurement> list();
   void update(String id, Measurement book);
   void delete(String id);
}
