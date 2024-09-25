'use client'

export const trialbalanceColumns = [

    // {
    //     id: "shortname",
    //     accessorKey: "shortname",
    //     header: "Code",
    //     enableHiding: true,
    // },
    {
        id: "account_name",
        accessorKey: "account_name",
        header: "Name",
    },
    {
        id: "debit",
        accessorKey: "debit",
        header: "Debit",
        cell: ({ row }) => {
            if(row.original.debit==='0'){
                return " ";
            }else {
                return row.original.debit
            }
        }
    },

    {
        accessorKey: "credit",
        id: "credit",
        header: "Credit",
        cell: ({ row }) => {
            if(row.original.credit==='0'){
                return "";
            }else {
                return row.original.credit
            }
        }
    },

]


