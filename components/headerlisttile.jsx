
import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const Headerlisttile = (prop ) => {
  return (
      <div className="justify-end ">


      <Card>
          <CardHeader>
              <CardTitle>
              <div className="flex flex-row justify-between items-center">
                  {prop.title}
                  <Button className="flex ml-auto">
                      <Link href={prop.ontap}>{prop.bname}</Link>
                  </Button>
              </div>
              </CardTitle>
              <CardDescription>
                  {prop.subtitle}
              </CardDescription>
          </CardHeader>
          <CardContent>
              {prop.children}
          </CardContent>
      </Card>
      </div>
  //   <div className="flex justify-between flex-col md:flex-row gap-4  mb-14">
  //     <div>
  // <h1 className='font-bold text-3xl'>{}</h1>
  // <p className='text-gray-950'>{prop.subtitle}</p>
  //     </div>
  //     <div>
  //
  //     </div>
  //   </div>
  )
}
export function HeaderWithButton  (prop)  {
    return (
        <div className="flex justify-between flex-col md:flex-row gap-4  mb-14">
            <div>
                <h1 className='font-bold text-3xl'>{prop.title}</h1>
                <p className='text-gray-950'>{prop.subtitle}</p>
            </div>
            <div>
                <Button onClick={prop.ontap}>
                    {prop.bname}
                </Button>
            </div>
        </div>
    )
}

export function HeaderListTileDialog (prop)  {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex flex-row justify-between items-center">
                        {prop.title}
                        <div className="flex ml-auto">
                            {prop.buttonx}
                        </div>
                    </div>
                </CardTitle>
                <CardDescription>
                    {prop.subtitle}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {prop.children}
            </CardContent>
        </Card>
        // <div className="flex justify-between flex-col md:flex-row gap-4  mb-14">
        //     <div>
        //         <h1 className='font-bold text-3xl'>{prop.title}</h1>
        //         <p className='text-gray-950'>{prop.subtitle}</p>
        //     </div>
        //     <div>
        //         {prop.buttonx}
        //     </div>
        // </div>
    )
}


export default Headerlisttile
