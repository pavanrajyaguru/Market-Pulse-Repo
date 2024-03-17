
import React from 'react';
import { useParams} from 'react-router-dom';

const Overview = () => {
    const { symbol } = useParams();
    
    return (
        <div>
            <div>Symbol from URL params: {symbol}</div>
           
        </div>
    );
};

export default Overview;


