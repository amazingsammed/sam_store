
import {ItemsPage} from "@/app/stores/[storeid]/items/_components/item_table";
import {getAllProducts, getAllProductsbyStoreid, getProducts} from "@/app/_actions/stock_item";
import Productpage from "@/app/stores/[storeid]/items/_components/productpage";




export default async function Home(params) {
  const data = await getAllProductsbyStoreid(params.params.storeid);
  return (
    <div className="max-w-screen-xl mx-auto">

      <ItemsPage data={data}/>


    </div>
  );
}





