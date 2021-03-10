import React from 'react';
import './namecard.css';
const namecheapurl = 'https://www.namecheap.com/domains/registration/results/?domain=';
const Namecard = ({ suggestedName }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link"
            href={`${namecheapurl}${suggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    );
};
export default Namecard;