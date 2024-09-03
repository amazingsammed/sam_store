import {ItemsPage} from  "@/app/store/items/_components/item_table";
import {getItemsList} from "@/app/store/_actions/product";



export default async function Home() {
  const data = await  getItemsList();
  return (
    <div className="max-w-screen-xl">
      <ItemsPage data={data}/>
    </div>
  );
}





