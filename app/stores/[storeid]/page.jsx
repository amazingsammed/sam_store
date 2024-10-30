import {DashBoardCard} from "@/components/app/mycards";
import MainContainer from "@/components/app/mainContainer";
import {testRight} from "@/app/_actions/account";


const dbT=[
    {
        'title':'Sales',
        "value": "1000",
        "date": "today"
    },
    {
        'title':'Purchases',
        "value": "1000",
        "date": "today"
    },
    {
        'title':'Items',
        "value": "1000",
        "date": "today"
    },
    {
        'title':'Alert',
        "value": "1000",
        "date": "today"
    },
];
export default async function Page({params}) {
  const test = await  testRight(params.storeid)
    // const result =await confirmStore(params.params.storeid);
    // if (!result) {
    //     redirect("/stores");
    // }
    return <MainContainer >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{
            dbT.map((item, index)=>{
                return (
                    <DashBoardCard title={item.title} key={index} value={item.value} />
            );
        })
        }
        </div>
    </MainContainer>;
}