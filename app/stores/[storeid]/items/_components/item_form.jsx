"use client";

import {
    CTextfieldR,
    CDropDown,
    CDropDownWithOnChange,
    CTextfieldNum,
    UUIDDropDownWithOnChange, CCheckBox
} from '@/components/ktextfield'
import {createChartofAccounts, getChartOfAccountGroupbyAccountid} from "@/app/_actions/account";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useEffect, useState} from "react";
import {addProduct, getItemsgroupList, getItemsUnitList} from "@/app/_actions/stock_item";
import {useParams, useRouter} from "next/navigation";
import {useFormState} from "react-dom";
import {getStockGroup, getStockUnits} from "@/app/_actions/stock_item_options";




export function AddAnItem() {
    const [groups, setGroups] = useState([{'name': "electronics",}]);
    const [units, setUnits] = useState([{'name': "bags",}]);
    const [hasopenbalance ,setHasopenbalance] = useState(false);
    const [isService ,setisService] = useState(false);

    useEffect(() => {
            const fetcher = async () => {
                const a = await getStockGroup(path.storeid);
                const b = await getStockUnits(path.storeid);
                if (a.length === 0) {

                } else {

                    setGroups(a);
                }
                if (b.length === 0) {

                } else {

                    setUnits(b);
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
    async function handleAddproduct(elements) {
        await addProduct(elements, path.storeid);
        setTimeout(()=>{
            router.refresh();
        }, 500);
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={handleAddproduct}>
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

