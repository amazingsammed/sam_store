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
import CategoryAction from "@/app/stores/[storeid]/items/category/_component/category_action";

export const CategoryColumns = [

    {
        accessorKey: "name",
        header: "Name",
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
               <CategoryAction element={data}/>
            )
        },
    },
]