"use client";

import {CTextfieldR, CTextfieldNum} from '@/components/ktextfield'
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
import {useParams, useRouter} from "next/navigation";
import {useFormState} from "react-dom";
import React, {useEffect, useState} from "react";
import {getStoreRoles} from "@/app/_actions/stores";




export function AddMemberForm() {
    const [roles, setRoles] = useState([]);
    useEffect(() => {
        const fetcher = async () => {
            const data = await getStoreRoles(path.storeid);
            setRoles(data)
        };
        fetcher();
    }, []);
    const path= useParams();
    const router = useRouter();
    async function handleAddMember(s,a) {
        await createChartofAccounts(a,path.storeid);
        router.refresh();
    }

    const [state, action] = useFormState(handleAddMember, undefined);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add new Member</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Add new Member</DialogTitle>
                        <DialogDescription>
                            Add a new member to current store
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Email" value='' name="account_name"/>
                        <CDropDownWithOnChange
                            label="Role"
                            name='role'
                            items={roles}
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

 function CDropDownWithOnChange  (prop)  {
    return (
        <div className="max-w-sm ">
            <label form={prop.label + "checkbox"} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">{"Select "+ prop.label}</label>
            <select id={prop.label + "checkbox"} required
                    onChange={prop.onchange}
                    name={prop.name}
                    value={prop.value}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">{"Choose a "+prop.label}</option>
                {prop.items.map((val,i)=>{
                    return(
                        <option value={val.uuid?val.uuid:val.role} key={i}>{val.role}</option>
                    );
                })}

            </select>
        </div>
    )
}