import React from 'react';
import {GroupPage} from "@/app/store/account/groups/_components/group_table";

import {getGroupList} from "@/app/store/_actions/account";

async function Page(props) {
    const data = await getGroupList();
    return (
        <div className="max-w-screen-xl">
            <GroupPage data={data}/>
        </div>
    );
}

export default Page;