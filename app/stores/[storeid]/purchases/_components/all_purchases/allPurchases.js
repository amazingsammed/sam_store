import React, {useEffect, useState} from 'react';
import Headerlisttile from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {useParams, usePathname} from "next/navigation";
import {allPurchasesColumns} from "@/app/stores/[storeid]/purchases/_components/all_purchases/allPurchases_column";
import {getAllPurchases} from "@/app/_actions/purchases";

function AllPurchases(props) {
    const [tabledata,setTableData] = useState([]);
    const param = useParams();
    const path = usePathname();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllPurchases(param.storeid);
            if (data.length === 0) return;
            setTableData(data)
        }
        fetchData();
    }, []);
    return (
        <Headerlisttile title='Purchases List' subtitle='All Purchases are listed here' bname="Create"
                        ontap="purchases/cashpurchases">
            <DataTable columns={allPurchasesColumns} data={tabledata} filter={'itemname'}/>
        </Headerlisttile>
    );
}

export default AllPurchases;