import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {MoreHorizontal} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {EditItemForm} from "@/app/stores/[storeid]/items/_components/edit_ItemForm";

export const itemsColumns = [
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
        accessorKey: "shortname",
        header: "Code",
        enableHiding: true,
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "group",
        header: "Group",
    },
    {
        accessorKey: "salesprice",
        header: "Selling Price",
    },

    {
        id: "actions",
        cell: ({ row }) => {
            const item = row.original

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
                        <EditItemForm prop ={item} />
                        <DropdownMenuItem>Delete Item</DropdownMenuItem>
                        <DropdownMenuItem>View Item Details</DropdownMenuItem>
                        {/*<DropdownMenuItem*/}
                        {/*    onClick={() => navigator.clipboard.writeText(payment.uuidt)}*/}
                        {/*>*/}
                        {/*    Copy Item ID*/}
                        {/*</DropdownMenuItem>*/}




                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]