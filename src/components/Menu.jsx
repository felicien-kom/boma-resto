import { useEffect, useState } from "react";
import Card from "./Card";
import { useLang } from "../App";
import image1 from "../assets/images/ndole.jpg";
import image2 from "../assets/images/poulet-dg.jpg";
import image3 from "../assets/images/eru.jpg";
import image4 from "../assets/images/beignets.jpg";
import image5 from "../assets/images/brochettes.jpg";
import image6 from "../assets/images/plantains.jpg";
import image7 from "../assets/images/gateau-banane.jpg";
import image8 from "../assets/images/bissap.jpg";
import image9 from "../assets/images/koki.jpg";

const dataMenu = {
    FR: {
        title: "Nos Spécialités",
        description: "Découvrez nos plats traditionnels préparés avec amour et savoir-faire",
        all: "Tous les plats",
        main: "Plats principaux",
        starter: "Entrées",
        dessert: "Desserts"
    },
    EN: {
        title: "Our Specialties",
        description: "Discover our traditional dishes prepared with love and expertise",
        all: "All dishes",
        main: "Main dishes",
        starter: "Appetizers",
        dessert: "Desserts"
    }
};

const menuList = [
  {
    img: image1, title: { FR: "Ndolè", EN: "Ndolé" }, price: 2500, description: {
      FR: "Plat riche aux arachides et aux épinards",
      EN: "Rich dish with peanuts and spinach"
    },
    category: "MAIN",
    speciality: true
  },
  {
    img: image2,
    title: { FR: "Poulet DG", EN: "DG Chicken" },
    price: 3000,
    description: {
      FR: "Poulet aux légumes et plantains frits",
      EN: "Chicken with vegetables and fried plantains"
    },
    category: "MAIN",
    speciality: true
  },
  {
    img: image3,
    title: { FR: "Eru", EN: "Eru" },
    price: 2800,
    description: {
      FR: "Soupe traditionnelle aux feuilles d'eru",
      EN: "Traditional soup with eru leaves"
    },
    category: "MAIN",
    speciality: false
  },
  {
    img: image4,
    title: { FR: "Beignets Haricots", EN: "Bean Fritters" },
    price: 500,
    description: {
      FR: "Beignets croustillants aux haricots",
      EN: "Crispy bean fritters"
    },
    category: "STARTER",
    speciality: false
  },
  {
    img: image5,
    title: { FR: "Brochettes de Boeuf", EN: "Beef Skewers" },
    price: 1800,
    description: {
      FR: "Brochettes grillées aux épices locales",
      EN: "Grilled skewers with local spices"
    },
    category: "MAIN",
    speciality: false
  },
  {
    img: image6,
    title: { FR: "Plantain Frit", EN: "Fried Plantains" },
    price: 800,
    description: {
      FR: "Plantains dorés et croustillants",
      EN: "Golden and crispy plantains"
    },
    category: "STARTER",
    speciality: false
  },
  {
    img: image7,
    title: { FR: "Gâteau à la Banane", EN: "Banana Cake" },
    price: 1000,
    description: {
      FR: "Gâteau moelleux aux bananes locales",
      EN: "Soft cake with local bananas"
    },
    category: "DESSERT",
    speciality: false
  },
  {
    img: image8,
    title: { FR: "Bissap Frais", EN: "Fresh Bissap" },
    price: 600,
    description: {
      FR: "Boisson rafraîchissante à l'hibiscus",
      EN: "Refreshing hibiscus drink"
    },
    category: "DESSERT",
    speciality: false
  },
  {
    img: image9,
    title: { FR: "Koki", EN: "Koki" },
    price: 1500,
    description: {
      FR: "Gâteau de haricots cuit à la vapeur",
      EN: "Steamed bean cake"
    },
    category: "MAIN",
    speciality: false
  }
];

function Menu() {
    const { lang } = useLang();
    const data = dataMenu[lang];

    const [category, setCategory] = useState("ALL");
    const [filteredMenu, setFilteredMenu] = useState([]);
    useEffect(() => {
        if (category == 'ALL') {
            setFilteredMenu([...menuList]);
        } else {
            const filter = menuList.filter(item => (item.category == category));
            setFilteredMenu(filter);
        }
    }, [category]);

    return (
        <section className="menu-section" id="menu-section">
            <div className="container">
                <div className="menu-head">
                    <h2 className="menu-title">{data.title}</h2>
                    <p className="menu-moto">{data.description}</p>
                </div>
                <div className="menu-filter">
                    <div onClick={() => setCategory('ALL')} className={"filter-choice " + ((category == 'ALL') ? "active-category": "")}>{data.all}</div>
                    <div onClick={() => setCategory('MAIN')} className={"filter-choice " + ((category == 'MAIN') ? "active-category": "")}>{data.main}</div>
                    <div onClick={() => setCategory('STARTER')} className={"filter-choice " + ((category == 'STARTER') ? "active-category": "")}>{data.starter}</div>
                    <div onClick={() => setCategory('DESSERT')} className={"filter-choice " + ((category == 'DESSERT') ? "active-category": "")}>{data.dessert}</div>
                </div>
                <div className="menu-content">
                    {filteredMenu.map((item, index) => (
                        <Card
                            key={index}
                            card={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Menu;