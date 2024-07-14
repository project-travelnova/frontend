import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroSlider.css';
import image_1 from '../assets/1.jpg';
import image_2 from '../assets/2.jpg';
import image_3 from '../assets/3.jpg';
import image_4 from '../assets/4.jpg';
import image_5 from '../assets/5.jpg';
import image_6 from '../assets/6.jpg';
import image_7 from '../assets/7.jpg';

const HeroSlider = () => {
    return (
        <div className="hero-slider">
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} className="hero-prev-button">
                            &lt;
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} className="hero-next-button">
                            &gt;
                        </button>
                    )
                }
            >
                <div>
                    <img src={image_1} alt="Slide 1" />
                    <div className="legend">
                        <h2>Share your Memories with TravelNova</h2>
                        
                    </div>
                </div>
                <div>
                    <img src={image_2} alt="Slide 2" />
                    <div className="legend">
                        <h2>Explore the World with Us</h2>
                    </div>
                </div>
                <div>
                    <img src={image_3} alt="Slide 3" />
                    <div className="legend">
                        <h2>Adventure Awaits</h2>
                        
                    </div>
                </div>
                <div>
                    <img src={image_4} alt="Slide 3" />
                    <div className="legend">
                        <h2>Adventure Awaits</h2>
                        
                    </div>
                </div>
                <div>
                    <img src={image_5} alt="Slide 3" />
                    <div className="legend">
                        <h2>Adventure Awaits</h2>
                        
                    </div>
                </div>
                <div>
                    <img src={image_6} alt="Slide 3" />
                    <div className="legend">
                        <h2>Adventure Awaits</h2>
                        
                    </div>
                </div>
                <div>
                    <img src={image_7} alt="Slide 3" />
                    <div className="legend">
                        <h2>Adventure Awaits</h2>
                        
                    </div>
                </div>
                {/* Add more slides as needed */}
            </Carousel>
        </div>
    );
};

export default HeroSlider;
