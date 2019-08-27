define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClickBack defined for headerWithBack **/
    AS_UWI_b8cedcb289664ab99e242f30e0fa6462: function AS_UWI_b8cedcb289664ab99e242f30e0fa6462(eventobject) {
        var self = this;
        return self.navBack.call(this);
    },
    /** onClick defined for btnSubmit **/
    AS_Button_ab278fba1cb04d56a2bee283770c13ed: function AS_Button_ab278fba1cb04d56a2bee283770c13ed(eventobject) {
        var self = this;
        return self.onSubmit.call(this);
    },
    /** onClick defined for CopybtnSubmit0i3cccbc734c94a **/
    AS_Button_fbfd2b5b145e40cd838884db70244916: function AS_Button_fbfd2b5b145e40cd838884db70244916(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmCompleteTaskS1");
        ntf.navigate();
    }
});