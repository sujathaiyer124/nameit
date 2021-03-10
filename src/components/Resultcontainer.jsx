import React from 'react';
import Namecard from './namecard';
import './Resultcontainer.css';
const Resultcontainer = ({ suggestedNames }) => {
    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        return <Namecard key={suggestedName} suggestedName={suggestedName} />;
    });

    return (
        <div className="resultscontainer">
            {suggestedNameJsx}
        </div>
    )
};

export default Resultcontainer;