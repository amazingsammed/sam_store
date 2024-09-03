import React from 'react';
import {getGroupList} from "@/app/store/_actions/account";
import {Cartofaccount} from "@/app/store/account/chartofaccount/_components/coa_table";

async function Page(props) {
    const data = await getGroupList();
    return (
        <div className="max-w-screen-xl">
            <Cartofaccount data={data}/>
        </div>
    );
}

export default Page;