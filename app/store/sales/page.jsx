import React from 'react';
import {SalesPage} from "@/app/store/sales/_component/salespage";
import {getItemsList} from "@/app/store/_actions/product";
import {getSalesList} from "@/app/store/_actions/voucher";

async function Page(props) {
    const data = await getSalesList();
    return (
        <div className="max-w-screen-xl">
            <SalesPage data={data}/>
        </div>
    );
}

export default Page;