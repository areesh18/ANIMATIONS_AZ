document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /* =======================
     LENIS SMOOTH SCROLL
  ======================== */
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  /* =======================
     ELEMENTS
  ======================== */
  const spotlightSection = document.querySelector(".spotlight");
  const projectIndex = document.querySelector(".project-index h1");
  const projectImgs = document.querySelectorAll(".project-img");
  const projectImagesContainer = document.querySelector(".project-images");
  const projectName = document.querySelector(".active-project-name");

  /* =======================
     PROJECT TITLES
     (ORDER MUST MATCH IMAGES)
  ======================== */
  const projectTitles = [
    "Onetap",
    "Secure Share",
    "Portfolio",
    "Dashboard",
    "Analytics",
    "Onetap",
    "Secure Share",
    "Portfolio",
    "Dashboard",
    "Analytics",
  ];

  const totalProjectCount = projectImgs.length;

  /* =======================
     MEASUREMENTS
  ======================== */
  const spotlightSectionHeight = spotlightSection.offsetHeight;

  const styles = getComputedStyle(spotlightSection);
  const spotlightSectionPadding =
    parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);

  const projectIndexHeight = projectIndex.offsetHeight;
  const imagesHeight = projectImagesContainer.offsetHeight;

  const moveDistanceIndex =
    spotlightSectionHeight -
    spotlightSectionPadding -
    projectIndexHeight;

  // IMPORTANT: allow negative value (images must move UP)
  const moveDistanceImages = window.innerHeight - imagesHeight;

  let lastActiveIndex = -1;

  // Hint for performance
  gsap.set(projectImagesContainer, { willChange: "transform" });

  /* =======================
     SCROLLTRIGGER
  ======================== */
  ScrollTrigger.create({
    trigger: ".spotlight",
    start: "top top",
    end: `+=${window.innerHeight * totalProjectCount}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,

    onUpdate: (self) => {
      const progress = self.progress;

      /* ===== ACTIVE INDEX FROM PROGRESS ===== */
      const activeIndex = Math.min(
        totalProjectCount - 1,
        Math.floor(progress * totalProjectCount)
      );

      /* ===== IMAGE OPACITY ===== */
      projectImgs.forEach((img, index) => {
        gsap.set(img, {
          opacity: index === activeIndex ? 1 : 0.5,
        });
      });

      /* ===== PROJECT NAME ===== */
      if (activeIndex !== lastActiveIndex) {
        gsap.to(projectName, {
          opacity: 0,
          duration: 0.15,
          onComplete: () => {
            projectName.textContent = projectTitles[activeIndex];
            gsap.to(projectName, {
              opacity: 1,
              duration: 0.15,
            });
          },
        });
        lastActiveIndex = activeIndex;
      }

      /* ===== PROJECT INDEX TEXT ===== */
      projectIndex.textContent = `${String(activeIndex + 1).padStart(
        2,
        "0"
      )}/${String(totalProjectCount).padStart(2, "0")}`;

      /* ===== MOVE INDEX ===== */
      gsap.set(projectIndex, {
        y: progress * moveDistanceIndex,
      });

      /* ===== MOVE IMAGES ===== */
      gsap.set(projectImagesContainer, {
        y: progress * moveDistanceImages,
      });
    },
  });
});
