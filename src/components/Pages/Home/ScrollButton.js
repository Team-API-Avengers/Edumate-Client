import { LottiePlayer } from "lottie-react";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import topJson from "../../Assets/Animation/gotoTop.json";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 z-50 dark:bg-white  bg-green-200  right-4 p-4 text-white rounded-full transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <Lottie
        className="w-8 text-white"
        loop={true}
        animationData={topJson}
      ></Lottie>
    </button>
  );
}

export default ScrollButton;
