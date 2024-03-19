import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/actions/Actions';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Menu,Button } from 'antd';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const menu = (
    <Menu>
      {visible && (
        <Menu.Item key="logout" onClick={handleLogout}>Logout</Menu.Item>
      )}
    </Menu>
  );

  return (
    <div className='col-lg-12 mt-3'>
      <div className='row'>
        <div className='col-lg-6'></div>
        <div className='col-lg-6'>
          <div style={{ float: 'right' }}>
            {user ? (
              <Dropdown overlay={menu} onVisibleChange={(vis) => setVisible(vis)}>
                <Button onClick={e => e.preventDefault()}>
                  {user.name}
                </Button>
              </Dropdown>
            ) : (
              <NavLink to="/login"><button className='btn btn-primary m-1'>Login</button></NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
