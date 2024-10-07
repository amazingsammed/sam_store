import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {DashBoardCard} from "@/components/mycards";


const dbT=[
    {
        'title':'Total Invoice',
        "value": "1000",
        "date": "today"
    }
];
export default async function Page(params) {
    // const result =await confirmStore(params.params.storeid);
    // if (!result) {
    //     redirect("/stores");
    // }
    return <div className="max-w-screen-xl mx-auto">

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{
            dbT.map((item, index)=>{
                return (
                    <DashBoardCard title={item.title} key={index} value={item.value} />
            );
        })
        }


        </div>

    </div>;
}