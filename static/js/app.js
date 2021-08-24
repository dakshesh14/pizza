document.addEventListener('DOMContentLoaded', () => {

    // // for sticky navbar
    const navbar = document.querySelector(".navbar");

    function fixedNavbar() {
        navbar.classList.toggle('active', window.scrollY > 0)
    }

    document.addEventListener('scroll', () => {
        fixedNavbar();
    });

    if (document.querySelector(".pizza-making")) {
        const pizzaAnimationParent = document.querySelector(".pizza-making");
        const topping = document.getElementById("topping");
        gsap.timeline({
            scrollTrigger: {
                trigger: pizzaAnimationParent,
                start: "center center",
                scrub: true,
                pin: pizzaAnimationParent,
            }
        }).from(topping, {
            y: '0.25rem',
            opacity: 0,
        });
    }

    if (document.querySelector('.hero-text-container')) {
        const hero = document.querySelector(".hero-text-container");
        gsap.timeline().from(hero.children, {
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.3
        })
    }

});