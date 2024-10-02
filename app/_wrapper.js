'use client'
import React from 'react';
import {SessionProvider} from "next-auth/react";

function SessionWrapper({children}) {
    return (
        <SessionProvider>
            <main>{children}</main>
        </SessionProvider>
    );
}

export default SessionWrapper;