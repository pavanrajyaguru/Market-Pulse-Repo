import React from 'react'
import Accordion_table from './Accordion_table'
import Cards from './Cards'
// import { Spin } from 'antd'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Skeleton,Button } from 'antd'
const Dashboard = () => {
    const [response, setResponse] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        var reqBody = {
            "start" : 0,
            "end" : 50,
        }
        const response = await axios.post('/getindices',reqBody)
        console.log(response.data)
        console.log(response.data)
        console.log(response.data[0].meta.companyName, "meta.company_name")
        setloading(false)
        setResponse(response.data)

    }
    return (
        <>
            <div className='container' style={{ width: '85%', maxWidth: '85%', minWidth: '85%' }}>

                {
                    loading ? (
                        <div className='col=lg-12 mt-4'>
                            <div className='row'>
                                <div className='skeleton'>
                                    <Skeleton active />
                                    <Skeleton active />
                                    <Skeleton active />
                                    <Skeleton active />
                                    <Skeleton active />
                                </div>
                            </div>
                            {/* <Spin size="large" /> */}
                        </div>
                    )
                        :
                        (
                            <>
                                <div className='col-lg-12'>

                                   <div className='row'>
                                        <div className='col-lg-6'>

                                        </div>
                                        <div className='col-lg-6 watchlist ' >
                                            <Button style={{position:'static'}}>Primary</Button>
                                            <Button style={{position:'static'}}>Watch List</Button>
                                        </div>
                                   </div>
                                    <div className='col-lg-12'>
                                        <Cards response={response} loading={loading}/>
                                    </div>
                                    <Accordion_table response={response}/>
                                </div>
                            </>
                        )

                }

            </div>
        </>
    )
}

export default Dashboard