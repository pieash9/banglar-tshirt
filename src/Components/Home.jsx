import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData()
    return (
        <div>
            this is home {tshirts.length}
        </div>
    );
};

export default Home;