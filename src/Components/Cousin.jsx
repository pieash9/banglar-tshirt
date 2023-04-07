import React from 'react';
import Friend from './Friend';

const Cousin = ({children, hasFriend ,ring}) => {
    return (
        <div className='border border-blue-500 rounded p-3'>
            Cousin
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;