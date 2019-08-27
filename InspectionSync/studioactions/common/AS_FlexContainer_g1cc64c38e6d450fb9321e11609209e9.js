function AS_FlexContainer_g1cc64c38e6d450fb9321e11609209e9(eventobject) {
    var self = this;
    if (this.view.lblUsername.top == "6%") {
        this.view.flxLblUsername.isVisible = false;
        this.invokeTouch(this.view.lblUsername, "-1%");
    }
    this.view.forceLayout();
}