import React from 'react';
import {CDropDownWithOnChange} from "@/components/app/ktextfield";

const typex = [
    {
        "id": 3,
        "name": "Draft"
    },
    {
        "id": 4,
        "name": "Pending"
    },
    {
        "id": 4,
        "name": "Sent"
    },

];
function Statuscombo(props) {
    return (
        <div>
            <CDropDownWithOnChange
                label="Status"
                name='type'
                items={typex}
            />
        </div>
    );
}

export default Statuscombo;