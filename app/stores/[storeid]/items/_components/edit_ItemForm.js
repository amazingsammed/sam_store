import React, {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {createChartofAccounts} from "@/app/_actions/account";
import {useFormState} from "react-dom";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

import {DropdownMenuItem} from "@/components/ui/dropdown-menu";
import {editStockItem} from "@/app/_actions/stock_item";




export function EditItemForm(prop) {
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
                <Button className='bg-transparent hover:bg-transparent text-black px-2'>Edit Item</Button>
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
                        <CTextfieldR label="Item description" value={data.description} onchange={onChange}
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