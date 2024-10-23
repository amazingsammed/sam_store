import React from 'react';
import {Settingspage} from "@/app/stores/[storeid]/settings/_component/settingspage";
import MainContainer from "@/components/app/mainContainer";



function Page() {
    return (
        <MainContainer >
            <Settingspage/>
        </MainContainer>
    );
}

export default Page;