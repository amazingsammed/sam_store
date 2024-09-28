"use client";

import {CTextfieldR, CTextfieldNum, CCheckBox, CDropDown} from '@/components/ktextfield'
import {useState, useEffect} from 'react';
import {addProduct, getItemsgroupList, getItemsUnitList} from "@/app/_actions/stock_item";

export default async function AddItemForm() {
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
            <form  action={addProduct}>
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

