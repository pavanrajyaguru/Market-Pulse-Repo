import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import '../App.css';
import axios from "axios";
const Login = () => {
  const onFinish = async(values) => {
    try{
        console.log('Received values:', values);
    const response = axios.post('auth_user', JSON.stringify(values), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    console.log(response,"response.data")
    const data = await response.json();
      console.log(data);
    }
    catch(error){
        console.log(error)
    }
    
  };

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
      style={{ width: '300px', margin: 'auto', marginTop: '50px' }}
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
    </Form>
    </div>
  );
};

export default Login;
