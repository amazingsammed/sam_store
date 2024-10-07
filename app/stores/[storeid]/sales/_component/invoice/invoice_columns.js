import {DateFormat} from "@/app/shared/sharedfunctions";

export const InvoiceColumns = [


    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => {
            return DateFormat(row.original.date);
        }
    },
    {
        accessorKey: "invoice",
        header: "Invoice Number",
    },
    {
        accessorKey: "ref",
        header: "Reference",
    },
    {
        accessorKey: "customer",
        header: "Customer",
    },
    {
        accessorKey: "salesperson",
        header: "Sales Person",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    // {
    //     accessorKey: "party_name",
    //     header: "Account",
    // },
    // {
    //     accessorKey: "salesperson",
    //     header: "Invoice Person",
    // },
    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //         const payment = row.original
    //
    //         return (
    //             <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                     <Button variant="ghost" className="h-8 w-8 p-0">
    //                         <span className="sr-only">Open menu</span>
    //                         <MoreHorizontal className="h-4 w-4" />
    //                     </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent align="end">
    //                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //                     <DropdownMenuItem
    //                         onClick={() => navigator.clipboard.writeText(payment.uuid)}
    //                     >
    //                         Copy Item ID
    //                     </DropdownMenuItem>
    //                     <DropdownMenuSeparator />
    //                     <DropdownMenuItem>View Item Details</DropdownMenuItem>
    //                     <DropdownMenuItem>Edit Item</DropdownMenuItem>
    //                     <DropdownMenuItem>Delete Item</DropdownMenuItem>
    //                 </DropdownMenuContent>
    //             </DropdownMenu>
    //         )
    //     },
    // },
]