import {getProducts} from "@/app/_actions/stock_item";
import CashPurchasesFormPage from "@/app/stores/[storeid]/purchases/(purchase)/cashpurchases/_component/cashpurchasesformpage";
import MainContainer from "@/components/app/mainContainer";


async function Page(props) {
    const data = await getProducts(props.params.storeid);
    return (
        <MainContainer>
        <CashPurchasesFormPage cacheditems={data}/>
        </MainContainer>
    );
}

export default Page;