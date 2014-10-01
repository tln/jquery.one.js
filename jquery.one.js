/* Some assert helpers for $

$(selector).onlyOne()     // selector is expected to find one and only one element
$.one(selector)           // Shortcut for above

$(selector).oneOrMore()   // selector is expected to find one or more elements
$.many(selector)          // Shortcut for above

$var = $(...)
$var.findMany(selector)   // Same as $var.find(selector).notEmpty()
$var.findOne(selector)   // Same as $var.find(selector).onlyOne()

*/
(function($) {

    $.one = function (selector) {
        return $(selector).onlyOne();
    }
    $.fn.findOne = function (selector) {
        return this.find(selector).onlyOne();
    }
    $.fn.onlyOne = function(message) {
        if (this.length != 1) {
            throw message || "Expected one element";
        }
        return this;
    }
    $.many = function (selector) {
        return $(selector).atLeastOne();
    }
    $.fn.findMany = function (selector) {
        return this.find(selector).atLeastOne();
    }
    $.fn.atLeastOne = function(message) {
        if (this.length == 0) {
            throw message || "No elements found";
        }
        return this;
    }

})(jQuery);