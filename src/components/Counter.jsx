import React, { useState, useEffect, useRef } from "react";

const Counter = ({ targetNumber, duration, value, text }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        } else {
          setCount(0); // Reset count when the element is out of view
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    let start = 0;
    const increment = targetNumber / (duration / 10);

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(counterInterval);
      }
      setCount(Math.ceil(start));
    }, 10);
  };

  return (
    <div className="flex flex-col gap-6 px-14">
      <div ref={counterRef} className="text-7xl font-bold  text-[#D17DFE]">
        {count}{value}
      </div>
      <div>
        <h1 className="text-[#FFFFFF] text-[22px] font-extrabold ">{text}</h1>
      </div>
    </div>
  );
};

export default Counter