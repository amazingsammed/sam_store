import {getProducts} from "@/app/_actions/stock_item";
import CashPurchasesFormPage from "@/app/stores/[storeid]/purchases/cashpurchases/_component/cashpurchasesformpage";


async function Page(props) {
    const data = await getProducts(props.params.storeid);
    return (
        <div className="max-w-screen-xl mx-auto">
        <CashPurchasesFormPage cacheditems={data}/>
        </div>
    );
}

export default Page;