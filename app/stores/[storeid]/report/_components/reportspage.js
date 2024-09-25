import React from 'react';
import ReportCard from "@/components/mycards";
import {MdBalance} from "react-icons/md";

const basicReport = [
    {
        'title':"Trial Balance",
        'description':"Balances of chart of accounts",
        'icon': <MdBalance/>,
        "path": "trialbalance"
    }
]

function Reportspage(props) {
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" >
                {basicReport.map((item, index) => (
                    <ReportCard key={index} element={item} />
                ))}
            </div>
        </div>
    );
}

export default Reportspage;