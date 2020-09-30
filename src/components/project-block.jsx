import React from 'react';
import Img from "gatsby-image";
import { graphql } from "gatsby";
import "./project-block.module.css";

const ProjectBlock = () => {
    return (
        <>
            <h2>Here are some examples of my work:</h2>
            <ul style={{ listStyle: `none`, }}>
                {projItems}
            </ul>

        </>
    );
}

const projectData = [
    {
        title: "Rijksmuseum Image Viewer",
        description: "This application allows a user to search the Rijksmuseum’s collection for art based on the title of the work.",
        technologies: "HTML5/CSS3, Javascript, Materialize style library, Rijksmuseum API, AJAX",
        github: "https://github.com/chas-e/rijksmuseum-image-viewer",
        url: "https://chas-e.github.io/rijksmuseum-image-viewer/",

    },
    {
        title: "SpeakerBox",
        description: "Speakerbox puts it's users favorite music front and center. This application allows users to save data on their favorite tracks, albums, and artists, and allows associating track data with album data via dropdown.",
        technologies: "MongoDB Atlas, Mongoose, Express.JS, Node.JS, Javascript, HTML5/CSS3, Passport.JS, Auth0 w Spotify strategy",
        github: "https://github.com/chas-e/speakerbox",
        url: "https://speakerbox.herokuapp.com/",

    },
    {
        title: "Habit-Zen",
        description: "I worked as a member of a team for this project, along with teammates Chengo Kargbo and Diego Burgos. We created a simple yet powerful app to track daily todos and help users build positive habits (or abandon habits that aren’t working out for them anymore).",
        technologies: "React.js, MongoDB, Mongoose.JS, Express.JS, Node.JS, JavaScript (ES6), HTML5/CSS3, Bootstrap, JSON, Auth0 with JWT, & TheySaidSo Random Quotes API",
        github: "https://github.com/chas-e/habit-zen",
        url: "https://habit-zen.herokuapp.com",

    },
    {
        title: "Pycasso",
        description: "Pycasso is a virtual platform that allows users to upload, share, and create digital art and images. Pycasso was a team effort between Jack Lambert, Manny Fuentes, and myself.",
        technologies: "Python, HTML5/CSS3, Django, DTL, Javascript (ES6), PostgresQL, Gunicorn, Tachyons.io",
        github: "https://github.com/chas-e/pycasso",
        url: "https://pycasso-629.herokuapp.com",

    },
]

const projItems = projectData.map((p, idx) => (
    <ul key={idx} className="projectList"
        style={{
            listStyle: `none`,
            border: `3px solid`,
            margin: `1.45rem`,
            padding: `1.45rem`,
            lineHeight: 1.5,
        }}>
        <li className="projectItem"><strong>Title:</strong> {p.title}</li>
        <li className="projectItem"><strong>Description:</strong> {p.description}</li>
        <li className="projectItem"><strong>Technologies:</strong> {p.technologies}</li>
        <li className="projectItem"><a href={p.github}>Github</a></li>
        <li className="projectItem"><a href={p.url}>Url</a></li>
    </ul>
));

export default ProjectBlock;
