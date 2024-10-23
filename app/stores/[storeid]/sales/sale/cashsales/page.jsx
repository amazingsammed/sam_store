
import Cashsalepage from "@/app/stores/[storeid]/sales/sale/cashsales/_component/cashsalepage";
import {getProducts} from "@/app/_actions/stock_item";
import MainContainer from "@/components/app/mainContainer";


async function Page(props) {
    const data = await getProducts(props.params.storeid);
    return (
        <MainContainer>
        <Cashsalepage cacheditems={data}/>
        </MainContainer>
    );
}

export default Page;