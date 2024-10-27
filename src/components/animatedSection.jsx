import React, { useState, useEffect, useRef } from "react";
import VideoDisplay from "./rightContent";
import ScrollContent from "./ScrollContent";


const ScrollSpyLayout = () => {

  const ScrollLists = [
    {
      Ref: useRef(null),
      Id: "section1",
      title: "EDUCATION",
      percent: "80%",
      text1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      text2: "Lorem ipsum dolor sitconsectetur adipisicing elit. Deleniti ex ipsaconsectetur adipisicing elit. Deleniti ex ipsa amet consectetur adipisicing elit. Deleniti ex ipsa amet, eaque quisquam provident harum nulla?",
      text3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ullam pariatur totam."
    },
    {
      Ref: useRef(null),
      Id: "section2",
      title: "EDUCATION",
      percent: "80%",
      text1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      text2: "Lorem ipsum dolor sitconsectetur adipisicing elit. Deleniti ex ipsaconsectetur adipisicing elit. Deleniti ex ipsa amet consectetur adipisicing elit. Deleniti ex ipsa amet, eaque quisquam provident harum nulla?",
      text3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ullam pariatur totam."
    },
    {
      Ref: useRef(null),
      Id: "section3",
      title: "EDUCATION",
      text1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      percent: "80%",
      text2: "Lorem ipsum dolor sitconsectetur adipisicing elit. Deleniti ex ipsaconsectetur adipisicing elit. Deleniti ex ipsa amet consectetur adipisicing elit. Deleniti ex ipsa amet, eaque quisquam provident harum nulla?",
      text3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ullam pariatur totam."
    },
    {
      Ref: useRef(null),
      Id: "section4",
      title: "EDUCATION",
      text1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      percent: "80%",
      text2: "Lorem ipsum dolor sitconsectetur adipisicing elit. Deleniti ex ipsaconsectetur adipisicing elit. Deleniti ex ipsa amet consectetur adipisicing elit. Deleniti ex ipsa amet, eaque quisquam provident harum nulla?",
      text3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo ullam pariatur totam."
    },
  ]


  const [activeSection, setActiveSection] = useState(null);



  // Reference for the left and right scrollable containers
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);

  // Intersection observer to track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    // Observe each section
    ScrollLists.forEach((itemRef) => {
      let X = itemRef.Ref
      console.log("x", X)
      if (X.current) observer.observe(X.current);
    });

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  // Sync scroll of the left container with the right container
  const handleRightScroll = () => {
    if (leftContainerRef.current && rightContainerRef.current) {
      leftContainerRef.current.scrollTop = rightContainerRef.current.scrollTop;
    }
  };

  const bgcolor = activeSection === "section1" ? "bg-purple-900" : activeSection === "section2" ? "bg-black" : "bg-yellow-900"

  return (
    <div className="hidden max-lg:hidden px-4 h-screen">
      {/* Left Section - Scrollable, taking 50% width */}
      <div
        ref={leftContainerRef}
        className="w-1/2 space-y-20 p-4 h-full overflow-y-scroll no-scrollbar mt-24"
      >
        {ScrollLists.map((item) => (
          <ScrollContent Id={item.Id} Ref={item.Ref} title={item.title} text1={item.text1} text2={item.text2} text3={item.text3} percent={item.percent} />
        ))}
      </div>

      {/* Right Section - Fixed Video, taking 50% width */}
      <div
        ref={rightContainerRef}
        className="w-1/2 p-8 sticky top-0 h-screen  flex items-center overflow-y-scroll"
        onScroll={handleRightScroll} // Listen to scroll on right container
      >
        <div className={`absolute w-[65%] h-[90vh] ml-auto rounded-curve-2 inset-0 ${bgcolor} -z-10 mt-10`}></div>
        {/* Render VideoDisplay component and pass the active section */}
        <VideoDisplay activeSection={activeSection} />
      </div>
    </div>
  );
};

export default ScrollSpyLayout;
