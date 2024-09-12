
import Cashsalepage from "@/app/stores/[storeid]/sales/cashsales/_component/cashsalepage";
import Itemlist from "@/app/stores/[storeid]/_component/itemlist";
import {getCachedProducts, getProducts} from "@/app/_actions/stock_item";


async function Page(props) {
    const data = await getProducts(props.params.storeid);
    return (
        <div className="max-w-screen-xl">

        <Cashsalepage cacheditems={data}/>

        </div>
    );
}

export default Page;