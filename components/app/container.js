import React from 'react';

function Container({children , className , ...rest}) {
    return (
        <div className="max-w-screen-3xl">
        {children}</div>
    );
}

export default Container;