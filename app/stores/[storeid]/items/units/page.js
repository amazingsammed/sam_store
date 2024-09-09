import React from 'react';
import {UnitsTable} from "@/app/stores/[storeid]/items/units/_component/units";
import {getStockUnits} from "@/app/stores/_actions/stock_item_options";

async function Page(props) {
    const data = await getStockUnits(props.params.storeid);
    return (
        <div>
            <UnitsTable elements={data}/>
        </div>
    );
}

export default Page;
