'use client';

import {Button} from "@/components/ui/button";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { CTextfieldNum, CTextfieldR} from "@/components/ktextfield";
import {createStore} from "@/app/_actions/stores";
import {useRouter} from "next/navigation";





function Storeheader() {
    return (

        <nav className="bg-blue border-gray-200 border-b">
            <div className=" flex flex-wrap items-center justify-between mx-auto p-4 container">
                <div className="items-center justify-between " >
                   <h1 className="text-3xl font-bold">Store List</h1>
                </div>
                <div className="flex  space-x-3 md:space-x-0 rtl:space-x-reverse">
                       <Addform/>
                    {/*<Button*/}
                    {/*    loading={isLogoutLoading || hasLoggedOut}*/}
                    {/*    disabled={isLogoutLoading || hasLoggedOut}*/}
                    {/*    onClick={handleLogout}*/}
                    {/*>*/}
                    {/*    Log out*/}
                    {/*</Button>*/}
                </div>
            </div>
        </nav>
    );
}

export function Addform() {
    const router = useRouter();

   async function createstore(b){
       const element= {
           name: b.get('storename'),
           phone: b.get('storephone'),
           address: b.get('storeaddress'),
           location: b.get('storelocation'),
       }
       console.log(element);
       await createStore(b);
       router.refresh();
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Store</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={createstore}>
                    <DialogHeader>
                        <DialogTitle>Add Store Form</DialogTitle>
                        <DialogDescription>
                            Create new store here
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <CTextfieldR label="Store Name"  name="storename"/>
                        <CTextfieldR label="Store Email"  name="storeemail"/>
                        <CTextfieldR label="Store Address"  name="storeaddress"/>
                        <CTextfieldNum label="Store Phone"  name="storephone"/>

                    </div>
                    <DialogFooter>
                        <DialogClose>

                        <Button type="submit">Save</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default Storeheader;