function AS_FlexContainer_e691ac7b27e14d80a9f633470e9e39ec(eventobject) {
    var self = this;
    if (this.view.lblPassword.top == "23%") {
        this.view.flxLblPassword.isVisible = false;
        this.invokeTouch(this.view.lblPassword, "16%");
    }
    this.view.forceLayout();
}