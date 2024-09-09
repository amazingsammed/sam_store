

'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Headerlisttile, {HeaderListTileDialog} from "@/components/headerlisttile";
import {CustomerForm} from "@/app/stores/[storeid]/sales/customer/_components/addcustomer";


export  function CustomerTable() {
    const TableData = [{
        'code': '123',
        'name': 'SAMMED',
        'type':'single',
        'balance':'200',
        'last_invoice':'INV123',
        'salesperson':'kk',
        'phone':'233543220177',
    }];
    return (
        <div className="">
            <HeaderListTileDialog title='List of Customers' subtitle='All Customers in Current Store' buttonx={
                <CustomerForm/>
            } ontap = "items/addItem"/>
            <Table>
                <TableHeader>
                    <TableRow>

                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Balance</TableHead>
                        <TableHead>Last Invoice</TableHead>
                        <TableHead>SalesPerson</TableHead>
                        <TableHead>Phone</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {TableData.map((element ,index) => (
                        <TableRow key={index}>
                            <TableCell>{element.name}</TableCell>
                            <TableCell>{element.type}</TableCell>
                            <TableCell>{element.balance}</TableCell>
                            <TableCell>{element.last_invoice}</TableCell>
                            <TableCell>{element.salesperson}</TableCell>
                            <TableCell>{element.phone}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>{TableData.length +" Customers"}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>

    );
}





