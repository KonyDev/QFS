package com.inspectionapp.dao;

import java.util.List;

import com.inspectionapp.model.Media;

public interface MediaDao {

	String save(Media asset);

	Media get(String id);

   List<Media> list();

   void update(String id, Media asset);

   void delete(String id);

}
