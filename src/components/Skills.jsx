import "../cssStyling/skills.css";

function Skills(){
    return(
        <section className="skill-content" id="skills">
            <div className="skills-page">
                <h1 className="skill" style={{color: '#d7636b'}}> My Skills </h1>
                <p className="skill-paragraph">Have gained knowledge and understanding in languages such as Java, python, javascript,
                   web(html and css), and database(MySQL and MongoDB) as well as their frameworks such as java Springboot, ExpressJs and React.
                   Through this knowledge, together with machine learning have gained skills in data prediction and analysis.
                </p>

                <div className="projects">
                    <h2> These are some of the projects have done primarily building web applications</h2>
                    <div className="myproject">
                        <a href="https://github.com/EffieDev1/hotelmanagement-frontend.git"> Hotel Management System</a>
                    </div>
                    <div className="myproject1">
                        <a href="https://github.com/EffieDev1/taskmanagerweb-backend.git"> Task Manager App</a>
                    </div>
                    <div className="myproject2">
                    <a href="https://github.com/EffieDev1/movieapp.git">API movie App</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;