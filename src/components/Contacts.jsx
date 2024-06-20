import { FaWhatsapp } from "react-icons/fa"
import { HiOutlinePhone } from "react-icons/hi"
import { CgMail } from "react-icons/cg"
const Contacts = () => {
    return (
        <section className="contacts-section">
            <div className="contacts-div">
                <h3>Reach Me:</h3>
                <ul>
                    <li>
                        <FaWhatsapp />: <span>0554053564/0500526155</span>
                    </li>
                    <li>
                        <HiOutlinePhone />: <span>0554053564</span>
                    </li>
                    <li>
                        <CgMail />: <span>mi95920@gmail.com</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contacts
