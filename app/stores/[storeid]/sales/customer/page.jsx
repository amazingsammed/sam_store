import React from 'react';
import {CustomerTable} from "@/app/stores/[storeid]/sales/customer/_components/customerpage";
import {getProducts} from "@/app/_actions/stock_item";
import {getCustomers} from "@/app/_actions/customer";

async function Customers(params) {
    const data = await getCustomers(params.params.storeid);
    return (
        <div>
            <CustomerTable elements={data}/>
        </div>
    );
}

export default Customers;