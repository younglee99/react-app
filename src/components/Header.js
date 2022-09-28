import React from 'react';
import '../style/components/Header.css'

function Header(props) {
    return (
        <div className='top'>
            {props.title}
        </div>
    );
}

export default Header;