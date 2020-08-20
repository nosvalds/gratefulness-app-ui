import React, { useState, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';

const WordCloud = ({ words }) => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    return (
        <div 
            id="wordcloud"
            style={{ 
                margin: "-3rem auto"
                
            }}
        >
            <ReactWordcloud words={words} size={[ width*1 , width*0.4]}/>
        </div>
    )
}
    
export default WordCloud;