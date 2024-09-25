
import React from 'react';
import  {HeaderListTileDialog} from "@/components/headerlisttile";
import {trialbalanceColumns} from "@/app/stores/[storeid]/report/trialbalance/_component/trialbalance_columns";
import {DataTable} from "@/app/stores/[storeid]/report/trialbalance/_component/datatable";



function TrialbalanceTable({element}) {
    return (
        <div className="max-w-screen-xl">
            <HeaderListTileDialog title='Trial Balance' subtitle='TB as at todays day'>
                <DataTable columns={trialbalanceColumns} data={element} filter={'account_name'}/>
            </HeaderListTileDialog>
        </div>
    );
}

export default TrialbalanceTable;