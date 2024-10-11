'use client'
import React from 'react';
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