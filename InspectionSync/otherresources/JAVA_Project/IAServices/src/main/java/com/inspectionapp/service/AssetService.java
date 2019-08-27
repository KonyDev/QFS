package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.Asset;

public interface AssetService {

   String save(Asset asset);
   Asset get(String id);
   List<Asset> list();
   List<Asset> listAssets();
   void update(String id, Asset book);
   void delete(String id);
}
