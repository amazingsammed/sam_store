import React from 'react';
import {GroupPage} from "@/app/stores/[storeid]/_trash/account/groups/_components/group_table";

import {getChartOfAccount} from "@/app/_actions/account";

async function Page(props) {
    const data = await getChartOfAccount();
    return (
        <div className="max-w-screen-xl">
            <GroupPage data={data}/>
        </div>
    );
}

export default Page;