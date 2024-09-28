
import Cashsalepage from "@/app/stores/[storeid]/sales/cashsales/_component/cashsalepage";
import {getProducts} from "@/app/_actions/stock_item";


async function Page(props) {
    const data = await getProducts(props.params.storeid);
    return (
        <div className="">
        <Cashsalepage cacheditems={data}/>
        </div>
    );
}

export default Page;