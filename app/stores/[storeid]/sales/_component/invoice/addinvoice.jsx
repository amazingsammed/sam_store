

"use client";

import {CTextfieldR, CDropDownWithOnChange, CTextfieldNum, CTextfieldRrow} from '@/components/ktextfield'
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useParams, useRouter} from "next/navigation";
import {addCustomer} from "@/app/_actions/customer";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import React from "react";
import {Card} from "@/components/ui/card";


const typex = [
    {
        "id": 1,
        "name": "Single"
    },
    {
        "id": 2,
        "name": "Company"
    }

];

export function InvoiceForm() {
    const path= useParams();
    const router = useRouter();

    async function handleCreateCustomer(formData) {
        await addCustomer(formData,path.storeid);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Invoice</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[750px]">
                <form action={handleCreateCustomer}>
                    <DialogHeader>
                        <DialogTitle>Create New Invoice</DialogTitle>
                        <DialogDescription>
                           Fill the form below
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="flex-row flex items-center justify-between gap-4 py-3">
                            <div className="w-full space-y-2">
                                <CTextfieldR label="Customer Name" value='' name="name"/>
                                <CTextfieldR label="Customer address" value='' name="add"/>
                                <CTextfieldR label="Date" value='' name="date"/>
                                <CTextfieldR label="Deposit Account" value='' name="da"/>
                            </div>
                        </div>
<Card className="max-h-[300px]">

                        <Table >
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Item</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Unit price</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>

                                    <TableRow>
                                        <TableCell>12</TableCell>
                                        <TableCell>Mango</TableCell>
                                        <TableCell>big one</TableCell>
                                        <TableCell>2.5</TableCell>
                                        <TableCell>36</TableCell>
                                    </TableRow>
                                <TableRow>
                                    <TableCell>12</TableCell>
                                    <TableCell>Mango</TableCell>
                                    <TableCell>big one</TableCell>
                                    <TableCell>2.5</TableCell>
                                    <TableCell>36</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>12</TableCell>
                                    <TableCell>Mango</TableCell>
                                    <TableCell>big one</TableCell>
                                    <TableCell>2.5</TableCell>
                                    <TableCell>36</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>12</TableCell>
                                    <TableCell>Mango</TableCell>
                                    <TableCell>big one</TableCell>
                                    <TableCell>2.5</TableCell>
                                    <TableCell>36</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>12</TableCell>
                                    <TableCell>Mango</TableCell>
                                    <TableCell>big one</TableCell>
                                    <TableCell>2.5</TableCell>
                                    <TableCell>36</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>12</TableCell>
                                    <TableCell>Mango</TableCell>
                                    <TableCell>big one</TableCell>
                                    <TableCell>2.5</TableCell>
                                    <TableCell>36</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>12</TableCell>
                                    <TableCell>Mango</TableCell>
                                    <TableCell>big one</TableCell>
                                    <TableCell>2.5</TableCell>
                                    <TableCell>36</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
</Card>


                    </div>
                    <DialogFooter>
                        <DialogClose>
                            <Button type="submit">Save</Button>
                        </DialogClose >
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}