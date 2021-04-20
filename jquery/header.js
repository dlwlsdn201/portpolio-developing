
// header 높이에 따른 1페이지 margin-top 값 조절
$(document).ready(function() {
    var headerHeight = $(".header-container").outerHeight();

    $("section").css("margin-top", headerHeight);
    console.log(headerHeight);
}); 