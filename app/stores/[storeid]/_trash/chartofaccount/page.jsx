import React from 'react';
import {getChartOfAccount} from "@/app/_actions/account";

import MainContainer from "@/components/app/mainContainer";
import {Cartofaccount} from "@/app/stores/[storeid]/_trash/chartofaccount/coa_table";

async function Page(params) {
    const data = await getChartOfAccount(params.params.storeid);
    return (
        <MainContainer>
            <Cartofaccount data={data}/>
        </MainContainer>
    );
}

export default Page;