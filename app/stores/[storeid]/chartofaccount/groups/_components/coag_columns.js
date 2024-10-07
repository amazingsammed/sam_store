import {Checkbox} from "@/components/ui/checkbox";
import CoagAction from "@/app/stores/[storeid]/chartofaccount/groups/_components/coag_actions";
import {accounts} from "@/app/stores/[storeid]/chartofaccount/_components/coa_form";

export const coagColumns = [
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
        accessorKey: "name",
        header: "Group Name",
    },
    {
        accessorKey: "accountid",
        header: "Account Type",
        cell: ({ row }) => {
            const accountid = row.original.accountid;
            return accounts[accountid-1].name;
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
        accessorKey: "system",
        header: "System Account",
        cell: ({ row }) => {
            const system = row.original.system;
            return system ===1 ?"yes":"no";
        }
    },

    // {
    //     accessorKey: "party_name",
    //     header: "Account",
    // },
    // {
    //     accessorKey: "salesperson",
    //     header: "Invoice Person",
    // },
    {
        id: "actions",
        cell: ({ row }) => {
            const item = row.original

            return (
                <>
                { item.system===0&&
           <CoagAction element={item}/>
        }
                </>
            )
        },
    },
]