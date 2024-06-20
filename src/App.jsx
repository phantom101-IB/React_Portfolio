import React, { useEffect, useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Navbar from "./components/NavBar"
import Projects from "./components/Projects"
import Loading from "./components/Loading"
import Login from "./components/Logins"
import Contacts from "./components/Contacts"

function App() {
    const token = localStorage.getItem("token")
    if (token) {
        alert("Welcome, please note: you will be logged out after 10min")
    }
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <React.Fragment>
                            <Landing />
                            <Education />
                            <Projects />
                            <Footer />
                        </React.Fragment>
                    }
                />

                <Route path="/contacts" element={<Contacts />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App
