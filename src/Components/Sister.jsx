import React, { useContext } from 'react';
import { MoneyContext } from './Grandpa';

const Sister = () => {
    const [money]  = useContext(MoneyContext)
    return (
        <div className='border border-blue-500 rounded p-1'>
            Sister
            <p><small>Grandpa money: {money}</small></p>
        </div>
    );
};

export default Sister;