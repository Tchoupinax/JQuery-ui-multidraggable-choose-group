/*
JQuery-ui-multidraggable-choose-group Plugin - v1.0.0 - 13/12/2016
Copyright (c) 2016 Corentin Filoche - Licensed MIT 
Inpired by them :
=> https://github.com/javadoug/jquery.drag-multiple
=> https://github.com/someshwara/MultiDraggable
*/
(function ($) {
    "use strict";
    var options = {
        // Defaut selector
        groupe: ".selected",
        initLeftOffset: [],
        initTopOffset: []
    }
    function initOptions(instance) {
        return $.extend({}, options, instance.options.multiple);
    }
    $.ui.plugin.add("draggable", "multiple", {
        // Start drag action
        start: function (event, ui) {
            // Get instance
            var instance = this.data('draggable') || this.data('ui-draggable');
            // Initialize variables
            instance.multiple = {};
            // Merge basic options, top options, and user specified options (groupe)
            options = instance.multiple.options = initOptions(instance);
            // Get position
            var pos = $(this).position();
            // For each, save positions
            $.each(options.groupe || {}, function (key, value) {
                var elemPos = $(value).position();
                options.initLeftOffset[key] = elemPos.left - pos.left;
                options.initTopOffset[key] = elemPos.top - pos.top;
            });
        },
        // Stop drag action
        stop: function (event, ui) {
            // Get instance
            var instance = this.data('draggable') || this.data('ui-draggable');
            // Get position
            var pos = $(this).offset();
            // For each, update positions
            $.each(options.groupe || {}, function (key, value) {
                $(value).offset({
                    left: pos.left + options.initLeftOffset[key],
                    top: pos.top + options.initTopOffset[key]
                });
            });
        },
        // drag action 
        drag: function () {
            // Get instance
            var instance = this.data('draggable') || this.data('ui-draggable');
            // Get position
            var pos = $(this).offset();
            // For each, update positions
            $.each(options.groupe || {}, function (key, value) {
                $(value).offset({
                    left: pos.left + options.initLeftOffset[key],
                    top: pos.top + options.initTopOffset[key]
                });
            });
        }
    });
})(jQuery);