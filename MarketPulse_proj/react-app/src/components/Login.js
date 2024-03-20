import React from 'react';
import { Form, Input, Button} from 'antd';
import '../App.css';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login,handleToast } from './redux/actions/Actions';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const onFinish = async(values) => {
    
    axios.post('/auth_user', values)
    .then(function (response) {
      // console.log('Success!', response.data);
      console.log(response.data.code)
      // console.log(response.data.data.name)
      if(response.data.code == 1){
        dispatch(handleToast("success",response.data.msg))
        localStorage.setItem("authUser",JSON.stringify(response.data.data))
        console.log(response.data.data,"res.data.data",response.data.code,"code")
        dispatch(login(response.data.data))
        
        console.log(response.data.msg)
        setTimeout(()=>{
          navigate('/dashboard')
        },2000)
        
        // window.location.reload();
      }
      else{
        
        dispatch(handleToast("error",response.data.msg))
      }
      
    })
    .catch(function (error) {
      console.error('An error occurred:', error);
      
    });

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
    
    </div>
  );
};

export default Login;
