import { motion } from "framer-motion";
import TopLogo from "../Header/TopLogo";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Rules = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const sections = panelsRef.current;

    if (!container || sections.length === 0) return;

    console.log("Sections:", sections); // Debugging

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${container.scrollWidth}`,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        invalidateOnRefresh: true,
        markers: true, // Debugging
      },
    });
  }, []);
  return (
    <div
    ref={containerRef}
    className="relative w-full h-screen overflow-hidden bg-gray-800" // Added a background color
  >
    <div className="flex w-[500vw] h-screen"> {/* Ensure full width */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (panelsRef.current[index] = el)}
          className="panel w-screen h-screen flex items-center justify-center text-4xl font-bold text-white"
          style={{ backgroundColor: `hsl(${index * 60}, 80%, 50%)` }}
        >
          Page {index + 1}
        </div>
      ))}
    </div>
  </div>
  );
};

export default Rules;
