define({
    AS_AppEvents_i08ff53aa0054d26ae99b066dfbb7cde: function AS_AppEvents_i08ff53aa0054d26ae99b066dfbb7cde(eventobject) {
        var self = this;
        onPostAppInit();
    },
    AS_AppEvents_a08536b118c546a58665d1e2f84a7b09: function AS_AppEvents_a08536b118c546a58665d1e2f84a7b09(eventobject) {
        var self = this;
        return onApplicationInit.call(this);
    },
    AS_AppEvents_d1124efaba454d3b900ff7fbd774cf99: function AS_AppEvents_d1124efaba454d3b900ff7fbd774cf99(eventobject) {
        var self = this;
        return launchParam.call(this, eventobject);
    }
});