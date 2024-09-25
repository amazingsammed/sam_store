// 'use client'
import React from 'react'

const CTextfield = (prop) => {
    return (
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>

            <input
                type="text"
                name={prop.name}
                value={prop.value}
                onChange={prop.onchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prop.label} />
        </div>
    )
}

export function CTextfieldR(prop) {
        return (
            <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
                <input
                required
                    type="text"
                    name={prop.name}
                    // value={prop.value}
                    // onChange={prop.onchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prop.label} />
            </div>
        )
}
export function CTextfieldNumR(prop) {
    return (
        <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
        <input
        required
            type="number"
            name={prop.name}
            value={prop.value}
            onChange={prop.onchange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prop.label} />
    </div>
    )
}
export function CTextfieldNum(prop) {
    return (
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{prop.label}</label>
            <input
                type="number"
                name={prop.name}
                value={prop.value}
                onChange={prop.onchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={prop.label} />
        </div>
    )
}


export function CCheckBox(prop){
    return (
        <div className="flex items-center mb-4">
        <input id={prop.name + "checkbox"} name={prop.name} type="checkbox" onChange={prop.onChange} checked={prop.value}

               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <label form="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{prop.label}</label>
    </div>
    )
}


export function CDropDown  (prop)  {
  return (
    <div className="max-w-sm ">
    <label form={prop.label + "checkbox"} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">{"Select "+ prop.label}</label>
    <select id={prop.label + "checkbox"} 
     // onChange={prop.onchange}
     name={prop.name}
     value={prop.value}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">{"Choose a "+prop.label}</option>
        {prop.items.map((val,i)=>{
            return(
             <option value={val.value?val.value:val.id?val.id:val.name} key={i}>{val.name}</option>
            );
})}
    
    </select>
</div>
  )
}

export function CDropDownWithOnChange  (prop)  {
    return (
        <div className="max-w-sm ">
            <label form={prop.label + "checkbox"} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">{"Select "+ prop.label}</label>
            <select id={prop.label + "checkbox"} required
                onChange={prop.onchange}
                    name={prop.name}
                    value={prop.value}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">{"Choose a "+prop.label}</option>
                {prop.items.map((val,i)=>{
                    return(
                        <option value={val.id?val.id:val.name} key={i}>{val.name}</option>
                    );
                })}

            </select>
        </div>
    )
}

export function UUIDDropDownWithOnChange  (prop)  {
    return (
        <div className="max-w-sm ">
            <label form={prop.label + "checkbox"} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">{"Select "+ prop.label}</label>
            <select id={prop.label + "checkbox"} required
                    onChange={prop.onchange}
                    name={prop.name}
                    value={prop.value}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">{"Choose a "+prop.label}</option>
                {prop.items.map((val,i)=>{
                    return(
                        <option value={val.uuid?val.uuid:val.name} key={i}>{val.name}</option>
                    );
                })}

            </select>
        </div>
    )
}

export default CTextfield






{/* <div class="flex">
                    <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                            </li>
                        </ul>
                    </div>
                    <div class="relative w-full">
                        <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search" required />
                        <button type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg></button>
                    </div>
                </div> */}





//         <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

//         <div class="flex items-center mb-4">
//             <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
//             <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
//         </div>
//         <div class="flex items-center">
//             <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
//             <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
//         </div>
//         <div class="flex items-center">
//             <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
//             <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
//         </div>
//         <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
//             <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
//             <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
//         </div>
//         <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
//             <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
//             <label for="bordered-checkbox-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
//         </div>
//     </form>
//     <form class="max-w-sm mx-auto">
//         <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
//         <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//             <option selected>Choose a country</option>
//             <option value="US">United States</option>
//             <option value="CA">Canada</option>
//             <option value="FR">France</option>
//             <option value="DE">Germany</option>
//         </select>
//     </form>
//     <form class="max-w-sm mx-auto">
//         <label for="years" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
//         <select id="years" size="5" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//             <option>2016</option>
//             <option>2017</option>
//             <option>2018</option>
//             <option>2019</option>
//             <option>2020</option>
//             <option>2021</option>
//             <option>2022</option>
//         </select>
//     </form>
//     <form class="max-w-[8rem] mx-auto">
//         <label for="time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time:</label>
//         <div class="relative">
//             <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
//                 <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                     <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
//                 </svg>
//             </div>
//             <input type="time" id="time" class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="09:00" max="18:00" value="00:00" required />
//         </div>
//     </form>
// </div>

// <form class="max-w-sm mx-auto">
//                 <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
//                 <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                     <option selected>Choose a country</option>
//                     <option value="US">United States</option>
//                     <option value="CA">Canada</option>
//                     <option value="FR">France</option>
//                     <option value="DE">Germany</option>
//                 </select>

//             </form>