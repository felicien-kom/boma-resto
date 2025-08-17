import { svgAdd } from "../content/elements";
import { useLang } from "../App";

const dataCard = {
    FR: {
        speciality: "Spécialité",
        order: "Ajouter à la commande"
    },
    EN: {
        speciality: "Speciality",
        order: "Add to order"
    }
};

function Card({ card }) {
    const { lang } = useLang();
    const data = dataCard[lang];

    return (
        <div className="card">
            {card.speciality && (
                <div className="speciality">{data.speciality}</div>
            )}
            <div className="card-banner">
                <img src={card.img} alt={card.title[lang]} />
            </div>
            <div className="card-details">
                <div className="card-title-price">
                    <span className="card-title">{card.title[lang]}</span>
                    <span className="card-price">{card.price} FCFA</span>
                </div>
                <div className="card-descrip">
                    {card.description[lang]}
                </div>
                <div className="card-btn">
                    <button type="button" className="btn-add">
                        {svgAdd}&nbsp;{data.order}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;