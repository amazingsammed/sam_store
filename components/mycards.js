'use client'
import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {usePathname} from "next/navigation";

function ReportCard({element}) {
    const path = usePathname();
    return (
       <Link href={`${path}/${element.path}`}>
           <Card>
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                   <CardTitle className="text-xl font-bold">
                       {element.title}
                   </CardTitle>
                   {element.icon}
               </CardHeader>
               <CardContent>
                   <p>
                       {element.description}
                   </p>
               </CardContent>
           </Card>
       </Link>
    );
}
export function VoucherCard({element}) {
    const path = usePathname();
    if(element.active ===false){
        return <div></div>
    }
    return (
        <Link href={`${element.path}`}>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl font-bold">
                        {element.title}
                    </CardTitle>
                    {element.icon}
                </CardHeader>
                <CardContent>
                    <p>
                        {element.description}
                    </p>
                </CardContent>
            </Card>
        </Link>
    );
}

export function HomeCard({element}) {
    const path = usePathname();
    return (

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl font-bold gap-4 flex flex-col">
                        {element.icon}
                            {element.title}
                    </CardTitle>


                </CardHeader>
                <CardContent>
                    <p>
                        {element.description}
                    </p>
                </CardContent>
            </Card>
    );
}

export function DashBoardCard({title,value,date}) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {title?title:'Total'}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value?value:"0.00"}</div>
                <p className="text-xs text-muted-foreground">
                    {date?date:'today'}
                </p>
            </CardContent>
        </Card>
    );
}



export default ReportCard;