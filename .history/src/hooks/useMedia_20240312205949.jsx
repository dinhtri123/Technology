import { useEffect, useState } from "react";

export const useMedia = () => {
const [isTablet, setIsTablet] = useState(false);

const handleResizeShowMenu = () => {
  const media = window.matchMedia("(min-width: 1025px)");
  media.matches ? setIsTablet(true) : setIsTablet(false);
};

useEffect(() => {
  handleResizeShowMenu(); 

  window.addEventListener("resize", handleResizeShowMenu);

  return () => {
    window.removeEventListener("resize", handleResizeShowMenu);
  };
}, []);
return [isTablet];
};

export const useMediaMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResizeShowMenu = () => {
    const media = window.matchMedia("(max-width: 1024px)");
    media.matches ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    handleResizeShowMenu();

    window.addEventListener("resize", handleResizeShowMenu);

    return () => {
      window.removeEventListener("resize", handleResizeShowMenu);
    };
  }, []);
  return [isMobile];
};