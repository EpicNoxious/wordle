// const lenis = new Lenis({
//   duration: 1.3,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// pageTransition = () => {
//   gsap.set(".transition", {
//     zIndex: 10000,
//   });
//   gsap.to(".transition li", {
//     duration: 1,
//     scaleY: 1,
//     ease: "power4.inOut",
//   });

//   gsap.to(".transition li", {
//     duration: 1,
//     scaleY: 0,
//     delay: 1,
//     ease: "power4.inOut",
//   });
//   gsap.set(".transition", {
//     zIndex: 0,
//     delay: 2,
//   });
// };

// revealAnimation = () => {
//   gsap.set(".clip-center .marquee .marquee-container span", {
//     opacity: 1,
//   });
//   gsap.set(".clip-center .marquee", {
//     top: "200%",
//   });
//   gsap.set(".clip-bottom", {
//     clipPath: "inset(0 0 0 0)",
//   });
//   gsap.set(".clip-top", {
//     clipPath: "inset(0 0 0 0)",
//   });
//   gsap.from(".clip-top, .clip-bottom", 2, {
//     delay: 1,
//     height: "50vh",
//     ease: "power4.inOut",
//   });
//   gsap.to(".marquee", 3.5, {
//     delay: 0.75,
//     top: "50%",
//     ease: "power4.inOut",
//   });
//   gsap.from(".clip-top .marquee, .clip-bottom .marquee", 5, {
//     delay: 1,
//     left: "100%",
//     ease: "power4.inOut",
//   });

//   gsap.from(".clip-center .marquee", 5, {
//     delay: 1,
//     left: "-50%",
//     ease: "power3.inOut",
//   });
//   gsap.to(".clip-top", 2, {
//     delay: 6,
//     clipPath: "inset(0 0 100% 0)",
//     ease: "power4.inOut",
//   });
//   gsap.to(".clip-bottom", 2, {
//     delay: 6,
//     clipPath: "inset(100% 0 0 0)",
//     ease: "power4.inOut",
//   });
//   gsap.to(".clip-top .marquee, .clip-bottom .marquee, .marquee span", 1, {
//     delay: 6.5,
//     opacity: 0,
//     ease: "power2.inOut",
//     onComplete: function () {
//       const elementsToHide = document.querySelectorAll(
//         ".clip-bottom, .clip-bottom .marquee, .clip-top, .clip-top .marquee"
//       );
//       console.log(1);
//       elementsToHide.forEach((element) => {
//         element.style.display = "none";
//       });
//     },
//   });
// };
// mainAnimation = () => {};

// barba.init({
//   cache: true,
//   transitions: [
//     {
//       async leave(data) {
//         const done = this.async();
//         pageTransition();
//         await delay(1000);
//         window.scrollTo(0, 0);
//         done();
//       },

//       async enter(data) {},

//       async once(data) {
//         revealAnimation();
//       },
//     },
//   ],
// });

// delay = (n) => {
//   n = n || 1100;
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// };

pageTransition = () => {
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
};
const options = [
  {
    from: "(.*)",
    to: "(.*)",
    in: (next, infos) => {},
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

const options2 = [
  {
    from: "(.*)",
    to: "(.*)",
    in: (next, infos) => {
      gsap.to(".loader", {
        duration: 1,
        scaleY: 0,
        delay: 1,
        ease: "power4.inOut",
      });
    },
    out: (next, infos) => {
      gsap.to(".loader", {
        duration: 1,
        scaleY: 1,
        ease: "power4.inOut",
      });
    },
  },
];
let form = document.querySelector("form");
const swup = new Swup({
  cache: false,
  containers: ["#swup"],
  plugins: [
    new SwupJsPlugin(options),
    new SwupFormsPlugin(),
    new SwupDebugPlugin(),
  ],
});

swup.on("submitForm", (e) => console.log(e));
let alertWrapper = document.querySelector(".alert");
let alertClose = document.querySelector(".alert__close");

if (alertWrapper) {
  alertClose.addEventListener(
    "click",
    () => (alertWrapper.style.display = "none")
  );
}
