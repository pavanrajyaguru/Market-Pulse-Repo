import React, { useEffect, useState } from 'react'
import { Card, Space, Button ,Spin} from "antd"
import { ArrowRightOutlined } from '@ant-design/icons';
import '../App.css'
import axios from 'axios'
const Cards = () => {
    const [cardTitle, setCardTitle] = useState([])
    const [loading,setloading] = useState(true)
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {

        const response = await axios.get('/getindices')
        console.log(response.data)
        console.log(response.data)
        setloading(false)
        setCardTitle(response.data)
        
    }
    return (
        <>
            <div className='container-card' style={{ maxHeight: '220px',
             overflowY: 'auto' 
             }}>
                {loading ? (
                    
                    <div style={{ textAlign: 'center', marginTop: '150px' }}>
                        <Spin size="large" />
                    </div>
                ) :
                    (<Space direction="horizontal" size={5}>
                        {
                            cardTitle.map((ele, index) => {
                                return (
                                    <>
                                        <Card
                                            size="small"
                                            title={ele.symbol}
                                            //   extra={<a href="#">More</a>}
                                            style={{ width: 170, height: 150 }}
                                        >
                                            <p>{ele.lastPrice}</p>
                                            <p>{ele.lastUpdatTime}</p>
                                            {/* <p>{ele.series}</p>
                                            <p>{ele.dayHigh}</p>
                                            <p>{ele.yearHigh}</p>
                                            <p>{ele.yearLow}</p> */}
                                            <div style={{ marginTop: '10px', textAlign: 'center' }}>
                                                <Button type="primary">See More</Button>
                                            </div>
                                        </Card>

                                    </>
                                )
                            })
                        }
                        <div style={{ marginTop: '10px', textAlign: 'center' }}>
                            <Button type="text" icon={<ArrowRightOutlined />} />
                        </div>
                    </Space>
                    )}

            </div>
        </>
    )
}

export default Cards