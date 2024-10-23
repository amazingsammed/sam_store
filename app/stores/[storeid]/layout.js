

import SideBar from "@/components/app/Sidebar";
import StoreHeader from "@/components/app/store_header";


export default async function Layout({children}) {

    return (
        <div className="h-screen min-h-[0px] basis-0 flex-1">

            {/*<SideBar/>*/}
            {/*<div className="lg:pl-[22rem]  ">*/}
            {/*    /!*<Storeinfo/>*!/*/}
            {/*    <div className="lg:pt-8  p-4  mx-auto">*/}
            {/*        {children}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="flex h-full">

                <SideBar/>

                <div className="w-full data-[panel-group-direction=vertical]:flex-col flex h-full">
                    <div className="h-full w-full lg:pt-8  p-4">
                        <main className='pl-9 h-full flex flex-col flex-1 w-full overflow-x-hidden'>


                    {children}
                        </main>
                    </div>
                </div>

            </div>
        </div>
    );
}

// max-w-4xl mx-auto p-4