import {Button} from "@/components/ui/button"
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
import {accounts} from "@/app/stores/[storeid]/chartofaccount/_components/coa_form";
import CoaAction, {GetAccountGroup} from "@/app/stores/[storeid]/chartofaccount/_components/coa_actions";
import {Suspense} from "react";

export const coaColumns = [
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
        accessorKey: "account_code",
        header: "Code",
    },
    {
        accessorKey: "account_name",
        header: "Account Name",
    },
    {
        accessorKey: "account_group",
        header: "Account Group",
        cell: ({ row }) => {
            return <Suspense fallback={<p>Loading....</p>}>
                <GetAccountGroup uuid={row.original.account_group} />
            </Suspense>;
        }
    },
    {
        accessorKey: "account_type",
        header: "Account Type",
        cell: ({ row }) => {
            const account_type = row.original.account_type;
            return accounts[account_type-1].name;
        }
    },
    {
        accessorKey: "opening_balance",
        header: "Opening Balance",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status;
            return status ===1 ?"active":"inactive";
        }
    },
    // {
    //     accessorKey: "party_name",
    //     header: "Account",
    // },
    // {
    //     accessorKey: "salesperson",
    //     header: "Sales Person",
    // },
    {
        id: "actions",
        cell: ({ row }) => {
            const element = row.original
            return (
            <CoaAction element={element} />
            )
        },
    },
]