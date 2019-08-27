package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.GroupNameDao;
import com.inspectionapp.model.GroupName;

@Service
@Transactional(readOnly = true)
public class GroupNameServiceImp implements GroupNameService {

   @Autowired
   private GroupNameDao groupNameDao;

   public String save(GroupName assetLocation) {
      return groupNameDao.save(assetLocation);
   }

   public GroupName get(String id) {
      return groupNameDao.get(id);
   }

   public List<GroupName> list() {
      return groupNameDao.list();
   }
   
   public void update(String id, GroupName assetLocation) {
	   groupNameDao.update(id, assetLocation);
   }

   public void delete(String id) {
	   groupNameDao.delete(id);
   }

}
