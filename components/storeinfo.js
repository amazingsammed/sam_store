"use client"

import React, {useEffect, useState} from 'react';
import {MdLogout, MdStore} from "react-icons/md";
import {Button} from "@/components/ui/button";
import {useParams, usePathname, useRouter} from "next/navigation";
import {signOut} from "next-auth/react";
import Link from 'next/link'

function Storeinfo(props) {
    const path = useParams();
    const pathName = usePathname();
    const router = useRouter();
    const [role, setRole] = useState({
        'storename':"",
        "name":""
    });
    async function handleSignout() {
        await signOut('credential');
        router.refresh();
    }
    useEffect(() => {
        async function fetchPosts() {
            let res = await fetch('http://localhost:3000/api/system',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({ storeid: path.storeid }),}
            )

            if(res.status === 400){
                await router.push('/stores');
            }
            if(res.status === 200){
                let {results} = await res.json();
                console.log(results, 'success');
                setRole(results)
            }else {
                await router.push('/stores');
            }
        }
        fetchPosts()
    }, [])
    return (
        <div className=" h-16  hidden lg:flex justify-between flex-row max-w-screen-xl  mx-auto rounded bg-white pr-10 items-center">
            <div>
           <h1 className="col-span-10 text-3xl font-bold">{role.storename +"\'s store"} </h1>
                {/*<p> Current User : {role.name}</p>*/}
            </div>
            <div className="flex flex-row items-center gap-4">
                <Link href={'/stores'}>
                <Button variant="outline" className="gap-2">
                    {<MdStore/>}

                    Change Store
                </Button>
                </Link>
                <Button className="gap-2" onClick={handleSignout}>
                    {<MdLogout/>}
                    Logout
                </Button>
            </div>
        </div>
    );
}

export default Storeinfo;