(function($) {
    'use strict';

    $(document.body)
        .on("change", "input[data-show]", function() {
            var $this = $(this),
                $showEl = getDataElement($this, "show");
            if ($showEl)
                $showEl[$this.is(":checked") ? "show" : "hide"]();
        })
        .on("change", "input[data-hide]", function() {
            var $this = $(this),
                $hideEl = getDataElement($this, "hide");
            if ($hideEl) {
                $hideEl[$this.is(":checked") ? "hide" : "show"]();
            }
        })
        .on("change", "input[data-toggle]", function() {
            var $this = $(this),
                $toggleEl = getDataElement($this, "toggle");
            if ($toggleEl) {
                $toggleEl.toggle();
            }
        })
        .on("change", "select:has(option[data-show],option[data-hide],option[data-toggle])", function() {
            var $selected = $("option:selected", this),
                $showEl = getDataElement($selected, "show"),
                $hideEl = getDataElement($selected, "hide"),
                $toggleEl = getDataElement($selected, "toggle");
            if ($showEl) {
                $showEl.show();
            }
            if ($hideEl) {
                $hideEl.hide();
            }
            if ($toggleEl) {
                $toggleEl.toggle();
            }
        });

    function getDataElement($input, prop) {
        var selector = $input.data(prop);
        if (typeof selector == "string") {
            return $(selector);
        }
    }

})(jQuery);
