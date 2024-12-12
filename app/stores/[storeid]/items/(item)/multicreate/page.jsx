import MultiCreatePage from "@/app/stores/[storeid]/items/(item)/multicreate/_component/multiCreatePage";
import MainContainer from "@/components/app/mainContainer";


async function Page(props) {
    return (
        <MainContainer>
        <MultiCreatePage />
        </MainContainer>
    );
}

export default Page;