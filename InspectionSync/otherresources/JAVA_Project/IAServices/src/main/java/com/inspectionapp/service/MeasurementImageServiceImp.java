package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.MeasurementImageDao;
import com.inspectionapp.model.MeasurementImage;

@Service
@Transactional(readOnly = true)
public class MeasurementImageServiceImp implements MeasurementImageService {

   @Autowired
   private MeasurementImageDao measurementImageDao;

   public String save(MeasurementImage assetType) {
      return measurementImageDao.save(assetType);
   }

   public MeasurementImage get(String id) {
      return measurementImageDao.get(id);
   }

   public List<MeasurementImage> list() {
      return measurementImageDao.list();
   }
   
   public void update(String id, MeasurementImage assetType) {
	   measurementImageDao.update(id, assetType);
   }

   public void delete(String id) {
	   measurementImageDao.delete(id);
   }

}
