define({ 


  //Type your controller code here 
  doLogin:function()
  {
    var options = {};
    try{
      options["userid"]=this.view.tbxEmailId.text;
      options["password"]=this.view.tbxPassword.text;
      this.authClient = KNYMobileFabric.getIdentityService("InspCustomLogin");
      kony.print("invoking identity call");
       this.authClient.login(options, this.loginSuccessCallBack.bind(this), this.failureCallBack.bind(this));
    }
    catch(excp){
       debugger;
      alert("Exception occured in login: "+excp);
      kony.print("#### Exception occured while trying to login ####:"+JSON.stringify(excp));
    }
   // options.browserWidget = this.view.brwLogin;   
  },
  loginSuccessCallBack:function(response)
  {
    kony.print("loginSuccessCallBack ::"+JSON.stringify(response));
    //Below code to fetch login user profile details
    this.authClient.getUserAttributes(function(result) {
     try
      {
        debugger;
        kony.print("getUserAttributes Result ::"+JSON.stringify(result));
        UserCredentials.UserEmail = result.user_id;
        UserCredentials.UserFirstName = result.firstName;
        UserCredentials.UserLastName = result.lastName;
        UserCredentials.UserEmpId = result.email;
        UserCredentials.role=result.user_role;
        kony.print("getUserAttributes Result ::"+JSON.stringify(UserCredentials));
        if(result.user_role === "Admin"){
            var x = new kony.mvc.Navigation("frmJourneyList");
            x.navigate();
        }
        else{
          alert("user doesn't have admin previlages");
        }
       // this.getUserGroups();
      }
      catch(err)
      {
        alert(err.message);
      }
    }.bind(this), function(error) {
      alert("failure callback for getUserAttributes. Error :"+JSON.stringify(error));
    }.bind(this));
    
  },
  failureCallBack:function(error)
  {
    alert("failureCallBack"+error);
  },


  getUserGroups : function()
  {
    integrationObj = KNYMobileFabric.getIntegrationService("journeyGroupSvc");
    data= {};
    headers= {};
    integrationObj.invokeOperation("getUserGroups", headers, data, this.getUserGroupsSuccessCallBack.bind(this), this.getUserGroupsFailure.bind(this));
  },
  getUserGroupsSuccessCallBack:function (record){
    kony.print("response ::"+JSON.stringify(record));
    userGroups=record;
    kony.print("userGroups response ::"+JSON.stringify(record));

   this.fetchUserGroupsfromDB();
   // var x = new kony.mvc.Navigation("frmJourneyList");
    //x.navigate();

  },
  getUserGroupsFailure:function (error){
    kony.print("getUserGroupsFailure");
  },


  fetchUserGroupsfromDB : function()
  {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject("ad_group_master_tbl");
    //var odataUrl = "$orderby="+"group_id_pk"+" desc";
    var odataUrl ="";
    dataObject.odataUrl =odataUrl;
    var options = {
      "dataObject": dataObject
    };
    objSvc.fetch(options,
                 this.fetchUserGroupsfromDBSuccessCallback.bind(this),
                 this.fetchUserGroupsfromDBFailureCallback.bind(this));
  },

  fetchUserGroupsfromDBSuccessCallback:function(response){

    kony.print("response of userGroupsFromDB::"+ JSON.stringify(response));
    userGroupsFromDB=response;
    // userGroups='';
    this.validateUserGroups(userGroups,userGroupsFromDB);

  },
  fetchUserGroupsfromDBFailureCallback:function(error){
    kony.print("Error while fetching the event list: "+JSON.stringify(error));
    this.dismissLoading();
  },      
  validateUserGroups :function(userGroups,userGroupsFromDB)
  {
    userGroupAvilFlag=0;
    for(i=0;i<userGroups["userGroups"].length;i++)
    {

      for(j=0;j<userGroupsFromDB["records"].length;j++)
      {
        if(userGroupsFromDB["records"][j]["group_name"]==userGroups["userGroups"][i]["userGroup"])
        {
          userGroupAvilFlag=1;
          i=userGroups.length;
          userGroupActiveFlag=userGroupsFromDB["records"][j]["admin_flag"];
          break;
        }
      }
    }
    kony.print("userGroupAvilFlag ::"+userGroupAvilFlag);
    kony.print("userGroupActiveFlag::"+userGroupActiveFlag);
    if(userGroupAvilFlag==1 && userGroupActiveFlag==1) // valid User
      {
        this.checkForUserDetailsByUserId();
        var x = new kony.mvc.Navigation("frmJourneyList");
      x.navigate();
      }
    else
      {
        alert("He is not a Admin User");
      }
  },
  checkForUserDetailsByUserId : function()
  {
  kony.print("in checkForUserDetailsByUserId ");
    kony.print("checking for userId ::"+UserCredentials.UserEmpId);
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
   // esclationPolocy_count--;
    var dataObject = new kony.sdk.dto.DataObject("user_tbl");
    var filterParam="user_emp_id_pk eq "+UserCredentials.UserEmpId;
   var odataUrl = "$filter="+filterParam+" ";
    dataObject.odataUrl =odataUrl;
    var options = {
      "dataObject": dataObject
    };
    objSvc.fetch(options,
                  this.checkForUserDetailsByUserIdSuccessCallback.bind(this),
                  this.checkForUserDetailsByUserIdFailureCallback.bind(this)); 
  },
   
  
  checkForUserDetailsByUserIdSuccessCallback : function(response)
  {
    kony.print("response ::"+JSON.stringify(response));
    if(response["records"].length>=1)
      {
        kony.print("we already have user details in our DB");
      }
    else
      {
        kony.print("he is newly login Admin User");
        this.insertUserDetailsIntoUserTbl(); 
      }
  },
  checkForUserDetailsByUserIdFailureCallback : function(error)
  {
    kony.print("in insertUserDetailsIntoUserTblFailureCallback"+JSON.stringify(error));
  },
  insertUserDetailsIntoUserTbl : function()
  {
    //insert records into User Table  
    kony.print("in insertUserDetailsIntoUserTbl");
    var objSvc = kony.sdk.getCurrentInstance().getObjectService("JourneyObSrvc", {
      "access": "online"
    });
   // esclationPolocy_count--;
    var dataObject = new kony.sdk.dto.DataObject("user_tbl");
    //var timeInUTC=getCurrentDateTimeInUTC();
    var data = {
      user_emp_id_pk : UserCredentials.UserEmpId,
      user_email_id: UserCredentials.UserEmail,
      user_firstname: UserCredentials.UserFirstName,
      user_lastname : UserCredentials.UserLastName,
      country_id_fk:null,
       region_id_fk:null,
       language_id_fk:null,
       softdeleteflag : false
    };
    dataObject.setRecord(data);
    var options = {
      "dataObject": dataObject
    };
    kony.print("new user data ::"+JSON.stringify(data));
    objSvc.create(options,
                  this.insertUserDetailsIntoUserTblSuccessCallback.bind(this),
                  this.insertUserDetailsIntoUserTblFailureCallback.bind(this)); 
  },
   insertUserDetailsIntoUserTblSuccessCallback : function(response)
  {
    kony.print("Successfully added user details in User Table"+JSON.stringify(response));
  },
  insertUserDetailsIntoUserTblFailureCallback : function(error)
  {
    kony.print("in insertUserDetailsIntoUserTblFailureCallback"+JSON.stringify(error));
  }
 
  
});


