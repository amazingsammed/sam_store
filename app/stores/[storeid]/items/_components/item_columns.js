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
import {DeleteItemForm, EditItemForm} from "@/app/stores/[storeid]/items/_components/edit_ItemForm";
import {deleteStockItem} from "@/app/_actions/stock_item";
import ItemActions from "@/app/stores/[storeid]/items/_components/item_actions";

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
               <ItemActions element={item}/>
            )
        },
    },
]