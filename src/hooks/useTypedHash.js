import { useEffect, useState } from "react";

const CHARS = "0123456789abcdef";

function randomHash(length) {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return out;
}

// Types out a hex hash one character at a time, then settles.
export function useTypedHash(length = 40, speed = 22) {
  const [display, setDisplay] = useState("");
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const target = randomHash(length);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplay(target.slice(0, i));
      if (i >= length) {
        clearInterval(interval);
        setSettled(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [length, speed]);

  return { hash: display, settled };
}
