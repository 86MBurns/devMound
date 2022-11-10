import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NewHeader = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
      <Navbar bg="danger" variant="dark">
        <Container>
          <div className="container flex-row justify-space-between-lg justify-center align-center">
            <Navbar.Brand href="#home">
              <img
                alt="devMound Logo"
                src="../../../ant-cartoon.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              devMound
            </Navbar.Brand>

            <div className='align-right justify-right'>
              {Auth.loggedIn() ? (
                <>
                  <Link className="btn btn-lg btn-info m-2" to="/me">
                    {Auth.getProfile().data.username}'s profile
                  </Link>
                  <button className="btn btn-lg btn-light m-2" onClick={logout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link className="btn btn-lg btn-info m-2" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-lg btn-light m-2" to="/signup">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </Container>
      </Navbar>
  );
}

export default NewHeader;