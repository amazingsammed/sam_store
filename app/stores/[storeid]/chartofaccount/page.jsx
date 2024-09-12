import React from 'react';
import {getGroupList} from "@/app/_actions/account";
import {Cartofaccount} from "@/app/stores/[storeid]/chartofaccount/_components/coa_table";

async function Page(params) {
    const data = await getGroupList(params.params.storeid);
    return (
        <div className="max-w-screen-xl">
            <Cartofaccount data={data}/>
        </div>
    );
}

export default Page;