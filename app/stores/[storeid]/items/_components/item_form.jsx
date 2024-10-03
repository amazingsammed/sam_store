"use client";

import {
    CTextfieldR,
    CDropDown,
    CTextfieldNum,
    CCheckBox
} from '@/components/ktextfield'
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useEffect, useRef, useState} from "react";
import {addProduct} from "@/app/_actions/stock_item";
import {useParams, useRouter} from "next/navigation";
import {getStockGroup, getStockUnits} from "@/app/_actions/stock_item_options";
import {toast} from "sonner";
import {useFormState} from "react-dom";




export function AddAnItem() {
    const [groups, setGroups] = useState([{'name': "others",'id':1}]);
    const [units, setUnits] = useState([{'name': "others",'id':1}]);
    const [hasopenbalance ,setHasopenbalance] = useState(false);
    const [isService ,setisService] = useState(false);
    const ref = useRef<HTMLFormElement>(null);

    useEffect(() => {
            const fetcher = async () => {
                try {
                    const newGroups = await getStockGroup(path.storeid);
                    const newUnits = await getStockUnits(path.storeid);
console.log(newUnits);
                    // Combine previous state with new fetched data
                    setGroups(prevGroups => [
                        ...new Set([...prevGroups, ...newGroups.map(group => JSON.stringify(group))])
                    ]);

                    setUnits(prevUnits => [
                        ...new Set([...prevUnits, ...newUnits.map(unit => JSON.stringify(unit))])
                    ]);

                } catch (error) {
                    toast.error('Failed to fetch data');
                }
            };
            fetcher();

        },
        []);
    function handleCheckBoxChange(e) {

        const {name, checked} = e.target;
        setHasopenbalance(checked);
    }
    const path= useParams();
    const router = useRouter()
    async function handleAddproduct(a,elements) {
        try {
            const stock = await addProduct(elements, path.storeid);
            if (stock) {
                ref.current?.reset();
                toast.success('Item Added Successfully');
                setTimeout(() => {
                    router.refresh();
                }, 500);
            }
        } catch (error) {
            toast.error('Failed to add item');
        }

    }
    const [state, action] = useFormState(handleAddproduct, undefined);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle>Create New Item</DialogTitle>
                        <DialogDescription>
                            Use this form to add new item
                        </DialogDescription>
                    </DialogHeader>
                    <div className='mb-6 gap-6'>
                        <CTextfieldR label="Product name" name="name"/>
                        <div className='mb-6'></div>
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <CTextfieldNum label="Selling Price"
                                           name="salesprice"/>
                            <CTextfieldNum label="Purchase Price"
                                           name="purchaseprice"/>
                            <CDropDown
                                label="Category"
                                name='group'
                                items={groups}
                            />
                            <CDropDown
                                label="Units"
                                name='unit'
                                items={units}
                            />
                            {hasopenbalance &&
                                <CTextfieldNum label="Current Quantity"
                                               name="quantity"/>

                            }


                        </div>
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>

                            <CCheckBox
                                label="Item have opening balance"
                                name="hasopenbalance"
                                onChange={handleCheckBoxChange}
                                checked={hasopenbalance}
                            />

                            <CCheckBox
                                label="Item is a service"
                                name="is_service"
                                checked={isService}
                            />
                        </div>
                        </div>


                        <DialogFooter >
                            <Button type="submit" >Add Item
                            </Button>
                            <DialogClose>
                                <Button variant="outline" type="button">Close</Button>
                            </DialogClose>
                        </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

