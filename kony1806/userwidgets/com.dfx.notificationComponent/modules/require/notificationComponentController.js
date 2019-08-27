define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
      setDataToSegment:function(){
        var tempData = [];
        tempData= [
          [{"lblHeader":"New","lblLine1":" "},
           [{
             "imgPic":"profile_1.png",
             "rtxtMessage":"<b>Blake Campbell</b> unlocked <b>Mechanical Power Press</b>",
             "btnPendingUnlock":{"text":" ","visible":false},
             "lblTime":"54 minutes ago",
             "imgLock":"lock.png",
             "lblLine1":" "
           }]
          ],[{"lblHeader":"Earlier","lblLine1":" "},
           [{
             "imgPic":"profile_1.png",
             "rtxtMessage":"<b>Blake Campbell</b> unlocked <b>Mechanical Power Press</b>",
             "btnPendingUnlock":{"text":" ","visible":false},
             "lblTime":"2 hours ago",
             "imgLock":"lock.png",
             "lblLine1":" "
           },{
             "imgPic":"profile_2.png",
             "rtxtMessage":"<b>Lockout</b> has been requested by <b>An James</b>",
             "btnPendingUnlock":{"text":" ","visible":false},
             "lblTime":"3 hours ago",
             "imgLock":"lock.png",
             "lblLine1":" "
           },{
             "imgPic":"profile.png",
             "rtxtMessage":"<b>John Wild</b> left a comment on <b>Group Lockbox</b>",
             "btnPendingUnlock":{"text":" ","visible":false},
             "lblTime":"3 hours ago",
             "imgLock":"lock.png",
             "lblLine1":" "
           },{
             "imgPic":"profile.png",
             "rtxtMessage":"<b>John Wild</b> locked out <b>Mechanical Power Press</b>",
             "btnPendingUnlock":{"text":" ","visible":false},
             "lblTime":"3 hours ago",
             "imgLock":"lock.png",
             "lblLine1":" "
           },{
             "imgPic":"tile_1.png",
             "rtxtMessage":"<b>Turbine Generator</b> changed stattus to",
             "btnPendingUnlock":{"text":"Pending Unlock","visible":true},
             "lblTime":"Yesterday",
             "imgLock":"",
             "lblLine1":" "
           },{
             "imgPic":"profile_1.png",
             "rtxtMessage":"<b>Blake Campbell</b> unlocked <b>Turbine Generator</b>",
             "btnPendingUnlock":{"text":" ","visible":false},
             "lblTime":"Yesterday",
             "imgLock":"lock.png",
             "lblLine1":" "
           },{
             "imgPic":"profile_2.png",
             "rtxtMessage":"<b>An James</b> unlocked <b>Turbine Generator</b>",
             "btnPendingUnlock":{"text":" ","visible":false},
             "lblTime":"Yesterday",
             "imgLock":"lock.png",
             "lblLine1":" "
           }]
          ]
        ];
         
        this.view.segNotification.setData(tempData);
      },
      
	};
});