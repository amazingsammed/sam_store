'use client';

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

function signup() {

}
import { useFormState, useFormStatus } from 'react-dom';
import {Icons} from "@/app/auth/_component/icons";
import * as React from "react";
import Link from "next/link";

export function OnBoarding() {
  const [state, action] = useFormState(signup, undefined);

  return (
      <div className="grid-cols-1 gap-4 grid">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create an Store Account</h1>
          <p className="text-gray-500">Enter your Store information to Continue</p>
        </div>
        <form action={action}>
          <div className="flex flex-col gap-2">

            <div>
              <Label htmlFor="storename">Store Name</Label>
              <Input id="storename" name="storename" placeholder="MyStore Name"/>
            </div>
            {state?.errors?.name && (
                <p className="text-sm text-red-500">{state.errors.name}</p>
            )}


              <div>
                  <Label htmlFor="storeaddress">Store Address</Label>
                  <Input id="storeaddress" name="storeaddress" placeholder="P.O.Box 1234"/>
              </div>
              {state?.errors?.name && (
                  <p className="text-sm text-red-500">{state.errors.name}</p>
              )}


              <div>
                  <Label htmlFor="storephone">Store Phone</Label>
                  <Input id="storephone" name="storephone" placeholder="+00 00000000" type="number"/>
              </div>
              {state?.errors?.name && (
                  <p className="text-sm text-red-500">{state.errors.name}</p>
              )}

            <div>
              <Label htmlFor="email">Store Email</Label>
              <Input id="email" name="email" placeholder="mystore@example.com"/>
            </div>
            {state?.errors?.email && (
                <p className="text-sm text-red-500">{state.errors.email}</p>
            )}



            <SignupButton/>
          </div>
        </form>


      </div>
  );
}

export function SignupButton() {
  const {pending} = useFormStatus();

  return (
      <Button aria-disabled={pending} type="submit" className="mt-2 w-full">
        {pending ? 'Submitting...' : 'Create Store'}
      </Button>
  );
}
