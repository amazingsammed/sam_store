'use client'
import React from 'react';
import {SessionProvider} from "next-auth/react";

function SessionWrapper({ children}) {
    return (
        < >
            {children}
        </>
    );
}

export default SessionWrapper;