import React from 'react';

function Header({ content }) { 
    return (
        <header className='pt-24 text-center header-font'>
            {content}
        </header>
    )
}

export default Header