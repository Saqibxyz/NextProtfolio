"use client";

import { useEffect, useState } from "react";

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 10 + 5}s`,
});

const FireFliesBackground = () => {
  const [fireFlies, setFireFlies] = useState([]);
  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly();
      setFireFlies((currentFireflies) => [
        ...currentFireflies.slice(-14),
        newFirefly,
      ]);
    };
    const interval = setInterval(addFireflyPeriodically, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {fireFlies.map((fireFlies) => {
        return (
          <div
            key={fireFlies.id}
            className="absolute rounded-full  w-[8px] bg-firefly-radial h-[8px]"
            style={{
              top: fireFlies.top,
              left: fireFlies.left,
              animation: `move ${fireFlies.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireFliesBackground;
