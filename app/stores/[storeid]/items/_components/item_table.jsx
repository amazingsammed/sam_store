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

export  function ItemsPage(prop) {

    const tabledata = prop.data;
  console.log(tabledata);
    return (
      <div className="">
      <Headerlisttile title='Item List' subtitle='All items are listed here' bname="New Item" ontap = "items/addItem"/>
      
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead >Name</TableHead>
            <TableHead className="text-right">Selling Price</TableHead>
            {/*<TableHead className="text-right">Purchase Price</TableHead>*/}
            {/*<TableHead className="text-right">Quantity</TableHead>*/}
            {/*<TableHead className="text-right">Amount</TableHead>*/}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tabledata.map((element,i) => (
            <TableRow key={i}>
              <TableCell >{element.shortname}</TableCell>
              <TableCell className="font-medium">{element.name}</TableCell>
              <TableCell className="text-right">{element.salesprice}</TableCell>
              {/*<TableCell className="text-right">{element.purchaseprice}</TableCell>*/}
              {/*<TableCell className="text-right">{element.qty}</TableCell>*/}
              {/*<TableCell className="text-right">{element.quantity*element.salesprice}</TableCell>*/}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>{tabledata.length} items</TableCell>
            <TableCell className="text-right"> </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
        </div>

    );
  }

 

  

  