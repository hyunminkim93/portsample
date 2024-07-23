window.onload = () => {

    /* 시작 애니메이션 */
    setTimeout(function () {
        gsap.fromTo(".main__logo img", 1, { y: 1500, opacity: 1, transform: 'scale(2.5)', }, {
            duration: 1,
            delay: 0.2,
            ease: "circ.out",
            y: 0,
            transform: 'scale(1)',
        })
        gsap.to(".main__logo img", {
            duration: 0.5,
            filter: 'brightness(3)',
            ease: "circ.out",
            delay: 1.02,
        })
        gsap.to(".main__logo img", {
            duration: 0.8,
            filter: 'brightness(1)',
            ease: "circ.out",
            delay: 1.52,
        })
        gsap.to(".st05", {
            opacity: 1,
            duration: 0.08,
            delay: 0.7,
        })
        gsap.to(".st04", {
            opacity: 1,
            duration: 0.08,
            delay: 0.78,
        })
        gsap.to(".st03", {
            opacity: 1,
            duration: 0.08,
            delay: 0.86,
        })
        gsap.to(".st02", {
            opacity: 1,
            duration: 0.08,
            delay: 0.94,
        })
        gsap.to(".st01", {
            opacity: 1,
            duration: 0.08,
            delay: 1.02,
        })
        gsap.to(".st05", {
            opacity: 0,
            duration: 0.08,
            delay: 1.1,
        })
        gsap.to(".st04", {
            opacity: 0,
            duration: 0.08,
            delay: 1.18,
        })
        gsap.to(".st03", {
            opacity: 0,
            duration: 0.08,
            delay: 1.26,
        })
        gsap.to(".st02", {
            opacity: 0,
            duration: 0.08,
            delay: 1.34,
        })
        gsap.to("header", {
            opacity: 1,
            duration: 1,
            ease: "circ.out",
            delay: 0.8,
        })
        gsap.to(".header__logo__box ", {
            duration: 1,
            rotation: 360,
            ease: "circ.out",
            delay: 0.8,
        })
    }, 3000);

    setTimeout(function () {
        gsap.to("body", {
            overflow: "visible",
            height: "auto",
            touchAction: "auto",
            ease: "circ.out",
        })
    }, 3500);

}