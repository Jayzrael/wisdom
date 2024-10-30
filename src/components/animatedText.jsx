import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  // Words to cycle through, starting and ending with "Growth"
  const words = ['Growth', 'Progress', 'Success', 'Innovation', 'Learning',];

  // Set initial state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSliding, setIsSliding] = useState(false); // For sliding effect

  useEffect(() => {
    if (!isAnimating) {
      // Delay before the first word change starts (1 second)
      const startAnimationTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, 5000);

      return () => clearTimeout(startAnimationTimeout);
    }

    if (isAnimating) {
      // Interval to change the word every 2 seconds
      const interval = setInterval(() => {
        setIsSliding(true); // Start sliding out the word
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => {
            if (prevIndex === words.length - 1) {
              clearInterval(interval);
              setIsAnimating(false);
              setIsSliding(false); // Reset sliding
              return 0; // Return to the initial state (Growth) after the full cycle
            }
            setIsSliding(false); // Start sliding in the new word
            return prevIndex + 1;
          });
        }, 500); // Wait for the sliding out effect to complete
      }, 500); // Change word every 2 seconds

      return () => clearInterval(interval);
    }
  }, [isAnimating, words]);

  return (
    <div className="w-full  max-w-2xl  mx-auto p-6 rounded-md bg-slate-200 bg-opacity-20 transition-all duration-500 ease-in-out">
      <div
        className={`max-lg:hidden flex flex-wrap items-center ${isAnimating
          ? 'justify-between' // Move words to opposite sides during animation
          : 'justify-center'   // Initial and end state, center everything
          } transition-all duration-1000 ease-in-out`}
      >
        <span className="text-4xl max-lg:text-6xl font-bold text-black transition-all duration-500 ease-in-out">
          {/* Reduced transition time for "Where" */}
          Where
        </span>
        <span
          className={`inline-block text-4xl max-lg:text-6xl font-bold mx-2 transition-transform duration-500 ease-in-out text-[#9403C5] ${isSliding ? 'translate-y-[-100%] opacity-0' : 'translate-y-[0] opacity-100'
            }`}
        >
          {words[currentWordIndex]}
        </span>
        <span className="text-4xl max-lg:text-6xl font-bold text-black transition-all duration-500 ease-in-out">
          {/* Reduced transition time for "Happens" */}
          Happens
        </span>
      </div>









      {/* second  */}
      <div
        className="lg:hidden"
      >
        <h1 className='text-6xl font-bold text-center leading-tight'>Where <span className='text-[#9703C9] text-7xl'> Progress</span> Happens</h1>
      </div>
    </div>
  );
};

export default AnimatedText;
