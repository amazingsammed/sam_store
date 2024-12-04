import React from 'react';
import Listtile from "@/app/agra/_component/listtile";
const sidebar=[
    {'name':"crops"},
    {'name':"animal husbandry"},
    {'name':"aquaculture"},
    {'name':"horticulture"},
    {'name':"agro-forestry"},
    {'name':"agriculture eng"},
    {'name':"plant protection"},
    {'name':"sustainable agric"},
    {'name':"farm management"},
    {'name':"jobs"},
    {'name':"others"},
];
function Sidebarx(props) {
    return (
        <div className="w-[300px] hidden md:block bg-gray-400">
            {sidebar.map((item, index) => (
                <Listtile key={index} title={
                    item.name.toUpperCase()
                }/>
            ))}
        </div>
    );
}

export default Sidebarx;