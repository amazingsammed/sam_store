
import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Headerlisttile = (prop) => {
  return (
    <div className="flex justify-between flex-col md:flex-row gap-4  mb-14">
      <div>
  <h1 className='font-bold text-3xl'>{prop.title}</h1>
  <p className='text-gray-950'>{prop.subtitle}</p>
      </div>
      <div>
  <Button >
    <Link href={prop.ontap}>{prop.bname}</Link>
    </Button>
      </div>
    </div>
  )
}

export function HeaderListTileDialog (prop)  {
    return (
        <div className="flex justify-between flex-col md:flex-row gap-4  mb-14">
            <div>
                <h1 className='font-bold text-3xl'>{prop.title}</h1>
                <p className='text-gray-950'>{prop.subtitle}</p>
            </div>
            <div>
                {prop.buttonx}
            </div>
        </div>
    )
}


export default Headerlisttile
