'use client'
import {HeaderListTileDialog} from "@/components/headerlisttile";
import {AddChartofAccount} from "@/app/stores/[storeid]/chartofaccount/_components/coa_form";
import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";
import {coaColumns} from "@/app/stores/[storeid]/chartofaccount/_components/coa_columns";


export  function Cartofaccount(prop) {
 
    const tabledata = prop.data;
  
    return (
      <div className="">
      <HeaderListTileDialog title='Chart of Accounts' subtitle='All Account in current store' buttonx={
        <AddChartofAccount/>
      } ontap = "items/addItem">
        <DataTable columns={coaColumns} data={tabledata} filter={'account_name'}/>
      </HeaderListTileDialog>
      {/*  <Table>*/}
      {/*  <TableHeader>*/}
      {/*    <TableRow>*/}
      {/*      <TableHead>Account Code</TableHead>*/}
      {/*      <TableHead>Account Name</TableHead>*/}
      {/*      <TableHead>Account Group</TableHead>*/}
      {/*      <TableHead>Account Type</TableHead>*/}
      {/*      <TableHead>Opening Balance</TableHead>*/}
      {/*    </TableRow>*/}
      {/*  </TableHeader>*/}
      {/*  <TableBody>*/}
      {/*    {tabledata.map((element ,index) => (*/}
      {/*      <TableRow key={index}>*/}
      {/*        <TableCell className="font-medium">{element.account_code}</TableCell>*/}
      {/*        <TableCell>{element.account_name}</TableCell>*/}
      {/*        <TableCell>{element.account_parent}</TableCell>*/}
      {/*        <TableCell>{element.account_type}</TableCell>*/}
      {/*        <TableCell>{element.opening_balance}</TableCell>*/}

      {/*      </TableRow>*/}
      {/*    ))}*/}
      {/*  </TableBody>*/}
      {/*  <TableFooter>*/}
      {/*    <TableRow>*/}
      {/*      <TableCell colSpan={3}>{tabledata.length +" Groups"}</TableCell>*/}
      {/*    </TableRow>*/}
      {/*  </TableFooter>*/}
      {/*</Table>*/}
        </div>

    );
  }

 

  

  