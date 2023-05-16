gsap.registerPlugin(ScrollTrigger);

// page reveal animation
revealAnimation = () => {
  document.body.style.overflow = "hidden";
  document.body.style.height = "100vh";

  gsap.set(".clip-center .marquee .marquee-container span", {
    opacity: 1,
  });
  gsap.set(".clip-center .marquee", {
    top: "200%",
  });
  gsap.set(".clip-bottom", {
    clipPath: "inset(0 0 0 0)",
  });
  gsap.set(".clip-top", {
    clipPath: "inset(0 0 0 0)",
  });
  gsap.from(".clip-top, .clip-bottom", 2, {
    delay: 1,
    height: "50vh",
    ease: "power4.inOut",
  });
  gsap.to(".marquee", 3.5, {
    delay: 0.75,
    top: "50%",
    ease: "power4.inOut",
  });
  gsap.from(".clip-top .marquee, .clip-bottom .marquee", 5, {
    delay: 1,
    left: "100%",
    ease: "power4.inOut",
  });

  gsap.from(".clip-center .marquee", 5, {
    delay: 1,
    left: "-50%",
    ease: "power3.inOut",
  });
  gsap.to(".clip-top", 2, {
    delay: 6,
    clipPath: "inset(0 0 100% 0)",
    ease: "power4.inOut",
  });
  gsap.to(".clip-bottom", 2, {
    delay: 6,
    clipPath: "inset(100% 0 0 0)",
    ease: "power4.inOut",
  });
  gsap.to(".clip-top .marquee, .clip-bottom .marquee, .marquee span", 1, {
    delay: 6.5,
    opacity: 0,
    ease: "power2.inOut",
    onComplete: function () {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      const elementsToHide = document.querySelectorAll(
        ".clip-bottom, .clip-bottom .marquee, .clip-top, .clip-top .marquee"
      );

      elementsToHide.forEach((element) => {
        element.style.display = "none";
      });
    },
  });
};

refreshAnimation = () => {
  gsap.to(".transition1", {
    y: 0,
    duration: 1,
    delay: 0.75,
    ease: "power4.out",
    stagger: 0.05,
  });
  gsap.to(".img-box-container", {
    y: 0,
    duration: 1.5,
    delay: 0.75,
    ease: "power4.out",
    stagger: 0.2,
  });
  gsap.to(".sample1", {
    y: "-60%",
    duration: 2,
    delay: 1,
    ease: "power4.out",
  });
  gsap.to(".sample2", {
    y: "-30%",
    duration: 2.5,
    delay: 0.75,
    ease: "power4.out",
  });
  gsap.to(".highest", {
    x: "0",
    duration: 1.5,
    delay: 0.75,
    ease: "power4.out",
  });
  gsap.to(".last-create", {
    x: "0",
    duration: 1.5,
    delay: 0.8,
    ease: "power4.out",
  });
  gsap.to(".overflow-2 p", {
    y: "0",
    duration: 1,
    delay: 1.5,
    stagger: 0.1,
    ease: "power4.out",
  });
};

// page transition
const pageTransition = [
  {
    from: "(.*)",
    to: "(.*)",
    in: (next, infos) => {
      gsap.to(".transition1", {
        y: 0,
        duration: 1,
        delay: 0.75,
        ease: "power4.out",
        stagger: 0.05,
      });

      gsap.to(".img-box-container", {
        y: 0,
        duration: 1.5,
        delay: 0.75,
        ease: "power4.out",
        stagger: 0.2,
      });
      gsap.to(".sample1", {
        y: "-60%",
        duration: 2,
        delay: 1,
        ease: "power4.out",
      });
      gsap.to(".sample2", {
        y: "-30%",
        duration: 2.5,
        delay: 0.75,
        ease: "power4.out",
      });
      gsap.to(".highest", {
        x: "0",
        duration: 1.5,
        delay: 0.75,
        ease: "power4.out",
      });
      gsap.to(".last-create", {
        x: "0",
        duration: 1.5,
        delay: 0.8,
        ease: "power4.out",
      });
      gsap.to(".overflow-2 p", {
        y: "0",
        duration: 1,
        delay: 1.5,
        stagger: 0.1,
        ease: "power4.out",
      });
    },
    out: (next, infos) => {
      gsap.to(document.querySelector("#swup"), 1, {
        onComplete: next,
      });
      gsap.set(".transition", {
        zIndex: 10000,
      });
      gsap.to(".transition li", {
        duration: 1,
        scaleY: 1,
        ease: "power4.inOut",
      });

      gsap.to(".transition li", {
        duration: 1,
        scaleY: 0,
        delay: 1,
        ease: "power4.inOut",
      });

      gsap.set(".transition", {
        zIndex: -1,
        delay: 2,
      });
    },
  },
];

let form = document.querySelector("form");
const swup = new Swup({
  cache: false,
  containers: ["#swup"],
  plugins: [new SwupJsPlugin(pageTransition), new SwupFormsPlugin()],
});
revealAnimation();
refreshAnimation();

document.addEventListener("swup:contentReplaced", () => {
  const pictureLib = document.querySelector(".picture-lib");
  const pictures = document.querySelectorAll(".img-box");
  let alertWrapper = document.querySelector(".alert");
  // increment z-index of images
  if (pictureLib) {
    let currentLastIndex = 2;
    let zIndexPicture = 5;
    pictureLib.addEventListener("click", () => {
      currentLastIndex = (currentLastIndex + 1) % 3;
      pictures[currentLastIndex].style.zIndex = ++zIndexPicture;
    });
  }

  // make messages disappear
  if (alertWrapper) {
    setTimeout(function () {
      alertWrapper.style.display = "none";
    }, 3000);
  }
});
