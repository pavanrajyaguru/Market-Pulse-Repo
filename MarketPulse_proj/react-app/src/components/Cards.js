import React, { useState } from 'react';
import { Card, Space, Button, Modal, Spin } from 'antd';

import '../App.css';
const { Meta } = Card;
const Cards = ({ response, loading }) => {
    const [data, setData] = useState(response);

    const limitedresponse = response.slice(0,10)
    return (
        <>
            <div className='container-card' style={{ maxHeight: '220px', overflowY: 'hidden' }}>
                
                <Space direction='horizontal' size={5}>
                
                    {limitedresponse.map((ele) => (
                       <Card size='small' title={ele.meta.companyName} style={{ width: 170, height: 'fit-content' }} key={ele.symbol}>
                       <p>{ele.lastPrice}</p>
                       <p>{ele.symbol}</p>
                       <p>{ele.pChange}</p>
                           
                   </Card>
                       
                    ))}
                   
                </Space>
            </div>

        </>
    );
};

export default Cards;
