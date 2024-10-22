// CustomCursor.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./assets/css/CustomCursor.css";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 125,
      y: mousePosition.y - 125,
    },
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut" }}
      />
    </>
  );
};

export default CustomCursor;
