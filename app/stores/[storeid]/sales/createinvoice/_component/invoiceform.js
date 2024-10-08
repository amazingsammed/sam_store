"use client"
import React, {useState} from 'react';
import {CTextfieldR} from "@/components/ktextfield";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {MdCompareArrows, MdMoreVert} from "react-icons/md";
import {Input} from "@/components/ui/input";

function Invoiceform(props) {
    const [items, setItems] = useState([1]);
    return (
        <div className="max-w-screen-xl">
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
                                <Card className="p-4 w-2/3">
                                    <CTextfieldR label="Customer Name" value='' name="name"/>
                                    <CTextfieldR label="Customer Name" value='' name="name"/>
                                </Card>
                                <Card className="p-4 w-1/3">
                                    <CTextfieldR label="Date" value='' name="date"/>
                                    <CTextfieldR label="Deposit Account" value='' name="da"/>
                                </Card>
                            </div>
                        </div>
                        <Card className="max-h-[300px] overflow-y-auto">

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="text-right w-[100px]">Quantity</TableHead>
                                        <TableHead>Item</TableHead>
                                        <TableHead className=" w-[100px]">Discount</TableHead>
                                        <TableHead className=" w-[100px]">Tax</TableHead>
                                        <TableHead className="text-right w-[100px]">Unit price</TableHead>
                                        <TableHead className="text-right w-[100px]">Total</TableHead>
                                        <TableHead className="text-right w-[100px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        items.map((element, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="text-right w-[100px]">12</TableCell>
                                                <TableCell>Mango</TableCell>
                                                <TableCell className=" w-[100px]">12%</TableCell>
                                                <TableCell className=" w-[100px]">Default</TableCell>
                                                <TableCell className="text-right w-[100px]">2.5</TableCell>
                                                <TableCell className="text-right w-[100px]">36</TableCell>
                                                <TableCell className="text-right w-[100px]"><MdMoreVert/></TableCell>
                                            </TableRow>
                                        ))
                                    }

                                    <TableRow >
                                        <TableCell className="text-right w-[100px]"><Input type="number"/></TableCell>
                                        <TableCell><Input type="text"/></TableCell>
                                        <TableCell className=" w-[100px]"><Input type="number"/></TableCell>
                                        <TableCell className=" w-[100px]"><Input type="number"/></TableCell>
                                        <TableCell className="text-right w-[100px]"><Input type="number"/></TableCell>
                                        <TableCell className="text-right w-[100px]"><Input type="number"/></TableCell>
                                        <TableCell className="text-right w-[100px]"><MdCompareArrows/></TableCell>
                                    </TableRow>


                                </TableBody>
                            </Table>
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
        </div>
    );
}

export default Invoiceform;