import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import '../App.css';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const history = useNavigate();
  const onFinish = async(values) => {
    
    axios.post('/auth_user', values)
    .then(function (response) {
      // console.log('Success!', response.data);
      console.log(response.data.code)
      if(response.data.code == 1){

        handleToast("success",response.data.msg)
        history('/')
        
      }
      else{
        handleToast("fail",response.data.msg)
      }
      
    })
    .catch(function (error) {
      console.error('An error occurred:', error);
      
    });

  };
  const handleToast = (type,msg) =>{
    if(type == "success"){
      toast.success(msg,{
        position:'bottom-right',
        bodyStyle:{
          
          color : "green"
        }
      });
    }
    else if(type == "fail"){
      toast.error(msg,{
        position:'bottom-right',
        bodyStyle:{
          
          color : "red"
        }
      });
    }
    
    
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
   
  };

  return (
    <div className='container'>
        <h3>Login</h3>
        
    <Form 
      name="basic"
    //   initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: '300px', margin: 'auto', marginTop: '70px' }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ 
            required: true, 
            message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ 
            required: true, 
            message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <p>Don't have an account? 
      <NavLink to="/register">Register</NavLink>
      </p>
      
    </Form>
    <ToastContainer />
    </div>
  );
};

export default Login;
