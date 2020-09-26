import React from "react";


const Contact = () => {
    return (
        <>
            <h2>Please get in touch!</h2>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <p>I am excited to speak with you about current opportunities. Let's grow together.</p>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <div style={{ margin: `1.45rem auto`, }}>
                <a href="mailto:charles@chasengineering.dev"
                    style={{
                        border: `solid #64747c`,
                        padding: `1rem`,
                    }}>
                    ✉️ &nbsp; Get In Touch</a>
            </div>
        </>
    );
}

export default Contact;