package com.inspectionapp.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.inspectionapp.model.Asset;
import com.inspectionapp.model.ResultResponse;
import com.inspectionapp.model.AssetHistory;
import com.inspectionapp.model.AssetType;
import com.inspectionapp.model.Inspection;
import com.inspectionapp.model.InspectionHistoryRecord;
import com.inspectionapp.model.InspectionMeasurementMapping;
import com.inspectionapp.model.InspectionUser;
import com.inspectionapp.model.MeasurementHistory;
import com.inspectionapp.model.MeasurementRange;
import com.inspectionapp.service.AssetService;
import com.inspectionapp.service.AssetTypeService;
import com.inspectionapp.service.InspectionService;
import com.inspectionapp.service.InspectionUserService;
import com.inspectionapp.service.MeasurementHistoryService;
import com.inspectionapp.service.MeasurementRangeService;

@RestController
@Transactional
public class InspectionController {

	@Autowired
	private AssetService assetService;

	@Autowired
	private InspectionService inspectionService;

	@Autowired
	private InspectionUserService inspectionUserService;

	@Autowired
	private AssetTypeService assetTypeService;

	@Autowired
	private MeasurementRangeService measurementRangeService;

	@Autowired
	private MeasurementHistoryService measurementHistoryService;

	@GetMapping("/assets/{id}")
	public ResponseEntity<Asset> get(@PathVariable("id") String id) {
		Asset asset = assetService.get(id);
		return ResponseEntity.ok().body(asset);
	}

	@GetMapping("/assets")
	public ResponseEntity<List<Asset>> list() {
		List<Asset> assets = assetService.list();
		return ResponseEntity.ok().body(assets);
	}

	@PostMapping("/assets")
	public ResponseEntity<?> save(@RequestBody Asset asset) {
		String id = assetService.save(asset);
		return ResponseEntity.ok().body(id);
	}

	@PutMapping("/assets/{id}")
	public ResponseEntity<?> update(@PathVariable("id") String id, @RequestBody Asset asset) {
		assetService.update(id, asset);
		return ResponseEntity.ok().body("Asset has been updated successfully.");
	}

	@DeleteMapping("/assets/{id}")
	public ResponseEntity<?> delete(@PathVariable("id") String id) {
		assetService.delete(id);
		return ResponseEntity.ok().body("Asset has been deleted successfully.");
	}

	@GetMapping("/inspections")
	public ResponseEntity<List<Inspection>> listInspection() {
		List<Inspection> assets = inspectionService.list();
		return ResponseEntity.ok().body(assets);
	}

	@GetMapping("/inspections/{id}")
	public ResponseEntity<List<Inspection>> getInspectionsById(@PathVariable("id") String id) {
		List<Inspection> asset = inspectionService.assignedInspections(id);
		return ResponseEntity.ok().body(asset);
	}

	@GetMapping("/users")
	public ResponseEntity<List<InspectionUser>> listUsers() {
		List<InspectionUser> assets = inspectionUserService.list();
		return ResponseEntity.ok().body(assets);
	}

	@GetMapping("/users/{id}")
	public ResponseEntity<InspectionUser> getUsersById(@PathVariable("id") String id) {
		InspectionUser asset = inspectionUserService.getByEmailId(id);
		return ResponseEntity.ok().body(asset);
	}

	@PostMapping("/inspection")
	public ResponseEntity<ResultResponse> saveInspection(@RequestBody InspectionMeasurementMapping inspection) {
		String id = inspectionService.save(inspection);
		ResultResponse rr = new ResultResponse();
		rr.setId(id);
		return ResponseEntity.ok().body(rr);
	}

	@GetMapping("/assettypes")
	public ResponseEntity<List<AssetType>> listtype() {
		List<AssetType> assets = assetTypeService.list();
		return ResponseEntity.ok().body(assets);
	}

	@GetMapping("/measurementranges")
	public ResponseEntity<List<MeasurementRange>> measurementRangeList() {
		List<MeasurementRange> measurementRangeList = measurementRangeService.list();
		return ResponseEntity.ok().body(measurementRangeList);
	}

	@GetMapping("/measurementhistory")
	public ResponseEntity<List<MeasurementHistory>> measurementHistoryList() {
		List<MeasurementHistory> measurementHistoryList = measurementHistoryService.list();
		return ResponseEntity.ok().body(measurementHistoryList);
	}

	@GetMapping("/measurementhistory/{measurement_set_id}")
	public ResponseEntity<List<MeasurementHistory>> measurementHistoryListBySetId(@PathVariable("measurement_set_id") String measurement_set_id) {
		List<MeasurementHistory> measurementHistoryList = measurementHistoryService.listBySetId(measurement_set_id);
		return ResponseEntity.ok().body(measurementHistoryList);
	}

	@GetMapping("/inspectionhistory/{asset_id}")
	public ResponseEntity<AssetHistory> inspectionHistoryList(@PathVariable("asset_id") String asset_id) {
		AssetHistory assetHistory = inspectionService.inspectionHistoryList(asset_id);
		return ResponseEntity.ok().body(assetHistory);
	}

	@PostMapping("/inspectionHistory")
	public ResponseEntity<ResultResponse> saveMeasurementHistory(@RequestBody InspectionHistoryRecord inspectionHistoryRecord) {
		inspectionService.saveInspectionHistory(inspectionHistoryRecord);
		ResultResponse rr = new ResultResponse();
		rr.setId(inspectionHistoryRecord.getInspection_Id());
		return ResponseEntity.ok().body(rr);
	}


	@SuppressWarnings("unchecked")
	@PostMapping("/googledistance")
	public ResponseEntity<?> inspectionList(@RequestBody String latlons) throws IOException, ParseException {
		JSONParser parser = new JSONParser();

		JSONObject js= (JSONObject) parser.parse(latlons);
		JSONObject source = (JSONObject) js.get("source");
		JSONArray jsdest = (JSONArray) js.get("destinations");
		JSONArray result = new JSONArray();
		for(int i=0;i<jsdest.size();i++)
		{
			JSONObject destwithdistance = new JSONObject();
			destwithdistance = (JSONObject) jsdest.get(i);
			URL url = new URL("https://graphhopper.com/api/1/route?point="+source.get("lat")+","+source.get("long")+"&point="+destwithdistance.get("lat")+","+destwithdistance.get("long")+"&vehicle=car&locale=en&key=1d54b8d7-337a-42b5-b5a7-f26671de2150");
			URLConnection connection = url.openConnection();
			connection.setDoOutput(true);
			InputStream in = connection.getInputStream();
			BufferedReader res = new BufferedReader(new InputStreamReader(in, "UTF-8"));
			StringBuffer sBuffer = new StringBuffer();
			String inputLine;
			while ((inputLine = res.readLine()) != null)
				sBuffer.append(inputLine);
			res.close();
			JSONParser parse = new JSONParser();
			JSONObject resObj = (JSONObject) parse.parse(sBuffer.toString());
			JSONObject paths = (JSONObject) ((JSONArray)resObj.get("paths")).get(0);
			Double distinkm = ((Double)paths.get("distance")/1000);
			DecimalFormat df2 = new DecimalFormat(".##");
			destwithdistance.put("distance",  df2.format(distinkm) + " km");
			result.add(destwithdistance);
		}
		return ResponseEntity.ok().body(result.toString());
	}

	@PostMapping("/login")
	public ResponseEntity<String> save(HttpServletRequest request,
			HttpServletResponse response) {
		HashMap<String, Object> loginResp = new HashMap<String, Object>();
		HashMap<String, Object> json = new HashMap<String, Object>();

		String userId,password;
		StringBuilder strbldr = new StringBuilder();
		String reqline;
		try {
			request.getReader().reset();
			while ((reqline = request.getReader().readLine()) != null) {
				strbldr.append(reqline);
			}
			System.out.println("sb is "+strbldr.toString());
			JSONParser parser = new JSONParser();
			JSONObject jsonobj;
			try {
				jsonobj = (JSONObject)parser.parse(strbldr.toString());
				userId = (String)jsonobj.get("userid");
				password = (String)jsonobj.get("password");
			} catch (ParseException e) {
				e.printStackTrace();
				return null;
			}
		} catch (IOException e) {
			e.printStackTrace();
			return null;

		}

		JSONObject validatedInfo = isValidLogin(userId,password);
		if(validatedInfo != null && (Boolean) validatedInfo.get("isValid")){
			String userRole = (String) validatedInfo.get("role");
			
			HttpSession session = request.getSession(false);
			if (session == null){
				System.out.println("Session is null. So creating a new session");
				session = request.getSession(true);
			}
			else {
				System.out.println("Session is NOT null. Invalidating it to create a new one");
				session.invalidate();
				session = request.getSession(true);
			}
			session.setAttribute("username",userId );
			session.setAttribute("userrole", userRole);
			session.setAttribute("security_token", session.getId());
			loginResp.put("security_token", session.getId());
			loginResp.put("userid",validatedInfo.get("userid") );
			loginResp.put("userrole", userRole);
			loginResp.put("firstName", (String)validatedInfo.get("first_name"));
			loginResp.put("lastName", (String)validatedInfo.get("last_name"));
			loginResp.put("email", (String) validatedInfo.get("email"));
			json.put("message", loginResp);
			json.put("loginStatus", "Success");
		}
		else {
			json.put("loginStatus", "Failed");
		}		   

		String data = "";
		try {
			ObjectMapper mapper = new ObjectMapper();
			data  = mapper.writeValueAsString(json);
		} catch (Exception e) { 
		}
		System.out.println("Response Body is "+data);
		if(json.get("loginStatus").equals("Failed"))
		{
			return (new ResponseEntity<String>(data, null, HttpStatus.BAD_REQUEST));
		}
		else
		{
			return (new ResponseEntity<String>(data, null, HttpStatus.OK));
		}

	}

	@SuppressWarnings({ "unchecked"})
	public JSONObject isValidLogin(String emailid, String password)
	{
		JSONObject result = new JSONObject();
		InspectionUser inspectionUser=null;
		try
		{
			inspectionUser = inspectionUserService.getByEmailId(emailid);
		}catch(Exception e)
		{
			e.printStackTrace();
			return null;
		}
			
		if(inspectionUser!=null && inspectionUser.getPassword().equals(password))
		{
			result.put("isValid", true);
			result.put("role", inspectionUser.getRole());
			result.put("first_name", inspectionUser.getFirstName());
			result.put("last_name", inspectionUser.getLastName());
			result.put("email", inspectionUser.getEmail());
			result.put("userid", inspectionUser.getUser_Id());
			return result;
		}
		return null;
	}
}