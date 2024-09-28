import Storelist from "@/app/stores/_component/storelist";
import {getStores} from "@/app/_actions/stores";

export default async function Page() {
   const list= await getStores();
    return(
        <div className="max-w-screen-xl  items-center justify-center mx-auto">


           <Storelist datax={list}/>

        </div>
        );

}