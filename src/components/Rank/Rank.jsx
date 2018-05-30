import React from 'react';

import './Rank.css';

const Rank = ({ toggleRank, displayRank, entries }) => {
    return (
        <article className={displayRank ? 'message' : 'message invisible'}>
            <div className="message-header">
                <p>Entry count increased!</p>
                <button className="delete" onClick={toggleRank}></button>
            </div>
            <div className="message-body">
                {`Your current entry count is ${entries}!`}
            </div>
        </article>
    );
}

export default Rank;