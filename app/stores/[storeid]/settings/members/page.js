
import {getStoreMembers} from "@/app/_actions/stores";
import Members_table from "@/app/stores/[storeid]/settings/members/_component/members_table";

async function Page({params}) {
    const data = await getStoreMembers(params.storeid);
    return (
        <div>
            <Members_table data={data} />
        </div>
    );
}

export default Page;