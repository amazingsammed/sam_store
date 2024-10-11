import React from 'react';
import {SalesPage} from "@/app/stores/[storeid]/sales/_component/salespage";
import Container from "@/components/app/container";


async function Page(props) {

    return (
        <Container >
            <SalesPage />
        </Container>
    );
}

export default Page;