
import {ItemsPage} from "@/app/stores/[storeid]/items/_components/item_table";
import MainContainer from "@/components/app/mainContainer";
import {getAllProductsbyStoreid} from "@/app/_actions/stock_item";



export default async function Home({params}) {
    const data = await getAllProductsbyStoreid(params.storeid);
  return (
    <MainContainer >
      <ItemsPage data={data}/>
    </MainContainer>
  );
}





