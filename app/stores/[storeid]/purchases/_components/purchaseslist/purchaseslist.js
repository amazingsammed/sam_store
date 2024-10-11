import React, {useEffect, useState} from 'react';
import Headerlisttile from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {purchasesColumns} from "@/app/stores/[storeid]/purchases/_components/purchaseslist/purchases_columns";
import {useParams, usePathname} from "next/navigation";
import {getPurchasesList} from "@/app/_actions/purchases";

function Purchaseslist(props) {
    const [tabledata,setTableData] = useState([]);
    const param = useParams();
    const path = usePathname();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPurchasesList(param.storeid);
            if (data.length === 0) return;
            setTableData(data)
        }
        fetchData();
    }, []);
    return (
        <div>
            <Headerlisttile title='Purchases List' subtitle='All Purchases Vouchers are listed here' bname="Create"
                            ontap="purchases/cashpurchases">
                <DataTable columns={purchasesColumns} data={tabledata} filter={'itemname'}/>
            </Headerlisttile>
        </div>
    );
}

export default Purchaseslist;