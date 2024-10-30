import {Checkbox} from "@/components/ui/checkbox";
import ItemActions from "@/app/stores/[storeid]/items/_components/item_actions";

import React from "react";
import StatusBtn from "@/components/app/status_btn";

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
        accessorKey: "stock_item_group",
        header: "Group",
        cell: ({ row }) => {
            return row.original.stock_item_group['name'];
        }
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
            return <StatusBtn num={row.original.is_active} />
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


