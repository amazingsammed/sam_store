'use client'
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {AddAccountGroupDialog} from "@/app/stores/[storeid]/settings/_component/accountgroups/group_form";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {coagColumns} from "@/app/stores/[storeid]/settings/_component/accountgroups/coag_columns";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {getChartOfAccountGroup} from "@/app/_actions/account";


export  function GroupTablePage(prop) {

    const [tabledata,setTableData] = useState([]);
    const param = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getChartOfAccountGroup(param.storeid);
            if (data.length === 0) return;
            setTableData(data)
        }
        fetchData();
    }, []);
  
    return (
      <div className="">
      <HeaderListTileDialog title='Group List' subtitle='All Account Group are listed here' buttonx={
        <AddAccountGroupDialog/>
      } ontap = "items/addItem">
        <DataTable columns={coagColumns} data={tabledata} filter={'name'}/>
      </HeaderListTileDialog>
        </div>

    );
  }

 

  

  