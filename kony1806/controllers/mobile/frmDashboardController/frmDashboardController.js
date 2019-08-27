define({ 
  preshow:function(){
    this.view.notificationComponent.opacity =0;
    this.view.notificationComponent.isVisible = false;
    this.view.menuDFX.left = "-100%";
    //this.view.filter.isVisible = false;
    var tempData = [];
    tempData = [
      {
        "lblStatus":{text:"Pending Lockout",skin:"skinLblPendingLockout"},
        "img1":"power.png",
        "img2":"wave.png",
        "img3":"timer.png",
        "img4":{src:"",visible:false},
        "lblProjectTitle":"Mechanical Power Press",
        "lblTime":"2 Hours",
        "lblDueDate":"Due: 09/12/2018",
        "lblLine1":" ",
        "imgProject":"tile_1.png",
        "lblAddressTag":"Address",
        "lblAddress":"123 Backer Street",
        "lblFacilityTag":"Facility",
        "lblFacility":"1st Floor, Room H12",
        "lblLOtype":"",
        "lblLine2":" ",
        "lblTaskTag":"LO/TO Task",
        "lblTask":"Ensure electricity, steam and hydraulic energy sources are secured.",
        "flexCurrentlyWorking":{"visible":false},
        "lblCurrentlyWorkingTag":"",
        "imgCurrentlyWorking":{src:"",visible:false},
        "btnSeeDetails":"See Details"
      },{
        "lblStatus":{text:"Locked",skin:"skinLblLocked"},
        "img1":"powerf.png",
        "img2":"wavef.png",
        "img3":"timef.png",
        "img4":{src:"",visible:false},
        "lblProjectTitle":"Turbine Generator",
        "lblTime":"3 Hours",
        "lblDueDate":"Due: 09/12/2018",
        "lblLine1":" ",
        "imgProject":"turbinegenerator.png",
        "lblAddressTag":"Address",
        "lblAddress":"123 Backer Street",
        "lblFacilityTag":"Facility",
        "lblFacility":"1st Floor, Room 13B",
        "lblLOtype":"Lockbox",
        "lblLine2":" ",
        "lblTaskTag":"LO/TO Task",
        "lblTask":"Ensure heat and steam have disspated before processing.",
        "flexCurrentlyWorking":{"visible":true},
        "lblCurrentlyWorkingTag":"Currently Working",
        "imgCurrentlyWorking":{src:"group2.png",visible:true},
        "btnSeeDetails":"See Details"
      },{
        "lblStatus":{text:"Operational",skin:"skinLblOperational"},
        "img1":"power.png",
        "img2":"wave.png",
        "img3":"timer.png",
        "img4":{src:"",visible:false},
        "lblProjectTitle":"Mechanical Punch Press",
        "lblTime":"2 Hours",
        "lblDueDate":"Due: 09/12/2018",
        "lblLine1":" ",
        "imgProject":"mechinicalpunchpress.png",
        "lblLOtype":"",
        "lblAddressTag":"Address",
        "lblAddress":"123 Backer Street",
        "lblFacilityTag":"Facility",
        "lblFacility":"1st Floor, Room H12",
        "lblLine2":" ",
        "lblTaskTag":"LO/TO Task",
        "lblTask":"Ensure electricity, steam and hydraulic energy sources are secured.",
        "flexCurrentlyWorking":{"visible":false},
        "lblCurrentlyWorkingTag":"",
        "imgCurrentlyWorking":{src:"",visible:false},
        "btnSeeDetails":"See Details"
      },{
        "lblStatus":{text:"Locked",skin:"skinLblLocked"},
        "img1":"powerf.png",
        "img2":"wavef.png",
        "img3":"powerf.png",
        "img4":"wavef.png",
        "lblProjectTitle":"Mechanical Power Press",
        "lblTime":"3 Hours",
        "lblDueDate":"Due: 09/12/2018",
        "lblLine1":" ",
        "imgProject":"turbinegenerator.png",
        "lblLOtype":"Hasp Lock",
        "lblAddressTag":"Address",
        "lblAddress":"123 Corporate Dr, Chicago IL",
        "lblFacilityTag":"Facility",
        "lblFacility":"1st Floor, Chiller Room",
        "lblLine2":" ",
        "lblTaskTag":"LO/TO Task",
        "lblTask":"Ensure heat and steam have disspated before processing.",
        "flexCurrentlyWorking":{"visible":true},
        "lblCurrentlyWorkingTag":"Currently Working",
        "imgCurrentlyWorking":{src:"group2.png",visible:true},
        "btnSeeDetails":"See Details"
      },{
        "lblStatus":{text:"Pending Unlock",skin:"skinLblPendingUnlock"},
        "img1":"powerf.png",
        "img2":"wavef.png",
        "img3":"powerf.png",
        "img4":"wavef.png",
        "lblProjectTitle":"Mechanical Power Press",
        "lblTime":"3 Hours",
        "lblDueDate":"Due: 09/12/2018",
        "lblLOtype":"Hasp Lock",
        "lblLine1":" ",
        "imgProject":"tile_2.png",
        "lblAddressTag":"Address",
        "lblAddress":"123 Corporate Dr, Chicago IL",
        "lblFacilityTag":"Facility",
        "lblFacility":"1st Floor, Chiller Room",
        "lblLine2":" ",
        "lblTaskTag":"LO/TO Task",
        "lblTask":"Ensure heat and steam have disspated before processing.",
        "flexCurrentlyWorking":{"visible":true},
        "lblCurrentlyWorkingTag":"Currently Working",
        "imgCurrentlyWorking":{src:"profile.png",visible:true},
        "btnSeeDetails":"See Details"
      },{
        "lblStatus":{text:"Pending Unlock",skin:"skinLblPendingUnlock"},
        "img1":"powerf.png",
        "img2":"wavef.png",
        "img3":"powerf.png",
        "img4":"wavef.png",
        "lblProjectTitle":"Mechanical Power Press",
        "lblTime":"3 Hours",
        "lblDueDate":"Due: 09/12/2018",
        "lblLOtype":"Lockbox",
        "lblLine1":" ",
        "imgProject":"tile_2.png",
        "lblAddressTag":"Address",
        "lblAddress":"123 Corporate Dr, Chicago IL",
        "lblFacilityTag":"Facility",
        "lblFacility":"1st Floor, Chiller Room",
        "lblLine2":" ",
        "lblTaskTag":"LO/TO Task",
        "lblTask":"Ensure heat and steam have disspated before processing.",
        "flexCurrentlyWorking":{"visible":true},
        "lblCurrentlyWorkingTag":"Currently Working",
        "imgCurrentlyWorking":{src:"profile.png",visible:true},
        "btnSeeDetails":"See Details"
      },{
        "lblStatus":{text:"Locked",skin:"skinLblLocked"},
        "img1":"powerf.png",
        "img2":"wavef.png",
        "img3":"powerf.png",
        "img4":"wavef.png",
        "lblProjectTitle":"Mechanical Power Press",
        "lblLOtype":"Lockbox",
        "lblTime":"3 Hours",
        "lblDueDate":"Due: 09/12/2018",
        "lblLine1":" ",
        "imgProject":"turbinegenerator.png",
        "lblAddressTag":"Address",
        "lblAddress":"123 Backer Street",
        "lblFacilityTag":"Facility",
        "lblFacility":"1st Floor, Room H12",
        "lblLine2":" ",
        "lblTaskTag":"LO/TO Task",
        "lblTask":"Ensure heat and steam have disspated before processing.",
        "flexCurrentlyWorking":{"visible":true},
        "lblCurrentlyWorkingTag":"Currently Working",
        "imgCurrentlyWorking":{src:"group3.png",visible:true},
        "btnSeeDetails":"See Details"
      },{
        "lblStatus":{text:"Locked",skin:"skinLblLocked"},
        "img1":"powerf.png",
        "img2":"wavef.png",
        "img3":"powerf.png",
        "img4":"wavef.png",
        "lblLOtype":"Hasp Lock",
        "lblProjectTitle":"Mechanical Power Press",
        "lblTime":"3 Hours",
        "lblDueDate":"Due: 09/12/2018",
        "lblLine1":" ",
        "imgProject":"turbinegenerator.png",
        "lblAddressTag":"Address",
        "lblAddress":"325 Kirlin Walk Suite 007",
        "lblFacilityTag":"Facility",
        "lblFacility":"1st Floor, Room H12",
        "lblLine2":" ",
        "lblTaskTag":"LO/TO Task",
        "lblTask":"Ensure heat and steam have disspated before processing.",
        "flexCurrentlyWorking":{"visible":true},
        "lblCurrentlyWorkingTag":"Currently Working",
        "imgCurrentlyWorking":{src:"group3.png",visible:true},
        "btnSeeDetails":"See Details"
      }
    ];
    this.view.segDashboard.setData(tempData);
  },
  
  openHam:function(){
        this.view.menuDFX.animate(
    			kony.ui.createAnimation({
        		"100": {
            		"left": "0%",
            		"stepConfig": {
               			"timingFunction": kony.anim.EASE
            		},
				}
    			}), {
        			"delay": 0,
        			"iterationCount": 1,
        			"fillMode": kony.anim.FILL_MODE_FORWARDS,
        			"duration": 0.3
    			}, {
       				"animationEnd":""
    			}
            );  
      },
      closeHam:function(){
        this.view.menuDFX.animate(
    			kony.ui.createAnimation({
        		"100": {
            		"left": "-100%",
            		"stepConfig": {
               			"timingFunction": kony.anim.EASE
            		},
				}
    			}), {
        			"delay": 0,
        			"iterationCount": 1,
        			"fillMode": kony.anim.FILL_MODE_FORWARDS,
        			"duration": 0.3
    			}, {
       				"animationEnd":""
    			}
            );  
      },
  
  navToDetails:function(){
    var segData = this.view.segDashboard.selectedRowItems[0];
    //alert(segData)
    var paramData = {"key":0,"displayData":segData};
    var navObj = new kony.mvc.Navigation("frmProjectDetail");
    navObj.navigate(paramData);
  },
  
  applyFilters:function(){
    var navObj = new kony.mvc.Navigation("frmFilter");
    navObj.navigate();
  },
  
  
  animateNotification:function(){
    if(this.view.notificationComponent.opacity == 1){
      
      this.view.notificationComponent.animate(
    			kony.ui.createAnimation({
        		"100": {
            		"opacity": 0,
            		"stepConfig": {
               			"timingFunction": kony.anim.EASE
            		},
				}
    			}), {
        			"delay": 0,
        			"iterationCount": 1,
        			"fillMode": kony.anim.FILL_MODE_FORWARDS,
        			"duration": 0.3
    			}, {
       				"animationEnd":this.view.notificationComponent.setVisibility(false)
    			}
            );  
    }else{
      this.view.notificationComponent.setVisibility(true);
      this.view.notificationComponent.animate(
    			kony.ui.createAnimation({
        		"100": {
            		"opacity": 1,
            		"stepConfig": {
               			"timingFunction": kony.anim.EASE
            		},
				}
    			}), {
        			"delay": 0,
        			"iterationCount": 1,
        			"fillMode": kony.anim.FILL_MODE_FORWARDS,
        			"duration": 0.3
    			}, {
       				"animationEnd":""
    			}
            );  
    }
  }

 //Type your controller code here 

 });