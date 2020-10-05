import React from "react"
import Headshot from "../images/headshot.png"


const AboutBlock = () => {
    return (
        <>
            <h2>About Me</h2>

            <img src={Headshot} alt="chas headshot"
                style={{
                    display: `inline`,
                    maxWidth: `10rem`,
                    maxHeight: `15rem`,
                }}
            />

            <p>I am a full stack software engineer excited to learn and grow in a challenging, ever-changing field. I work to engineer simple, effective, & powerful solutions for users on and around the Web. I have recently been working on complex problems using Design Thinking and Human Cantered Design. I was drawn to software engineering because I wanted to deepen my technical expertise, and make a career change into a highly demanded and highly demanding field, with greater multi-dimensional  opportunities for growth.</p>

            <p>I am a member of a vibrant community in Baltimore city, and love the city’s lush green spaces and stunning waterfront views. I have one fur baby named Trevor - a black and white rescue cat. I also enjoy saying hi to all of the pets out on walks with their humans around my block.</p>

        </>
    )
}

export default AboutBlock