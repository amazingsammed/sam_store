import Storelist from "@/app/stores/_component/storelist";
import {getStores} from "@/app/_actions/stores";
import MainContainer from "@/components/app/mainContainer";

export default async function Page() {

   const list= await getStores();
    return(
        <main className="h-full w-full">
           <Storelist datax={list}/>
        </main>
        );

}