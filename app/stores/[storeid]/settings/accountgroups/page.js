import React from 'react';
import {GroupTablePage} from "@/app/stores/[storeid]/settings/accountgroups/_component/group_table";
import {getChartOfAccountGroup} from "@/app/_actions/account";

async function Page({params}) {
    const data = await getChartOfAccountGroup(params.storeid);
    return (
        <div><GroupTablePage data = {data}/></div>
    );
}

export default Page;