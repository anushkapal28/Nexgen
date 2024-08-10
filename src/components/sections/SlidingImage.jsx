import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './SlidingImage.css';
import p1 from '../../assets/img/p1.png';
import p2 from '../../assets/img/p2.png';
import p3 from '../../assets/img/p3.png';
import p4 from '../../assets/img/p4.png';
import p5 from '../../assets/img/p5.png';
import p6 from '../../assets/img/p6.png';
import p7 from '../../assets/img/p7.png';
import p8 from '../../assets/img/p8.png';

const slider1 = [
    {
        img: p1
    },
    {
        img: p2
    },
    {
        img: p3
    },
    {
        img: p4
    }
]

const slider2 = [
    {
        img: p5
    },
    {
        img: p6
    },
    {
        img: p7
    },
    {
        img: p8
    }
]

export default function SlidingImage() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div>
            
        
        <div ref={container} className='slidingImages'>
        <div className='al'>
        OUR CLIENTS
        </div>
            <motion.div style={{x: x1}} className='slider'>
                {slider1.map((project, index) => {
                    return (
                        <div key={index} className='project' style={{backgroundColor: project.color}}>
                            <div className='imageContainer'>
                                <img fill={true} height={80} className='img' alt={"image"} src={project.img}/> {/* Corrected here */}
                            </div>
                        </div>
                    );
                })}
            </motion.div>
            <motion.div style={{x: x2}} className='slider'>
                {slider2.map((project, index) => {
                    return (
                        <div key={index} className='project'>
                            <div className='imageContainer'>
                                <img fill={true} height={80} className='img' alt={"image"} src={project.img}/> {/* Corrected here */}
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
        </div>
    );
}