import React from 'react';
import {getProducts, getProductsWithQuantity} from "@/app/_actions/stock_item";
import Itemsreport from "@/app/stores/[storeid]/report/(basic)/items/_component/itemsreport";
import MainContainer from "@/components/app/mainContainer";

async function Page({params}) {
    const data = await getProductsWithQuantity(params.storeid);
    return (
        <MainContainer>
          <Itemsreport elements={data}/>
        </MainContainer>
    );
}

export default Page;