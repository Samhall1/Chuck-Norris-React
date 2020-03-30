
import React from 'react';
import Spinner from './Spinner';

const Jokes = (props) => {

    if(props.loading){
       return <Spinner />
    } else {
    return (
        <div>
           {props.data}
        </div>
    )
    }
}

export default Jokes;
