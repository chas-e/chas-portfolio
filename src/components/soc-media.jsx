import React from 'react';
import Img from "gatsby-image";

const SocMedia = () => {
    return (
        <>
            <ul style={{ listStyle: `none`, }}>

                <li><span aria-label="github link"><img src="src/images/GitHub-Mark-32px.png" alt="github mark" /></span></li>
                <li><span aria-label="linkedin link"><img src="src/images/LI-In-Bug.png" alt="linkedin logo" /></span></li>
                <li><span aria-label="twitter link"><img src="src/images/Twitter_Logo_Blue.png" alt="twitter logo" /></span></li>


            </ul>
        </>
    );
}

export default SocMedia;