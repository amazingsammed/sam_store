import MembersAction from "@/app/stores/[storeid]/settings/_component/members/members_action";

export const membersColumns = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            return row.original.user.name;
        }
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => {
            return row.original.user.email;
        }
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => {
            return row.original.system_roles.role;
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
                <MembersAction element ={item}/>
            )
        },
    },
]