import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div className="header">
            <Navigation></Navigation>
            <Banner></Banner>
        </div>
    );
};

export default Header;