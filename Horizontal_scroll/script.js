gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray(".panel");

gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".h-wrapper",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".h-container").offsetWidth
  }
});
