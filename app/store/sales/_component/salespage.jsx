
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
import Headerlisttile from "../../../../components/headerlisttile";

export  function SalesPage(prop) {

    const tabledata = prop.data;

    return (
        <div className="">
            <Headerlisttile title='Sales List' subtitle='All Sales Vouchers are listed here' bname="New Item" ontap = "items/addItem"/>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Name</TableHead>
                        <TableHead>Party Name</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">action</TableHead>
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





