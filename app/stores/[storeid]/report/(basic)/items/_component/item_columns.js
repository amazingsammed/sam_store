

export const itemReport = [
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
    {
        accessorKey: "purchaseprice",
        header: "Purchase Price",
    },
    {

        header: "Quantity Left",
        cell: ({ row }) => {
            let qty = 0;
            row.original.trn_inventory.forEach(item => {
                if(item.status ===0) return;
                qty = item.quantity + qty;
            });
            if(qty > row.original.warninglimit){
                return qty;
            }
            return <div className="text-red-500">{qty}</div>;
        }
    },
    {

        header: "Total Sales",
        cell: ({ row }) => {
            let sales = 0;
            console.log(row.original.trn_inventory)
            row.original.trn_inventory.forEach(item => {
                if(item.quantity >0) return;
                sales = item.amount + sales;
            });

            return <div className={`w-[64px] text-right`}>{sales.toFixed(2)}</div>;
        }
    },
    {

        header: "Total Purchases",
        cell: ({ row }) => {
            let purchases = 0;
            console.log(row.original.trn_inventory)
            row.original.trn_inventory.forEach(item => {
                if(item.quantity >0) return;
                purchases = (item.quantity*row.original.purchaseprice*-1) + purchases;
            });

            return <div className={`w-[64px] text-right`}>{purchases.toFixed(2)}</div>;
        }
    },


]


