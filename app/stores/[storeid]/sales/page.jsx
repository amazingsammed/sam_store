import React from 'react';
import {SalesPage} from "@/app/stores/[storeid]/sales/_component/salespage";
import Container from "@/components/app/container";
import {getAllSales} from "@/app/_actions/sales";


async function Page({params}) {
    const data = await getAllSales(params.storeid);
    return (
        <Container>
            <SalesPage data={data} />
        </Container>
    );
}

export default Page;