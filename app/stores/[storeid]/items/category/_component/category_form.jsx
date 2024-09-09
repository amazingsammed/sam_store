"use client";

import {CTextfieldR, CDropDown} from '@/components/ktextfield'
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
import {createStockCategory, createStockGroup} from "@/app/stores/_actions/stock_item_options";
import {useParams, useRouter} from "next/navigation";


export function AddCategoryDialog() {
    const path = useParams();
    const title= "Category";
    const router = useRouter();
    async function handleCreateCategory(a) {
        await createStockCategory(a,path.storeid);
        router.refresh();
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Add {title}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={handleCreateCategory}>
                    <DialogHeader>
                        <DialogTitle>Create {title}</DialogTitle>
                        <DialogDescription>
                            Create  your <span>
                            {title}</span> here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Category Name" value=''  name="name"/>
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