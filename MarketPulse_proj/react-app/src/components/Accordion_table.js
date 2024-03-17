import React, { useState } from 'react';
import { Collapse } from 'antd';
import { Button } from 'antd';
import {Modal} from 'antd';
import Overview from './Overview';
import { NavLink } from 'react-router-dom';
const { Panel } = Collapse;

const Accordion_table = ({response}) => {
  const [openModal,setOpenModal] = useState(false)
  const limitedresponse = response.slice(0,12)
  const handleClick = () =>{
      setOpenModal(true)
  }
  const handleClose = () =>{
    setOpenModal(false)
  }
  const handleOk = () =>{
    setOpenModal(false)
  }
  
  return (
    <div className='mt-4'>
      <Collapse>
        {limitedresponse.map(ele => (
          <Panel header={ele.symbol} key={ele.key}>
            <ul>
            <li>CompanyName :  {ele.meta.companyName}<br /></li>
              <li>Open : {ele.open}<br /></li>
              <li>DayHigh : {ele.dayHigh}<br /></li>
              <li>pChange : {ele.pChange}<br /></li>
              <li>yearLow : {ele.yearLow}<br /></li>
              <li>DayHigh : {ele.yearHigh}<br /></li>
            </ul>

            <NavLink to={{ pathname: `/overview/${ele.symbol}/`}}>
              <Button className='btn btn-primary'>See Overview</Button>
            </NavLink>
            
          </Panel>
        ))}
      </Collapse>
      <div>
          <Button className='btn btn-primary mt-2' onClick={handleClick}>See More</Button>
      </div>
      <Modal title="Stock List" visible={openModal} onCancel={handleClose} onOk={handleOk}>
      <Collapse>
        {response.map(ele => (
          <Panel header={ele.symbol} key={ele.key}>
            <ul>
            <li>CompanyName :  {ele.meta.companyName}<br /></li>
              <li>Open : {ele.open}<br /></li>
              <li>DayHigh : {ele.dayHigh}<br /></li>
              <li>pChange : {ele.pChange}<br /></li>
              <li>yearLow : {ele.yearLow}<br /></li>
              <li>DayHigh : {ele.yearHigh}<br /></li>
            </ul>
            <NavLink to={{ pathname: `/overview/${ele.symbol}/`}}>
              <Button className='btn btn-primary'>See Overview</Button>
            </NavLink>
            
          </Panel>
        ))}
      </Collapse>
        
      </Modal>
    </div>
  );
};

export default Accordion_table;
