import React from 'react';
import Img from "gatsby-image";
import Github from "../images/GitHub-Mark-64px.png";
import LinkedIn from "../images/LI-In-Bug.png";
import Twitter from "../images/Twitter_Logo_Blue.svg";

const SocMedia = () => {
    return (
        <>
            <ul
                style={{
                    listStyle: `none`,
                    display: `flex`,
                    flexDirection: `row`,
                    margin: `1.45rem`,
                    padding: `1.45rem`,
                    justifyContent: `space-evenly`,
                }}
            >

                <li>
                    <a href="https://github.com/chas-e">
                        <span role="img" aria-label="github link">
                            <img src={Github} alt="github mark"
                                style={{
                                    maxWidth: `2rem`,
                                    maxHeight: `2rem`,
                                    display: `flex`,
                                    flexDirection: `row`,
                                }}
                            />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/charlespatrickeubanks/">
                        <span role="img" aria-label="linkedin link">
                            <img src={LinkedIn} alt="linkedin logo"
                                style={{
                                    maxWidth: `2.5rem`,
                                    maxHeight: `2rem`,
                                    display: `flex`,
                                    flexDirection: `row`,
                                }}
                            />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/ChasEngineering">
                        <span role="img" aria-label="twitter link">
                            <img src={Twitter} alt="twitter logo"
                                style={{
                                    width: `3rem`,
                                    height: `3rem`,
                                    display: `flex`,
                                    flexDirection: `row`,
                                }}
                            />
                        </span>
                    </a>
                </li>


            </ul>
        </>
    );
}

export default SocMedia;