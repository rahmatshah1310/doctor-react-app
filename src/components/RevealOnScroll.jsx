import { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children, className = "" }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
