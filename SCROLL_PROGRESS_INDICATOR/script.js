
document.addEventListener("DOMContentLoaded",()=>{
    const lenis = new Lenis();
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
})
var counter = document.querySelector(".percent");
/* TweenLite.set(counter, {
  xPercent: -5,
  yPercent: -5,
});
window.addEventListener("mousemove",moveCounter);
function moveCounter(e){
    TweenLite.to(counter,0.5,{
        x:e.clientX,
        y:e.clientY,
    })
} */

function progress() {
    // calculate scroll progress
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

    // colors
    const bgColor = progress > 99 ? "#fff" : "#fff";
    const textColor = progress > 99 ? "#fff" : "#333";

    // update <h1>
    /* const h1 = document.querySelector("h1");
    h1.textContent = Math.round(progress) + "%";
    h1.style.color = textColor; */

    // update .fill div
    const fill = document.querySelector(".fill");
    fill.style.height = progress + "%";
    fill.style.backgroundColor = bgColor;
}
// initial call
progress();

// update on scroll
document.addEventListener("scroll", progress);
