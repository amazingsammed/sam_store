import {
    MdDashboard, MdDashboardCustomize, MdEditDocument,
    MdInventory, MdInventory2,
    MdNote, MdReceipt,
    MdReport,
    MdSettings,
    MdShoppingCartCheckout,
    MdTrendingUp
} from "react-icons/md";
import React from "react";

const backgroudcolor = "100dd28"


const size = 24;
export const systemRight = {
    'testRight': "testRight",
    'readSettings': 'read:settings',
    'createUser': 'create:user',
    'updateUser': 'update:user',
    'deleteUser': 'delete:user',
    'readUser': 'read:user',
    'createSales': 'create:sales',
    'updateSales': 'update:sales',
    'deleteSales': 'delete:sales',
    'readSales': 'read:sales',
    'createPurchase': 'create:purchase',
    'updatePurchase': 'update:purchase',
    'deletePurchase': 'delete:purchase',
    'readPurchase': 'read:purchase',
    'createItem': 'create:item',
    'updateItem': 'update:item',
    'deleteItem': 'delete:item',
    'readItem': 'read:item',
}

export const permission = [{
    "role": "admin", "right": [systemRight.testRight, systemRight.readSettings, systemRight.createItem]
}]

export const theSidemenu = [// {
    //     'title': "Home",
    //     'icon': <MdHome size={size}/>,
    //     'hasItems': false,
    //     'url': "/"
    // },
    {
        'title': "Dashboard", 'icon': <MdDashboard size={size}/>, 'hasItems': false, 'url': "/"
    },

    {
        'title': "Sales", 'icon': <MdNote size={size}/>, 'hasItems': true, 'url': "/sales", 'items': [// {
            //     'name': "Quote",
            //     'url': "/sales/quote"
            // },
            // {
            //     'name': "Accountspayable Order",
            //     'url': "/sales/salesorder"
            // },
            // {
            //     'name': "Accountspayable",
            //     'url': "/sales/invoice"
            // },
            // {
            //     'name': "Refund",
            //     'url': "/sales/refund"
            // },
            {
                'name': "Customers", 'url': "/sales/customer"
            },]
    }, {
        'title': "Purchases", 'icon': <MdReport size={size}/>, 'hasItems': true, 'url': "/purchases", 'items': [// {
            //     'name': "Purchases order",
            //     'url': "/purchases/purchaseorder"
            // },
            // {
            //     'name': "Accounts Payables",
            //     'url': "/purchases/accountspayables"
            // },
            // {
            //     'name': "Payments",
            //     'url': "/purchases/payments"
            // },
            {
                'name': "Suppliers", 'url': "/purchases/supplier"
            },]
    }, {
        'title': "Items", 'icon': <MdInventory size={size}/>, 'hasItems': true, 'url': "/items", 'items': [{
            'name': "MultiCreate", 'url': "/items/multicreate",
        }, {
            'name': "Category", 'url': "/items/category"
        }, {
            'name': "Groups", 'url': "/items/group"
        }, {
            'name': "Units", 'url': "/items/units"
        },]
    }, // ,
    {
        'title': "Reports", 'icon': <MdReport size={size}/>, 'hasItems': false, 'url': "/report"
    },


    {
        'title': "Voucher",
        'icon': <MdNote size={size}/>,
        'hasItems': true,
        'url': '/voucher',
        'items': [{'name': "Sales", 'url': '/voucher/sales'}, {
            'name': "Purchases", 'url': '/voucher/purchases'
        }, {'name': "Receipt", 'url': '/voucher/receipt'}]
    }];
export const theSidemenu2 = [

    {
        'title': "Dashboard",
        'icon': <MdDashboardCustomize size={size}/>,
        'hasItems': false,
        'url': ""
    },
    {
        'title': "Sales",
        'icon': <MdTrendingUp size={size}/>,
        'hasItems': true,
        'url': "/sales",
        'items': [
            {
                'title': "Main",
                'items': [
                    {
                        'title': 'Sales List',
                        'url': "/sales"
                    },
                    {
                        'title': 'Qoute',
                        'url': "/sales/quote"
                    },
                    {
                        'title': 'Invoice',
                        'url': "/sales/invoice"
                    },
                    {
                        'title': 'Sales Orders',
                        'url': "/sales/salesorder"
                    },
                    {
                        'title': 'Customers',
                        'url': "/sales/customer"
                    },
                    {
                        'title': 'Sales Refund',
                        'url': "/sales/refund"
                    },
                ]
            }, {
                'title': "Forms",
                'items': [
                    {
                        'title': 'Create Cash Sales',
                        'url': "/sales/cashsales"
                    },
                    {
                        'title': 'Create Refund',
                        'url': "/sales/cashsales"
                    },

                    {
                        'title': 'Create Qoute',
                        'url': "/sales/quote"
                    },
                    {
                        'title': 'Create Invoice',
                        'url': "/sales/invoice"
                    },
                    {
                        'title': 'Create Sales Orders',
                        'url': "/sales/salesorder"
                    },
                    {
                        'title': 'Create Credit Sales',
                        'url': "/sales/cashsales"
                    },
                ]
            }
        ]
    },
    {
        'title': "Purchases", 'icon': <MdShoppingCartCheckout size={size}/>, 'hasItems': true, 'url': "/purchases", 'items': [{
            'title': "Main", 'items': [
                {
                    'title': "Purchases List", 'url': "/purchases"
                },
                {
                'title': "Purchases order", 'url': "/purchases/purchaseorder"
            },
                {
                'title': "Accounts Payables", 'url': "/purchases/accountspayables"
            },
                {
                'title': "Payments", 'url': "/purchases/payments"
            },
            ]
        },]
    },
    {
        'title': "Items", 'icon': <MdInventory2 size={size}/>, 'hasItems': true, 'url': "/items",
        'items': [
            {
                'title': "basic", 'items': [
                    {
                        'title': "Items", 'url': "/items"
                    },
                    {
                        'title': "Category", 'url': "/items/category"
                    }, {
                        'title': "Groups", 'url': "/items/group"
                    }, {
                        'title': "Units", 'url': "/items/units"
                    },]
            },
            {
                'title': "forms", 'items': [
                    {
                        'title': "Create Item", 'url': "/items/addItem",
                    },
                    {
                        'title': "Multi-Create Item", 'url': "/items/multicreate",
                    },

                ]
            },

        ]
    }, // ,
    {
        'title': "Reports", 'icon': <MdReceipt size={size}/>,
        'hasItems': true,
        'url': "/report",
        'items': [
            {
                'title': "Basic", 'items': [

                    {
                        'title': "Sales", 'url': "/settings/general"
                    }, {
                        'title': "Purchases", 'url': "/settings/storedetails"
                    },
                    {
                        'title': "Payments", 'url': "/settings/accountgroup",
                    },
                    {
                        'title': "Receipt", 'url': "/settings/accountgroup",
                    },
                ]
            },
            {
                'title': "accounting", 'items': [
                    {
                        'title': "Trial Balance", 'url': "/settings/defaultAccounts",
                    },
                    {
                        'title': "Day Books", 'url': "/settings/chartofaccounts",
                    },
                    {
                        'title': "Balance Sheet", 'url': "/settings/defaultAccounts",
                    },
                    {
                        'title': "Income Statement", 'url': "/settings/defaultAccounts",
                    },
                    {
                        'title': "Cash Flow", 'url': "/settings/chartofaccounts",
                    }

                ]
            },

        ]
    },


    {
        'title': "Voucher",
        'icon': <MdEditDocument size={size}/>,
        'hasItems': true,
        'url': '/voucher',
        'items': [
            {
                'title': "main - forms", 'items': [
                    {
                        'title': "Voucher List", 'url': "/voucher"
                    },
                    {
                        'title': "Sales", 'url': "/settings/general"
                    }, {
                        'title': "Purchases", 'url': "/settings/storedetails"
                    },
                    {
                        'title': "Payments", 'url': "/settings/accountgroup",
                    },
                    {
                        'title': "Receipt", 'url': "/settings/accountgroup",
                    },
                ]
            },
            {
                'title': "accounting - forms", 'items': [
                    {
                        'title': "Contra", 'url': "/settings/defaultAccounts",
                    },
                    {
                        'title': "Journal", 'url': "/settings/chartofaccounts",
                    },
                    {
                        'title': "Credit Note", 'url': "/settings/chartofaccounts",
                    },
                    {
                        'title': "Debit Note", 'url': "/settings/chartofaccounts",
                    },

                ]
            },

        ]
    }];
export const configurationlist = [

    {
        'title': "Settings", 'icon': <MdSettings size={size}/>, 'hasItems': true, 'url': "/settings",
        'items': [
            {
                'title': "main", 'items': [
                    {
                        'title': "General", 'url': "/settings/general"
                    }, {
                        'title': "Store details", 'url': "/settings/storedetails"
                    }, {
                        'title': "Members", 'url': "/settings/members"
                    },
                    {
                        'title': "Import-Export", 'url': "/settings/importExport"
                    },
                ]
            },
            {
                'title': "configuration", 'items': [
                    {
                        'title': "Default Accounts", 'url': "/settings/defaultAccounts",
                    },
                    {
                        'title': "Transfers", 'url': "/settings/transfers",
                    },
                    {
                        'title': "Chart of Account", 'url': "/settings/chartofaccount",
                    },
                    {
                        'title': "Account Group", 'url': "/settings/accountgroups",
                    },

                ]
            },

        ]
    },
];