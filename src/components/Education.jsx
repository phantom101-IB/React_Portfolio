import { useEffect, useState } from "react"
import { useGlobalContext } from "./context"

const Education = () => {
    const { schools } = useGlobalContext()
    const [filterParam, setFilterParam] = useState("Primary")
    // const categories = schools.map((item) => {
    //     const { category } = item
    //     return category
    // })

    const newSchool = schools.filter((item) => item.category === filterParam)
    const filterFunc = (e) => {
        const Auth = localStorage.getItem("token")
        if (Auth) {
            const text = e.target.textContent
            setFilterParam(text)
        } else {
            alert(
                "For security Reasons, you must login before you can access these items"
            )
        }
    }

    return (
        <section className="education-section">
            <div className="education-control">
                <h3>EDUCATION</h3>
                <div className="education">
                    <ul className="edu-buttons">
                        {schools.map((school, index) => {
                            const { category } = school
                            return (
                                <li key={index} onClick={filterFunc}>
                                    {category}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="edu-level">
                        {newSchool.map((item, index) => {
                            const {
                                category,
                                name,
                                from,
                                to,
                                position,
                                image,
                            } = item
                            return (
                                <div className="edu-level-details" key={index}>
                                    <div className="edu-level-text-details">
                                        <h4>
                                            Name: <span>{name}</span>
                                        </h4>
                                        <h4>
                                            From: <span>{from}</span>
                                        </h4>
                                        <h4>
                                            To: <span>{to}</span>
                                        </h4>
                                        <h4>
                                            Position Held:{" "}
                                            <span>{position}</span>
                                        </h4>
                                    </div>
                                    <div className="edu-level-cert">
                                        <div className="edu-cert">
                                            {image && (
                                                <img
                                                    src={image}
                                                    alt={name}
                                                ></img>
                                            )}
                                        </div>
                                        <h4>Certificate</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
