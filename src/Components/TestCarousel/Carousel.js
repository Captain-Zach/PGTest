import React from 'react';
import example from './assets/mug_wallPaper_02.jpg';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

const TopCarousel = () => {
    return ( 
        
            <div>
                <img src={example} />
            </div>
        
     );
}

// ReactDOM.render(<TopCarousel />, document.querySelector('.demo-carousel'));
 
export default TopCarousel;