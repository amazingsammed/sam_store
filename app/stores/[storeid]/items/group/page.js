import React from 'react';
import {GroupTable} from "@/app/stores/[storeid]/items/group/_component/grouptable";
import {getStockGroup} from "@/app/stores/_actions/stock_item_options";

async function Page(props) {
   const data = await getStockGroup(props.params.storeid);
   console.log(data);
    return (
        <div>
            <GroupTable elements = {data}/>
        </div>
    );
}

export default Page;
