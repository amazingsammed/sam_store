import React from 'react';
import  {HeaderListTileDialog} from "@/components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";

import {InvoiceForm} from "@/app/stores/[storeid]/sales/_component/invoice/addinvoice";
import {purchasesColumns} from "@/app/stores/[storeid]/purchases/_components/purchases_columns";


function Purchaseorder(props) {
    // const data = await getSalesList(props.params.storeid);
    const  tabledata = []
    return (
        <HeaderListTileDialog title='Purchaseorder' subtitle='All Invoices are listed here' bname="Create" buttonx={
            <InvoiceForm/>
        }
                        ontap="sales/cashsales">
            <DataTable columns={purchasesColumns} data={tabledata} filter={'itemname'}/>
        </HeaderListTileDialog>
    );
}

export default Purchaseorder;