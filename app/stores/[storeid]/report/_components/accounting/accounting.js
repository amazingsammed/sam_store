import React from 'react';
import {MdBalance} from "react-icons/md";
import ReportCard from "@/components/app/mycards";
const basicReport = [
    {
        'title':"Trial Balance",
        'description':"Balances of chart of accounts",
        'icon': <MdBalance/>,
        "path": "trialbalance"
    }
]
function Accounting(props) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {basicReport.map((item, index) => (
                <ReportCard key={index} element={item}/>
            ))}
        </div>
    );
}

export default Accounting;