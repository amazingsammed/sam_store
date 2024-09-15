'use client'

export function VoucherTable(prop) {


  const tableData = prop.data;

  return (
      <div className="">
        <Headerlisttile title='Voucher List' subtitle='All Vouchers are listed here' bname="Add Voucher" ontap="items/addItem"/>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Voucher Type</TableHead>
              <TableHead>Narration</TableHead>
              <TableHead >Account name</TableHead>
              <TableHead className="text-right" >Amount</TableHead>
              <TableHead >Sales Person</TableHead>
              <TableHead >Action </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((invoice,i) => (
                <TableRow key={i}>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.vouchertype}</TableCell>
                  <TableCell>{invoice.narration}</TableCell>
                  <TableCell>{invoice.account}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.salesperson}</TableCell>
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
  

  