import React from 'react';

function Mainbody({ children,className }) {
    return (
        <div className={`max-w-screen-2xl  mx-auto px-10 ${className}`}>{children}</div>
    );
}

export default Mainbody;