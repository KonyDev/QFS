package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.AssetDao;
import com.inspectionapp.model.Asset;

@Service
@Transactional(readOnly = true)
public class AssetServiceImp implements AssetService {

   @Autowired
   private AssetDao assetDao;

   public String save(Asset asset) {
      return assetDao.save(asset);
   }

   public Asset get(String id) {
      return assetDao.get(id);
   }

   public List<Asset> list() {
      return assetDao.list();
   }

   
   public void update(String id, Asset asset) {
	   assetDao.update(id, asset);
   }

   
   public void delete(String id) {
	   assetDao.delete(id);
   }

public List<Asset> listAssets() {
	return assetDao.getOnlyAsset();
}

}
