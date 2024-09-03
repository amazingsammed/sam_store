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
import {AddGroupDialog} from "@/app/store/account/groups/_components/group_form";
import {AddChartofAccount} from "@/app/store/account/chartofaccount/_components/coa_form";


export  function Cartofaccount(prop) {
 
    const TableData = prop.data;
  
    return (
      <div className="">
      <HeaderListTileDialog title='Chart of Accounts' subtitle='All Account in current store' buttonx={
        <AddChartofAccount/>
      } ontap = "items/addItem"/>
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Account Code</TableHead>
            <TableHead>Account Name</TableHead>
            <TableHead>Account Group</TableHead>
            <TableHead>Account Type</TableHead>
            <TableHead>Opening Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TableData.map((element ,index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{element.name}</TableCell>
              <TableCell>{element.primary_group}</TableCell>
              <TableCell>{element.parent}</TableCell>

            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>{TableData.length +"Groups"}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
        </div>

    );
  }

 

  

  