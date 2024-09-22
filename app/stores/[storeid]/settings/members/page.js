import React from 'react';
import MembersTable from "@/app/stores/[storeid]/settings/_component/_members/members_table";
import SettingsMenu from "@/app/stores/[storeid]/settings/_component/settingspage";

function Page(props) {
    return (
        <div>
      <h1>Members</h1>
             < MembersTable />

        </div>
    );
}

export default Page;