
import {ItemsPage} from "@/app/stores/[storeid]/items/_components/item_table";
import { getProducts} from "@/app/_actions/stock_item";
import Productpage from "@/app/stores/[storeid]/items/_components/productpage";




export default async function Home(params) {
  const data = await getProducts(params.params.storeid);
  return (
    <div className="max-w-screen-xl">

      <ItemsPage data={data}/>


    </div>
  );
}





