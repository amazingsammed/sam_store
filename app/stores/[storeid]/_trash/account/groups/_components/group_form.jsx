"use client";

import {CTextfieldR, CDropDown} from '@/components/ktextfield'
import {createGroup} from "@/app/stores/_actions/account";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";


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

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Create Group</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={createGroup}>
                    <DialogHeader>
                        <DialogTitle>Create Group</DialogTitle>
                        <DialogDescription>
                            Create  your group here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Group Name" value=''  name="lname"/>
                        <CDropDown
                            label="Account Type"
                            name='group'
                            items={accounts}
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}