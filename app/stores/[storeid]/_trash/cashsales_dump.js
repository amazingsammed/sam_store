// 'use client';
//
// import React, {useState} from 'react';
// import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
// import {MdCheck, MdDeleteOutline} from "react-icons/md";
// import Headerlisttile from "@/components/headerlisttile";
// import {ItemListCombo} from "@/app/stores/[storeid]/cashsales/cashsales/_component/itemlistcombo";
// import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
// import {Check} from "lucide-react";
// import {cn} from "@/lib/utils";
// import {Button} from "@/components/ui/button";
//
// function Cashsalepage(prop) {
//     const showlists = true;
//     const [list, setList] = useState([]);
//     const [showlist, setShowList] = useState(false);
//     const [newitem, setnewitem] = useState({
//         "name":'','qty':'','amt':'','rate':''
//     });
//     function handlesubmit(e){
//         setList([
//             ...list,newitem
//         ]);
//         setnewitem({
//             "name":'','qty':0,'amt':'','rate':0
//         })
//     }
//     function handlechange(e){
// // console.log(e);
//         setnewitem({...newitem, [e.target.name]: e.target.value});
//     }
//     function handlelistclicked(item){
//         setnewitem({
//             ...newitem,
//             "name":item.name,
//             'rate':item.salesprice
//         })
//     }
//     function removeitem(num){
//         setList(list.filter((_, index) => index !== num));
//     }
//     const calculateTotal =() =>{
//         return list.reduce((total, itemx) =>total + itemx['qty'] * itemx['rate'],0);
//     }
//
//     function handleSave(){
//
//     }
//
//
//
//     return (
//         <div className="grid grid-cols-12">
//
//             <div className='h-[80dvh]  justify-between col-span-10'>
//                 <Headerlisttile title='Cash Invoice' subtitle='Account Name : Cash' bname="Save" ontap={handleSave}/>
//                 <div className="p-4 mb-auto overflow-y-auto ">
//                     <form action={handlesubmit}>
//                         <div className="overflow-y-auto ">
//
//                             <Table>
//                                 <TableHeader>
//                                     <TableRow>
//                                         <TableHead className="w-[10]">No. </TableHead>
//                                         <TableHead>Item Name</TableHead>
//                                         <TableHead className="w-[30]">Rate</TableHead>
//                                         <TableHead className="w-[30]">Quantity</TableHead>
//                                         <TableHead className="w-[30]">Amount</TableHead>
//                                         <TableHead> </TableHead>
//                                     </TableRow>
//                                 </TableHeader>
//                                 <TableBody>
//                                     {list.map((element, index) => <TableRow key={index}>
//                                         <TableCell className="font-medium w-[10]">{index + 1}</TableCell>
//                                         <TableCell className="font-medium">{element['name']}</TableCell>
//                                         <TableCell>{element['rate']}</TableCell>
//                                         <TableCell>{element['qty']}</TableCell>
//                                         <TableCell>{element['qty'] * element['rate']}</TableCell>
//                                         <TableCell>
//                                             <button onClick={() => removeitem(index)}>
//
//                                                 <MdDeleteOutline size="20"/>
//                                             </button>
//                                         </TableCell>
//
//
//                                     </TableRow>)}
//                                     <TableRow>
//
//
//                                         <TableCell className="font-medium w-[10]">index </TableCell>
//                                         <TableCell>
//                                             <ItemListCombo list ={prop.cacheditems} onChangeValue={handlelistclicked}/>
//                                         </TableCell>
//                                         {/* <TableCell className="font-medium"><TableInput name='name' value={newitem.name}*/}
//                                         {/*                                                onchange={handlechange} onFocus={()=>setShowList(true)}*/}
//
//
//                                         {/* /></TableCell>*/}
//                                         <TableCell className="w-[30]">{newitem.rate}</TableCell>
//                                         <TableCell className="w-[30]"><TableInputn name='qty' value={newitem.qty}
//                                                                                    onFocus={()=>setShowList(false)}
//                                                                                    onchange={handlechange}/></TableCell>
//                                         {/*<TableCell className="w-[30]"><TableInputn name='rate' value={newitem.rate}*/}
//                                         {/*                                           onchange={handlechange}/></TableCell>*/}
//
//                                         <TableCell className="w-[30]">{newitem.qty * newitem.rate}</TableCell>
//                                         <TableCell>
//                                             <button type='submit'>
//                                                 <MdCheck size="20"/>
//                                             </button>
//                                         </TableCell>
//
//
//                                     </TableRow>
//
//                                 </TableBody>
//                                 <TableFooter>
//                                     <TableRow>
//
//
//                                         <TableCell className="font-medium w-[10]">Total </TableCell>
//                                         <TableCell className="font-medium"> </TableCell>
//                                         <TableCell className="w-[30]"> </TableCell>
//                                         <TableCell className="w-[30]"> </TableCell>
//                                         <TableCell className="w-[30]">{calculateTotal()} </TableCell>
//                                         <TableCell>
//
//                                         </TableCell>
//
//
//                                     </TableRow>
//                                 </TableFooter>
//                             </Table>
//                         </div>
//                     </form>
//
//                 </div>
//
//             </div>
//
//             {/*            {showlists && <div className=" right-0 top-6 flex flex-col  col-span-2 ml-3 px-2 pt-3 bg-slate-800 ">*/}
//             {/*                <TableInput placeholder={"Search Item"}/>*/}
//             {/*                <div >*/}
//
//             {/*                {prop.cacheditems.map((element, i) => (*/}
//             {/*<div>*/}
//
//             {/*                    <Button*/}
//             {/*                        className="mt-2  bg-transparent"*/}
//             {/*                        key={i}*/}
//             {/*                        value={element.product_id}*/}
//             {/*                        onClick={() => handlelistclicked(element)}*/}
//             {/*                    >*/}
//             {/*                        <div className="px-2">*/}
//             {/*                            {i + 1}*/}
//             {/*                        </div>*/}
//             {/*                        {element.name}*/}
//             {/*                    </Button>*/}
//             {/*    <hr/>*/}
//             {/*</div>*/}
//             {/*                ))}*/}
//             {/*                </div>*/}
//
//             {/*            </div>*/}
//             {/*            }*/}
//         </div>
//     );
// }
//
// export default Cashsalepage;
//
// const inputdecoration = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded p-3"
//
// function TableInput(prop) {
//
//     return (
//         <input
//             onBlur={prop.onBlur}
//             onFocus={prop.onFocus}
//             type="text"
//             name={prop.name}
//             value={prop.value}
//             placeholder={prop.placeholder}
//             onChange={prop.onchange}
//             className={inputdecoration} required />
//     );
// }
// function TableInputn(prop) {
//
//     return (
//         <input
//             type="number"
//             name={prop.name}
//             onFocus={prop.onFocus}
//             value={prop.value}
//             onChange={prop.onchange}
//             className={inputdecoration} required />
//     );
// }
//
//
//
