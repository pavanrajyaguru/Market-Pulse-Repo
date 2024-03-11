import React from 'react';
import { Form, Input, Button, Select} from 'antd';
import '../App.css';
import axios from "axios";
import { NavLink } from 'react-router-dom';
const Register = () => {
  const onFinish = async (values) => {
    console.log('Received values:', values);
    const response = await axios.post(`/register_action`, values)
    const data = await response.json();
    console.log("data", data);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='container'>
        <h3>Register</h3>
    <Form
      name="basic"
    //   initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: '300px', margin: 'auto', marginTop: '50px' }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ 
            required: true, 
            message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ 
            required: true, 
            message: 'Please input your email!' }]}
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

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ 
            required: true, 
            message: 'Please enter your gender!' }]}
      >
         <Select placeholder="Select gender">
         <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>

      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <p>Already have an account?
      <NavLink to="/login">Login</NavLink>
      </p>
    </Form>
    </div>
  );
};

export default Register;
