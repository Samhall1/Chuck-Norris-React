import React from 'react';
import loadingGif from '../chucknorris.gif';

const Spinner = () => {
    return (
        <div>
            <img src={loadingGif} alt="Loading..." />
        </div>
    )
}

export default Spinner;