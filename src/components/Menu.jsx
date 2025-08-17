import { useEffect, useState } from "react";
import { menuList } from "../content/elements";
import Card from "./Card";
import { useLang } from "../App";

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