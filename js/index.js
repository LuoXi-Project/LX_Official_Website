var swiper = new Swiper(".swiper", {
    loop: true,
    speed: 1200,
    effect: "fade",

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let animation = anime({
    targets: "header",
    translateY: [-80, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine'
});

anime({
    targets: ".imgCon",
    translateX: [-280, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
});

anime({
    targets: ".titleName",
    translateX: [280, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
});

anime({
    targets: ".info",
    translateY: [200, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
});

anime({
    targets: ".buybox",
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutSine',
});

swiper.on('slideChangeTransitionStart', function () {

    anime({
        targets: ".slideContent .titleName",
        translateX: [280, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
    });

    anime({
        targets: ".imgCon",
        translateX: [-280, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
    });

    anime({
        targets: ".info",
        translateY: [200, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutSine',
    });

    anime({
        targets: ".buybox",
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutSine',
    });

});