
'use server'
import  {PrismaClient} from "@prisma/client";


export async function getGroupList() {
    const prisma = new PrismaClient();
    const a = await prisma.mst_group.findMany();
    return  JSON.parse(JSON.stringify(a));
}
export async function getLedgerList() {
    const prisma = new PrismaClient();
    const a = await prisma.mst_ledger.findMany();
    return  JSON.parse(JSON.stringify(a));
}

export async function getGroupNames() {
    const prisma = new PrismaClient();
    const a = await prisma.mst_group.findMany(
        {select: {
            guid: true,
                name: true,
            }}
    );
    const transform = a.map((element)=>(
        {
            value: element.guid,
            name: element.name,
        }
    ))
    return  JSON.parse(JSON.stringify(transform));
}

export async function createLedger(e) {
console.log(e);
}

export async function createGroup(e) {
    console.log(e);
}

  const accountprimarygroups = [
    {
        "name": "Bank Accounts"
    },
    {
        "name": "Bank OD A/c"
    },
    {
        "name": "Branch / Divisions"
    },
    {
        "name": "Capital Account"
    },
    {
        "name": "Cash-in-Hand"
    },
    {
        "name": "Fixed Assets"
    },
    {
        "name": "Current Assets"
    },
    {
        "name": "Current Liabilities"
    },
    {
        "name": "Deposits (Asset)"
    },
    {
        "name": "Direct Expenses"
    },
    {
        "name": "Direct Incomes"
    },
    {
        "name": "Duties & Taxes"
    },
    {
        "name": "Indirect Expenses"
    },
    {
        "name": "Indirect Incomes"
    },
    {
        "name": "Investments"
    },
    {
        "name": "Loans & Advances (Asset)"
    },
    {
        "name": "Loans (Liability)"
    },
    {
        "name": "Misc. Expenses (ASSET)"
    },
    {
        "name": "Provisions"
    },
    {
        "name": "Purchase Accounts"
    },
    {
        "name": "Reserves & Surplus"
    },
    {
        "name": "Sales Accounts"
    },
    {
        "name": "Secured Loans"
    },
    {
        "name": "Stock-in-Hand"
    },
    {
        "name": "Sundry Creditors"
    },
    {
        "name": "Sundry Debtors"
    },
    {
        "name": "Suspense A/c"
    },
    {
        "name": "Unsecured Loans"
    },
    {
        "name": "Vat Levies Clearing"
    }
];