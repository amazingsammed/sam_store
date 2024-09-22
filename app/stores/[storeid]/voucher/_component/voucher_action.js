import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import {useParams, usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {deactivateVoucher} from "@/app/_actions/voucher";

function VoucherAction({element}) {
    const router = useRouter();
    const params = useParams();
    const path = usePathname();
    async function handleDeleteVoucher() {
        await deactivateVoucher(element);
        router.refresh();
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem >
                <Link href={{
                    pathname: path+'/edit',
                    query: { uuid: element.uuid },// the data
                }}>

               Edit Voucher
                </Link></DropdownMenuItem>
                <DropdownMenuItem onClick={handleDeleteVoucher}>Delete Voucher</DropdownMenuItem>
                <DropdownMenuItem>View Voucher Details</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default VoucherAction;