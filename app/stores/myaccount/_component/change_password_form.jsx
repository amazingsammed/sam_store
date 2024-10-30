"use client";

import {
    CTextfieldR,
    CDropDownWithOnChange,
    CTextfieldNum,
    UUIDDropDownWithOnChange
} from '@/components/app/ktextfield'
import {createChartofAccounts, getChartOfAccountGroupbyAccountid} from "@/app/_actions/account";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {useFormState} from "react-dom";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";



export  const accounts = [
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

export function ChangePassword() {


    function changeAccounttype(e) {
        setAccount(e.target.value);
        setAccountcode(e.target.value);
        console.log(e.target.value);
    }
    function changeAccountCode(e){
        setAccountcode(e.target.value);
    }
    const params= useParams();
    const router = useRouter();
    async function handleChangePassword(s,a) {
        console.log(a.get('retype'))
        router.refresh();
    }

    const [state, action] = useFormState(handleChangePassword, undefined);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Change Password</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Change Account Password</DialogTitle>
                        <DialogDescription>
                            Use this form to change password
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div>

                            <Label id={`old_password`}>Old Password</Label>
                            <Input type='password' name={`old_password`} id={`old_password`} required/>
                        </div>
                        <div>
                            <Label id={`new_password`}>New Password</Label>
                            <Input type='password' name={`new_password`} id={`new_password`} required/>
                        </div>

                        <div>
                            <Label id={`retype`}>Re-type new Password</Label>
                            <Input type='password' name={`retype`} id={`retype`} required/>
                        </div>

                    </div>
                    <DialogFooter>
                            <Button type="submit">Save</Button>

                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

