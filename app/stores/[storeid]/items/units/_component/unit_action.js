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
import {deactivateStockItem, deleteStockItem, editStockItem} from "@/app/_actions/stock_item";
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
import {
    deactivateCategory,
    deactivateStockGroup, deactivateUnit,
    deleteCategory, deleteStockGroup, deleteUnit,
    getStockGroup,
    getStockUnits
} from "@/app/_actions/stock_item_options";
import {toast} from "sonner";
import {mapToJson} from "@/app/shared/sharedfunctions";
import {SetState} from "@/app/shared/localfunction";

function UnitAction({element}) {
    const param = useParams();
    const router = useRouter();
    const path = usePathname();
    async function handleDeactivate() {
        await deactivateUnit(element,param.storeid);
        await router.refresh();
    }
    async function handleDelete() {
        await deleteUnit(element,param.storeid);
        await router.refresh();
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
                <DropdownMenuItem onClick={handleDeactivate}>
                    {element.is_active ===0?'Activate':'Deactivate'} </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete}>Delete </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UnitAction