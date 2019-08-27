package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.MeasurementImage;

public interface MeasurementImageDao {

	String save(MeasurementImage assetLocation);

	MeasurementImage get(String id);

   List<MeasurementImage> list();

   void update(String id, MeasurementImage asset);

   void delete(String id);

}
