'use client';

import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {HeaderWithButton} from "@/components/app/headerlisttile";


import {useParams, useRouter, useSearchParams} from "next/navigation";

import {getSingleVoucherList} from "@/app/_actions/voucher";

export default function VoucherDetailsPage() {
    const params = useParams();
    const searchParams = useSearchParams()
    const [list, setList] = useState([]);
    const router = useRouter();
    const [account, setAccount] = useState({
        'name':"",
        "account1":"",
        "account1balance":"",
        "account2":"",
        "account2balance":"",
    });
    useEffect(() => {
        const fetcher = async () => {
            const voucher = await getSingleVoucherList(searchParams.get('uuid'),params.storeid);
            if (voucher) {
                setAccount(
                    {
                        'name': voucher[0].voucher.voucher_type_voucher_voucher_typeTovoucher_type.name,
                        "account1": voucher[0].voucher.trn_accounting[0].vouchername,
                        "account1balance": voucher[0].voucher.trn_accounting[0].amount,
                        "account2": voucher[0].voucher.trn_accounting[1].vouchername,
                        "account2balance": voucher[0].voucher.trn_accounting[1].amount,
                    }
                    )
            }
            setList([]);
            voucher.forEach((item) => {
                setList((prev) => [...prev, {
                    "name": item.stock_item.name,
                    'rate': item.rate,
                    "uuid": item.item_uuid,
                    'quantity': item.quantity
                }]);
            })
        };
        fetcher();

    }, []);




    const calculateTotal = () => {
        return list.reduce((total, itemx) => total + itemx['quantity'] * itemx['rate'], 0);
    }

    async function handlePrint() {
        // if (list.length === 0) {
        //     return;
        // }
        //
        // await router.back();
        // setTimeout(() => {
        //     router.refresh();
        // }, 500);
    }


    return (
        <div >
            <div className='h-[80dvh]  justify-between col-span-10'>
                <HeaderWithButton title='Voucher Details' subtitle={`Voucher type : ${account.name}`} bname="Print" ontap={handlePrint}>
                    <div>
                        <div>
                            <h1>{account.account1}</h1>
                            <p>{account.account1balance}</p>
                        </div>
                        <div>
                            <h1>{account.account2}</h1>
                            <p>{account.account2balance}</p>
                        </div>
                    </div>
                    <div className="p-4 mb-auto overflow-y-auto ">
                        <div className="overflow-y-auto ">
                        <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[10]">No. </TableHead>
                                            <TableHead>Item Name</TableHead>
                                            <TableHead className="w-[30]">Rate</TableHead>
                                            <TableHead className="w-[30]">Quantity</TableHead>
                                            <TableHead className="w-[30]">Amount</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {list.map((element, index) => <TableRow key={index}>
                                            <TableCell className="font-medium w-[10]">{index + 1}</TableCell>
                                            <TableCell className="font-medium">{element['name']}</TableCell>
                                            <TableCell>{element['rate']}</TableCell>
                                            <TableCell>{element['quantity']}</TableCell>
                                            <TableCell>{element['quantity'] * element['rate']}</TableCell>
                                        </TableRow>)}
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



