import Link from 'next/link';
import { useState } from 'react';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import Router from 'next/dist/client/router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <Link href='/'>
          <NavLink className='font-weight-bold'>
            Let's Understand Everything
          </NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href='/signin'>
                    <NavLink>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/signup'>
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: 'pointer' }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </NavLink>
              </NavItem>
            )}

            {isAuth() && isAuth.role === 0 && (
              <NavItem>
                <Link href='/user'>{`${isAuth.name}'s Dashboard`}</Link>
              </NavItem>
            )}

            {isAuth() && isAuth.role === 1 && (
              <NavItem>
                <Link href='/admin'>{`${isAuth.name}'s Dashboard`}</Link>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
