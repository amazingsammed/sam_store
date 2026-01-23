import {getChartOfAccount} from "@/app/_actions/account";
import {Cartofaccount} from "@/app/stores/[storeid]/settings/chartofaccount/_component/coa_table";

async function Page({params}) {
    // const data = await getChartOfAccount(params.storeid);
    const data = [
        [],[]
    ];


    return (
        <div><Cartofaccount data ={data}/></div>
    );
}

export default Page;