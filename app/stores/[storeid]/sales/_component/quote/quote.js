import React from 'react';
import Headerlisttile from "@/components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {salesColumns} from "@/app/stores/[storeid]/sales/_component/cashsales/sales_columns";
import {getSalesList} from "@/app/_actions/sales";
import {quoteColumns} from "@/app/stores/[storeid]/sales/_component/quote/quote_columns";

function Quote(props) {
    // const data = await getSalesList(props.params.storeid);
    const  tabledata = []
    return (
        <Headerlisttile title='Quote List' subtitle='All Quote are listed here' bname="Create"
                        ontap="sales/cashsales">
            <DataTable columns={quoteColumns} data={tabledata} filter={'itemname'}/>
        </Headerlisttile>
    );
}

export default Quote;