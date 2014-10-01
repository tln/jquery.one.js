jquery.one.js
=============

jQuery helpers to help verify that your selectors are returning the
expected number of elements. Usage is simple.

    $( selector ).onlyOne()

If there is one and only one element matching the selector, then all is well!
Otherwise, an error will be thrown. There is a corresponding helper to ensure
at least one element found, cleverly named:

    $( selector ).atLeastOne()

There are alternate spellings to suit your style:

    $.one(selector)           // Shortcut for $(selector).onlyOne()
    $.many(selector)          // Shortcut for $(selector).atLeastOne()

    var collection = $(selector)
    collection.findMany(selector)   // Same as collection.find(selector).notEmpty()
    collection.findOne(selector)    // Same as collection.find(selector).onlyOne()
