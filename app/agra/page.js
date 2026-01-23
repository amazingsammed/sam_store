import React from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardDescription, CardTitle} from "@/components/ui/card";
import Mainbody from "@/app/agra/_component/mainbody";

import Mainmenubar from "@/app/agra/_component/mainmenubar";
import Navigationbar from "@/app/agra/_component/navigationbar";
import Footer from "@/app/agra/_component/footer";
import Sidebarx from "@/app/agra/_component/sidebar";
import HomeSection from "@/app/agra/_component/homesection";

const dummy = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const d5 = [1, 1, 1, 1, 1];


function Page(props) {
    return (
        <div>
            <Mainmenubar/>
            <div className='flex flex-row justify-between bg-green-600 h-[70px] w-full items-center'>
                <Navigationbar/>
            </div>
            <Mainbody className="flex flex-row justify-between h-[70dvh] w-full gap-4 ">
                <Sidebarx/>
                <div className="w-full bg-blue-800"></div>
            </Mainbody>
            <HomeSection title={
                <h1><span className="font-semibold">
                            New
                        </span> <span className="text-red-700 font-semibold">
                            Arrival
                        </span></h1>}
                         button={
                             <Button className='bg-green-700'>view more</Button>
                         }
                         data={d5}/>
            <Mainbody className="flex flex-col w-full py-10 gap-4 ">
                <h1 className="font-bold">Trending ads</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {dummy.map((item, i) => (
                        <Card key={i} className="h-[130px]"></Card>
                    ))}
                </div>
            </Mainbody>
            <HomeSection title={
                <h1 className="flex flex-row gap-1">
                                <span className="text-red-700 font-semibold">
                            Best
                        </span>
                    <span className="font-semibold">
                            Selling
                        </span>
                </h1>
            }
                         button={
                             <Button className='bg-green-700'>view more</Button>
                         }
                         data={d5}/>
            <Footer/>
        </div>
    );
}

export default Page;