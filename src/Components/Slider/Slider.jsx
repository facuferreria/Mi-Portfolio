import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from './Slider.module.scss'


function Slider({images}) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel  variant="dark" activeIndex={index} onSelect={handleSelect}>
            {
                images.map((item, index) =>    
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt="Proyect demostration"
                        />
                    </Carousel.Item>
                )
            }
        </Carousel>
    )
}

export default Slider