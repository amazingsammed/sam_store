import {getProducts} from "@/app/_actions/stock_item";
import CashPurchasesFormPage from "@/app/stores/[storeid]/purchases/(purchase)/cashpurchases/_component/cashpurchasesformpage";
import MainContainer from "@/components/app/mainContainer";
import CreditPurchasesFormPage
    from "@/app/stores/[storeid]/purchases/(purchase)/creditpurchases/_component/creditpurchasesformpage";


async function Page(props) {
    return (
        <MainContainer>
        <CreditPurchasesFormPage />
        </MainContainer>
    );
}

export default Page;