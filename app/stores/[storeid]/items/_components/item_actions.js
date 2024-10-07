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
import {cn} from "@/lib/utils";
import {getStockGroup, getStockUnits} from "@/app/_actions/stock_item_options";
import {toast} from "sonner";
import {mapToJson} from "@/app/shared/sharedfunctions";

function ItemActions({element}) {
    const param = useParams();
    const router = useRouter();
    const path = usePathname();
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

export default ItemActions;



 function EditItemForm(prop) {
     const [groups, setGroups] = useState([{'name': "others",'id':1}]);
     const [units, setUnits] = useState([{'name': "others",'id':1}]);
    const [data,setData]=useState({
        'shortname':prop.prop.shortname,
        'name':prop.prop.name,
        'description':prop.prop.description,
        'salesprice':prop.prop.salesprice,
        'purchaseprice':prop.prop.purchaseprice,
        'uuid':prop.prop.uuid,
        'unit':Number(prop.prop.unit),
        'group':Number(prop.prop.group),
    });
    const path= useParams();
    const router = useRouter();

     useEffect(() => {
             const fetcher = async () => {
                 try {
                     const newGroups = await getStockGroup(path.storeid);
                     const newUnits = await getStockUnits(path.storeid);
                     console.log(mapToJson(newUnits));
                     // Combine previous state with new fetched data
                     await setGroups(prevGroups => [
                         ...new Set([...prevGroups, ...newGroups.map(group => mapToJson(group))])
                     ]);

                     await setUnits(prevUnits => [
                         ...new Set([...prevUnits, ...newUnits.map(unit => mapToJson(unit))])
                     ]);
                 } catch (error) {
                     toast.error('Failed to fetch some data : ItemForm');
                 }
             };
             fetcher();

         },
         []);
    async function handleEditStockitem(state,datax) {
        console.log(data);
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
                <button  className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                )}>Edit Item</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Edit Item</DialogTitle>
                        <DialogDescription>
                            Use the form below to edit an item
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <input type={"hidden"} name="uuid" value={data.uuid}/>
                        <CTextfield label="Item code" value={data.shortname} onchange={onChange} name="shortname"/>
                        <CTextfieldR label="Item name" value={data.name} onchange={onChange} name="name"/>
                        <CTextfield label="Item description" value={data.description} onchange={onChange}
                                    name="description"/>
                        <CDropDown
                            label="Group"
                            name='group'
                            items={groups}
                            onchange={onChange}
                            value={data.group}
                        />
                        <CDropDown
                            label="Units"
                            name='unit'
                            onchange={onChange}
                            items={units}
                            value={data.unit}
                        />
                        <CTextfieldNum label="Invoice Price" value={data.salesprice} onchange={onChange}
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
function CTextfield(prop) {
    return (
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <input
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

export function CDropDown  (prop)  {
    return (
        <div className="max-w-sm ">
            <label form={prop.label + "checkbox"} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">{"Select "+ prop.label}</label>
            <select id={prop.label + "checkbox"}
                onChange={prop.onchange}
                    name={prop.name}
                    value={prop.value}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">{"Choose a "+prop.label}</option>
                {prop.items.map((val,i)=>{
                    return(
                        <option value={val.value?val.value:val.id?val.id:val.name} key={i}>{val.name}</option>
                    );
                })}

            </select>
        </div>
    )
}