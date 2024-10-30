import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient()
const seeder = {
    "system_account_group": [
        {
            "id": 1,
            "name": "Bank Accounts",
            "accountid": 1,
            "status": 1,
            "uuid": "CCE9907C-8A71-4FD8-8F72-F5DA2C97578D"
        },
        {
            "id": 2,
            "name": "Bank OD A/c",
            "accountid": 1,
            "status": 1,
            "uuid": "B7DB0709-034A-4BB4-B5B8-C10CBBA61F41"
        },
        {
            "id": 3,
            "name": "Branch / Divisions",
            "accountid": 1,
            "status": 0,
            "uuid": "3C128C59-D1C9-4301-8904-1AABA8E1BA2B"
        },
        {
            "id": 4,
            "name": "Capital Account",
            "accountid": 3,
            "status": 1,
            "uuid": "C490D58A-E81D-466E-BEAB-3241EC0FC16D"
        },
        {
            "id": 5,
            "name": "Cash-in-Hand",
            "accountid": 1,
            "status": 1,
            "uuid": "C19A9034-C56F-4EA6-A43A-20F0E037E9FC"
        },
        {
            "id": 7,
            "name": "Other Current Assets",
            "accountid": 1,
            "status": 1,
            "uuid": "25F82606-2377-4712-A1F0-02882ADDD401"
        },
        {
            "id": 8,
            "name": "Current Liabilities",
            "accountid": 2,
            "status": 1,
            "uuid": "B8E7B1A6-448E-48B2-9660-1B751CC5B905"
        },
        {
            "id": 9,
            "name": "Deposits (Asset)",
            "accountid": 1,
            "status": 1,
            "uuid": "EF34E9DF-894D-42FD-A738-E831D5B9B8D9"
        },
        {
            "id": 10,
            "name": "Direct Expenses",
            "accountid": 5,
            "status": 1,
            "uuid": "955F10CE-9A7F-49B9-8D83-98C0031CB1A4"
        },
        {
            "id": 11,
            "name": "Direct Incomes",
            "accountid": 4,
            "status": 1,
            "uuid": "379C2B90-0197-4107-89BC-D33D2F55723A"
        },
        {
            "id": 12,
            "name": "Duties & Taxes",
            "accountid": 5,
            "status": 1,
            "uuid": "6CF54F86-2FAB-4D43-AF44-A558B86ACEB8"
        },
        {
            "id": 13,
            "name": "Others Fixed Assets",
            "accountid": 1,
            "status": 1,
            "uuid": "280F8D80-19C1-42C9-A339-D2D4559E2110"
        },
        {
            "id": 15,
            "name": "Indirect Expenses",
            "accountid": 5,
            "status": 1,
            "uuid": "97C7E929-8CAD-4B4A-A9CB-FADDA3144BBC"
        },
        {
            "id": 16,
            "name": "Indirect Incomes",
            "accountid": 4,
            "status": 1,
            "uuid": "467BB0F9-87B7-4279-9F0B-6883BCC2F1AB"
        },
        {
            "id": 17,
            "name": "Investments",
            "accountid": 1,
            "status": 1,
            "uuid": "4131398B-2978-4BF7-B8D4-4301C4D4CCF3"
        },
        {
            "id": 18,
            "name": "Loans & Advances (Asset)",
            "accountid": 2,
            "status": 1,
            "uuid": "47883CA7-35B6-4C27-B555-96B9DCDC2BA0"
        },
        {
            "id": 19,
            "name": "Loans (Liability)",
            "accountid": 2,
            "status": 1,
            "uuid": "DCE2D175-AE2D-4F7B-BA4B-9BCB6CDCFB3B"
        },
        {
            "id": 20,
            "name": "Misc. Expenses (ASSET)",
            "accountid": 2,
            "status": 1,
            "uuid": "F815EAB8-303B-4F2F-BD52-54C96CB61882"
        },
        {
            "id": 24,
            "name": "Provisions",
            "accountid": 1,
            "status": 1,
            "uuid": "02638EB6-FCB7-4DDE-B9D2-4105BE792DC8"
        },
        {
            "id": 25,
            "name": "Purchase Accounts",
            "accountid": 5,
            "status": 1,
            "uuid": "B50EC9B7-D73A-44FA-857F-95DA9BBA429C"
        },
        {
            "id": 26,
            "name": "Reserves & Surplus",
            "accountid": 3,
            "status": 1,
            "uuid": "1DBF824C-FB21-4CF6-B63A-EF09936C5AB7"
        },
        {
            "id": 27,
            "name": "Salary Advance",
            "accountid": 1,
            "status": 1,
            "uuid": "4938828F-E437-4B39-B2BD-18EB894FC333"
        },
        {
            "id": 28,
            "name": "Sales Accounts",
            "accountid": 4,
            "status": 1,
            "uuid": "EB3D3282-F149-44A7-AFDE-A01AA87BFBC4"
        },
        {
            "id": 29,
            "name": "Secured Loans",
            "accountid": 2,
            "status": 1,
            "uuid": "27FEFA2A-9A75-4DFE-84AF-F521E016066D"
        },
        {
            "id": 30,
            "name": "Stock-in-Hand",
            "accountid": 1,
            "status": 1,
            "uuid": "8EA1A16F-40D5-435D-9D69-2EE51AFAA1CE"
        },
        {
            "id": 31,
            "name": "Sundry Creditors",
            "accountid": 2,
            "status": 1,
            "uuid": "992FF73E-75C6-4A31-AB22-DD3523491E61"
        },
        {
            "id": 32,
            "name": "Sundry Debtors",
            "accountid": 1,
            "status": 1,
            "uuid": "692AC7B4-98AE-4ED5-9D2D-BE8C70D4FBBE"
        },
        {
            "id": 33,
            "name": "Suspense A/c",
            "accountid": 3,
            "status": 1,
            "uuid": "64F47219-1BDB-423F-A503-1AE725D1F464"
        },
        {
            "id": 34,
            "name": "Unsecured Loans",
            "accountid": 2,
            "status": 1,
            "uuid": "5B91A25E-B697-43B4-9E8C-4DCD32C07429"
        },
        {
            "id": 35,
            "name": "Vat Levies Clearing",
            "accountid": 2,
            "status": 1,
            "uuid": "E4643028-8220-4BEA-9B04-A56BD1880B02"
        }
    ],
    "chart_of_account": [
        {
            "id": 1,
            "uuid": "",
            "account_code": "",
            "account_name": "Sales",
            "account_group": "",
            "account_type": 0,
            "opening_balance": 0.00,
            "description": null,
            "storeid": null,
            "createdby": null
        },
        {
            "id": 2,
            "uuid": "",
            "account_code": "",
            "account_name": "Purchases",
            "account_group": "",
            "account_type": 0,
            "opening_balance": 0.00,
            "description": null,
            "storeid": null,
            "createdby": null
        },
        {
            "id": 3,
            "uuid": "",
            "account_code": "",
            "account_name": "Cash",
            "account_group": "",
            "account_type": 0,
            "opening_balance": 0.00,
            "description": null,
            "storeid": null,
            "createdby": null
        },
        {
            "id": 4,
            "uuid": "",
            "account_code": "",
            "account_name": "Capital",
            "account_group": "",
            "account_type": 0,
            "opening_balance": 0.00,
            "description": null,
            "storeid": null,
            "createdby": null
        },
        {
            "id": 5,
            "uuid": "",
            "account_code": "",
            "account_name": "Sales Returns",
            "account_group": "",
            "account_type": 0,
            "opening_balance": 0.00,
            "description": null,
            "storeid": null,
            "createdby": null
        },
        {
            "id": 6,
            "uuid": "",
            "account_code": "",
            "account_name": "Purchase Returns",
            "account_group": "",
            "account_type": 0,
            "opening_balance": 0.00,
            "description": null,
            "storeid": null,
            "createdby": null
        },
        {
            "id": 7,
            "uuid": "",
            "account_code": "",
            "account_name": "Sundry Debtors",
            "account_group": "",
            "account_type": 0,
            "opening_balance": 0.00,
            "description": null,
            "storeid": null,
            "createdby": null
        },
        {
            "id": 8,
            "uuid": "",
            "account_code": "",
            "account_name": "Sundry Creditors",
            "account_group": "",
            "account_type": 0,
            "opening_balance": 0.00,
            "description": null,
            "storeid": null,
            "createdby": null
        }
    ],
    "stock_item_category": [
        {
            "id": 1,
            "name": "others",
            "status": 1,
            "createdby": "system",
            "storeid": "system",
        }
    ],
    "stock_item_group": [
        {
            "id": 1,
            "name": "others",
            "category": 1,
            "status": 1,
            "createdby": "system",
            "storeid": "system",
        }
    ],
    "system_account_category": [
        {"id": 1, "name": "Non-Current assets", "accountid": 1},
        {"id": 2, "name": "Current Assets", "accountid": 1},
        {"id": 3, "name": "Non-Current Liability", "accountid": 2},
        {"id": 4, "name": "Current Liability", "accountid": 2},
        {"id": 5, "name": "Capital Accounts", "accountid": 3},
        {"id": 6, "name": "Operating Income (Sales)", "accountid": 4},
        {"id": 7, "name": "Non-Operating income", "accountid": 4},
        {"id": 8, "name": "Cost of Sales", "accountid": 5},
        {"id": 9, "name": "Operating Expenses", "accountid": 5},
        {"id": 10, "name": "Non-Operating Expenses", "accountid": 5}
    ],
    "system_accounts": [
        {"id": 1, "name": "Assets"},
        {"id": 2, "name": "Liability"},
        {"id": 3, "name": "Equity"},
        {"id": 4, "name": "Income"},
        {"id": 5, "name": "Expense"}
    ],
    "voucher_type": [
        {
            "id": 1,
            "name": "Attendance",
            "parent": "Attendance",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 0
        },
        {
            "id": 2,
            "name": "Contra",
            "parent": "Contra",
            "numbering_method": "Default",
            "is_deemedpositive": 0,
            "affects_stock": 0
        },
        {
            "id": 3,
            "name": "Credit Note",
            "parent": "Credit Note",
            "numbering_method": "Default",
            "is_deemedpositive": 0,
            "affects_stock": 0
        },
        {
            "id": 4,
            "name": "Debit Note",
            "parent": "Debit Note",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 0
        },
        {
            "id": 5,
            "name": "Delivery Note",
            "parent": "Delivery Note",
            "numbering_method": "Default",
            "is_deemedpositive": 0,
            "affects_stock": 1
        },
        {
            "id": 6,
            "name": "Job Work In Order",
            "parent": "Job Work In Order",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 0
        },
        {
            "id": 7,
            "name": "Job Work Out Order",
            "parent": "Job Work Out Order",
            "numbering_method": "Default",
            "is_deemedpositive": 0,
            "affects_stock": 0
        },
        {
            "id": 8,
            "name": "Journal",
            "parent": "Journal",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 0
        },
        {
            "id": 9,
            "name": "Material In",
            "parent": "Material In",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 1
        },
        {
            "id": 10,
            "name": "Material Out",
            "parent": "Material Out",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 1
        },
        {
            "id": 11,
            "name": "Memorandum",
            "parent": "Memorandum",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 0
        },
        {
            "id": 12,
            "name": "Payment",
            "parent": "Payment",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 0
        },
        {
            "id": 13,
            "name": "Payroll",
            "parent": "Payroll",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 0
        },
        {
            "id": 14,
            "name": "Physical Stock",
            "parent": "Physical Stock",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 1
        },
        {
            "id": 15,
            "name": "Purchase",
            "parent": "Purchase",
            "numbering_method": "Default",
            "is_deemedpositive": 0,
            "affects_stock": 0
        },
        {
            "id": 16,
            "name": "Purchase Order",
            "parent": "Purchase Order",
            "numbering_method": "Default",
            "is_deemedpositive": 0,
            "affects_stock": 0
        },
        {
            "id": 17,
            "name": "Receipt",
            "parent": "Receipt",
            "numbering_method": "Default",
            "is_deemedpositive": 0,
            "affects_stock": 0
        },
        {
            "id": 18,
            "name": "Receipt Note",
            "parent": "Receipt Note",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 1
        },
        {
            "id": 19,
            "name": "Rejections In",
            "parent": "Rejections In",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 1
        },
        {
            "id": 20,
            "name": "Rejections Out",
            "parent": "Rejections Out",
            "numbering_method": "Default",
            "is_deemedpositive": 0,
            "affects_stock": 1
        },
        {
            "id": 21,
            "name": "Reversing Journal",
            "parent": "Reversing Journal",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 0
        },
        {
            "id": 22,
            "name": "Sales",
            "parent": "Sales",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 0
        },
        {
            "id": 23,
            "name": "Sales Order",
            "parent": "Sales Order",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 0
        },
        {
            "id": 24,
            "name": "Stock Journal",
            "parent": "Stock Journal",
            "numbering_method": "Default",
            "is_deemedpositive": 1,
            "affects_stock": 1
        }
    ],
    "system_units": [
        {
            "id": 1,
            "name": "pcs",
            "description": "piece",
            "createdby": "system",
            "storeid": "system",
            "status": 1
        },
        {
            "id": 2,
            "name": "box ",
            "description": "box",
            "createdby": "system",
            "storeid": "system",
            "status": 1
        },
        {
            "id": 3,
            "name": "bag",
            "description": "bag",
            "createdby": "system",
            "storeid": "system",
            "status": 1
        },
        {
            "id": 4,
            "name": "pack",
            "description": "pack",
            "createdby": "system",
            "storeid": "system",
            "status": 1
        },
        {
            "id": 5,
            "name": "gram",
            "description": "gram",
            "createdby": "system",
            "storeid": "system",
            "status": 1
        },
        {
            "id": 6,
            "name": "glass",
            "description": "room",
            "createdby": "system",
            "storeid": "system",
            "status": 1
        },
        {
            "id": 7,
            "name": "others",
            "description": null,
            "createdby": "system",
            "storeid": "system",
            "status": 1
        }
    ],
    "roles": [
        {
            "id": 1,
            "role": "owner",
            "description": "owner",
            "status": 1,
            "uuid": "owner_xd"
        },
        {
            "id": 2,
            "role": "admin",
            "description": "admin",
            "status": 1,
            "uuid": "admin_xd"
        },
        {
            "id": 3,
            "role": "manager",
            "description": "manager",
            "status": 1,
            "uuid": "manager_xd"
        },
        {
            "id": 5,
            "role": "salesperson",
            "description": "salesperson",
            "status": 1,
            "uuid": "salesperson_xd"
        }
    ]
}

async function main() {
    const [category,group,coa,accountgroup,accounts,vouchertype,units]= await prisma.$transaction([

     prisma.stock_item_category.createMany({
        data:seeder.stock_item_category
    }),
     prisma.stock_item_group.createMany({
        data:seeder.stock_item_group
    }),
      prisma.default_coa.createMany({
        data: seeder.chart_of_account
    }),
         prisma.system_account_group.createMany({
        data: seeder.system_account_group
    }),
     prisma.system_accounts.createMany({
        data: seeder.system_accounts
    }),
     prisma.voucher_type.createMany({
        data: seeder.voucher_type
    }),
     prisma.stock_item_unit.createMany(
        {
            data: seeder.system_units
        }
    ),
        prisma.system_roles.createMany(
            {
                data: seeder.roles
            }
        ),
    ]);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })