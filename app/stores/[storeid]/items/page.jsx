
import {ItemsPage} from "@/app/stores/[storeid]/items/_components/item_table";
import {getAllProductsbyStoreid} from "@/app/_actions/stock_item";


export default async function Home(params) {
  const data = await getAllProductsbyStoreid(params.params.storeid);
  return (
    <div className="max-w-screen-xl mx-auto">

      <ItemsPage data={data}/>


    </div>
  );
}





