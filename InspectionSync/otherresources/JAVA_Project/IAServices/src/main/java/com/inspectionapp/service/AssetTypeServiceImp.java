package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.AssetTypeDao;
import com.inspectionapp.model.AssetType;

@Service
@Transactional(readOnly = true)
public class AssetTypeServiceImp implements AssetTypeService {

   @Autowired
   private AssetTypeDao assetTypeDao;

   public String save(AssetType assetType) {
      return assetTypeDao.save(assetType);
   }

   public AssetType get(String id) {
      return assetTypeDao.get(id);
   }

   public List<AssetType> list() {
      return assetTypeDao.list();
   }

   
   public void update(String id, AssetType assetType) {
	   assetTypeDao.update(id, assetType);
   }

   public void delete(String id) {
	   assetTypeDao.delete(id);
   }

}
