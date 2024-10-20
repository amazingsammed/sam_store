import React from 'react';
import {PurchasesListPage} from "@/app/stores/[storeid]/purchases/_components/purchaseslist";
import {getAllPurchases} from "@/app/_actions/purchases";
import Container from "@/components/app/container";

async function Page({params}) {
    const data = await getAllPurchases(params.storeid);
    return (
        <Container>
            {/*<DataTableDemo />*/}
            <PurchasesListPage data={data}/>
        </Container>
    );
}

export default Page;