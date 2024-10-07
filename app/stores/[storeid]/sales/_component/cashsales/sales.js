import React from 'react';
import Headerlisttile from "@/components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {salesColumns} from "@/app/stores/[storeid]/sales/_component/cashsales/sales_columns";
import {getSalesList} from "@/app/_actions/sales";

function Sales(props) {
    // const data = await getSalesList(props.params.storeid);
    const  tabledata = []
    return (
        <Headerlisttile title='Sales List' subtitle='All Sales are listed here' bname="Create"
                        ontap="sales/cashsales">
            <DataTable columns={salesColumns} data={tabledata} filter={'itemname'}/>
        </Headerlisttile>
    );
}

export default Sales;