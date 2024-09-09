import React from 'react';
import {SalesPage} from "@/app/stores/[storeid]/sales/_component/salespage";
import {getItemsList} from "@/app/stores/_actions/stock_item";
import {getSalesList} from "@/app/stores/_actions/voucher";

async function Page(props) {
    const data = await getSalesList();
    return (
        <div className="max-w-screen-xl">
            <SalesPage data={data}/>
        </div>
    );
}

export default Page;