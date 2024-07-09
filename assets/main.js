// const stars = document.getElementById('stars');
// const starsCtx = stars.getContext('2d');

// let screen, starsElements, starsParams = { speed: 35, number: 900, extinction: 4 };
// let animationHandle; // 추가: requestAnimationFrame 핸들을 저장할 변수

// setupStars();
// updateStars();

// window.onresize = function () {
//     setupStars();
//     cancelAnimationFrame(animationHandle); // resize 시 animation frame을 취소하고 다시 요청
//     updateStars();
// };

// function Star() {
//     this.x = Math.random() * stars.width;
//     this.y = Math.random() * stars.height;
//     this.z = Math.random() * stars.width;

//     this.move = function () {
//         this.z -= starsParams.speed;
//         if (this.z <= 0) {
//             this.z = stars.width;
//         }
//     };

//     this.show = function () {
//         let x, y, rad, opacity;
//         x = (this.x - screen.c[0]) * (stars.width / this.z);
//         x = x + screen.c[0];
//         y = (this.y - screen.c[1]) * (stars.width / this.z);
//         y = y + screen.c[1];
//         rad = stars.width / this.z;
//         opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;

//         starsCtx.beginPath();
//         starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
//         starsCtx.arc(x, y, rad, 0, Math.PI * 2);
//         starsCtx.fill();
//     }
// }

// function setupStars() {
//     screen = {
//         w: window.innerWidth,
//         h: window.innerHeight,
//         c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
//     };
//     stars.width = screen.w;
//     stars.height = screen.h;
//     starsElements = [];
//     for (let i = 0; i < starsParams.number; i++) {
//         starsElements[i] = new Star();
//     }
// }

// function updateStars() {
//     starsCtx.fillStyle = "black";
//     starsCtx.fillRect(0, 0, stars.width, stars.height);
//     starsElements.forEach(function (s) {
//         s.show();
//         s.move();
//     });
//     animationHandle = requestAnimationFrame(updateStars); // requestAnimationFrame 핸들을 변수에 저장
// }

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.skill').forEach(skill => {
        gsap.fromTo(skill,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: skill,
                    start: 'top 10%',
                    end: ' bottom 30%',
                    onEnter: () => gsap.to(skill, { opacity: 1, y: 0, duration: 1 }),
                    onLeaveBack: () => gsap.to(skill, { opacity: 0, y: 50, duration: 1 })
                }
            }
        );
    });


    // 커서 이펙트
    const cursor = document.createElement('div');
    cursor.classList.add('percent');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', e => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            cursor.innerText = skill.getAttribute('data-percent');
            cursor.style.transform = 'scale(1.2)';
        });

        skill.addEventListener('mouseleave', () => {
            cursor.innerText = '';
            cursor.style.transform = 'scale(1)';
        });
    });
});



