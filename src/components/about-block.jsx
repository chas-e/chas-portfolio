import React from 'react';
import Img from 'gatsby-image';
import Headshot from "../images/headshot.png";


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

            <p>I am an enthusiastic full stack software engineer excited by opportunities to learn and grow in a challenging, ever-changing field. I engineer simple, effective, & powerful solutions for users on and around the Web. I have recently been working on complex social and organizational problems by leveraging creative methodologies like Design Thinking in educational contexts. I was drawn to software engineering because I wanted to deepen my technical expertise, and make a career change into a highly demanded and highly demanding field, with greater multi-dimensional  opportunities for growth.</p>

            <p>I am a member of a vibrant community in Baltimore city, and love the city’s lush green spaces and stunning waterfront views. I also enjoy saying hi to all of the pets out on walks with their humans.</p>

        </>
    );
}

export default AboutBlock;