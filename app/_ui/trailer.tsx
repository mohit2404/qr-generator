import { useEffect, useState } from "react";

export default function Trailer() {
  // state to save the mouse cordinates
  const [cordinates, setCordinates] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // function to check the mouse positiona and set it to the local state
    function handleMouseMove(event: MouseEvent) {
      setCordinates({
        x: event.clientX,
        y: event.clientY,
      });
    }

    // add mousemove eventlistener on entire window
    window.addEventListener("mousemove", handleMouseMove);

    // cleanup function to remove the eventlistner
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`pointer-events-none absolute -left-28 -top-28 -z-10 h-56 w-56 animate-morph rounded-blob bg-gradient-to-tr from-orange-400 to-purple-400 blur-[75px]`}
      style={{
        transform: `translate(${cordinates.x}px, ${cordinates.y}px)`,
      }}
    />
  );
}
