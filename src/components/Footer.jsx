import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-control">
                <div className="socials">
                    <h4>Socials:</h4>
                    <div className="social-handler">
                        <a href="">
                            <FaFacebook />
                        </a>
                        <a href="">
                            <FaInstagram />
                        </a>
                        <a href="">
                            <FaTwitter />
                        </a>
                        <a href="">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
                <div className="direct-message">
                    <h3>Direct Message:</h3>
                    <form action="">
                        <div className="email-div">
                            <input type="email" placeholder="email" required />
                        </div>
                        <div>
                            <textarea
                                name="form-area"
                                placeholder="message"
                                id="phantom"
                            ></textarea>
                        </div>
                        <div className="button-div">
                            <input type="submit" required />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
