import React from 'react';
import Cousin from './Cousin';

const Aunty = ({ring}) => {
    return (
        <div className='border border-blue-500 rounded p-3'>
            Aunty
            <section className='p-5 flex gap-3'>
                <Cousin hasFriend={true} ring={ring}>Nibir</Cousin>
                <Cousin>abir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;