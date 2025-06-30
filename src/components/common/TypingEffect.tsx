import type React from "react";
import { useEffect, useState } from "react";

const TypingEffect: React.FC = () => {
  const words = ["Creator", "Developer"];

  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: number;

    if (!deleting && charIndex <= currentWord.length) {
      timeout = window.setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 150);
    } else if (deleting && charIndex >= 0) {
      timeout = window.setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 100);
    } else if (charIndex === currentWord.length + 1) {
      timeout = window.setTimeout(() => setDeleting(true), 1000);
    } else if (charIndex === -1) {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <span translate="no">
      <span>{displayedText}|</span>
    </span>
  );
};

export default TypingEffect;
