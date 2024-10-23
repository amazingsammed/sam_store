import React from 'react';
import {VoucherTable} from "@/app/stores/[storeid]/voucher/_component/voucher_table";
import {getVoucherList} from "@/app/_actions/voucher";
import MainContainer from "@/components/app/mainContainer";

async function Page(params) {
    const data = await getVoucherList(params.params.storeid);
    return (
        <MainContainer className="max-w-screen-xl mx-auto">
            <VoucherTable data={data}/>
        </MainContainer>
    );
}

export default Page;