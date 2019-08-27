package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.InspectionMeasurementDao;
import com.inspectionapp.model.InspectionMeasurement;

@Service
@Transactional(readOnly = true)
public class InspectionMeasurementServiceImp implements InspectionMeasurementService {

   @Autowired
   private InspectionMeasurementDao inspectionMeasurementDao;

   public String save(InspectionMeasurement assetType) {
      return inspectionMeasurementDao.save(assetType);
   }

   public InspectionMeasurement get(String id) {
      return inspectionMeasurementDao.get(id);
   }

   public List<InspectionMeasurement> list() {
      return inspectionMeasurementDao.list();
   }

   
   public void update(String id, InspectionMeasurement assetType) {
	   inspectionMeasurementDao.update(id, assetType);
   }

   public void delete(String id) {
	   inspectionMeasurementDao.delete(id);
   }

}
