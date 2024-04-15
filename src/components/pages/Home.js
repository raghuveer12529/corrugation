import { useRef } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Boxes from './Boxes/Boxes';
import Navbar from '../Navbar';

function Home() {
    const boxesRef = useRef(null);

    const scrollToRef = () => {
        console.log("TEXT", boxesRef)
        if (boxesRef.current) {
            boxesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <HeroSection scrollToRef={scrollToRef} />
            <div ref={boxesRef}>
                <Boxes />
            </div>
        </>
    )
}

export default Home;