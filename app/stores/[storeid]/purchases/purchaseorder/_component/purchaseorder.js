import React from 'react';
import  {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";

import {InvoiceForm} from "@/app/stores/[storeid]/sales/invoice/_component/addinvoice";
import {purchaseOrderColumns} from "@/app/stores/[storeid]/purchases/purchaseorder/_component/purchaseorder_columns";


function Purchaseorder(props) {
    // const data = await getSalesList(props.params.storeid);
    const  tabledata = []
    return (
        <HeaderListTileDialog title='Purchaseorder' subtitle='All Invoices are listed here' bname="Create" buttonx={
            <InvoiceForm/>
        }
                        ontap="sales/cashsales">
            <DataTable columns={purchaseOrderColumns} data={tabledata} filter={'itemname'}/>
        </HeaderListTileDialog>
    );
}

export default Purchaseorder;