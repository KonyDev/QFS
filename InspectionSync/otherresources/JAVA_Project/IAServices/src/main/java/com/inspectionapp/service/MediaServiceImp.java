package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.MediaDao;
import com.inspectionapp.model.Media;

@Service
@Transactional(readOnly = true)
public class MediaServiceImp implements MediaService {

   @Autowired
   private MediaDao mediaDao;

   public String save(Media assetType) {
      return mediaDao.save(assetType);
   }

   public Media get(String id) {
      return mediaDao.get(id);
   }

   public List<Media> list() {
      return mediaDao.list();
   }

   
   public void update(String id, Media assetType) {
	   mediaDao.update(id, assetType);
   }

   public void delete(String id) {
	   mediaDao.delete(id);
   }

}
