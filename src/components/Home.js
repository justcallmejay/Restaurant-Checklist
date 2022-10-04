import React, { useEffect, useState, useRef } from "react";
import { homeImage } from '../image'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
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
        // <div className="home">
        //     <div className="home-text">
        //     <h1>Welcome to Eat-Go</h1>
        //     <p>A site where you can explore the restaurants at your local area.  After taking a journey to the restaurant, their food, atmosphere, services, you can mark as complete and share your experience afterwards!</p>
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {homeImage.map((index) => (<img
        className="slide"
        src={index}
            // style={{ backgroundColor }}
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
    //     </div>
    // </div>
    )
}

export default Home;