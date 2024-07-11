
// 스킬 하나씩 나오기 
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
                    start: 'top top',
                    end: '-=1000',
                    marker: true,
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

    const skills = document.querySelectorAll('.desc, .title3');
    skills.forEach(skill => {
        skill.addEventListener('mouseover', e => {
            if (e.target === skill || e.target.parentNode === skill) {
                const percent = skill.getAttribute('data-percent') || skill.parentNode.getAttribute('data-percent');
                cursor.innerText = percent;
                cursor.style.transform = 'scale(1.2)';
            }
        });

        skill.addEventListener('mouseout', e => {
            if (e.target === skill || e.target.parentNode === skill) {
                cursor.innerText = '';
                cursor.style.transform = 'scale(1)';
            }
        });
    });

    const section3 = document.getElementById('section3');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cursor.style.opacity = '1'; // Show cursor when section3 is visible
                document.body.style.cursor = 'none'; // Hide default cursor
            } else {
                cursor.style.opacity = '0'; // Hide cursor when section3 is not visible
                document.body.style.cursor = 'auto'; // Show default cursor
            }
        });
    });

    observer.observe(section3);
});




