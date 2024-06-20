import { useEffect, useRef } from "react"
import { useGlobalContext } from "./context"
import { useTypewriter, Cursor } from "react-simple-typewriter"

const Landing = () => {
    const { skills } = useGlobalContext()
    const [text] = useTypewriter({
        words: ["Pro. Teacher", "Designer", "Web Developer"],
        loop: true,
        delaySpeed: 3000,
        deleteSpeed: 150,
    })
    return (
        <section className="landing-page">
            <div className="land-controller">
                <div className="text-div">
                    <div className="text-main">
                        <div className="i-am">
                            <h1>
                                I am a{" "}
                                <span className="auto-type">
                                    {text}
                                    <Cursor />
                                </span>
                            </h1>
                        </div>
                        <div className="p-div">
                            <p>
                                Dear Employers, welcome to my Portforlio page. I
                                hope you find this page useful and convincing
                                towards my employment
                            </p>
                            <p>
                                I am a self-taught full stack developer. I have
                                no experience in web development and I am
                                looking for a job to build up my experience and
                                skills.
                            </p>
                            <p>Career Wise, I am a Professional Teacher</p>
                            <p>
                                Thank You for visiting my page, I hope it will
                                help convince you towards my employment
                            </p>
                        </div>
                    </div>
                    <div className="skill-div">
                        <h3>Skills</h3>
                        <div className="skills-div">
                            {skills.map((item, index) => {
                                const { skill, image } = item
                                return (
                                    <div className="skill-control" key={index}>
                                        <div className="skill-img">
                                            <img src={image} alt={skill} />
                                        </div>
                                        <h4>{skill}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="image-div">
                    <div className="img">
                        <img
                            src="/src/Images/IMG-20191225-WA0001.jpg"
                            alt="profile"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing
