'use client';

import React, {useEffect, useState} from 'react';

import {membersColumns} from "@/app/stores/[storeid]/settings/members/_component/members_columns";
import {getStoreMembers} from "@/app/_actions/stores";
import {useParams} from "next/navigation";
import {DataTable} from "@/app/stores/[storeid]/settings/members/_component/members_datatable";
import {AddMemberForm} from "@/app/stores/[storeid]/settings/members/_component/addmember_form";

function MembersTable({data}) {
    const members =data;


    return (
        <div>
            <DataTable columns={membersColumns} data={members} filter={'name'} addButton={<AddMemberForm></AddMemberForm>} />
        </div>
    );
}

export default MembersTable;