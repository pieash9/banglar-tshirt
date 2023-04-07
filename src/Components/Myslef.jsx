import React from 'react';
import Special from './Special';

const Myslef = ({ring}) => {
    return (
        <div className='border border-blue-500 rounded p-3'>
            myslef
            <Special ring={ring}/>
        </div>
    );
};

export default Myslef;