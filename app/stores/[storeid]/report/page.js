import React from 'react';
import Reportspage from "@/app/stores/[storeid]/report/_components/reportspage";
import MainContainer from "@/components/app/mainContainer";

function Page({params}) {
    return (
        <MainContainer >
            <Reportspage/>
        </MainContainer>
    );
}

export default Page;