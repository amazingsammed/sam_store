'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import {AddLedgerDialog} from "@/app/stores/[storeid]/_trash/account/ledgers/_components/addItemForm";
import {HeaderListTileDialog} from "@/components/headerlisttile";




export  function LedgerPage(prop) {

  const TableData = prop.data;

  return (
      <div className="">
        <HeaderListTileDialog title='Ledgers' subtitle='All Account Ledgers are listed here' buttonx={
          <AddLedgerDialog/>
        } />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead>Parent</TableHead>
              <TableHead>Opening Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TableData.map((element ,index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{element.name}</TableCell>
                  <TableCell>{element.parent}</TableCell>
                  <TableCell>{element.opening_balance}</TableCell>

                </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>{TableData.length +"Ledgers"}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

  );
}











  