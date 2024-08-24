import React from 'react';
import {getGroupList, getLedgerList} from "@/app/store/_actions/account";
import {GroupPage} from "@/app/store/account/groups/_components/group_table";
import {LedgerPage} from "@/app/store/account/ledgers/_components/ledger_table";

async function Page(props) {
    const data = await getLedgerList();
    return (
        <div className="max-w-screen-xl">
            <LedgerPage data={data}/>
        </div>
    );
}

export default Page;