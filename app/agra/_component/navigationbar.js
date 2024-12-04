import React from 'react';
import Mainbody from "@/app/agra/_component/mainbody";
import Listtile from "@/app/agra/_component/listtile";
import {Button} from "@/components/ui/button";
const header=[
    {'name':"products"},
    {'name':"investor"},
    {'name':"farmers"},
    {'name':"traders"},
    {'name':"statistics"},
];
function Navigationbar(props) {
    return (
        <Mainbody className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-row gap-10 items-center text-white ">


                <Listtile title={"browse categories".toUpperCase()}/>

                <ul className="flex flex-row gap-4">
                    {header.map((item, index) => (
                        <li key={index}>{item.name.toUpperCase()}</li>
                    ))}
                </ul>

            </div>
            <Button variant="outline">Sell</Button>
        </Mainbody>
    );
}

export default Navigationbar;