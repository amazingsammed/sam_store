import React from 'react';
import {SalesPage} from "@/app/stores/[storeid]/sales/_component/salespage";
import {getSalesList} from "@/app/_actions/sales";


async function Page(props) {

    return (
        <div className="max-w-screen-xl mx-auto">
            <SalesPage />
        </div>
    );
}

export default Page;