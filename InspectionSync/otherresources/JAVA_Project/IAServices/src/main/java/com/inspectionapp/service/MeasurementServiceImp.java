package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.MeasurementDao;
import com.inspectionapp.model.Measurement;

@Service
@Transactional(readOnly = true)
public class MeasurementServiceImp implements MeasurementService {

   @Autowired
   private MeasurementDao measurementDao;

   public String save(Measurement assetType) {
      return measurementDao.save(assetType);
   }

   public Measurement get(String id) {
      return measurementDao.get(id);
   }

   public List<Measurement> list() {
      return measurementDao.list();
   }

   
   public void update(String id, Measurement assetType) {
	   measurementDao.update(id, assetType);
   }

   public void delete(String id) {
	   measurementDao.delete(id);
   }

}
