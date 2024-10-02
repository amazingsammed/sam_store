'use client';

import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {MdCheck, MdDeleteOutline} from "react-icons/md";
import {HeaderWithButton} from "@/components/headerlisttile";
import {ItemListCombo} from "@/app/stores/[storeid]/sales/cashsales/_component/itemlistcombo";
import {useParams, useRouter} from "next/navigation";
import {useFormState} from "react-dom";
import {CashPurchasesSchema} from "@/app/_zod-models/auth";
import {z} from "zod";
import {createCashPurchases} from "@/app/_actions/purchases";
import {toast, Toaster} from "sonner";


export default function CashPurchasesFormPage(prop) {
    const path = useParams();
    const [list, setList] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]);
    const router = useRouter();
    const [newitem, setnewitem] = useState({
        "name": '', 'quantity': 0, 'amount': 0, 'rate': 0
    });

    function handlesubmit(e) {
        setList([
            ...list, newitem
        ]);
        setnewitem({
            "name": '', 'quantity': 0, 'amount': 0, 'rate': 0
        })
    }

    function handlechange(e) {
        const { name, value } = e.target;
        setnewitem({
            ...newitem,
            [name]: name === 'quantity' || name === 'rate' ? Number(value) : value
        });
    }

    function handlelistclicked(item) {
        setnewitem({
            ...newitem,
            "name": item.name,
            'rate': Number(item.purchaseprice),
            "uuid": item.uuid,
        })
    }

    function removeitem(num) {
        setList(list.filter((_, index) => index !== num));
    }

    const calculateTotal = () => {
        return list.reduce((total, itemx) => total + itemx['quantity'] * itemx['rate'], 0);
    }

    async function handleSave(e,data) {
        if (list.length === 0) {
            return;
        }
        console.log(list)
        const arrayZ = z.array(CashPurchasesSchema)
        const validatedFields = arrayZ.safeParse(list);
        console.log(validatedFields);
        if (!validatedFields.success) {
            const errors = validatedFields.error.errors.map(err => err.message);
            setErrorMessages(errors);
            toast.error('Incorrect data input')
            return [];
        }
        setErrorMessages([]);
        toast.success('Valid input');
        // await createCashPurchases(list, path.storeid);
        // await router.back();
        // setTimeout(() => {
        //     router.refresh();
        // }, 500);
    }
    const [state, action] = useFormState(handleSave, undefined);

    return (
        <div className="grid grid-cols-12">

            <div className='h-[80dvh]  justify-between col-span-10'>
                <HeaderWithButton title='Cash Purchases Form'
                                  subtitle='This for is used to record purchases made with cash only'
                                  bname="Save"
                                  ontap={action}>
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
                                        {list.map(({ name, rate, quantity, uuid }, index) => <TableRow key={index}>
                                            <TableCell className="font-medium w-[10]">{index + 1}</TableCell>
                                            <TableCell className="font-medium">{name}</TableCell>
                                            <TableCell>{rate}</TableCell>
                                            <TableCell>{quantity}</TableCell>
                                            <TableCell>{quantity * rate}</TableCell>
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
                                            {/*<TableCell className="w-[30]">{newitem.rate}</TableCell>*/}
                                            <TableCell className="w-[30]"><TableInputn name='rate' value={newitem.rate}
                                                                                       onchange={handlechange}/></TableCell>
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
                                            <TableCell className="w-[30]">
                                                {errorMessages.length > 0 && (
                                                    <div>
                                                        {errorMessages.map((error, index) => (
                                                            <p key={index} className="text-sm text-red-500">{error}</p>
                                                        ))}
                                                    </div>
                                                )}
                                            </TableCell>
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



