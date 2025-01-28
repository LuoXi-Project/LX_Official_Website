var swiper = new Swiper(".swiper", {
    loop: true,  // 循环模式
    speed: 1200,  // 动画速度
    effect: "fade",  // 切换效果为淡入淡出

    navigation: {
        nextEl: ".swiper-button-next",  // 下一页按钮
        prevEl: ".swiper-button-prev",  // 上一页按钮
    },

    autoplay: {
        delay: 10000,  // 每隔5秒自动切换
        disableOnInteraction: false,  // 允许用户互动后依然保持自动播放
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