import Button from './Button';
import { svgFood, svgCall, svgDown } from '../content/elements';
import { useLang } from '../App';

const dataHero = {
    FR: {
        title: "Bienvenue chez",
        moto: "L'authenticité de la cuisine camerounaise dans chaque bouchée",
        discoverText: "Découvrir le Menu",
        bookText: "Réserver"
    },
    EN: {
        title: "Welcome to",
        moto: "Authentic Cameroonian cuisine in every bite",
        discoverText: "Discover Menu",
        bookText: "Reserve"
    }
};

function Hero() {
    const { lang } = useLang();
    const data = dataHero[lang];

    return (
        <section className="hero-section" id="hero-section">
            <div className="hero-announcement">
                <span className="text-welcome">{data.title}</span>
                <span className="text-resto">Bôma</span>
                <p className="text-moto">
                    {data.moto}
                </p>
                <div className="call-to-action">
                    <Button svg={svgFood} msg={data.discoverText} className="btn-discover" />
                    <Button svg={svgCall} msg={data.bookText} className="btn-book" />
                </div>
                <div className="indicate-down">
                    {svgDown}
                </div>
            </div>
        </section>
    );
}

export default Hero;