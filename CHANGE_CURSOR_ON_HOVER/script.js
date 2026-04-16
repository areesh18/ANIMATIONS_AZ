var main = document.querySelector("#main");
var cursor = document.querySelector(".cursor");
var imageDiv = document.querySelector(".img")
/* main.addEventListener("click",()=>{
    console.log("Event performed");
}) */

/* window.addEventListener("keypress",(e)=>{
    console.log(e);
})
 */

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    ease: "power4.out",
  });
  console.log(e.x, e.y);
});

imageDiv.addEventListener("mouseenter",(e)=>{
    cursor.textContent="View More",
    gsap.to(cursor,{
        scale:2.5,
    })
    gsap.to(".img img",{
        scale:0.98,
    })
})
imageDiv.addEventListener("mouseleave",(e)=>{
    cursor.innerHTML="",
    gsap.to(cursor,{
        scale:1,
    }),
    gsap.to(".img img",{
        scale:1,
    })
})