import React from 'react';
import  {HeaderListTileDialog} from "@/components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {CustomerForm} from "@/app/stores/[storeid]/sales/customer/_components/addcustomer";
import {InvoiceForm} from "@/app/stores/[storeid]/sales/_component/invoice/addinvoice";
import {
    accountspayables_columns
} from "@/app/stores/[storeid]/purchases/_components/accountspayables/accountspayables_columns";

function Accountspayable(props) {
    // const data = await getSalesList(props.params.storeid);
    const  tabledata = []
    return (
        <HeaderListTileDialog title='Accountspayable' subtitle='All Invoices are listed here' bname="Create" buttonx={
            <InvoiceForm/>
        }
                        ontap="sales/cashsales">
            <DataTable columns={accountspayables_columns} data={tabledata} filter={'itemname'}/>
        </HeaderListTileDialog>
    );
}

export default Accountspayable;