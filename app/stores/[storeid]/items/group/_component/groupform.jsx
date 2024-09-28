"use client";

import {CTextfieldR, CDropDown} from '@/components/ktextfield'
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {createStockGroup, getStockCategory} from "@/app/_actions/stock_item_options";
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";


const accounts = [
    {
        "id": 1,
        "name": "Assets"
    },
    {
        "id": 2,
        "name": "Liability"
    },
    {
        "id": 3,
        "name": "Equity"
    },
    {
        "id": 4,
        "name": "Income"
    },
    {
        "id": 5,
        "name": "Expense"
    }

];

export function AddGroupDialog() {
    const [accounts, setaccounts] = useState([]);
    const path = useParams();
    const title = "Group";
    const router = useRouter();

    useEffect(() => {
            const fetcher = async () => {
                const abc = await getStockCategory(path.storeid);
                setaccounts(abc);
            };
            fetcher();
        },
        []);

    async function handleCreateGroup(a) {
        await createStockGroup(a, path.storeid);
        router.refresh();
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add {title}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={handleCreateGroup}>
                    <DialogHeader>
                        <DialogTitle>Create {title}</DialogTitle>
                        <DialogDescription>
                            Create your <span>
                            {title}</span> here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Group Name" value='' name="name"/>
                        <CDropDown
                            label="Category"
                            name='category'
                            items={accounts}
                        />
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