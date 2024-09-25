import React from 'react';
import {getTrialBalance} from "@/app/_actions/report";
import TrialbalanceTable from "@/app/stores/[storeid]/report/trialbalance/_component/trialbalancetable";

async function Page({params}) {
    const data = await getTrialBalance(params.storeid)
    return (
        <div>
            <TrialbalanceTable element={data}/>
        </div>
    );
}

export default Page;