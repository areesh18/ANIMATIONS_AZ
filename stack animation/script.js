document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
});
const pages = gsap.utils.toArray(".page");
console.log(pages.length);

/* pages.forEach((page, index) => {
  const pageContent = page.querySelector(".page-content");

  if (index < pages.length - 1) {
    gsap.to(page, {
      opacity:0,
      scrollTrigger: {
        trigger: page,
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });
  }
}); */
