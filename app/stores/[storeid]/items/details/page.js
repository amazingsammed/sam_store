import React from 'react';
import {getProductDetail} from "@/app/_actions/stock_item";
import Productdetails from "@/app/stores/[storeid]/items/details/_component/productdetails";

async function Page() {

    return (
        <div>
            <Productdetails />
        </div>
    );
}

export default Page;