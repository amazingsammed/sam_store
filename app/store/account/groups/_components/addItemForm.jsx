"use client";

import {CTextfieldR, CDropDown} from '@/components/ktextfield'
import {createGroup} from "@/app/store/_actions/account";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

const accountprimarygroups = [
    {
        "name": "Bank Accounts"
    },
    {
        "name": "Bank OD A/c"
    },
    {
        "name": "Branch / Divisions"
    },
    {
        "name": "Capital Account"
    },
    {
        "name": "Cash-in-Hand"
    },
    {
        "name": "Fixed Assets"
    },
    {
        "name": "Current Assets"
    },
    {
        "name": "Current Liabilities"
    },
    {
        "name": "Deposits (Asset)"
    },
    {
        "name": "Direct Expenses"
    },
    {
        "name": "Direct Incomes"
    },
    {
        "name": "Duties & Taxes"
    },
    {
        "name": "Indirect Expenses"
    },
    {
        "name": "Indirect Incomes"
    },
    {
        "name": "Investments"
    },
    {
        "name": "Loans & Advances (Asset)"
    },
    {
        "name": "Loans (Liability)"
    },
    {
        "name": "Misc. Expenses (ASSET)"
    },
    {
        "name": "Provisions"
    },
    {
        "name": "Purchase Accounts"
    },
    {
        "name": "Reserves & Surplus"
    },
    {
        "name": "Sales Accounts"
    },
    {
        "name": "Secured Loans"
    },
    {
        "name": "Stock-in-Hand"
    },
    {
        "name": "Sundry Creditors"
    },
    {
        "name": "Sundry Debtors"
    },
    {
        "name": "Suspense A/c"
    },
    {
        "name": "Unsecured Loans"
    },
    {
        "name": "Vat Levies Clearing"
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
                            label="Parent"
                            name='group'
                            items={accountprimarygroups}
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