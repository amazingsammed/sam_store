import React from 'react';
import { getChartOfAccountGroup} from "@/app/_actions/account";
import {GroupTablePage} from "@/app/stores/[storeid]/chartofaccount/groups/_components/group_table";

async function Page({params}) {
    const data = await getChartOfAccountGroup(params.storeid);
    return (
        <div className="max-w-screen-xl">
            <GroupTablePage data={data}/>
        </div>
    );
}

export default Page;