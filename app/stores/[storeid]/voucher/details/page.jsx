import VoucherDetailsPage from "@/app/stores/[storeid]/voucher/details/_component/voucherdetails";
import MainContainer from "@/components/app/mainContainer";

async function Page(props) {
    return (
        <MainContainer>
        <VoucherDetailsPage element ={props.element}/>
        </MainContainer>
    );
}

export default Page;