package com.inspectionapp.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inspectionapp.dao.MeasurementHistoryDao;
import com.inspectionapp.dao.MeasurementImageDao;
import com.inspectionapp.dao.MediaDao;
import com.inspectionapp.model.MeasurementHistory;
import com.inspectionapp.model.MeasurementHistoryRecord;
import com.inspectionapp.model.MeasurementImage;
import com.inspectionapp.model.Media;

@Service
@Transactional(readOnly = true)
public class MeasurementHistoryServiceImp implements MeasurementHistoryService {

	@Autowired
	private MeasurementHistoryDao measurementHistoryDao;
	
	@Autowired
	private MediaDao mediaDao;
	
	@Autowired
	private MeasurementImageDao measurementImageDao;
	
	Random rand = new Random();

	public String save(MeasurementHistoryRecord measurementRecord) {
		MeasurementHistory measurementHistory = new MeasurementHistory();
		measurementHistory.setInspection_Id(measurementRecord.getInspection_Id());
		measurementHistory.setInspection_Timestamp(measurementRecord.getInspection_Timestamp());
		measurementHistory.setInspection_Value(measurementRecord.getInspection_Value());
		measurementHistory.setMeasurement_Range_Id(measurementRecord.getMeasurement_Range_Id());
		measurementHistory.setMeasurement_Set_Id(measurementRecord.getMeasurement_Set_Id());
		measurementHistory.setResponse_Type(measurementRecord.getResponse_Type());
		
		measurementHistory.setMeasurement_History_Id("mhr");
		
		List<String> imageURLs= measurementRecord.getMediaUrls();
		List<String> media_ids = new ArrayList<String>();
		for(String url:imageURLs)
		{
			
			Media media = new Media();
			media.setUrl(url);
			media.setExtension("jpg");
			media.setmedia_id("media"+rand.nextInt(50000) + 1);
			media.setTimestamp(new Date());
			media.setType("image");
			String mediaId=mediaDao.save(media);
			String media_id ="Media0000";
			media_id=media_id.substring(0,9-mediaId.length())+mediaId;
			media_ids.add(media_id);
		}
		String measurementHistoryId=measurementHistoryDao.save(measurementHistory);
		String measurement_history_id ="MeasHist0000";
		measurement_history_id=measurement_history_id.substring(0,12-measurementHistoryId.length())+measurementHistoryId;
		for(String media_id:media_ids)
		{
			MeasurementImage measurementImage= new MeasurementImage();
			measurementImage.setMedia_id(media_id);
			measurementImage.setMeasurement_History_Id(measurement_history_id);
			measurementImageDao.save(measurementImage);
		}
		return measurement_history_id;
	}

	public MeasurementHistory get(String id) {
		return measurementHistoryDao.get(id);
	}

	public List<MeasurementHistory> list() {
		return measurementHistoryDao.list();
	}


	public void update(String id, MeasurementHistory assetType) {
		measurementHistoryDao.update(id, assetType);
	}

	public void delete(String id) {
		measurementHistoryDao.delete(id);
	}

	public List<MeasurementHistory> listBySetId(String id) {
		List<MeasurementHistory> measurementHistorys = measurementHistoryDao.listBySetId(id);
		return measurementHistorys;//measurementHistoryDao.listByRangeId(id);
	}

}
