"use client";
import { useEffect, useRef } from "react";

const MouseMove = () => {
  const frontRef = useRef(null);
  const backRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const backpose = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (frontRef.current) {
        frontRef.current.style.left = `${e.clientX}px`;
        frontRef.current.style.top = `${e.clientY}px`;
      }

    }
      window.addEventListener("mousemove", move);

      const animate = () => {
        if (!backRef.current) return;

        backpose.current.x += (mouse.current.x - backpose.current.x) * 0.12;
        backpose.current.y += (mouse.current.y - backpose.current.y) * 0.12;

        backRef.current.style.left = `${backpose.current.x}px`;
        backRef.current.style.top = `${backpose.current.y}px`;

        requestAnimationFrame(animate); 

        // this for smooth animation they talk to browser every refresh we want to animate again eg : loop
      };

      animate();


    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <img
        ref={backRef}
        src="/public/images/ball.svg"
        width={20}
        height={20}
        style={{
          position: "fixed",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />
      <img
        ref={frontRef}
        src="/public/images/circle.svg"
        width={25}
        height={25}
        style={{
          position: "fixed",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default MouseMove;
