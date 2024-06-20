import { Link } from "react-router-dom"
import { useGlobalContext } from "./context"
import { useState } from "react"

const Projects = () => {
    const { project } = useGlobalContext()
    const projectNav = [
        ...new Set(
            project.map((item) => {
                const { project } = item
                return project
            })
        ),
    ]
    const [filterParam, setFilterParam] = useState("Front End")

    const singleProject = project.filter((item) => item.project === filterParam)
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
        <div className="project-main">
            <h3>Projects</h3>
            <div className="project-control">
                <ul className="project-nav edu-buttons">
                    {projectNav.map((item, index) => {
                        return (
                            <li key={index} onClick={filterFunc}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
                <div className="projects">
                    {singleProject.map((item, index) => {
                        const { name, link, image } = item
                        return (
                            <div className="project-div" key={index}>
                                <a href={link}>
                                    <div className="project-img">
                                        <img src={image} alt={name} />
                                    </div>
                                </a>
                                <h4>{name}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
