import Storelist from "@/app/stores/_component/storelist";
import {getStores} from "@/app/_actions/stores";
import {testRight} from "@/app/_actions/account";
import Container from "@/components/app/container";

export default async function Page() {

   const list= await getStores();
    return(
        <Container className="h-full">
           <Storelist datax={list}/>
        </Container>
        );

}