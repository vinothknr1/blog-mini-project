import React from 'react';
<<<<<<< HEAD
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <p>footer</p>
    </React.Fragment>
  );
=======
const Layout1 = ({children}) => {
    return(
        <React.Fragment> 
            <Header/> 
            {children}
            </React.Fragment>
    );
>>>>>>> 7de9c1305fa41298732cfbb380bfbdac3232da67
};

export default Layout;
