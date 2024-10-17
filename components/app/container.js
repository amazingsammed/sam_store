import React from 'react';

function Container({children , className , ...rest}) {
    return (
        <div className="max-w-screen-xl mx-auto ">
        {children}</div>
    );
}

export default Container;