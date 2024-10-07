import React from 'react';
import ReportCard, {VoucherCard} from "@/components/mycards";
import {MdBalance, MdSanitizer} from "react-icons/md";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const basicVoucher = [
    {
        'title':"Sales",
        'description':"Record Invoice of various products",
        'icon': <MdSanitizer/>,
        "path": "cashsales",
        "active": true,
    },
    {
        'title':"Purchases",
        'description':"Record purchases for various products",
        'icon': <MdSanitizer/>,
        "path": "purchases",
        "active": false,
    },
    {
        'title':"Payment",
        'description':"Record payment made to others by you",
        'icon': <MdSanitizer/>,
        "path": "payment",
        "active": false,
    },
    {
        'title':"Receipt",
        'description':"Record receipt made to you",
        'icon': <MdSanitizer/>,
        "path": "receipt",
        "active": false,
    },
    {
        'title':"Contra Entry",
        'description':"Record transaction between accounts of your own",
        'icon': <MdSanitizer/>,
        "path": "contra",
        "active": false,
    },

    {
        'title':"Journal",
        'description':"Record Invoice of various products",
        'icon': <MdSanitizer/>,
        "path": "journal",
        "active": false,
    },

    {
        'title':"Credit Note",
        'description':"Record Invoice returns",
        'icon': <MdSanitizer/>,
        "path": "creditnote",
        "active": false,
    },
    {
        'title':"Debit Note",
        'description':"Record Purchases returns",
        'icon': <MdSanitizer/>,
        "path": "debitnote",
        "active": false,
    },
]
function Configpage(props) {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-bold">
                        Default System Vouchers
                    </CardTitle>
                    <CardDescription>
                        Select a voucher below to continue your transaction
                    </CardDescription>
                </CardHeader>
                <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" >
                {basicVoucher.map((item, index) => (
                    <VoucherCard key={index} element={item} />
                ))
                }
            </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Configpage;