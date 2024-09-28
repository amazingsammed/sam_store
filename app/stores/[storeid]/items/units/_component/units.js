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
import {MdMoreVert} from "react-icons/md";
import {HeaderListTileDialog} from "@/components/headerlisttile";
import {AddUnitsDialog} from "@/app/stores/[storeid]/items/units/_component/unitsform";

export  function UnitsTable(prop) {
    const tabledata = prop.elements;
    return (
        <div className="">
            <HeaderListTileDialog title='Unit List' subtitle='All items are listed here' bname="New Item" buttonx ={
                <AddUnitsDialog/>
            }>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Number</TableHead>
                        <TableHead >Name</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tabledata.map((element,i) => (
                        <TableRow key={i}>
                            <TableCell >{i+1}</TableCell>
                            <TableCell className="font-medium">{element.name}</TableCell>
                            <TableCell ><MdMoreVert /></TableCell>

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
            </HeaderListTileDialog>

        </div>

    );
}





