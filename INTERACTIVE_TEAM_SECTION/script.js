gsap.registerPlugin(SplitText);
document.addEventListener("DOMContentLoaded", () => {
  const profileImageContainer = document.querySelector(".profile-images");
  const profileImages = document.querySelectorAll(".profile-images .img");
  const nameElements = document.querySelectorAll(".profile-names .name");
  const nameHeadings = document.querySelectorAll(".profile-names .name h1");

  nameHeadings.forEach((heading) => {
    const split = new SplitText(heading, { type: "chars" });
    split.chars.forEach((char) => {
      char.classList.add("letter");
    });
  });

  const defaultLetters = nameElements[0].querySelectorAll(".letter");
  gsap.set(defaultLetters, { y: "100%" });

  if(window.innerWidth >= 900){
    profileImages.forEach((img,index)=>{
        const corresspondingName = nameElements[index+1];
        const letters=corresspondingName.querySelectorAll(".letter");

        img.addEventListener("mouseenter",()=>{
            gsap.to(img,{
                width:140,
                height:140,
                duration:0.5,
                ease:"power4.inOut",
            });
            gsap.to(letters,{
                y:"-100%",
                ease:"power4.out",
                duration:0.75,
                stagger:{
                    each:0.025,
                    from:"center",
                }
            })
        })

        img.addEventListener("mouseleave",()=>{
            gsap.to(img,{
                width:70,
                height:70,
                duration:0.5,
                ease:"power4.inOut",
            });
            gsap.to(letters,{
                y:"0%",
                ease:"power4.out",
                duration:0.75,
                stagger:{
                    each:0.025,
                    from:"center",
                }
            })
        })
    })

    profileImageContainer.addEventListener("mouseenter",()=>{
        gsap.to(defaultLetters,{
            y:"0%",
            ease:"power4.out",
            duration:0.75,
            stagger:{
                each:0.025,
                from:"center",
            }
        })
    })
    profileImageContainer.addEventListener("mouseleave",()=>{
        gsap.to(defaultLetters,{
            y:"100%",
            ease:"power4.out",
            duration:0.75,
            stagger:{
                each:0.025,
                from:"center",
            }
        })
    })
  }
});
