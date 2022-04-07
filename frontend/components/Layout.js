import Header from './Header';
import React from 'react';
const Layout1 = ({children}) => {
    return(
        <React.Fragment> 
            <Header/> 
            {children}
            <p>footer</p>
            </React.Fragment>
    );
};

export default Layout1;