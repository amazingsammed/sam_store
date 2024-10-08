'use client';

import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {MdCheck, MdDeleteOutline} from "react-icons/md";
import {HeaderWithButton} from "@/components/headerlisttile";
import {ItemListCombo} from "@/app/stores/[storeid]/sales/cashsales/_component/itemlistcombo";

import {useParams, useRouter, useSearchParams} from "next/navigation";

import {getSingleVoucherList} from "@/app/_actions/voucher";

export default function EditVoucherFormPage(prop) {
    const params = useParams();
    const searchParams = useSearchParams()
    const [list, setList] = useState([]);
    const router = useRouter();
    const [account, setAccount] = useState('loading.....');
    const [newitem, setnewitem] = useState({
        "name": '', 'quantity': '', 'amount': '', 'rate': ''
    });
    useEffect(() => {
        const fetcher = async () => {
            const voucher = await getSingleVoucherList(searchParams.get('uuid'),params.storeid);
            if (voucher) {
                setAccount(voucher[0].accountname)
            }
            setList([]);
            voucher.forEach((item) => {
                setList((prev) => [...prev, item]);
            })
        };
        fetcher();

    }, []);

    function handlesubmit(e) {
        setList([
            ...list, newitem
        ]);
        setnewitem({
            "name": '', 'quantity': 0, 'amount': '', 'rate': 0
        })
    }

    function handlechange(e) {
        setnewitem({...newitem, [e.target.name]: e.target.value});
    }

    function handlelistclicked(item) {
        setnewitem({
            ...newitem,
            "name": item.name,
            'rate': item.salesprice,
            "uuid": item.uuid,
        })
    }

    function removeitem(num) {
        setList(list.filter((_, index) => index !== num));
    }

    const calculateTotal = () => {
        return list.reduce((total, itemx) => total + itemx['quantity'] * itemx['rate'], 0);
    }

    async function handleUpdate() {
        if (list.length === 0) {
            return;
        }

        await router.back();
        setTimeout(() => {
            router.refresh();
        }, 500);
    }


    return (
        <div className="grid grid-cols-12">
            <div className='h-[80dvh]  justify-between col-span-10'>
                <HeaderWithButton title='Edit Voucher Form' subtitle={`Voucher type : ${account}`} bname="Update" ontap={handleUpdate}>
                    <div className="p-4 mb-auto overflow-y-auto ">
                        <form action={handlesubmit}>
                            <div className="overflow-y-auto ">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[10]">No. </TableHead>
                                            <TableHead>Item Name</TableHead>
                                            <TableHead className="w-[30]">Rate</TableHead>
                                            <TableHead className="w-[30]">Quantity</TableHead>
                                            <TableHead className="w-[30]">Amount</TableHead>
                                            <TableHead> </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {list.map((element, index) => <TableRow key={index}>
                                            <TableCell className="font-medium w-[10]">{index + 1}</TableCell>
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
                                            <TableCell className="font-medium w-[10]">index </TableCell>
                                            <TableCell>
                                                <ItemListCombo list={prop.cacheditems}
                                                               onChangeValue={handlelistclicked}/>
                                            </TableCell>
                                            <TableCell className="w-[30]">{newitem.rate}</TableCell>
                                            <TableCell className="w-[30]"><TableInputn name='quantity'
                                                                                       value={newitem.quantity}
                                                                                       onchange={handlechange}/></TableCell>
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
                                            <TableCell className="font-medium w-[10]">Total </TableCell>
                                            <TableCell className="font-medium"> </TableCell>
                                            <TableCell className="w-[30]"> </TableCell>
                                            <TableCell className="w-[30]"> </TableCell>
                                            <TableCell className="w-[30]">{calculateTotal()} </TableCell>
                                            <TableCell>
                                            </TableCell>
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


const inputdecoration = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded p-3"


function TableInputn(prop) {

    return (
        <input
            type="number"
            name={prop.name}
            onFocus={prop.onFocus}
            value={prop.value}
            onChange={prop.onchange}
            className={inputdecoration} required/>
    );
}



