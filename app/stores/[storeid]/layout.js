

import SideBar from "@/components/app/Sidebar";
import StoreHeader from "@/components/app/store_header";


export default async function Layout({children}) {

    return (
        <div>

            <StoreHeader/>
            <SideBar/>
            <div className="lg:pl-[22rem]  ">
                {/*<Storeinfo/>*/}
                <div className="lg:pt-8  p-4 mx-auto">
                {children}
                </div>
            </div>
        </div>
    );
}

// max-w-4xl mx-auto p-4