import React from 'react';
import Reportspage from "@/app/stores/[storeid]/report/_components/reportspage";

function Page({params}) {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Reportspage/>
        </div>
    );
}

export default Page;