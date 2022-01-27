import React from 'react';

export default function MTLAI() {
    return (
        <div className="section">
            <p>
                The following is a list of different ways students can get
                involved with the AI and ML community in Montreal. While we
                tried our best to capture as many opportunities as possible, if
                you feel this list is lacking a certain group or organization,
                please let us know at&nbsp;
                <a href="mailto:mcgillaicontact@gmail.com">
                    mcgillaicontact@gmail.com
                </a>
                ! Of course, the best way for you to stay updated with upcoming
                AI events at McGill and Montreal is by following us on&nbsp;
                <a href="https://www.facebook.com/McGillAI">Facebook</a>
                &nbsp; and subscribing to our&nbsp;
                {/* TODO: replace form */}
                <a
                    rel="noopener noreferrer"
                    href="https://forms.gle/L8HqJWJ2KSy3Cd6y5"
                    target="_blank"
                >
                    newsletter
                </a>
                .
            </p>
            {/* TODO: fill out */}
            <div className="section">
                <h2> AI/ML Research </h2>
            </div>
            <div className="section">
                <h2> AI Ethics, Society, and Regulation</h2>
            </div>
            <div className="section">
                <h2>AI x Other Fields</h2>
            </div>
        </div>
    );
}
