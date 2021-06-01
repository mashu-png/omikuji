    $(window).on("load resize", function() {
        var width = $("#canvas").width();
        $(".square").css({"height": width});
    });