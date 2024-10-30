import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import StatusBtn from "@/components/app/status_btn";
import React from "react";
import UnitAction from "@/app/stores/[storeid]/items/units/_component/unit_action";

export const UnitColumns = [
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

            return (
                <UnitAction element={row.original}/>
            )
        },
    },
]