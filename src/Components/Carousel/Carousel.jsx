import React from 'react'
import Image from "react-bootstrap/Image"
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/1.jpg';
import styles from "./Carousel.module.css"

function UncontrolledExample() {
    return (
        <div className={styles.box}>
            <Carousel>
                <Carousel.Item>
                    <Image src={img1} className={styles.image} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img1} className={styles.image} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={img1} className={styles.image} />
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default UncontrolledExample;