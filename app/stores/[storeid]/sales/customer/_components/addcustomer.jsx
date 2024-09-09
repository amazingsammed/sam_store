

"use client";

import {CTextfieldR, CDropDown, CDropDownWithOnChange, CTextfieldNum} from '@/components/ktextfield'
import {createGroup} from "@/app/stores/_actions/account";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useEffect, useState} from "react";
import {getItemsgroupList, getItemsUnitList} from "@/app/stores/_actions/stock_item";
import {useParams, useRouter} from "next/navigation";


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

export function CustomerForm() {
    const [type, setType] = useState(1);

    async function handleCreateGroup(a) {
        // await createGroup(a,path.storeid);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Customer</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={handleCreateGroup}>
                    <DialogHeader>
                        <DialogTitle>Create New Customer</DialogTitle>
                        <DialogDescription>
                           Fill the form below
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Customer Name" value='' name="name"/>
                        <CDropDownWithOnChange
                            label="Customer Type"
                            name='type'
                            items={typex}
                        />
                        <CTextfieldNum label="Customer phone"   name="phone"/>
                        <CTextfieldNum label="Opening Balance (if any)"  name="openingbalance"/>

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