'use client'
import Headerlisttile from "../../../../../components/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {purchasesColumns} from "@/app/stores/[storeid]/purchases/_components/purchases_columns";

export  function PurchasesListPage(prop) {

    const tabledata = prop.data;

    return (
        <div className="">
            <Headerlisttile title='Purchases List' subtitle='All Purchases Vouchers are listed here' bname="Create" ontap = "purchases/cashpurchases">
                <DataTable columns={purchasesColumns} data={tabledata} filter={'itemname'}/>
            </Headerlisttile>
            {/*<Table>*/}
            {/*    <TableHeader>*/}
            {/*        <TableRow>*/}
            {/*            <TableHead >Date</TableHead>*/}
            {/*            <TableHead>Item code</TableHead>*/}
            {/*            <TableHead className="w-[300px]">Item name</TableHead>*/}
            {/*            <TableHead>Quantity</TableHead>*/}
            {/*            <TableHead>Rate</TableHead>*/}
            {/*            <TableHead>Amount</TableHead>*/}
            {/*            <TableHead>Account</TableHead>*/}
            {/*            <TableHead>Sales Person</TableHead>*/}
            {/*            <TableHead className="text-right">action</TableHead>*/}
            {/*        </TableRow>*/}
            {/*    </TableHeader>*/}
            {/*    <TableBody>*/}
            {/*        {tabledata.map((element,index) => (*/}
            {/*            <TableRow key={index}>*/}
            {/*                <TableCell className="font-medium">{element.date}</TableCell>*/}
            {/*                <TableCell>{element.shortname}</TableCell>*/}
            {/*                <TableCell>{element.itemname}</TableCell>*/}
            {/*                <TableCell>{element.quantity}</TableCell>*/}
            {/*                <TableCell>{element.rate}</TableCell>*/}
            {/*                <TableCell>{element.amount}</TableCell>*/}
            {/*                <TableCell>{element.party_name}</TableCell>*/}
            {/*                <TableCell>{element.salesperson}</TableCell>*/}
            {/*                <TableCell><MdMoreVert/></TableCell>*/}

            {/*            </TableRow>*/}
            {/*        ))}*/}
            {/*    </TableBody>*/}
            {/*    <TableFooter>*/}
            {/*        <TableRow>*/}
            {/*            <TableCell colSpan={3}>Total</TableCell>*/}
            {/*            <TableCell className="text-right">$2,500.00</TableCell>*/}
            {/*        </TableRow>*/}
            {/*    </TableFooter>*/}
            {/*</Table>*/}
        </div>

    );
}





