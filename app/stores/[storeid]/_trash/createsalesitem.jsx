'use client';
import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";

function Createsalesitem(props) {
    const [tablerow, setTablerow] = useState([]);
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Name of item</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tabledata.map((element,index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{element.date}</TableCell>
                            <TableCell>{element.party_name}</TableCell>
                            <TableCell>{element.amount}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}

export default Createsalesitem;