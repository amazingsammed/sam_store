import {getProducts} from "@/app/_actions/stock_item";
import EditVoucherFormPage from "@/app/stores/[storeid]/voucher/edit/_component/editVoucherFormPage";
import MainContainer from "@/components/app/mainContainer";


async function Page(props) {
    const data = await getProducts(props.params.storeid);
    return (
        <MainContainer>
        <EditVoucherFormPage cacheditems={data} element ={props.element}/>
        </MainContainer>
    );
}

export default Page;