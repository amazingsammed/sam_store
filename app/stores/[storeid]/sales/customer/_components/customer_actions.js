'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import {useParams, usePathname, useRouter} from "next/navigation";
import {useFormState} from "react-dom";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {cn} from "@/lib/utils";
import {deactivateCustomers, editCustomer} from "@/app/_actions/customer";

function CustomerActions({element}) {
    const param = useParams();
    const router = useRouter();
    const path = usePathname();
    async function handleDeleteCustomer() {
        await deactivateCustomers(element,param.storeid);
        router.refresh();
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <EditCustomerForm prop ={element} />
                <DropdownMenuItem onClick={handleDeleteCustomer}>
                    {element.status ===0?'Activate':'Deactivate'} </DropdownMenuItem>
                {/*<SheetSideBar element = {element}>*/}
                {/*    View Item Details*/}
                {/*</SheetSideBar>*/}
                <DropdownMenuItem>
                  <Link href={`${path}/${element.uuid}`}>
                      View Item Details
                  </Link>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default CustomerActions;


 function EditCustomerForm({prop}) {
    const [data,setData]=useState({
        'name':prop.name,
        'address':prop.address,
        'phone':prop.phone,
        'openingbalance':prop.openingbalance,
    });
    const path= useParams();
    const router = useRouter();
    async function handleEditStockitem(state,datax) {
        console.log(datax);
        await editCustomer(datax,path.storeid);
        router.refresh();
    }
    const [state, action] = useFormState(handleEditStockitem, undefined);
    function onChange(e){
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                )}>Edit Customer info</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Edit Customer</DialogTitle>
                        <DialogDescription>
                            Use the form below to edit Customer info
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Customer Name" value={data.name} onchange={onChange} name="name"/>
                        <CTextfieldR label="Customer address" value={data.address}  onchange={onChange} name="address"/>
                        <CTextfieldNumR label="Customer phone"  value={data.phone} onchange={onChange} name="phone"/>
                        <CTextfieldNum label="Opening Balance (if any)" value={data.openingbalance} onchange={onChange} name="openingbalance"/>
                    </div>
                    <DialogFooter>
                        <DialogClose>
                            <Button type="submit">Update</Button>
                        </DialogClose >
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}


function CTextfieldR(prop) {
    return (
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <input
                required
                type="text"
                name={prop.name}
                value={prop.value}
                onChange={prop.onchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prop.label} />
        </div>
    )
}

function CTextfieldNum(prop) {
    return (
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <input
                type="number"
                name={prop.name}
                value={prop.value}
                onChange={prop.onchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prop.label} />
        </div>
    )
}
function CTextfieldNumR(prop) {
    return (
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <input
                required
                type="number"
                name={prop.name}
                value={prop.value}
                onChange={prop.onchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prop.label} />
        </div>
    )
}