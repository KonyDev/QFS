package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.MeasurementRangeDao;
import com.inspectionapp.model.MeasurementRange;

@Service
@Transactional(readOnly = true)
public class MeasurementRangeServiceImp implements MeasurementRangeService {

   @Autowired
   private MeasurementRangeDao measurementRangeDao;

   public String save(MeasurementRange assetType) {
      return measurementRangeDao.save(assetType);
   }

   public MeasurementRange get(String id) {
      return measurementRangeDao.get(id);
   }

   public List<MeasurementRange> list() {
      return measurementRangeDao.list();
   }

   
   public void update(String id, MeasurementRange assetType) {
	   measurementRangeDao.update(id, assetType);
   }

   public void delete(String id) {
	   measurementRangeDao.delete(id);
   }

}
