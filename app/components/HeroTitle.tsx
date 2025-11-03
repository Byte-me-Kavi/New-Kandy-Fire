"use client";

import { useEffect, useState, useMemo } from "react";

export default function HeroTitle() {
  const phrases = useMemo(
    () => [
      { part1: "Your Safety", part2: "Our Priority." },
      { part1: "Stop Fires", part2: "Before They Start." },
      { part1: "Reliable Fire Protection", part2: "You Can Trust." },
    ],
    []
  );

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const speed = 80;
  const deleteSpeed = 50;
  const delayBetweenTexts = 2000;

  // Typing/Deleting effect with infinite loop
  useEffect(() => {
    // Get full text for current phrase
    const phrase = phrases[currentPhraseIndex];
    const currentText = `${phrase.part1} ${phrase.part2}`;

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
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    currentPhraseIndex,
    phrases,
  ]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Split displayed text into two parts with color styling
  const renderStyledText = () => {
    const currentPhrase = phrases[currentPhraseIndex];
    const part1Length = currentPhrase.part1.length;

    if (displayedText.length <= part1Length) {
      // Still typing the first part (red)
      return (
        <>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-red-700">
            {displayedText}
          </span>
        </>
      );
    } else {
      // Typing the second part (black)
      const part1 = displayedText.slice(0, part1Length);
      const part2 = displayedText.slice(part1Length);
      return (
        <>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-red-700">
            {part1}
          </span>
          <span className="text-gray-900">{part2}</span>
        </>
      );
    }
  };

  // Determine cursor color based on current typing position
  const getCursorColor = () => {
    const currentPhrase = phrases[currentPhraseIndex];
    const part1Length = currentPhrase.part1.length;

    // If typing in first part or deleting, use red
    if (displayedText.length <= part1Length) {
      return "text-red-600";
    }
    // If typing in second part, use black
    return "text-gray-900";
  };

  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1]">
      {renderStyledText()}
      <span
        className={`inline-block ${getCursorColor()} ${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
      >
        |
      </span>
    </h1>
  );
}
