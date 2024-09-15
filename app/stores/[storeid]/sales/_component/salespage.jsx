
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
import Headerlisttile from "../../../../../components/headerlisttile";
import {MdMoreVert} from "react-icons/md";

export  function SalesPage(prop) {

    const tabledata = prop.data;

    return (
        <div className="">
            <Headerlisttile title='Sales List' subtitle='All Sales Vouchers are listed here' bname="New Item" ontap = "sales/cashsales"/>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >date</TableHead>
                        <TableHead>Item code</TableHead>
                        <TableHead className="w-[300px]">Item name</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Account</TableHead>
                        <TableHead>Sales Person</TableHead>
                        <TableHead className="text-right">action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tabledata.map((element,index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{element.date}</TableCell>
                            <TableCell>{element.shortname}</TableCell>
                            <TableCell>{element.itemname}</TableCell>
                            <TableCell>{element.quantity}</TableCell>
                            <TableCell>{element.rate}</TableCell>
                            <TableCell>{element.amount}</TableCell>
                            <TableCell>{element.party_name}</TableCell>
                            <TableCell>{element.salesperson}</TableCell>
                            <TableCell><MdMoreVert/></TableCell>

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





