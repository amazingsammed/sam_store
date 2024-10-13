import React from 'react';
import {getProductDetail} from "@/app/_actions/stock_item";
import Productdetails from "@/app/stores/[storeid]/items/[productid]/_component/productdetails";

async function Page({params}) {
    const data = await getProductDetail(params.productid);
    return (
        <div>
            <Productdetails element={data} />
        </div>
    );
}

export default Page;