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
import {HeaderListTileDialog} from "@/components/headerlisttile";
import {AddGroupDialog} from "@/app/stores/[storeid]/_trash/account/groups/_components/group_form";


export  function GroupPage(prop) {
 
    const TableData = prop.data;
  
    return (
      <div className="">
      <HeaderListTileDialog title='Group List' subtitle='All Account Group are listed here' buttonx={
        <AddGroupDialog/>
      } ontap = "items/addItem"/>
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Name</TableHead>
            <TableHead>Primary Group</TableHead>
            <TableHead>Parent</TableHead>
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

 

  

  