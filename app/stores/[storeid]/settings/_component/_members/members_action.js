'use client';

import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import {deactivateMember} from "@/app/_actions/store_members";
import {useParams, useRouter} from "next/navigation";
import {getToken} from "next-auth/jwt";
import {useSession} from "next-auth/react";

function MembersAction({element}) {
    const {data} = useSession();
    const user = data.user;
    const param = useParams();
    const router = useRouter();

    async function handleDeactivate() {
        await deactivateMember(element, param.storeid);
        await router.refresh();
    }

    return (
        <>


            { user.uuid !== element.uuid &&<DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">

                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Change Role</DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={handleDeactivate}
                    >{element.status === 'active' ? 'Deactivate' : 'Activate'}</DropdownMenuItem>
                    <DropdownMenuItem>View Member Details</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>}
        </>

    );
}

export default MembersAction;