import React, { useContext } from 'react';
import { RingContext } from './Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContext)
    return (
        <div className='border border-blue-500 rounded p-3'>
            <h2>Special</h2>
            <p>Ring: <small>{angti}</small></p>
        </div>
    );
};

export default Special;