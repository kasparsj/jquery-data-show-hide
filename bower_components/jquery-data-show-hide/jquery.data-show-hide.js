(function($) {
    'use strict';

    $(document.body)
        .on("change", "input[data-show]:checked", function() {
            var $this = $(this);
            getToggleElement($this, "show").show();
        })
        .on("change", "input[data-hide]:checked", function() {
            var $this = $(this);
            getToggleElement($this, "hide").hide();
        })
        .on("change", "select[data-toggle]", function() {
            var $this = $(this),
                $toggle = getToggleElement($this, "toggle"),
                value = $this.data("toggleValue");
            $toggle[($this.val() == value ? 'show' : 'hide')]();
        });

    function getToggleElement($input, prop) {
        return $($input.data(prop))
    }

})(jQuery);
