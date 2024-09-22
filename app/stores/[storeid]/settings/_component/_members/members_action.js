'use client';

import React, {useState} from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import {changeroleMember, deactivateMember} from "@/app/_actions/store_members";
import {useParams, useRouter} from "next/navigation";
import {getToken} from "next-auth/jwt";
import {useSession} from "next-auth/react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import CTextfield, {CDropDown} from "@/components/ktextfield";
import {cn} from "@/lib/utils";
import {editStockItem} from "@/app/_actions/stock_item";
import {useFormState} from "react-dom";
import {formdataToJson} from "@/app/shared/sharedfunctions";

function MembersAction({element}) {
    const {data} = useSession();
    const param = useParams();
    const router = useRouter();

     async function handleDeactivate() {
         await deactivateMember(element, param.storeid);
         router.refresh();
     }

    return (
        <>


            {data.user.uuid !== element.uuid && <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">

                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <ChangeRole element={element} />
                    <DropdownMenuItem
                        onClick={handleDeactivate}
                    >{element.status === 'active' ? 'Deactivate' : 'Activate'}</DropdownMenuItem>
                    <DropdownMenuItem>View Member Details</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            }


        </>

    );
}

export function ChangeRole({element}){
    const param = useParams();
    const router = useRouter();
    async function handleChangeRole(state,datax) {
        const x = formdataToJson(datax);
        const elements = {...element,x}
        await changeroleMember(elements,param.storeid);

        router.refresh();
    }
    const [state, action] = useFormState(handleChangeRole, undefined);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                )}>Change Role</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Edit Member Role</DialogTitle>
                        {/*<DialogDescription>*/}
                        {/*    Use the form below to change member role*/}
                        {/*</DialogDescription>*/}
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
<CDropDown items={[{'name': 'admin'},{'name': 'manager'},{'name': 'salesperson'}]} name='role' label="User Role" />
                    </div>
                    <DialogFooter>
                        <DialogClose>
                            <Button type="submit">Update</Button>
                        </DialogClose >
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default MembersAction;