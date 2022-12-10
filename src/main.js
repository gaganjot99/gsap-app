gsap.registerPlugin("ScrollTrigger");

//gsap.set(".all-fill", { position: "absolute" });

gsap.from(".welcome-text", {
  scrollTrigger: {
    trigger: ".img-div",
    markers: true,
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%",
    pinSpacing: true,
  },
  duration: 2,
  opacity: 0,
  stagger: 0.5,
});

const ele = document.getElementsByClassName("cls-1")[0];
const length = ele.getTotalLength();

gsap.set(".cls-1", { strokeDasharray: "" + length + "," + length });

gsap.from(".cls-1", {
  scrollTrigger: {
    trigger: ".Second",
    scrub: 1.5,
    pin: true,
    start: "top top",
    end: "+=100%",
    pinSpacing: true,
  },
  duration: 2,
  strokeDasharray: "" + 0 + ", " + length,
  stagger: 0.5,
});
