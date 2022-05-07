//jQuery call to the accordion() method
$(document).ready(function() {
    $("#container").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content'
    });
});