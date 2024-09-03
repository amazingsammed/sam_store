"use client";

import {CTextfieldR, CDropDown, CDropDownWithOnChange, CTextfieldNum} from '@/components/ktextfield'
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
import {Input} from "@/components/ui/input";
import {useEffect, useState} from "react";
import {getItemsgroupList, getItemsUnitList} from "@/app/store/_actions/product";

const accountgroups = [
    {
        "id": 1,
        "name": "Non-Current assets",
        "accountid": 1
    },
    {
        "id": 2,
        "name": "Current Assets",
        "accountid": 1
    },
    {
        "id": 3,
        "name": "Non-Current Liability",
        "accountid": 2
    },
    {
        "id": 4,
        "name": "Current Liability",
        "accountid": 2
    },
    {
        "id": 5,
        "name": "Capital Accounts",
        "accountid": 3
    },
    {
        "id": 6,
        "name": "Operating Income (Sales)",
        "accountid": 4
    },
    {
        "id": 7,
        "name": "Non-Operating income",
        "accountid": 4
    },
    {
        "id": 8,
        "name": "Cost of Sales",
        "accountid": 5
    },
    {
        "id": 9,
        "name": "Operating Expenses",
        "accountid": 5
    },
    {
        "id": 10,
        "name": "Non-Operating Expenses",
        "accountid": 5
    }

];

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

export function AddChartofAccount() {
    const [group, setGroup] = useState([]);
    const [account, setAccount] = useState(9);
    const [accountcode, setAccountcode] = useState(0);

    useEffect(() => {
        const fetcher = async () => {
            var data = accountgroups.filter((element) => (
                element.accountid - account === 0
            ));
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

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Group</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={createGroup}>
                    <DialogHeader>
                        <DialogTitle>Create New Account</DialogTitle>
                        <DialogDescription>
                            Create your Account for Chart of Accounts
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Group Name" value='' name="gname"/>
                        <CDropDownWithOnChange
                            label="Account Type"
                            name='accounttype'
                            onchange={changeAccounttype}
                            items={accounts}
                        />
                        <CDropDownWithOnChange
                            label="Account Group"
                            name='group'
                            items={group}
                        />
                        <CTextfieldNum label="Account Code" value={accountcode} onchange={changeAccountCode} name="accountcode"/>
                        <CTextfieldNum label="Opening Balance"  name="openingbalance"/>

                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}