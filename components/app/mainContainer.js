import React from 'react';

function MainContainer({children , className , ...rest}) {
    return (
        <div className={`max-w-screen-xl  mx-auto${className}` } >
        {children}</div>
    );
}

export default MainContainer;