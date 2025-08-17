import { useEffect, useState } from "react";
import logo from "../assets/images/logo1.jpg";
import Navbar from "./Navbar";
import { svgMore, flagFrance, flagEngland, flagSpanish, svgLight, svgDark, svgMenu } from "../content/elements";
import { useLang } from "../App";

function Header() {
    const { lang, setLang } = useLang();

    const [lightMode, setLightMode] = useState(true);
    useEffect(() => {
        document.body.classList.toggle('light');
    }, [lightMode]);
    
    const [showNavbar, setShowNavbar] = useState(false);
    
    const [langOpen, setLangOpen] = useState(false);
    const languagesChoices = [
        {flag: flagFrance, value: 'FR'},
        {flag: flagEngland, value: 'EN'}
    ];
    /*,
        {flag: flagSpanish, value: 'ES'} */
    const [valueLanguage, setValueLanguage] = useState(languagesChoices[0]);
    const handleSelectLanguage = (index) => {
        setValueLanguage(languagesChoices[index]);
        setLang(languagesChoices[index].value);
    };

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
        const currentY = window.scrollY;
        const triggerHeight = window.innerHeight * 0.75;

        if (currentY < triggerHeight) {
            // Toujours visible tant qu’on n’a pas descendu 200px
            setShow(true);
            if (timeoutId) clearTimeout(timeoutId); // on annule tout timer
            return;
        } else {
            if (currentY > lastScrollY) {
            // On descend → cacher
            setShow(false);
            } else {
            // On monte → montrer mais temporairement
            setShow(true);
            // Si un ancien timer existe → on l'efface
            if (timeoutId) clearTimeout(timeoutId);

            // Nouveau timer pour recacher après 2s
            const id = setTimeout(() => setShow(false), 3000);
            setTimeoutId(id);

            }
        }

        setLastScrollY(currentY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, timeoutId]);

    return (
        <header className={`header-section ${show ? "visible" : "hidden"}`}>
            <div className="container">
                <div className="div-logo">
                    <img src={logo} alt="Restaurant Boma" className="logo" />
                    <span className="nomination">BÔMA</span>
                </div>
                <Navbar className={showNavbar ? "show-navbar" : ""} onClick={() => setShowNavbar(!showNavbar)}/>
                <div className="options">
                    <div className="language" onClick={() => setLangOpen(!langOpen)}>
                        <input type="hidden" name="value-language" id="value-language" />
                        <div className="actual-language" id="actual-language">
                            <>{valueLanguage.flag} {valueLanguage.value}</>
                        </div>
                        <div className="more">
                            {svgMore}
                        </div>
                        {langOpen && (
                            <div className="language-choices">
                                {languagesChoices.map((item, index) => (
                                    <div className="language-choice" key={index}
                                        onClick={() => handleSelectLanguage(index)}
                                    >
                                        {item.flag}&nbsp;{item.value}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="theme">
                        <button type="button" onClick={() => setLightMode(!lightMode)}>
                            {lightMode ? svgLight : svgDark}
                        </button>
                    </div>
                    <div className="burger">
                        <button type="button" onClick={() => setShowNavbar(!showNavbar)}>
                            {svgMenu}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;