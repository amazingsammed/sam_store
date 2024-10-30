import React from 'react';
import Payments from "@/app/stores/[storeid]/purchases/payments/_component/payments";
import MainContainer from "@/components/app/mainContainer";

function Page(props) {
    return (
        <MainContainer><Payments/></MainContainer>
    );
}

export default Page;