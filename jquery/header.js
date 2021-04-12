
// header 높이에 따른 1페이지 margin-top 값 조절
$(document).ready(function() {
    var headerHeight = $(".header-container").innerHeight();

    $(".certification-container").css("margin-top", headerHeight-0.1);
});