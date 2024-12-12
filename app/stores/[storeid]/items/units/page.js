import React from 'react';
import {UnitsTable} from "@/app/stores/[storeid]/items/units/_component/units";
import {getStockUnits} from "@/app/_actions/stock_item_options";
import MainContainer from "@/components/app/mainContainer";

async function Page(props) {
    const data = await getStockUnits(props.params.storeid);
    return (
        <MainContainer>
            <UnitsTable elements={data}/>
        </MainContainer>
    );
}

export default Page;
