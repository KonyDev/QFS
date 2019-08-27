package com.inspectionapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.InspectionUserDao;
import com.inspectionapp.model.InspectionUser;

@Service
@Transactional(readOnly = true)
public class InspectionUserServiceImp implements InspectionUserService {

	@Autowired
	private InspectionUserDao inspectionUserDao;

	public String save(InspectionUser assetLocation) {
		return inspectionUserDao.save(assetLocation);
	}

	public InspectionUser get(String id) {
		return inspectionUserDao.get(id);
	}

	public List<InspectionUser> list() {
		return inspectionUserDao.list();
	}

	public void update(String id, InspectionUser assetLocation) {
		inspectionUserDao.update(id, assetLocation);
	}

	public void delete(String id) {
		inspectionUserDao.delete(id);
	}

	public InspectionUser getByEmailId(String id) {
		return inspectionUserDao.getUserByEmailId(id);
	}

}
