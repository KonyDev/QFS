package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.AssetLocationDao;
import com.inspectionapp.model.AssetLocation;

@Service
@Transactional(readOnly = true)
public class AssetLocationServiceImp implements AssetLocationService {

   @Autowired
   private AssetLocationDao assetLocationDao;

   public String save(AssetLocation assetLocation) {
      return assetLocationDao.save(assetLocation);
   }

   public AssetLocation get(String id) {
      return assetLocationDao.get(id);
   }

   public List<AssetLocation> list() {
      return assetLocationDao.list();
   }
   
   public void update(String id, AssetLocation assetLocation) {
	   assetLocationDao.update(id, assetLocation);
   }

   public void delete(String id) {
	   assetLocationDao.delete(id);
   }

}
