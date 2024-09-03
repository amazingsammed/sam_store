"use client";

import {CTextfieldR, CTextfieldNum, CCheckBox, CDropDown} from '@/components/ktextfield'
import {useRouter} from "next/navigation";
import {useState, useEffect} from 'react';
import {addproduct, getItemsgroupList, getItemsUnitList} from "@/app/store/_actions/product";

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
            <form  action={addproduct}>
                <div className='mb-6 gap-6'>
                    <CTextfieldR label="Product name" value={formData.name}  name="name"/>
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
                        <CTextfieldNum label="Current Quantity"
                                       name="quantity"/>
                        <CTextfieldNum label="Ideal Quantity"
                                       name="idealquantity"/>
                        <CTextfieldNum label="Warning Quantity"
                                       name="warninglimit"/>

                    </div>
                }
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>

            </form>
        </div>
    )
}

// export default async function AddItemForm() {
//     const [groups, setGroups] = useState([{'name':"bags",}]);
//     useEffect( () => {
//         const fetcher = async () => {
//             var a = await getItemsgroupList();
//             setGroups(a);
//         };
//         fetcher();
//
//     }, []);
//     console.log(groups);
//     const router = useRouter();
//     const [hasopenbalance, setbalance] = useState(false)
//
//     const [formData, setform] = useState({
//         name: "",
//         group: "",
//         unit: "",
//         opening_qty: 0,
//         opening_rate: 0,
//         opening_value: 0,
//         salesprice: 0,
//         has_open_bal: false,
//         warning_limit: 4,
//         is_service: false
//
//     })
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         // if (!title || !description) {
//         //   alert("Title and description are required.");
//         //   return;
//         // }
//         console.log(formData)
//
//         try {
//             const res = await fetch("http://localhost:3000/api/items", {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });
//
//             if (res.ok) {
//                 console.log(res)
//                 router.push("/items");
//             } else {
//                 throw new Error("Failed to create a Item");
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
//
//     function handleCheckBoxChange(e) {
//
//         const {name, checked} = e.target;
//         setform((prevform) => {
//             return {
//                 ...prevform,
//                 [name]: checked
//             }
//         });
//     }
//
//     function handleInputChange(e) {
//         const {name, value} = e.target;
//         setform((prevform) => {
//             return {
//                 ...prevform,
//                 [name]: value
//             }
//         });
//     }
//     return (
//         <div className='max-w-3xl p-5'>
//             <form onSubmit={handleSubmit}>
//                 <div className='mb-6 gap-6'>
//                     <div>
//                         <input/>
//                     </div>
//
//                     <CTextfieldR label="Product name" value={formData.name} onchange={handleInputChange} name="name"/>
//
//
//                     <div className='mb-6'></div>
//                     <div className='grid gap-6 mb-6 md:grid-cols-2'>
//                         <CTextfieldNum label="Selling Price" value={formData.salesprice} onchange={handleInputChange}
//                                        name="salesprice"/>
//                         <CTextfieldNum label="Purchase Price" value={formData.salesprice} onchange={handleInputChange}
//                                        name="purchaseprice"/>
//                         <CDropDown
//                             label="Category"
//                             name='group'
//                             onchange={handleInputChange}
//                             items={groups}
//                         />
//                         <CDropDown
//                             label="Units"
//                             name='unit'
//                             onchange={handleInputChange}
//                             items={[{'value': "ab", 'name': "boxes"}
//                             ]}
//                         />
//                         <CCheckBox
//                             label="Item have opening balance"
//                             name="has_open_bal"
//                             onChange={handleCheckBoxChange}
//                             checked={formData.has_open_bal}
//                         />
//                         <CCheckBox
//                             label="Item is a service"
//                             name="is_service"
//
//                             checked={formData.is_service}
//                         />
//
//                     </div>
//
//                 </div>
//                 {formData.has_open_bal &&
//
//                     <div className='grid gap-6 mb-6 md:grid-cols-3'>
//                         <CTextfieldNum label="Current Quantity" value={formData.opening_rate}
//                                        onchange={handleInputChange} name="cqty"/>
//                         <CTextfieldNum label="Ideal Quantity" value={formData.salesprice} onchange={handleInputChange}
//                                        name="iqty"/>
//                         <CTextfieldNum label="Warning Quantity" value={formData.salesprice} onchange={handleInputChange}
//                                        name="wqty"/>
//
//                     </div>
//                 }
//                 <button type="submit"
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
//                 </button>
//
//             </form>
//         </div>
//     )
// }