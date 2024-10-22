
import Cashsalepage from "@/app/stores/[storeid]/sales/sale/cashsales/_component/cashsalepage";
import {getProducts} from "@/app/_actions/stock_item";
import Container from "@/components/app/container";


async function Page(props) {
    const data = await getProducts(props.params.storeid);
    return (
        <Container>
        <Cashsalepage cacheditems={data}/>
        </Container>
    );
}

export default Page;