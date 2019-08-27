package com.inspectionapp.service;

import java.util.List;

import com.inspectionapp.model.Media;

public interface MediaService {

	String save(Media AssetLocation);
	Media get(String id);
   List<Media> list();
   void update(String id, Media book);
   void delete(String id);
}
