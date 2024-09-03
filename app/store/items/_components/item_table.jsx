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

export  function ItemsPage(prop) {
 
    const tabledata = prop.data;
  
    return (
      <div className="">
      <Headerlisttile title='Item List' subtitle='All items are listed here' bname="New Item" ontap = "items/addItem"/>
      
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Name</TableHead>
            <TableHead>Rate</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tabledata.map((element) => (
            <TableRow key={element.guid}>
              <TableCell className="font-medium">{element.name}</TableCell>
              <TableCell>{element.opening_rate}</TableCell>
              <TableCell>{element.uom}</TableCell>
              <TableCell className="text-right">{element.opening_value}</TableCell>
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

 

  

  