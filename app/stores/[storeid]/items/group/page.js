import React from 'react';
import {GroupTable} from "@/app/stores/[storeid]/items/group/_component/grouptable";
import {getStockGroup} from "@/app/_actions/stock_item_options";
import MainContainer from "@/components/app/mainContainer";

async function Page(props) {
   const data = await getStockGroup(props.params.storeid);
   console.log(data);
    return (
        <MainContainer>
            <GroupTable elements = {data}/>
        </MainContainer>
    );
}

export default Page;
