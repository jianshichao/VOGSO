

$(function () {


    $(".video_choice").on("click",function () {
        $(".video_choice .choice").hide();
        $(".video_choice .choice_1").show();
        $(".map_choice .choice").hide();
        $(".map_choice .choice_2").show();
        $(".video").show();
        $(".map").hide();
    })


    $(".map_choice").on("click",function () {
        $(".video_choice .choice").hide();
        $(".video_choice .choice_2").show();
        $(".map_choice .choice").hide();
        $(".map_choice .choice_1").show();
        $(".video").hide();
        $(".map").show();
    })


    //精美车图
    $(".pics").slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe : true
    });


})