import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

import Image from "next/image";

const ThemButton = () => {
  const { theme, setTheme } = useTheme();
  const [themeUrl, setThemeUrl] = useState("/images/eye-w.svg");
  useEffect(() => {
    returnUrl();
    return () => {};
  }, [theme]);

  const returnUrl = useCallback(() => {
    switch (theme) {
      case "light":
        setThemeUrl("/images/eye-b.svg");
        break;
      case "dark":
        setThemeUrl("/images/eye-w.svg");
        return;
      default:
        setThemeUrl("/images/eye-b.svg");
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div className="z-50">
      <button
        className="flex w-[50px] z-[9999] h-[48px] fixed 2xl:left-[9.6%] lg:left-[6%] bottom-16 justify-center bg-transparent items-center rounded-full "
        onClick={handleTheme}
      >
        <Image className="them-image" width={30} height={30} alt="image" src={themeUrl} />
      </button>
    </div>
  );
};

export default ThemButton;
