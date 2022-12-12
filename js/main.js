$(".Header-switch").on("click", function () {
    //switch'e tıklayınca menu-show classı varsa kaldır
    if($("Header").is(".menu-show")) {
        $(".Header").removeClass("menu-show")
    } else {
        $(".Header").addClass("menu-show")
    }
});
