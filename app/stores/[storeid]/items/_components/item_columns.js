import {Checkbox} from "@/components/ui/checkbox";
import ItemActions from "@/app/stores/[storeid]/items/_components/item_actions";

import React from "react";

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
    // {
    //     accessorKey: "shortname",
    //     header: "Code",
    //     enableHiding: true,
    // },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "groups",
        header: "Group",
    },

    {
        accessorKey: "salesprice",
        header: "Selling Price",
    },
    // {
    //     accessorKey: "quantity",
    //     header: "Quantity Left",
    // },
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
               <ItemActions element={item}/>
            )
        },
    },
]


