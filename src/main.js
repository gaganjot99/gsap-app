gsap.registerPlugin("ScrollTrigger");

gsap.from("h1, .logo",{scrollTrigger: ".logo", duration: 2, scale: 1.5, x: 400})