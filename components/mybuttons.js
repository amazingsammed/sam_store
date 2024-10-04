'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
import {useFormStatus} from "react-dom";

function MySubmitButton({name}) {
    const {pending} = useFormStatus();

    return (
        <Button aria-disabled={pending} type="submit">
            {pending ? 'Submitting...' : name??'Submit'}
        </Button>
    );
}

export default MySubmitButton;