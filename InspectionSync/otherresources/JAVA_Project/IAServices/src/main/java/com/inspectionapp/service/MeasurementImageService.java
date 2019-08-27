package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.MeasurementImage;

public interface MeasurementImageService {

   String save(MeasurementImage AssetLocation);
   MeasurementImage get(String id);
   List<MeasurementImage> list();
   void update(String id, MeasurementImage book);
   void delete(String id);
}
