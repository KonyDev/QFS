define({ 
  onNavigate:function(param){
    if(param.key == "Pending Lockout"){
      this.view.headerDFX.text = "Mechanical Power Press";
      this.view.lblStatus.text = "Locked";
      this.view.lblStatus.skin = "skinLblLocked";
      this.view.img1.src = "powerf.png";
      this.view.img2.src = "wavef.png";
      this.view.img3.src = "powerf.png";
      this.view.img4.src = "wavef.png";
      this.view.lblProjectTitle.text = "Mechanical Power Press";
      this.view.lblTime.text = "2 Hours";
      this.view.imgProject.src = "tile_1.png";
      this.view.flexLOTOTask.isVisible = false;
      this.view.flexSupervisorDet.isVisible = true;
      this.view.lblSupervisor.text = "John Green";
      this.view.imgSupervisor.src = "profile.png";
      this.view.lblLOType.text = "LO/TO type";
      this.view.imgLockType.src = "lockhasp.png";
      this.view.lblLockType.text = "Hasp";
      this.view.lblAddress.text = "123 Backer Street";
      this.view.lblAssetLocation.text = "1st Floor, Room H12";
      this.view.lblComplete.text = "Lockout on Asset 5AS745 successfully completed!";
      this.view.lblDue.text = "Due: 09/12/18";
    }else if(param.key == "Operational"){
      this.view.headerDFX.text = "Mechanical Punch Press";
      this.view.lblStatus.text = "Pending Lockout";
      this.view.lblStatus.skin = "skinLblPendingLockout";
      this.view.img1.src = "power.png";
      this.view.img2.src = "wave.png";
      this.view.img3.src = "timer.png";
      this.view.img4.src = "";
      this.view.lblProjectTitle.text = "Mechanical Punch Press";
      this.view.lblTime.text = "2 Hours";
      this.view.imgProject.src = "tile_1.png";
      this.view.flexLOTOTask.isVisible = true;
      this.view.flexSupervisorDet.isVisible = false;
      this.view.lblAddress.text = "123 Backer Street";
      this.view.lblAssetLocation.text = "1st Floor, Room H12";
      this.view.lblComplete.text = "Lockout on Asset 5AS745 successfully requested!";
      this.view.lblDue.text = "Due: 09/12/18";
    }else if(param.key == "Pending Unlock"){
      this.view.headerDFX.text = "Mechanical Power Press";
      this.view.lblStatus.text = "Operational";
      this.view.lblStatus.skin = "skinLblOperational";
      this.view.img1.src = "power.png";
      this.view.img2.src = "wave.png";
      this.view.img3.src = "power.png";
      this.view.img4.src = "wave.png";
      this.view.lblProjectTitle.text = "Mechanical Power Press";
      this.view.lblTime.text = "2 Hours";
      this.view.imgProject.src = "tile_1.png";
      this.view.flexLOTOTask.isVisible = true;
      this.view.flexSupervisorDet.isVisible = false;
      this.view.lblAddress.text = "123 Backer Street";
      this.view.lblAssetLocation.text = "1st Floor, Room H12";
      this.view.lblComplete.text = "Unlock/Untag on Asset 5AS745 successfully completed!";
      this.view.lblDue.text = "Due: 09/12/18";
    }else if(param.key == "Remove Lock"){
      this.view.headerDFX.text = "Mechanical Power Press";
      this.view.lblStatus.text = "Locked";
      this.view.lblStatus.skin = "skinLblLocked";
      this.view.img1.src = "power.png";
      this.view.img2.src = "wave.png";
      this.view.img3.src = "power.png";
      this.view.img4.src = "wave.png";
      this.view.lblProjectTitle.text = "Mechanical Power Press";
      this.view.lblTime.text = "2 Hours";
      this.view.imgProject.src = "tile_1.png";
      this.view.flexLOTOTask.isVisible = false;
      this.view.flexSupervisorDet.isVisible = true;
      this.view.lblSupervisor.text = "An James";
      this.view.imgSupervisor.src = "profile_2.png";
      this.view.lblLOType.text = "Unlock/Untag Type";
      this.view.imgLockType.src = "lock_1.png";
      this.view.lblLockType.text = "Lockbox";
      this.view.lblAddress.text = "123 Backer Street";
      this.view.lblAssetLocation.text = "1st Floor, Room H12";
      this.view.lblComplete.text = "Unlock/Untag on Asset 5AS745 successfully completed!";
      this.view.lblDue.text = "Due: 09/12/18";
    }else if(param.key == "Remove Hasp"){
      this.view.headerDFX.text = "Mechanical Power Press";
      this.view.lblStatus.text = "Locked";
      this.view.lblStatus.skin = "skinLblLocked";
      this.view.img1.src = "power.png";
      this.view.img2.src = "wave.png";
      this.view.img3.src = "power.png";
      this.view.img4.src = "wave.png";
      this.view.lblProjectTitle.text = "Mechanical Power Press";
      this.view.lblTime.text = "2 Hours";
      this.view.imgProject.src = "tile_1.png";
      this.view.flexLOTOTask.isVisible = false;
      this.view.flexSupervisorDet.isVisible = true;
      this.view.lblSupervisor.text = "An James";
      this.view.imgSupervisor.src = "profile_2.png";
      this.view.lblLOType.text = "Unlock/Untag Type";
      this.view.imgLockType.src = "lockhasp.png";
      this.view.lblLockType.text = "Hasp Lock";
      this.view.lblAddress.text = "123 Backer Street";
      this.view.lblAssetLocation.text = "1st Floor, Room H12";
      this.view.lblComplete.text = "Unlock/Untag on Asset 5AS745 successfully completed!";
      this.view.lblDue.text = "Due: 09/12/18";
    }
    this.view.menuDFX.left = "-100%";
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
  navToDashboard:function(){
    var navObj = new kony.mvc.Navigation("frmDashboard");
    navObj.navigate();
  }

 //Type your controller code here 

 });