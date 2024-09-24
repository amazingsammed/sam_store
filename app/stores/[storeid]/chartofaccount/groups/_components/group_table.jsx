'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Headerlisttile, {HeaderListTileDialog} from "@/components/headerlisttile";
import {AddAccountGroupDialog} from "@/app/stores/[storeid]/chartofaccount/groups/_components/group_form";
import {coaColumns} from "@/app/stores/[storeid]/chartofaccount/_components/coa_columns";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {coagColumns} from "@/app/stores/[storeid]/chartofaccount/groups/_components/coag_columns";


export  function GroupTablePage(prop) {
 
    const tabledata = prop.data;
  
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

 

  

  