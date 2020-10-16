import React from 'react'
import GitHub from "../images/GitHub-Mark-64px.png"
import LinkedIn from "../images/LI-In-Bug.png"
import Twitter from "../images/Twitter_Logo_Blue.svg"

const SocMedia = () => {
    return (
        <>
            <ul
                style={{
                    listStyle: `none`,
                    display: `flex`,
                    flexDirection: `row`,
                    margin: `4vmin`,
                    padding: `4vmin`,
                    justifyContent: `space-evenly`,
                }}
            >

                <li>
                    <a href="https://github.com/chas-e">
                        <span role="img" aria-label="github link">
                            <img src={GitHub} alt="github mark"
                                style={{
                                    maxWidth: `6vmin`,
                                    maxHeight: `6vmin`,
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
                                    maxWidth: `6vmin`,
                                    maxHeight: `6vmin`,
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
                                    width: `7vmin`,
                                    height: `7vmin`,
                                    display: `flex`,
                                    flexDirection: `row`,
                                }}
                            />
                        </span>
                    </a>
                </li>


            </ul>
        </>
    )
}

export default SocMedia