
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
import {AddGroupDialog} from "@/app/stores/[storeid]/items/group/_component/groupform";

export  function GroupTable(prop) {

    const tabledata = prop.elements;

    return (
        <div className="">
            <HeaderListTileDialog title='Group List' subtitle='All items are listed here' bname="New Item" buttonx ={
                <AddGroupDialog/>
            }>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Index</TableHead>
                        <TableHead >Name</TableHead>
                        <TableHead >Group</TableHead>
                        <TableHead >Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tabledata.map((element,i) => (
                        <TableRow key={i}>
                            <TableCell >{i+1}</TableCell>
                            <TableCell className="font-medium">{element.name}</TableCell>
                            <TableCell >{element.stock_item_category.name}</TableCell>
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





