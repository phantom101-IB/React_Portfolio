import { useGlobalContext } from "./context"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"

const Navbar = () => {
    const { navButtons } = useGlobalContext()
    const [checkState, setCheckState] = useState(false)
    const token = localStorage.getItem("token")
    const name = JSON.parse(localStorage.getItem("name"))

    const nav = () => {
        setCheckState(false)
    }

    const clearStorage = () => {
        const clear = localStorage.clear()
        location.reload()
    }
    if (token) {
        setTimeout(() => {
            localStorage.removeItem("token")
            localStorage.removeItem("name")
            location.reload()
        }, 600000)
    }

    return (
        <nav className="nav-bar">
            <div className="nav-controller">
                <div className="logo-div">
                    <h3>Phantom</h3>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <ul
                        className={`nav-buttons ${checkState && "active"} ${
                            token && "Login"
                        }`}
                    >
                        {/* {navButtons.map((button, index) => {
                            return <li key={index}>{index}</li>
                        })} */}
                        <li onClick={nav}>
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={nav}>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                        <li onClick={nav}>
                            <Link to="/login">Login</Link>
                        </li>
                        {token && <li onClick={clearStorage}>Logout</li>}
                    </ul>
                    {token && (
                        <div className="profile">
                            <div className="profile-item">
                                <CgProfile />{" "}
                            </div>
                            <p>{name.split(" ")[1]}</p>
                        </div>
                    )}
                </div>
                <div
                    className="hamburger-menu"
                    onClick={() => setCheckState(!checkState)}
                >
                    {checkState ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
