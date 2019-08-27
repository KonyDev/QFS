define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnGetDirection **/
    AS_FlexContainer_dc170d5c68634eaab12bce154dd46ea2: function AS_FlexContainer_dc170d5c68634eaab12bce154dd46ea2(eventobject) {
        var self = this;
        this._getDirection();
    },
    /** onClose defined for actionsheet **/
    AS_UWI_e243e89d596a416ca3594fb9b15c8a22: function AS_UWI_e243e89d596a416ca3594fb9b15c8a22() {
        var self = this;
        this.view.actionsheet.isVisible = false;
        this.view.height = this._defaultHeight;
        this.view.width = this._defaultWidth;
        this.view.centerY = this._defaultCenterY;
        this.view.centerX = this._defaultCenterX;
        this.view.btnGetDirection.centerX = "50%";
        this.view.btnGetDirection.centerY = "50%";
        this._flag = 0;
    },
    /** preShow defined for getdirection **/
    AS_FlexContainer_f0289a0af5934ba19ce97209a97b77eb: function AS_FlexContainer_f0289a0af5934ba19ce97209a97b77eb(eventobject) {
        var self = this;
        this.view.actionsheet.isVisible = false;
        this.view.actionsheet.dismiss();
    }
});