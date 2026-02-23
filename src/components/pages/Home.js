import { useRef } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Boxes from './Boxes/Boxes';

import StatsSection from '../StatsSection';

function Home() {
    const boxesRef = useRef(null);

    const scrollToRef = () => {
        if (boxesRef.current) {
            boxesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section aria-label="Hero">
                <HeroSection scrollToRef={scrollToRef} />
            </section>
            <section aria-label="Statistics">
                <StatsSection />
            </section>
            <section aria-label="Products" ref={boxesRef}>
                <Boxes />
            </section>
        </>
    )
}

export default Home;