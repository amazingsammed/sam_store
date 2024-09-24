'use client'
import React, {useEffect, useState} from 'react';
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
import {deleteStockItem, editStockItem, getProductDetail} from "@/app/_actions/stock_item";
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
import {deactivateCOA, deactivateCOAG, editCOA, editCOAG, getChartOfAccountGroupbyuuid} from "@/app/_actions/account";
import {accounts} from "@/app/stores/[storeid]/chartofaccount/_components/coa_form";
import CTextfield from "@/components/ktextfield";






function CoaAction({element}) {
    const param = useParams();
    const router = useRouter();
    const path = usePathname();

    async function handleDeactivateCoag() {
        await deactivateCOA(element, param.storeid);
        router.refresh();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <EditItemForm prop={element}/>
                <DropdownMenuItem onClick={handleDeactivateCoag}>
                    {element.status === 0 ? 'Activate' : 'Deactivate'} </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Link href={`${path}/${element.uuidt}`}>
                        View Item Details
                    </Link>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default CoaAction;


function EditItemForm({prop}) {
    const [data, setData] = useState({
        'name': prop.name,
        'opening_balance': prop.opening_balance,
        'uuid': prop.uuid,
        'description':prop.description
    });
    const path = useParams();
    const router = useRouter();

    async function handleEditStockitem(state, datax) {
        await editCOA(datax, path.storeid);
        router.refresh();
    }

    const [state, action] = useFormState(handleEditStockitem, undefined);

    function onChange(e) {
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
                )}>Edit Item
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Update Chart of Accounts</DialogTitle>
                        <DialogDescription>
                            Update your Chart of Accounts here..
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <input type={"hidden"} name="uuid" value={data.uuid}/>
                        <CTextfieldR label="Group Name" value={data.name} onchange={onChange} name="name"/>
                        <CTextfield label=" Group Description" value={data.description} onchange={onChange} name="description"/>
                        <CTextfieldR label="Opening Balance" value={data.opening_balance} onchange={onChange} name="opening_balance"/>
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <input
                required
                type="text"
                name={prop.name}
                value={prop.value}
                onChange={prop.onchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={prop.label}/>
        </div>
    )
}

function CDropDown(prop) {
    return (
        <div className="max-w-sm ">
            <label form={prop.label + "checkbox"}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">{"Select " + prop.label}</label>
            <select id={prop.label + "checkbox"}
                onChange={prop.onchange}
                    name={prop.name}
                    value={prop.value}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">{"Choose a " + prop.label}</option>
                {prop.items.map((val, i) => {
                    return (
                        <option value={val.value ? val.value : val.id ? val.id : val.name} key={i}>{val.name}</option>
                    );
                })}

            </select>
        </div>
    )
}

function CTextfieldNum(prop) {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <input
                required
                type="number"
                name={prop.name}
                value={prop.value}
                onChange={prop.onchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={prop.label}/>
        </div>
    )
}