"use client";

import {CTextfieldR, CDropDown, CDropDownWithOnChange, CTextfieldNum} from '@/components/ktextfield'
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
import {Input} from "@/components/ui/input";
import {useEffect, useState} from "react";
import {getItemsgroupList, getItemsUnitList} from "@/app/_actions/stock_item";
import {useParams, useRouter} from "next/navigation";
import {useFormState} from "react-dom";

const accountgroups = [
    {
        "id": 1,
        "name": "Bank Accounts",
        "accountid": 1
    },
    {
        "id": 2,
        "name": "Bank OD A/c",
        "accountid": 1
    },
    {
        "id": 4,
        "name": "Capital Account",
        "accountid": 1
    },
    {
        "id": 5,
        "name": "Cash-in-Hand",
        "accountid": 1
    },
    {
        "id": 7,
        "name": "Other Current Assets",
        "accountid": 1
    },
    {
        "id": 8,
        "name": "Current Liabilities",
        "accountid": 2
    },
    {
        "id": 9,
        "name": "Deposits (Asset)",
        "accountid": 1
    },
    {
        "id": 10,
        "name": "Direct Expenses",
        "accountid": 5
    },
    {
        "id": 11,
        "name": "Direct Incomes",
        "accountid": 4
    },
    {
        "id": 12,
        "name": "Duties & Taxes",
        "accountid": 5
    },
    {
        "id": 13,
        "name": "Others Fixed Assets",
        "accountid": 1
    },
    {
        "id": 15,
        "name": "Indirect Expenses",
        "accountid": 5
    },
    {
        "id": 16,
        "name": "Indirect Incomes",
        "accountid": 4
    },
    {
        "id": 17,
        "name": "Investments",
        "accountid": 1
    },
    {
        "id": 18,
        "name": "Loans & Advances (Asset)",
        "accountid": 2
    },
    {
        "id": 19,
        "name": "Loans (Liability)",
        "accountid": 2
    },
    {
        "id": 20,
        "name": "Misc. Expenses (ASSET)",
        "accountid": 2
    },
    {
        "id": 24,
        "name": "Provisions",
        "accountid": 1
    },
    {
        "id": 25,
        "name": "Purchase Accounts",
        "accountid": 5
    },
    {
        "id": 26,
        "name": "Reserves & Surplus",
        "accountid": 3
    },
    {
        "id": 27,
        "name": "Salary Advance",
        "accountid": 1
    },
    {
        "id": 28,
        "name": "Sales Accounts",
        "accountid": 4
    },
    {
        "id": 29,
        "name": "Secured Loans",
        "accountid": 2
    },
    {
        "id": 30,
        "name": "Stock-in-Hand",
        "accountid": 1
    },
    {
        "id": 31,
        "name": "Sundry Creditors",
        "accountid": 2
    },
    {
        "id": 32,
        "name": "Sundry Debtors",
        "accountid": 1
    },
    {
        "id": 33,
        "name": "Suspense A/c",
        "accountid": 3
    },
    {
        "id": 34,
        "name": "Unsecured Loans",
        "accountid": 2
    },
    {
        "id": 35,
        "name": "Vat Levies Clearing",
        "accountid": 2
    }
]


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
            const data = accountgroups.filter((element) => (
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
    const path= useParams();
    const router = useRouter();
    async function handleCreateGroup(s,a) {
        await createChartofAccounts(a,path.storeid);
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
                        <CTextfieldR label="Group Name" value='' name="account_name"/>
                        <CDropDownWithOnChange
                            label="Account Type"
                            name='account_type'
                            onchange={changeAccounttype}
                            items={accounts}
                        />
                        <CDropDownWithOnChange
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