'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {createGroup} from "@/app/store/_actions/account";
import {CDropDownWithOnChange, CTextfieldNum, CTextfieldR} from "@/components/ktextfield";

function Storeheader() {


    return (

        <nav className="bg-blue border-gray-200 border-b">
            <div className=" flex flex-wrap items-center justify-between mx-auto p-4 container">
                <div className="items-center justify-between " >
                   <h1 className="text-3xl font-bold">Store List</h1>
                </div>
                <div className="flex  space-x-3 md:space-x-0 rtl:space-x-reverse">


                       <Addform/>

                </div>
            </div>
        </nav>
    );
}

export function Addform() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Store</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={createGroup}>
                    <DialogHeader>
                        <DialogTitle>Add Store Form</DialogTitle>
                        <DialogDescription>
                            Create new store here
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Store Name"  name="storename"/>
                        <CTextfieldR label="Store Location"  name="storelocation"/>
                        <CTextfieldR label="Store Address"  name="storeaddress"/>
                        <CTextfieldNum label="Store Phone"  name="storephone"/>

                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default Storeheader;