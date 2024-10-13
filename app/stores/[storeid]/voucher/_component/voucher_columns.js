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
import {DateFormat} from "@/app/shared/sharedfunctions";

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
        cell: ({ row }) => {
            return DateFormat(row.original.date);
        }
    },
    {
        accessorKey: "vouchertype",
        header: "Voucher Type",
        cell: ({ row }) => {
            return row.original.voucher_type_voucher_voucher_typeTovoucher_type['name'];
        }
    },
    {
        accessorKey: "narration",
        header: "Narration",
    },
    {
        accessorKey: "party_name",
        header: "Account Name",
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
            return row.original.trn_accounting[0].amount;
        }
    },
    {
        accessorKey: "salesperson",
        header: "Salesperson",
        cell: ({ row }) => {
            return row.original.user.name;
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status;
            return status ===1 ?"active":"inactive";
        }
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
