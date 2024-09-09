
import {ItemsPage} from "@/app/stores/[storeid]/items/_components/item_table";
import {getItemsList, getProducts} from "@/app/stores/_actions/stock_item";




export default async function Home(params) {
  const data = await getProducts(params.params.storeid);
  return (
    <div className="max-w-screen-xl">
      <ItemsPage data={data}/>
    </div>
  );
}





