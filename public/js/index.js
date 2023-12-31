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

function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        To : "ryanlin9001@gmail.com, zhulixdesign@gmail.com, zhuli705098@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "昀真馥田預約賞屋",
        Body : "姓名:" + document.getElementById("name").value
                + "<br>電話:" + document.getElementById("phone").value
                + "<br>可聯繫時間:" + document.getElementById("time").value
                + "<br>信箱:" + document.getElementById("email").value
                + "<br>留言:" + document.getElementById("message").value
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}