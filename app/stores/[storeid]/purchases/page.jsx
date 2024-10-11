import React from 'react';
import {PurchasesListPage} from "@/app/stores/[storeid]/purchases/_components/purchaseslist";
import {getPurchasesList} from "@/app/_actions/purchases";
import Container from "@/components/app/container";

async function Page(props) {
    const data = await getPurchasesList(props.params.storeid);
    return (
        <Container>
            {/*<DataTableDemo />*/}
            <PurchasesListPage data={data}/>
        </Container>
    );
}

export default Page;