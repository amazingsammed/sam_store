import React from 'react';
import {PurchasesListPage} from "@/app/stores/[storeid]/purchases/_components/purchaseslist";
import {getPurchasesList} from "@/app/_actions/purchases";

async function Page(props) {
    const data = await getPurchasesList(props.params.storeid);
    return (
        <div className="max-w-screen-xl mx-auto">
            {/*<DataTableDemo />*/}
            <PurchasesListPage data={data}/>
        </div>
    );
}

export default Page;