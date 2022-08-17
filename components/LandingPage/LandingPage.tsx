import { Detail } from './Detail';
import { Hero } from './HeroBanner';
import { Promo } from './Promo';

export const Landing = () => {
    return (
        <section>
            <Hero />
            <Detail />
            <Promo />
        </section>
    );
};
