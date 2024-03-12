import React, { useEffect, useState } from 'react'
import { Card, Space, Button, Spin, Modal } from "antd"
import { ArrowRightOutlined } from '@ant-design/icons';
import '../App.css'
import axios from 'axios'
const Cards = () => {
    const [cardTitle, setCardTitle] = useState([])
    const [loading, setloading] = useState(true)
    const [modal, setmodal] = useState(false)
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {

        const response = await axios.get('/getindices')
        console.log(response.data)
        console.log(response.data)
        console.log(response.data[0].meta.companyName, "meta.company_name")
        setloading(false)
        setCardTitle(response.data)

    }
    const handleModalOpen = () => {
        setmodal(true)
    }
    const handleModalClose = () => {
        setmodal(false)
    }

    return (
        <>
            <div className='container-card' style={{
                maxHeight: '220px',
                overflowY: 'auto'
            }}>
                {loading ? (

                    <div style={{ textAlign: 'center', marginTop: '150px' }}>
                        <Spin size="large" />
                    </div>
                ) :
                    (
                        <>
                        <div>
                            <p>See More {ArrowRightOutlined}</p>
                        </div>
                    <Space direction="horizontal" size={5}>
                        
                        {
                            cardTitle.map((ele, index) => {
                                // console.log(ele.meta,"[index].meta")
                                return (
                                    <>
                                        <Card
                                            size="small"
                                            title={ele.meta.companyName}
                                            //   extra={<a href="#">More</a>}
                                            style={{ width: 170, height: 200 }}
                                        >
                                            <p>{ele.lastPrice}</p>
                                            {/* <p>{ele.lastUpdatTime}</p> */}
                                            <p>{ele.symbol}</p>
                                           <p>{ele.pChange}</p>
                                            {/* <p>{ele.series}</p>
                                            <p>{ele.dayHigh}</p>
                                            <p>{ele.yearHigh}</p>
                                            <p>{ele.yearLow}</p> */}

                                        </Card>

                                    </>
                                )
                            })
                        }
                        <div style={{ marginTop: '10px', textAlign: 'center' }}>
                            <Button type="text" icon={<ArrowRightOutlined />} onClick={handleModalOpen} />
                        </div>
                    </Space>
                    </>
                    
                    )}

            </div>
            <Modal
                title="Table Data"
                visible={modal}
                onCancel={handleModalClose}
                footer={null}
            >
                <h1>Hello</h1>
            </Modal>
        </>
    )
}

export default Cards