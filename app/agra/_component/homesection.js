import React from 'react';
import Mainbody from "@/app/agra/_component/mainbody";
import {Card} from "@/components/ui/card";
function HomeSection({title,button,data}) {
    return (
        <div className="flex flex-col  w-full">
            <div className="h-[20px] bg-green-600 w-full"></div>
            <div className="h-full bg-gray-400 w-full py-2 px-5">
                <Mainbody className="py-5 gap-4 flex flex-col">

                    <div className="justify-between flex flex-row w-full items-center">

                        <div>{title}</div>
                        <div>{button}</div>
                    </div>

                    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {data.map((row, i) => (

                            <div>
                                <Card key={i} className="h-[200px] bg-green-800"> </Card>
                                <h1>products</h1>
                                <p className="font-bold">GHC 200</p>
                            </div>
                        ))}

                    </div>
                </Mainbody>
            </div>

        </div>
    );
}

export default HomeSection;