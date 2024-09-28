
import Cashsalepage from "@/app/stores/[storeid]/sales/cashsales/_component/cashsalepage";
import Itemlist from "@/app/stores/[storeid]/_component/itemlist";
import {getCachedProducts, getProducts} from "@/app/_actions/stock_item";
import MultiCreatePage from "@/app/stores/[storeid]/items/multicreate/_component/multiCreatePage";


async function Page(props) {
    return (
        <div className="">
        <MultiCreatePage />
        </div>
    );
}

export default Page;