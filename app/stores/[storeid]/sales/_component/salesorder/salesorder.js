import React from 'react';
import Headerlisttile from "@/components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";

import {salesorderColumns} from "@/app/stores/[storeid]/sales/_component/salesorder/salesorder_columns";

function SalesOrder(props) {
    // const data = await getSalesList(props.params.storeid);
    const  tabledata = []
    return (
        <Headerlisttile title='Sales Orders' subtitle='All Sales Orders are listed here' bname="Create"
                        ontap="sales/cashsales">
            <DataTable columns={salesorderColumns} data={tabledata} filter={'itemname'}/>
        </Headerlisttile>
    );
}

export default SalesOrder;