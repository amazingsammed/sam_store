
import {ItemsPage} from "@/app/stores/[storeid]/items/_components/item_table";
import Container from "@/components/app/container";
import {getAllProductsbyStoreid} from "@/app/_actions/stock_item";



export default async function Home({params: {storeid}}) {
    const data = await getAllProductsbyStoreid (storeid)
  return (
    <Container >
      <ItemsPage />
    </Container>
  );
}





