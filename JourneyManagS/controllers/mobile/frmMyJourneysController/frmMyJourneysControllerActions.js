define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxHamburger **/
    AS_FlexContainer_c862b962d52a45d28df34c6e78bf0ed1: function AS_FlexContainer_c862b962d52a45d28df34c6e78bf0ed1(eventobject) {
        var self = this;
        if (this.view.flxSideBar.isVisible == false) {
            this.view.flxSideBar.isVisible = true;
        }
    },
    /** onClick defined for CopyflxHamburger0bc5d80e124d146 **/
    AS_FlexContainer_bf8a32a725ca451fa4a0d28f4fc84608: function AS_FlexContainer_bf8a32a725ca451fa4a0d28f4fc84608(eventobject) {
        var self = this;
        if (this.view.flxSideBar.isVisible == false) {
            this.view.flxSideBar.isVisible = true;
        }
    },
    /** onClick defined for flxBackButton **/
    AS_FlexContainer_h964c06454c946589eb411dde0e63b6c: function AS_FlexContainer_h964c06454c946589eb411dde0e63b6c(eventobject) {
        var self = this;
        this.view.flxThreeDotsClickContainer.isVisible = false;
        this.view.flxDots.isVisible = true;
        this.view.lblCenterTextMyJourneys.isVisible = false;
        this.view.flxHamburgerOnJourney.isVisible = true;
        this.view.flxBackButton.isVisible = false;
    },
    /** onClick defined for flxDots **/
    AS_FlexContainer_gd1e6e9d029f48b280df180045676d3c: function AS_FlexContainer_gd1e6e9d029f48b280df180045676d3c(eventobject) {
        var self = this;
        // if(this.view.flxSideBar.isVisible == false)
        //   {
        //     this.view.flxSideBar.isVisible = true;
        //   }
        this.view.flxThreeDotsClickContainer.isVisible = true;
        this.view.flxDots.isVisible = false;
        this.view.lblCenterTextMyJourneys.isVisible = true;
        this.view.flxHamburgerOnJourney.isVisible = false;
        this.view.flxBackButton.isVisible = true;
    },
    /** onClick defined for flxJourney **/
    AS_FlexContainer_d1eda411ffaa494f8ea2c41f1a51b017: function AS_FlexContainer_d1eda411ffaa494f8ea2c41f1a51b017(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
    },
    /** onClick defined for CopyflxNewJourney0a26198e8144c4d **/
    AS_FlexContainer_ab8f812e0e2f4a0b84df4b26a9e5aa77: function AS_FlexContainer_ab8f812e0e2f4a0b84df4b26a9e5aa77(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyTraveller");
        ntf.navigate();
    },
    /** onClick defined for flxGuidesManuals **/
    AS_FlexContainer_b5327ec18ff7433683491602848d8db4: function AS_FlexContainer_b5327ec18ff7433683491602848d8db4(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MyAccount");
        ntf.navigate();
    },
    /** onClick defined for flxMyAccountSidebar **/
    AS_FlexContainer_j919e3e075804b88a4ae9b9bff8ad3ac: function AS_FlexContainer_j919e3e075804b88a4ae9b9bff8ad3ac(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MyAccount");
        ntf.navigate();
        this.view.flxSideBar.isVisible = false;
    },
    /** onClick defined for flxSidebarClicker **/
    AS_FlexContainer_ed49d696ebe7447ebb2c20ad6c044bf7: function AS_FlexContainer_ed49d696ebe7447ebb2c20ad6c044bf7(eventobject) {
        var self = this;
        this.view.flxSideBar.isVisible = false;
    },
    /** onClick defined for tab1 **/
    AS_Button_g73990f782a94ca5af06bf4ed38084b0: function AS_Button_g73990f782a94ca5af06bf4ed38084b0(eventobject) {
        var self = this;
        this.view.tab3.skin = "tabNonSelected";
        this.view.tab1.skin = "tabSelected";
        this.view.tab2.skin = "tabNonSelected";
        this.setData();
    },
    /** onClick defined for tab2 **/
    AS_Button_fe6abb39f9ae453cb1580ed8cff3958d: function AS_Button_fe6abb39f9ae453cb1580ed8cff3958d(eventobject) {
        var self = this;
        this.view.tab3.skin = "tabNonSelected";
        this.view.tab1.skin = "tabNonSelected";
        this.view.tab2.skin = "tabSelected";
        this.setData2();
    },
    /** onClick defined for tab3 **/
    AS_Button_g0ac7efcc6c34ec0b0b24215f7444712: function AS_Button_g0ac7efcc6c34ec0b0b24215f7444712(eventobject) {
        var self = this;
        this.view.tab3.skin = "tabSelected";
        this.view.tab1.skin = "tabNonSelected";
        this.view.tab2.skin = "tabNonSelected";
        this.setData3();
    },
    /** onClick defined for flxNewJourney **/
    AS_FlexContainer_hc6937ddcc694a2e8af3024683a917c8: function AS_FlexContainer_hc6937ddcc694a2e8af3024683a917c8(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmNewJourneyTraveller");
        ntf.navigate();
    },
    /** preShow defined for frmMyJourneys **/
    AS_Form_c8ca7aa459514e1aac1269200456db02: function AS_Form_c8ca7aa459514e1aac1269200456db02(eventobject) {
        var self = this;
        this.InitialSelection();
        this.setData();
    }
});