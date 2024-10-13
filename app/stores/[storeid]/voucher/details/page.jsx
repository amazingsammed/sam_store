import VoucherDetailsPage from "@/app/stores/[storeid]/voucher/details/_component/voucherdetails";

async function Page(props) {
    return (
        <div className="max-w-screen-xl mx-auto">
        <VoucherDetailsPage element ={props.element}/>
        </div>
    );
}

export default Page;