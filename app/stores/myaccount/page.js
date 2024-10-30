import React from 'react';
import MainContainer from "@/components/app/mainContainer";
import {Card} from "@/components/ui/card";
import {CardContent, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {getServerSession} from "next-auth";
import Storesidebar from "@/app/stores/_component/storesidebar";
import {Button} from "@/components/ui/button";
import {ChangePassword} from "@/app/stores/myaccount/_component/change_password_form";

async function Page(props) {
    const tokens = await getServerSession({
        callbacks: {
            async jwt({token, user}) {
                if (user) {
                    token.uuid = user.uuid;
                    token.name = user.name;
                    token.email = user.email;
                }
                return token;
            },
            session: ({session, token, user}) => {
                session.user = {
                    uuid: token.uuid,
                    name: token.name,
                    email: token.email
                };
                return session;
            },
        },
    });
    console.log(tokens);
    return (
        <div className="flex flex-row h-full w-full">
            <Storesidebar/>
        <div className="w-full">
            <MainContainer>

            <Card className={`p-4 m-4   flex gap-6 flex-col`}>
                <CardTitle className={`flex flex-row items-center justify-between`}>
                <div>
                    My Account info

                </div>
                    <div>
                        <ChangePassword/>
                    </div>
                </CardTitle>
                <CardContent className={`gap-3 flex flex-col`}>
                    <div className={`gap-2 flex-col flex`}>
                        <Label id={`name`}>Account Name</Label>
                        <Input id={`name`} name={`name`} value={tokens.user.name}/>
                    </div>
                    <div className={`gap-2 flex-col flex`}>
                        <Label id={`email`}>Account Email</Label>
                        <Input id={`email`} name={`email`} value={tokens.user.email}/>
                    </div>
                </CardContent>
            </Card>
            </MainContainer>
        </div>
        </div>
    );
}

export default Page;