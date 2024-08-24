import React from 'react';
import Headerlisttile from "@/components/headerlisttile";
import {VoucherTable} from "@/app/store/voucher/_component/voucher_table";
import {getVoucherList} from "@/app/store/_actions/voucher";

async function Page() {
    const data = await getVoucherList();
    return (
        <div>
            <VoucherTable data={data}/>
        </div>
    );
}

export default Page;