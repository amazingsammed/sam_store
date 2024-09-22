import React, {useState} from 'react';
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import {useParams, useRouter} from "next/navigation";
import {deleteStockItem, editStockItem} from "@/app/_actions/stock_item";
import {useFormState} from "react-dom";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import CTextfield from "@/components/ktextfield";
import {cn} from "@/lib/utils";

function ItemActions({element}) {
    const param = useParams();
    const router = useRouter();
    async function handleDeleteStockItem() {
        await deleteStockItem(element,param.storeid);
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
                <EditItemForm prop ={element} />
                <DropdownMenuItem onClick={handleDeleteStockItem}>
                    {element.status ===0?'Activate':'Deactivate'} </DropdownMenuItem>
                <DropdownMenuItem>View Item Details</DropdownMenuItem>
                {/*<DropdownMenuItem*/}
                {/*    onClick={() => navigator.clipboard.writeText(payment.uuidt)}*/}
                {/*>*/}
                {/*    Copy Item ID*/}
                {/*</DropdownMenuItem>*/}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ItemActions;


 function EditItemForm(prop) {
    const [data,setData]=useState({
        'shortname':prop.prop.shortname,
        'name':prop.prop.name,
        'description':prop.prop.description,
        'salesprice':prop.prop.salesprice,
        'purchaseprice':prop.prop.purchaseprice,
        'uuidt':prop.prop.uuidt,

    });
    const path= useParams();
    const router = useRouter();
    async function handleEditStockitem(state,datax) {
        await editStockItem(datax,path.storeid);
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
                )}>Edit Item</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Edit Item</DialogTitle>
                        <DialogDescription>
                            Use the form below to edit and item
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <input type={"hidden"} name="uuidt" value={data.uuidt}/>
                        <CTextfieldR label="Item code" value={data.shortname} onchange={onChange} name="shortname"/>
                        <CTextfieldR label="Item name" value={data.name} onchange={onChange} name="name"/>
                        <CTextfield label="Item description" value={data.description} onchange={onChange}
                                    name="description"/>
                        <CTextfieldNum label="Sales Price" value={data.salesprice} onchange={onChange}
                                       name="salesprice"/>
                        <CTextfieldNum label="Purchase Price" value={data.purchaseprice} onchange={onChange}
                                       name="purchaseprice"/>
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
                required
                type="number"
                name={prop.name}
                value={prop.value}
                onChange={prop.onchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prop.label} />
        </div>
    )
}