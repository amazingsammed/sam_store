import React from 'react';
import {getChartOfAccount} from "@/app/_actions/account";
import {Cartofaccount} from "@/app/stores/[storeid]/chartofaccount/_components/coa_table";

async function Page(params) {
    const data = await getChartOfAccount(params.params.storeid);
    return (
        <div className="max-w-screen-xl mx-auto">
            <Cartofaccount data={data}/>
        </div>
    );
}

export default Page;