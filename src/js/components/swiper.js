const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: '.slider_btn-next',
        prevEl: '.slider_btn-prev',
    },
});
const swiper2 = new Swiper('.swiper2', {

    navigation: {
        nextEl: '.support_btn-next',
        prevEl: '.support_btn-prev',
    },
});
