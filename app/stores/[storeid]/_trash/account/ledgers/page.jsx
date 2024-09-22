import React from 'react';
import {getChartOfAccount, getLedgerList} from "@/app/_actions/account";
import {GroupPage} from "@/app/stores/[storeid]/_trash/account/groups/_components/group_table";
import {LedgerPage} from "@/app/stores/[storeid]/_trash/account/ledgers/_components/ledger_table";

async function Page(props) {
    const data = await getLedgerList();
    return (
        <div className="max-w-screen-xl">
            <LedgerPage data={data}/>
        </div>
    );
}

export default Page;