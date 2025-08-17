import hero2 from "../assets/images/hero2.jpg";
import { svgFood, svgLeaf, svgHeart } from "../content/elements";
import { useLang } from "../App";


const dataAbout = {
    FR: {
        title: "Notre Histoire",
        para1: "Depuis plus de 15 ans, Bôma vous invite à découvrir les saveurs authentiques du Cameroun. " +
            "Notre passion pour la cuisine traditionnelle nous guide dans la préparation de chaque plat.",
        para2: "Nous utilisons des ingrédients frais et des recettes transmises de génération en " +
            "génération pour vous offrir une expérience culinaire inoubliable.",
        authentic: "Authentique",
        fresh: "Frais",
        passion: "Passion"
    },
    EN: {
        title: "Our Story",
        para1: "For over 15 years, Bôma has been inviting you to discover the authentic flavors of Cameroon. " +
            "Our passion for traditional cuisine guides us in preparing every dish.",
        para2: "We use fresh ingredients and recipes passed down through generations " +
            "to offer you an unforgettable culinary experience.",
        authentic: "Authentic",
        fresh: "Fresh",
        passion: "Passion"
    }
};

function About() {
    const { lang } = useLang();
    const data = dataAbout[lang];

    return (
        <section className="about-section" id="about-section">
            <div className="container">
                <div className="about-banner">
                    <img src={hero2} alt="Hero 2" />
                </div>
                <div className="about-speech">
                    <h2 className="speech-title">{data.title}</h2>
                    <p>{data.para1}</p>
                    <p>{data.para2}</p>
                    <div className="speech-cards">
                        <div className="speech-card">
                            <div className="speech-ill">{svgFood}</div>
                            <div className="speech-text">{data.authentic}</div>
                        </div>
                        <div className="speech-card">
                            <div className="speech-ill">{svgLeaf}</div>
                            <div className="speech-text">{data.fresh}</div>
                        </div>
                        <div className="speech-card">
                            <div className="speech-ill">{svgHeart}</div>
                            <div className="speech-text">{data.passion}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;