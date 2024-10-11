import React from 'react';
import Reportspage from "@/app/stores/[storeid]/report/_components/reportspage";
import Container from "@/components/app/container";

function Page({params}) {
    return (
        <Container >
            <Reportspage/>
        </Container>
    );
}

export default Page;