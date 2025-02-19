import { useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import normalizeWheel from "normalize-wheel";
import { useRafLoop } from "react-use";
import { useWindowSize } from "@react-hook/window-size";

const MarqueeItem = ({ children, speed }) => {
  const itemRef = useRef(null);
  const rectRef = useRef(null);
  const x = useRef(0);
  const [width, height] = useWindowSize();

  const setX = () => {
    if (!itemRef.current || !rectRef.current) return;

    const xPercentage = (x.current / rectRef.current.width) * 100;

    if (xPercentage < -100) x.current = 0;
    if (xPercentage > 0) x.current = -rectRef.current.width;

    itemRef.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
  };

  useEffect(() => {
    if (itemRef.current) {
      rectRef.current = itemRef.current.getBoundingClientRect();
    }
  }, [width, height]);

  const loop = () => {
    x.current -= speed.get(); // Control direction
    setX();
  };

  const [_, loopStart] = useRafLoop(loop, false);

  useEffect(() => {
    loopStart();
  }, []);

  return <motion.div className="item" ref={itemRef}>{children}</motion.div>;
};

const Marquee = ({ speed = 1, threshold = 0.014, wheelFactor = 1.8, dragFactor = 1.2, children }) => {
  const marqueeRef = useRef(null);
  const slowDown = useRef(false);
  const isScrolling = useRef(null);
  const x = useRef(0);
  const [Width] = useWindowSize();
  
  const speedSpring = useSpring(speed, { damping: 40, stiffness: 90, mass: 5 });
  const reverseSpeedSpring = useSpring(-speed, { damping: 40, stiffness: 90, mass: 5 }); // Reverse speed

  const handleOnWheel = (e) => {
    const normalized = normalizeWheel(e);
    x.current = normalized.pixelY * wheelFactor;

    if (isScrolling.current) {
      window.clearTimeout(isScrolling.current);
    }

    isScrolling.current = setTimeout(() => {
      speedSpring.set(speed);
      reverseSpeedSpring.set(-speed);
    }, 30);
  };

  const handleDragStart = () => {
    slowDown.current = true;
    marqueeRef.current.classList.add("drag");
    speedSpring.set(0);
    reverseSpeedSpring.set(0);
  };

  const handleOnDrag = (_, info) => {
    speedSpring.set(dragFactor * -info.delta.x);
    reverseSpeedSpring.set(dragFactor * info.delta.x);
  };

  const handleDragEnd = () => {
    slowDown.current = false;
    marqueeRef.current.classList.remove("drag");
    x.current = speed;
  };

  return (
    <div className="flex flex-col space-y-5">

      <div className="flex">
           
      <motion.div
        className="marquee"
        ref={marqueeRef}
        onWheel={handleOnWheel}
        drag="x"
        dragPropagation={true}
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDrag={handleOnDrag}
        onDragEnd={handleDragEnd}
        dragElastic={0.000001}
      >
        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
      </motion.div>

       
      <motion.div
        className="marquee"
        ref={marqueeRef}
        onWheel={handleOnWheel}
        drag="x"
        dragPropagation={true}
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDrag={handleOnDrag}
        onDragEnd={handleDragEnd}
        dragElastic={0.000001}
      >
        <MarqueeItem speed={speedSpring}>{children}</MarqueeItem>
      </motion.div>
      </div>
      
    <div className="flex ">
         
      <motion.div
        className="marquee"
        ref={marqueeRef}
        onWheel={handleOnWheel}
        drag="x"
        dragPropagation={true}
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDrag={handleOnDrag}
        onDragEnd={handleDragEnd}
        dragElastic={0.000001}
      >
        <MarqueeItem speed={reverseSpeedSpring}>{children}</MarqueeItem> 
      </motion.div>

       
       <motion.div
        className="marquee"
        ref={marqueeRef}
        onWheel={handleOnWheel}
        drag="x"
        dragPropagation={true}
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDrag={handleOnDrag}
        onDragEnd={handleDragEnd}
        dragElastic={0.000001}
      >
        <MarqueeItem speed={reverseSpeedSpring}>{children}</MarqueeItem> 
      </motion.div>
    </div>
     
    </div>
  );
};

export default Marquee;
