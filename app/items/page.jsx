import {ItemsPage} from  "@/components/client/item_table";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Home() {
  //var a = await getItems();
  var a = await prisma.mst_stock_item.findMany();
  const datax = JSON.parse(JSON.stringify(a))
  return (
    <div>
      <ItemsPage data={datax}/>
    </div>
  );
}





