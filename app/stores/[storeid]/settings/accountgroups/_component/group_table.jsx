'use client'
import {HeaderListTileDialog} from "@/components/app/headerlisttile";
import {AddAccountGroupDialog} from "@/app/stores/[storeid]/settings/accountgroups/_component/group_form";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {coagColumns} from "@/app/stores/[storeid]/settings/accountgroups/_component/coag_columns";

export  function GroupTablePage({data}) {

    const tabledata =data;
  
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

 

  

  