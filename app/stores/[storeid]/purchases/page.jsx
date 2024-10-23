import React from 'react';
import {PurchasesListPage} from "@/app/stores/[storeid]/purchases/_components/purchaseslist";
import {getAllPurchases} from "@/app/_actions/purchases";
import MainContainer from "@/components/app/mainContainer";

async function Page({params}) {
    const data = await getAllPurchases(params.storeid);
    return (
        <MainContainer>
            {/*<DataTableDemo />*/}
            <PurchasesListPage data={data}/>
        </MainContainer>
    );
}

export default Page;