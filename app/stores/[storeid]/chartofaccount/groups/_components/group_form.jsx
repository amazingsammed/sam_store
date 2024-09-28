"use client";

import {CTextfieldR, CDropDown} from '@/components/ktextfield'
import {createChartofAccountsGroup} from "@/app/_actions/account";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useFormState} from "react-dom";
import {useParams, useRouter} from "next/navigation";


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
export function AddAccountGroupDialog() {
    const params= useParams();
    const router = useRouter();
    async function handleCreateGroup(state,data) {
        await createChartofAccountsGroup(data,params.storeid);
        router.refresh();
    }

    const [state, action] = useFormState(handleCreateGroup, undefined);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Create Group</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Create Group</DialogTitle>
                        <DialogDescription>
                            Create  your group here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Group Name"   name="name"/>
                        <CDropDown
                            label="Account Type"
                            name='accountid'
                            items={accounts}
                        />
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