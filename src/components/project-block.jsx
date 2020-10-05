import React from 'react'
import RijksImgView from "../images/rijksmuseum-results-page.png"
import Spkrbx from "../images/spkrbx-final.png"
import HbtZn from "../images/habit-zen-final.png"
import Pycsso from "../images/pycasso-gallery.png"

const ProjectBlock = () => {
    return (
        <>
            <h2>Here are some examples of my work:</h2>

            <div className="projBlock">
                <ul
                    style={{
                        listStyle: `none`,
                        display: `flex`,
                        flexDirection: `row`,
                        justifyContent: `space-evenly`,
                        width: `100vmin`,
                    }}
                >
                    {projItems}
                </ul>
                <div className="imgBlock"
                    style={{
                        display: `flex`,
                        flexDirection: `row`,
                        justifyContent: `space-evenly`,
                        width: `100vmin`,
                        height: `100vmin`,
                        margin: `.5rem`,
                        padding: `1.45rem`,
                    }}
                >
                    <a href="https://chas-e.github.io/rijksmuseum-image-viewer">
                        <div className="projectImage" id="rijksImgView">
                            <span role="img" aria-label="Rijksmuseum Project Image and Link"> <img src={RijksImgView} alt="Rijks Results Page" />
                            </span>
                        </div>
                    </a>
                    &nbsp; &nbsp; &nbsp;
                    <a href="https://speakerbox.herokuapp.com">
                        <div className="projectImage" id="spkrbx">
                            <span role="img" aria-label="SpeakerBox Project Image and Link">
                                <img src={Spkrbx} alt="Speakerbox Landing Page" />
                            </span>
                        </div>
                    </a>
                    &nbsp; &nbsp; &nbsp;
                    <a href="https://habit-zen.herokuapp.com">
                        <div className="projectImage" id="hbtZn">
                            <span role="img" aria-label="Habit-Zen Project Image and Link">
                                <img src={HbtZn} alt="Habit-Zen Landing Page" />
                            </span>
                        </div>
                    </a>
                    &nbsp; &nbsp; &nbsp;
                    <a href="https://pycasso-629.herokuapp.com">
                        <div className="projectImage" id="pycsso">
                            <span role="img" aria-label="Pycasso Project Image and Link">
                                <img src={Pycsso} alt="Pycasso Landing Page" />
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

const projectData = [
    {
        title: "Rijksmuseum Image Viewer",
        description: "This application allows a user to search the Rijksmuseum’s collection for art based on the title of the work.",
        technologies: "HTML5/CSS3, Javascript, Materialize style library, Rijksmuseum API, AJAX",
        github: "https://github.com/chas-e/rijksmuseum-image-viewer",
    },
    {
        title: "SpeakerBox",
        description: "Speakerbox puts it's users favorite music front and center. This application allows users to save data on their favorite tracks, albums, and artists, and allows associating track data with album data via dropdown.",
        technologies: "MongoDB Atlas, Mongoose, Express.JS, Node.JS, Javascript, HTML5/CSS3, Passport.JS, Auth0 w Spotify strategy",
        github: "https://github.com/chas-e/speakerbox",
    },
    {
        title: "Habit-Zen",
        description: "I worked as a member of a team for this project, along with teammates Chengo Kargbo and Diego Burgos. We created a simple yet powerful app to track daily todos and help users build positive habits (or abandon habits that aren’t working out for them anymore).",
        technologies: "React.js, MongoDB, Mongoose.JS, Express.JS, Node.JS, JavaScript (ES6), HTML5/CSS3, Bootstrap, JSON, Auth0 with JWT, & TheySaidSo Random Quotes API",
        github: "https://github.com/chas-e/habit-zen",
    },
    {
        title: "Pycasso",
        description: "Pycasso is a virtual platform that allows users to upload, share, and create digital art and images. Pycasso was a team effort between Jack Lambert, Manny Fuentes, and myself.",
        technologies: "Python, HTML5/CSS3, Django, DTL, Javascript (ES6), PostgresQL, Gunicorn, Tachyons.io",
        github: "https://github.com/chas-e/pycasso",
    },
]

const projItems = projectData.map((p, idx) => (
    <ul key={idx} className="projectList" id={`proj${idx + 1}`}
        style={{
            listStyle: `none`,
            border: `3px solid`,
            margin: `.5rem`,
            padding: `1.45rem`,
            lineHeight: 1.5,

        }}>
        <li className="projectItem"><strong>Title:</strong> {p.title}</li>
        <li className="projectItem"><strong>Description:</strong> {p.description}</li>
        <li className="projectItem"><strong>Technologies:</strong> {p.technologies}</li>
        <li className="projectItem"><a href={p.github}>Github</a></li>
    </ul>
))

export default ProjectBlock
