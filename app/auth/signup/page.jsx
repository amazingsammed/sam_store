import Link from 'next/link';
import { SignupForm } from '@/app/auth/signup/form';
export default function Page() {
  return (
    <div className="flex flex-col p-4 lg:w-1/3">


        <SignupForm />

    </div>
  );
}
