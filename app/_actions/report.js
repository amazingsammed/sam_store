'use server'


import {PrimeChecker} from "@/app/_actions/_checker";
import prisma from "@/lib/prisma";
import {queryClean} from "@/app/shared/sharedfunctions";

export async function getTrialBalance(storeid) {
    const results = [];
    try {
        const userid = await PrimeChecker(storeid);

        const  data= await prisma.$queryRaw ` 
SELECT
\tchart_of_account.account_name, 
\tchart_of_account.id, 
\tchart_of_account.account_code,
\tCASE when account_type =1
\tand opening_balance >=0 THEN opening_balance
\tWHEN account_type in (2,3,4,5) AND opening_balance <0 THEN
\tABS(opening_balance) else 0
\tEND as debit,
\tCASE when account_type =1
\tand opening_balance < 0 THEN abs(opening_balance)
\tWHEN account_type in (2,3,4,5) AND opening_balance >= 0 THEN
\topening_balance else 0
\tEND as credit
FROM
\tchart_of_account
WHERE
\tchart_of_account.storeid = ${queryClean(storeid)} AND
\tchart_of_account.\`status\` = 1
        `;
        console.log(data);
        return JSON.parse(JSON.stringify(data));
    } catch (e) {
        return [];
    }

    //return currentUserCounter.count;
}
