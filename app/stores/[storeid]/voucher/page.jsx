import React from 'react';
import {VoucherTable} from "@/app/stores/[storeid]/voucher/_component/voucher_table";
import {getVoucherList} from "@/app/_actions/voucher";
import Container from "@/components/app/container";

async function Page(params) {
    const data = await getVoucherList(params.params.storeid);
    return (
        <Container className="max-w-screen-xl mx-auto">
            <VoucherTable data={data}/>
        </Container>
    );
}

export default Page;