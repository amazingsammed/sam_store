'use client'
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {AddChartofAccount} from "@/app/stores/[storeid]/settings/chartofaccount/_component/coa_form";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {coaColumns} from "@/app/stores/[storeid]/settings/chartofaccount/_component/coa_columns";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {getChartOfAccount} from "@/app/_actions/account";


export  function Cartofaccount({data}) {

    const tabledata = data;
  
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

 

  

  