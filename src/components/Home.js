import React, { useEffect, useState, useRef } from "react";
import { homeImage } from '../image'

const delay = 4000;

function Home() {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }
    
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === homeImage.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );
    
        return () => {
        resetTimeout();
        };
    }, [index]);

    return (
        <div className="home">
            <div className="home-container">
                <div className="home-text">
                    <h1>Eat-Go</h1>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;Explore the restaurants.</p>  
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share your preferences.</p>  
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remember the experience.</p>
                </div>
            </div>
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {homeImage.map((index) => (<img
        className="slide"
        src={index}
          ></img>
        ))}
      </div>

    <div className="slideshowDots">
    {homeImage.map((_, idx) => (
        <div
        key={idx}
        className={`slideshowDot${index === idx ? " active" : ""}`}
        onClick={() => {
            setIndex(idx);
        }}
        ></div>
        ))}
      </div>

    </div>
    </div>
    )
}

export default Home;