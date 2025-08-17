import { svgCall, svgEmail, svgFacebook, svgInstagram, svgLocation, svgWhatsapp } from "../content/elements";
import { useLang } from "../App";
import { dataNavbar } from "./Navbar";

const dataFooter = {
    FR: {
        moto: "L'authenticité de la cuisine camerounaise dans un cadre chaleureux et convivial.",
        rapidLinks: "Liens rapides",
        contactInfo: "Informations de contact",
        address: "123 Avenue de l'indépendance,\n Yaoundé, Cameroun",
        rights: "Tous droits réservés."
    },
    EN: {
        moto: "Authentic Cameroonian cuisine in a warm and friendly setting.",
        rapidLinks: "Quick links",
        contactInfo: "Contact information",
        address: "123 Independence Avenue,\n Yaoundé, Cameroon",
        rights: "All rights reserved."
    }
};

function Footer() {
    const { lang } = useLang();
    const data = dataFooter[lang];
    const dataLink = dataNavbar[lang];

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="first">
                    <div className="footer-banner">
                        <span className="banner-title">Bôma</span>
                        <span className="banner-moto">{data.moto}</span>
                        <span className="banner-social">
                            <a href="#">
                                {svgFacebook}
                            </a>
                            <a href="#">
                                {svgInstagram}
                            </a>
                            <a href="#">
                                {svgWhatsapp}
                            </a>
                        </span>
                    </div>
                    <div className="footer-nav">
                        <span className="footer-title">{data.rapidLinks}</span>
                        <div className="rapid-links">
                            <a href="#hero-section">{dataLink.home}</a>
                            <a href="#about-section">{dataLink.about}</a>
                            <a href="#menu-section">{dataLink.menu}</a>
                            <a href="#gallery-section">{dataLink.gallery}</a>
                            <a href="#contact-section">{dataLink.contact}</a>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <div className="footer-title">{data.contactInfo}</div>
                        <div className="contact-infos">
                            <div className="contact-info" style={{ whiteSpace: "pre-line" }}>
                                {svgLocation}{data.address}
                            </div>
                            <div className="contact-info">
                                {svgCall}+237 6 55 55 55 55
                            </div>
                            <div className="contact-info">
                                {svgEmail}contact@boma-resto.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second">
                    © 2025 Bôma Restaurant. {data.rights}
                </div>
            </div>
        </footer>
    );
}

export default Footer;