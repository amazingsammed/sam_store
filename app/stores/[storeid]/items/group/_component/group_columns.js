import {DateFormat} from "@/app/shared/sharedfunctions";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {MoreHorizontal} from "lucide-react";
import StatusBtn from "@/components/app/status_btn";
import React from "react";
import StockGroupAction from "@/app/stores/[storeid]/items/group/_component/group_action";
export const groupColumns = [


    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => {
            return DateFormat(row.original.date);
        }
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "stock_item_category",
        header: "Group",
        cell: ({ row }) => {
            return row.original.stock_item_category['name'];
        }
    },

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
            const data = row.original

            return (
              <StockGroupAction element={data}/>
            )
        },
    },
]