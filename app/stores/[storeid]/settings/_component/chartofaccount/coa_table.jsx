'use client'
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {AddChartofAccount} from "@/app/stores/[storeid]/settings/_component/chartofaccount/coa_form";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {coaColumns} from "@/app/stores/[storeid]/settings/_component/chartofaccount/coa_columns";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {getChartOfAccount} from "@/app/_actions/account";


export  function Cartofaccount(prop) {

    const [tabledata,setTableData] = useState([]);
    const param = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getChartOfAccount(param.storeid);
            if (data.length === 0) return;
            setTableData(data)
        }
        fetchData();
    }, []);
  
    return (
      <div className="">
      <HeaderListTileDialog title='Chart of Accounts' subtitle='All Account in current store' buttonx={
        <AddChartofAccount/>
      } ontap = "items/addItem">
        <DataTable columns={coaColumns} data={tabledata} filter={'account_name'}/>
      </HeaderListTileDialog>
        </div>

    );
  }

 

  

  