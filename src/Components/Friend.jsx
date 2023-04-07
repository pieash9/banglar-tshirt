import React, { useContext } from 'react';
import { RingContext } from './Grandpa';

const Friend = ({ring}) => {
    const angti =useContext(RingContext)
    return (
        <div className='border border-blue-500 rounded p-3'>
            friend
            {/* {ring && <p>{ring}</p>} */}
            <p><small>{angti}</small></p>
        </div>
    );
};

export default Friend;