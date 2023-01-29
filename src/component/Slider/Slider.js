import React, { useState, useEffect } from 'react';
import { HeroButton } from '..'
import games from '../../fakeData/games';
import './Slider.scss'


function Slider() {
    const [index, setIndex] = useState(0);
    const delay = 8000;

    useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === games.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => { };
    }, [index]);

    return (
        <div className="slideshow">
            <div className="slideshowSlider fade"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {games.map((game, index) => (
                    <div className="slide" key={index}>
                        <img src={game.background_image} alt='' />
                        <div className="caption">
                            <div className='caption-header'> {game.name} </div>
                            <div className='caption-text'> {game.short_description} </div>
                            <div className="button-wrapper">
                                <HeroButton primary={true} text="Play now" />
                                <HeroButton primary={false} text="+ My list" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;