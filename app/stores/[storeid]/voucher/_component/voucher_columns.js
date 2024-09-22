import { Button } from "@/components/ui/button"

import {Checkbox} from "@/components/ui/checkbox";

import {useParams, useRouter} from "next/navigation";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import React from "react";
import {deactivateVoucher} from "@/app/_actions/voucher";
import VoucherAction from "@/app/stores/[storeid]/voucher/_component/voucher_action";

export const voucherColumns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "date",
        header: "Date",
        enableHiding: true,
    },
    {
        accessorKey: "vouchertype",
        header: "Voucher Type",
    },
    {
        accessorKey: "narration",
        header: "Narration",
    },
        {
            accessorKey: "account",
            header: "Account Name",
        },
    {
        accessorKey: "amount",
        header: "Amount",
    },
        {
            accessorKey: "salesperson",
            header: "Salesperson",
        },

    {
        id: "actions",
        cell: ({ row }) => {
            const item = row.original

            return (
               <VoucherAction element={item}/>
            )
        },
    },
]


export function DeleteVoucherForm(prop) {
    const path= useParams();
    const router = useRouter();
    async function handleDeleteVoucherItem() {
        await deactivateVoucher(prop.prop,path.storeid);
        router.refresh();
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='bg-transparent hover:bg-transparent text-black px-2 block'>Delete Voucher</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form>
                    <DialogHeader>
                        <DialogTitle>Delete Voucher</DialogTitle>
                        <DialogDescription>
                            Do you want to delete this Voucher
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose>
                            <Button onClick={handleDeleteVoucherItem}>Delete</Button>
                        </DialogClose >
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
