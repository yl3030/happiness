AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 70;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

var spaceSwiper = new Swiper(".space_swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
})

var gardenSwiper = new Swiper(".garden_swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
})

var lifeSwiper = new Swiper(".life_swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
    loop: true,
    centeredSlides: true,
    spaceBetween: 18,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
          slidesPerView: 3,
        },
    },
})

$(".life_swiper_item").click(function(){
    if($(window).width() >= 992) {
        let target = $(this).data("popup");
        $(".life-popup").fadeIn(300).css("display","flex");
        $(target).addClass("active").siblings(".life-popup_item").removeClass("active");
    }
})

$(".life-popup").click(function (event) {
    var pic = $(".life-popup_item");
    if (!pic.is(event.target) && pic.has(event.target).length === 0) {
        $(".life-popup").fadeOut(300);
    }
});

var forestSwiper = new Swiper(".forest_swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 800,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})