import React from 'react';

function MainContainer({children , className , ...rest}) {
    return (
        <div className="max-w-screen-2xl">
        {children}</div>
    );
}

export default MainContainer;