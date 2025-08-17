import { useLang } from "../App";

export const dataNavbar = {
    FR: {
        home: "Accueil",
        about: "À propos",
        menu: "Menu",
        gallery: "Galerie",
        contact: "Contact"
    },
    EN: {
        home: "Home",
        about: "About",
        menu: "Menu",
        gallery: "Gallery",
        contact: "Contact"
    }
};

function Navbar({ className, onClick }) {
    const { lang } = useLang();
    const data = dataNavbar[lang];

    return (
        <nav className={"navbar " + className} onClick={onClick}>
            <a href="#hero-section" className="navbar__link navbar__link--active">{data.home}</a>
            <a href="#about-section" className="navbar__link">{data.about}</a>
            <a href="#menu-section" className="navbar__link">{data.menu}</a>
            <a href="#gallery-section" className="navbar__link">{data.gallery}</a>
            <a href="#contact-section" className="navbar__link">{data.contact}</a>
        </nav>
    );
}

export default Navbar;