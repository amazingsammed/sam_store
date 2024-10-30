
import Cashsalepage from "@/app/stores/[storeid]/sales/(sale)/cashsales/_component/cashsalepage";
import {getProducts} from "@/app/_actions/stock_item";
import MainContainer from "@/components/app/mainContainer";


async function Page(props) {
    return (
        <MainContainer>
        <Cashsalepage />
        </MainContainer>
    );
}

export default Page;