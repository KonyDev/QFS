define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnReturnJourney **/
    AS_Button_i74ae668256948088d204223420ec1fc: function AS_Button_i74ae668256948088d204223420ec1fc(eventobject) {
        var self = this;
        return self.returnJourney.call(this);
    },
    /** onHamburgerMenuHide defined for slidingmenu **/
    AS_UWI_j46040cfb5d848af84c2588ca4ccb089: function AS_UWI_j46040cfb5d848af84c2588ca4ccb089() {
        var self = this;
        this._onHambergurMenuHide();
    },
    /** onClick defined for btnStartJourney **/
    AS_Button_dc06096c7b624b7a8fbe77482dd9c500: function AS_Button_dc06096c7b624b7a8fbe77482dd9c500(eventobject) {
        var self = this;
        return self.startJourney.call(this);
    },
    /** onClick defined for btnShowHambergurMenu **/
    AS_Button_ge0c4768da2348b0aee30d6826a9fdaa: function AS_Button_ge0c4768da2348b0aee30d6826a9fdaa(eventobject) {
        var self = this;
        this.showHamburgerMenu();
    },
    /** onClick defined for Button0c01fb6cf084e41 **/
    AS_Button_f1838c85efb84b0bafb0c7d2b404c421: function AS_Button_f1838c85efb84b0bafb0c7d2b404c421(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("ReturnJourneyGroup/frmWithOnwardJourney");
        ntf.navigate();
    }
});