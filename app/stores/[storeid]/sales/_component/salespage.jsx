
'use client'
import Headerlisttile from "../../../../../components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {salesColumns} from "@/app/stores/[storeid]/sales/_component/sales_columns";

export  function SalesPage(prop) {

    const tabledata = prop.data;

    return (
        <div className="">
            <Headerlisttile title='Sales List' subtitle='All Sales Vouchers are listed here' bname="Create" ontap = "sales/cashsales">
                <DataTable columns={salesColumns} data={tabledata} filter={'itemname'}/>
            </Headerlisttile>

        </div>

    );
}





