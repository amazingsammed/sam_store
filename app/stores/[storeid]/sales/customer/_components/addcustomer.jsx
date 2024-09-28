

"use client";

import {CTextfieldR, CDropDownWithOnChange, CTextfieldNum} from '@/components/ktextfield'
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
    const path= useParams();
    const router = useRouter();

    async function handleCreateCustomer(formData) {
        await addCustomer(formData,path.storeid);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Customer</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={handleCreateCustomer}>
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
                        <CTextfieldR label="Customer address" value='' name="location"/>
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