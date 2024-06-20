import { useContext, createContext, useState, useEffect } from "react"
import { school, NavButtons, Skills, projects } from "../items.json"
const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [schools, setSchools] = useState([])
    const [navButtons, setNavButtons] = useState([])
    const [skills, setSkills] = useState([])
    const [project, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setSchools(school)
        setNavButtons(NavButtons)
        setSkills(Skills)
        setProjects(projects)
    }, [])

    return (
        <AppContext.Provider
            value={{
                schools,
                navButtons,
                skills,
                project,
                loading,
                setLoading,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
