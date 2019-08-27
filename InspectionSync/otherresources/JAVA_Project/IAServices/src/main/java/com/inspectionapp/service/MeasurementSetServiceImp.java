package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.MeasurementSetDao;
import com.inspectionapp.model.MeasurementSet;

@Service
@Transactional(readOnly = true)
public class MeasurementSetServiceImp implements MeasurementSetService {

   @Autowired
   private MeasurementSetDao measurementSetDao;

   public String save(MeasurementSet assetType) {
      return measurementSetDao.save(assetType);
   }

   public MeasurementSet get(String id) {
      return measurementSetDao.get(id);
   }

   public List<MeasurementSet> list() {
      return measurementSetDao.list();
   }

   
   public void update(String id, MeasurementSet assetType) {
	   measurementSetDao.update(id, assetType);
   }

   public void delete(String id) {
	   measurementSetDao.delete(id);
   }

}
