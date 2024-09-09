'use client'
import React from 'react';
import {getCachedProducts, getProducts} from "@/app/stores/_actions/stock_item";
import useCachedItems from "@/app/stores/_actions/client/product-client";
import {useParams} from "next/navigation";

 async function Itemlist() {
     const path = useParams();

     const {items, loading, error} = useCachedItems(path.storeid);
     console.log(await items);
     return (
         <div>
             sammed
         </div>
     );
 }

export default Itemlist;