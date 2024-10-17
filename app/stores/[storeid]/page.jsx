import {DashBoardCard} from "@/components/app/mycards";
import Container from "@/components/app/container";
import {testRight} from "@/app/_actions/account";


const dbT=[
    {
        'title':'Total Accountspayable',
        "value": "1000",
        "date": "today"
    }
];
export default async function Page({params}) {
  const test = await  testRight(params.storeid)
    // const result =await confirmStore(params.params.storeid);
    // if (!result) {
    //     redirect("/stores");
    // }
    return <Container >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{
            dbT.map((item, index)=>{
                return (
                    <DashBoardCard title={item.title} key={index} value={item.value} />
            );
        })
        }
        </div>
    </Container>;
}