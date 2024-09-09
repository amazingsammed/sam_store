'use client';

import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {MdCheck, MdDeleteOutline} from "react-icons/md";
import Headerlisttile from "@/components/headerlisttile";
import {ItemListCombo} from "@/app/stores/[storeid]/sales/cashsales/_component/itemlistcombo";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {Check} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

function Cashsalepage(prop) {

    const [list, setList] = useState([]);
    const [showlist, setShowList] = useState(false);
    const [newitem, setnewitem] = useState({
        "name":'','qty':'','amt':'','rate':''
    });
    function handlesubmit(e){
        console.log(e['name']);
        setList([
            ...list,newitem
        ]);
        setnewitem({
            "name":'','qty':0,'amt':'','rate':0
        })
    }
    function handlechange(e){

        setnewitem({...newitem, [e.target.name]: e.target.value});
    }
    function handlelistclicked(item){
        setnewitem({
            ...newitem,
            "name":item.name,
            'rate':item.salesprice
        })
    }
    function removeitem(num){
        setList(list.filter((_, index) => index !== num));
    }
    const calculateTotal =() =>{
        return list.reduce((total, itemx) =>total + itemx['qty'] * itemx['rate'],0);
    }
    return (
        <div className="">

        <div className='flex h-[80dvh] flex-col justify-between '>
                <Headerlisttile title='Cash Sales' subtitle='Account Name : Cash' bname="Date" ontap=""/>
            <div className="p-4 mb-auto overflow-y-auto ">
                <form action={handlesubmit}>
                    <div className="overflow-y-auto ">

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[10]"> </TableHead>
                                    <TableHead>Item Name</TableHead>
                                    <TableHead className="w-[30]">Quantity</TableHead>
                                    <TableHead className="w-[30]">Rate</TableHead>
                                    <TableHead className="w-[30]">Amount</TableHead>
                                    <TableHead> </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {list.map((element, index) => <TableRow key={index}>
                                    <TableCell className="font-medium w-[10]">{index + 1}</TableCell>
                                    <TableCell className="font-medium">{element['name']}</TableCell>
                                    <TableCell>{element['qty']}</TableCell>
                                    <TableCell>{element['rate']}</TableCell>
                                    <TableCell>{element['qty'] * element['rate']}</TableCell>
                                    <TableCell>
                                        <button onClick={() => removeitem(index)}>

                                            <MdDeleteOutline size="20"/>
                                        </button>
                                    </TableCell>


                                </TableRow>)}
                                <TableRow>


                                    <TableCell className="font-medium w-[10]"> </TableCell>
                                   {/* <TableCell>*/}

                                   {/*<ItemListCombo list ={prop.cacheditems} />*/}
                                   {/* </TableCell>*/}
                                    <TableCell className="font-medium"><TableInput name='name' value={newitem.name}
                                                                                   onchange={handlechange} onFocus={()=>setShowList(true)}


                                    /></TableCell>
                                    <TableCell className="w-[30]"><TableInputn name='qty' value={newitem.qty}
                                                                               onFocus={()=>setShowList(false)}
                                                                               onchange={handlechange}/></TableCell>
                                    <TableCell className="w-[30]"><TableInputn name='rate' value={newitem.rate}
                                                                               onchange={handlechange}/></TableCell>
                                    <TableCell className="w-[30]">{newitem.qty * newitem.rate}</TableCell>
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
            <div className="grid grid-cols-13">
                <h1 className="col-span-11">Sammed</h1>
                <h1 className="">{calculateTotal()}</h1>
            </div>

        </div>

            {showlist && <div className="fixed right-0 top-6 flex flex-col bg-purple-800 ">
                <TableInput />
                {prop.cacheditems.map((element, i) => (
                    <Button
                        className="mt-2 bg-auto "
                        key={i}
                        value={element.product_id}
                        onClick={()=>handlelistclicked(element)}
                    >
                        {element.name}
                    </Button>
                ))}

            </div>
            }
        </div>
    );
}

export default Cashsalepage;

const inputdecoration = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded p-3"

function TableInput(prop) {

    return (
        <input
            onBlur={prop.onBlur}
            onFocus={prop.onFocus}
            type="text"
            name={prop.name}
            value={prop.value}
            onChange={prop.onchange}
            className={inputdecoration} required />
    );
}
function TableInputn(prop) {

    return (
        <input
            type="number"
            name={prop.name}
            onFocus={prop.onFocus}
            value={prop.value}
            onChange={prop.onchange}
            className={inputdecoration} required />
    );
}



