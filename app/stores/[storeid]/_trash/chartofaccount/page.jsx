import React from 'react';
import {getChartOfAccount} from "@/app/_actions/account";

import Container from "@/components/app/container";
import {Cartofaccount} from "@/app/stores/[storeid]/_trash/chartofaccount/coa_table";

async function Page(params) {
    const data = await getChartOfAccount(params.params.storeid);
    return (
        <Container>
            <Cartofaccount data={data}/>
        </Container>
    );
}

export default Page;