import {DashBoardCard} from "@/components/app/mycards";
import MainContainer from "@/components/app/mainContainer";
import {testRight} from "@/app/_actions/account";
import {dbSales} from "@/app/_actions/dashboard";



  //const test = await  testRight(params.storeid)
export default async function Page({params}) {
    const [sales,purchases,item]= await dbSales(params.storeid);
    function sumAmount(list){
        let total= 0;
        list.forEach(item=>{
            total+=parseFloat(item.amount);
        });
        console.log(total);
        if (total<0) return total*-1
        return total;
    }
    const dbT=[
        {
            'title':'Sales',
            "value": sumAmount(sales),
            "count": sales.length,
        },
        {
            'title':'Purchases',
            "value": sumAmount(purchases),
            "count": purchases.length,
        },
        {
            'title':'Items',
            "value": item,
        },
        {
            'title':'Alert',
            "value": "1000",
        },
    ];

    return <MainContainer >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{
            dbT.map((item, index)=>{
                return (
                    <DashBoardCard title={item.title} key={index} value={item.value} count={item.count}/>
            );
        })
        }
        </div>
    </MainContainer>;
}