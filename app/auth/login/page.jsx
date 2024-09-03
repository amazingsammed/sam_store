import { LoginForm } from './form';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import {Icons} from "@/app/auth/_component/icons";
import * as React from "react";

export default function Page() {
  return (
      <div className="flex flex-col p-4 lg:w-1/3">


              <LoginForm/>


      </div>
  );
}
