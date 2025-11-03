"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  texts: string[]; // Array of texts to cycle through
  className?: string;
  speed?: number; // milliseconds per character
  cursorClassName?: string;
  deleteSpeed?: number; // milliseconds per character when deleting
  delayBetweenTexts?: number; // milliseconds to wait before deleting
}

export default function TypingAnimation({
  texts,
  className = "",
  speed = 100,
  cursorClassName = "",
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typing/Deleting effect with infinite loop
  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting && currentCharIndex < currentText.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Finished typing, wait before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting backward
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentCharIndex(0);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [
    currentCharIndex,
    currentTextIndex,
    displayedText,
    isDeleting,
    texts,
    speed,
    deleteSpeed,
    delayBetweenTexts,
  ]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayedText}
      <span
        className={`inline-block ${cursorClassName} ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      >
        |
      </span>
    </span>
  );
}
