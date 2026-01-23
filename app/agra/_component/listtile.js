import React from 'react';
import {MdChevronRight, MdMenu} from "react-icons/md";

function Listtile({title}) {
    return (
        <div className="flex flex-row justify-between items-center py-3 px-2">
        <div className="flex flex-row gap-4 items-center">
            <MdMenu size={24}/>
            <div>{title}</div>
        </div>
            <MdChevronRight></MdChevronRight>
        </div>
    );
}

export default Listtile;