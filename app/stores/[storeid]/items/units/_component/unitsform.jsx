"use client";

import {CTextfieldR, CDropDown} from '@/components/ktextfield'
import {createChartofAccounts} from "@/app/_actions/account";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {createStockGroup, createStockUnits} from "@/app/_actions/stock_item_options";
import {useParams, useRouter} from "next/navigation";
import {router} from "next/client";


export function AddUnitsDialog() {
    const path = useParams();
    const title= "Units";
    const router = useRouter();
    async function handleCreateUnits(e) {
        await createStockUnits(e, path.storeid)
        router.refresh();
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Add {title}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={handleCreateUnits}>
                    <DialogHeader>
                        <DialogTitle>Create {title}</DialogTitle>
                        <DialogDescription>
                            Create  your <span>
                            {title}</span> here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Units Name" value=''  name="name"/>
                    </div>
                    <DialogFooter>
                        <DialogClose>

                        <Button type="submit">Save</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}