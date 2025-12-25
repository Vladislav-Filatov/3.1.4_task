let swiper = null;
const repairBrandsButton = document.querySelector('.repair-brands__read-more-button');
const repairBrandsButtonText = document.querySelector('.read-more-button__text');
const repairBrandsButtonImage = document.querySelector('.read-more-button__image')
const swiperWrapper = document.querySelector('.swiper-wrapper');

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
        swiper = null;
    }
}

function checkSize() {
    if (window.innerWidth<768 && !swiper) {
        initSwiper();
    } else if (window.innerWidth>=768 && swiper) {
        destroySwiper();
    }
}

const brandsVisibility = () => {
    if (swiperWrapper.classList.contains('expanded')) {
        swiperWrapper.classList.remove('expanded');
        repairBrandsButtonImage.classList.remove('expanded');
        repairBrandsButtonText.textContent = 'Показать все';
    } else {
        swiperWrapper.classList.add('expanded');
        repairBrandsButtonImage.classList.add('expanded');
        repairBrandsButtonText.textContent = 'Скрыть';
    }
};

repairBrandsButton.addEventListener('click',  brandsVisibility);

window.addEventListener('load', checkSize);
window.addEventListener('resize', checkSize);