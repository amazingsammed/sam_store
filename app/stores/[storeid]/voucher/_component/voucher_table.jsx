'use client'

import {DataTable} from "@/app/stores/[storeid]/items/_components/datatable";

export function VoucherTable(prop) {


  const tabledata = prop.data;

  return (
      <div className="">
        <Headerlisttile title='Voucher List' subtitle='All Vouchers are listed here' bname="Add Voucher" ontap="items/addItem">
          <DataTable columns={voucherColumns} data={tabledata} filter={'vouchertype'}/>
        </Headerlisttile>
      </div>

  );
}


import Headerlisttile from "../../../../../components/headerlisttile";
import {voucherColumns} from "@/app/stores/[storeid]/voucher/_component/voucher_columns";
  

  