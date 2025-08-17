import { svgLocation, svgCall, svgEmail, svgSchedule, svgFacebook, svgWhatsapp, svgInstagram, svgSend } from "../content/elements";
import { useLang } from "../App";

const dataContact = {
    FR: {
        title: "Contactez-nous",
        fromTitle: "Envoyez-nous un message",
        address: "Adresse",
        location: "123 Avenue de l'indépendance,\n Yaoundé, Cameroun",
        phone: "Téléphone",
        schedule: "Horaires",
        follow: "Suivez-nous",
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le message"
    },
    EN: {
        title: "Contact Us",
        fromTitle: "Send us a message",
        address: "Address",
        location: "123 Independence Avenue,\n Yaoundé, Cameroon",
        phone: "Phone",
        schedule: "Hours",
        follow: "Follow us",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send message"
    }
};

function Contact() {
    const { lang } = useLang();
    const data = dataContact[lang];

    return (
        <section className="contact-section" id="contact-section">
            <div className="container">
                <div className="div-contacts">
                    <span className="contacts-title">{data.title}</span>
                    <div className="contacts">
                        <div className="contact">
                            <div className="contact-icon">
                                {svgLocation}
                            </div>
                            <div className="contact-value">
                                <span className="value-title">{data.address}</span>
                                <span className="value-value" style={{ whiteSpace: "pre-line" }}>{data.location}</span>
                            </div>
                        </div>
                        <div className="contact">
                            <div className="contact-icon">
                                {svgCall}
                            </div>
                            <div className="contact-value">
                                <span className="value-title">{data.phone}</span>
                                <span className="value-value">+237 6 55 55 55 55</span>
                            </div>
                        </div>
                        <div className="contact">
                            <div className="contact-icon">
                                {svgEmail}
                            </div>
                            <div className="contact-value">
                                <span className="value-title">Email</span>
                                <span className="value-value">contact@boma-resto.com</span>
                            </div>
                        </div>
                        <div className="contact">
                            <div className="contact-icon">
                                {svgSchedule}
                            </div>
                            <div className="contact-value">
                                <span className="value-title">{data.schedule}</span>
                                <span className="value-value">Lun - Ven: 11h00 - 22h00<br />Sam - Dim: 10h00 - 23h00</span>
                            </div>
                        </div>
                    </div>
                    <div className="div-follow">
                        <span className="follow-title">{data.follow}</span>
                        <div className="follow-options">
                            <a href="#">
                                {svgFacebook}
                            </a>
                            <a href="#">
                                {svgInstagram}
                            </a>
                            <a href="#">
                                {svgWhatsapp}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="div-email">
                    <form action="#" method="">
                        <div className="email-title" style={{ gridArea: "ftitle"}}>
                            <h3>{data.fromTitle}</h3>
                        </div>
                        <div className="form-element" style={{ gridArea: "fname" }}>
                            <label htmlFor="name">{data.name}</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form-element" style={{ gridArea: "femail" }}>
                            <label htmlFor="email">{data.email}</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="form-element" style={{ gridArea: "fsubject" }}>
                            <label htmlFor="subject">{data.subject}</label>
                            <input type="text" name="subject" id="subject" />
                        </div>
                        <div className="form-element" style={{ gridArea: "fmessage" }}>
                            <label htmlFor="message">{data.message}</label>
                            <textarea name="message" id="message" rows={5}></textarea>
                        </div>
                        <div className="form-element" style={{ gridArea: "fsend" }}>
                            <button type="button" className="btn-send-message">
                                {svgSend}
                                <span>{data.send}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;