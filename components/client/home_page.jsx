"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

const data = [
  { title: "Cars", submenu: [{ title: "toyota" }, { title: "benz" }] },
  { title: "Laptop", submenu: [{ title: "dell" }, { title: "hp" }] },
];

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [submenulist, setsubmenu] = useState([]);
  const [cat, setCate] = useState({});

  return (
    <div className="m-12 p-auto w-[200px]">
      <button
        variant="outline"
        role="combobox"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        className="w-[200px] justify-between outline rounded py-1 "
      >
        {value !=""
          ? value
          : "Select framework..."}
      </button>
      {open && (
        <div className="bg-gray-50  rounded container py-2">
          {submenulist.length == 0 && (
            <div>
              {data.map((a) => (
                <div
                  className="md:block p-2 md:bg-green-40 "
                  key={a["title"]}
                  onClick={() => {
                    setCate(a["title"]);
                    setsubmenu(a["submenu"]);
                  }}
                >
                  {a["title"]}{" "}
                </div>
              ))}
            </div>
          )}

          <div>
            {" "}
            {submenulist.length > 0 &&
             (<>
             <p className="block md:block p-1 bg-green-500 rounded" onClick={() => {
                    setsubmenu([]);
                  }}> {cat}</p>
                { submenulist.map((a) => (
                <div className="block md:block py-2" 
                onClick={() => {
                   setValue(a["title"])
                   setOpen(false)
                   setsubmenu([])
                  }}
                >{a["title"]}</div>
              ))}</>
            )
              }
          </div>
        </div>
      )}
    
    </div>
  );
};

export default HomePage;
