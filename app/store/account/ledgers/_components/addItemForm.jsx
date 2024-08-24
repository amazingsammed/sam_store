"use client";

import {CTextfieldR, CTextfieldNum, CCheckBox, CDropDown} from '@/components/ktextfield'
import {useState, useEffect} from 'react';
import {addproduct, getItemsgroupList, getItemsUnitList} from "@/app/store/_actions/product";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";
import {createLedger, getGroupList, getGroupNames} from "@/app/store/_actions/account";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Command} from "cmdk";
import {cn} from "@/lib/utils";
import {MdCheck, MdChevronRight} from "react-icons/md";

export default async function AddLedgerForm() {
    const [groups, setGroups] = useState([{'name': "electronics",}]);
    const [units, setUnits] = useState([{'name': "bags",}]);

    useEffect(() => {
            const fetcher = async () => {
                var a = await getItemsgroupList();
                var b = await getItemsUnitList();
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




    const [formData, setform] = useState({
        name: "",
        group: "",
        unit: "",
        opening_qty: 0,
        opening_rate: 0,
        opening_value: 0,
        salesprice: 0,
        has_open_bal: false,
        warning_limit: 4,
        is_service: false

    })



    function handleCheckBoxChange(e) {

        const {name, checked} = e.target;
        setform((prevform) => {
            return {
                ...prevform,
                [name]: checked
            }
        });
    }



    return (
        <div className='max-w-3xl p-5'>
            <form  action={addproduct}>
                <div className='mb-6 gap-6'>
                    <CTextfieldR label="Product name" value={formData.name}  name="name"/>
                    <div className='mb-6'></div>
                    <div className='grid gap-6 mb-6 md:grid-cols-2'>
                        <CTextfieldNum label="Selling Price" value={formData.salesprice}
                                       name="salesprice"/>
                        <CTextfieldNum label="Purchase Price" value={formData.salesprice}
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
                        <CCheckBox
                            label="Item have opening balance"
                            name="has_open_bal"
                            onChange={handleCheckBoxChange}
                            checked={formData.has_open_bal}
                        />
                        <CCheckBox
                            label="Item is a service"
                            name="is_service"
                            checked={formData.is_service}
                        />

                    </div>

                </div>
                {formData.has_open_bal &&

                    <div className='grid gap-6 mb-6 md:grid-cols-3'>
                        <CTextfieldNum label="Current Quantity" value={formData.opening_rate}
                                       name="cqty"/>
                        <CTextfieldNum label="Ideal Quantity" value={formData.salesprice}
                                       name="iqty"/>
                        <CTextfieldNum label="Warning Quantity" value={formData.salesprice}
                                       name="wqty"/>

                    </div>
                }
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>

            </form>
        </div>
    )
}



export function AddLedgerDialog() {
    const [groups, setGroups] = useState([{'name': "electronics",}]);

    useEffect(() => {
            const fetcher = async () => {
                var a = await getGroupNames();
                if (a.length === 0) {
                } else {
                    setGroups(a);
                }

            };
            fetcher();

        },
        []);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Create Ledger</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[434]">
                <form action={createLedger}>
                <DialogHeader>
                    <DialogTitle>Create Ledger</DialogTitle>
                    <DialogDescription>
                        Create your ledger here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <CTextfieldR label="Ledger Name" value=''  name="lname"/>
                    <CDropDown
                        label="Parent"
                        name='group'
                        items={groups}
                    />
                    <CTextfieldNum label="Opening Balance" value='0'
                                   name="opb"/>
                </div>
                <DialogFooter>
                    <Button type="submit">Save</Button>
                </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}






