'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
import {useFormStatus} from "react-dom";
import {MdPrint} from "react-icons/md";

function MySubmitButton({name}) {
    const {pending} = useFormStatus();

    return (
        <Button aria-disabled={pending} type="submit">
            {pending ? 'Submitting...' : name??'Submit'}
        </Button>
    );
}
 export function MyPrintButton({onClick}) {
    const {pending} = useFormStatus();

    return (
        <Button aria-disabled={pending} type="button" onClick={onClick} className="flex gap-2">
            <MdPrint size={18} />
            Print
        </Button>
    );
}


export default MySubmitButton;