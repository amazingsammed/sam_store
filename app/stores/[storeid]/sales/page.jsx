import React from 'react';
import {SalesPage} from "@/app/stores/[storeid]/sales/_component/salespage";
import {getSalesList} from "@/app/_actions/sales";


async function Page(props) {
    const data = await getSalesList(props.params.storeid);
    return (
        <div className="max-w-screen-xl">
            <SalesPage data={data}/>
        </div>
    );
}

export default Page;