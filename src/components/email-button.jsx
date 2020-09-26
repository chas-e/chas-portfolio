import React from 'react';

const EmailButton = () => {
    return (
        <div style={{ margin: `1.45rem auto`, }}>
            <a href="mailto:charles@chasengineering.dev"
                style={{
                    border: `solid #64747c`,
                    padding: `1rem`,
                }}>
                ✉️ &nbsp; Get In Touch</a>
        </div>
    );
}

export default EmailButton;