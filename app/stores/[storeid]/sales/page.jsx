import React from 'react';
import {SalesPage} from "@/app/stores/[storeid]/sales/_component/salespage";
import MainContainer from "@/components/app/mainContainer";
import {getAllSales} from "@/app/_actions/sales";


async function Page({params}) {
    const data = await getAllSales(params.storeid);
    return (
        <MainContainer>
            <SalesPage data={data} />
        </MainContainer>
    );
}

export default Page;