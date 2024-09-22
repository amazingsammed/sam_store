'use client';

import React, {useEffect, useState} from 'react';

import {membersColumns} from "@/app/stores/[storeid]/settings/_component/_members/members_columns";
import {getStoreMembers} from "@/app/_actions/stores";
import {useParams} from "next/navigation";
import {DataTable} from "@/app/stores/[storeid]/settings/_component/_members/members_datatable";
import {AddMemberForm} from "@/app/stores/[storeid]/settings/_component/_members/addmember_form";

function MembersTable(props) {
    const [members, setMembers] = useState([]);
    const params = useParams();

    useEffect(() => {
        const fetcher = async () => {
            const data = await getStoreMembers(params.storeid);
            setMembers(data);
        };
        fetcher();
    }, []);

    return (
        <div>
            <DataTable columns={membersColumns} data={members} filter={'name'} addButton={<AddMemberForm></AddMemberForm>} />
        </div>
    );
}

export default MembersTable;