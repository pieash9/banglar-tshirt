import React from 'react';
import Myslef from './Myslef';
import Sister from './Sister';
import Brother from './Brother';

const Father = ({ring}) => {
    return (
        <div className='border border-blue-500 rounded'>
            <h3>Father</h3>
            <section className='flex gap-5 p-4'>
                <Myslef ring={ring}/>
                <Sister/>
                <Brother/>
            </section>
        </div>
    );
};

export default Father;