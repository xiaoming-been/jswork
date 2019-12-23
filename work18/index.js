(function () {
    function PageList(options) {
        for (var i in options) {
            this[i] = options[i];
        }
        var obj = this;
        this.first.onclick = function() {
            obj.page = 1;
            obj.onChange();
        };
        this.prev.onclick = function () {
            obj.page = (obj.page > 1) ? (obj.page - 1) : 1;
        }
    }
})();