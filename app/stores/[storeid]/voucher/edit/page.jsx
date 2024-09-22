import {getProducts} from "@/app/_actions/stock_item";
import EditVoucherFormPage from "@/app/stores/[storeid]/voucher/edit/_component/editVoucherFormPage";


async function Page(props) {
    const data = await getProducts(props.params.storeid);
    return (
        <div className="max-w-screen-xl mx-auto">
        <EditVoucherFormPage cacheditems={data} element ={props.element}/>
        </div>
    );
}

export default Page;