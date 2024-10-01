'use client';

import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {MdCheck, MdDeleteOutline} from "react-icons/md";
import {HeaderWithButton} from "@/components/headerlisttile";
import {createCashSales} from "@/app/_actions/sales";
import {useParams, useRouter} from "next/navigation";
import {addManyProduct} from "@/app/_actions/stock_item";


function MultiCreatePage() {

    const path = useParams();
    const [success, setSuccess] = useState(false);
    const [list, setList] = useState([]);
    const router = useRouter();
    const [newitem, setnewitem] = useState({
        "name": '',
        'quantity': 0,
        'rate': 0,
        'amount': 0,
    });

    function handlesubmit(e) {
        setList([
            ...list, newitem
        ]);
        setnewitem(
            {
                "name": '',
                'quantity': 0,
                'rate': 0,
                'amount': 0,
            }
        )
    }

    function handlechange(e) {
        setnewitem({...newitem, [e.target.name]: e.target.value});
    }


    function removeitem(num) {
        setList(list.filter((_, index) => index !== num));
    }

    const calculateTotal = () => {
        return list.reduce((total, itemx) => total + itemx['quantity'] * itemx['rate'], 0);
    }

    async function handleSave() {
        if (list.length === 0) {
            return;
        }
        const [stock, voucher, inventory, account] = await addManyProduct(list, path.storeid);
        console.log(stock, voucher, inventory, account);
        if (stock && voucher && inventory && account) {
            if (stock.count === list.length && account.count === list.length * 2) {
                await router.back();
                setTimeout(() => {
                    router.refresh();
                }, 500);
            }else {
                console.log(stock, voucher, inventory, account);
            }
        }else {
            console.log(stock, voucher, inventory, account);
        }
    }


    function GetTotalSales() {
        let total = 0.0;
        if (list.length === 0) {
            return 0
        }
        list.forEach(item => {
            total = (item.salesprice * item.quantity) + total;
        })
        return total;
    }

    function GetTotalPurchases() {
        let total = 0.0;
        if (list.length === 0) {
            return 0
        }
        list.forEach(item => {
            total = (item.purchaseprice * item.quantity) + total;
        })
        return total;
    }

    return (
        <div>
            <div>
                <HeaderWithButton title='Multi Create ' subtitle='Create more items on the go' bname="Create all"
                                  ontap={handleSave}>
                    <div className="p-4 mb-auto">
                        <form action={handlesubmit}>
                            <div className="">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="font-medium w-[10]">Item Name</TableHead>
                                            <TableHead className="font-medium w-[10]">Rate(purchase price)</TableHead>
                                            <TableHead className="font-medium w-[10]">Quantity</TableHead>
                                            <TableHead className="font-medium w-[10]">Amount</TableHead>
                                            <TableHead></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {list.map((element, index) => <TableRow key={index}>
                                            <TableCell className="font-medium">{element['name']}</TableCell>
                                            <TableCell>{element['rate']}</TableCell>
                                            <TableCell>{element['quantity']}</TableCell>
                                            <TableCell>{element['quantity'] * element['rate']}</TableCell>
                                            <TableCell>
                                                <button onClick={() => removeitem(index)}>
                                                    <MdDeleteOutline size="20"/>
                                                </button>
                                            </TableCell>


                                        </TableRow>)}
                                        <TableRow>
                                            <TableCell className="font-medium w-[10]"><TableInput
                                                name='name'
                                                value={newitem.name}
                                                onchange={handlechange}
                                            /> </TableCell>
                                            <TableCell className="w-[30]"><TableInputn
                                                className="w-[30]"
                                                name='rate'
                                                value={newitem.rate}
                                                onchange={handlechange}
                                            /> </TableCell>
                                            <TableCell>
                                                <TableInputn
                                                    className="w-[30]"
                                                    name='quantity'
                                                    value={newitem.quantity}
                                                    onchange={handlechange}
                                                />
                                            </TableCell>
                                            <TableCell className="w-[30]">{newitem.quantity * newitem.rate}</TableCell>
                                            <TableCell>
                                                <button type='submit'>
                                                    <MdCheck size="20"/>
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell className="font-medium w-[10]">Total Items
                                                = {list.length} </TableCell>
                                            <TableCell className="font-medium w-[10]">All Sales by Qty = {
                                                <GetTotalSales/>} </TableCell>
                                            <TableCell className="font-medium w-[10]">All Purchases by Qty = {
                                                <GetTotalPurchases/>} </TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </div>
                        </form>

                    </div>
                </HeaderWithButton>

            </div>
        </div>
    );
}

export default MultiCreatePage;

const inputdecoration = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded p-3"


function TableInputn(prop) {
    return (
        <input
            type="number"
            name={prop.name}
            onFocus={prop.onFocus}
            value={prop.value}
            onChange={prop.onchange}
            className={inputdecoration + " " + prop.className} required
        />
    );
}

function TableInput(prop) {
    return (
        <input
            name={prop.name}
            onFocus={prop.onFocus}
            value={prop.value}
            onChange={prop.onchange}
            className={inputdecoration + " " + prop.className} required
        />
    );
}


