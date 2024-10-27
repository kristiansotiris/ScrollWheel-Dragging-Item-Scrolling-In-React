import { useRef, useState } from "react";
import "./App.css";

function Scrolling() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.classList.add("active");
  };

  const stopDragging = () => {
    setIsDragging(false);
    scrollRef.current.classList.remove("active");
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onWheelScroll = (e) => {
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  return (
    <div className="app_container">
      <div
        ref={scrollRef}
        className="horizontly_scroll"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={onMouseMove}
        onWheel={onWheelScroll}
      >
        <div className="scroll_item">Item 1</div>
        <div className="scroll_item">Item 2</div>
        <div className="scroll_item">Item 3</div>
        <div className="scroll_item">Item 4</div>
        <div className="scroll_item">Item 5</div>
        <div className="scroll_item">Item 6</div>
        <div className="scroll_item">Item 7</div>
        <div className="scroll_item">Item 7</div>
        <div className="scroll_item">Item 7</div>
      </div>
    </div>
  );
}

export default Scrolling;
