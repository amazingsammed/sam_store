import React from 'react';
import Purchaseorder from "@/app/stores/[storeid]/purchases/purchaseorder/_component/purchaseorder";
import MainContainer from "@/components/app/mainContainer";

function Page(props) {
    return (
        <MainContainer>
            <Purchaseorder/>
        </MainContainer>
    );
}

export default Page;