ScrollTrigger.matchMedia({
  "(min-width: 769px)": function () {
    const contactMeContainer = document.querySelector(".contact-me-container");

    ScrollTrigger.create({
      trigger: ".contact-me",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const yValue = -60 * (1 - progress);
        gsap.set(contactMeContainer, { y: `${yValue}%` });
      },
    });
  },
});

const contactSection = document.querySelector("section.contact-me");

const trailData = [
  {
    name: "Spring Boot",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Hibernate",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
  },
  {
    name: "REST API",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Swagger",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  },
  {
    name: "OAuth 2.0",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg",
  },
  {
    name: "Spring AI",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },

  {
    name: "Razorpay",
    url: "https://avatars.githubusercontent.com/u/7713209?s=200&v=4",
  },
  {
    name: "Twilio",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twilio/twilio-original.svg",
  },
  {
    name: "Redis",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  {
    name: "JUnit",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg",
  },
  {
    name: "Mockito",
    url: "https://avatars.githubusercontent.com/u/1714981?s=200&v=4",
  },

  {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    name: "C",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "Java",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Kotlin",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "IntelliJ IDEA",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
  },
  {
    name: "VS Code",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Maven",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
  },
  {
    name: "PostgreSQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Redis",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  {
    name: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    url: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "Koyeb",
    url: "https://avatars.githubusercontent.com/u/90446838?s=200&v=4",
  },

  {
    name: "Postman",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

let trailLastX = 0;
let trailLastY = 0;
let trailImageIndex = 0;
const trailThreshold = 60;

if (contactSection) {
  contactSection.addEventListener("mousemove", (e) => {
    const rect = contactSection.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    const distance = Math.hypot(relativeX - trailLastX, relativeY - trailLastY);

    if (distance > trailThreshold) {
      spawnTrailImage(relativeX, relativeY);
      trailLastX = relativeX;
      trailLastY = relativeY;
    }
  });
}

function spawnTrailImage(x, y) {
  const img = document.createElement("img");
  img.classList.add("trail-img");

  const item = trailData[trailImageIndex % trailData.length];
  img.src = item.url;

  trailImageIndex++;

  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  const randomRotation = Math.random() * 40 - 20;

  contactSection.appendChild(img);

  const tl = gsap.timeline({
    onComplete: () => {
      img.remove();
    },
  });

  tl.fromTo(
    img,
    {
      scale: 0,
      opacity: 0,
      rotation: randomRotation - 45,
    },
    {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      rotation: randomRotation,
      ease: "elastic.out(1, 0.5)",
    },
  ).to(
    img,
    {
      duration: 1,
      scale: 0.2,
      opacity: 0,
      y: 50,
      ease: "power2.in",
    },
    ">-0.2",
  );
}
