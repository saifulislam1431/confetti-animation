"use client"

import { useState } from "react";
import { caveat } from "./fonts";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

//#FF7D87

export default function Home() {

  const [isBlast, setIsBlast] = useState(false);

  const duration = 15 * 1000;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const handleClick = () => {
    setIsBlast(true)
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <motion.div initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isBlast ? 0 : 1, y: isBlast ? -1000 : 0, transition: {
            duration: 1.3,
            type: "spring"
          }
        }}>
        <button className="button" onClick={handleClick}>
          <div className="button__line"></div>
          <div className="button__line"></div>
          <span className="button__text">Click To Fireworks</span>
          <div className="button__drow1"></div>
          <div className="button__drow2"></div>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -1000 }}
        animate={{
          opacity: isBlast ? 1 : 0, y: isBlast ? 0 : -1000, transition: {
            duration: 1.3,
            type: "spring",
            bounce: 0.4
          }
        }}
      >
        <p className={`${caveat.className} text-6xl text-[#FF3268]`}>Congratulation!! You did it.</p>
      </motion.div>
    </main>
  );
}
