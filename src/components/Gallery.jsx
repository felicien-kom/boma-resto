import { useState, useEffect } from "react";
import image1 from "../assets/images/restaurant-interior-1.jpg";
import image2 from "../assets/images/restaurant-exterior.jpg";
import image3 from "../assets/images/traditional-decor.jpg";
import image4 from "../assets/images/table-setting.jpg";
import image5 from "../assets/images/local-ingredients.jpg";
import image6 from "../assets/images/ndole-dish.jpg";
import image7 from "../assets/images/chef-cooking.jpg";
import image8 from "../assets/images/happy-customers.jpg";
import { svgNext, svgPrevious } from "../content/elements";
import { useLang } from "../App";

const imagesFR = [
    {image: image1, title: "Ambiance traditionnelle", descrip: "Un cadre authentique qui vous transporte au coeur du Cameroun"},
    {image: image2, title: "Bienvenue chez Bôma", descrip: "Une facade accueillante qui réflète notre hospitalité"},
    {image: image3, title: "Décor traditionnel", descrip: "Un environnement riche en culture camerounaise"},
    {image: image4, title: "Art de la table", descrip: "Une présentation soignée pour une expérience mémorable"},
    {image: image5, title: "Ingrédients locaux", descrip: "Des produits frais sélectionnés avec soin"},
    {image: image6, title: "Ndolé authentique", descrip: "Notre spécialité préparée selon la tradition ancestrale"},
    {image: image7, title: "Savoir-faire artisanal", descrip: "Nos chefs perpétuent les techniques culinaires traditionnelles"},
    {image: image8, title: "Moments de partage", descrip: "La joie de nos clients fait notre fierté"}
];
const imagesEN = [
    {image: image1, title: "Traditional Atmosphere", descrip: "An authentic setting that transports you to the heart of Cameroon"},
    {image: image2, title: "Welcome to Bôma", descrip: "A welcoming facade reflecting our hospitality"},
    {image: image3, title: "Traditional Decor", descrip: "An environment rich in Cameroonian culture"},
    {image: image4, title: "Table Art", descrip: "A carefully presented experience for a memorable meal"},
    {image: image5, title: "Local Ingredients", descrip: "Fresh products selected with care"},
    {image: image6, title: "Authentic Ndolé", descrip: "Our specialty prepared according to ancestral tradition"},
    {image: image7, title: "Artisanal Expertise", descrip: "Our chefs uphold traditional culinary techniques"},
    {image: image8, title: "Moments of Sharing", descrip: "The joy of our customers is our pride"}
];
const dataGallery = {
    FR: {
        title: "Galerie",
        description: "Plongez dans l'ambiance chaleureuse de notre restaurant"
    },
    EN: {
        title: "Gallery",
        description: "Immerse yourself in the warm atmosphere of our restaurant"
    }
};

function Gallery() {
    const { lang } = useLang();
    const data = dataGallery[lang];

    const lImages = { FR: imagesFR, EN: imagesEN};
    const images = lImages[lang];
    const [index, setIndex] = useState(0);

    // Défilement automatique
    useEffect(() => {
        const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (i) => setIndex(i);

    return (
        <section className="gallery-section" id="gallery-section">
            <div className="container">
                <div className="gallery-title">{data.title}</div>
                <div className="gallery-descrip">{data.description}</div>
                <div className="carousel">
                    <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
                        {images.map((item, i) => (
                            <div className="carousel-element" key={i}>
                                <img src={item.image} alt={`slide-${i}`} className="carousel-img" />
                                <div className="carousel-info">
                                    <span className="carousel-title">{item.title}</span>
                                    <span className="caousel-descrip">{item.descrip}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button type="button" className="previous-img" onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}>
                        {svgPrevious}
                    </button>
                    <button type="button" className="next-img" onClick={() => setIndex((prev) => (prev + 1) % images.length)}>
                        {svgNext}
                    </button>
                    <div className="carousel-dots">
                        {images.map((item, i) => (
                            <button type="button" key={i} onClick={() => goTo(i)} 
                                className={(index == i) ? "active-img": ""}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;