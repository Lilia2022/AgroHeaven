
var swiper = new Swiper(".swiper",{
    loop:true,
    centeredSlides:'true',
    slidesPerView:4,
    spaceBetween:20,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});