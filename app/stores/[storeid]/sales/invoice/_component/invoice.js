import React from 'react';
import Headerlisttile from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {InvoiceColumns} from "@/app/stores/[storeid]/sales/invoice/_component/invoice_columns";

function Invoice(props) {
    // const data = await getSalesList(props.params.storeid);
    const  tabledata = []
    return (
        <Headerlisttile title='Invoices' subtitle='All Invoices are listed here' bname="Create invoice"
                        ontap="sales/createinvoice">
            <DataTable columns={InvoiceColumns} data={tabledata} filter={'itemname'}/>
        </Headerlisttile>
    );
}

export default Invoice;