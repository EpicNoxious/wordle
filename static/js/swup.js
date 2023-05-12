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

// page transition
const pageTransition = [
  {
    from: "(.*)",
    to: "(.*)",
    in: (next, infos) => {
      gsap.to(".transition1", {
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power4.out",
        stagger: 0.05,
      });
    },
    out: (next, infos) => {
      // document.querySelector("#swup").style.opacity = 1;
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
// revealAnimation();

// let alertWrapper = document.querySelector(".alert");
// let alertClose = document.querySelector(".alert__close");

// if (alertWrapper) {
//   alertClose.addEventListener(
//     "click",
//     () => (alertWrapper.style.display = "none")
//   );
// }
