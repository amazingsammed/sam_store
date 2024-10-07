import React from 'react';
import  {HeaderListTileDialog} from "@/components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {InvoiceColumns} from "@/app/stores/[storeid]/sales/_component/invoice/invoice_columns";
import {CustomerForm} from "@/app/stores/[storeid]/sales/customer/_components/addcustomer";
import {InvoiceForm} from "@/app/stores/[storeid]/sales/_component/invoice/addinvoice";

function Invoice(props) {
    // const data = await getSalesList(props.params.storeid);
    const  tabledata = []
    return (
        <HeaderListTileDialog title='Invoices' subtitle='All Invoices are listed here' bname="Create" buttonx={
            <InvoiceForm/>
        }
                        ontap="sales/cashsales">
            <DataTable columns={InvoiceColumns} data={tabledata} filter={'itemname'}/>
        </HeaderListTileDialog>
    );
}

export default Invoice;