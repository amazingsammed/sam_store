"use client"
import React, {useState} from 'react';
import {CTextfieldR} from "@/components/app/ktextfield";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {MdCheck, MdCompareArrows, MdDeleteOutline, MdMoreVert} from "react-icons/md";
import {Input} from "@/components/ui/input";
import {CustomerListCombo} from "@/app/stores/[storeid]/sales/invoice/createinvoice/_component/customerlistcombo";
import Statuscombo from "@/app/stores/[storeid]/sales/invoice/createinvoice/_component/statuscombo";
import {ItemListCombo} from "@/app/stores/[storeid]/sales/invoice/createinvoice/_component/itemlistcombo";
import MainContainer from "@/components/app/mainContainer";

const singleLine ={
    "quantity":0,
    "item":"",
    "discount":0,
    "rate":0,
}
function Invoiceform(props) {
    const [customer, setCustomer] = useState();
    const [status, setStatus] = useState("");
    const [items, setItems] = useState([]);
    const [rows, setRows] = useState(singleLine);

    function onItemChange(item){
        setRows({...rows, item: item.name,uuid: item.uuid,rate: item.salesprice});
    }
    function allChange(e){
            const { name, value } = e.target;
            setRows({...rows,   [name]: name === 'quantity' || name === 'rate' ? Number(value) : value});
    }
    function removeitem(num) {
        setItems(items.filter((_, index) => index !== num));
    }
    function handleSubmit(e){
        e.preventDefault();
        setItems([...items, rows]);
        setRows(singleLine);
    }
    return (
        <MainContainer >
            <Card>
                <CardHeader className="text-xl font-bold flex flex-row justify-between w-full">
                    New Invoice
                    <div className="flex justify-end gap-2 flex-row">
                        <Button>Create</Button>
                        <Button variant="outline">Cancel</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="flex-row flex items-center justify-between gap-4 py-3">
                        <div className="flex justify-between flex-row w-full gap-4 ">
                                <Card className='p-4 flex flex-col gap-4'>

                                    <CustomerListCombo/>
                                    <Statuscombo/>
                                </Card>

                            </div>
                        </div>
                        <Card>
<form onSubmit={handleSubmit}>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-right w-[50px]"></TableHead>
                                        <TableHead className="text-right w-[100px]">Quantity</TableHead>
                                        <TableHead>Item</TableHead>
                                        <TableHead className=" w-[120px]">Discount %</TableHead>
                                        <TableHead className="text-right w-[120px]">Unit price</TableHead>
                                        <TableHead className="text-right w-[120px]">Total</TableHead>
                                        <TableHead className="text-right w-[120px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        items.map((element, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="text-right w-[100px]">{index+1}</TableCell>
                                                <TableCell className="text-right w-[100px]">{element.quantity}</TableCell>
                                                <TableCell>{element.item}</TableCell>
                                                <TableCell className=" w-[100px]">{element.discount}</TableCell>
                                                <TableCell className="text-right w-[100px]">{element.rate}</TableCell>
                                                <TableCell className="text-right w-[100px]">{((element.quantity*element.rate)*(1-element.discount/100)).toFixed(2)}</TableCell>
                                                <TableCell className="text-right w-[100px]">
                                                    <Button onClick={() => removeitem(index)}>

                                                        <MdDeleteOutline size="20"/>
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }

                                    <TableRow >
                                        <TableCell></TableCell>
                                        <TableCell className="text-right w-[100px]"><Input type="number" value={rows.quantity} name='quantity' required onChange={allChange}/></TableCell>
                                        <TableCell><ItemListCombo onChange={onItemChange}/></TableCell>
                                        <TableCell className=" w-[100px]"><Input type="number" value={rows.discount} name='discount' onChange={allChange}/></TableCell>
                                        <TableCell className="text-right w-[100px]"><Input type="number" value={rows.rate} name='rate' required onChange={allChange}/></TableCell>
                                        <TableCell className="text-right w-[100px]">{((rows.quantity*rows.rate)*(1-rows.discount/100)).toFixed(2)}</TableCell>
                                        <TableCell className="text-right w-[100px]">
                                            <Button type="submit" variant='outline'>

                                            <MdCheck size="20"/>
                                            </Button>
                                        </TableCell>
                                    </TableRow>


                                </TableBody>
                            </Table>
</form>
                        </Card>

                        <div className="flex items-center gap-2 flex-row">
                            <Button>Add Item</Button>
                            <Button variant="outline">Add Discount</Button>
                        </div>
                        <div>
                            <Textarea placeholder="Enter comments here ...."/>
                        </div>



                    </div>

                </CardContent>
            </Card>
        </MainContainer>
    );
}

export default Invoiceform;