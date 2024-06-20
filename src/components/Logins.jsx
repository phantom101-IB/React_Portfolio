import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import Loading from "./Loading"
import { useGlobalContext } from "./context"

const url = "https://portforlio-czn6.onrender.com/api/v1/auth/login"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState({})
    const { loading, setLoading } = useGlobalContext()

    const ForceReload = ({ to }) => {
        useEffect(() => {
            window.location.href = to
        }, [to])

        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const data = new FormData(e.target)
        const entries = Object.fromEntries(data)
        // setEmail("")
        setPassword("")
        // console.log(entries)
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(entries),
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }

    const { name, token } = data
    if (name && token) {
        localStorage.setItem("token", JSON.stringify(token))
        localStorage.setItem("name", JSON.stringify(name))
        return <ForceReload to="/" />
    }

    if (loading) {
        return <Loading />
    }

    return (
        <section className="login-section">
            <div className="login-control">
                <h3>Login Form</h3>
                <form onSubmit={handleSubmit}>
                    <div className="name-div">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="example@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="name-div">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p>{data.msg && data.msg}</p>
                    <input type="submit" className="submit-input" />
                </form>
            </div>
        </section>
    )
}

export default Login
