import React from 'react';
import VSalespage from "@/app/stores/[storeid]/voucher/sales/_component/v_salespage";
import MainContainer from "@/components/app/mainContainer";

function Page(props) {
    return (
        <MainContainer>
            <VSalespage/>
        </MainContainer>
    );
}

export default Page;