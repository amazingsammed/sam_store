'use client'

import {getItemsList} from "@/app/store/_actions/product";

export async function VoucherTable(prop) {


  const tableData = prop.data;

  return (
      <div className="">
        <Headerlisttile title='Voucher List' subtitle='All Vouchers are listed here' bname="Add Voucher" ontap="items/addItem"/>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead className="w-[300px]">Party Name</TableHead>
              <TableHead>Voucher Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((invoice,i) => (
                <TableRow key={i}>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell className="font-medium">{invoice.party_name}</TableCell>
                  <TableCell>{invoice.voucher_type}</TableCell>
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
import Headerlisttile from "../../../../components/headerlisttile";
import {getVoucherList} from "@/app/store/_actions/voucher";
  

  