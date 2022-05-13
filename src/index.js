// import initScrollReveal from "./scripts/scrollReveal";
// import initTiltEffect from "./scripts/tiltAnimation";
// import { targetElements, defaultProps } from "./data/scrollRevealConfig";

export default function initScrollReveal(targetElements, defaultProps) {
    if (!targetElements.length) return;
  
    ScrollReveal({ reset: false });
  
    targetElements.forEach(({ element, animation }) => {
      ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
  }

import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
    const elements = document.querySelectorAll(".js-tilt");
    VanillaTilt.init(elements);
  }
  
  export const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true,
  };
  
  export const targetElements = [
    {
      element: ".section-title",
      animation: {
        delay: 300,
        distance: "0px",
        origin: "bottom",
      },
    },
    {
      element: ".hero-title",
      animation: {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".hero-cta",
      animation: {
        delay: 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".about-wrapper__image",
      animation: {
        delay: 600,
        origin: "bottom",
      },
    },
    {
      element: ".about-wrapper__info",
      animation: {
        delay: 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".project-wrapper__text",
      animation: {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".project-wrapper__image",
      animation: {
        delay: 1000,
        origin: window.innerWidth > 768 ? "right" : "bottom",
      },
    },
    {
      element: ".contact-wrapper",
      animation: {
        delay: 800,
        origin: "bottom",
      },
    },
  ];
  

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
