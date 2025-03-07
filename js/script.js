const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    slidesRow: 1,
    centeredSlides: true,
    autoHeight: true,
    grabCursor: true,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        scale: 1,
        stretch: 0,
        depth: 220,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
  });