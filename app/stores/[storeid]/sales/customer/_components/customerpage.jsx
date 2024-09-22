

'use client'

import Headerlisttile, {HeaderListTileDialog} from "@/components/headerlisttile";
import {CustomerForm} from "@/app/stores/[storeid]/sales/customer/_components/addcustomer";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {customerColumns} from "@/app/stores/[storeid]/sales/customer/_components/customer_columns";


export  function CustomerTable(props) {
    const elements = props.elements;
    return (
        <div className="">
            <HeaderListTileDialog title='List of Customers' subtitle='All Customers in Current Store' buttonx={
                <CustomerForm/>
            } ontap = "items/addItem">
                <DataTable columns={customerColumns} data={elements} filter={'name'}/>
            </HeaderListTileDialog>
            {/*<Table>*/}
            {/*    <TableHeader>*/}
            {/*        <TableRow>*/}

            {/*            <TableHead>Name</TableHead>*/}
            {/*            <TableHead>Type</TableHead>*/}
            {/*            <TableHead>Balance</TableHead>*/}
            {/*            <TableHead>Last Invoice</TableHead>*/}
            {/*            <TableHead>SalesPerson</TableHead>*/}
            {/*            <TableHead>Phone</TableHead>*/}
            {/*        </TableRow>*/}
            {/*    </TableHeader>*/}
            {/*    <TableBody>*/}
            {/*        {elements.map((element ,index) => (*/}
            {/*            <TableRow key={index}>*/}
            {/*                <TableCell>{element.name}</TableCell>*/}
            {/*                <TableCell>{element.type}</TableCell>*/}
            {/*                <TableCell>{element.balance}</TableCell>*/}
            {/*                <TableCell>{element.last_invoice}</TableCell>*/}
            {/*                <TableCell>{element.salesperson}</TableCell>*/}
            {/*                <TableCell>{element.phone}</TableCell>*/}

            {/*            </TableRow>*/}
            {/*        ))}*/}
            {/*    </TableBody>*/}
            {/*    <TableFooter>*/}
            {/*        <TableRow>*/}
            {/*            <TableCell colSpan={3}>{elements.length +" Customers"}</TableCell>*/}
            {/*        </TableRow>*/}
            {/*    </TableFooter>*/}
            {/*</Table>*/}
        </div>

    );
}





