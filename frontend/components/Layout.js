import Header from './Header';
import React from 'react';
const Layout1 = ({children}) => {
    return(
        <React.Fragment> 
            <Header/> 
            {children}
            </React.Fragment>
    );
};

export default Layout1;