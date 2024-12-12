import React from 'react';
import {CategoryTable} from "@/app/stores/[storeid]/items/category/_component/categorytable";
import {getStockCategory} from "@/app/_actions/stock_item_options";
import MainContainer from "@/components/app/mainContainer";

async function Page(props) {
    const data = await getStockCategory(props.params.storeid);
    return (
        <MainContainer>
            <CategoryTable element={data}/>
        </MainContainer>
    );
}

export default Page;
