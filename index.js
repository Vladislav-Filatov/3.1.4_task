let swiper = null;

function initSwiper() {
    swiper = new Swiper('.swiper', {
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
        },
    });
}

function destroySwiper() {
    if (swiper) {
        swiper.destroy();
        swiper=null;
    }
}

function checkSize() {
    if (window.innerWidth<768) {
        initSwiper();
    }
    else if (swiper) {
        destroySwiper();
    }
}

window.addEventListener('load', checkSize);
window.addEventListener('resize', checkSize);