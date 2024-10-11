import React, {useEffect, useState} from 'react';
import Headerlisttile from "@/components/app/headerlisttile";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {getAllSales} from "@/app/_actions/sales";
import {useParams, usePathname} from "next/navigation";
import {allSalesColumns} from "@/app/stores/[storeid]/sales/_component/all_sales/allSales_column";

function AllSales(props) {
    const [tabledata,setTableData] = useState([]);
    const param = useParams();
    const path = usePathname();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllSales(param.storeid);
            if (data.length === 0) return;
            setTableData(data)
        }
        fetchData();
    }, []);
    return (
        <Headerlisttile title='Sales List' subtitle='All Sales are listed here' bname="Create"
                        ontap="sales/cashsales">
            <DataTable columns={allSalesColumns} data={tabledata} filter={'itemname'}/>
        </Headerlisttile>
    );
}

export default AllSales;