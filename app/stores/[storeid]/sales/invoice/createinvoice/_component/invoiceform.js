"use client"
import React, {useState} from 'react';
import {CTextfieldR} from "@/components/app/ktextfield";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {MdCheck, MdCompareArrows, MdDeleteOutline, MdMoreVert} from "react-icons/md";
import {Input} from "@/components/ui/input";
import {CustomerListCombo} from "@/app/stores/_component/customerlistcombo";
import Statuscombo from "@/app/stores/[storeid]/sales/invoice/createinvoice/_component/statuscombo";
import {ItemListCombo} from "@/app/stores/_component/itemlistcombo";
import MainContainer from "@/components/app/mainContainer";
import {DatePickerWithPresets} from "@/app/stores/[storeid]/sales/invoice/createinvoice/_component/datecombobox";
import {Label} from "@/components/ui/label";
import {createInvoice} from "@/app/_actions/invoice";

const singleLine = {
    "quantity": 0,
    "item": "",
    "discount": 0,
    "rate": 0,
}

function Invoiceform(props) {
    const [endDate, setEndDate] = useState(null);
    const [customer, setCustomer] = useState();
    const [status, setStatus] = useState("");
    const [items, setItems] = useState([]);
    const [rows, setRows] = useState(singleLine);

    function onItemChange(item) {
        setRows({...rows, item: item.name, uuid: item.uuid, rate: item.salesprice});
    }

    function allChange(e) {
        const {name, value} = e.target;
        setRows({...rows, [name]: name === 'quantity' || name === 'rate' ? Number(value) : value});
    }

    function removeitem(num) {
        setItems(items.filter((_, index) => index !== num));
    }
 function handleCustomerChange(e){
        setCustomer(e);
        console.log(e);
 }
    function handleEndDate(e){
        setEndDate(e);
        console.log(e);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setItems([...items, rows]);
        setRows(singleLine);
    }
    async function handleCreate(e) {
        await createInvoice({
            items: items,
            customer: customer,
            endDate: endDate,
        });
        console.log(items)
    }

    return (
        <MainContainer>
            <Card>
                <CardHeader className="text-xl font-bold flex flex-row justify-between w-full">
                    New Invoice
                    <div className="flex justify-end gap-2 flex-row">
                        <Button onClick={handleCreate}>Create</Button>
                        <Button variant="outline">Cancel</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="flex-row flex items-center justify-between gap-4 py-3">
                            <div className="flex justify-between flex-row w-full gap-4 ">
                                <Card className='p-4 flex flex-col gap-4'>
                                    <div className="grid grid-cols-3 gap-4">
                                        <CustomerListCombo onChange={handleCustomerChange}/>
                                        <Statuscombo/>
                                        <div className="flex  flex-col justify-between  gap-2">
                                            <Label>
                                                Discount
                                            </Label>

                                            <Card className="p-2 flex flex-row gap-2 items-center">


                                                <input type='checkbox' id='discount'/>
                                                <label id={"discount"}>does item include discount?</label>
                                            </Card>
                                        </div>
                                        <div className="flex  flex-col justify-between  gap-2">
                                            <Label>
                                                Tax
                                            </Label>

                                            <Card className="p-2 flex flex-row gap-2 items-center">

                                                <input type='checkbox' id='discount'/>
                                                <label id='discount'>does item include tax?</label>
                                            </Card>
                                        </div>
                                        <DatePickerWithPresets label={`End Date`} onChange={handleEndDate}/>
                                    </div>
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
                                                    <TableCell className="text-right w-[50px]">{index + 1}</TableCell>
                                                    <TableCell
                                                        className="text-right w-[100px]">{element.quantity}</TableCell>
                                                    <TableCell>{element.item}</TableCell>
                                                    <TableCell className=" w-[100px]">{element.discount}</TableCell>
                                                    <TableCell
                                                        className="text-right w-[100px]">{element.rate}</TableCell>
                                                    <TableCell
                                                        className="text-right w-[100px]">{((element.quantity * element.rate) * (1 - element.discount / 100)).toFixed(2)}</TableCell>
                                                    <TableCell className="text-right w-[100px]">
                                                        <Button onClick={() => removeitem(index)}>

                                                            <MdDeleteOutline size="20"/>
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }

                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell className="text-right w-[50px]"><Input type="number"
                                                                                               value={rows.quantity}
                                                                                               name='quantity' required
                                                                                               onChange={allChange}/></TableCell>
                                            <TableCell><ItemListCombo onChange={onItemChange}/></TableCell>
                                            <TableCell className=" w-[100px]"><Input type="number" value={rows.discount}
                                                                                     name='discount'
                                                                                     onChange={allChange}/></TableCell>
                                            <TableCell className="text-right w-[100px]"><Input type="number"
                                                                                               value={rows.rate}
                                                                                               name='rate' required
                                                                                               onChange={allChange}/></TableCell>
                                            <TableCell
                                                className="text-right w-[100px]">{((rows.quantity * rows.rate) * (1 - rows.discount / 100)).toFixed(2)}</TableCell>
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

                        <div className={`flex flex-row justify-between`}>

                            <div>
                                <Input placeholder="Enter comments here ...."/>
                            </div>
                            <Card className="p-4 gap-4 flex flex-col">
                                <div className="gap-3 flex flex-row items-center justify-between">

                                    <Label>Total :</Label>
                                    <input value='200'/>
                                </div>
                                <div className="gap-3 flex flex-row items-center justify-between">

                                    <Label>Tax :</Label>
                                    <input value='200'/>
                                </div>
                                <div className="gap-3 flex flex-row items-center justify-between">

                                    <Label>Net Amount :</Label>
                                    <input value='200'/>
                                </div>
                            </Card>
                        </div>


                    </div>

                </CardContent>
            </Card>
        </MainContainer>
    );
}

export default Invoiceform;