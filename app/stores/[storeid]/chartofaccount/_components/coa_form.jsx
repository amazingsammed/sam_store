"use client";

import {
    CTextfieldR,
    CDropDown,
    CDropDownWithOnChange,
    CTextfieldNum,
    UUIDDropDownWithOnChange
} from '@/components/ktextfield'
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
import {Input} from "@/components/ui/input";
import {useEffect, useState} from "react";
import {getItemsgroupList, getItemsUnitList} from "@/app/_actions/stock_item";
import {useParams, useRouter} from "next/navigation";
import {useFormState} from "react-dom";



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

export function AddChartofAccount() {
    const [group, setGroup] = useState([]);
    const [account, setAccount] = useState(9);
    const [accountcode, setAccountcode] = useState(0);

    useEffect(() => {
        const fetcher = async () => {
            const data = await getChartOfAccountGroupbyAccountid(account,params.storeid);
            setGroup(data)
        };
        fetcher();
    }, [account]);

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
    async function handleCreateGroup(s,a) {
        await createChartofAccounts(a,params.storeid);
        router.refresh();
    }

    const [state, action] = useFormState(handleCreateGroup, undefined);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Account</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Create New Account</DialogTitle>
                        <DialogDescription>
                            Create your Account for Chart of Accounts
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Account Name" value='' name="account_name"/>
                        <CDropDownWithOnChange
                            label="Account Type"
                            name='account_type'
                            onchange={changeAccounttype}
                            items={accounts}
                        />
                        <UUIDDropDownWithOnChange
                            label="Account Group"
                            name='account_group'
                            items={group}
                        />
                        <CTextfieldNum label="Account Code" value={accountcode} onchange={changeAccountCode} name="account_code"/>
                        <CTextfieldNum label="Opening Balance"  name="opening_balance"/>
                        

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

